---
id: hardware-devices-cisco-cts-snmp
title: Cisco Telepresence System SNMP
---

## Vue d'ensemble

Les équipements Cisco Teléprésence font partie de la suite de solutions et matériels 
Communications unifiées proposées par Cisco.

## Contenu du Plugin-Pack

### Objets supervisés

* Les statuts des *Périphériques*
* L'historique des *Appels* et leurs métriques de performances

## Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Calls-->

| Metric name                                    | Description                                     | Unit |
|:---------------------------------------------- |:----------------------------------------------- |:---- |
| calls.total.unknown.count                      | Calls count having unknown status               |      |
| calls.total.other.count                        | Calls count having other status                 |      |
| calls.total.internal.error.count               | Calls count encountering internal error         |      |
| calls.total.local.disconnected.count           | Calls count being locally disconnected          |      |
| calls.total.remote.disconnected.count          | Calls count being remotely disconnected         |      |
| calls.total.network.congestion.count           | Calls count facing network congestion           |      |
| calls.total.media.negotiation.failure.count    | Calls count having media negotiation failure    |      |
| calls.total.security.config.mismatched.count   | Calls count encountering security issues        |      |
| calls.total.incompatible.remote.endpoint.count | Calls count facing incompatible remote device   |      |
| calls.total.service.unavailable.count          | Calls count having unknown status               |      |
| calls.total.remote.terminated.error.count      | Calls count ending because of remote error      |      |

En plus des métriques globales ci-dessus, des métriques propres à chaque *mediatype* (audio, video, content) sont disponibles:

| Metric name                                                | Description                                     | Unit |
|:---------------------------------------------------------- |:----------------------------------------------- |:---- |
| *mediatype*#calls.streams.active.maxjitter.milliseconds    | Active calls maximum jitter measurment          |  ms  |
| *mediatype*#calls.streams.active.traffic.in                | Download Bandwidth utilization by ongoing calls |  B/s |
| *mediatype*#calls.streams.active.traffic.out               | Upload Bandwidth utilization by ongoing calls   |  B/s |
| *mediatype*#calls.streams.active.packetloss.in.count       | Packet Loss In on ongoing calls                 |      |
| *mediatype*#calls.streams.active.packetloss.out.count      | Packet Loss Out on ongoing calls                |      |
| *mediatype*#calls.streams.active.packetloss.in.percentage  | Packet Loss In rate on ongoing call             |  %   |
| *mediatype*#calls.streams.active.packetloss.out.percentage | Packet Loss Out rate on ongoing call            |  %   |

<!--Peripherals-->

| Metric name                | Description                                             | Unit |
|:---------------------------|:--------------------------------------------------------|:-----|
| peripherals.total.count    | Number of pysical entity on the CTS                     |      |
| Peripheral Status          | Operating status of each peripheral (MIC, CAM, DISPLAY) |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis 

Le Service SNMP doit être activé et configuré sur l'équipement Cisco CTS cible. 

Le Collecteur Centreon doit être en mesure d'atteindre le Cisco CTS Device via le port
UDP/161. 

Afin d'obtenir plus d'information sur la configuration SNMP, il est recommandé de se référer à la
documentation officielle de Cisco pour ces équipements: 
https://www.cisco.com/c/en/us/td/docs/video/cuct/1_1/english/configuration/guide/maint.html\.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources *Cisco CTS*:

```bash
yum install centreon-plugin-Hardware-Devices-Cisco-Cts-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco CTS* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Cisco CTS* applications:

```bash
yum install centreon-plugin-Hardware-Devices-Cisco-Cts-Snmp
```

2. Installer le RPM Centreon Plugin-Pack sur votre serveur Centreon Central:

```bash
yum install centreon-plugin-hardware-devices-cisco-cts-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco CTS* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Connecter vous à Centreon et ajouter un nouvel Hôte via la page "Configuration > Hôtes". 
* Remplir les champs "Nom", "Alias", "Adresse IP / DNS", "Communauté Snmp" et "Version Snmp" selon la configuration de l'équipement
* Ajouter le modèle *HW-Device-Cisco-Cts-SNMP*.

  :warning: Si vous utilisez SNMP v3, configurer la macro SNMPEXTRAOPTIONS avec les paramètres adéquats

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* (certaines options comme ```--snmp-community``` doivent être
ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_cisco_cts_snmp.pl \
--plugin=hardware/devices/cisco/cts/snmp/plugin.pm \
--mode=peripherals \
--hostname='10.2.15.12' \
--snmp-version=2c \
--snmp-community='snmp-community' \
--critical-total='13:' \
--verbose
```

La commande doit retourner un message de sortie similaire à celui ci-dessous : 

```bash
OK: Total peripherals: 13 - All peripherals are ok | 'peripherals.total.count'=13;;;0;
Peripheral 'UP_LINK' status: noErrorPeripheral 'MIC -- front_center' status: noError
Peripheral 'MIC -- front_left' status: noError
Peripheral 'MIC -- front_right' status: noError
Peripheral 'MIC BOARD -- mic_array_board' status: noError
Peripheral 'MAIN_CAM -- Serial=XXXXX39,PID=CTS-5K-CAM-CLSTR,Hardware_ver=03.00,Firmware=0,BuildTime=year:2016,week:19' status: noError
Peripheral 'DISPLAY_LEFT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'DISPLAY_RIGHT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'AUX_DISPLAY_LEFT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'AUX_DISPLAY_CENTER -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'AUX_DISPLAY_RIGHT -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
Peripheral 'UI_DEVICE --  MAC address : 00:11:EE:9Y:48:15 Version : 11-0-1KKPL-437' status: noError
Peripheral 'MAIN_DISPLAY -- Serial=XXXXX39,Hardware_ver=,Model=CTS-5K-70-G1 ,Manufacturer=CIS(0x0d33),AppCode_Ver=(unsupported)' status: noError
```

Dans cet exemple, le Plugin récupère le nombre de périphérique detecté ainsi que leur statut 
(```--plugin=hardware/devices/cisco/cts/snmp/plugin.pm --mode=peripherals```)

Cette commande déclenchera une alerte CRITICAL si le nombre de périphériques détéctés est inférieur à 13 (```--warning-total='13:'```).

L'ensemble des seuils disponibles peut être affiché en utilisant l'option ```--help``` à la fin de la commande: 

```bash
/usr/lib/centreon/plugins/centreon_cisco_cts_snmp.pl \
--plugin=hardware/devices/cisco/cts/snmp/plugin.pm \
--mode=peripherals \
--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement 
Cisco sur le port UDP/161, ou alors que la communauté SNMP configurée n'est pas correcte. 

Il est également possible qu'un équipement tiers (Pare-feu, ...) bloque la requête effectuée par le Plugin.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte pas la MIB CISCO-TELEPRESENCE-MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes. 
  * L'agent SNMP doit être en mesure d'accéder à la branche entreprise Cisco: .1.3.6.1.4.1.9