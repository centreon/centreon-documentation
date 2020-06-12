---
id: network-ruckus-icx-snmp
title: Ruckus ICX
---

## Vue d'ensemble

Les switchs Ruckus ICX simplifient la configuration et la maintenance des réseaux, améliorent la sécurité, 
facilitent l'exploitation et rendent les montées de version plus simples.
Ils peuvent s'intégrer en toute transparence avec les points d'accès Wi-Fi Ruckus, les contrôleurs Ruckus SmartZone 
et Ruckus Cloud pour délivrer les meilleurs performances et unifier les coûts.  

## Contenu du Plugin-Pack

### Éléments supervisés

* Ruckus ICX Switches series

### Règles de découverte

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                        | Description                                                                |
| :------------------------------- | :------------------------------------------------------------------------- |
| Net-Ruckus-Icx-SNMP-Traffic-Name |  Discover network interfaces and monitor status and bandwidth utilization  |

<!--DOCUSAURUS_CODE_TABS-->

## Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric Name                   | Description                                            |
| :---------------------------- | :----------------------------------------------------- |
| cpu.utilization.5s.percentage | CPU usage for the last 5s period. Unit: percentage (%) |
| cpu.utilization.1m.percentage | CPU usage for the last 1m period. Unit: percentage (%) |
| cpu.utilization.5m.percentage | CPU usage for the last 5m period. Unit: percentage (%) |

<!--Memory-->

| Metric Name             | Description                                      |
| :---------------------- | :----------------------------------------------- |
| memory.usage.bytes      | Memory usage in bytes. Unit: Bytes (B)           |
| memory.usage.percentage | Memory usage in percentage. Unit: percentage (%) |
| memory.free.bytes       | Free memory. Unit: Bytes (B)                     |

<!--Interfaces-->

| Metric Name                              | Description                                                                  |
| :--------------------------------------- | :--------------------------------------------------------------------------- |
| status                                   | Status of the interface                                                      |
| interface.traffic.in.bitspersecond       | Incoming traffic going through the interface. Unit: bits/second (b/s)        |
| interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface. Unit: bits/second (b/s)        |
| interface.packets.in.error.percentage    | Incoming errored packets going through the interface. Unit: percentage (%)   |
| interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface. Unit: percentage (%) |
| interface.packets.out.error.percentage   | Outgoing errored packets going through the interface. Unit: percentage (%)   |
| interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface. Unit: percentage (%) |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP de l'équipement Ruckus ICX  

Pour superviser votre équipement Ruckus ICX, le SNMP v2 doit être configuré et l'adresse IP du collecteur Centreon autorisée à interroger l'équipement.

### Flux réseaux

Les collecteurs Centreon doivent pouvoir joindre le port UDP/161 SNMP de l'équipement.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des équipements Ruckus ICX:

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Ruckus ICX* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des équipements Ruckus ICX:

```bash
yum install centreon-plugin-Network-Switch-Ruckus-Icx-Snmp
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-network-switch-ruckus-icx-snmp
```

3. Sur l'interface Web de Centreon, installer le Centreon Plugin Pack *Ruckus ICX* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration d'un hôte

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle d'Hôte *Net-Switch-Ruckus-Icx-SNMP-custom* et renseignez les champs *SNMP community* et *SNMP version*.

> Si vous utilisez la version 3 de SNMP, sélectionnez la bonne version de SNMP et configurez tous les paramètres SNMP v3 
> à l'aide la macro SNMPEXTRAOPTIONS:

| Mandatory   | Name                    | Description                      |
| :---------- | :---------------------- | :------------------------------- |
|             | SNMPEXTRAOPTIONS        | SNMP Extra options of Ruckus ICX |



## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon 
avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \
	--plugin=network::ruckus::icx::snmp::plugin \
	--hostname=ruckus.int.centreon.com \
	--snmp-version='2c' \
	--snmp-community='public' \
	--mode=memory \
	--warning-usage-prct='80' \
	--critical-usage-prct='90' \
	--verbose
```

La commande devrait retourner le message de sortie ci-dessous:

```bash
OK: memory total: 7.78 GB used: 5.83 GB (75.00%) free: 1.94 GB (25.00%)|
'memory.usage.bytes'=6261946368B;;;0;8349261824; 'memory.free.bytes'=2087315456B;;;0;8349261824; 'memory.usage.percentage'=75.00%;;;0;100
```

La commande ci-dessus interroge le switch Ruckus en SNMP (```--plugin=network::ruckus::icx::snmp::plugin```); en utilisant la communauté *public* (```--snmp-community='public'```) 
et la version *2c* (```--snmp-version='2c'```) du protocole.
Cette commande supervise la mémoire du switch (```--mode=memory```).

La commande retournera une alerte WARNING si l'utilisation de la mémoire dépasse 80% (```--warning-usage-prct='80'```) 
et une alerte CRITIQUE au delà de 90%  (```--critical-usage-prct='90'```).

Les seuils d'alertes peuvent être définis pour l'ensemble des métriques collectées à l'aide des 
options ```--warning-*``` et ```--critical-*```, par exemple:

```--warning-usage-free=500000000 --critical-usage-free=250000000```


Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ruckus_icx_snmp.pl \	
	--plugin=network::ruckus::icx::snmp::plugin \
	--mode=memory \
    --help
```

Vous pouvez afficher tous les modes disponibles à l'aide de la commande suivante :`

```bash
/usr/lib/centreon/plugins//centreon_ruckus_icx_snmp.pl \
    --plugin=network::ruckus::icx::snmp::plugin \
    --list-mode
```


### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient pas à contacter l'équipement Ruckus ICX sur le port 161 (pare-feu ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes:

* cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode.
* les autorisations données à l'utilisateur en SNMP sont trop restreintes. L'agent SNMP doit être en mesure d'accéder à la branche entreprise Ruckus: *.1.3.6.1.4.1.1991*.
