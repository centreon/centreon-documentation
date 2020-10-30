---
id: cloud-aws-ses
title: Amazon SES
---

## Vue d'ensemble

Amazon Simple Email Service (SES) est un service de messagerie électronique
rentable, flexible et évolutif qui permet aux développeurs d'envoyer des
messages à partir de n'importe quelle application.

Les métriques Amazon SES rapportées dans CloudWatch ne sont pas facturées. Elles sont fournies dans le cadre du service Amazon SES.

Le Plugin-Pack Centreon *Amazon SES* s'appuie sur les APIs Amazon Cloudwatch pour la collecte des données et métriques relatives au service Amazon SES.

## Contenu du Plugin-Pack

### Objets supervisés

* Activité d'envoi SES

### Métriques collectées 

Plus de détails sur les métriques présentées ci-après sont disponibles sur la
documentation officielle du service Amazon SES :
https://docs.aws.amazon.com/fr_fr/ses/latest/DeveloperGuide/monitor-sending-activity.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Ses-Emails-->

| Metric name                 | Description                                                                                  
|:--------------------------- | :----------------------------------------|
| ses.emails.sent.count       | Number of sent emails                    |
| ses.emails.delivered.count  | Number of successfully delivered emails  |
| ses.emails.rejected.rate    | Rate of rejected emails                  |
| ses.emails.spam.rate        | Rate of emails marked as spam            |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilège AWS

Un compte de service (paire d'identifiants *access/secret keys*) est nécessaire
afin de pouvoir superviser les resources Amazon SES. Ce compte doit bénéficier
des privilèges suivants :

| AWS Privilege                  | Description                                             |
|:-------------------------------|:------------------------------------------------------- |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace    |


### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible
d'utiliser soit le binaire *awscli*, soit le SDK perl *Paws*. Le SDK est
recommandé car plus performant. 

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

> **Attention** il n'est pas possible pour le moment d'utiliser perl Paws si la
> connexion s'effectue au travers d'un proxy.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SES:

```bash
yum install centreon-plugin-Cloud-Aws-Ses-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon SES* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SES:

```bash
yum install centreon-plugin-Cloud-Aws-Ses-Api
```

2.Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Amazon SES*:

```bash
yum install centreon-pack-cloud-aws-ses.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon SES* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon et appliquez-lui le Modèle d'Hôte *Cloud-Aws-Ses-custom*.
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

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* (certaines options comme ```--proxyurl``` doivent être
ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_aws_ses_api.pl \
    --plugin=cloud::aws::ses::plugin \
    --mode=email \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --timeframe='600' \
    --period='60' \
    --critical-emails-spam=1: \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous : 

```bash
 OK: 'SES' Statistic 'Average' Metrics rate of rejected sent emails: 0.00, number of emails successfully delivered: 30.00, rate of sent emails marked as spam: 0.00, number of sent emails: 30.00 | 'SES~average#ses.emails.rejected.rate'=0;;;; 'SES~average#ses.emails.delivered.count'=30;;;; 'SES~average#ses.emails.spam.rate'=0;;;; 'SES~average#ses.emails.sent.count'=30;;;;
```

La commande ci-dessus collecte les métriques d'envoi d'Amazon SES
(```--mode=emails```). Cette ressource SES est hébergée dans la région AWS
*eu-west-1* (```--region='eu-west-1'```). La connexion à l'API Cloudwatch 
s'effectue à l'aide des identifiants *aws-secret-key* et *aws-access-key*
préalablement configurés sur la console AWS 
(```--aws-secret-key='****' --aws-access-key='****'```). 

Les métriques retournées seront une moyenne sur un intervalle de 
10 minutes / 600 secondes  (```--timeframe='600'```) avec un point par 
minute / 60 secondes (```--period='60'```). Dans l'exemple ci-dessus, 
on choisit de ne récupérer que les statistiques sur le nombre de messages *sent* et *received* (```--filter-metric='NumberOfMessagesSent|NumberOfMessagesReceived'```).

Une alarme CRITICAL sera déclenchée si au moins un message envoyé est marqué
comme 'spam' durant la période de temps sur lesquelles sont calculées les
valeurs (```--critical-emails-spam=1:```).

La liste de toutes les métriques, seuils associés et options complémentaires
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_ses_api.pl \
    --plugin=cloud::aws::ses::plugin \
    --mode=emails \
    --help
```

#### J'obtiens le message d'erreur suivant:  


#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No
metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro **EXTRAOPTIONS** du *Service* en
question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]```

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a
pas les droits suffisants pour réaliser une opération donnée.

#### ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant : 
```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API AWS Cloudwatch.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le 
collecteur Centreon, il est nécessaire de le préciser dans la commande en
utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.
