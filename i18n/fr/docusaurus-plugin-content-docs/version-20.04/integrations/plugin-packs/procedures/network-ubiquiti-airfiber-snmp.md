---
id: network-ubiquiti-airfiber-snmp
title: Ubiquiti AirFiber SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Ubiquiti AirFiber SNMP collecte les données pour:
* Interfaces
* Load
* Memory
* Radios

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                            | Description                                                                                  |
| :----------------------------------------- | :------------------------------------------------------------------------------------------- |
| Net-Ubiquiti-Airfiber-SNMP-Interface-Name  | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |
| Net-Ubiquiti-Airfiber-SNMP-Radio-Name      | Découvre les interfaces radios et supervise le statut et l'utilisation de la bande passante  |

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

<!--Load-->

| Metric name                  | Description                       | Unit |
| :--------------------------- | :-------------------------------- | :--- |
| system.loadaverage.1m.count  | System load 1 minute-sample       |      |
| system.loadaverage.5m.count  | System load 5 minutes-sample      |      |
| system.loadaverage.15m.count | System load 15 minutes-sample     |      |

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |

<!--Radios-->

| Metric name                                                      | Description                                  | Unit   |
| :--------------------------------------------------------------- | :------------------------------------------- | :----- |
| status                                                           | Status of the radio interface                |        |
| *interfacename*\#radio.interface.chain0.signal.receive.power.dbm | Radio chain 0 RX power level                 | dBm    |
| *interfacename*\#radio.interface.chain1.signal.receive.power.dbm | Radio chain 1 RX power level                 | dBm    |
| *interfacename*\#radio.interface.traffic.in.bitspersecond        | Incoming traffic going through the interface | b/s    |
| *interfacename*\#radio.interface.traffic.out.bitspersecond       | utgoing traffic going through the interface  | b/s    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Ubiquiti AirFiber, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Ubiquiti-Airfiber-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Ubiquiti AirFiber SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Ubiquiti-Airfiber-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-ubiquiti-airfiber-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Ubiquiti AirFiber SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Ubiquiti-Airfiber-SNMP-Custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_airfiber_snmp.pl \
    --plugin=network::ubiquiti::airfiber::snmp::plugin \
    --mode=load \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='ubiquiti_ro' \
    --warning-load15='3' \
    --critical-load15='7' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Load average 0.00 (1m), 0.00 (5m), 0.00 (15m) | 'system.loadaverage.1m.count'=0.00;;;0; 'system.loadaverage.5m.count'=0.00;;;0; 'system.loadaverage.15m.count'=0.00;0:3;0:7;0;
```

Cette commande contrôle le système load-average (```--mode=load```) d'un équipement Ubiquiti AirFiber ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *ubiquiti_ro* (```--snmp-community='ubiquiti_ro'```).

Cette commande déclenchera une alarme WARNING si le load-average est supérieur à 3 (```--warning-load15='3'```)
et une alarme CRITICAL si supérieur à 7 (```--critical-load15='7'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_airfiber_snmp.pl \
    --plugin=network::ubiquiti::airfiber::snmp::plugin \
    --mode=load \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.41112).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
