---
id: network-acmepacket-snmp
title: Acme Packet SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Acme Packet SNMP collecte les données pour:
* Hardware
* Interfaces
* Realm
* Sip
* System

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

| Metric name                                        | Description                      | Unit |
| :------------------------------------------------- | :------------------------------- | :--- |
| fan status                                         | Status of the fan                |      |
| *fan\_description*#hardware.fan.speed.percentage   | Speed of the fan                 | %    |
| psu status                                         | Status of the power supply       |      |
| temperature status                                 | Status of the temperature sensor |      |
| *sensor\_description*#hardware.temperature.celsius | Temperature of the sensor        | C    |
| voltage status                                     | Status of the voltage sensor     |      |
| *sensor\_description*#hardware.voltage.volt        | Voltage of the sensor            | V    |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Realm-usage-->

| Metric name                                       | Description                              | Unit |
| :------------------------------------------------ | :--------------------------------------- | :--- |
| *realm\_name*\#realm.sessions.in.current.count    | Current number of inbound sessions       |      |
| *realm\_name*\#realm.sessions.in.rate.count       | Current number of inbound sessions rate  |      |
| *realm\_name*\#realm.sessions.in.total.count      | Total number of inbound sessions         |      |
| *realm\_name*\#realm.sessions.out.current.count   | Current number of outbound sessions      |      |
| *realm\_name*\#realm.sessions.out.rate.count      | Current number of outbound sessions rate |      |
| *realm\_name*\#realm.sessions.out.total.count     | Total number of outbound sessions        |      |
| *realm\_name*\#realm.rfactor.qos.average.count    | Average number of QoS RFactor            |      |
| *realm\_name*\#realm.rfactor.execeded.total.count | Total number of RFactor exceeded         |      |

<!--Sip-usage-->

| Metric name                                 | Description                         | Unit |
| :------------------------------------------ | :---------------------------------- | :--- |
| status                                      | Status of the SIP                   |      |
| *sip\_name*\#sip.sessions.in.rate           | current number of inbound sessions  |      |
| *sip\_name*\#sip.sessions.out.rate          | current number of outbound sessions |      |
| *sip\_name*\#sip.stats.latency.milliseconds | Average Latency                     |      |
| *sip\_name*\#sip.stats.asr.percentage       | Answer-to-seizure ratio             |      |

<!--System-usage-->

| Metric name                | Description                 | Unit |
| :------------------------- | :-------------------------- | :--- |
| health.score.percentage    | Current health score        | %    |
| cpu.utilization.percentage | CPU utilization             | %    |
| memory.usage.percentage    | Memory usage                | %    |
| licence.usage.percentage   | Number of license used      | %    |
| sessions.current.count     | Current number of sessions  |      |
| calls.current.count        | Current number of calls     |      |
| replication status         | Status of the replication   |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Acme Packet, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Acmepacket-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Acme Packet* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Acmepacket-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-acmepacket-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Acme Packet* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Acmepacket-SNMP-Custom*

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
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
    --plugin=network::acmepacket::snmp::plugin \
    --mode=system-usage \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='acme_ro' \
    --warning-cpu-load='90' \
    --critical-cpu-load='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: System usage is ok | 'health.score.percentage'=100.00%;;;0;100 'cpu.utilization.percentage'=2.00%;0:90;0:95;0;100 'memory.usage.percentage'=9.00%;;;0;100 'licence.usage.percentage'=0.00%;;;0;100 'sessions.current.count'=0;;;0; 'calls.current.count'=0/s;;;0;
checking system
    health score: 100.00 %
    cpu load: 2.00 %
    memory used: 9.00 %
    license used: 0.00 %
    current sessions: 0
    current calls: 0/s
    replication state: active
```

Cette commande contrôle le système (```--mode=system-usage```) d'un équipement Acme Packet ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *acme_ro* (```--snmp-community='acme_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-cpu-load='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-cpu-load='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
    --plugin=network::acmepacket::snmp::plugin \
    --mode=system-usage \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.9148).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
