---
id: hardware-storage-purestorage-snmp
title: Pure Storage SNMP
---

## Vue d'ensemble

Pure Storage fournit du matériel de stockage flash pour les datacenters en utilisant des disques durs grand public. 
Il fournit un logiciel propriétaire de déduplication et de compression des données afin d'améliorer la quantité qui est stockées sur chaque disque. 

## Contenu du Plugin-Pack

### Objets supervisés

* Baie de stockage

## Métriques collectées                                                                                             

<!--DOCUSAURUS_CODE_TABS-->
<!--Stats-->

| Metric Name              | Description                                                     |
| :----------------------- | :-------------------------------------------------------------- |
| pureArrayReadBandwidth   | Read Bandwidth Volume on the storage array. Unit: Bits/second   |
| pureArrayWriteBandwidth  | Write Bandwidth Volume on the storage array. Unit: Bits/second  |
| pureArrayReadIOPS        | Read Operations on the storage array. Unit: iops                |
| pureArrayWriteIOPS       | Write Operations on the storage array. Unit: iops               |
| pureArrayReadLatency     | Storage array Read Latency (us/op). Unit: us/operations         |
| pureArrayWriteLatency    | Storage array Write Latency (us/op). Unit: us/operations        |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration des équipements Pure Storage

Afin de superviser vos équipements Pure Storage le SNMP v2 doit être configuré.

### Flux Réseaux

La communication doit être possible sur le port UDP 161 depuis le Collecteur Centreon vers l'équipement Pure Storage supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources de Pure Storage:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Installer le Plugin-Pack depuis la page "Configuration > Plugin packs > Manager":


<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources de Pure Storage:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Snmp
```

2. Installer le RPM du Plugin-Pack :

```bash
yum install centreon-pack-hardware-storage-purestorage-snmp
```

3. Installer le Plugin-Pack 'PureStorage SNMP' depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Appliquer le modèle "HW-Storage-Purestorage-SNMP-custom" à votre hôte nouvellement créé. 

Dans le formulaire de création de l'Hôte sur l'interface Web de Centreon, il est nécessaire de renseigner les valeurs des champs "SNMP Community" et "SNMP Version". 

:warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP idoine et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS

| Mandatory | Name             | Description                        |
| :-------- | :--------------- | :--------------------------------- |
|           | SNMPEXTRAOPTIONS | Extra options SNMP de Pure Storage |

## FAQ

#### Comment tester le Plugin en ligne de commande et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_purestorage_snmp.pl \
	--plugin=storage::purestorage::snmp::plugin \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='public' \
	--mode=stats \
	--warning-read-bandwidth='400000000' \
	--critical-read-bandwidth='500000000' \
	--verbose
```

Le message de sortie est le suivant: 

```bash
OK: Read Bandwith : 376.84 Mb/s - Write Bandwith : 0.00 b/s - Read IOPs : 3871 - Write IOPs : 0 - Read Latency : 197 us/op - Write Latency : 0 us/op | 'read_bandwidth'=376843408.00b/s;;;0; 'write_bandwidth'=0.00b/s;;;0; 'read_iops'=3871iops;;;0; 'write_iops'=0iops;;;0; 'read_latency'=197us/op;;;0; 'write_latency'=0us/op;;;0;
```

La commande ci-dessus interroge un équipement Pure Storage (```--plugin=storage::purestorage::snmp::plugin```) ayant pour adresse IP *10.0.0.1* (```--hostname=10.0.0.1```) en utilisant la communauté SNMP *public* (```--snmp-community='public'```).
Cette commande contrôle les statistiques d'utilisation de la baie de stockage (```--mode=stats```).

Cette commande déclenchera une alarme WARNING si la valeur de la métrique *read bandwidth* de l'équipement dépasse 400000000b/s (```--warning-read-bandwidth='400000000'```) et une alarme CRITICAL au delà de 500000000b/s (```--critical-read-bandwidth='500000000'```). 

Les seuils WARNING et CRITICAL peuvent être définis sur toutes les métriques de l'équipement.

La syntaxe des différentes options des seuils ainsi que la liste des options et leur utilisation sont détaillées dans l'aide du mode en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_snmp.pl \
    --plugin=storage::purestorage::snmp::plugin \
    --mode=stats \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Pure Storage sur le port 161 ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un équipement tiers (pare-feu, proxy...) bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Ce message d'erreur fait souvent référence aux problèmes suivants : 
* L'équipement Pure Storage ne supporte pas la MIB utilisée par le Plugin
* L'OID SNMP ciblé ne peut être récupéré en raison d'une insuffisance de privilèges sur l'équipement
