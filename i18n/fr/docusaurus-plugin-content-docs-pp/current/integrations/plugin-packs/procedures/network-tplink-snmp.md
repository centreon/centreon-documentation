---
id: network-tplink-snmp
title: TP-Link SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

TP-link est un fournisseur de solutions réseau.

Le connecteur de supervision *TP-Link* utilise le protocole SNMP pour se connecter, récupérer des informations et les métriques relatives aux équipements de marque TP-Link.

## Contenu du connecteur de supervision

### Objets supervisés

* CPU
* Interfaces
* Mémoire
* Uptime

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="CPU" label="CPU">

* These 3 metrics for CPU core and average utilization

| Metric name                         | Description                    | Unit   |
| :---------------------------------- | :----------------------------- | :----- |
| cpu.utilization.5s.percentage       | Percentage of CPU utilization  | %      |
| cpu.utilization.1m.percentage       | Percentage of CPU utilization  | %      |
| cpu.utilization.5m.percentage       | Percentage of CPU utilization  | %      |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                              | Description                                             | Unit |
|:---------------------------------------- |:------------------------------------------------------- | :--- |
| status                                   | Status of the interface                                 |      |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                         | Description                 | Unit   |
| :---------------------------------- | :-------------------------- | :----- |
| memory.usage.percentage             | Percentage of memory usage  | %      |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name                 | Description                                        | Unit   |
| :-------------------------- | :------------------------------------------------- | :----- |
| system.uptime               | Duration of system has been working and available. | s      |

</TabItem>
</Tabs>

## Prérequis

La communauté SNMP doit être activée sur l'équipement en mode Read-only.

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers l'équipement TP-Link.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des équipements TP-Link:

```bash
yum install centreon-plugin-Network-Tplink-Snmp
```

2. Sur l'interface Web de Centreon, installer le connecteur de supervision *TP-Link SNMP* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des équipements TP-Link :

```bash
yum install centreon-plugin-Network-Tplink-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du connecteur de supervision *TP-Link SNMP* :

```bash
yum install centreon-pack-network-tplink-snmp
```

3. Sur l'interface Web de Centreon, installer le connecteur de supervision *TP-Link SNMP* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre équipement TP-Link
* Appliquez le Modèle d'Hôte *Net-Tplink-SNMP-custom*

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping). 

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## Comment tester le Plugin en ligne de commande et comment utiliser ses options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \
	--plugin=network::tplink::snmp::plugin \
	--mode=cpu \	
	--hostname=10.30.2.11 \
	--snmp-community=centreon-tplink \
	--snmp-version=2c \
	--warning-average-5m=90 \
	--critical-average-5m=95 \
	--verbose
  
OK: 1 CPU(s) average usage is 7.00 % (5s) 20.00 % (1m) 10.00 % (5m) - CPU '1' usage 7.00 % (5s) 20.00 % (1m) 10.00 % (5m) | 
'cpu.utilization.5s.percentage'=7.00%;;;0;100 'cpu.utilization.1m.percentage'=20.00%;;;0;100 'cpu.utilization.5m.percentage'=10.00%;0:90;0:95;0;100 
'1#core.cpu.utilization.5s.percentage'=7.00%;;;0;100 '1#core.cpu.utilization.1m.percentage'=20.00%;;;0;100 '1#core.cpu.utilization.5m.percentage'=10.00%;;;0;100
CPU '1' usage 7.00 % (5s) 20.00 % (1m) 10.00 % (5m)
```

La commande ci-dessus vérifie l'utilisation CPU d'un équipement TP-Link (```--mode=cpu```). Les informations importantes sont l'adresse IP/FQDN 
(```--hostname=10.30.2.11```) et la communauté SNMP configurée sur l'équipement (```--snmp-community='centreon-tplink'```).

Une alarme de type WARNING est déclenchée si l'utilisation moyenne du CPU est supérieure à 90 sur le 5 dernières minutes (```--warning-average-5m='90'```).
Une alarme CRITICAL est quant à elle déclenchée si l'utilisation moyenne du CPU est supérieure à 95 sur le 5 dernières minutes (``` --critical-average-5m='95' ```).

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre ``` --help ``` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \
	--plugin=network::tplink::snmp::plugin \
	--mode=cpu \
	--help
```

Tous les modes disponibles peuvent être affichés via l'option ``` --list-mode ``` :

```bash
/usr/lib/centreon/plugins//centreon_tplink_snmp.pl \
	--plugin=network::tplink::snmp::plugin \
	--list-mode
```

## Diagnostic des erreurs communes

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient pas à contacter votre équipement TP-Link sur le port UDP 161, ou alors que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. Ce dernier doit avoir accès à la branche entreprise TP-Link: .1.3.6.1.4.1.11863
