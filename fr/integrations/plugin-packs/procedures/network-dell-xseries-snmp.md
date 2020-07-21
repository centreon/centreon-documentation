---
id: network-switch-dell-xseries-snmp
title: Dell Xseries
---

## Vue d'ensemble

La gamme Dell EMC Networking X-Series est une famille de produits conçus pour les petites et moyennes entreprises.
	
## Contenu du Pack de supervision

### Objets supervisés

* Dell Xseries Switchs

## Métriques collectées 

<!--DOCUSAURUS_CODE_TABS-->
<!--Cpu-->

| Metric Name                              | Description            | Unit  |
| :--------------------------------------- | :--------------------- | :---- |
| cpu.utilization.1s.percentage            | CPU usage on 1s.       |   %   |
| cpu.utilization.1m.percentage            | CPU usage on 1m.       |   %   |
| cpu.utilization.5m.percentage            | CPU usage on 5m.       |   %   |

<!--Interfaces-->

| Metric name                              | Description                                                | Unit   |
| :--------------------------------------- | :----------------------------------------------------------| :----- |
| status                                   | Status of the interface                                    | String |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface.     			| Bits/s |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface.    			| Bits/s |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface. 		|   %	 | 
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface.	|   %	 |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface. 		|   %	 |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. 	|   %	 | 

<!--Uptime-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--: |
| uptime      | Elapsed time since last reboot             |   s  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration Dell Xseries Equipment  

Afin de contrôler vos équipements Dell Xseries, le SNMP v2 doit être configuré.

### Flux de réseaux

La communication doit être possible sur le port UDP 161 du Collecteur Centreon vers l'équipement Dell Xseries supervisé.
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du Plugin sur l'ensemble des Collecteurs Centreon supervisant des ressources Dell Xseries SNMP :

```bash
yum install centreon-plugin-Network-Switch-Dell-Xseries-Snmp
```

2. Installer le Plugin-Pack "Dell Xseries" depuis la page "Configuration > Plugin-Packs > Manager"


<!--Offline IMP License-->

1. Installer le code du Plugin sur l'ensemble des Collecteurs Centreon supervisant des ressources Dell Xseries SNMP :

```bash
yum install centreon-plugin-Network-Switch-Dell-Xseries-Snmp
```

2. Installer le RPM du Centreon Plugin-Pack sur votre serveur Central :

```bash
yum install centreon-pack-network-switch-dell-xseries-snmp
```

3. Installer le Plugin-Pack "Dell Xseries" depuis la page "Configuration > Plugin-Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Appliquer le modèle "Net-Switch-Dell-Xseries-SNMP-custom" à votre hôte nouvellement créé.
* Dans le formulaire de création de l'hôte sur l'interface web de Centreon, il est nécessaire 
de remplir les valeurs des champs "SNMP Community" et "SNMP Version".

    :warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée 
    et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP de Dell Xseries                                                          |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Lorsque le Plugin est installé, vous pouvez le tester directement en ligne de commande 
depuis votre Collecteur Centreon avec l'utilisateur de Centreon-Engine:

```bash
/usr/lib/centreon/plugins/centreon_dell_xseries_snmp.pl
	--plugin=network::dell::xseries::snmp::plugin
	--hostname=localhost
	--snmp-version='2c'
	--snmp-community='public' 
	--mode=cpu
	-warning-average-1s='80' 
	--critical-average-1s='90'
	--warning-average-1m='80' 
	--critical-average-1m='90'
	--verbose
```

Si tout va bien, il devrait produire quelque chose de semblable à:

```bash
OK: cpu total: 15 % average-1s: 18.00% average-1m: 25.00% average-5m: 15.00%|'cpu.utilization.1s.percentage'=18%;80;90;0;100; 'cpu.utilization.1m.percentage'=25%;80;90;0;100; 'cpu.utilization.1s.percentage'=15%;;;0;100
```

La commande ci-dessus demande le tableau via SNMP (```--plugin=network::dell::xseries::snmp::plugin```) en utilisant la communauté SNMP (```--snmp-community='public```) et la version (```--snmp-version=2c```) précédemment créée dans la section "Prérequis".
Cette commande vérifie les statistiques actuelles de la cpu (```--mode=cpu```).
Cette commande déclenche une alarme "WARNING" si la moyenne sur 1s passe à 80% (```--warning-average-1s='80'```) et une alarme "CRITICAL" si elle passe à 90% (```--critical-average-1s=90```). 

Il est également possible de définir des seuils "WARNING" et "CRITICAL" sur une métrique spécifique. Dans cet exemple, une alarme "WARNING" sera déclenchée si la moyenne sur 1m passe à 80%. (```--warning-average-1m='80'```) et une alarme "CRITICAL" sera déclenchée si elle passe à 5% (```--critical-average-1m='90'```).
La syntaxe des différentes options des seuils ainsi que la liste des options et leur utilisation sont détaillées dans l'aide du mode en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_xseries_snmp.pl 
	--plugin=network::dell::xseries::snmp::plugin
	--mode=memory
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous recevez ce message, cela signifie que vous ne pouvez pas contacter le dispositif Dell Xseries sur le port UDP 161, ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un pare-feu bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Ce message d'erreur fait souvent référence aux problèmes suivants : 
* L'équipement Dell XSeries ne prend pas en charge la MIB utilisée par le Plugin.
* L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.