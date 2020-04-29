---
id: operatingsystems-windows-nsclient-05-restapi
title: Windows NSClient API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.13 | `STABLE` | Jan  18 2019 |

## Vue d'ensemble

NSClient++ Rest API fournit sa propre API Rest via le module Webserver et permet d'exploiter au maximum
les données de monitoring des serveurs Windows à travers une connexion http sécurisée.

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

<!--DOCUSAURUS_CODE_TABS-->
<!--query/Counter-Active-Sessions-->

| Metric name | Description |
| :--- | :--- |
| Sessions_value | Number of actived sessions. Units: Count |

<!--query/Counter-Generic-->

| Metric name | Description |
| :--- | :--- |
| Counter_value | Number of counter found. Units: Count |

<!--query/Cpu-->

| Metric name | Description |
| :--- | :--- |
| total 5m	| CPU Utilization of Windows serveur over 5 minutes. Units: Percent |
| total 1m	| CPU Utilization of Windows serveur over 1 minutes. Units: Percent |
| total 5s	| CPU Utilization of Windows serveur over 5 seconds. Units: Percent |

<!--query/Disk-->

| Metric name | Description |
| :--- | :--- |
| used | Used and Total Storage allocated. Units: Bytes |

<!--query/Eventlog-Generic-->

| Metric name | Description |
| :--- | :--- |
| problemCount | Number of event log found. Units: Count |

<!--query/Files-Generic-->

| Metric name | Description |
| :--- | :--- |
| count | Number of files found. Units: Count |

<!--query/Logfiles-Generic-->

| Metric name | Description |
| :--- | :--- |
| default_lines | Number of line that match with tag word found in logfile. Units: Count |
| default_warnings | Number of line that match with warning pattern found in logfile. Units: Count |
| default_criticals | Number of line that match with critical pattern found in logfile. Units: Count |
| default_unknowns | Number of line that match with unknown pattern found in logfile. Units: Count |

<!--query/Memory-->

| Metric name | Description |
| :--- | :--- |
| used | Total usage of memory. Units: Bytes |

<!--query/Swap-->

| Metric name | Description |
| :--- | :--- |
| swap | Total usage of swap memory. Units: Bytes |

<!--query/Sessions-->

| Metric name | Description |
| :--- | :--- |
| sessions-created | Number of created users session. Units: Count |
| sessions-disconnected | Number of disconnected users session. Units: Count |
| sessions-reconnected | Number of reconnected users session. Units: Count |
| sessions-active | Number of active users session. Units: Count |
| sessions-disconnected-current| Number of current disconnected users session. Units: Count |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

* Utiliser la commande de test ci-dessous pour tester le bon fonctionnement de NSClient++ depuis votre poller:
```bash
/usr/lib/nagios/plugins/check_centreon_nrpe3 -H 10.10.0.1
```
* Ouvrir le port 8443 sur le serveur windows (port de l'api rest nsclient par defaut). 

#### Afin de sécuriser la communication entre le poller et l'agent
* Modifier le paramètre "port" de l'api Rest via le fichier nsclient.ini
* Modifier le paramètre "allowed hosts" pour autoriser uniquement les pollers souhaités via le fichier nsclient.ini

### Configurer l'accès Rest https
Pour vous connecter à l’API de Monitoring NSClient++, vous devez tout d'abord activer le service web de nsclient:
depuis un shell sous le serveur Windows, executer les commande suivantes en administrateur:
* nscp web install

Configurer un mot de passe afin de sécuriser la communication.
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

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Choisissez le modèle d'hôte correspondant à la plateforme de Management Office "Cloud-Microsoft-Office365-Sharepoint-Api-custom". Une fois le modèle d'hôte appliqué, il est possible de définir l'ensemble des macros nécessaires au fonctionnement des contrôles:

| Obligatoire | Nom | Description |
| :--- | :--- |:--- |
| X | NSCPRESTAPIPORT | Port de l'api Rest NSClient++ (8443 par défaut) |
| X | NSCPRESTAPIPROTO | Protocole web utilisé pour la communication avec l'api Rest (https par défaut) |
| X | NSCPRESTAPILEGACYPASSWORD | Mot de passe configuré pour l'échange de données via l'api Rest (vérifier les prérequis) |
| X | NSCPRESTAPIEXTRAOPTIONS  | Options supplémentaires à passer si nécessaire, timeout (vide par défaut) |



## FAQ

#### Comment tester et interpréter le plugin NSClient Rest Api en ligne de commande?

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
Si la métrique 'total 5m', charge processeur sur les 5 dernières minutes, dépasse les 80% ou les 90% alors l'état du service sera WARNING ou CRITIQUE.

Tous les modes disponibles sont affichés via la commande suivante:
```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
--plugin=apps::nsclient::restapi::plugin \
--list-mode
```

Pour toute aide complémentaire, les options des différents modes sont consultables via le help:
```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
--plugin=apps::nsclient::restapi::plugin \
--mode=query
--help
```


#### UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string
Si vous recevez ce message, activer le mode debug pour visualiser l'execution en détail d'un mode en particulier.
```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
--plugin=apps::nsclient::restapi::plugin \
--mode=query \
--hostname='192.168.1.24' \
--port='8443' \
--proto='https' \
--legacy-password='monitoring' \
--http-backend=curl  \
--curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
--timeout=30 \
--command=check_centreon_plugins \
--arg='os::windows::local::plugin' \
--arg='sessions' \
--arg='--filter-sessionname="" \
--config="scripts/centreon/conf/qwinsta.xml" \
--language="fr" \
...
--debug

UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string, at character offset 724 (before "\x{fffd}u0090RIPH\x{fffd}...") at /usr/lib/centreon/plugins//centreon_nsclient_restapi.pl line 133.
== Info: About to connect() to 192.168.1.24 port 8443 (#0)
== Info:   Trying 192.168.1.24...
== Info: Connected to 192.168.1.24 (192.168.1.24) port 8443 (#0)
.......
Cannot write statefile '/var/lib/centreon/centplugins/windows_sessions_a181a603769c1f98ad927e7367c7aa51_a181a603769c1f98ad927e7367c7aa51'. 
Need write/exec permissions on directory.
```
* Le dossier /var/lib/centreon/centplugins n'existe pas sur votre serveur Windows, dans ce cas spécifiez un répertoire Windows existant via l'option "--statefile-dir"  dans le dernier argument afin de stocker vos fichiers de cache.

#### "UNKNOWN: 500 Can't connect to x.x.x.x:8443"
Si vous recevez ce message, ajouter l'option '--http-backend=curl' dans la macro 
* NSCPRESTAPIEXTRAOPTIONS

## Créer votre propre agent NSClient++
Maintenant il vous est possible de créer votre propre agent NSClient++ lorsque vous souhaitez ajouter de nouvelles commandes et/ou personnaliser nsclient.ini.

Suivez la documentation officielle accessible publiquement via Github afin de fournir à votre entreprise un Centreon NSClient++ spécifique:
* https://github.com/centreon/centreon-nsclient-build

Vous y trouverez la méthode de création utilisée et la liste de tous les plugins compilés par Centreon dans centreon_plugin.exe
