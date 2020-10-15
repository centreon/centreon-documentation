---
id: applications-vernemq-restapi
title: VerneMQ Restapi
---

## Vue d'ensemble

VerneMQ est un gestionnaire MQTT évolutif et open source qui connecte l'IdO, le M2M, le mobile et les applications web.
Le Plugin-Pack VerneMQ, supervise les Clusters, Listeners, Plugins et sessions en utilisant l'API Rest.

## Contenu du Plugin-Pack

### Objets supervisés

* VerneMQ incluant les Clusters, les Listeners, les Plugins, les sessions.

### Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle 
de VerneMQ : https://docs.vernemq.com/monitoring/introduction

<!--DOCUSAURUS_CODE_TABS-->

<!--Clusters-->

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| status                           | Status of clusters                  |       |
| clusters.running.count           | Number of clusters running          | count |
| clusters.notrunning.count        | Number of cluster not running       | count |

<!--Listeners-->

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| status                           | Status of listeners                 |       |
| listeners.running.count          | Number of listeners running         | count |
| listeners.notrunning.count       | Number of listeners not running     | count |

<!--Plugins-->

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| plugins.total.count              | Total number of plugins             | count |

<!--Sessions-->

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| sessions.online.count            | Number of sessions online           | count |
| sessions.total.count             | Total number of sessions            | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Un certain nombre de distributions fournissent VerneMQ, y compris des paquets binaires pré-construits.
Le support de ces compilations, s'il y en a, est fourni par le fournisseur de la distribution associée.
Leur cycle de publication peut être en retard par rapport aux versions sources de VerneMQ.

De plus amples informations sont disponibles sur la documentation officielle du VerneMQ : https://docs.vernemq.com/getting-started

L'API HTTP de VerneMQ est activée par défaut et installe un gestionnaire HTTP sur `http://myvernemq.com:8888/api/v1`.
L'utilisateur de centreon-engine effectue une connexion à ce système.
Sur le serveur VerneMQ, vous devez avoir généré un Token avec la commande suivante :

```bash
$ vmq-admin api-key create
```

Plus d'informations sur l'API HTTP de VerneMQ sur : https://docs.vernemq.com/administration/http-administration#managing-api-keys

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources VerneMQ :

```bash
yum install centreon-plugin-Applications-Vernemq-Restapi.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *VerneMQ Restapi* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources VerneMQ :

```bash
yum install centreon-plugin-Applications-Vernemq-Restapi.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-vernemq-restapi.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *VerneMQ Restapi* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par environnement VerneMQ
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Vernemq-Restapi-custom*.
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name             | Description                                         |
| :---------- | :--------------- | :-------------------------------------------------- |
| X           | APIPORT          | Port used. Default is 8888                          |          
| X           | APIPROTO         | Protocol used. Default is http                      |
| X           | APIKEY           | VerneMQ API Token                                   |
|             | APIEXTRAOPTIONS  | Any extra option you may want to add to the command |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*

```bash
/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl \
	--plugin=apps::mq::vernemq::restapi::plugin \
	--mode='sessions' \
	--hostname='myvernemq.com' \
	--port='8888' \
	--proto='http' \
	--api-key='12342939495003' \
	--warning-total='15' \
	--critical-total='20' \
	--verbose
	
OK: Sessions current online: 14, current total: 14 
| 'sessions.online.count'=14;;;0; 'sessions.total.count'=14;;;15;20
```

La commande ci-dessus contrôle les sessions de VerneMQ via la Restapi (```--mode=sessions```).
Le Plugin utilise l'_api-key_ qui correspond au Token VerneMQ (```--api-key='12342939495003'```)
et il se connecte à l'hôte _myvernemq.com_ (```--hostname='myvernemq.com'```) 
sur le port _8888_ (```--port='8888'```) utilisant le protocol _http_ (```--proto='http'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_vernemq_restapi.pl 
	--plugin=apps::mq::vernemq::restapi::plugin \
	--mode='plugins' \
	--help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to myvernemq.com:8888 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to myvernemq.com:8888 |```.
Cela signifie que Centreon n'a pas réussi à se connecter à l'API VerneMQ (*myvernemq.com*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *myvernemq.com* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *curl* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.
