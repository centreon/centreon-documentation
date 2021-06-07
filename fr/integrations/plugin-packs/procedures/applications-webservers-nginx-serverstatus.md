---
id: applications-webservers-nginx-serverstatus
title: Nginx Server
---

## Vue d'ensemble

Nginx est un serveur web open-source aussi utilisé comme reverse proxy, cache HTTP, et load balancer.

## Contenu du Plugin Pack

### Objets supervisés

* Nginx Server

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Requests--> 

| Metric name                               | Description                    | Unit               |
| :---------------------------------------- | :----------------------------- | :----------------- |
| server.connections.accepted.persecond     | Number of accepted connections | Connections/second |
| server.connections.handled.persecond      | Number of handled connections  | Connections/second |
| server.connections.dropped.count          | Number of dropped connections  | Count              |
| server.requests.persecond                 | Number of requests             | Requests/second    |


<!--Connections-->

| Metric name                        | Description                       | Unit  |
| :--------------------------------- | :-------------------------------- | :---- |
| server.connections.active.count    | The number of active connections  | Count |
| server.connections.waiting.count   | The number of waiting connections | Count |
| server.connections.writing.count   | The number of writing connections | Count |
| server.connections.reading.count   | The number of reading connections | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Remarque: La procédure suivante est un exemple et ne peut pas être appliquée dans tous les contextes.

Le module permet de générer un rapport Nginx et de le rendre disponible sur une page web dédiée. Ce rapport est utilisé pour générer des statistiques dans Centreon..

Pour activer ce module, vous devez ouvrir votre fichier de configuration nginx.

    $ vi /etc/nginx/nginx.conf

and ajouter les lignes suivantes dans la parenthèse 'server':

    server { 
        ... 
        location /nginx_status { 
            stub_status on; 
            access_log off;
            allow <centreon-poller_@IP>;
            deny all; 
        }
        ...
    }

Assurez-vous que le collecteur est authorisé à accéder à cette URL.

Contrôler la validité de votre configuration en utilisant la commande suivante:

    $ nginx -t nginx: the configuration file
    /etc/nginx/nginx.conf syntax is ok nginx: configuration file
    /etc/nginx/nginx.conf test is successful

Nginx doit être rechargé pour prendre en compte cette modification :

    $ /etc/init.d/nginx reload

Accéder à l'url suivante pour contrôler le résultat :

    http://<nginx_address>/nginx_status

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs Nginx:

```bash
yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Nginx Server* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs Nginx:

```bash
yum install centreon-plugin-Applications-Webservers-Nginx-Serverstatus
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin Pack *Nginx Server* :

 ```bash
yum install centreon-pack-applications-webservers-nginx-serverstatus
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Nginx Server* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle "App-Webserver-Nginx-ServerStatus-custom" et configurez toutes les macros obligatoires:

| Mandatory | Name                    | Description                                                                |
| :-------- | :---------------------- | :------------------------------------------------------------------------- |
|    X      | NGINXPORT               | Port used by Apache. Default is 80                                         |
|    X      | NGINXPROTOCOL           | Protocol used. Default is http                                             |
|           | NGINXSTATUSEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

Par défaut ```NGINXSTATUSEXTRAOPTIONS``` contient les options : ```--http-backend=curl --curl-opt="CURLOPT_SSL_VERIFYPEER => 0"``` pour utiliser ```curl``` et pour ne pas contrôler le certificat SSL.

## Comment tester le Plugin en ligne de commande et comment utiliser ses options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \
	--plugin=apps::nginx::serverstatus::plugin \
	--mode=requests \
	--hostname=10.30.2.11 \
	--proto=https \
	--port=443 \
	--warning-connections-dropped=10 \
	--critical-connections-dropped=20 \
	--http-backend=curl \
	--curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
	--verbose  
```

La commande ci-dessus contrôle les statistiques des requêtes sur le serveur Nginx (``` --mode=requests ```). Les informations importantes sont l'adresse IP/FQDN (``` --hostname=10.30.2.11 ```),

le port utilisé par Apache (``` --port=443 ```) et le protocole (``` --proto=https ```).

Le backend *curl* (```--http-backend='curl'```) est utilisé par la commande et le certificat SSL du serveur cible n'est pas contrôlé (```--curl-opt="CURLOPT_SSL_VERIFYPEER => 0"```).

Une alarme de type WARNING est déclenchée si le nombre de connexions interrompues sur le serveur est supérieur à 10 (``` --warning-connections-dropped=10 ```).

Une alarme CRITICAL est quant à elle déclenchée si le nombre de connexions interrompues sur le serveur est supérieur à 20 (``` --critical-connections-dropped=20 ```).

La commande retourne le message de sortie ci-dessous:

```bash
OK: connections accepted: 0.36/s - connections handled: 0.36/s - connections dropped: 0 - requests: 13.00/s | 'server.connections.accepted.persecond'=0.36;;;0; 'server.connections.handled.persecond'=0.36;;;0; 'server.connections.dropped.count'=0;0:0;0:20;0; 'server.requests.persecond'=13.00;;;0;
```

Des seuils peuvent être positionnés à l'aide des options ```--warning-*``` et ```--critical-*``` sur les métriques.

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ``` --help ``` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \
	--plugin=apps::nginx::serverstatus::plugin \
	--mode=requests \
	--help
```

Les modes disponibles peuvent être affichés à l'aide de la commande suivante : 

```bash
usr/lib/centreon/plugins//centreon_nginx_serverstatus.pl \
	--plugin=apps::nginx::serverstatus::plugin \
    --list-mode 
```

## Diagnostic des erreurs communes

### UNKNOWN: Cannot load module 'Net::Curl::Easy'

Ce message d'erreur indique qu'une librairie Perl est manquante pour utiliser le backend *curl*.

Pour corriger ce problème, installer la librairie Perl Net\:\:Curl\:\:Easy à l'aide de la commande suivante :

```bash
yum install perl-Net-Curl
```

### UNKNOWN: curl perform error : Couldn't connect to server

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: curl perform error : Couldn't connect to server |```.
Cela signifie que Centreon n'a pas réussi à se connecter à l'URL du serveur Nginx.
La plupart du temps, il faut préciser le proxy à utiliser en utilisant l'option ```--proxyurl```.






