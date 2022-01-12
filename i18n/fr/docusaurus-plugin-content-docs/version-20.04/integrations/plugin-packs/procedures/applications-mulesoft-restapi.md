---
id: applications-mulesoft-restapi
title: Mulesoft Anypoint
---

## Vue d'ensemble

Mulesoft offre une plateforme d'intégration la plus utilisée pour connecter les applications SaaS et d'entreprise dans le cloud et/ou on-prem.

Le Plugin Centreon associé permet d'interroger l'API Rest de Mulesoft Anypoint afin de récupérer le statut de diverses ressources Mulesoft.

## Contenu du Plugin-Pack

### Objets supervisés

* Applications
* Serveurs
* Clusters
* Messages des queues MQ

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                | Description                                                        |
| :--------------------------------------- | :----------------------------------------------------------------- |
| App-Mulesoft-Restapi-Application-Name    | Discover Anypoint applications and monitor their status            |
| App-Mulesoft-Restapi-Server-Name         | Discover Anypoint servers and monitor their status                 |
| App-Mulesoft-Restapi-Queue-Messages-Name | Discover Anypoint MQ queues and monitor the related messages count |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle de 
l'API Rest Mulesoft: https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/

<!--DOCUSAURUS_CODE_TABS-->

<!--Applications-->

| Metric name                                | Description                        |
| :----------------------------------------- | :--------------------------------- |
| status                                     | Current status of each application |
| mulesoft.applications.total.count          | Total number of applications       |
| mulesoft.applications.status.started.count | Number of started applications     |
| mulesoft.applications.status.stopped.count | Number of stopped applications     |
| mulesoft.applications.status.failed.count  | Number of failed applications      |

<!--Clusters-->

| Metric name                                 | Description                     |
| :------------------------------------------ | :------------------------------ |
| status                                      | Current status of each cluster  |
| mulesoft.clusters.total.count               | Total number of clusters        |
| mulesoft.clusters.status.running.count      | Number of running clusters      |
| mulesoft.clusters.status.disconnected.count | Number of disconnected clusters |

<!--Messages-->

| Metric name                      | Description                                  |
| :------------------------------- | :------------------------------------------- |
| mulesoft.mq.messages.total.count | Total number of messages in the queue        |
| mulesoft.mq.inflight.count       | Number of inflight messages in the queue     |
| mulesoft.mq.received.count       | Number of received messages in the queue     |
| mulesoft.mq.sent.count           | Number of sent messages in the queue         |
| mulesoft.mq.visible.count        | Number of visible messages in the queue      |
| mulesoft.mq.acked.count          | Number of acknowledged messages in the queue |

<!--Servers-->

| Metric name                                | Description                    |
| :----------------------------------------- | :----------------------------- |
| status                                     | Current status of each server  |
| mulesoft.servers.total.count               | Total number of servers        |
| mulesoft.servers.status.running.count      | Number of running servers      |
| mulesoft.servers.status.disconnected.count | Number of disconnected servers |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges API

Un compte de service est requis pour interroger l'API Mulesoft. Celui-ci doit avoir suffisamment de privilèges en lecture dans l'environnement 
et l'organisation Anypoint ciblées.
Ce compte doit également être en mesure d'accéder aux Applications, Serveurs, Clusters et services MQ de l'environnement 
et de l'organisation en question.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Mulesoft Anypoint :

```bash
yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Mulesoft Anypoint* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Mulesoft Anypoint :

```bash
yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-mulesoft-restapi.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Mulesoft Anypoint* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

 Ce Plugin-Pack est concçu de manière à avoir dans Centreon un hôte par environnement/organisation
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Mulesoft-Restapi-custom*. Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name        | Description                                                       |
| :-------- | :---------- | :---------------------------------------------------------------- |
| X         | ENVID       | Mulesoft Environment ID fetched from the Mulesoft Web console     |
| X         | ORGID       | Mulesoft Organization ID fetched from the Mulesoft Web console    |
| (X)       | REGIONID    | Mulesoft MQ region ID to use (only mandatory for *messages* mode) |
| X         | APIUSERNAME | API username                                                      |
| X         | APIPASSWORD | API password (*password* type should be ticked)                   |

## FAQ

### Comment tester un contrôle en ligne de commandes et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commandes depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl \
    --plugin=apps::mulesoft::restapi::plugin \
	--mode=applications \
	--environment-id='1234abc-56de-78fg-90hi-1234abcdefg' \
	--organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg' \
	--api-username='myapiuser' \
	--api-password='myapipassword' \
	--filter-name='myapplication1' \
	--warning-status='%{status} =~ /STOPPED/' \
	--critical-status='%{status} =~ /FAILED/' \
	--verbose
	

OK: Total applications Total : 1, Started : 1, Stopped : 0, Failed : 0 - Application 'myapplication1' Id: 123456, Status: STARTED |
'mulesoft.applications.total.count'=1;;;0; 'mulesoft.applications.status.started.count'=1;;;0; 'mulesoft.applications.status.stopped.count'=0;;;0; 'mulesoft.applications.status.failed.count'=0;;;0;
Application 'myapplication1' Id: 123456, Status: STARTED

```

La commande ci-dessus contrôle le statut d'une application Mulesoft (```--mode=applications```) nommée *myapplication1* (```--filter-name='myapplication1'```).
The command above gets the status of a Mulesoft application (```--mode=applications```) named *myapplication1* (```--filter-name='myapplication1'```). 
Cette application appartient à l'environnement *1234abc-56de-78fg-90hi-1234abcdefg* de l'organisation *234abcd-56ef-78fg-90hi-1234abcdefg* 
```---environment-id='1234abc-56de-78fg-90hi-1234abcdefg' --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg'```). 

Cette commande déclenchera une alarme WARNING si le statut de l'application contient le mot *STOPPED* (```--warning-status='%{status} =~ /STOPPED/'```) 
et une alarme CRITICAL s'il contient le mot *FAILED* (```--critical-status='%{status} =~ /FAILED/'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl --plugin=apps::mulesoft::restapi::plugin --mode=applications --help```

### Comment puis-je supprimer les perfdatas *count* dans le cas où je ne souhaite vérifier qu'une seule application ?

Le Plugin permet de filtrer sur un ou plusieurs éléments mais permet également de récupérer l'ensemble des éléments si aucun filtre n'est spécifié.
De ce fait, des perfdatas "globales" sur les statistiques des objets sont ajoutées par défaut. Il est possible de supprimer ces données de performance en appliquant le filtre suivant: ```--filter-perfdata='^$'```.