---
id: cloud-aws-sqs
title: Amazon SQS
---

## Vue d'ensemble

La solution Amazon Simple Queue Service (SQS) est un service de file d'attente de messagerie entièrement géré 
qui vous permet de découpler et mettre à l'échelle des microservices, des systèmes décentralisés et des applications sans serveur.

Les métriques Amazon SQS rapportées dans CloudWatch ne sont pas facturées. Elles sont fournies dans le cadre du service Amazon SQS.

Le Plugin Centreon Amazon SQS s'appuie sur les APIs Amazon Cloudwatch pour la collecte des données et métriques relatives au service SQS. 

## Contenu du Plugin-Pack

### Objets supervisés

* SQS Message queues (les types "standard" et "FiFo" sont tout deux supportées)

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name            | Description                                                             |
|:---------------------|:------------------------------------------------------------------------|
| Cloud-Aws-Sqs-Queues | Discover Amazon SQS queues and monitor their status and related metrics |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

Plus de détails sur les métriques présentées ci-après sont disponibles sur la documentation officielle du service SQS:
https://docs.aws.amazon.com/fr_fr/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-monitoring-using-cloudwatch.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Sqs-Queues-->

| Metric name                         | Description                                                                                     | Unit |
|:------------------------------------|:------------------------------------------------------------------------------------------------|:-----|
| sqs.queue.messages.oldest.seconds   | The approximate age of the oldest non-deleted message in the queue.                             | s    |
| sqs.queue.messages.delayed.count    | The number of messages in the queue that are delayed and not available for reading immediately. |      |
| sqs.queue.messages.notvisible.count | The number of messages that are in flight.                                                      |      |
| sqs.queue.messages.visible.count    | The number of messages available for retrieval from the queue.                                  |      |
| sqs.queue.messages.empty.count      | The number of ReceiveMessage API calls that did not return a message.                           |      |
| sqs.queue.messages.deleted.count    | The number of messages deleted from the queue.                                                  |      |
| sqs.queue.messages.received.count   | The number of messages returned by calls to the ReceiveMessage action.                          |      |
| sqs.queue.messages.sent.count       | The number of messages added to a queue.                                                        |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Un compte de service (paire d'identifiants *access/secret keys*) est nécessaire afin de pouvoir superviser les resources Amazon SQS.
Ce compte doit bénéficier des privilèges suivants:

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| sqs:ListQueues                 | Returns a list of your queues in the current region. |
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

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SQS:

```bash
yum install centreon-plugin-Cloud-Aws-Sqs-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon SQS* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SQS:

```bash
yum install centreon-plugin-Cloud-Aws-Sqs-Api
```

2.Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *Amazon SQS*:

```bash
yum install centreon-pack-cloud-aws-sqs.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Amazon SQS* depuis la page "Configuration > Plugin packs > Manager"


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon et appliquez-lui le Modèle d'Hôte *Cloud-Aws-Sqs-custom*.
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

### Services

Une fois l'hôte créé et sauvegardé dans Centreon, un service "Sqs-Queues" est créé et associé à l'Hôte. 
Ce service est "générique"; afin que celui-ci puisse commencer à remonter des informations, il vous sera nécessaire de 
spécifier le nom de la *queue* SQS à superviser sur la Macro de Service **QUEUENAME** (le nom du Service peut également être modifié en conséquence).
Ce service peut ensuite être dupliqué et la valeur de la Macro ajustée pour chaque *queue* à superviser.


## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en vous connectant
avec l'utilisateur *centreon-engine* 
(certaines options comme ```--proxyurl``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_aws_sqs_api.pl \
    --plugin=cloud::aws::sqs::plugin \
    --mode=queues \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --statistic=average \
    --timeframe='600' \
    --period='60' \
    --queue-name='my_sqs_queue_1' \
    --filter-metric='NumberOfMessagesSent|NumberOfMessagesReceived' \
    --critical-messages-sent=1: \
    --critical-messages-received=1: \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: 'my_sqs_queue_1' Statistic 'Average' number of messages sent: 45, number of 
messages received: 32 | 'my_sqs_queue_1~average#sqs.queue.messages.sent.count'=45;;1:;; 'my_sqs_queue_1~average#sqs.queue.messages.received.count'=32;;1:;;
SQS Queue'my_sqs_queue_1'
    Statistic 'Average' number of messages sent: 45, number of messages received: 32  
```


La commande ci-dessus collecte les métriques de la 'queue' nommée *my_sqs_queue_1* (```--mode=queues --queue-name='my_sqs_queue_1'```).
Cette ressource SQS est hébergée dans la région AWS *eu-west-1* (```--region='eu-west-1'```). La connexion à l'API Cloudwatch s'effectue
à l'aide des identifiants *aws-secret-key* et *aws-access-key* préalablement configurés sur la console AWS (```--aws-secret-key='****' --aws-access-key='****'```).
Les métriques retournées seront une moyenne de valeurs (```--statistic='average'```) sur un intervalle de 10 minutes / 600 secondes  (```--timeframe='600'```) 
avec un point par minute / 60 secondes (```--period='60'```).
Dans l'exemple ci-dessus, on choisit de ne récupérer que les statistiques sur le nombre de messages *sent* et *received* (```--filter-metric='NumberOfMessagesSent|NumberOfMessagesReceived'```).

Une alarme CRITICAL sera déclenchée si aucun message (*nombre inférieur à 1*) n'a été envoyé ou reçu durant la période de temps sur lesquelles sont calculées les valeurs
(```--critical-messages-sent=1: --critical-messages-received=1:```).

La liste de toutes les métriques, seuils associés et options complémentaires peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_sqs_api.pl --plugin=cloud::aws::sqs::plugin --mode=queues --help
```


#### J'obtiens le message d'erreur suivant:  


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