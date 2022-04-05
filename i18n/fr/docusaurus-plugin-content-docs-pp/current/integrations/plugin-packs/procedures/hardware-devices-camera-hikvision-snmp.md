---
id: hardware-devices-camera-hikvision-snmp
title: Hikvision camera SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack Hikvision SNMP collecte les données pour:
* Cpu
* Disk
* Memory
* Time

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                              | Description              | Unit |
| :--------------------------------------- | :----------------------- | :--- |
| cpu.utilization.percentage               | CPU utilization          | %    |

</TabItem>
<TabItem value="Disk" label="Disk">

| Metric name           | Description                             | Unit  |
| :-------------------- | :-------------------------------------- | :---- |
| disk.usage.bytes      | Disk usage                              | B     |
| disk.free.bytes       | Free disk                               | B     |
| disk.usage.percentage | Disk usage in percentage                | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                               | Unit  |
| :---------------------- | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name            | Description                               | Unit  |
| :--------------------- | :---------------------------------------- | :---- |
| time.offset.seconds    | Time offset                               | s     |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Hikvision, le SNMP doit être configuré. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Hikvision-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Hikvision camera SNMP* depuis la page "Configuration > Plugin Packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Hikvision-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-hardware-devices-camera-hikvision-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Hikvision camera SNMP* depuis la page "Configuration > Plugin Packs > Manager"

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Device-Camera-Hikvision-SNMP-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_camera_hikvision_snmp.pl \
    --plugin=hardware::devices::camera::hikvision::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hikvision_ro' \
    --warning-usage=90 \
    --critical-usage=95 \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: CPU Usage: 62.00 % | 'cpu.utilization.percentage'=62.00%;0:90;0:95;0;100
```

Cette commande contrôle le processeur (```--mode=cpu```) d'un équipement Hikvision ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *hikvision_ro* (```--snmp-community='hikvision_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-usage='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-usage='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_camera_hikvision_snmp.pl \
    --plugin=hardware::devices::camera::hikvision::snmp::plugin \
    --mode=cpu \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.39165).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
