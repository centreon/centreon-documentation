---
id: hardware-ups-hp-snmp
title: HP UPS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack HP UPS collecte les données pour:
* Battery status
* Environment
* Input lines
* Output lines

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Battery-status" label="Battery-status">

| Metric name                      | Description                    | Unit |
| :------------------------------- | :----------------------------- | :--- |
| status                           | Battery status                 |      |
| battery.charge.remaining.percent | Battery capacity in percentage | %    |
| battery.charge.remaining.minutes | Battery capacity in minutes    | min  |
| battery.current.ampere           | Battery ampere level           | A    |
| battery.voltage.volt             | Battery voltage                | V    |

</TabItem>
<TabItem value="Environment" label="Environment">

| Metric name                              | Description               | Unit  |
| :--------------------------------------- | :------------------------ | :---- |
| environment.internal.temperature.celsius | Ambient temperature       | C     |
| environment.internal.humidity.percentage | Ambient humidity          | %     |
| environment.remote.temperature.celsius   | Remote temperature sensor | C     |
| environment.remote.humidity.percentage   | Remote humidity sensor    | %     |

</TabItem>
<TabItem value="Input-lines" label="Input-lines">

| Metric name                              | Description           | Unit  |
| :--------------------------------------- | :-------------------- | :---- |
| lines.input.frequence.hertz              | Input line frequency  | Hz    |
| *line\_phase*\#line.input.current.ampere | Input line current    | A     |
| *line\_phase*\#line.input.voltage.volt   | Input line voltage    | V     |
| *line\_phase*\#line.input.power.watt     | Input line real power | W     |

</TabItem>
<TabItem value="Output-lines" label="Output-lines">

| Metric name                               | Description           | Unit  |
| :---------------------------------------- | :-------------------- | :---- |
| source status                             | Output source status  |       |
| lines.output.load.percentage              | Output load           | %     |
| lines.output.frequence.hertz              | Output line frequency | Hz    |
| *line\_phase*\#line.output.current.ampere | Output line current   | A     |
| *line\_phase*\#line.output.voltage.volt   | Output line voltage   | V     |
| *line\_phase*\#line.output.power.watt     | Ouput line real power | W     |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement HP UPS, le SNMP doit être configuré. 

Le flux SNMP UDP/161 doit être ouvert entre le Collecteur et l'équipement.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Ups-Hp-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *HP UPS SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Ups-Hp-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-ups-hp-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *HP UPS SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-UPS-HP-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres d'authentification et de chiffrement adéquats. <br/>
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_ups_hp_snmp.pl \
    --plugin=hardware::ups::hp::snmp::plugin \
    --mode=battery-status \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hp_ro' \
    --warning-charge-remaining='50:' \
    --critical-charge-remaining='20:' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: battery status is 'normal', remaining capacity: 100 % | 'battery.charge.remaining.percent'=100%;50:;20:;0;100 'battery.voltage.volt'=2.2V;;;;
```

Cette commande contrôle la batterie (```--mode=battery-status```) d'un équipement UPS HP ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *hp_ro* (```--snmp-community='hp_ro'```).

Cette commande déclenchera une alarme WARNING si la charge restante de la batterie est inférieur à 50% (```--warning-charge-remaining='50:'```)
et une alarme CRITICAL si inférieur à 20% (```--critical-charge-remaining='20:'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ups_hp_snmp.pl \
    --plugin=hardware::ups::hp::snmp::plugin \
    --mode=battery-status \
    --help
```

## Diagnostique

[Diagnostique des plugins](../getting-started/how-to-guides/troubleshooting-plugins.md)
