---
id: hardware-storage-purestorage-snmp
title: Pure Storage SNMP
---

## Vue d'ensemble

Pure Storage fournit du matériel de stockage flash pour les datacenters en utilisant des disques durs grand public. 
Il fournit un logiciel propriétaire de déduplication et de compression des données afin d'améliorer la quantité qui est stockées sur chaque disque. 

## Contenu du pack de supervision

### Objets supervisés

* Baie de stockage

## Métriques collectées                                                                                             

<!--DOCUSAURUS_CODE_TABS-->
<!--Stats-->

| Nom de métrique    | Description                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| Counter            | Nom des compteurs. Peut être : bandwidth, iops ou latency                                               |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration des équipements Pure Storage

Afin de superviser vos équipements Pure Storage le SNMP v2 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le Collecteur Centreon vers l'équipement Pure Storage supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources de Pure Storage:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":


<!--Offline IMP License-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources de Pure Storage:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Installer le RPM contenant les modèles de supervision :

```bash
yum install centreon-pack-hardware-storage-purestorage-snmp
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Appliquer le modèle "HW-Storage-Purestorage-SNMP-custom" à votre hôte nouvellement créé. 

Dans le formulaire de création de l'hôte sur l'interface Web de Centreon, il est nécessaire de renseigner les valeurs pour les champs "Snmp Community" et "Snmp Version". 

:warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP idoine et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS

| Mandatory | Name             | Description                        |
| :-------- | :--------------- | :--------------------------------- |
|           | SNMPEXTRAOPTIONS | Extra options SNMP de Pure Storage |

## FAQ

#### Comment tester en ligne de commande et quelles significations portent les options principales ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins//centreon_purestorage_snmp.pl
	--plugin=storage::purestorage::snmp::plugin
	--hostname=localhost
	--snmp-version='2c'
	--snmp-community='public' 
	--mode=stats
	--filter-counters='.*'
	--warning-read-bandwidth='400000000'
	--critical-read-bandwidth='500000000'
	--warning-write-bandwidth='400000000'
	--critical-write-bandwidth='500000000'
	--verbose
```

Le message de sortie est le suivant: 

```bash
OK: Read Bandwith : 376.84 Mb/s - Write Bandwith : 0.00 b/s - Read IOPs : 3871 - Write IOPs : 0 - Read Latency : 197 us/op - Write Latency : 0 us/op | 'read_bandwidth'=376843408.00b/s;;;0; 'write_bandwidth'=0.00b/s;;;0; 'read_iops'=3871iops;;;0; 'write_iops'=0iops;;;0; 'read_latency'=197us/op;;;0; 'write_latency'=0us/op;;;0;
```

La commande ci-dessus interroge la baie via SNMP (```--plugin=storage::purestorage::snmp::plugin```) en utiisant la communauté SNMP (```--snmp-community='public'```) et la version (```--snmp-version=2c```) créé précédemment dans la partie Prérequis.
Cette commande contrôle les statistiques d'utilisation de la baie de Stockage (```--mode=stats```). La commande ci-dessus renvoie toutes les statistiques de l'appareil car le filtre de compteurs correspond à n'importe quel résultat (```--filter-counters='.*'```).

Cette commande déclenchera une alarme WARNING si la lecture du bandwidth dépasse les 400000000b/s (```--warning-read-bandwidth='400000000'```) et une alarme CRITICAL s'il dépasse 500000000b/s (```--critical-read-bandwidth='500000000'```). 

Il est également possible de définir des seuils WARNING et CRITICAL sur une métrique spécifique. Dans cet exemple une alarme WARNING sera déclenchée si l'écriture bandwidth dépasse les '400000000b/s' (```--warning-write-bandwidth='400000000'```) et CRITICAL s'il est supérieur à 500000000b/s (```--critical-write-bandwidth='500000000'```).

La syntaxe des différentes options des seuils ainsi que la liste des options et leur utilisation sont détaillées dans l'aide du mode en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_snmp.pl \
    --plugin=storage::purestorage::snmp::plugin \
    --mode=stats \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Pure Storage sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Ce message d'erreur fait souvent référence aux problèmes suivants : 
* L'équipement Pure Storage ne supporte pas le MIB utilisé par le plugin
* L'OID SNMP ciblé ne peut pas être récupéré en raison de l'insuffisance des privilèges sur l'équipement
