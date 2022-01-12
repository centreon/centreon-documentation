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
| account.alerts.minor.count | Number of alerts minor.  |
| account.alerts.major.count | Number of alerts major.  |

<!--Licenses-->

| Metric Name                | Description                            |
| :------------------------- | :------------------------------------- |
| licenses.usage.count       | Number of licenses usage.              |
| licenses.free.count        | Number of licenses free.               |
| licenses.usage.percentage  | Percentage of licenses usage. Unit : % |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Un compte de service est requis pour interroger l'API Cisco SSMS. Celui-ci doit avoir suffisamment de privilèges en lecture du compte ciblées.
Plus d'information sont disponible dans la documentation officielle de Cisco SSMS : https://www.cisco.com/c/dam/en_us/buy/smart-accounts/smart-software-manager-satellite-enhanced-edition-6-2-0-user-guide.pdf

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

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par compte.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Cisco-Ssms-Restapi-custom*. Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name                    | Description                                                               |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | APIPORT                | Port used. Default is 8443                                                 |
| X           | APIPROTO               | Protocol used. Default is https                                            |
| X           | CLIENTID               | Client ID to access to the API.                                            |
| X           | CLIENTSECRET           | Client Secret to access to the API.                                        |
|             | APIEXTRAOPTIONS        | Any extra option you may want to add to the command                        |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

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

La commande ci-dessus contrôle le statut des licences Cisco SSMS (```--mode=licences```) nommées *mylicence* (```--filter-licences-name='mylicence'```).
Cette licence appartient au compte *1234abc-56de-78fg-90hi-1234abcdefg* (```--account='1234abc-56de-78fg-90hi-1234abcdefg'```). 

Cette commande déclenchera une alarme CRITICAL si le statut de la licence est différent de *in compliance* (```--critical-license-status='%{status} !~ /in compliance/i'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins//centreon_cisco_ssms_restapi.pl --plugin=apps::cisco::ssms::restapi::plugin 
--mode=licences --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to api.ssms.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to api.ssms.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API Cisco SSMS (*api.ssms.com*).

La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *api.ssms.com* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

### Comment puis-je supprimer les perfdatas *count* dans le cas où je ne souhaite vérifier qu'une seule application ?

Le Plugin permet de filtrer sur un ou plusieurs éléments mais permet également de récupérer l'ensemble des éléments si aucun filtre n'est spécifié.
De ce fait, des perfdatas "globales" sur les statistiques des objets sont ajoutées par défaut. Il est possible de supprimer ces données de performance en appliquant le filtre suivant: ```--filter-perfdata='^$'```.
