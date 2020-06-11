---
id: applications-bluemind-ssh
title: BlueMind SSH
---

## Vue d'ensemble

BlueMind est une suite logicielle libre de messagerie d’entreprise, d’agendas et de travail collaboratif
utilisant JavaScript et HTML5. 

## Contenu du pack de supervision

### Objets supervisés

* Suite BlueMind dont: 
    * Lmtpd: Envoie/Récéption courriels
    * Milter: Analyse et modification des courriels au niveau SMTP
    * Webserver: Serveur d'application web / méssagerie
    * Chat/Xmpp: Communications unifiées

### Métriques collectées

Au delà des métriques présentés ci-après, un référentiel est disponible dans la documentation
officielle : https://forge.bluemind.net/confluence/display/BM35/Reference+des+metriques

<!--DOCUSAURUS_CODE_TABS-->
<!--Core-->

| Metric name                              | Description                                                     |
| :--------------------------------------- | :-------------------------------------------------------------- |
| core.calls.received.success.count        | Number of calls successfully received by the core. Unit: Count  |
| core.calls.received.failure.count        | Number of calls received by the core with an error. Unit: Count |
| core.heartbeat.broadcast.running.count   | Number of heartbeat broadcast in running. Unit: Count           |
| core.directory.cluster.events.count      | Number of direcotry cluster events. Unit: Count                 |
| core.request.handling.total.milliseconds | Total of core request handling. Unit: ms                        |                                            
| core.request.handling.mean.milliseconds  | Mean of core request handling. Unit: ms                         |                                          

<!--Eas-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| eas.responses.size.total.bytes           | Total eas reponses size. Unit: Bytes                 |
| eas.execution.total.milliseconds         | Total eas execution. Unit: ms                        |
| eas.execution.mean.milliseconds          | Mean eas execution. Unit: ms                         |

<!--Hps-->

| Metric name                                  | Description                                          |
| :------------------------------------------- | :--------------------------------------------------- |
| hps.authentication.success.count             | Number of hps authentication success. Unit: Count    |
| hps.authentication.failure.count             | Number of hps authentication failure. Unit: Count    |
| hps.requests.protected.count                 | Number of protected requests. Unit: Count            |
| hps.requests.maintenance.count               | Number of maintenance requests. Unit: Count          |
| hps.upstream.requests.time.milliseconds      | By instances. e.g. /login /webmail ... Unit: ms      |
| hps.upstream.requests.time.mean.milliseconds | By instances. e.g. /login /webmail ... Unit: ms      |
| hps.upstream.requests.size.total.bytes       | By instances. e.g. /login /webmail ... Unit: ms      |
| hps.upstream.requests.total.count            | By instances. e.g. /login /webmail ... Unit: ms      |

<!--Ips-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| ips.connections.active.count             | Number of ips connections active. Unit: Count        |

<!--Webserver-->

| Metric name                                | Description                                                       |
| :----------------------------------------- | :---------------------------------------------------------------- |
| webserver.requests.time.milliseconds       | Time of requests webserver. Unit: ms                              |
| webserver.requests.time.mean.milliseconds  | Mean time of requests webserver. Unit: ms                         |
| webserver.requests.total.count             | Total number of requests webserver. Unit: Count                   |
| webserver.requests.status.200.count        | Number of requests status webserver whith code 200. Unit: Count   |
| webserver.requests.status.304.count        | Number of requests status webserver whith code 304. Unit: Count   |

<!--Xmpp-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| xmpp.packets.all.count                   | Number of all xmpp packets. Unit: Count              |
| xmpp.packets.chat.count                  | Number of chat xmpp packets. Unit: Count             |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration BlueMind

Sur le serveur BlueMind, créer un utilisateur ayant accès à la socket Unix dans le repértoire ```/var/run/bm-metrics/``` 
(group telegraph).

Afin de valider la création de l'utilisateur, exécutez cette commande cet utilisateur:

```bash
user$ curl --unix-socket /var/run/bm-metrics/metrics-bm-core.sock http://127.0.0.1/metrics
bm-core.callsByRPC,rpc=GET-/api/todolist/{containerUid}/{uid}/_itemchangelog,status=success,meterType=Counter count=1
bm-core.callsByRPC,rpc=GET-/api/externaluser/{domainUid}/{uid}/groups,status=success,meterType=Counter count=2
bm-core.heartbeat.broadcast,state=core.state.stopping,meterType=Counter count=2
...
```

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des serveurs BlueMind :

```bash
yum install centreon-plugin-Applications-Bluemind-Ssh
```

Installer le Plugin-Pack 'BlueMind SSH' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des serveurs BlueMind :

```bash
yum install centreon-plugin-Applications-Bluemind-Ssh
```

2. Installer le RPM contenant les Modèles de supervision:

```bash
yum install centreon-pack-applications-bluemind-ssh
```

3. Installer le Plugin-Pack 'BlueMind' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Vous pouvez choisir entre 3 backends SSH pour vous connecter sur votre serveur BlueMind.

Ajoutez un nouvel Hôte dans Centreon, appliquez le Modèle d'Hôte ```App-Bluemind-SSH```. 
Une fois le modèle choisi, vous devez définir des valeurs en fonction du backend ssh. 

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

> :warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur BlueMind. (Macro SSHUSERNAME).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                        |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                       |
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur    |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée     |
|             | SSHPORT         | Par default: 22                                                                                    |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```         |

> :warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur BlueMind. (Macro SSHUSERNAME).

<!--libssh backend-->

| Mandatory   | Name            | Description                                                                                        |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```libssh```                                                                       |            
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur    |                                                         |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est pas définie, l'authentification par clé ssh est utilisée |
|             | SSHPORT         | Par default: 22                                                                                    |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```         |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible. Sympa :)

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### Comment tester en ligne de commande et quelles significations portent les options principales ?

Tous les modes sont affichables via la commande suivante:

```bash
/usr/lib/centreon/plugins/centreon_bluemind.pl  \
    --plugin='apps::bluemind::local::plugin' \
    --list-mode
```

Les options des différents modes sont consultables en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_bluemind.pl \
    --plugin='apps::bluemind::local::plugin' \
    --mode=incoming \
    --help
```

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cette erreur apparaît généralement avec les backends 'sshcli' ou 'plink'. Assurez-vous d'avoir réalisé une première connexion comme
indiqué dans la partie Configuration du backend utilisé.
