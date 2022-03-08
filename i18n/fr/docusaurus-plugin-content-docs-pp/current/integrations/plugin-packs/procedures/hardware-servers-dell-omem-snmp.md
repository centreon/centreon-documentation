---
id: hardware-servers-dell-omem-snmp
title: Dell OME-Modular SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Dell OME-Modular SNMP apporte 1 modèle d'hôte :
* HW-Server-Dell-OMEM-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template           | Default | Discovery |
|:--------------|:---------------------------|:--------|:----------|
| Hardware      | HW-Dell-OMEM-Hardware-SNMP | X       |           |
| Uptime        | HW-Dell-OMEM-Uptime-SNMP   | X       |           |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                               | Description                                                    | Unit  |
| :---------------------------------------- | :------------------------------------------------------------- | :---- |
| *chassis_num*#hardware.chassis.power.watt | Temperature of the sensor                                      | W     |
| iom status                                | Current IOM subsystem status                                   |       |
| redundancy status                         | Current redundancy status                                      |       |
| power status                              | Current power subsystem health status                          |       |
| fan status                                | Current fan subsystem health status                            |       |
| blade status                              | Current blade subsystem health status                          |       |
| temperature status                        | Current temp sensor subsystem health status                    |       |
| mm status                                 | Current management module status                               |       |
| psu status                                | Current status of the power supply                             |       |
| chassis#hardware.temperature.celsius      | Ambient temperature reading for the chassis front panel module | C     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Dell OME–Modular SNMP** :

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Omem-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Dell OME–Modular SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Dell OME–Modular SNMP** :

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Omem-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Dell OME–Modular SNMP** :

```bash
yum install centreon-pack-hardware-servers-dell-omem-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Dell OME–Modular SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **Dell OME–Modular SNMP**.
* Appliquez le Modèle d'Hôte **HW-Server-Dell-OMEM-SNMP-custom**

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro SNMPEXTRAOPTIONS.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins/centreon_dell_omem_snmp.pl \
    --plugin=hardware::server::dell::omem::snmp::plugin \
    --mode=hardware \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 15 components are ok [1/1 chassis, 7/7 health, 6/6 psus, 1/1 temperatures]. | '1#hardware.chassis.power.watt'=2227W;;;; 'chassis#hardware.temperature.celsius'=21C;;;; 'hardware.chassis.count'=1;;;; 'hardware.health.count'=7;;;; 'hardware.psu.count'=6;;;; 'hardware.temperature.count'=1;;;;
Product Name: PowerEdge MX7000, Service Tag: XXXXXXX, Firmware Version of MM1: 1.30.10, Firmware Version of MM2: 1.30.10
Checking chassis
chassis '1' power 2227 W [instance: 1]
Checking health
IOM status is ok [instance: 1]
management module status is ok [instance: 7]
blade status is ok [instance: 5]
fan status is ok [instance: 4]
power status is ok [instance: 3]
redundancy status is ok [instance: 2]
temperature status is ok [instance: 6]
Checking power supplies
power supply 'PSU.Slot.1' status is ok [instance: 1.1]
power supply 'PSU.Slot.2' status is ok [instance: 1.2]
power supply 'PSU.Slot.3' status is ok [instance: 1.3]
power supply 'PSU.Slot.4' status is ok [instance: 1.4]
power supply 'PSU.Slot.5' status is ok [instance: 1.5]
power supply 'PSU.Slot.6' status is ok [instance: 1.6]
Checking temperatures
chassis ambient temperature is 21C [instance: chassis]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_omem_snmp.pl \
    --plugin=hardware::server::dell::omem::snmp::plugin \
    --mode=hardware \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_omem_snmp.pl \
    --plugin=hardware::server::dell::omem::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md#snmp-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
