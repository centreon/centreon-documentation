---
id: operatingsystems-windows-nsclient-05-restapi
title: Windows NSClient API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.13 | `STABLE` | Jan  18 2019 |

## Vue d'ensemble

NSClient++ Rest API fournit sa propre API Rest via le module Webserver et permet d'exploiter au maximum
les données de monitoring des serveurs Windows à travers une connexion HTTP sécurisée.

## Contenu du Plugin-Pack

### Objets supervisés

* Windows Server OS à partir de la version 2003 SP2
* Windows (postes de travail) à partir de la version XP

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->
<!--query/Counter-Active-Sessions-->

| Metric name     | Description                             |
| :-------------- | :-------------------------------------- |
| Sessions\_value | Number of actived sessions. Unit: Count |

<!--query/Counter-Generic-->

| Metric name    | Description                          |
| :------------- | :----------------------------------- |
| Counter\_value | Number of counter found. Unit: Count |

<!--query/Cpu-->

| Metric name | Description                                                      |
| :---------- | :--------------------------------------------------------------- |
| total 5m    | CPU Utilization of Windows serveur over 5 minutes. Unit: Percent |
| total 1m    | CPU Utilization of Windows serveur over 1 minutes. Unit: Percent |
| total 5s    | CPU Utilization of Windows serveur over 5 seconds. Unit: Percent |

<!--query/Disk-->

| Metric name | Description                                   |
| :---------- | :-------------------------------------------- |
| used        | Used and Total Storage allocated. Unit: Bytes |

<!--query/Eventlog-Generic-->

| Metric name  | Description                            |
| :----------- | :------------------------------------- |
| problemCount | Number of event log found. Unit: Count |

<!--query/Files-Generic-->

| Metric name | Description                        |
| :---------- | :--------------------------------- |
| count       | Number of files found. Unit: Count |

<!--query/Logfiles-Generic-->

| Metric name        | Description                                                                   |
| :----------------- | :---------------------------------------------------------------------------- |
| default\_lines     | Number of line that match with tag word found in logfile. Unit: Count         |
| default\_warnings  | Number of line that match with warning pattern found in logfile. Unit: Count  |
| default\_criticals | Number of line that match with critical pattern found in logfile. Unit: Count |
| default\_unknowns  | Number of line that match with unknown pattern found in logfile. Unit: Count  |

<!--query/Memory-->

| Metric name | Description                        |
| :---------- | :--------------------------------- |
| used        | Total usage of memory. Unit: Bytes |

<!--query/Swap-->

| Metric name | Description                             |
| :---------- | :-------------------------------------- |
| swap        | Total usage of swap memory. Unit: Bytes |

<!--query/Sessions-->

| Metric name                   | Description                                               |
| :---------------------------- | :-------------------------------------------------------- |
| sessions-created              | Number of created users session. Unit: Count              |
| sessions-disconnected         | Number of disconnected users session. Unit: Count         |
| sessions-reconnected          | Number of reconnected users session. Unit: Count          |
| sessions-active               | Number of active users session. Unit: Count               |
| sessions-disconnected-current | Number of current disconnected users session. Unit: Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

* Le port TCP 8443 doit être ouvert sur le serveur Windows (port de l'API Rest Nsclient par défaut). 

Afin de sécuriser la communication entre le poller et l'agent:

* Modifier le paramètre *port* de l'API Rest du fichier *nsclient.ini*
* Modifier le paramètre *allowed hosts* du fichier *nsclient.ini* en renseignant les adresses IP des collecteurs Centreon afin de n'autoriser que ceux-ci à interroger l'API 

### Configurer l'accès Rest HTTPS

Pour vous connecter à l’API de Monitoring NSClient++, vous devez tout d'abord activer le service web de Nsclient:

* Depuis un shell sous le serveur Windows, executer les commande suivantes en administrateur:

```nscp web install```

* Configurer un mot de passe afin de sécuriser la communication.

```bash
nscp web password -- -set centreon
Password updated successfully, please restart nsclient++ for changes to affect.
```

* Enfin, redémarrer l'agent NSCP

```bash
net stop nscp
net start nscp
```

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Windows NSCP Rest:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Installer le Plugin-Pack depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->
1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Windows NSCP Rest:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision sur le serveur Centreon Central:

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

3. Installer le Plugin-Pack depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Créez un nouvel hôte dans Centreon et appliquez-lui le modèle d'hôte "OS-Windows-NSClient-05-Restapi-custom".
* Configurez les macros marquées comme obligatoires ci-dessous :

| Obligatoire | Nom                       | Description                                                                                    |
| :---------- | :------------------------ | :--------------------------------------------------------------------------------------------- |
| X           | NSCPRESTAPIPORT           | Port de l'API Rest NSClient++ (8443 par défaut)                                                |
| X           | NSCPRESTAPIPROTO          | Protocole web utilisé pour la communication avec l'API Rest (HTTPS par défaut)                 |
| X           | NSCPRESTAPILEGACYPASSWORD | Mot de passe configuré pour l'échange de données via l'api Rest (voir le chapitre "Prérequis") |
|             | NSCPRESTAPIEXTRAOPTIONS   | Options supplémentaires à passer si nécessaire, par exemple "--timeout=30"                     |


## FAQ

### Comment tester et interpréter le plugin NSClient Rest API en ligne de commande?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

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

La commande ci-dessus requête l'API Rest Nsclient++ (```--plugin=apps::nsclient::restapi::plugin```) sur le port 8443 (--port='8443') de l'API
en utilisant le protocole HTTPS (```--proto='https'```) ainsi que le mot de passe créé précédemment dans la partie *Prérequis* (```--legacy-password='centreon'```).
Cette commande contrôle l'état actuel de l'activité du processeur (```--command=check_cpu```). 

Les alertes sont appliquées sur l'utilisation en pourcentage de la métrique "5m" (total_5m).
Si la métrique 'total 5m' de la charge CPU (sur les 5 dernières minutes) dépasse 80% ou 90% alors l'état du service sera respectivement WARNING ou CRITIQUE.

Tous les modes disponibles peuvent être affichés en utilisant la commande suivante:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --list-mode
```

Pour toute aide complémentaire, les options des différents modes sont consultables en ajoutant l'argument ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --mode=query
  --help
```

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string

Si vous recevez ce message, activez le mode ```--debug``` pour visualiser l'exécution détaillée d'un mode:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --mode=query \
  --hostname='192.168.1.24' \
  --port='8443' \
  --proto='https' \
  --legacy-password='centreon' \
  --http-backend=curl  \
  --curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
  --timeout=30 \
  --command=check_centreon_plugins \
  --arg='os::windows::local::plugin' \
  --arg='sessions' \
  --arg='--filter-sessionname="" \
  --config="scripts/centreon/conf/qwinsta.xml" \
  --language="fr" \
  --debug

UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string, at character offset 724 (before "\x{fffd}u0090RIPH\x{fffd}...") at /usr/lib/centreon/plugins//centreon_nsclient_restapi.pl line 133.
== Info: About to connect() to 192.168.1.24 port 8443 (#0)
== Info:   Trying 192.168.1.24...
== Info: Connected to 192.168.1.24 (192.168.1.24) port 8443 (#0)
.......
Cannot write statefile '/var/lib/centreon/centplugins/windows_sessions_a181a603769c1f98ad927e7367c7aa51_a181a603769c1f98ad927e7367c7aa51'. 
Need write/exec permissions on directory.
```

* Le dossier */var/lib/centreon/centplugins* n'existe pas sur votre serveur Windows, dans ce cas spécifiez un répertoire Windows existant via l'option ```--statefile-dir``` afin de stocker les fichiers de cache du Plugin.

#### "UNKNOWN: 500 Can't connect to x.x.x.x:8443"

Si vous recevez ce message, ajoutez l'option '--http-backend=curl' dans la macro d'hôte *NSCPRESTAPIEXTRAOPTIONS*.

## Créer votre propre agent NSClient++

Il est possible de créer votre propre agent NSClient++ lorsque vous souhaitez ajouter de nouvelles commandes et/ou personnaliser les paramètres du fichier *nsclient.ini*.

Suivez la documentation officielle accessible publiquement via Github afin de fournir à votre entreprise un Centreon NSClient++ spécifique :

* https://github.com/centreon/centreon-nsclient-build

Vous y trouverez la méthode de création utilisée et la liste de tous les Plugins compilés par Centreon dans *centreon_plugins.exe*
