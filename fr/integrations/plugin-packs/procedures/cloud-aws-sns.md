---
id: cloud-aws-sns
title: Amazon SNS
---

## Vue d'ensemble

Amazon Simple Notification Service (SNS) est un service de messagerie pub/sub hautement disponible, sécurisé et entièrement géré 
qui vous permet de découpler et mettre à l'échelle des microservices, des systèmes décentralisés et des applications sans serveur.

Aucun frais n'est facturé pour les métriques Amazon SNS présentées dans CloudWatch. Elles sont fournies dans le cadre du service Amazon SNS.

Le Plugin Centreon Amazon SNS s'appuie sur les APIs Amazon Cloudwatch pour la collecte des données et métriques relatives au service SNS. 

## Contenu du Plugin-Pack

### Objets supervisés

* Notifications par "topic" SNS

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                         | Description                                                                 |
|:----------------------------------|:----------------------------------------------------------------------------|
| Cloud-Aws-Sns-Topic-Notifications | Discover Amazon SNS topics and monitor the related notifications statistics |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

Plus de détails sur les métriques présentées ci-après sont disponibles sur la documentation officielle du service SNS:
https://docs.aws.amazon.com/fr_fr/sns/latest/dg/sns-monitoring-using-cloudwatch.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Sns-Topic-Notifications-->

| Metric name                       | Description                                                                                         |
|:----------------------------------|:----------------------------------------------------------------------------------------------------|
| sns.notifications.published.count | The number of messages published to your Amazon SNS topics.                                         |
| sns.notifications.delivered.count | The number of messages successfully delivered from your Amazon SNS topics to subscribing endpoints. |
| sns.notifications.failed.count    | The number of messages that Amazon SNS failed to deliver.                                           |
| sns.notifications.filtered.count  | The number of messages that were rejected by subscription filter policies.                          |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Un compte de service (paire d'identifiants *access/secret keys*) est nécessaire afin de pouvoir superviser les resources Amazon SNS.
Ce compte doit bénéficier des privilèges suivants:

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| sns:ListTopics                 | Returns a list of the requester's topics.            |
| cloudwatch:listMetrics         | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli*, soit le SDK perl Paws. Le SDK est recommandé car plus performant. 

**Attention** il n'est pas possible d'utiliser perl-Paws si la connexion s'effectue au travers d'un proxy.

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

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SNS:

```bash
yum install centreon-plugin-Cloud-Aws-Sns-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon SNS* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SNS:

```bash
yum install centreon-plugin-Cloud-Aws-Sns-Api
```

2.Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Amazon SNS*:

```bash
yum install centreon-pack-cloud-aws-sns.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon SNS* depuis la page "Configuration > Plugin packs > Manager"


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un Hôte à Centreon et appliquez-lui le Modèle d'Hôte *Cloud-Aws-Sns-custom*.
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

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en vous connectant
avec l'utilisateur *centreon-engine* 
(certaines options comme ```--proxyurl``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_aws_sns_api.pl \
    --plugin=cloud::aws::sns::plugin \
    --mode=notifications \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --statistic=sum \
    --timeframe='600' \
    --period='60' \
    --topic-name='my_sns_topic_1' \
    --filter-metric='NumberOfNotificationsFailed' \
    --warning-notifications-failed=0 \
    --critical-notifications-failed=5 \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: 'my_sns_topic_1' Statistic 'Sum' number of notifications failed: 0 | 'my_sns_topic_1~sum#sns.notifications.failed.count'=0;;;;
Notifications for topic 'my_sns_topic_1' :
    Statistic 'Sum' number of notifications failed: 0 
```


La commande ci-dessus collecte les statistiques de notification du 'topic' nommé *my_sns_topic_1* (```--mode=notifications --topic-name='my_sns_topic_1'```).
Cette ressource SNS est hébergée dans la région AWS *eu-west-1* (```--region='eu-west-1'```). La connexion à l'API Cloudwatch s'effectue
à l'aide des identifiants *aws-secret-key* et *aws-access-key* préalablement configurés sur la console AWS (```--aws-secret-key='****' --aws-access-key='****'```).
Les métriques retournées seront une somme de valeurs (```--statistic='sum'```) sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```) 
avec un point par minute / 60 secondes (```--period='60'```).
Dans l'exemple ci-dessus, on choisit de ne récupérer que les statistiques sur le nombre de notifications *failed* (```--filter-metric='NumberOfNotificationsFailed'```).

Une alarme WARNING sera déclenchée si au moins une notification est reportée comme *failed* (```--warning-notifications-failed=0```)
et une alarme CRITICAL au delà  de 5 notifications ayant ce statut (```--critical-notifications-failed=5```).

La liste de toutes les métriques, seuils associés et options complémentaires peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_sns_api.pl --plugin=cloud::aws::sns::plugin --mode=notifications --help
```


### J'obtiens le message d'erreur suivant:  


#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro **EXTRAOPTIONS** du *Service* en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.


#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]```

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a pas les droits suffisants pour réaliser une opération donnée.


#### ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API AWS Cloudwatch.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,
il est nécessaire de le préciser dans la commande en utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.