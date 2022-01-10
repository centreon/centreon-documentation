---
id: hardware-storage-huawei-oceanstor-snmp
title: Huawei OceanStor SNMP
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack *Huawei OceanStor SNMP* collecte les données pour:
* Controllers
* Hardware
* Storage pools

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                                    | Description                                                                            |
| :------------------------------------------------- | :------------------------------------------------------------------------------------- |
| HW-Storage-Huawei-Oceanstor-SNMP-Controller-Id     | Découvre les contrôleurs et supervise le statut et l'utilisation processeur et mémoire |
| HW-Storage-Huawei-Oceanstor-SNMP-Storage-Pool-Name | Découvre les pools de stockage et supervise le statut et l'espace utilisé              |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Controllers-->

| Metric name                                             | Description                              | Unit |
| :------------------------------------------------------ | :--------------------------------------- | :--- |
| status                                                  | Status of the controller                 |      |
| *controller\_id*\#controller.cpu.utilization.percentage | CPU utilization                          | %    |
| *controller\_id*\#controller.memory.usage.percentage    | Memory usage                             | %    |

<!--Hardware-->

| Metric name                                            | Description                       | Unit |
| :----------------------------------------------------- | :-------------------------------- | :--- |
| bbu status                                             | Status of the battery backup unit |      |
| disk status                                            | Status of the disk                |      |
| *disk\_instance*#hardware.disk.temperature.celsius     | Temperature of the disk           | C    |
| enclosure status                                       | Status of the enclosure           |      |
| *enclosure\_id*#hardware.enclosure.temperature.celsius | Temperature of the enclosure      | C    |
| expboard status                                        | Status of the expansion board     |      |
| fan status                                             | Status of the fan                 |      |
| psu status                                             | Status of the power supply        |      |

<!--Storage-pools-->

| Metric name                                              | Description                              | Unit |
| :------------------------------------------------------- | :--------------------------------------- | :--- |
| status                                                   | Status of the stprage pool               |      |
| *storagepool\_name*\#storage_pool.space.usage.bytes      | Usage of the storage pool                | B    |
| *storagepool\_name*\#storage_pool.space.free.bytes       | Free space left on the storage pool      | B    |
| *storagepool\_name*\#storage_pool.space.usage.percentage | Usage of the storage pool in percentage  | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Huawei OceanStor, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Huawei OceanStor SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Huawei OceanStor SNMP* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Storage-Huawei-Oceanstor-SNMP-Custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='huawei_ro' \
    --warning-cpu-utilization=90 \
    --warning-cpu-utilization=95 \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All controllers are ok | '0A#controller.cpu.utilization.percentage'=6.00%;0:95;;0;100 '0A#controller.memory.usage.percentage'=76.00%;;;0;100 '0B#controller.cpu.utilization.percentage'=8.00%;0:95;;0;100 '0B#controller.memory.usage.percentage'=75.00%;;;0;100
checking controller '0A'
    health status: Normal [running status: Online]
    cpu usage: 6.00 %
    memory used: 76.00 %
checking controller '0B'
    health status: Normal [running status: Online]
    cpu usage: 8.00 %
    memory used: 75.00 %
```

Cette commande contrôle les contrôleurs (```--mode=controllers```) d'un équipement Huawei OceanStor ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *huawei_ro* (```--snmp-community='huawei_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-cpu-utilization='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-cpu-utilization='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.34774.4).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
