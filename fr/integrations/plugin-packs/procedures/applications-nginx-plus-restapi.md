---
id: applications-nginx-plus-restapi
title: Nginx Plus Restapi
---

## Vue d'ensemble

NGINX Plus est un logiciel de Load Balancer, de serveur web et de cache de contenu construit sur le NGINX open source.

Le Plugin Centreon associé permet d'interroger l'API Rest de Nginx Plus afin de récupérer le statut de diverses ressources Nginx.

## Contenu du Plugin-Pack

### Objets supervisés

* Applications
* Serveurs Web
* Load Balancer
* Cache

### Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle de 
l'API Rest Nginx Plus: https://docs.nginx.com/nginx/admin-guide/load-balancer/dynamic-configuration-api/

<!--DOCUSAURUS_CODE_TABS-->

<!--Connections-->

| Metric name                 | Description                    |
| :-------------------------- | :----------------------------- |
| connections.active.count    | Number of active connections   |
| connections.idle.count      | Number of idle connections     |
| connections.accepted.count  | Number of accepted connections |
| connections.dropped.count   | Number of dropped connections  |

<!--Http-Zone-->

| Metric name                                             | Description                                              |
| :------------------------------------------------------ | :------------------------------------------------------- |
| http.$name.zone.requests.persecond                      | Requests http-zone per second. Unit : /s                 |
| http.$name.zone.requests.discarded.count                | Number of requests http-zone discarded.                  |
| http.$name.zone.traffic.in.bitspersecond                | Traffic in of http-zone in Bytes per second. Unit : b/s  |
| http.$name.zone.traffic.out.bitspersecond               | Traffic out of http-zone in Bytes per second. Unit : b/s |
| http.$name.zone.responses.total.count                   | Number total of http-zone responses                      |
| http.$name.zone.responses.[1xx,2xx,3xx,4xx,5xx].count   | Number 1xx,2xx,3xx,4xx,5xx of http-zone responses        |

<!--Ssl-->

| Metric name                      | Description                         |
| :------------------------------- | :---------------------------------- |
| ssl.handshakes.succeeded.count   | Number of SSL Handshakes succeeded  |
| ssl.handshakes.failed.count      | Number of SSL Handshakes failed     |
| ssl.sessions.reuses.count        | Number of SSL Sessions reuses       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Un compte de service est requis pour interroger l'API Nginx Plus. Celui-ci doit avoir suffisamment de privilèges en lecture dans l'environnement.
Plus d'informations sont disponible sur la documentation officielle de Nginx : https://docs.nginx.com/nginx/admin-guide/monitoring/live-activity-monitoring/#getting-statistics-with-the-api

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Nginx Plus :

```bash
yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Nginx Plus* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Nginx Plus :

```bash
yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-nginx-plus-restapi.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Nginx Plus* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par environnement Nginx Plus
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Nginx-Plus-Restapi-custom*. Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Nginx basic username                                                       |
| X         | APIPASSWORD     | Nginx basic password.                                                      |
| X         | APIPATH         | Specify api path (Default: '/api/6')                                       |
|    	    | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl \
    --plugin=apps::nginx::nginxplus::restapi::plugin \
    --hostname=mynginxplus.com \ 
    --mode=connections \
    --port='443' \
    --proto='https' \
    --api-username='myapiuser' \
    --api-password='myapipassword' \
    --api-path='/api/6' \
    --filter-counters='mycountersfilter' \
    --warning-active='60' \
    --critical-active='80' \
    --warning-idle='8' \
    --critical-idle='10' \
    --warning-accepted='50' \
    --critical-accepted='65' \
    --warning-dropped='3' \
    --critical-dropped='5' \
    --verbose	

OK: Active : 5, Idle : 0, Accepted : 5, Dropped : 0|
'connections.active.count'=5;;60;80; 'connections.idle.count'=1;;8;10; 'connections.accepted.count'=5;;50;65; 'connections.dropped.count'=0;;3;5;
```

La commande ci-dessus contrôle les connexions de Nginx Plus (```--mode=connections```)
Il utilisde base le nom d'utilisateur Nginx  _myapiuser_ (```--api-username='myapiuser'```), comme mot de passe _myapipassword_ (```--api-password='myapipassword'```) 
et le chemin d'accès à l'URL de l'API par défaut _/api/6_ (```--api-path='/api/6'```).

Cette commande déclenchera une alarme WARNING si les connexions activent dépasse 60 (```--warning-active='60'```) 
et une alarme CRITICAL s'il dépasse 80 (```--critical-active='80'```).
Des seuils peuvent être positionnés à l'aide des options ```--warning-*``` et ```--critical-*``` sur les métriques.

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl --plugin=apps::nginx::nginxplus::restapi::plugin 
--mode=connections --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to mynginxplus.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to mynginxplus.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API Nginx Plus (*mynginxplus.com*).

La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *mynginxplus.com* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

### Comment puis-je supprimer les perfdatas *count* dans le cas où je ne souhaite vérifier qu'une seule application ?

Le Plugin permet de filtrer sur un ou plusieurs éléments mais permet également de récupérer l'ensemble des éléments si aucun filtre n'est spécifié.
De ce fait, des perfdatas "globales" sur les statistiques des objets sont ajoutées par défaut. Il est possible de supprimer ces données de performance en appliquant le filtre suivant: ```--filter-perfdata='^$'```.
