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

| Metric name                              | Description              | Unit |
| :--------------------------------------- | :----------------------- | :--- |
| cpu.utilization.percentage               | CPU utilization          | %    |
| *cpuid*\#core.cpu.utilization.percentage | Per Core CPU utilization | %    |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Load-->

| Metric name                 | Description                       | Unit |
| :-------------------------- | :-------------------------------- | :--- |
| load1                       | System load 1 minute-sample       |      |
| load5                       | System load 5 minutes-sample      |      |
| load15                      | System load 15 minutes-sample     |      |

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |
| memory.buffer.bytes     | Buffered Memory allocation                | B     |
| memory.cached.bytes     | Cached Memory allocation                  | B     |
| memory.shared.bytes     | Shared Memory allocation                  | B     |

<!--Reverse-Proxy-->

| Metric name                                                   | Description                    | Unit |
| :------------------------------------------------------------ | :----------------------------- |:-----|
| status                                                        | Status of the reverse proxy    |      |
| *reverseproxy\_uid*\#reverse_proxy.cpu.utilization.percentage | CPU utilization                | %    |
| *reverseproxy\_uid*\#reverse_proxy.memory.usage.bytes         | Memory usage                   | B    |
| *reverseproxy\_uid*\#reverse_proxy.requests.persecond         | Number of requests per second  |      |

<!--Storage-->

| Metric name                                 | Description                     | Unit  |
| :------------------------------------------ | :------------------------------ | :---- |
| storage.partitions.count                    | Number of disk partition        |       |
| *partition_path*\#storage.space.usage.bytes | Used space on a disk partition  | B     |

<!--Swap-->

| Metric name                 | Description                          | Unit  |
| :-------------------------- | :----------------------------------- | :---- |
| swap.usage.bytes            | Used swap                            | B     |
| swap.free.bytes             | Free swap                            | B     |
| swap.usage.percentage       | Percentage of used swap              | %     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement DenyAll, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Denyall-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *DenyAll SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Denyall-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-denyall-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *DenyAll SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Denyall-SNMP-Custom*

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
/usr/lib/centreon/plugins/centreon_denyall_snmp.pl \
    --plugin=network::denyall::snmp::plugin \
    --mode=reverse-proxy \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='denyall_ro' \
    --warning-cpu-utilization='90' \
    --critical-cpu-utilization='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All reverse proxies are ok | 'c0e7cb1b2b6f7f20a19fdbaf3296c552#reverse_proxy.cpu.utilization.percentage'=0.00%;0:90;0:95;0;100 'c0e7cb1b2b6f7f20a19fdbaf3296c552#reverse_proxy.memory.usage.bytes'=11534336B;;;0; 'c0e7cb1b2b6f7f20a19fdbaf3296c552#reverse_proxy.requests.persecond'=0.00;;;0; 'c4b59d91060c39140fcafc114e7d96e4#reverse_proxy.cpu.utilization.percentage'=0.00%;0:90;0:95;0;100 'c4b59d91060c39140fcafc114e7d96e4#reverse_proxy.memory.usage.bytes'=25165824B;;;0; 'c4b59d91060c39140fcafc114e7d96e4#reverse_proxy.requests.persecond'=0.00;;;0;
checking reverse proxy 'c0e7cb1b2b6f7f20a19fdbaf3296c552'
    status: ok
    cpu usage: 0.00 %
    memory used: 11.00 MB
    requests: 0.00/s
checking reverse proxy 'c4b59d91060c39140fcafc114e7d96e4'
    status: ok
    cpu usage: 0.00 %
    memory used: 24.00 MB
    requests: 0.00/s
```

Cette commande contrôle les reverse proxy (```--mode=reverse-proxy```) d'un équipement DenyAll ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *denyall_ro* (```--snmp-community='denyall_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-cpu-utilization='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-cpu-utilization='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_denyall_snmp.pl \
    --plugin=network::denyall::snmp::plugin \
    --mode=reverse-proxy \
    --help
```

## J'obtiens le message d'erreur suivant:

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.18433.10).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
