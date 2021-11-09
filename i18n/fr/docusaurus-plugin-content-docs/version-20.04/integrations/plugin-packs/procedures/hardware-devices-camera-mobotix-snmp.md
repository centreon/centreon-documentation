---
id: hardware-devices-camera-mobotix-snmp
title: Mobotix camera SNMP
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack Mobotix SNMP collecte les données pour:
* Interfaces
* System

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                              | Description                                                                                  |
| :------------------------------------------- | :------------------------------------------------------------------------------------------- |
| HW-Device-Camera-Mobotix-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--System-->

| Metric name                         | Description                      | Unit |
| :---------------------------------- | :------------------------------- | :--- |
| system.sdcard.usage.percent         | SD card usage                    | %    |
| system.temperature.internal.celsius | Internal temperature             | C    |
| system.temperature.external.celsius | External temperature             | C    |
| system.temperature.gps.celsius      | GPS temperature                  | C    |
| system.illumination.right.lux       | Illumination of the right sensor | lx   |
| system.illumination.left.lux        | Illumination of the left sensor  | lx   |
| system.video.framerate.persecond    | Current video framerate          |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Mobotix, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Mobotix-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Mobotix Camera* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Camera-Mobotix-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-hardware-devices-camera-mobotix-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Mobotix Camera* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Device-Camera-Mobotix-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_camera_mobotix_snmp.pl \
    --plugin=hardware::devices::camera::mobotix::snmp::plugin \
    --mode=system \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='mobotix_ro' \
    --warning-temperature-internal=45 \
    --critical-temperature-internal=50 \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: internal temperature: 23 C - illumination right: 17 lx - video framerate: 2 fps | 'system.temperature.internal.celsius'=23C;0:45;0:50;; 'system.illumination.right.lux'=17lx;;;; 'system.video.framerate.persecond'=2fps;;;;
```

Cette commande contrôle le système (```--mode=system```) d'un équipement Mobotix ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *mobotix_ro* (```--snmp-community='mobotix_ro'```).

Cette commande déclenchera une alarme WARNING si la température interne est supérieur à 45 degré Celsius (```--warning-temperature-internal=45```)
et une alarme CRITICAL si supérieur à 50 degré Celsius (```--critical-temperature-internal=50```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_camera_mobotix_snmp.pl \
    --plugin=hardware::devices::camera::mobotix::snmp::plugin \
    --mode=system \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.21701).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
