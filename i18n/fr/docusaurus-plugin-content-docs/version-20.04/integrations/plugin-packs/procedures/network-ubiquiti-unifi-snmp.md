---
id: network-ubiquiti-unifi-snmp
title: Ubiquiti UniFi SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack Ubiquiti UniFi collecte les données pour:
* Cpu
* Disks
* Interfaces
* Load
* Memory
* Swap
* Uptime
* Virtual Access Points

### Règles de découvertes

<Tabs groupId="operating-systems">
<TabItem value="Services" label="Services">

| Nom de la règle                        | Description                                                                                  |
| :------------------------------------- | :------------------------------------------------------------------------------------------- |
| Net-Ubiquiti-Unifi-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

</TabItem>
</Tabs>

### Métriques collectées

<Tabs groupId="operating-systems">
<TabItem value="Cpu" label="Cpu">

| Metric name                           | Description                 | Unit  |
| :------------------------------------ | :-------------------------- | :---- |
| cpu.user.utilization.percentage       | CPU User utilization        | %     |
| cpu.nice.utilization.percentage       | CPU Nice utilization        | %     |
| cpu.system.utilization.percentage     | CPU System utilization      | %     |
| cpu.idle.utilization.percentage       | CPU Idle utilization        | %     |
| cpu.wait.utilization.percentage       | CPU Wait utilization        | %     |
| cpu.kernel.utilization.percentage     | CPU Kernel utilization      | %     |
| cpu.interrupt.utilization.percentage  | CPU Interrupt utilization   | %     |
| cpu.softirq.utilization.percentage    | CPU SoftIrq utilization     | %     |
| cpu.steal.utilization.percentage      | CPU Steal utilization       | %     |
| cpu.guest.utilization.percentage      | CPU Guest utilization       | %     |
| cpu.guestnice.utilization.percentage  | CPU Guest Nice utilization  | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                     | Description                      | Unit  |
| :------------------------------ | :------------------------------- | :---- |
| storage.partitions.count        | Number of partitions storage     |       |
| storage.space.usage.bytes       | Usage Space Storage              | B     |
| storage.space.free.bytes        | Free Space storage               | B     |
| storage.space.usage.percentage  | Usage Space in percentage        | %     |
| storage.inodes.usage.percentage | Inode usage in percentage        | %     |

</TabItem>
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
<TabItem value="Load" label="Load">

| Metric name            | Description                                                       | Unit |
| :--------------------- | :---------------------------------------------------------------- | :--- |
| load.1m.count          | System load 1 minute-sample                                       |      |
| load.5m.count          | System load 5 minutes-sample                                      |      |
| load.15m.count         | System load 15 minutes-sample                                     |      |
| load.1m.average.count  | System load 1 minute-sample divided by the number of processors   |      |
| load.5m.average.count  | System load 5 minutes-sample divided by the number of processors  |      |
| load.15m.average.count | System load 15 minutes-sample divided by the number of processors |      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |
| memory.free.bytes       | Free memory on the device                | B     |
| memory.usage.percentage | Percentage of memory usage on the device | %     |
| memory.buffer.bytes     | Buffered memory allocation               | B     |
| memory.cached.bytes     | Cached memory allocation                 | B     |
| memory.shared.bytes     | Shared memory allocation                 | B     |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name                 | Description             | Unit   |
| :-------------------------- | :---------------------- | :----- |
| swap.usage.bytes            | Used swap               | B      |
| swap.free.bytes             | Free swap               | B      |
| swap.usage.percentage       | Percentage of used swap | %      |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

</TabItem>
<TabItem value="Virtualaccesspoints" label="Virtualaccesspoints">

| Metric name                                                | Description                               | Unit   |
| :--------------------------------------------------------- | :---------------------------------------- | :----- |
| virtual_access_points.total.count                          | Number of virtual access points           |        |
| virtual_access_points.clients.connected.count              | Number of virtual access points connected |        |
| status                                                     | Status of the virtual access point        |        |
| *vap_name*\#virtual_access_point.clients.connected.count   | Number of clients connected               | dBm    |
| *vap_name*\#virtual_access_point.traffic.in.bitspersecond  | Incoming traffic                          | b/s    |
| *vap_name*\#virtual_access_point.traffic.out.bitspersecond | Outgoing traffic                          | b/s    |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Ubiquiti UniFi, le SNMP doit être configuré.

Le flux SNMP UDP/161 doit être ouvert entre le Collecteur et l'équipement.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Ubiquiti-Unifi-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Ubiquiti UniFi SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Ubiquiti-Unifi-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-network-ubiquiti-unifi-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Ubiquiti UniFi SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Ubiquiti-Unifi-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_unifi_snmp.pl \
--plugin=network::ubiquiti::unifi::snmp::plugin \
--mode=disks \
--hostname=10.30.2.114 \
--snmp-version='2c' \
--snmp-community='ubiquiti_ro' \
--filter-disk-path='^/$' \
--warning-usage-prct='90' \
--critical-usage-prct='95' \
--verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Partition '/' usage total: 46.82 GB used: 26.41 GB (56.40%) free: 20.41 GB (43.60%), Inodes used: 2 % | 'storage.partitions.count'=1;;;0; '/#storage.space.usage.bytes'=28356739072B;;;0;50273779712 '/#storage.space.free.bytes'=21917040640B;;;0;50273779712 '/#storage.space.usage.percentage'=56.40%;0:90;0:95;0;100 '/#storage.inodes.usage.percentage'=2%;;;0;100
Partition '/' usage total: 46.82 GB used: 26.41 GB (56.40%) free: 20.41 GB (43.60%), Inodes used: 2 %
```

Cette commande contrôle les disques (```--mode=disks```) d'un équipement Ubiquiti UniFi ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```)
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *ubiquiti_ro* (```--snmp-community='ubiquiti_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation disque est supérieur à 90% (```--warning-usage-prct='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-usage-prct='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_unifi_snmp.pl \
--plugin=network::ubiquiti::unifi::snmp::plugin \
--mode=disks \
--help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins)
