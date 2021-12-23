---
id: network-fortinet-fortiweb-snmp
title: Fortinet FortiWeb SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack Fortinet FortiWeb SNMP collecte les données pour:
* Interfaces
* Proxy
* System

### Règles de découvertes

<Tabs groupId="operating-systems">
<TabItem value="Services" label="Services">

| Nom de la règle                             | Description                                                                                  |
| :------------------------------------------ | :------------------------------------------------------------------------------------------- |
| Net-Fortinet-Fortiweb-SNMP-Interface-Name   | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

</TabItem>
</Tabs>

### Métriques collectées

<Tabs groupId="operating-systems">
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

</TabItem>
<TabItem value="Proxy" label="Proxy">

| Metric name                 | Description                   | Unit |
| :-------------------------- | :---------------------------- | :--- |
| proxy.connections.count     | Current number of connections |      |
| proxy.connections.persecond | Average number of connections |      |
| proxy.services.count        | Number of services            |      |

</TabItem>
<TabItem value="System" label="System">

| Metric name                     | Description              | Unit |
| :------------------------------ | :----------------------- | :--- |
| ha status                       | High-availability status |      |
| cpu.utilization.percentage      | CPU utilization          | %    |
| memory.usage.percentage         | Memory usage             | %    |
| disk.log.space.usage.percentage | Log disk usage           | %    |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Fortinet FortiWeb, le SNMP doit être configuré.

Le flux SNMP UDP/161 doit être ouvert entre le Collecteur et l'équipement.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fortinet-Fortiweb-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Fortinet FortiWeb SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fortinet-Fortiweb-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-network-fortinet-fortiweb-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Fortinet FortiWeb SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Fortinet-Fortiweb-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiweb_snmp.pl \
--plugin=network::fortinet::fortiweb::snmp::plugin \
--mode=system \
--hostname=10.30.2.114 \
--snmp-version='2c' \
--snmp-community='fortinet_ro' \
--warning-cpu-load='90' \
--critical-cpu-load='95' \
--verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: system usage is ok | 'cpu.utilization.percentage'=12.00%;0:90;0:95;0;100 'memory.usage.percentage'=79.00%;;;0;100 'disk.log.space.usage.percentage'=74.00%;;;0;100
checking system
high-availability mode: standalone
cpu load: 12.00 %
memory used: 79.00 %
disk log space used: 74.00 %
```

Cette commande contrôle le système (```--mode=system```) d'un équipement Fortinet FortiWeb ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```)
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *infoblox_ro* (```--snmp-community='fortinet_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-cpu-utilization='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-cpu-utilization='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiweb_snmp.pl \
--plugin=network::fortinet::fortiweb::snmp::plugin \
--mode=system \
--help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins)
