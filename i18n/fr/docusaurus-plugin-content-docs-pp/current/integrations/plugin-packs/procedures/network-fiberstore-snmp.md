---
id: network-fiberstore-snmp
title: Fiberstore SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du connecteur de supervision

### Objets supervisés

Le connecteur de supervision Fiberstore SNMP inclut le CPU, Hardware, Interfaces et Memoire.

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| cpu.utilization.percentage  | Current CPU usage percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                    | Description                     | Unit |
| :--------------------------------------------- | :------------------------------ | :--- |
| slot status                                    | Status of the slot              |      |
| fan status                                     | Status of the fan               |      |
| *fandescription*#hardware.fan.speed.percentage | Speed of the fan                | %    |
| power status                                   | Status of the power module      |      |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                            | Description                                         | Unit |
|:-------------------------------------------------------|:----------------------------------------------------|:-----|
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Fiberstore, le SNMP doit être configuré. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fiberstore-Snmp
```

2. Sur l'interface Web de Centreon, installer le connecteur de supervision *Fiberstore SNMP* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fiberstore-Snmp
```

2. Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:

```bash
yum install centreon-pack-network-fiberstore-snmp
```

3. Sur l'interface Web de Centreon, installer le connecteur de supervision *Fiberstore SNMP* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Fiberstore-SNMP-Custom*

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping). 

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
