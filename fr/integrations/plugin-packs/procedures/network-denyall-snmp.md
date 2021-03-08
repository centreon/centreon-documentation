---
id: network-denyall-snmp
title: DenyAll SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack DenyAll SNMP collecte les données pour:
* Cpu
* Interfaces
* Load
* Memory
* Reverse-Proxy
* Storage
* Swap

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| cpu.utilization.percentage  | Current CPU usage percentage | %     |

<!--Hardware-->

| Metric name                                    | Description                     | Unit |
| :--------------------------------------------- | :------------------------------ | :--- |
| slot status                                    | Status of the slot              |      |
| fan status                                     | Status of the fan               |      |
| *fandescription*#hardware.fan.speed.percentage | Speed of the fan                | %    |
| power status                                   | Status of the power module      |      |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
|:-------------------------------------------------------|:----------------------------------------------------|:-----|
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

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Fiberstore, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fiberstore-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Fiberstore SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fiberstore-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-fiberstore-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Fiberstore SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Fiberstore-SNMP-Custom*

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
/usr/lib/centreon/plugins/centreon_fiberstore_snmp.pl \
    --plugin=network::fiberstore::snmp::plugin \
    --mode=memory \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='fiberstore_ro' \
    --warning-usage-prct='90' \
    --critical-usage-prct='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Memory total: 899.30 MB used: 366.23 MB (40.72%) free: 533.07 MB (59.28%) | 'memory.usage.bytes'=384020480B;;;0;942989312 'memory.free.bytes'=558968832B;;;0;942989312 'memory.usage.percentage'=40.72%;90;95;0;100
```

Cette commande contrôle la mémoire (```--mode=memory```) d'un équipement Fiberstore ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *fiberstore_ro* (```--snmp-community='fiberstore_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation mémoire est supérieur à 90% (```--warning-usage-prct='80'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-usage-prct='90'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fiberstore_snmp.pl \
    --plugin=network::fiberstore::snmp::plugin \
    --mode=memory \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.52642).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
