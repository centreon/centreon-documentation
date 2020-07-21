---
id: applications-monitoring-netdata-restapi
title: Netdata RestAPI
---

## Vue d'ensemble

Netdata est un outil open source pour visualiser et surveiller les mesures en temps réel, optimisé pour accumuler tous les types de données, 
tels que l'utilisation du processeur, l'activité du disque, les requêtes SQL, les visites sur un site Web, etc.


## Contenu du Plugin-Pack

### Éléments supervisés

Le Plugin-Pack Netdata RestAPI permet de superviser l'ensemble des données d'un serveur accessibles au travers de l'API de l'agent Netdata.
L'agent est quant à lui compatible avec les OS suivants:

* Linux (Debian, Ubuntu, RedHat, CentOS, Fedora, Arch...)
* BSD
* MacOs
* pfSense
* Synology

### Points de contrôle disponibles

Le Plugin-Pack dans sa version actuelle permet la supervision des points de contrôle suivants:

* Alarmes Netdata
* CPU
* Disques (Utilisation & Inodes)
* Load
* RAM
* Swap
* Inodes
* Trafic réseau
* "Chart" personnalisé


### Métriques collectées

Les métriques collectées par le Plugin sont les suivantes:

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name                           | Description                                                | Unit |
| :------------------------------------ | :--------------------------------------------------------- | :--- |
| netdata.alarms.current.total.count    | Current total active alarms triggered by the Netdata agent |      |
| netdata.alarms.current.warning.count  | Current warning alarms triggered by the Netdata agent      |      |
| netdata.alarms.current.critical.count | Current critical alarms triggered by the Netdata agent     |      |


<!--CPU-->

| Metric name                     | Description             | Unit |
| :------------------------------ | :---------------------- | :--- |
| cpu.utilization.percentage      | Average total CPU usage | %    |
| core.cpu.utilization.percentage | Per core CPU usage      | %    |


<!--Disks-->

| Metric name                    | Description                          | Unit |
| :----------------------------- | :----------------------------------- | :--- |
| storage.partitions.count       | Total number of partitions           |      |
| storage.space.usage.bytes      | Per partition space usage (in Bytes) | B    |
| storage.space.usage.percentage | Per partition space usage (in %)     | %    |
| storage.space.free.bytes       | Per partition free space (in Bytes)  | B    |


<!--Inodes-->

| Metric name                     | Description                | Unit |
| :------------------------------ | :------------------------- | :--- |
| storage.inodes.usage.percentage | Per partition Inodes usage | %    |

<!--Load-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--: |
| load1       | System load average on a 1 minute period   |      |
| load5       | System load average on a 5 minutes period  |      |
| load15      | System load average on a 15 minutes period |      |

<!--Memory-->

| Metric name             | Description                                    | Unit |
| :---------------------- | :--------------------------------------------- | :--: |
| memory.usage.bytes      | Total current memory usage (in Bytes)          |  B   |
| memory.usage.percentage | Total current memory usage (in %)              |  %   |
| memory.free.bytes       | Current free memory                            |  B   |
| memory.buffer.bytes     | Current amount of memory allocated to 'buffer' |  B   |
| memory.cached.bytes     | Current amount of memory allocated to 'cached' |  B   |
| memory.shared.bytes     | Current amount of memory allocated to 'shared' |  B   |

<!--Swap-->

| Metric name           | Description                 | Unit |
| :-------------------- | :-------------------------- | :--: |
| swap.usage.bytes      | Swap space usage (in Bytes) |  B   |
| swap.usage.percentage | Swap space usage (in %)     |  %   |
| swap.free.bytes       | Free Swap space             |  B   |

<!--Traffic-->

| Metric name                       | Description                    | Unit |
| :-------------------------------- | :----------------------------- | :--: |
| network.traffic.in.bitspersecond  | Per interface incoming traffic | b/s  |
| network.traffic.out.bitspersecond | Per interface outgoing traffic | b/s  |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Installation de l'agent Netdata

L'agent Netdata doit être installé et opérationnel sur le serveur cible afin de pouvoir utiliser le Plugin-Pack Centreon Netdata.

Vous trouverez plus d'informations sur comment installer et configurer l'agent Netdata en suivant la documentation officielle:
https://learn.netdata.cloud/docs/agent/packaging/installer


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des agents Netdata :

```bash
yum install centreon-plugin-Applications-Monitoring-Netdata-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Netdata RestAPI* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des agents Netdata :

```bash
yum install centreon-plugin-Applications-Monitoring-Netdata-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-monitoring-netdata-restapi.noarch
```

3. Depuis l'interface Web de Centreon, installer le Plugin-Pack *Netdata RestAPI* depuis la page "Configuration > Plugin Packs > Manager"


## Configuration

* Sur l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle d'Hôte *App-Monitoring-Netdata-Restapi* et configurer les macros nécessaires :

| Mandatory | Name                | Description                                                                  |
| :-------- | :------------------ | :--------------------------------------------------------------------------- |
| X         | NETDATAAPIPORT      | Port used (Default: 19999)                                                   |
| X         | NETDATAAPIPROTOCOL  | Specify https if needed (Default: 'http')                                    |
| X         | NETDATAAPIENDPOINT  | Specify the API URL path (Default: '/api/v1')                                |
|           | EXTRAOPTIONS        | Any extra option you may want to add to the command (eg. a `--verbose` flag) |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur
Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \
	--plugin=apps::monitoring::netdata::restapi::plugin \
	--hostname=10.0.0.1 \
	--mode=cpu \
	--warning-average=70 \
	--critical-average=80 \
	--verbose
```

La commande doit retourner un résultat de la forme suivante:

```bash 	
OK: 2 CPU(s) average usage is 17.23 % | 
'cpu.utilization.percentage'=17.23%;0:40;0:50;0;100 '0#core.cpu.utilization.percentage'=16.71%;;;0;100 '1#core.cpu.utilization.percentage'=17.75%;;;0;100
CPU '0' usage: 16.71 %
CPU '1' usage: 17.75 %
```


Cette commande vérifie l'utilisation CPU moyenne (```--mode=cpu```) d'un serveur hébergeant l'agent Netdata en requêtant l'API de ce dernier
(```--plugin=apps::monitoring::netdata::restapi::plugin --hostname=10.0.0.1```).

Cette commande déclenchera une alarme WARNING si l'utilisation CPU moyenne dépasse 70%   (```--warning-average=70```)
et une alarme de type CRITICAL pour une utilisation moyenne supérieure à 80% (```--critical-average=80```).


Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```
/usr/lib/centreon/plugins/centreon_monitoring_netdata_restapi.pl \
	--plugin=apps::monitoring::netdata::restapi::plugin \
	--hostname=10.0.0.1 \
	--mode=cpu \
	--help
```

### J'obtiens le message d'erreur suivant:

#### ```UNKNOWN: 500 Can't connect to myserver.mycompany.com:19999 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to myserver.mycompany.com:19999 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API Netdata du serveur cible.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,
il est nécessaire de le préciser dans la commande en utilisant l'option ```--proxyurl='http://proxy.mycompany.com:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *lwp* utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

Ce message d'erreur signifie qu'une librairie Perl est manquante.

Dans le cas présent, vous pouvez installer la librairie manquante en lançant la commande suivante:

```bash
yum install perl-Net-Curl
```
