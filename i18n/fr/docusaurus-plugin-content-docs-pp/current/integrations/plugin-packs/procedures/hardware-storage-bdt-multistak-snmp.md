---
id: hardware-storage-bdt-multistak-snmp
title: BDT MultiStak SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du connecteur de supervision

### Objets supervisés

Le connecteur de supervision BDT MultiStak SNMP collecte les données pour:
* Hardware

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                                        | Description                       | Unit |
| :------------------------------------------------- | :-------------------------------- | :--- |
| device status                                      | Status of the device              |      |
| module status                                      | Status of the module              |      |
| module board status                                | Status of the module board        |      |
| module psu status                                  | Status of the module power supply |      |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement BDT MultiStak, le SNMP doit être configuré. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp
```

2. Sur l'interface Web de Centreon, installer le connecteur de supervision *BDT MultiStak SNMP* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp
```

2. Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:

```bash
yum install centreon-pack-hardware-storage-bdt-multistak-snmp
```

3. Sur l'interface Web de Centreon, installer le connecteur de supervision *BDT MultiStak SNMP* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Storage-Bdt-Multistak-SNMP-Custom*

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping). 

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \
    --plugin=storage::bdt::multistak::snmp::plugin \
    --mode=hardware \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='bdtms_ro' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All 2 components are ok [1/1 device, 1/1 modules]. | 'hardware.device.count'=1;;;; 'hardware.module.count'=1;;;;
vendor: BDT, product: MULTISTAK, serial: DE56400414, revision: 1.2.0-A000
checking device
device health status is 'ok' [instance: 0]
checking modules
module '4' status is 'OK' [board status: N/A] [power supply: OK][instance: 4].
```

Cette commande contrôle le matériel (```--mode=hardware```) d'un équipement BDT MultiStak ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *bdtms_ro* (```--snmp-community='bdtms_ro'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \
    --plugin=storage::bdt::multistak::snmp::plugin \
    --mode=hardware \
    --help
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.20884).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
