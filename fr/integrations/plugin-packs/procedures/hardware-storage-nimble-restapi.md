---
id: hardware-storage-nimble-restapi
title: Nimble Storage Rest API
---

## Vue d'ensemble

HPE Nimble Storage est une technologue de solutions de stockage de données sur des baies Flash dont le siège
est basé à San José en Californie. C'est une entité de Hewlett Packard Enterprise. 

Nimble Storage produit des solutions matérielles et logicielles pour le stockage de données en utilisant les protocoles
iSCSI et Fiber Channel. Des solutions de sauvegarde et de protection de données sont également disponibles.

## Contenu du Plugin-Pack

### Objets supervisés

* Nimble Flash Arrays (NimbleOS >=2.3.x)

### Services disponibles

Le Plugin-Pack Nimble SNMP offre les Services suivants:

* Arrays
* Hardware
* Volumes

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Arrays-->

| Metric name                            | Description (per array )        | Unit    |
| :------------------------------------- | :------------------------------ | :------ |
| status                                 | Array status                    | String  |
| array.space.usage.bytes                | Used space                      | Bytes   |
| array.space.usage.percentage           | Used space                      |   %     |
| array.space.free.bytes                 | Free space                      | Bytes   |
| array.snapshots.compression.rate.count | Snapshot compression ratio      |         |
| array.snapshots.reduction.rate.count   | Snapshot reduction ratio        |         |

<!--Hardware-->

| Component name                         | Description (per array )        | Unit           |
| :------------------------------------- | :------------------------------ | :------------- |
| Disk                                   | Disk & RAID state               | String         |
| Fan                                    | Fan state & speed               | String/rpm     |
| Power Supply                           | Power Supply state              | String         |
| Temperature                            | Temperature state               | String/celsius |

<!--Volumes-->

| Metric name                           | Description (per volume)         | Unit    |
| :------------------------------------ | :------------------------------- | :------ |
| status                                | Volume status                    | String  |
| volume.space.usage.bytes              | Space usage                      | Bytes   |
| volume.io.read.usage.bytespersecond   | Read I/O volume                  | Bytes/s |
| volume.io.write.usage.bytespersecond  | Write I/O volume                 | Bytes/s |
| volume.io.read.usage.iops             | Read IOPS count                  | Iops    |
| volume.io.write.usage.iops            | Write IOPS count                 | Iops    |
| volume.io.read.latency.milliseconds   | Read latency                     | ms      |
| volume.io.write.latency.milliseconds  | Write latency                    | ms      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de la Nimble Rest API

L'équipement Nimble doit être joignable sur les protocoles HTTP ou HTTPS. 

Pour valider sa configuration et son fonctionnement, reportez vous à leur documentation officielle: 
https://infosight.hpe.com/InfoSight/media/cms/active/public/pubs_REST_API_Reference_NOS_51x.whz/jun1455055569904.html

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le paquet Centreon Plugin sur chaque Collecteur supervisant un équipement Nimble:

```bash
yum install centreon-pack-hardware-storage-nimble-restapi.noarch
```

2. Dans l'interface Centreon, rendez-vous sur la page "Configuration > Plugin Packs > Gestionnaire" et installer le Plugin-Pack *Nimble Rest API*

<!--Offline IMP License-->

1. Installer le paquet Centreon Plugin sur chaque Collecteur supervisant un équipement Nimble:

```bash
yum install centreon-plugin-Hardware-Storage-Nimble-Restapi.noarch
```

2. Installer le paquet RPM du Centreon Plugin-Pack RPM sur le serveur Central:

```bash
yum install centreon-pack-hardware-storage-nimble-restapi.noarch
```

3. Dans l'interface Centreon, rendez-vous sur la page "Configuration > Plugin Packs > Gestionnaire" et installer le Plugin-Pack *Nimble Rest API*

## Configuration

* Ajouter un nouvel Hôte via le menu "Configuration > Hosts".
* Appliquer le Modèle d'Hôte *HW-Storage-Nimble-Restapi* puis configurer les macros obligatoires: 


| Mandatory | Name                | Description                                                                  |
| :-------- | :------------------ | :--------------------------------------------------------------------------- |
| X         | APIPORT             | Port used (Default: 5392)                                                    |
| X         | APIPROTO            | Specify protocol if needed (Default: 'https')                                |
| X         | APIUSERNAME         | Specify the API Username                                                     |
| X         | APIPASSWORD         | Specify the API Password                                                     |    
|           | APIEXTRAOPTIONS     | Any extra option you may want to add to the command (eg. a `--verbose` flag) |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options standards ?

@TODO@

### Que signifie ces messages d'erreur

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Si vous utilisez un proxy et que vous rencontrez cette erreur, cela signifie que le Plugin Centreon ne supporte
pas le protocole de connexion imposé par le proxy.

Afin de vous prémunir de ce problème, utiliser le backend HTTP *curl* en ajoutant l'option ci-dessous: 

 ```--http-backend='curl'```.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

Ce message d'erreur signifie qu'une dépendance est manquante lors de l'utilisation du backend *curl*. 

Afin de corriger cette erreur, installer la librairie 'Net\:\:Curl\:\:Easy':

```bash
yum install perl-Net-Curl
```