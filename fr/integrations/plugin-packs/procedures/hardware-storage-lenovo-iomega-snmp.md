---
id: hardware-storage-lenovo-iomega-snmp
title: Lenovo Iomega
---

## Vue d'ensemble

La solution de stockage réseau Lenovo Iomega StoreCenter (ix2) offre sécurité, stockage et partage de contenus avancés dans un produit simple d'emploi et idéal pour les petits réseaux. 
	
## Contenu du Pack de supervision

### Objets supervisés

* Lenovo Iomega (ix2)
* Hardware
* Stockage
* NAS

## Métriques collectées 

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                      | Description           | Unit |
| :------------------------------- | :-------------------- |:---- |
| cpu.utilization.percentage       | CPU utilization.      | %    |
| core.cpu.utilization.percentage  | CPU Core utilization. | %    |

<!--Interfaces-->

| Metric name                              | Description                                             | Unit |
|:---------------------------------------- |:------------------------------------------------------- |:---- |
| status                                   | Status of the interface                                 |      |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

<!--Hardware-->

* Per intances :
| Metric name                   | Description               | Unit |
|:----------------------------- |:------------------------- |:---- |
| disk.status                   | Status of the disk        |      |
| raid.status                   | Status of the raid        |      |
| fan.status                    | Status of the fan         |      |
| temperature.status            | Status of the temperature |      |
| voltage.status                | Status of the voltage     |      |
| hardware.fan.speed.rpm        | Speed of fan              | rpm  |
| hardware.temperature.celsius  | temperature of the different sensors      | C    |
| hardware.voltage.millivolt    | Voltage of the different sensors          | mV   |

<!--Memory-->

| Metric name              | Description                | Unit |
| :----------------------- | :------------------------- |:---- |
| memory.usage.bytes       | Memory usage               | B    |
| memory.free.bytes        | Free memory                | B    |
| memory.usage.percentage  | Memory usage in percentage | %    |
| memory.buffer.bytes      | Buffer memory              | B    |  
| memory.cached.bytes      | Memory cached              | B    |  

<!--Storage-->                                                        

| Metric name                            | Description                     | Unit  |
| :------------------------------------- | :------------------------------ |:----- |
| storage.partitions.count               | Number of disk partition.       | count |
| storage.space.usage.bytes              | Used space on a disk partition. | B     |
| storage.access                         | Access disk partition.          |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration Lenovo Iomega 

Afin de contrôler vos équipements Lenovo Iomega, le SNMP v2 doit être configuré.

### Flux de réseaux

La communication doit être possible sur le port UDP 161 de l'équipement Lenovo Iomega supervisé depuis le Collecteur Centreon.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Lenovo Iomega SNMP :

```bash
yum install centreon-plugin-Hardware-Storage-Lenovo-Iomega-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Lenovo Iomega* depuis la page "Configuration > Plugin-Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Lenovo Iomega SNMP :

```bash
yum install centreon-plugin-Hardware-Storage-Lenovo-Iomega-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-hardware-storage-lenovo-iomega-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Lenovo Iomega* depuis la page "Configuration > Plugin-Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par équipement Lenovo Iomega.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle HW-Storage-Lenovo-Iomega-SNMP-custom. 
Il est nécessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".
Une fois celui-ci configuré, certaines macros doivent être renseignées:

:warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée 
et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP de Dell Xseries                                                          |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur _centreon-engine_ :

```bash
/usr/lib/centreon/plugins/centreon_lenovo_iomega_snmp.pl
    --plugin=storage::lenovo::iomega::snmp::plugin
    --mode=cpu
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='iomega_ro'
	--warning-average='60'
	--critical-average='75'
    --verbose
	
OK: CPU(s) average usage is 15.29 % - CPU '0' usage : 15.29 % 
| 'total_cpu_avg'=15.29%;0:60;0:75;0;100 'cpu'=15.29%;;;0;100
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *iomega_ro* (```--snmp-community='iomega_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation moyenne CPU est à plus de 60% (```--warning-average='60'```)
et une alarme CRITICAL si plus de 75% (```--critical-average='75'```).

Des seuils peuvent être fixés sur toutes les métriques de l'appareil en utilisant la syntaxe "```--warning-*metric* --critical-*metric*```".
 
Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins/centreon_lenovo_iomega_snmp.pl
    --plugin=storage::lenovo::iomega::snmp::plugin
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter le serveur Linux sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement Lenovo Iomega ne prend pas en charge la MIB utilisée par le Plugin.
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
 
Si cela se produit sur le mode Inodes, il est probable que le service SNMP du serveur Linux ne soit pas correctement configuré, il vous faut ajouter la directive 
ci-dessous dans le fichier de configuration SNMP puis redémarrer le service: 
```includeAllDisks 10%```
