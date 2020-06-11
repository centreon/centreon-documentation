---
id: applications-webservers-iis-restapi
title: Microsoft IIS Server Restapi
---

## Vue d'ensemble

Internet Information Services (IIS, anciennement Internet Information Server) est un serveur Web extensible créé par Microsoft pour une utilisation sous Windows Server. IIS prend en charge HTTP, HTTP/2, HTTPS, FTP, FTPS, SMTP et NNTP.

## Contenu du Plugin-Pack

### Elements supervisés

* ApplicationPools
* Websites

### Règles de découverte

<!--Services-->

| Rule name                             | Description                                          |
| :------------------------------------ | :--------------------------------------------------- |
| App-IIS-Restapi-ApplicationPools-Name | Discover application pools hosted by your IIS server |
| App-IIS-Restapi-Websites-Name         | Discover websites hosted by your IIS server          |


### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--ApplicationPools-->

| Metric name                        | Description                                                               |
| :--------------------------------- | :------------------------------------------------------------------------ |
| status                             | Status of the application pool.                                           |
| applicationpool.requests.persecond | Number of requests per second by application pools. Unit: requests/second |

<!--Websites-->

| Metric name                         | Description                                                             |
| :---------------------------------- | :---------------------------------------------------------------------- |
| status                              | Status of the website.                                                  |
| website.traffic.in.bitspersecond    | Incoming traffic going through the website. Unit: bits/second           |
| website.traffic.out.bitspersecond   | Outgoing traffic going through the website. Unit: bits/second           |
| website.connections.current.count   | Nomber of current connections by website. Unit: count                   |
| website.connections.total.persecond | Number of total connecions per second by website. Unit: requests/second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration IIS

Pour utiliser ce Plugin-Pack, vous devez activer l'API Microsoft IIS Administration. Microsoft founit une documentation officielle pour la mise en place : https://docs.microsoft.com/en-us/iis-administration/


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources IIS :

```bash
yum install centreon-plugin-Applications-Webservers-Iis-Restapi
```

2. Dans l'interface Centreon, installer le Plugin-Pack *Microsoft IIS Server Restapi* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources IIS :

```bash
yum install centreon-plugin-Applications-Webservers-Iis-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-webservers-iis-restapi.noarch
```

3. Dans l'interface Centreon, installer le Plugin-Pack *Microsoft IIS Server Restapi* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle "App-Webserver-IIS-Restapi-custom" et configurez toutes les macros :


| Mandatory   | Nom                | Description                                                                |
| :---------- | :----------------- | :------------------------------------------------------------------------- |
| X           | IISAPIPORT         | Port used. Default is 55539                                                |
| X           | IISAPIPROTO        | Protocol used. Default is https                                            |
| X           | IISAPIUSERNAME     | Username to access to the API.                                             |
| X           | IISAPIPASSWORD     | Password to access to the API.                                             |
| X           | IISTOKENAPI        | Token to access to the API.                                                |
|             | IISAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

Par défaut ```IISAPIEXTRAOPTIONS``` contient les options : ```--http-backend=curl --curl-opt="CURLOPT_SSL_VERIFYPEER => 0"``` pour utiliser ```curl``` et pour ne pas vérifier le certificat SSL.

**Il est recommandé d'utiliser le module de découverte automatique des éléments pour déployer la supervision des
*application pools/websites*. Pour ce faire, allez dans
*Configuration > Services > Découverte Automatisée > Manuelle* puis lancez une découverte**


## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?


Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* :


```bash
/usr/lib/centreon/plugins/centreon_iis_restapi.pl \	
	--plugin apps::iis::restapi::plugin \
	--mode websites \
	--hostname='www.int.centreon.com' \
	--port='55539' \
	--proto='https' \
	--api-username='John.Doe' \
	--api-password='6fbadZEJbsLG' \
	--api-token='ZHppZCWPzREgSb9SDYOegsY0_D4KJKgZ5q8QavEWBPmmi8fgt2-8Cw' \
	--http-backend='curl' \
	--curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
	--filter-name='^www$' \
	--critical-status='%{status} !~ /starting|started/' \
	--verbose
```

Cette commande supervise le statut et l'utilisation du site *www* (```--filter-name=^www$```) hébergé sur le serveur IIS *www.int.centreon.com* (```--hostname='www.int.centreon.com'```).

Un utilisateur (```--api-username='John.doe'```), un mot de passe (```--api-password='6fbadZEJbsLG'```) et un token API (```--api-token='ZHppZCWPzREgSb9SDYOegsY0_D4KJKgZ5q8QavEWBPmmi8fgt2-8Cw'```) générés depuis l'API *IIS Administration API* sont utilisés pour se connecter.

Le backend *curl* (```--http-backend='curl'```) est utilisé par la commande et le certificat SSL du serveur cible n'est pas vérifié (```--curl-opt="CURLOPT_SSL_VERIFYPEER => 0"```).


Cette command déclenchera une alerte CRITIQUE si :
  * le status du website est différent de *starting* ou *started*.

La commande retourne le message de sortie ci-dessous:

```bash
OK: Website 'www' traffic in: 5.41 Kb/s, traffic out: 59.74 Kb/s, current connections: 0, total connections: 8.05/s | 'www#website.traffic.in.bitspersecond'=5407.86206896552b/s;;;0; 'www#website.traffic.out.bitspersecond'=59744b/s;;;0; 'www#website.connections.current.count'=0;;;0; 'www#website.connections.total.persecond'=8.05/s;;;0;
Website 'www' traffic in: 5.41 Kb/s, traffic out: 59.74 Kb/s, current connections: 0, total connections: 8.05/s
```

Des seuils peuvent être positionnés à l'aide des options --warning-* et --critical-* sur les métriques.


Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option --help à la commande:

```bash
/usr/lib/centreon/plugins/centreon_iis_restapi.pl \	
	--plugin apps::iis::restapi::plugin \
	--mode websites \
        --help
``

Vous pouvez afficher tous les modes disponibles à l'aide de la commande suivante :`

```bash
/usr/lib/centreon/plugins//centreon_iis_restapi.pl \
    --plugin=apps::iis::restapi::plugin \
    --list-mode
```

### J'obtiens le message d'erreur suivant:

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

Ce message d'erreur indique qu'une librairie Perl est maquante pour utiliser le backend *curl*.

Pour corriger ce problème, installer la librairie Perl Net::Curl::Easy à l'aide de la commande suivante :


```bash
yum install perl-Net-Curl
```

#### ```UNKNOWN: curl perform error : Couldn't connect to server```

Lors du déploiement de mes contrôles, j'obtiens le message suivant UNKNOWN: curl perform error : Couldn't connect to server |.
Cela signifie que Centreon n'a pas réussi à se connecter à l'API du serveur IIS.
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'API du serveur IIS en utilisant l'option --proxyurl='http://proxy.mycompany:8080'.
