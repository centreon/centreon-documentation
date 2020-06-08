---
id: network-switch-ruckus-icx-snmp
title: Ruckus ICX Series
---

## Vue d'ensemble

Les switchs Ruckus ICX simplifient la configuration et la gestion du réseau, renforcent la sécurité, réduisent les problèmes et facilitent les mises à jour.
Il fonctionne de manière transparente avec les points d'accès Wi-Fi RUCKUS, les contrôleurs de réseau RUCKUS SmartZone et RUCKUS Cloud pour offrir les solutions d'accès unifié câblé et sans fil les plus performantes et les plus rentables.
	
## Contenu du pack de supervision

### Objets supervisés

* Série Ruckus ICX Switchess

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->
<!--Cpu-->

| Metric Name                              | Description                                                                                             |
| :----------------------------------------| :------------------------------------------------------------------------------------------------------ |
| cpu.utilization.5s.percentage            | CPU usage on 5s. Unit pourcentage (%)                                                                   |
| cpu.utilization.1m.percentage            | CPU usage on 1m. Unit pourcentage (%)                                                                   |
| cpu.utilization.5m.percentage            | CPU usage on 5m. Unit pourcentage (%)                                                                   |

<!--Memory-->

| Metric Name                              | Description                                                                                             |
| :----------------------------------------| :------------------------------------------------------------------------------------------------------ |
| memory.usage.bytes                       | Memory usage in bytes. Unit bytes (b)				                                                     |
| memory.free.bytes                        | Memory free. Unit bytes (b)		                                                                     |
| memory.usage.percentage                  | memory usage in percentage. Unit percentage (%)						                                 |

<!--Interfaces-->

| Metric name                              | Description                                                                                            |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------|
| status                                   | Status of the interface                                                                                |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface. Unit: bits/second                                        |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface. Unit: bits/second                                        |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface. Units: %                                         |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. Units: %                                       |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface. Units: %                                         |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. Units: %                                       |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration Ruckus ICX Equipment  

Afin de contrôler vos équipements Ruckus ICX, le SNMP v2 doit être configuré.

### Flux de réseaux

La communication doit être possible sur le port UDP 161 du Centreon Collector vers l'équipement Ruckus ICX supervisé.
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Ruckus ICX SNMP :

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager"


<!--Offline IMP License-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Ruckus ICX SNMP :

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Installez le RPM Centreon Plugin Pack sur votre serveur central :

```bash
yum install centreon-pack-network-switch-ruckus-icx-snmp
```

3. Installez le paquet de plugins Centreon "Rucku-Icx-SNMP" à partir de la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Appliquez le modèle "Net-Switch-Ruckus-Icx-SNMP-custom" à votre hôte nouvellement créé.
Dans le formulaire de création de l'hôte sur l'interface web de Centreon, il est nécessaire de remplir les valeurs des champs "Snmp Community" et "Snmp Version".
Ensuite, remplissez les fichiers de valeur des macros marqués comme obligatoires ci-dessous :

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
|             | SNMPEXTRAOPTIONS        | Extra options SNMP de Ruckus ICX                                                          |

:warning: Si vous utilisez SNMP version 3, sélectionnez la version SNMP appropriée et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Lorsque le Plugin est installé, vous pouvez le tester directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur de Centreon-engine:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl
	--plugin=network::ruckus::icx::snmp::plugin
	--hostname=localhost
	--snmp-version='2c'
	--snmp-community='public' 
	--mode=memory
	-warning-usage='80' 
	--critical-usage='90'
	--verbose
```

Si tout va bien, il devrait produire quelque chose de semblable à:

```bash
OK: memory total: 7.78 GB used: 5.83 GB (75.00%) free: 1.94 GB (25.00%)|'memory.usage.bytes'=6261946368B;;;0;8349261824; 'memory.free.bytes'=2087315456B;;;0;8349261824; 'memory.usage.percentage'=75.00%;;;0;100
```

La commande ci-dessus demande le tableau via SNMP (```--plugin=network::ruckus::icx::snmp::plugin```) en utilisant la communauté SNMP (```--snmp-community='public``) et la version (```--snmp-version=2c```) précédemment créée dans la section Pré-requis.
Cette commande vérifie les statistiques actuelles de la mémoire (```--mode=memory```).

Cette commande déclenche une alarme WARNING si l'utilisation passe à 80% (```--warning-usage='80'```) et une alarme CRITICAL si elle passe à 90% (```--critical-usage=90```). 

Il est également possible de définir des seuils WARNING et CRITICAL sur une métrique spécifique. Dans cet exemple, une alarme WARNING sera déclenchée si la mémoire libre (free) passe à 15%. (```--warning-usage-free='15'```) et une alarme CRITICAL sera déclenchée si elle passe à 5% (```--criticalusage-free='5'``).

La syntaxe des différentes options des seuils ainsi que la liste des options et leur utilisation sont détaillées dans l'aide du mode en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \
	--plugin=network::ruckus::icx::snmp::plugin \
	--mode=memory \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous recevez ce message, cela signifie que vous ne pouvez pas contacter le dispositif Ruckus ICX sur le port UDP 161, ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un pare-feu bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Ce message d'erreur fait souvent référence aux problèmes suivants : 
* L'équipement Ruckus ICX ne prend pas en charge la MIB utilisée par le plugin.
* L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
