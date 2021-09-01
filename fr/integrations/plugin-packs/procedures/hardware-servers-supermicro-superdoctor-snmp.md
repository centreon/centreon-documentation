---
id: hardware-servers-supermicro-superdoctor-snmp
title: Supermicro SuperDoctor SNMP
---

## Contenu du Pack de supervision

### Objets supervisés

Le Pack Supermicro SuperDoctor collecte les données pour:
* Hardware

### Métriques collectées 

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

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

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler vos équipements Lenovo Iomega, le SNMP v2 doit être configuré.
Pour plus d'information, vous pouvez vous référer à la documentation utilisateur officiel :
http://download.lenovo.com/nasupdate/manuals/px2-300d/px2-300d-4.1-en.pdf#page=69&zoom=100,72,90

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Lenovo-Iomega-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack *Lenovo Iomega* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Lenovo-Iomega-Snmp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-storage-lenovo-iomega-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack *Lenovo Iomega* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Storage-Lenovo-Iomega-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |


## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_lenovo_iomega_snmp.pl
    --plugin=storage::lenovo::iomega::snmp::plugin
    --mode=cpu
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='iomega_ro'
    --warning-average='90'
    --critical-average='95'
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: CPU(s) average usage is 15.29 % - CPU '0' usage : 15.29 % | 'total_cpu_avg'=15.29%;0:90;0:95;0;100 'cpu'=15.29%;;;0;100
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *iomega_ro* (```--snmp-community='iomega_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation moyenne CPU est à plus de 90% (```--warning-average='90'```)
et une alarme CRITICAL si plus de 95% (```--critical-average='95'```).
 
Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_lenovo_iomega_snmp.pl
    --plugin=storage::lenovo::iomega::snmp::plugin
    --mode=cpu \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.html)

