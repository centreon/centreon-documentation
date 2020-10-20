---
id: network-dell-os10-snmp
title: Dell OS10 SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

* Dell OS 10 incluant le CPU, Usage du Disque, Hardware, Inodes, Interfaces, Load, Memoire, Swap et l'Uptime.

### Métriques collectées
<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                      | Description           | Unit |
| :------------------------------- | :-------------------- | :--- |
| cpu.utilization.percentage       | CPU utilization.      | %    |
| core.cpu.utilization.percentage  | CPU Core utilization. | %    |

<!--Disk-usage-->

| Metric name                     | Description                      | Unit  |
| :------------------------------ | :------------------------------- | :---- |
| storage.partitions.count        | Number of partitions storage     | count |
| storage.space.usage.bytes       | Usage Space Storage              | B     |
| storage.space.free.bytes        | Free Space storage               | B     |
| storage.space.usage.percentage  | Usage Space in percentage        | %     |
| storage.inodes.usage.percentage | Inode usage in percentage        | %     |

Il est possible de filtrer les résultats sur le chemin de disque donné en utilisant une REGEXP sur le paramètre ```--disk-path```: [```--disk-patch='^my-disk-path$'```]

<!--Inodes-->

| Metric name                 | Description                       | Unit |
| :-------------------------- | :---------------------------------| :--- |
| used                        | Inodes space usage on partitions. | %    |

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

Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de la forme [```--interface='^ens160$' --name```]

<!--Hardware-->

* Par intances :

| Metric name                   | Description                               | Unit |
|:----------------------------- |:----------------------------------------- | :--- |
| os10CardStatus                | Status of the card                        |      |
| os10FanOperStatus             | Status of the fan                         |      |
| os10FanTrayOperStatus         | Status of the fantray                     |      |
| os10PowerSupplyOperStatus     | Status of the power supply                |      |
| resource.oper_status          | Status of the resources                   |      |
| hardware.temperature.celsius  | Temperature of the different sensors      | C    |

<!--Load-->

| Metric name                 | Description                      | Unit |
| :-------------------------- | :--------------------------------| :--- |
| load1                       | System load 1 minute sample      |      |
| load5                       | System load 5 minutes sample     |      |
| load15                      | System load 15 minutes sample    |      |

<!--Memory-->

| Metric name             | Description                | Unit |
| :---------------------- | :------------------------- | :--- |
| memory.usage.bytes      | Memory usage               | B    |
| memory.free.bytes       | Free memory                | B    |
| memory.usage.percentage | Memory usage in percentage | %    |
| memory.buffer.bytes     | Buffer memory              | B    |  
| memory.cached.bytes     | Memory cached              | B    |
| memory.shared.bytes     | Shared Memory allocation   | B    |

<!--Swap-->

| Metric name                 | Description   | Unit |
| :-------------------------- | :------------ | :--- |
| swap.usage.bytes            | Swap usage    | B    |
| swap.free.bytes             | Swap free     | B    |
| swap.usage.percentage       | Swap usage    | %    |

<!--Uptime-->

| Metric name                 | Description                                        | Unit |
| :-------------------------- | :------------------------------------------------- | :--- |
| system.uptime               | Duration of system has been working and available. | s    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler vos équipements Dell OS10, le SNMP v2 doit être configuré.
Pour plus d'information, vous pouvez vous référer à la documentation utilisateur officiel :
https://www.dell.com/support/manuals/fr/fr/frbsdt1/networking-z9100/os10-enterprise-user-guide-10_4_2-pub/configure-snmp?guid=guid-cf75b1b6-5c24-4237-af0c-b9ed1f491b75&lang=en-us

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Dell OS10 :

```bash
yum install centreon-plugin-Network-Dell-Os10-Snmp.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Dell OS10 SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Dell OS10 :

```bash
yum install centreon-plugin-Network-Dell-Os10-Snmp.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-dell-os10-snmp.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Dell OS10 SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par équipement Dell OS10.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle Net-Dell-Os10-SNMP-custom. 
Il est nécessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".

:warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée 
et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP de Dell Xseries                                                          |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur _centreon-engine_ :

```bash
/usr/lib/centreon/plugins/centreon_dell_os10_snmp.pl \
    --plugin=network::dell::os10::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='dell_os10_ro' \
    --warning-average='60' \
    --critical-average='75' \
    --verbose
	
OK: CPU(s) average usage is 15.29 % - CPU '0' usage : 15.29 % 
| 'total_cpu_avg'=15.29%;0:60;0:75;0;100 'cpu'=15.29%;;;0;100
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *dell_os10_ro* (```--snmp-community='dell_os10_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation moyenne CPU est à plus de 60% (```--warning-average='60'```)
et une alarme CRITICAL si plus de 75% (```--critical-average='75'```).

Des seuils peuvent être fixés sur toutes les métriques de l'appareil en utilisant la syntaxe "```--warning-*metric* --critical-*metric*```".
 
Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins/centreon_dell_os10_snmp.pl 
	--plugin=network::dell::os10::snmp::plugin \
	--mode=cpu \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Dell OS10 sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement Dell OS10 ne prend pas en charge la MIB utilisée par le Plugin.
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
