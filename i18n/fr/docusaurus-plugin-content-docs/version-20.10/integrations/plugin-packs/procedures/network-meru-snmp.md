---
id: network-meru-snmp
title: Meru SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Meru SNMP collecte les données pour:
* Cpu
* Interfaces
* Load
* Memory
* Reverse-Proxy
* Storage
* Swap

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name           | Description               | Unit |
| :-------------------- | :------------------------ | :--- |
| alarms.critical.count | Number of critical alarms |      |
| alarms.major.count    | Number of major alarms    |      |
| alarms.minor.count    | Number of minor alarms    |      |

<!--Cpu-->

| Metric name                              | Description              | Unit |
| :--------------------------------------- | :----------------------- | :--- |
| cpu.utilization.percentage               | CPU utilization          | %    |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |

<!--Wireless-->

| Metric name                 | Description                          | Unit  |
| :-------------------------- | :----------------------------------- | :---- |
| accesspoints.online.count   | Number of online access points       |       |
| stations.wireless.count     | Number of wireless stations          |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Meru, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Meru-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Meru Networks SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Meru-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-meru-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Meru Networks SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Meru-SNMP-Custom*

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
/usr/lib/centreon/plugins/centreon_meru_snmp.pl \
    --plugin=network::meru::snmp::plugin \
    --mode=wireless \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='meru_ro' \
    --critical-accesspoints-online='@19:19' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: number of online access points: 19 - number of wireless stations: 3 | 'accesspoints.online.count'=19;;@19:19;0; 'stations.wireless.count'=3;;;0;
```

Cette commande contrôle les équipements sans fil (```--mode=wireless```) d'un équipement Meru ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *meru_ro* (```--snmp-community='meru_ro'```).

Cette commande déclenchera une alarme CRITICAL si le nombre de point d'accès sans fil est différent de 19 (```--critical-accesspoints-online='@19:19'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_meru_snmp.pl \
    --plugin=network::meru::snmp::plugin \
    --mode=wireless \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.15983).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
