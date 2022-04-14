---
id: network-ubiquiti-edge-snmp
title: Ubiquiti Edge SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack de supervision

### Objets supervisés

Le Pack Ubiquiti Edge collecte les données pour:
* Cpu
* Hardware
* Interfaces
* Memory

### Règles de découvertes

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                             | Description                                                                                  |
| :------------------------------------ | :------------------------------------------------------------------------------------------- |
| Net-Ubiquiti-Edge-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

</TabItem>
</Tabs>

### Métriques collectées 

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                   | Description                            | Unit |
| :---------------------------- | :------------------------------------- |:---- |
| cpu.utilization.5s.percentage | CPU utilization during last 5 seconds. | %    |
| cpu.utilization.1m.percentage | CPU utilization during last minute.    | %    |
| cpu.utilization.5m.percentage | CPU utilization during last 5 minutes. | %    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                   | Description                               | Unit |
|:----------------------------- |:----------------------------------------- |:---- |
| disk.status                   | Status of the disk                        |      |
| raid.status                   | Status of the raid                        |      |
| fan.status                    | Status of the fan                         |      |
| temperature.status            | Status of the temperature                 |      |
| voltage.status                | Status of the voltage                     |      |
| hardware.fan.speed.rpm        | Speed of fan                              | rpm  |
| hardware.temperature.celsius  | temperature of the different sensors      | C    |
| hardware.voltage.millivolt    | Voltage of the different sensors          | mV   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                                 | Description                                             | Unit |
|:----------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                      | Status of the interface                                 |      |
| *interface\_name*\#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| *interface\_name*\#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| *interface\_name*\#interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| *interface\_name*\#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| *interface\_name*\#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| *interface\_name*\#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name              | Description                | Unit |
| :----------------------- | :------------------------- |:---- |
| memory.usage.bytes       | Memory usage               | B    | 

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler vos équipements Edge Ubiquiti, le SNMP doit être configuré.

Les collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP avec l'équipement.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Ubiquiti Edge SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-network-ubiquiti-edge-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Ubiquiti Edge SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Ubiquiti-Edge-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_edge__snmp.pl \
    --plugin=network::ubiquiti::edge::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='ubiquiti_ro' \
    --warning-1m='90' \
    --critical-1m='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: CPU 53.59 % (5sec), 38.13 % (1m), 21.37 % (5min) | 'cpu.utilization.5s.percentage'=53.59%;;;0;100 'cpu.utilization.1m.percentage'=38.13%;0:90;0:95;0;100 'cpu.utilization.5m.percentage'=21.37%;;;0;100
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *ubiquiti_ro* (```--snmp-community='ubiquiti_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation CPU sur la dernière minute est à plus de 90% (```--warning-1m='90'```)
et une alarme CRITICAL si plus de 95% sur la dernière minute  (```--critical-1m='95'```).
 
Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_edge_snmp.pl \
    --plugin=network::ubiquiti::edge::snmp::plugin \
    --mode=cpu \
    --help
```

## Diagnostique

[Diagnostique des plugins](../getting-started/how-to-guides/troubleshooting-plugins.md)