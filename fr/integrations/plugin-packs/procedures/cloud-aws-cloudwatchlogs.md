---
id: cloud-aws-cloudwatchlogs
title: Amazon CloudWatch Logs
---

## Vue d'ensemble

CloudWatch Logs vous permet de centraliser les journaux de tous vos systèmes ainsi que les 
applications et les services AWSque vous utilisez au sein d’un seul service hautement évolutif. 
Vous pouvez ensuite facilement les consulter, y effectuer des recherches pour identifier des 
codes d’erreur spécifiques ou des modèles, les filtrer en fonction de champs spécifiques ou 
les archiver en toute sécurité à des fins d’analyse ultérieure.

> **Attention** Ce Plugin est susceptible de générer un volume importants de données lors des requêtes API.
> Il est indispensable d'utiliser les fonctionnalités de filtrage de celui-ci (```--group-name``` and ```--stream-name```) afin
> de limiter les résultats retournés par l'API.


## Contenu du Plugin-Pack

### Objets supervisés

* Groupes de Logs et Stream associés 

### Données collectées

<!--DOCUSAURUS_CODE_TABS-->
<!--Get-Logs-->

| Metric name | Description                                                                                                               |
|:------------|:--------------------------------------------------------------------------------------------------------------------------|
| Logs        | Refer to any log entry that match filters. Threshold are String on top of %{message}, %{stream\_name}, %{since} variables |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des *access/secret keys* utilisées pour pouvoir implémenter 
la supervision Amazon CloudWatch Logs: 

| AWS Privilege                    | Description                                                                     |
| :------------------------------- | :------------------------------------------------------------------------------ |
| CloudWatchLogs:DescribeLogGroups | Returns information about LogGroups that meet the specified filter criteria.    |

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

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource Amazon CloudWatch Logs:

```bash
yum install centreon-plugin-Cloud-Aws-CloudWatchLogs-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon CloudWatch Logs* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource Amazon CloudWatch Logs:

```bash
yum install centreon-plugin-Cloud-Aws-CloudWatchLogs-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Amazon CloudWatch Logs*:

```bash
yum install centreon-pack-cloud-aws-cloudwatchlogs
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon CloudWatch Logs* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un Hôte à Centreon et appliquez-lui le Modèle d'Hôte *Cloud-Aws-CloudWatchLogs*.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) doivent être renseignées:

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it unless you know what you are doing              |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* 
(certaines options comme ```--proxyurl``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_aws_cloudwatchlogs_api.pl \
 --plugin=cloud::aws::cloudwatchlogs::plugin \
 --mode=get-logs \
 --custommode='awscli' \
 --aws-secret-key='****' \
 --aws-access-key='****' \
 --proxyurl='' \
 --region='eu-west-1' \
 --group-name='/aws/lambda/MyLambda_LogGroup' \
 --stream-name='' \
 --start-time-since='3000' \
 --unknown-status='' \
 --warning-status='' \
 --critical-status='%{message} =~ /region/i' \
 --verbose
```

La commande retourne le message de sortie ci-dessous:

```bash 	
CRITICAL: 10 problem(s) detected | 'logs'=10;;;0;
critical: log [created: 5m 11s] [stream: 2020/07/21/[$LATEST]57eb66feaf4aa7bc46gr0e91aeac2b99] [message: [INFO] 2020-07-21T14:35:31.591Z    edcea75a-41ceaa-43ae0-8fa6-1cfea0d0dc  Set REGION: eu-west-1 -- ]
[...]
critical: log [created: 10m 11s] [stream: 2020/07/21/[$LATEST]57eb66eac4cea0e91ce2b99] [message: [INFO]    2020-07-21T14:30:31.767Z    8a62ac5e-d6dd-44Da-b23e-bce42fef3  Set REGION: eu-west-1 -- ]
```

Cette commande supervise les *logs* (```--mode=get-logs```) Amazon CloudWatch grâce à une paire d'identifiants *aws-secret-key* et *aws-access-key* (```--aws-secret-key='****' --aws-access-key='****'```). 
Les logs retournés ici sont uniquement ceux inclus dans le groupe *MyLambda_LogGroup* (```--group-name='/aws/lambda/MyLambda_LogGroup'```) tel que défini dans la console AWS.

Une alerte CRITICAL sera déclenchée si des *logs* contenant la chaîne 'region' sont présents dans le contenu de la ligne de log (```'%{message} =~ /region/i'```).

La liste de tous les filtres et seuils disponibles peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_cloudwatchlogs_api.pl --plugin=cloud::aws::cloudwatchlogs::plugin --mode=get-logs --help
```

### J'obtiens le message d'erreur suivant:  

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]```

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a pas les droits suffisants pour réaliser une opération donnée.

#### ```UNKNOWN: 500 Can't connect to monitoring.us-east-1.amazonaws.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to monitoring.us-east-1.amazonaws.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API AWS CloudWatch.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,
il est nécessaire de le préciser dans la commande en utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.