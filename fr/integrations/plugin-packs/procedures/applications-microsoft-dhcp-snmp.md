---
id: applications-microsoft-dhcp-snmp
title: Microsoft DHCP SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Microsoft DHCP SNMP inclut la supervision des Subnets.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Subnets-->

| Metric name                                       | Description                       | Unit |
| :------------------------------------------------ | :-------------------------------- | :--- |
| *subnetaddress*#subnet.addresses.usage.count      | Usage of the subnet               |      |
| *subnetaddress*#subnet.addresses.free.count       | Free address left on the subnet   |      |
| *subnetaddress*#subnet.addresses.usage.percentage | Usage of the subnet in percentage | %    |
| *subnetaddress*#subnet.pending.offers.count       | Number of pending offers          |      |

It is possible to filter on the address of a subnet using a REGEXP of the form [```--subnet-address='192.168.1.0'```].

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre application Microsoft DHCP, le SNMP doit être configuré.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Microsoft-Dhcp-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Microsoft DHCP SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Microsoft-Dhcp-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-microsoft-dhcp-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Microsoft DHCP SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par application Microsoft DHCP.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Microsoft-Dhcp-SNMP-custom*. 
Il est nécessaire de remplir les valeurs des champs "SNMP Community" et "SNMP Version".

:warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée 
et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name                    | Description                                                                 |
| :---------- | :---------------------- | :-------------------------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                                                          |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_microsoft_dhcp_snmp.pl \
    --plugin=apps::microsoft::dhcp::snmp::plugin \
    --mode=subnets \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='dhcp_ro' \
    --filter-subnet-address='192.168.153.0' \
    --warning-addresses-usage-prct=80 \
    --critical-addresses-usage-prct=90 \
    --verbose
```

Exemple de sortie :

```
OK: Subnet '192.168.153.0' addresses usage total: 50 used: 35 (70.00%) free: 15 (30.00%), pending offers: 0 | '192.168.153.0#subnet.addresses.usage.count'=35;;;0;50 '192.168.153.0#subnet.addresses.free.count'=15;;;0;50 '192.168.153.0#subnet.addresses.usage.percentage'=70.00%;0:80;0:90;0;100 '192.168.153.0#subnet.pending.offers.count'=0;;;0;
```

Cette commande contrôle les sous-réseaux (```--mode=subnets```) d'un serveur DHCP ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *dhcp_ro* (```--snmp-community='dhcp_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation du sous-réseau est supérieur à 80% (```--warning-addresses-usage-prct='80'```)
et une alarme CRITICAL si supérieur à 90% (```--critical-addresses-usage-prct='90'```).
 
Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins/centreon_microsoft_dhcp_snmp.pl \
    --plugin=apps::microsoft::dhcp::snmp::plugin \
    --mode=subnets \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.311.1.3).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
