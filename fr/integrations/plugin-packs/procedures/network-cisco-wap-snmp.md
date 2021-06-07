---
id: network-cisco-wap-snmp
title: Cisco Wap SNMP
---

## Vue d'ensemble

Cisco est un fournisseur de solutions réseau.

Le Plugin Pack *Cisco Wap SNMP* utilise le protocole SNMP pour se connecter, récupérer des informations et les métriques relatives aux point d'accès de marque Cisco.

## Contenu du Plugin Pack

### Objets supervisés

* Client
* CPU
* Interfaces
* Memoire
* Uptime
* Point d'accès virtuel

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Clients-->

| Metric name                         | Description                                                    | Unit   |
| :---------------------------------- | :------------------------------------------------------------- | :----- |
| clients.connected.count             | Total number of clients connected on the access point          | count  |
| radio.clients.connected.count       | Number of clients connected radio channel of the access point  | count  |

<!--CPU-->

| Metric name                         | Description                    | Unit   |
| :---------------------------------- | :----------------------------- | :----- |
| cpu.utilization.percentage          | Percentage of CPU utilization  | %      |

<!--Clients-->

| Metric name                         | Description                                                    | Unit   |
| :---------------------------------- | :------------------------------------------------------------- | :----- |
| clients.connected.count             | Total number of clients connected on the access point          | count  |
| radio.clients.connected.count       | Number of clients connected radio channel of the access point  | count  |

<!--Interfaces-->

| Metric name                              | Description                                             | Unit |
|:---------------------------------------- |:------------------------------------------------------- | :--- |
| status                                   | Status of the interface                                 |      |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.           | b/s  |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.           | b/s  |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface.   | %    |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. | %    |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface.   | %    |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. | %    |

<!--Memory-->

| Metric name                         | Description                 | Unit   |
| :---------------------------------- | :-------------------------- | :----- |
| memory.usage.percentage             | Percentage of memory usage  | %      |

<!--Uptime-->

| Metric name                 | Description                                        | Unit   |
| :-------------------------- | :------------------------------------------------- | :----- |
| system.uptime               | Duration of system has been working and available. | s      |

<!--Virual Access Point-->

| Metric name                         | Description                                | Unit   |
| :---------------------------------- | :----------------------------------------- | :----- |
| virtual_access_points.total.count   | Total number of virtual access point       | count  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

La communauté SNMP doit être activée sur l'équipement en mode Read-only.

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers le point d'accès Cisco Wap.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des équipements Cisco:

```bash
yum install centreon-plugin-Network-Cisco-Wap-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Cisco Wap SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des équipements Cisco :

```bash
yum install centreon-plugin-Network-Cisco-Wap-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin Pack *Cisco Wap SNMP* :

 ```bash
yum install centreon-pack-network-cisco-wap-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Cisco Wap SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre équipement Cisco
* Appliquez le Modèle d'Hôte *Net-Cisco-Wap-SNMP-custom*

## Comment tester le Plugin en ligne de commande et comment utiliser ses options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl --plugin=network::cisco::wap::snmp::plugin \
	--mode=clients \	
	--hostname=10.30.2.11 \
	--snmp-community=centreon-cisco-wap \
	--snmp-version=2c \
	--warning-clients-connected=90 \
	--critical-clients-connected=100 \
	--verbose
  
OK: clients connected: 1 | 'clients.connected.count'=1;0:90;0:100;0; 'wlan0#radio.clients.connected.count'=0;;;0; 'wlan1#radio.clients.connected.count'=1;;;0;
Radio interface 'wlan0' clients connected: 0
Radio interface 'wlan1' clients connected: 1
```

La commande ci-dessus vérifie les clients connectés d'un point d'accès Cisco Wap (``` --mode=clients ```). Les informations importantes sont l'adresse IP/FQDN 
(``` --hostname=10.30.2.11 ```) et la communauté SNMP configurée sur l'équipement (``` --snmp-community='centreon-cisco-wap' ```).

Une alarme de type WARNING est déclenchée si le nombre de clients connectés est supérieur à 90 (``` --warning-clients-connected='90' ```).
Une alarme CRITICAL est quant à elle déclenchée si le nombre de clients connectés est supérieur à 100 (``` --critical-clients-connected='100' ```).

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre ``` --help ``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl \
	--plugin=network::cisco::wap::snmp::plugin \
	--mode=clients \
	--help
```

Tous les modes disponibles peuvent être affichés via l'option ``` --list-mode ``` :

```bash
/usr/lib/centreon/plugins//centreon_cisco_wap_snmp.pl \
	--plugin=network::cisco::wap::snmp::plugin \
	--list-mode
```

## Diagnostic des erreurs communes

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient pas à contacter votre point d'accès Cisco sur le port UDP 161, ou alors que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. Ce dernier doit avoir accès à la branche entreprise Cisco: .1.3.6.1.4.1.9.6.1.104
