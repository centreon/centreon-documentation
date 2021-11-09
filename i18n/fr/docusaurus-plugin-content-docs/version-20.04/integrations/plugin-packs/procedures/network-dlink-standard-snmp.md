---
id: network-dlink-standard-snmp
title: D-Link standard SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

D-Link standard inclue le CPU, Hardware, Inodes, Interfaces, Memoire et Stack.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                         | Description           | Unit |
| :---------------------------------- | :-------------------- | :--- |
| cpu.utilization.5s.percentage       | CPU utilization       | %    |
| cpu.utilization.1m.percentage       | CPU utilization       | %    |
| cpu.utilization.5m.percentage       | CPU utilization       | %    |
| core.cpu.utilization.5s.percentage  | CPU Core utilization  | %    |
| core.cpu.utilization.1m.percentage  | CPU Core utilization  | %    |
| core.cpu.utilization.5m.percentage  | CPU Core utilization  | %    |

<!--Interfaces-->

| Metric name                              | Description                                             | Unit |
|:---------------------------------------- |:------------------------------------------------------- | :--- |
| status                                   | Status of the interface                                 |      |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de la forme [```--interface='^eth1/0/1$' --name```]

<!--Hardware-->

* Par intances :

| Metric name                   | Description                               | Unit |
|:----------------------------- |:----------------------------------------- | :--- |
| fan-status                    | Status of the fan                         |      |
| psu-status                    | Status of the power supply                |      |
| temperature-status            | Status of temperature sensor              |      |
| hardware.temperature.celsius  | Temperature of the different sensors      | C    |

<!--Memory-->

| Metric name             | Description                | Unit |
| :---------------------- | :------------------------- | :--- |
| memory.usage.bytes      | Memory usage               | B    |
| memory.free.bytes       | Free memory                | B    |
| memory.usage.percentage | Memory usage in percentage | %    |

<!--Stack-->

| Metric name               | Description                | Unit |
| :------------------------ | :------------------------- | :--- |
| member-status             | Status of stack member     |      |
| link-status               | Status of stack links      |      |
| stack.members.total.count | Number of members in stack |      |

Sur certains équipements, il n'y a pas d'informations pour ```link-status```.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler vos équipements D-Link, le SNMP v2 doit être configuré.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Dlink-Standard-Snmp.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *D-Link Network* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Dlink-Standard-Snmp.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install network-dlink-standard-snmp.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *D-Link Network* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par équipement D-Link.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *Net-Dlink-Standard-SNMP-custom*. 
Il est nécessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".

:warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée 
et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name                    | Description                                                                          |
| :---------- | :---------------------- | :----------------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP de D-Link                                                         |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_dlink_standard_snmp.pl \
    --plugin=network::dlink::standard::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='dlink_ro' \
    --warning-average-5m='60' \
    --critical-average-5m='75' \
    --verbose

OK: 1 CPU(s) average usage is 16.00 % (5s) 14.00 % (1m) 14.00 % (5m) - CPU 'unit1~1' usage 16.00 % (5s) 14.00 % (1m) 14.00 % (5m) | 'cpu.utilization.5s.percentage'=16.00%;;;0;100 'cpu.utilization.1m.percentage'=14.00%;;;0;100 'cpu.utilization.5m.percentage'=14.00%;0:60;0:75;0;100 'unit1~1#core.cpu.utilization.5s.percentage'=16.00%;;;0;100 'unit1~1#core.cpu.utilization.1m.percentage'=14.00%;;;0;100 'unit1~1#core.cpu.utilization.5m.percentage'=14.00%;;;0;100
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *dlink_ro* (```--snmp-community='dlink_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation moyenne CPU sur 5 minutes est à plus de 60% (```--warning-average-5m='60'```)
et une alarme CRITICAL si plus de 75% (```--critical-average-5m='75'```).

Des seuils peuvent être fixés sur toutes les métriques de l'appareil en utilisant la syntaxe "```--warning-*metric* --critical-*metric*```".
 
Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins/centreon_dlink_standard_snmp.pl \
    --plugin=network::dlink::standard::snmp::plugin \
	--mode=cpu \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement D-Link sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement D-Link ne prend pas en charge la MIB utilisée par le Plugin.
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
