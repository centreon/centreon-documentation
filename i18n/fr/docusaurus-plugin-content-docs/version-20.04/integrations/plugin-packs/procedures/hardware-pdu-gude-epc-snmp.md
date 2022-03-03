---
id: hardware-pdu-gude-epc-snmp
title: Gude EPC PDU SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack de supervision

### Objets supervisés

Le Pack Gude Export Power Control collecte les données pour:
* Power-channels
* Sp-power-channels

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Nom de la règle                            | Description                                                |
| :----------------------------------------- | :--------------------------------------------------------- |
| HW-Pdu-Gude-Epc-SNMP-Sp-Power-Channel-Name | Découvre les ports unitaires et supervise leur utilisation |

</TabItem>
</Tabs>

### Métriques collectées 

<Tabs groupId="sync">
<TabItem value="Power-channels" label="Power-channels">

| Metric name                                                                    | Description                                    | Unit  |
| :----------------------------------------------------------------------------- | :--------------------------------------------- | :---- |
| pdu.power\_channels.active.count                                               | Number of power channels                       |       |
| status                                                                         | Status of the channel                          |       |
| ovp status                                                                     | Status of the built-in overvoltage protection  |       |
| ps status                                                                      | Status of the power supply                     |       |
| *power\_channel\_name*\#pdu.interface.power_channel.current.ampere             | Actual Current                                 | A     |
| *power\_channel\_name*\#pdu.interface.power_channel.energy.active.kilowatthour | Absolute active energy                         | kWh   |
| *power\_channel\_name*\#pdu.interface.power_channel.frequency.hertz            | Frequency                                      | Hz    |
| *power\_channel\_name*\#pdu.interface.power_channel.phase.angle.degree         | Phase angle between voltage and L line current |       |
| *power\_channel\_name*\#pdu.interface.power_channel.active.watt                | Active power                                   | W     |
| *power\_channel\_name*\#pdu.interface.power_channel.power.apparent.voltampere  | L line mean apparent power                     | VA    |
| *power\_channel\_name*\#pdu.interface.power_channel.power.factor.count         | Power factor of channel                        |       |
| *power\_channel\_name*\#pdu.interface.power_channel.power.reactive.voltampere  | L line mean reactive power                     | Var   |
| *power\_channel\_name*\#pdu.interface.power_channel.voltage.volt               | Actual voltage                                 | V     |

</TabItem>
<TabItem value="Sp-power-channels" label="Sp-power-channels">

| Metric name                                                                        | Description                                    | Unit  |
| :--------------------------------------------------------------------------------- | :--------------------------------------------- | :---- |
| pdu.singleport\_power\_channels.total.count                                        | Number of single power channel ports           |       |
| state                                                                              | Current state (on/off)                         |       |
| status                                                                             | Status of the channel                          |       |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.current.ampere             | Actual Current                                 | A     |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.energy.active.kilowatthour | Absolute active energy                         | kWh   |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.frequency.hertz            | Frequency                                      | Hz    |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.phase.angle.degree         | Phase angle between voltage and L line current |       |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.active.watt                | Active power                                   | W     |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.power.apparent.voltampere  | L line mean apparent power                     | VA    |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.power.factor.count         | Power factor of channel                        |       |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.power.reactive.voltampere  | L line mean reactive power                     | Var   |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.voltage.volt               | Actual voltage                                 | V     |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre Gude Export Power Control, le SNMP doit être configuré.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Gude EPC PDU SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-pdu-gude-epc-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Gude EPC SNMP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Pdu-Gude-Epc-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats
| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |


## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl \
    --plugin=hardware::pdu::gude::epc::snmp::plugin \
    --mode=power-channels \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='gude_ro' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: 2 active power channel(s) - All power channel interfaces are ok | 'pdu.power_channels.active.count'=2;;;0; 'Meter-A#pdu.interface.power_channel.current.ampere'=2.45A;;;0; 'Meter-A#pdu.interface.power_channel.energy.active.kilowatthour'=16784.21kWh;;;0; 'Meter-A#pdu.interface.power_channel.frequency.hertz'=50.00Hz;;;0; 'Meter-A#pdu.interface.power_channel.phase.angle.degree'=-189.00;;;0; 'Meter-A#pdu.interface.power_channel.active.watt'=523.00W;;;; 'Meter-A#pdu.interface.power_channel.power.apparent.voltampere'=558.00VA;;;; 'Meter-A#pdu.interface.power_channel.power.factor.count'=0.94;;;0; 'Meter-A#pdu.interface.power_channel.power.reactive.voltampere'=-193.00Var;;;; 'Meter-A#pdu.interface.power_channel.voltage.volt'=228.00V;;;0; 'Meter-B#pdu.interface.power_channel.current.ampere'=0.78A;;;0; 'Meter-B#pdu.interface.power_channel.energy.active.kilowatthour'=7993.61kWh;;;0; 'Meter-B#pdu.interface.power_channel.frequency.hertz'=50.00Hz;;;0; 'Meter-B#pdu.interface.power_channel.phase.angle.degree'=-254.00;;;0; 'Meter-B#pdu.interface.power_channel.active.watt'=151.00W;;;; 'Meter-B#pdu.interface.power_channel.power.apparent.voltampere'=178.00VA;;;; 'Meter-B#pdu.interface.power_channel.power.factor.count'=0.85;;;0; 'Meter-B#pdu.interface.power_channel.power.reactive.voltampere'=-91.00Var;;;; 'Meter-B#pdu.interface.power_channel.voltage.volt'=228.00V;;;0;
Power channel interface 'Meter-A' status: valid, ovp status: ok, power supply status: up, current: 2.45 A, absolute energy active: 16784.21 kWh, frequency: 50.00 Hz, phase angle: -189.00°, active power: 523.00 W, apparent power: 558.00 VA, power factor: 0.94, reactive power: -193.00 Var, voltage: 228.00 V
Power channel interface 'Meter-B' status: valid, ovp status: ok, power supply status: up, current: 0.78 A, absolute energy active: 7993.61 kWh, frequency: 50.00 Hz, phase angle: -254.00°, active power: 151.00 W, apparent power: 178.00 VA, power factor: 0.85, reactive power: -91.00 Var, voltage: 228.00 V
```

Cette commande contrôle l'utilisation des power channels Gude (```--mode=power-channels```) ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *gude_ro* (```--snmp-community='gude_ro'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichées
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl \
    --plugin=hardware::pdu::gude::epc::snmp::plugin \
    --mode=power-channels \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.md#snmp-checks)