---
id: applications-mulesoft-restapi
title: Mulesoft Anypoint
---

## Vue d'ensemble

MuleSoft offre une plateforme d'intégration la plus utilisée pour connecter les applications SaaS et d'entreprise dans le cloud et/ou on-prem.

Le Plugin Centreon associé permet d'interroger l'API Rest de Mulesoft Anypoint afin d'en récupérer le statut.

## Contenu du Plugin-Pack

### Objets supervisés

* Applications
* Serveurs
* Clusters

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

Pas de règle de découverte d'hôte.

<!--Services-->

| Rule name                         | Description                                             |
| :-------------------------------- | :------------------------------------------------------ |
| App-Mulesoft-Restapi-Applications | Discover Anypoint applications and monitor their status |
| App-Mulesoft-Restapi-Servers      | Discover Anypoint servers and monitor their status      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle de l'API Rest Mulesoft: https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/

<!--DOCUSAURUS_CODE_TABS-->
<!--Traffic-->

| Nom de la métrique  | Description                                                     	                      |
| :------------------ | :-------------------------------------------------------------------------------------------- |
| id                  | Identifier of an application. Unit: integer                                                   |
| lastReportedStatus  | The status that the Runtime Manager tries to apply to the artifact in that sever Unit: string |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges API

Un compte de service est requis pour interroger l'API Mulesoft. Celui-ci doit avoir les privilèges adéquates dans l'environnement et l'organisation ciblées.
Ce compte doit également être en mesure d'accéder aux Applications, Serveurs et Clusters de l'environnement et de l'organisation en question.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/VPN:

```bash
yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch
```

2. Dans l'interface Centreon, installer le Plugin-Pack 'Mulesoft Anypoint' depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources AWS/VPN:

```bash
yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch
```

2. Installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-mulesoft-restapi.noarch
```

3. Dans l'interface Web de Centreon, installer le Plugin-Pack 'Mulesoft Anypoint' depuis la page "Configuration > Plugin packs > Manager"


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

 Ce Plugin-Pack est concçu de manière à avoir dans Centreon un hôte par environnement/organisation
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle "App-Mulesoft-Restapi-custom". Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name        | Description                                                    |
| :---------- | :---------- | :------------------------------------------------------------- |
| X           | ENVID       | Mulesoft Environment ID fetched from the Mulesoft Web console  |
| X           | ORGID       | Mulesoft Organization ID fetched from the Mulesoft Web console |
| X           | APIUSERNAME | API username                                                   |
| X           | APIPASSWORD | API password ('password' type should be ticked)                |


## FAQ

### Comment tester un contrôle en ligne de commande et que signifient les options principales ?

A partir du moment ou le Plugin est installé, vous pouvez tester celui-ci directement depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

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
Cette application appartient à l'environnement *1234abc-56de-78fg-90hi-1234abcdefg* de l'organisation *234abcd-56ef-78fg-90hi-1234abcdefg* ```---environment-id='1234abc-56de-78fg-90hi-1234abcdefg' --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg'```). 

Cette commande déclenche un WARNING si le statut de l'application contient le mot *STOPPED* (```--warning-status='%{status} =~ /STOPPED/'```) et un CRITICAL s'il contient le mot *FAILED* (```--critical-status='%{status} =~ /FAILED/'```).


Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl --plugin=apps::mulesoft::restapi::plugin --mode=applications --help```

### Comment puis-je supprimer les perfdatas *count* dans le cas où je ne souhaite vérifier qu'une seule application ?

Le Plugin permet de filtrer sur un ou plusieurs éléments mais permet également de récupérer l'ensemble des éléments si aucun filtre n'est spécifié.
De ce fait, des perfdatas "globales" sur les statistiques des objets sont ajoutées par défaut. Il est possible de supprimer ces données de performance en appliquant le filtre suivant: ```--filter-perfdata='^$'```.
