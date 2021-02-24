---
id: hardware-storage-nimble-snmp
title: Nimble Storage
---

## Vue d'ensemble

HPE Nimble Storage est une technologue de solutions de stockage de données sur des baies Flash dont le siège
est basé à San José en Californie. C'est une entité de Hewlett Packard Enterprise. 

Nimble Storage produit des solutions matérielles et logicielles pour le stockage de données en utilisant les protocoles
iSCSI et Fiber Channel. Des solutions de sauvegarde et de protection de données sont également disponibles.

## Contenu du Plugin-Pack

### Objets supervisés

* Nimble Flash Arrays

### Services disponibles

Les Services suivants sont mis à disposition au travers du Plugin-Pack: 

* Global-Stats
* Volumes

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Volume-Usage-->

| Metric name                    | Description                          | Unit  |
| :----------------------------- | :----------------------------------- | :---- |
| volume.space.usage.bytes       | Per volume space usage (in Bytes)    | Bytes |

<!--Global-Stats-->

| Metric name                           | Description                          | Unit    |
| :------------------------------------ | :----------------------------------- | :------ |
| system.io.read.usage.bytespersecond   | Sytem read I/O                       | Bytes/s |
| system.io.write.usage.bytespersecond  | Sytem write I/O                      | Bytes/s |
| system.io.read.usage.iops             | Sytem read IOPS count                | Iops    |
| system.io.write.usage.iops            | Sytem write IOPS count               | Iops    |
| system.io.read.time.seconds           | Sytem read time                      | Seconds |
| system.io.write.time.seconds          | Sytem write time                     | Seconds |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration du SNMP sur l'équipement

Il est nécessaire de se référer à la documentation officielle du constructeur pour activer le SNMP:
https://infosight.hpe.com/InfoSight/media/cms/active/public/pubs_GUI_Administration_Guide_NOS_50x.whz/qzz1501525219979.html

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque Collecteur Centreon devant superviser des équipements Nimble:

```bash
yum install centreon-plugin-Hardware-Storage-Nimble-Snmp
```

2. Sur l'interface Web de Centreon, rendez-vous sur la page "Configuration > Plugin Packs > Gestionnaire" et installer le Plugin-Pack *Nimble SNMP*

<!--Offline IMP License-->

1. Installer le Plugin sur chaque Collecteur Centreon devant superviser des équipements Nimble:

```bash
yum install centreon-plugin-Hardware-Storage-Nimble-Snmp
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-hardware-storage-nimble-snmp
```

3. Sur l'interface Web de Centreon, rendez-vous sur la page "Configuration > Plugin Packs > Gestionnaire" et installer le Plugin-Pack *Nimble SNMP*

## Configuration

* Ajouter un nouvel Hôte via le menu "Configuration > Hosts".
* Compléter les champs *Communauté SNMP* et *Version SNMP* avec les valeurs configurées sur le Nimble
* Appliquer le Modèle d'Hôte *HW-Storage-Nimble-SNMP*

> Si vous utilisez la version 3 du protocol SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## FAQ

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Nimble sur le port UDP/161, 
ou alors que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes. 
  L'agent SNMP doit être en mesure d'accéder à la branche entreprise HPE Nimble: .1.3.6.1.4.1.37447
