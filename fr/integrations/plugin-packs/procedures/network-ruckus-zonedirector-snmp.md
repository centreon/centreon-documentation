---
id: network-ruckus-zonedirector-snmp
title: Ruckus Zonedirector
---

## Vue d'ensemble

Le ZoneDirector de Ruckus Wireless est le système de réseau sans fil (WLAN) intelligent et géré de façon centralisée spécialement conçu par Ruckus pour les petites et moyennes entreprises (PME).

## Contenu du Plugin-Pack

### Elements supervisés

* Point d'accès
* Contrôleur

### Règles de découverte

<!--Services-->

| Rule name                            | Description                                           |
| :----------------------------------- | :---------------------------------------------------- |
| Net-Ruckus-Zonedirector-SNMP-Ap-Name | Découverte des points d'accès gérés par un contrôleur |


### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Access-Point-->

| Metric name                                            | Description                                                                             |
| :----------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| zd_connection_status                                   | The connection status with Zonedirector controller.                                     |
| accesspoint.cpu.utilization.percentage                 | Cpu utilization by AP. Unit: %                                                          |
| accesspoint.memory.usage.bytes                         | Memory used by AP. Unit: Bytes                                                          |
| accesspoint.memory.free.bytes                          | Memory free by AP. Unit: Bytes                                                          |
| accesspoint.memory.usage.percentage                    | Memory used by AP. Unit: %                                                              |
| accesspoint.connection.accesspoints                    | Number of APs. Unit: Count                                                              |
| accesspoint.connection.client.devices.authorized.count | Total number of authenticated terminal which is using currently on this AP. Unit: Count |
| accesspoint.connection.rogue.devices.count             | Number of rogue devices. Unit: Count                                                    |
| accesspoint.traffic.in.bitspersecon                    | Incoming traffic going through the access point. Unit: bits/second                      |
| accesspoint.traffic.out.bitspersecond                  | Outgoing traffic going through the access point. Unit: bits/second                      |

<!--System-->

| Metric name                                       | Description                                                  |
| :------------------------------------------------ | :----------------------------------------------------------- |
| system_status                                     | System status.                                               |
| peer_connected_status                             | Peer connection status.                                      |
| system.cpu.utilization.percentage                 | Cpu utilization of the controller. Unit: %                   | 
| system.memory.usage.bytes                         | Memory used by the controller. Unit: Bytes                   |
| system.memory.free.bytes                          | Memory free of the controller. Unit: Bytes                   |
| system.memory.usage.percentage                    | Memory used by the controller. Unit: %                       |
| system.connection.accesspoints.count              | Number of APs. Unit: Count                                   |
| system.connection.client.devices.authorized.count | Number of associated clients. Unit: Count                    |
| system.connection.rogue.devices.count             | Number of rogue devices. Unit: Count                         |
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

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des équipements Ruckus Zonedirector:

```bash
yum install centreon-plugin-Network-Ruckus-Zonedirector-Snmp
```

2. Installer le Plugin-Pack 'Ruckus Zonedirector' depuis l'interface Web et la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisants des équipements Ruckus Zonedirector:

```bash
yum install centreon-plugin-Network-Ruckus-Zonedirector-Snmp
```

2. Installer le RPM pour avoir à disposition le Plugin-Pack dans l'interface Web de Centreon:

```bash
yum install centreon-pack-network-ruckus-zonedirector-snmp.noarch
```

3. Installer le Plugin-Pack 'Ruckus ZoneDirector' depuis la page "Configuration > Plugin Packs > Manager" de l'interface Web.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquer le modèle "Net-Ruckus-Zonedirector-SNMP-custom" et configurer les champs 'SNMP Community' et 'SNMP Version' selon la configuration de l'équipement.

:warning: Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS

| Mandatory   | Nom              | Description                                                                |
| :---------- | :--------------- | :------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ? 

Une fois le Plugin installé, vous pouvez le tester en ligne de commande avec l'utilisateur centreon-engine: 

```bash
/usr/lib/centreon/plugins//centreon_ruckus_zonedirector_snmp.pl \
	--plugin=network::ruckus::zonedirector::snmp::plugin \
	--mode=system \
	--hostname=ruckus.int.centreon.com \
	--snmp-version='2c' \
	--snmp-community='ruckus_zonedirector' \
        --verbose 
```

Cette commande contrôle l'utilisation système (```--mode=system```) d'un équipement ayant pour adresse/FQDN ruckus.int.centreon.com (```--hostname=ruckus.int.centreon.com```) en version 2 du protocole SNMP et avec la communauté ruckus_zonedirector (```--snmp-version='2c' --snmp-community='ruckus_zonedirector'```) 

Tous les modes disponibles peuvent être affichés via l'option --list-mode:

```bash
/usr/lib/centreon/plugins//centreon_ruckus_zonedirector_snmp.pl \
    --plugin=network::ruckus::zonedirector::snmp::plugin \
    --list-mode
```

Pour un mode en particulier, il est possible d'utiliser le paramètre  ```--help``` pour lister toutes les options disponibles. 

```bash
/usr/lib/centreon/plugins//centreon_ruckus_zonedirector_snmp.pl \
    --plugin=network::ruckus::zonedirector::snmp::plugin \
    --mode=system \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le Collecteur Centreon ne parvient pas à contacter l'équipement Ruckus sur le port 161 (firewall ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes. L'agent SNMP doit être en mesure d'accéder à la branche entreprise Ruckus: .1.3.6.1.4.1.25053. 
