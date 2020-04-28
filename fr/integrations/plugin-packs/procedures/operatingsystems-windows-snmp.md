---
id: os-windows-snmp
title: Windows Snmp
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.4 | `STABLE` | Jan 23 2020 |

## Vue d'ensemble

Windows est un système d’exploitation, autrement dit, un ensemble de programmes et logiciels permettant de gérer les ressources d’un ordinateur.

## Contenu du pack de supervision

### Objets supervisés

Tous les systèmes d'exploitation Microsoft Windows sont supportés: 
    
    * Windows serveur (2003, 2012, 2016 etc...)
    * Windows client (7, 8, 10 etc ...)
	* ...

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Host-->

| Rule name                                  | Description                                                                          |
| :----------------------------------------- | :----------------------------------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery            |  Découvrez vos serveurs Windows en scannant les agents SNMP sur un sous-réseau donné |

<!--Services-->

| Rule name                                  | Description                                                                                   | 
| :----------------------------------------- | :-------------------------------------------------------------------------------------------- |
| OS-Windows-SNMP-Disk-Name                  | Découvre les disques/partitions et leur taux d'occupation                                     |
| OS-Windows-SNMP-Traffic-Name               | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante  |

<!--END_DOCUSAURUS_CODE_TABS-->


## Métriques collectées

*  System clock synchronisation : Vérifications de la synchronisation de la date et de l'heure.
*  Process state : Etat d'un ou plusieurs processus
*  Service state : Etat d'un ou plusieurs services

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                        | Description                       
| :--------------------------------- | :--------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Unit: %           |
| core.cpu.utilization.percentage    | CPU Core utilization. Units: %     |

<!--Memory-->

| Metric name             | Description                                                    |
| :---------------------  | :------------------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Unit: %                                  |

<!--Traffic-->

| Metric name                         | Description                                                               |
| :---------------------------------- | :------------------------------------------------------------------------ |
| status                              | Status of monitored interface                                             |
| interface.traffic.in.bitspersecond  | Incoming and incoming traffic going through the interface. Units: B/s & % |
| interface.traffic.out.bitspersecond | Outgoing and incoming traffic going through the interface. Units: B/s & % |

Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de la forme [--interface='^card0$' --name]

<!--Swap-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| swap.usage.bytes              | Swap usage Unit: Bytes                                         |

<!--Storage-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| storage.partitions.count      | Number of partition                                            |
| storage.space.usage.bytes     | Space usage of disk. Units: Bytes                              |

<!--Uptime-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| uptime                        | Status of last boot of serveur                                 |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de superviser vos serveurs Windows le SNMP v2 doit être configuré.

La communication doit être possible sur le port 161 depuis le collecteur de supervision vers le serveur Windows.

## Configuration du serveur SNMP

:note: Les instructions ci-après peuvent changer en fonction de la version de votre Windows. Des documentations sont le cas échéant disponibles sur le site officiel Microsoft.

Il faut installer la fonctionnalité SNMP dans le gestionnaire de serveur de Windows :

Gestionnaire de serveur => Ajouter des rôles et des fonctionnailtées => Installation basée sur un rôle ou une fonctionnalité => Service SNMP

Une fois ajouté il ne vous reste plus qu'à paramétrer le service "SNMP agent" avec votre communauté et les IP des collecteurs qui doivent superviser le serveur. 

Il est nécessaire de redémarrer le service SNMP après avoir configuré celui-ci.

## Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers le serveur Windows supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des serveurs Windows:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Snmp
```

Installer le Plugin-Pack 'Windows SNMP' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des serveurs Windows:

```bash
yum install centreon-plugin-Operatingsystems-Windows-Snmp
```

2. Installer le RPM contenant les modèles de supervision

```bash
yum install centreon-pack-operatingsystems-windows-snmp
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Dans le formulaire de création de l'hôte sur l'interface Web de Centreon, il est nécessaire de renseigner les valeurs pour les champs "Snmp Community" et "Snmp Version". 

  :warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP idoine et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS 

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester en ligne de commande et quelles significations portent les options principales ?

A partir du moment ou la sonde est installée, vous pouvez tester directement depuis votre poller de supervision avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins//centreon_windows_snmp.pl
	--plugin=os::windows::snmp::plugin
	--mode=service
	--hostname=10.30.2.114
	--snmp-version='2c'
	--snmp-community='windows_ro'
	--snmp-port=1616
	--service='firefox'
	--warning=
	--critical=1:
	--state=''
	--regexp 
    
CRITICAL: Service problem 'firefox'```

La commande vérifie l'état d'un service Windows (```--mode=service```) d'un serveur ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) en version 2 du protocol SNMP et avec la communauté windows_ro  (```--snmp-community='windows_ro'```) ainsi que le nom du service (```firefox```)

Tous les modes sont affichables via la commande suivante:

```bash
/usr/lib/centreon/plugins//centreon_windows_snmp.pl \
    --plugin=os::windows::snmp::plugin \
    --list-mode
```

Les options des différents modes sont consultables via le help du mode: 

```bash
/usr/lib/centreon/plugins//centreon_windows_snmp.pl \
    --plugin=os::windows::snmp::plugin \
    --mode=service \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter le serveur Windows sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP Table Request : (genError) A general failure occured

Un patch a été fait pour résoudre cette erreur qui vient de l'agent SNMP de Windows (N'oubliez pas de mettre à jour votre plugins et votre pack). Ce patch ne marche pas pour toutes les versions de Windows Serveur. Il faudra alors utiliser le nsclient, par exemple, pour contourner le problème.

### UNKNOWN: Can't construct cache..." pour Windows 2003 Server - Traffic Global :

Ajoutez dans les "EXTRAOPTION" des services les options suivantes : 

--oid-display ifDesc --oid-filter ifDesc 

### Valeur négative sur certain disque du mode storage  

Il s'agit d'un comportement connu de l'agent SNMP de Windows. La valeur "Size" et "Used" se trouvent sur un entier en 32 bits. Il n'y a pas de solution mis à par utiliser un autre agent de monitoring. 
