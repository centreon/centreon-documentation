---
id: hardware-storage-dell-me4-restapi
title: Dell ME4 Rest API
---

## Contenu du Pack

### Objets supervisés

Le Pack Dell ME4 collecte les données pour:
* Controllers
* Hardware
* Interfaces
* Volumes

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                                        | Description                                            |
| :----------------------------------------------------- | :----------------------------------------------------- |
| HW-Storage-Dell-Me4-Restapi-Controller-Statistics-Name | Découvre les contrôleurs et supervise les statistiques |
| HW-Storage-Dell-Me4-Restapi-Volume-Statistics-Name     | Découvre les volumes et supervise les statistiques     |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Controller-statistics-->

| Metric name                                               | Description                                                                                                                   | Unit  |
| :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---- |
| *controller\_id*\#controller.data.read.bytespersecond     | Amount of data read                                                                                                           | B/s   |
| *controller\_id*\#controller.data.written.bytespersecond  | Amount of data written                                                                                                        | B/s   |
| *controller\_id*\#controller.reads.persecond              | For the controller whose host ports had I/O activity, the number of read operations                                           |       |
| *controller\_id*\#controller.writes.persecond             | For the controller whose host ports had I/O activity, the number of write operations                                          |       |
| *controller\_id*\#controller.data.transfer.bytespersecond | The data transfer rate                                                                                                        | B/s   |
| *controller\_id*\#controller.iops.count                   | Input/output operations per second                                                                                            |       |
| *controller\_id*\#controller.commands.forwarded.count     | The current count of commands that are being forwarded or are queued to be forwarded to the partner controller for processing |       |
| *controller\_id*\#controller.cache.write.usage.percentage | Percentage of write cache in use                                                                                              | %     |
| *controller\_id*\#controller.cache.write.hits.persecond   | For the controller that owns the volume, the number of times the block written to is found in cache                           |       |
| *controller\_id*\#controller.cache.write.misses.persecond | For the controller that owns the volume, the number of times the block written to is not found in cache                       |       |
| *controller\_id*\#controller.cache.read.hits.persecond    | For the controller that owns the volume, the number of times the block to be read is found in cache                           |       |
| *controller\_id*\#controller.cache.read.misses.persecond  | For the controller that owns the volume, the number of times the block to be read is not found in cache                       |       |
| *controller\_id*\#controller.cpu.utilization.percentage   | Percentage of time the CPU is busy                                                                                            | %     |

<!--Hardware-->

| Metric name                                             | Description                                | Unit  |
| :------------------------------------------------------ | :----------------------------------------- | :---- |
| controller status                                       | Status/health/redundancy of the controller |       |
| disk status                                             | Status/health/state of the disk            |       |
| *disk\_instance*\#hardware.disk.temperature.celsius     | Temperature of the disk                    | C     |
| fan status                                              | Status/health of the fan                   |       |
| *fan\_instance*\#hardware.fan.speed.rpm                 | Speed of the fan                           | rpm   |
| fru status                                              | Status of the FRU                          |       |
| psu status                                              | Status/health of the power supply          |       |
| sensor status                                           | Status of the sensor                       |       |
| *sensor\_instance*\#hardware.sensor.voltage.volt        | Voltage of the sensor                      | V     |
| *sensor\_instance*\#hardware.sensor.current.ampere      | Current of the sensor                      | A     |
| *sensor\_instance*\#hardware.sensor.temperature.celsius | temperature of the sensor                  | C     |
| *sensor\_instance*\#hardware.sensor.capacity.percentage | Charge capacity of the sensor              | %     |
| volume status                                           | Status of the volume                       |       |

<!--Interfaces-->

| Metric name                                                           | Description                                                                                                                                                | Unit  |
| :-------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| port status                                                           | port health status                                                                                                                                         |       |
| *port\_name*\#port.io.read.usage.iops                                 | Number of read operations                                                                                                                                  |       |
| *port\_name*\#port.io.write.usage.iops                                | Number of write operations                                                                                                                                 |       |
| *port\_name*\#port.traffic.read.usage.bitspersecond                   | Amount of data read                                                                                                                                        | b/s   |
| *port\_name*\#port.traffic.write.usage.bitspersecond                  | Amount of data written                                                                                                                                     | b/s   |
| *port\_name*~*interface\_name*\#port.interface.disparity.errors.count | The number of doublewords containing running disparity errors that have been received by the PHY, not including those received during Link Reset sequences |       |
| *port\_name*~*interface\_name*\#port.interface.lost.dwords.count      | The number of times the PHY has lost doubleword synchronization and restarted the Link Reset sequence                                                      |       |
| *port\_name*~*interface\_name*\#port.interface.invalid.dwords.count   | The number of invalid doublewords that have been received by the PHY, not including those received during Link Reset sequences                             |       |

<!--Volume-statistics-->

| Metric name                                         | Description                                                                                             | Unit  |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :---- |
| *volume\_name*\#volume.data.read.bytespersecond     | Amount of data read                                                                                     | B/s   |
| *volume\_name*\#volume.data.written.bytespersecond  | Amount of data written                                                                                  | B/s   |
| *volume\_name*\#volume.reads.persecond              | The number of read operations                                                                           |       |
| *volume\_name*\#volume.writes.persecond             | The number of write operations                                                                          |       |
| *volume\_name*\#volume.data.transfer.bytespersecond | The data transfer rate                                                                                  | B/s   |
| *volume\_name*\#volume.iops.ops                     | Input/output operations per second                                                                      |       |
| *volume\_name*\#volume.cache.write.usage.percentage | The percentage of cache used on behalf of this volume                                                   | %     |
| *volume\_name*\#volume.cache.write.hits.persecond   | For the controller that owns the volume, the number of times the block written to is found in cache     |       |
| *volume\_name*\#volume.cache.write.misses.persecond | For the controller that owns the volume, the number of times the block written to is not found in cache |       |
| *volume\_name*\#volume.cache.read.hits.persecond    | For the controller that owns the volume, the number of times the block to be read is found in cache     |       |
| *volume\_name*\#volume.cache.read.misses.persecond  | For the controller that owns the volume, the number of times the block to be read is not found in cache |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Dell ME4, l'API Rest doit être configuré (cf: https://www.dell.com/support/manuals/fr-fr/powervault-me4024/me4_series_cli_pub/using-a-script-to-access-the-cli)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack *Dell Me4 Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-storage-dell-me4-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack *Dell Me4 Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Storage-Dell-Me4-Restapi-custom*

> Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Api username                                                               |
| X         | APIPASSWORD     | Api password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
    --plugin=storage::dell::me4::restapi::plugin \
    --mode=interfaces \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-port-name='A0' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: port 'A0' status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s - All interfaces are ok | 'A0#port.io.read.usage.iops'=94.52iops;;;0; 'A0#port.io.write.usage.iops'=161.11iops;;;0; 'A0#port.traffic.read.usage.bitspersecond'=1287234b/s;;;0; 'A0~0#port.interface.disparity.errors.count'=0;;;0; 'A0~0#port.interface.lost.dwords.count'=0;;;0; 'A0~0#port.interface.invalid.dwords.count'=0;;;0; 'A0~1#port.interface.disparity.errors.count'=0;;;0; 'A0~1#port.interface.lost.dwords.count'=0;;;0; 'A0~1#port.interface.invalid.dwords.count'=0;;;0; 'A0~2#port.interface.disparity.errors.count'=0;;;0; 'A0~2#port.interface.lost.dwords.count'=0;;;0; 'A0~2#port.interface.invalid.dwords.count'=0;;;0; 'A0~3#port.interface.disparity.errors.count'=0;;;0; 'A0~3#port.interface.lost.dwords.count'=0;;;0; 'A0~3#port.interface.invalid.dwords.count'=0;;;0;
checking port 'A0'
    status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s
    interface '0' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '1' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '2' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '3' disparity errors: 0, lost dwords: 0, invalid dwords: 0
```

Cette commande contrôle les statistiques des interfaces (```--mode=interfaces```).

La commande utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et elle se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
    --plugin=storage::dell::me4::restapi::plugin \
    --mode=interfaces \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.html)

