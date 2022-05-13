---
id: hardware-servers-supermicro-superdoctor-snmp
title: Supermicro SuperDoctor SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack de supervision

### Objets supervisés

Le Pack Supermicro SuperDoctor collecte les données pour:
* Hardware

### Métriques collectées 

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                                         | Description               | Unit  |
| :-------------------------------------------------- | :------------------------ | :---- |
| cpu status                                          | Status of the cpu         |       |
| disk status                                         | Status of the disk        |       |
| memory status                                       | Status of the memory      |       |
| sensor status                                       | Status of the sensor      |       |
| *sensor\_name*\#hardware.sensor.fan.rpm             | Speed of the fan          | rpm   |
| *sensor\_name*\#hardware.sensor.temperature.celsius | temperature of the sensor | C     |
| *sensor\_name*\#hardware.sensor.voltage.volt        | Voltage of the sensor     | V     |
| *sensor\_name*\#hardware.sensor.discrete.xxx        | Discrete sensor           |       |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler vos équipements Supermicro, l'agent SuperDoctor SNMP doit être configuré.
Pour plus d'information, vous pouvez vous référer à la page officiel :
https://www.supermicro.com/en/solutions/management-software/superdoctor

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Servers-Supermicro-Superdoctor-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Supermicro SuperDoctor SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Servers-Supermicro-Superdoctor-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-servers-supermicro-superdoctor-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Supermicro SuperDoctor SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Server-Supermicro-Superdoctor-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |


## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_supermicro_superdoctor_snmp.pl
    --plugin=hardware::server::supermicro::superdoctor::snmp::plugin
    --mode=hardware
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='supermicro_ro'
    --verbose
```

Cette commande contrôle le matériel (```--mode=hardware```) d'un équipement Supermicro ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *supermicro_ro* (```--snmp-community='supermicro_ro'```).
 
Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_supermicro_superdoctor_snmp.pl
    --plugin=hardware::server::supermicro::superdoctor::snmp::plugin
    --mode=hardware
    --help
```

## Diagnostique

[Diagnostique des plugins](../getting-started/how-to-guides/troubleshooting-plugins.md)

