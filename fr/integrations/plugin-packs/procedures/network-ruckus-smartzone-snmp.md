---
id: network-ruckus-smartzone-snmp
title: Ruckus Smartzone
---

## Vue d'ensemble

Les contrôleurs réseau Ruckus SmartZone sont les premières appliances du secteur à permettre au service informatique de gérer les réseaux LAN et WLAN en utilisant un seul système géré par des contrôleurs avec une seule interface utilisateur

## Contenu du Plugin-Pack

### Elements supervisés

* Point d'accès
* Contrôleur

### Règles de découverte

<!--Services-->

| Rule name                              | Description                                            |
| :------------------------------------- | :----------------------------------------------------- |
| Net-Ruckus-Smartzone-SNMP-Ap-Name      |  Découverte des points d'accès gérés par un contrôleur |
| Net-Ruckus-Smartzone-SNMP-Disk-Name    |  Découverte des points de montage d'un contrôleur      |
| Net-Ruckus-Smartzone-SNMP-Traffic-Name |  Découverte des interfaces d'un contrôleur             |


### Métriques collectées 

<!--DOCUSAURUS_CODE_TABS-->

<!--Access-Point-->

| Metric name                                            | Description                                                                            |
| :----------------------------------------------------- | :------------------------------------------------------------------------------------- |
| connection_status                                      | The connection status.                                                                 |
| config_status                                          | The registration status, which could either be pending, approved, rejected or swapped. |
| registration_status                                    | The AP configuration status.                                                           |
| accesspoint.connection.client.devices.authorized.count | The number of stations. Unit: Count                                                    |
| accesspoint.traffic.in.bitspersecond                   | Incoming traffic going through the access point. Unit: bits/second                     |
| accesspoint.traffic.out.bitspersecond                  | Outgoing traffic going through the access point. Unit: bits/second                     |

<!--Cpu-->

| Metric name                     | Description                        |
| :------------------------------ | :--------------------------------- |
| cpu.utilization.percentage      | CPU utilization. Unit : %          |
| core.cpu.utilization.percentage | Per Core CPU utilization. Unit : % |

<!--Interfaces-->

| Metric name                              | Description                                                      |
| :--------------------------------------- | :--------------------------------------------------------------- |
| status                                   | Status of the interface                                          |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface. Unit: bits/second  |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface. Unit: bits/second  |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface. Units: %   |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. Units: % |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface. Units: %   |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. Units: % |

<!--Load-->

| Metric name | Description                   |
| :---------- | :---------------------------- |
| load1       | System load 1 minute-sample   |
| load5       | System load 5 minutes-sample  |
| load15      | System load 15 minutes-sample |

<!--Memory-->

| Metric name             | Description                                        |
| :---------------------  | :------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Unit : Bytes           |
| memory.free.bytes       | Free memory on the device. Unit : Bytes            |
| memory.usage.percentage | Percentage of Memory usage on the device. Unit : % |
| memory.buffer.bytes     | Buffered Memory allocation. Unit : Bytes           |
| memory.cached.bytes     | Cached Memory allocation. Unit : Bytes             |
| memory.shared.bytes     | Shared Memory allocation. Unit : Bytes             |

<!--Storage-->

| Metric name               | Description                                 |
| :------------------------ | :------------------------------------------ |
| storage.space.usage.bytes | Used space on a disk partition. Unit: Bytes |

<!--System-->

| Metric name                                       | Description                                                  |
| :------------------------------------------------ | :----------------------------------------------------------- |
| system.connection.accesspoints.count              | The number of APs. Unit: Count                               |
| system.connection.client.devices.authorized.count | The number of associated clients. Unit: Count                |
| system.traffic.in.bitspersecond                   | Incoming traffic going through the system. Unit: bits/second |
| system.traffic.out.bitspersecond                  | Outgoing traffic going through the system. Unit: bits/second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'équipement

Pour utiliser ce Plugin-Pack, vous devez configurer le service SNMP sur l'équipement. Une description complète est disponible sur le site officiel de Ruckus: http://docs.ruckuswireless.com/smartzone/3.6.1/sz100-vsze-administrator-guide/GUID-F08BF334-2116-47A5-900C-B6AA4FC5E62A.html

### Flux réseaux

Les Collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP avec l'équipement.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des équipements Ruckus:

```bash
yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp
```

2. Installer le Plugin-Pack 'Ruckus Smartzone' depuis l'interface Web et la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisants des équipements Ruckus:

```bash
yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp
```

2. Installer le RPM pour avoir à disposition le Plugin-Pack dans l'interface Web de Centreon:

```bash
yum install centreon-pack-network-ruckus-smartzone-snmp.noarch
```

3. Installer le Plugin-Pack 'Ruckus Smartzone' depuis la page "Configuration > Plugin Packs > Manager" de l'interface Web. 

<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquer le modèle "Net-Ruckus-Smartzone-SNMP-custom" et configurer les champs 'SNMP Community' et 'SNMP Version' selon la configuration de l'équipement.

:warning: Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS

| Mandatory   | Nom              | Description                                                                |
| :---------- | :--------------- | :------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ? 

Une fois le Plugin installé, vous pouvez le tester en ligne de commande avec l'utilisateur centreon-engine: 

```bash
/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \
	--plugin=network::ruckus::smartzone::snmp::plugin \
	--mode=cpu \
	--hostname=ruckus.int.centreon.com \
	--snmp-version='2c' \
	--snmp-community='ruckus_smartzone' \
        --verbose 
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse/FQDN ruckus.int.centreon.com (```--hostname=ruckus.int.centreon.com```) en version 2 du protocole SNMP et avec la communauté ruckus_smartzone (```--snmp-version='2c' --snmp-community='ruckus-smartzone'```) 

Tous les modes disponibles peuvent être affichés via l'option --list-mode:

```bash
/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \
    --plugin=network::ruckus::smartzone::snmp::plugin \
    --list-mode
```

Pour un mode en particulier, il est possible d'utiliser le paramètre  ```--help``` pour lister toutes les options disponibles. 

```bash
/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \
    --plugin=network::ruckus::smartzone::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le Collecteur Centreon ne parvient pas à contacter l'équipement Ruckus sur le port 161 (firewall ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes. L'agent SNMP doit être en mesure d'accéder à la branche entreprise Ruckus: .1.3.6.1.4.1.25053. 
