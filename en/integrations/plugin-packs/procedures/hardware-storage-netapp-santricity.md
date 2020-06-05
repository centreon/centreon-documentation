---
id: hardware-storage-netapp-santricity-restapi
title: Netapp Santricity Rest API
---

## Vue d'ensemble

Le system d'exploitation Santricty, délivré par l'entreprise Netapp, accèlere et fiabilise vos données de stockage tout en renforcant la proctection de celles-ci.

## Contenu du Plugin-Pack

### Elements supervisés

Vous pouvez superviser les systemes d'exploitations Santricy via l'API. 

### Métriques collectées 

* Hardware : Status des informations suivante : storage, ctrl, battery, board, cbd, cmd, drive, psu, fan, thsensor.
* Storage Pools :  Supervise les différents pools de stockage.

<!--DOCUSAURUS_CODE_TABS-->

<!--Storage Controllers-->

| Metric name                          | Description                                  |
| :----------------------------------  | :------------------------------------------- |
| controller-status                    | Status                                       |
| volume.cpu.utilization.percentage    | CPU volume utilization. Unit: %              | 
| volume.io.read.usage.bytespersecond  | IO volume usage read in second. Unit: bytes  |
| volume.io.write.usage.bytespersecond | IO volume usage write in second. Unit: bytes |
| system.io.read.usage.iop             | IO system usage read iop                     |
| system.io.write.usage.iops           | IO system usage write iop                    |

<!--Storage Systems-->

| Metric name                       | Description                   |
| :-------------------------------- | :---------------------------- |
| pool.space.usage.bytes            | Space usage pool. Unit: bytes |
| pool.space.free.bytes             | Space free pool. Unit: bytes  |
| pool.space.usage.percentage       | Space usage pool. Unit: %     |

<!--Storage Volumes-->

| Metric name                          | Description                          |
| :----------------------------------- | :----------------------------------- |
| volume-status                        | Status                               |
| volume.io.read.usage.bytespersecond  | Io volume usage read. Unit: bytes/s  |
| volume.io.write.usage.bytespersecond | Io volume usage write. Unit: bytes/s |
| system.io.read.usage.iops            | Io system usage read iops            | 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'API Santricity

Plus d'informations à propos de l'API de Netapp Santricity sont disponibles sur la documentation officielle :
https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html

Afin de pouvoir utiliser l'API Netapp Santricity, allez sur le site http://mysupport.netapp.com/eservice/Download.jsp/ et allez dans Download > Software

A partir du E-Series SANtricity Web Services (REST API), selectionnez la plateforme Web Services Proxy.

Suivez les instructions pour télécharger le fichier "readme" et le fichier d'installation du logiciel. Veuillez selectionnez le bon fichier d'installation correspondant à votre serveur  (par exemple, EXE pour Windows; BIN ou RPM pour Linux) 

Copiez le ficher d'installation sur votre serveur.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Netapp Santricty:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

2. Dans l'interface Centreon, installer le Plugin-Pack *Netapp Santricity Rest API* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Netapp Santricity:

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
centreon-pack-hardware-storage-netapp-santricity-restapi.noarch
```

3. Dans l'interface Centreon, installer le Plugin-Pack *Netapp Santricity Rest API* depuis la page "Configuration > Plugin Packs > Manager"

## Configuration

- Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
- Appliquez le bon modèle d'Hôte. Les modèles Netapp Santricity sont tous nommés "HW-Storage-Netapp-Santricity%Restapi".

Les Macros suivantes sont communes à tous les modèles d'Hôtes:

| Mandatory   | Nom                | Description                                                |
| :---------- | :----------------- | :--------------------------------------------------------- |
| X           | HOSTNAME           | Santricity hostname.                                       |
|             | PORT               | Port used (Default: 8080)                                  |
| X           | APIUSERNAME        | Santricity API username.                                   |
| X           | APIPASSWORD        | Santricity API password. Password checkbox must be checked |
|             | APIPATH            | Specify api path (Default: '/devmgr/v2')                   |
|             | PROTO              | Specify https if needed (Default: 'http')                  |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* 
(certaines options comme ```api-token```, ```filter-device-name``` ou ```proxyurl``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins//centreon_plugins.pl 
--plugin=storage::netapp::santricity::restapi::plugin  
--hostname=10.30.2.114 
--api-username='admin' 
--api-password='xxxx' 
--mode=storage-volumes 
--verbose 
--warning-volume-status='%{status} =~ /optimal/i'
```

La commande retourne le message de sortie ci-dessous:

```bash 	
OK: storage system 'SAN-XXX' volumes are ok |
checking storage system 'SAN-XXXX'
    volume 'Datastore_X' status: optimal
    volume 'Datastore_Y' status: optimal
```

La commande vérifie le status des datastores (```--mode=storage-volumes```) d'un équpipement ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) utilisant l'API avec l'utilisateur admin (```--api-user=admin```) et son mot de passe xxxx (```api-password=xxxx```) 

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```
/usr/lib/centreon/plugins//centreon_plugins.pl --plugin=storage::netapp::santricity::restapi::plugin --mode='storage-volumes' --help
```
