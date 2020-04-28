---
id: operatingsystems-windows-nsclient-05-restapi
title: Windows NSClient API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.13 | `STABLE` | Jan  18 2019 |

## Vue d'ensemble
Bien que SNMP facilite efficacement la surveillance des infrastructures réseau et qu'il soit encore l’un des protocoles les 
plus utilisés pour le monitoring, nous travaillons de plus en plus sur des nouvelles solutions pour superviser des équipements 
telle que les API Rest.

NSClient++ Rest API fournit sa propre API HTTP qui peut être activée avec le module Webserver et permet d'exploiter au maximum
les données de monitoring via le port 8443.

## Contenu du pack de supervision

### Objets supervisés
* Counter-Active-Sessions
* Counter-Generic
* Cpu
* Disk
* EventLog
* Files
* Logfiles
* Memory
* NTP
* Pending Reboot
* Process
* Services-Auto
* Services
* Sessions
* Swap
* Task
* Uptime

## Métriques collectées

NDLR: Mode Tab

<!--DOCUSAURUS_CODE_TABS-->
<!--query/Counter-Active-Sessions-->

| Metric name             | Description                                                                                  |
| :---------------------- | :------------------------------------------------------------------------------------------- |
| activeSessions_value    | Number of active sessions. Units: Count														 |

<!--query/Counter-Generic-->

| Metric name             | Description                                                                                  |
| :---------------------- | :------------------------------------------------------------------------------------------- |
| nameCounter_value		  | Number of counter found. Units: Count					   									 |

<!--query/Cpu-->

| Metric name					| Description                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------- |
| total 5m						| The percentage of system load over 5 minutes. Units: Percent								   |
| total 1m						| The percentage of system load over 1 minutes. Units: Percent	    		 				   |
| total 5s						| The percentage of system load over 5 seconds. Units: Percent								   |

<!--query/Disk-->

| Metric name					| Description                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------- |
| partitionName\used			| Used and Total Storage allocated. Units: Bytes											   |

<!--query/Eventlog-Generic-->

| Metric name				   | Description                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------- |
| problemCount				   | Number of event log found. Units: Count													  |

<!--query/Files-Generic-->

| Metric name				   | Description                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------- |
| count						   | Number of files found. Units: Count														  |

<!--query/Logfiles-Generic-->

| Metric name				   | Description                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------- |
| sessions-created			   | Number of created users session. Units: Count												  |
| sessions-disconnected		   | Number of disconnected users session. Units: Count											  |
| sessions-reconnected		   | Number of reconnected users session. Units: Count											  |
| sessions-active			   | Number of active users session. Units: Count												  |
| sessions-disconnected-current| Number of current disconnected users session. Units: Count									  |

<!--query/Memory-->

| Metric name					| Description                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------- |
| used							| Memory Usage of the windows server. Units: Bytes											   |

<!--query/Ntp-->

| Metric name					| Description                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------- |
| used							| Memory Usage of the windows server. Units: Bytes											   |

<!--query/Swap-->

| Metric name					| Description                                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------- |
| swap							| Swap Usage of the windows server. Units: Bytes											   |

<!--query/Sessions-->

| Metric name				   | Description                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------- |
| sessions-created			   | Number of created users session. Units: Count												  |
| sessions-disconnected		   | Number of disconnected users session. Units: Count											  |
| sessions-reconnected		   | Number of reconnected users session. Units: Count											  |
| sessions-active			   | Number of active users session. Units: Count												  |
| sessions-disconnected-current| Number of current disconnected users session. Units: Count									  |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

* Avoir un agent NSClient++ fonctionnel, vous pouvez tester le bon fonctionnement de NSClient++ depuis votre poller:

```bash
/usr/lib/nagios/plugins/check_centreon_nrpe3 -H 10.10.0.1
```

* Ouvrir le port 8443 sur le serveur windows (port de l'api rest nsclient par defaut). 

#### Remarque
* Vous pouvez modifier le paramètre "port" de l'api Rest dans le fichier nsclient.ini
* Vous pouvez modifier le paramètre "allowed hosts" pour autoriser uniquement les pollers souhaités dans le fichier nsclient.ini

### Dépendance perl

Vous devrez peut-être installe une librairie perl:
* yum install perl-Net-Curl perl-WWW-Curl


### Configurer l'accès Rest https
Pour vous connecter à l’API de Monitoring NSClient++, vous devez tout d'abord activer le service web de nsclient:
depuis un shell sous le serveur windows, executer les commande suivantes en administrateur:
* nscp web install

Puis, configurer un mot de passe afin de sécuriser la communication.
* nscp web password -- -set centreon
```bash
Password updated successfully, please restart nsclient++ for changes to affect.
```

Enfin redémarrer l'agent NSCP
```bash
net stop nscp
net start nscp
```


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Windows NSCP Rest:

```bash
yum install yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":


<!--Offline IMP License-->
1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Windows NSCP Rest:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Installer le RPM contenant les modèles de supervision

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager":
<insert-screen> @TODO@

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Choisissez le modèle d'hôte correspondant à la plateforme de Management Office "Cloud-Microsoft-Office365-Sharepoint-Api-custom". Une fois le modèle d'hôte appliqué, il est possible de définir l'ensemble des macros nécessaires au fonctionnement des contrôles:

| Obligatoire | Nom                      | Description                                                                                 |
| :---------- | :----------------------- |:--------------------------------------------------------------------------------------------|
| X           | NSCPRESTAPIPORT			 | Mode d'accès spécifique aux centreon-plugins office 365 (par défaut:'graphapi')             |
| X           | NSCPRESTAPIPROTO         | ID correspondant à l'espace de votre entreprise au sein d'Office 365						  |
| X           | NSCPRESTAPILEGACYPASSWORD| ID correspondant à l'utilisateur de votre entreprise au sein d'Office 365                   |
| X           | NSCPRESTAPIEXTRAOPTIONS  | ID correspondant au mot de passe utilisateur de votre entreprise au sein d'Office 365       |



## FAQ

#### Comment tester en ligne de commande et quelles significations portent les options principales ?

A partir du moment ou la sonde est installée, vous pouvez tester directement depuis votre poller de supervision avec l'utilisateur centreon-engine:
```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
--plugin=apps::nsclient::restapi::plugin \
--mode=query --hostname='192.168.1.24' \
--port='8443' \
--proto='https' \
--legacy-password='centreon' \
--command=check_cpu \
--arg="warning=time = '5m' and load > 80" \
--arg="critical=time = '5m' and load > 90" \
--arg=show-all

OK: 5m: 40%, 1m: 42%, 5s: 39% | 
'total 5m'=40%;80;90;; 
'total 1m'=42%;80;90;; 
'total 5s'=39%;80;90;;

```

La commande ci-dessus requête une api rest nsclient++ (```--plugin=apps::nsclient::restapi::plugin```) via le port 8443 de l'api (--port='8443')
le protocole https (```--proto='https'```), le mot de passe créé dans les prérequis (```--legacy-password='centreon'```)
et fournit ainsi l'état actuel l'activité du processeur (```--command=check_cpu```). 

Les alertes sont appliqués sur l'utilisation en pourcentage de la métrique "5m" (total_5m).
Si la load 5m, charge processeur sur les 5 dernières minutes dépasse les 80% ou les 90%, alors l'état du service sera WARNING ou CRITIQUE.


Toutes les options des différents modes sont consultables via le help:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
--plugin=apps::nsclient::restapi::plugin \
--mode=query
--help

```
