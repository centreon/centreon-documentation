---
id: hardware-ups-phoenixtec-snmp
title: Phoenixtec UPS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack Phoenixtec collecte les données pour:
* Battery status
* Input lines
* Output lines

### Métriques collectées

<Tabs groupId="operating-systems">
<TabItem value="Batterystatus" label="Batterystatus">

| Metric name                      | Description                    | Unit |
| :------------------------------- | :----------------------------- | :--- |
| status                           | Battery status                 |      |
| battery.charge.remaining.percent | Battery capacity in percentage | %    |
| battery.charge.remaining.minutes | Battery capacity in minutes    | min  |
| battery.voltage.volt             | Battery voltage                | V    |
| battery.temperature.celsius      | Battery temperature            | C    |

</TabItem>
<TabItem value="Inputlines" label="Inputlines">

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| lines.input.frequence.hertz | Current input line frequency | Hz    |
| lines.input.voltage.volt    | Current input line voltage   | V     |

</TabItem>
<TabItem value="Outputlines" label="Outputlines">

| Metric name                  | Description               | Unit  |
| :--------------------------- | :------------------------ | :---- |
| status                       | Output status             |       |
| lines.output.load.percentage | Current output load       | %     |
| lines.output.voltage.volt    | Current output voltage    | V     |
| lines.output.frequence.hertz | Current output frequency  | Hz    |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Phoenixtec UPS, le SNMP doit être configuré.

Le flux SNMP UDP/161 doit être ouvert entre le Collecteur et l'équipement.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Ups-Phoenixtec-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Phoenixtec UPS SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Ups-Phoenixtec-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-ups-phoenixtec-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Phoenixtec UPS SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Ups-Phoenixtec-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_ups_phoenixtec_snmp.pl \
--plugin=hardware::ups::phoenixtec::snmp::plugin \
--mode=battery-status \
--hostname=10.30.2.114 \
--snmp-version='2c' \
--snmp-community='phoenixtec_ro' \
--warning-charge-remaining='50:' \
--critical-charge-remaining='20:' \
--verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: battery status is 'normal', remaining capacity: 100 % | 'battery.charge.remaining.percent'=100%;50:;20:;0;100 'battery.voltage.volt'=2.2V;;;; 'battery.temperature.celsius'=31.5C;;;;
```

Cette commande contrôle la batterie (```--mode=battery-status```) d'un équipement UPS Phoenixtec ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```)
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *phoenixtec_ro* (```--snmp-community='phoenixtec_ro'```).

Cette commande déclenchera une alarme WARNING si la charge restante de la batterie est inférieur à 50% (```--warning-charge-remaining='50:'```)
et une alarme CRITICAL si inférieur à 20% (```--critical-charge-remaining='20:'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ups_phoenixtec_snmp.pl \
--plugin=hardware::ups::phoenixtec::snmp::plugin \
--mode=battery-status \
--help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins)
