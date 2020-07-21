---
id: hardware-devices-timelinkmicro-tms6001-snmp
title: Timelinkmicro Tms6001
---

## Vue d'ensemble

TimeLink microsystems fournit des solutions basées sur une gamme complète de produits COTS et conçoit des équipements ou 
systèmes spécifiques selon les besoins des utilisateurs. Le modèle Tms6001 est unserveur Serveur NTP performant & sécurisé 
avec référence GNSS et IRIGB

## Contenu du Plugin-Pack

### Elements supervisés

* Tms6001                  

## Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name             | Description        | Unit  |
| :---------------------- | :----------------- | :---- |
| alarms.total.count      | Number of alarms.  | Count |

<!--Antenna-->

| Metric name             | Description                 | Unit   |
| :---------------------  | :-------------------------- | :----- |
| status     			  | Antenna status              | String |


<!--Frequency-->

| Metric name                              | Description                       | Unit  | 
| :--------------------------------------- | :-------------------------------- |------ |
| generation.frequency.quality.count       | Quality of frequency generation:  | Count |


<!--Gnss-->

| Metric name                   | Description                                    | Unit   |
| :---------------------------- | :----------------------------------------------| :----- |
| status              			| A textual description of physical entity.      | String |

<!--Satellites-->

| Metric name                   | Description                | Unit  |
| :---------------------------- | :------------------------- | :---- |
| satellites.seen.count         | Number of satellites seen. | Count |

<!--Time-->

| Metric name                   | Description                 | Unit  |
| :---------------------------- | :-------------------------- | :---- |
| generation.time.quality.count | Quality of time generation. | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'équipement

Il faut activer le SNMP sur l'équipement Tms6001

### Flux réseaux

Les Collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP avec l'équipement.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des équipements Tms6001:

```bash
yum install centreon-plugin-Hardware-Devices-Timelinkmicro-Tms6001-Snmp
```

2. Installer le Plugin-Pack 'Timelinkmicro-Tms6001-Snmp' depuis l'interface Web et la page "Configuration > Plugin packs > Manager"


<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisants des équipements Tms6001:

```bash
yum install centreon-plugin-Hardware-Devices-Timelinkmicro-Tms6001-Snmp
```

2. Installer le RPM pour avoir à disposition le Plugin-Pack dans l'interface Web de Centreon:

```bash
yum install centreon-pack-hardware-devices-timelinkmicro-tms6001-snmp
```

3. Installer le Plugin-Pack 'Timelinkmicro-Tms6001-Snmp' depuis la page "Configuration > Plugin packs > Manager" de l'interface Web. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration d'un hôte

Lorsque vous ajoutez un hôte, complétez les champs 'Communauté Snmp' et 'Version Snmp' pour refléter la configuration de l'équipement cible. 

  :warning: Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ? 

Une fois le Plugin installé, vous pouvez le tester en ligne de commande avec l'utilisateur centreon-engine: 

```bash
/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \
	--plugin=hardware::devices::timelinkmicro::tms6001::snmp \
	--mode=alarms \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='timelink_ro' \
  	--verbose 
```

Cette commande contrôle le nombre d'alarmes (```--mode=alarms```) d'un équipement ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) en version 2 du protocole SNMP et avec la communauté timelink_ro (```--snmp-version='2c' --snmp-community='timelink_ro'```) 

Tous les modes disponibles peuvent être affichés via l'option --list-mode:

```bash
/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \
    --plugin=hardware::devices::timelinkmicro::tms6001::snmp \
    --list-mode
```

Pour un mode en particulier, il est possible d'utiliser le paramètre  ```--help``` pour lister toutes les options disponibles. 

```bash
/usr/lib/centreon/plugins//centreon_timelinkmicro_tms6001_snmp.pl \
    --plugin=hardware::devices::timelinkmicro::tms6001::snmp \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient pas à contacter l'équipement Tms6001 sur le port 161 (firewall ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes.