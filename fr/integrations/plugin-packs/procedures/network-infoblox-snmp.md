---
id: network-infoblox-snmp
title: Infoblox SNMP
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack Infoblox SNMP collecte les données pour:
* Dhcp
* Dns
* Interfaces
* Services
* System

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                  | Description                                                                                  |
| :------------------------------- | :------------------------------------------------------------------------------------------- |
| Net-Infoblox-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Dhcp-->

| Metric name                                         | Description                                              | Unit |
| :-------------------------------------------------- | :------------------------------------------------------- | :--- |
| dhcp.discovers.count                                | Number of discovery messages received                    |      |
| dhcp.requests.count                                 | Number of requests received                              |      |
| dhcp.releases.count                                 | Number of releases received                              |      |
| dhcp.offers.count                                   | Number of offers sent                                    |      |
| dhcp.acks.count                                     | Number of acks sent                                      |      |
| dhcp.nacks.count                                    | Number of nacks sent                                     |      |
| dhcp.declines.count                                 | Number of declines received                              |      |
| dhcp.informs.count                                  | Number of informs received                               |      |
| dhcp.others.count                                   | Number of other messages received                        |      |
| *subnet\_ipaddr*\#subnet.addresses.usage.percentage | Percentage of dynamic DHCP address for subnet leased out | %    |

<!--Dns-->

| Metric name                                            | Description                                                                                                | Unit |
| :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :--- |
| dns.queries.persecond                                  | Number of dns queries                                                                                      |      |
| dns.hits.percentage                                    | Dns hit ratio                                                                                              | %    |
| dns.queries.authoritative.latency.1m.microseconds      | Average latencies for incoming DNS queries during the last 1 minute where the reply was authoritative      |      |
| dns.queries.authoritative.latency.5m.microseconds      | Average latencies for incoming DNS queries during the last 5 minute where the reply was authoritative      |      |
| dns.queries.authoritative.latency.15m.microseconds     | Average latencies for incoming DNS queries during the last 15 minute where the reply was authoritative     |      |
| dns.queries.non_authoritative.latency.1m.microseconds  | Average latencies for incoming DNS queries during the last 1 minute where the reply was non authoritative  |      |
| dns.queries.non_authoritative.latency.5m.microseconds  | Average latencies for incoming DNS queries during the last 5 minute where the reply was non authoritative  |      |
| dns.queries.non_authoritative.latency.15m.microseconds | Average latencies for incoming DNS queries during the last 15 minute where the reply was non authoritative |      |
| *zone\_name*\#zone.responses.succeeded.count           | Number of successful responses                                                                             |      |
| *zone\_name*\#zone.referrals.count                     | Number of DNS referrals                                                                                    |      |
| *zone\_name*\#zone.queries.nxrrset.count               | Number of DNS query received for non-existent record                                                       |      |
| *zone\_name*\#zone.queries.failed.count                | Number of Failed queries                                                                                   |      |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Services-->

| Metric name                                        | Description                      | Unit |
| :------------------------------------------------- | :------------------------------- | :--- |
| service status                                     | Status of the service            |      |

<!--System-->

| Metric name                     | Description                 | Unit |
| :------------------------------ | :-------------------------- | :--- |
| cpu.utilization.percentage      | CPU utilization             | %    |
| memory.usage.percentage         | Memory usage                | %    |
| swap.usage.percentage           | Swap usage                  | %    |
| system.cpu1.temperature.celsius | CPU1 temperature            | C    |
| system.cpu2.temperature.celsius | CPU2 temperature            | C    |
| ha status                       | Status of high-availability |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Infoblox, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Infoblox-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Infoblox SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Infoblox-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-network-infoblox-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Infoblox SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Infoblox-SNMP-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \
    --plugin=network::infoblox::snmp::plugin \
    --mode=system \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='infoblox_ro' \
    --warning-cpu-load='90' \
    --critical-cpu-load='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: System 'IB-825' is ok | 'cpu.utilization.percentage'=3.00%;0:90;0:95;0;100 'memory.usage.percentage'=2.00%;;;0;100 'swap.usage.percentage'=0.00%;;;0;100 'system.cpu1.temperature.celsius'=20.00C;;;;
checking system 'IB-825'
    cpu load: 3.00 %
    memory used: 2.00 %
    swap used: 0.00 %
    cpu1 temperature: 20.00 C
    high-availablity status is 'Not Configured'
```

Cette commande contrôle le système (```--mode=system-usage```) d'un équipement Infoblox ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *infoblox_ro* (```--snmp-community='infoblox_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-cpu-load='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-cpu-load='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \
    --plugin=network::infoblox::snmp::plugin \
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
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.7779).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
