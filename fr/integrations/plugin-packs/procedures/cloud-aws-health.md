---
id: cloud-aws-health
title: AWS Health
---

## Vue d'ensemble

AWS Health fournit des informations personnalisées à propos d'événements qui peuvent concerner votre infrastructure AWS, 
vous guide dans les modifications planifiées et accélère le dépannage de problèmes concernant vos ressources et comptes AWS.

Le Plugin Centreon AWS Health utilise l'API Amazon Health pour collecter les métriques associées.


## Contenu du Plugin-Pack

### Objets supervisés

* Évènements liés aux comptes AWS et ressources associées

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques supervisées

<!--DOCUSAURUS_CODE_TABS-->

<!--Events-->

| Metric name           | Description               |
|:----------------------|:--------------------------|
| events.total.count    | Total number of events    |
| events.open.count     | Number of open events     |
| events.closed.count   | Number of closed events   |
| events.upcoming.count | Number of upcoming events |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des *access/secret keys* utilisées pour pouvoir implémenter la supervision AWS Health: 

| AWS Privilege                  | Description                                                                 |
| :----------------------------- | :-------------------------------------------------------------------------- |
| health:DescribeEvents          | Returns information about events that meet the specified filter criteria.   |


L'API AWS Health nécessite un plan de support Business or Enterprise d'AWS Support. Un appel de l'API Health à partir d'un compte qui ne dispose pas d'un plan de support Business ou Enterprise entraîne une exception *SubscriptionRequiredException*.


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

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource AWS Health:

```bash
yum install centreon-plugin-Cloud-Aws-Health-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *AWS Health* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource AWS Health:

```bash
yum install centreon-plugin-Cloud-Aws-Health-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack *AWS Health*:

```bash
yum install centreon-pack-cloud-aws-health.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *AWS Health* depuis la page "Configuration > Plugin Packs > Manager"


<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

* Ajoutez un Hôte à Centreon et appliquez-lui le Modèle d'Hôte *Cloud-Aws-Health*.
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
/usr/lib/centreon/plugins/centreon_aws_health_api.pl \
	--plugin=cloud::aws::health::plugin \
	--mode=events \
	--custommode='awscli' \
	--aws-secret-key='****' \
	--aws-access-key='****' 
	--proxyurl='http://myproxy.mycompany.org:8080' \
	--filter-service='' \
	--filter-region='' \
	--filter-entity-value='' \
	--filter-event-category='issue' \
	--filter-event-status='open' \
	--warning-total='0' \
	--critical-total='1' \
	--display-affected-entities \
	--verbose 	
```


La commande retourne le message de sortie ci-dessous:

```bash 	
CRITICAL: Events total: 1 | 'events.total.count'=1;;0:0;0; 'events.open.count'=1;;;0; 'events.closed.count'=0;;;0; 'events.upcoming.count'=0;;;0;
[service: RDS][region: eu-west-1][status: open][type: AWS_RDS_HARDWARE_MAINTENANCE_SCHEDULED][start: Wed Jul 15 13:00:00 2020][affected entity: doh-sfetoto3]
```

Cette commande récupère les *events* (```--mode=events```) d'un compte d'AWS identifié par l'utilisation une paire d'identifiants *aws-secret-key* et *aws-access-key* (```--aws-secret-key='****' --aws-access-key='****'```).
Il est possible de positionner des filtres afin de personnaliser les éléments qui seront renvoyés par la commande. 
Dans l'exemple ci-dessus, on choisit de ne récupérer que les évènements catégorisés comme *issue* (```--filter-event-category='issue'```) et en statut *open* (```--filter-event-status='open'```).
L'option ```--display-affected-entities``` permet quant à elle d'afficher la référence de la ressource concernée par l'évènement.

Une alerte WARNING sera déclenchée si le nombre d'évènements renvoyés par le service est de 1 (```--warning-total='0'```) et une alerte CRITICAL à partir de 2 évènements renvoyés (```--critical-total='1'```).

La liste de tous les filtres et seuil disponibles peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aws_health_api.pl --plugin=cloud::aws::health::plugin --mode=events --help
```

### J'obtiens le message d'erreur suivant:  


#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'Amazon Cloudwatch n'a pas consolidé de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro **EXTRAOPTIONS** du *Service* en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.


#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]```

Cette erreur signifie que le rôle IAM associé au combo access-key/secret-key n'a pas les droits suffisants pour réaliser une opération donnée.


#### ```UNKNOWN: 500 Can't connect to health.us-east-1.amazonaws.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to health.us-east-1.amazonaws.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API AWS Health.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,
il est nécessaire de le préciser dans la commande en utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.

