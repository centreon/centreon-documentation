---
id: network-aruba-aoscx-snmp
title: ArubaOS-CX SNMP
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack ArubaOS-CX SNMP collecte les données pour:
* Hardware
* Interfaces
* Vsf
* Vsx

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                      | Description                                                                                  |
| :----------------------------------- | :------------------------------------------------------------------------------------------- |
| Net-Aruba-Aoscx-SNMP-Interface-Name  | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

| Metric name                                 | Description                           | Unit |
| :------------------------------------------ | :------------------------------------ | :--- |
| *fan\_name*#hardware.fan.speed.rpm          | Speed of the fan                      | rpm  |
| fan tray status                             | Status of the fan tray                |      |
| psu status                                  | Status of the power supply            |      |
| *psu\_name*#hardware.psu.power.watt         | Power consumption of the power supply | W    |
| temperature status                          | Status of the sensor                  |      |
| *sensor\_name*#hardware.temperature.celsius | Temperature of the sensor             | C    |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Vsf-->

| Metric name                                     | Description              | Unit |
| :---------------------------------------------- | :----------------------- | :--- |
| vsf status                                      | Global status of the vsf |      |
| member status                                   | Status of a member       |      |
| stack.members.total.count                       | Number of members        |      |
| stack.members.total.count                       | Number of members        |      |
| *member\_id*\#member.cpu.utilization.percentage | CPU utilization          | %    |
| *member\_id*\#member.memory.usage.percentage    | Memory usage             | %    |

<!--Vsx-->

| Metric name                     | Description                                       | Unit |
| :------------------------------ | :------------------------------------------------ | :--- |
| device status                   | Status of the device                              |      |
| isl status                      | Status of the inter-switch link                   |      |
| vsx.isl.packets.in.count        | Incoming packets going through the link           |      |
| vsx.isl.packets.out.count       | Outgoing packets going through the link           |      |
| keepalive status                | Status of the keepalive                           |      |
| vsx.keepalive.packets.in.count  | Incoming keepalive packets going through the link |      |
| vsx.keepalive.packets.out.count | Outgoing keepalive packets going through the link |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Aruba, le SNMP doit être configuré. 

Le flux SNMP UDP/161 doit être ouvert entre le Collecteur et l'équipement.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *ArubaOS-CX SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-network-aruba-aoscx-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *ArubaOS-CX SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Aruba-Aoscx-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --mode=vsf \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='aruba_ro' \
    --warning-cpu-utilization='90' \
    --critical-cpu-utilization='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: vsf operational status: no_split - All stack members are ok | '1#member.cpu.utilization.percentage'=16.00%;0:90;0:95;0;100 '1#member.memory.usage.percentage'=24.00%;;;0;100 '2#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '2#member.memory.usage.percentage'=14.00%;;;0;100 '3#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '3#member.memory.usage.percentage'=8.00%;;;0;100 '4#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '4#member.memory.usage.percentage'=8.00%;;;0;100
checking stack member '1'
    role: master [status: ready]
    cpu usage: 16.00%
    memory used: 24.00 %
checking stack member '2'
    role: standby [status: ready]
    cpu usage: 4.00%
    memory used: 14.00 %
checking stack member '3'
    role: member [status: ready]
    cpu usage: 4.00%
    memory used: 8.00 %
checking stack member '4'
    role: member [status: ready]
    cpu usage: 4.00%
    memory used: 8.00 %
```

Cette commande contrôle les vsf (```--mode=vsf```) d'un équipement Aruba ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *infoblox_ro* (```--snmp-community='aruba_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-cpu-utilization='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-cpu-utilization='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --mode=vsf \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.47196.4).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
