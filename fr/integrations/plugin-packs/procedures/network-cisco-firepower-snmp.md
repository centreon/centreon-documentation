---
id: network-cisco-firepower-snmp
title: Cisco Firepower SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le plugin-pack Cisco Firepower inclue la supervision CPU, Faults, Hardware, Interfaces et Memory.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                                     | Description           | Unit |
| :---------------------------------------------- | :-------------------- | :--- |
| *securitymodule*#cpu.utilization.1m.percentage  | CPU utilization       | %    |
| *securitymodule*#cpu.utilization.5m.percentage  | CPU utilization       | %    |
| *securitymodule*#cpu.utilization.15m.percentage | CPU utilization       | %    |

<!--Faults-->

| Metric name            | Description                                       | Unit |
| :--------------------- | :------------------------------------------------ | :--- |
| fault status           | Bank status, possible to set string-based alerts  |      |
| faults.total.count     | Number of total faults                            |      |
| faults.info.count      | Number of informational faults                    |      |
| faults.minor.count     | Number of minor faults                            |      |
| faults.warning.count   | Number of warning faults                          |      |
| faults.major.count     | Number of major faults                            |      |
| faults.critical.count  | Number of critical faults                         |      |

<!--Interfaces-->

| Metric name                                              | Description                                             | Unit |
|:-------------------------------------------------------- |:------------------------------------------------------- | :--- |
| interface status                                         | Status of the interface                                 |      |
| *interfacename*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| *interfacename*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| *interfacename*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| *interfacename*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| *interfacename*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| *interfacename*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

It is possible to filter on the name of an interface using a REGEXP of the form [```--interface='^eth1/0/1$' --name```].

<!--Hardware-->

| Metric name                                    | Description                     | Unit |
| :--------------------------------------------- | :------------------------------ | :--- |
| chassis status                                 | Status of the chassis           |      |
| *dn*#hardware.chassis.input.power.watt         | Input power of the chassis      | W    |
| *dn*#hardware.chassis.output.power.watt        | Output power of the chassis     | W    |
| cpuunit status                                 | Status of the cpu unit          |      |
| *dn*#hardware.cpuunit.temperature.celsius      | Status of the cpu unit          | C    |
| fan status                                     | Status of the fan               |      |
| *dn*#hardware.fan.speed.rpm                    | Speed of the fan                | rpm  |
| fanmodule status                               | Status of the fan module        |      |
| *dn*#hardware.fanmodule.temperature.celsius    | Temperature of the fan module   | C    |
| memoryunit status                              | Status of the memory unit       |      |
| *dn*#hardware.memoryunit.temperature.celsius   | Temperature of the memory unit  | C    |
| psu status                                     | Status of the power supply      |      |
| *dn*#hardware.powersupply.temperature.celsius  | Temperature of the power supply | C    |

<!--Memory-->

| Metric name                              | Description                | Unit |
| :--------------------------------------- | :------------------------- | :--- |
| *securitymodule*#memory.usage.bytes      | Memory usage               | B    |
| *securitymodule*#memory.free.bytes       | Free memory                | B    |
| *securitymodule*#memory.usage.percentage | Memory usage in percentage | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler vos équipements Cisco Firepower, le SNMP doit être configuré (cf: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian.html)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Snmp.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco Firepower SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Snmp.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-cisco-firepower-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco Firepower SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par équipement Cisco Firepower.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *Net-Cisco-Firepower-SNMP-custom*. 
Il est nécessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".

:warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée 
et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name                    | Description                                                                 |
| :---------- | :---------------------- | :-------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                                                          |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
    --plugin=network::cisco::firepower::fxos::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='cisco_ro' \
    --warning-average-5m='60' \
    --critical-average-5m='75' \
    --verbose

OK: Security module 'sec-svc/slot-1' CPU average usage: 42.00 % (1m), 42.00 % (5m), 42.00 % (15m) | 'sec-svc/slot-1#cpu.utilization.1m.percentage'=42.00%;;;0;100 'sec-svc/slot-1#cpu.utilization.5m.percentage'=42.00%;;;0;100 'sec-svc/slot-1#cpu.utilization.15m.percentage'=42.00%;;;0;100
Security module 'sec-svc/slot-1' CPU average usage: 42.00 % (1m), 42.00 % (5m), 42.00 % (15m)
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *cisco_ro* (```--snmp-community='cisco_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation moyenne CPU sur 5 minutes est à plus de 60% (```--warning-average-5m='60'```)
et une alarme CRITICAL si plus de 75% (```--critical-average-5m='75'```).

Des seuils peuvent être fixés sur toutes les métriques de l'appareil en utilisant la syntaxe "```--warning-*metric* --critical-*metric*```".
 
Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
    --plugin=network::cisco::firepower::fxos::snmp::plugin \
	--mode=cpu \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Cisco Firepower sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement Cisco Firepower ne prend pas en charge la MIB utilisée par le Plugin.
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
