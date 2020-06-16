---
id: hardware-storage-netapp-santricity-restapi
title: Netapp Santricity Restapi
---

## Vue d'ensemble

Le système d'exploitation SANtricity, délivré par l'entreprise NetApp, accélère et fiabilise vos données de stockage tout en renforçant la protection de celles-ci.
Le service SANtricity Web Services Proxy (WSP) permet d'accéder de manière normalisée à la configuration et aux indicateurs des équipements NetApp par l'utilisation d'une API Rest HTTP.


## Contenu du Plugin-Pack

### Éléments supervisés

Le Plugin-Pack SANtricity permet de superviser les ressources NetApp accessibles au travers de l'API SANtricity:

* Contrôleurs
* Volumes

### Métriques collectées

Les métriques collectées sont les suivantes:

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

| Metric name                        | Description                                                                                              |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------- |
| status                             | Check components operational status: battery, cbd, ctrl, drive, fan, psu, storage, thsensor. Unit: count |
| hardware.drive.temperature.celsius | Check drives temperature. Unit: °C                                                                       |

<!--Storage Pools-->

| Metric name            | Description              |
| :--------------------  | :----------------------- |
| raid\_status           | Raid status information  |


<!--Storage Controllers-->

| Metric name                          | Description                          |
| :----------------------------------- | :----------------------------------- |
| status                               | Controller operational status        |
| volume.cpu.utilization.percentage    | CPU volume utilization. Unit: %      |
| volume.io.read.usage.bytespersecond  | Volume IO read usage. Unit: B/s      |
| volume.io.write.usage.bytespersecond | Volume IO write usage. Unit: B/s     |
| system.io.read.usage.iops            | System read IOPS usage. Unit: count  |
| system.io.write.usage.iops           | System write IOPS usage. Unit: count |

<!--Storage Systems-->

| Metric name                 | Description                          |
| :-------------------------- | :----------------------------------- |
| status                      | System operational status            |
| pool.space.usage.bytes      | Pool space usage. Unit: B            |
| pool.space.usage.percentage | Pool space percentage usage. Unit: % |
| pool.space.free.bytes       | Pool free space. Unit: B             |


<!--Storage Volumes-->

| Metric name                          | Description                          |
| :----------------------------------- | :----------------------------------- |
| status                               | Volume operational status            |
| volume.io.read.usage.bytespersecond  | Volume IO read usage. Unit: B/s      |
| volume.io.write.usage.bytespersecond | Volume IO write usage. Unit: B/s     |
| system.io.read.usage.iops            | Volume read IOPS usage. Unit: count  |
| system.io.write.usage.iops           | Volume write IOPS usage. Unit: count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'API SANtricity

Le Plugin Centreon *Netapp Santricity Restapi* s'appuie sur l'API Rest NetApp SANtricity fournie par la solution Web Services Proxy (WSP).
Celle-ci doit être préalablement installée et opérationnelle sur un serveur dédié (Windows/Linux) afin de pouvoir utiliser l'API Rest.
Les ressources ci-après décrivent les méthodes d'installation ainsi que le fonctionnement de l'API.

### Ressources en ligne

* Installation de SANtricity Web Services: https://library.netapp.com/ecm/ecm_download_file/ECMLP2846165
* Prise en main et exploitation de l'API Rest: https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Netapp SANtricity:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

2. Depuis l'interface Web de Centreon, installer le Plugin-Pack *Netapp Santricity Restapi* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Netapp SANtricity:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
centreon-pack-hardware-storage-netapp-santricity-restapi.noarch
```

3. Depuis l'interface Web de Centreon, installer le Plugin-Pack *Netapp Santricity Restapi* depuis la page "Configuration > Plugin Packs > Manager"


## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle d'Hôte "HW-Storage-Netapp-Santricity-Restapi-custom" et configurer les macros nécessaires :

| Mandatory   | Name               | Description                                                                |
| :---------- | :----------------- | :------------------------------------------------------------------------- |
| X           | APIPORT            | Port used (Default: 8080)                                                  |
| X           | APIUSERNAME        | Santricity API username.                                                   |
| X           | APIPASSWORD        | Santricity API password. Password checkbox must be checked                 |
| X           | APIPATH            | Specify api path (Default: '/devmgr/v2')                                   |
| X           | APIPROTO           | Specify https if needed (Default: 'http')                                  |
|             | APIEXTRAOPTIONS    | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur
Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
    --plugin=storage::netapp::santricity::restapi::plugin \
    --hostname=sancitricy.int.centreon.com \
    --port=8080 \
    --proto=http \
    --api-path='/devmgr/v2' \
    --api-username='admin' \
    --api-password='xxxx' \
    --mode=storage-volumes \
    --verbose \
    --warning-volume-status='%{status} =~ /degraded/i' \
    --critical-volume-status='%{status} =~ /failed/i'
```

La commande doit retourner un résultat de la forme:

```bash 	
OK: storage system 'SAN-XXX' volumes are ok |
checking storage system 'SAN-XXXX'
    volume 'Datastore_X' status: optimal
    volume 'Datastore_Y' status: optimal
```


Cette commande vérifie le statut des volumes NetApp (```--mode=storage-volumes```) en requêtant l'API SANtricity du serveur *santricity.int.centreon.com* (```--hostname=sancitricy.int.centreon.com```).
L'authentification à l'API s'effectue avec un utilisateur *admin* (```--api-user=admin```) et un mot de passe *xxxx* associé (```api-password='xxxx'```).

Cette commande déclenchera une alarme WARNING si l'un des volumes est en statut *degraded* (```--warning-volume-status='%{status} =~ /degraded/i'```)
et une alarme de type CRITICAL pour un statut *failed* (```--critical-volume-status='%{status} =~ /failed/i'```).


Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
    --plugin=storage::netapp::santricity::restapi::plugin \
    --mode=storage-volumes \
	  --help
```

### J'obtiens le message d'erreur suivant:

#### ```UNKNOWN: 500 Can't connect to santricity.int.centreon.com:8080 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to santricity.int.centreon.com:8080 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API Netapp SANtricity.

Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,
il est nécessaire de le préciser dans la commande en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

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
