---
id: applications-cisco-ssms-restapi
title: Cisco SSMS
---

## Vue d'ensemble

Cisco Smart Software Manager On-Prem (anciennement connu sous le nom de Cisco Smart Software Manager satellite) est un composant de Cisco Smart Licensing
qui fonctionne en conjonction avec Cisco Smart Software Manager (SSM). 
Il offre une visibilité et des rapports sur les licences Cisco que vous achetez et consommez,
tout en donnant aux organisations sensibles à la sécurité un moyen d'accéder à un sous-ensemble de fonctionnalités de Cisco SSM
sans utiliser de connexion Internet directe pour gérer leur base d'installation.

## Contenu du Plugin-Pack

### Objets supervisés

* Applications
* Serveurs
* Licences
* Alertes

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric Name                | Description              |
| :------------------------- | :------------------------|
| account.alerts.minor.count | Counter of alerts minor. |
| account.alerts.major.count | Counter of alerts major. |

<!--Licenses-->

| Metric Name                | Description                                        |
| :------------------------- | :------------------------------------------------- |
| licenses.usage.count       | Counter of licenses usage. Unit : Bytes (B)        |
| licenses.free.count        | Counter of licenses free. Unit : Bytes (B)         |
| licenses.usage.percentage  | Percentage of licenses usage. Unit : percentage(%) |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis


Un compte de service est requis pour interroger l'API Cisco SSMS. Celui-ci doit avoir suffisamment de privilèges en lecture du compte ciblées.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Cisco SSMS :

```bash
yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco SSSM* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Cisco SSMS :

```bash
yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-cisco-ssms-restapi.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco SSMS* depuis la page "Configuration > Plugin packs > Manager"


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

Ce Plugin-Pack est concçu de manière à avoir dans Centreon un hôte par compte
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Cisco-Ssms-Restapi-custom*. Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Nom                    | Description                                                                |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | APIPORT                | Port used. Default is 443                                                  |
| X           | APIPROTO               | Protocol used. Default is https                                            |
| X           | CLIENTID               | Client ID to access to the API.                                            |
| X           | CLIENTSECRET           | Client Secret to access to the API.                                        |
|             | APIEXTRAOPTIONS        | Any extra option you may want to add to the command                        |


## FAQ

### Comment tester un contrôle en ligne de commandes et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commandes depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_cisco_ssms_restapi.pl \
    --plugin=apps::cisco::ssms::restapi::plugin \
	--mode=licenses \
	--hostname='myipaddress' \
	--client-id='myapiclientid' \
	--client-secret='myapiclientsecret' \
	--account='1234abc-56de-78fg-90hi-1234abcdefg' \
	--filter-counters='status' \
	--filter-license-name='mylicence'
	--critical-license-status='%{status} !~ /in compliance/i' \
	--verbose
```

La commande ci-dessus contrôle le statut  des licences Cisco SSMS (```--mode=licences```) nommée *mylicence* (```--filter-licences-name='mylicence'```).
Cette licence appartient au compte *1234abc-56de-78fg-90hi-1234abcdefg* (```--account='1234abc-56de-78fg-90hi-1234abcdefg'```). 

Cette commande déclenchera une alarme CRITICAL s'il contient le mot *in compliance*  (```--critical-license-status='%{status} !~ /in compliance/i'```).


Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```/usr/lib/centreon/plugins/centreon_cisco_ssms_restapi.pl --plugin=apps::cisco::ssms::restapi::plugin --mode=licences --help```


### Comment puis-je supprimer les perfdatas *count* dans le cas où je ne souhaite vérifier qu'une seule application ?

Le Plugin permet de filtrer sur un ou plusieurs éléments mais permet également de récupérer l'ensemble des éléments si aucun filtre n'est spécifié.
De ce fait, des perfdatas "globales" sur les statistiques des objets sont ajoutées par défaut. Il est possible de supprimer ces données de performance en appliquant le filtre suivant: ```--filter-perfdata='^$'```.
