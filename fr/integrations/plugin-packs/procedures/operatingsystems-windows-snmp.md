---
id: operatingsystems-windows-snmp
title: Windows SNMP
---

## Vue d'ensemble

Windows est un système d’exploitation, autrement dit, un ensemble de programmes
et logiciels permettant de gérer les ressources d’un ordinateur.

## Contenu du pack de supervision

### Objets supervisés

Tous les systèmes d'exploitation Microsoft Windows sont supportés:

  - Windows serveur (2003, 2012, 2016)
  - Windows client (7, 8, 10)
  - ...

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Host-->

| Nom de la règle                 | Description                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery | Découvrez vos serveurs Windows en scannant les agents SNMP sur un sous-réseau donné |

<!--Services-->

| Nom de la règle              | Description                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| OS-Windows-SNMP-Disk-Name    | Découvre les disques/partitions et leur taux d'occupation                                    |
| OS-Windows-SNMP-Traffic-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

Au delà des métriques présentées en détails ici, les contrôles suivants sont
disponibles:

  - System clock synchronisation : Vérifications de la synchronisation de la
    date et de l'heure.
  - Process state : Etat d'un ou plusieurs processus
  - Service state : Etat d'un ou plusieurs services

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Nom de la métrique              | Description                    |
| ------------------------------- | ------------------------------ |
| cpu.utilization.percentage      | CPU utilization. Unit: %       |
| core.cpu.utilization.percentage | CPU Core utilization. Units: % |

<!--Memory-->

| Nom de la métrique | Description                         |
| ------------------ | ----------------------------------- |
| memory.usage.bytes | Memory usage on the device. Unit: % |

<!--Traffic-->

| Nom de la métrique                  | Description                                                               |
| ----------------------------------- | ------------------------------------------------------------------------- |
| status                              | Status of monitored interface                                             |
| interface.traffic.in.bitspersecond  | Incoming and incoming traffic going through the interface. Units: B/s & % |
| interface.traffic.out.bitspersecond | Outgoing and incoming traffic going through the interface. Units: B/s & % |

Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de
la forme : `--interface='^card0$' --name`

<!--Swap-->

| Nom de la métrique | Description            |
| ------------------ | ---------------------- |
| swap.usage.bytes   | Swap usage Unit: Bytes |

<!--Storage-->

| Nom de la métrique        | Description                       |
| ------------------------- | --------------------------------- |
| storage.partitions.count  | Number of partition               |
| storage.space.usage.bytes | Space usage of disk. Units: Bytes |

<!--Uptime-->

| Nom de la métrique | Description                    |
| ------------------ | ------------------------------ |
| uptime             | Status of last boot of serveur |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Configurer le service SNMP en v2 pour superviser le système Windows.

## Configuration du serveur SNMP

> Les instructions ci-après peuvent changer en fonction de la version de
> votre Windows. Référez vous à la documentation officielle de Microsoft le cas
> échéant.

  - Installer la fonctionnalité SNMP dans le gestionnaire de serveur de Windows :

    Gestionnaire de serveur =\> Ajouter des rôles et des fonctionnailtées =\>
    Installation basée sur un rôle ou une fonctionnalité =\> Service SNMP

  - Paramétrer le service "SNMP agent" avec votre communauté et les IP des
    Collecteurs qui feront les requêtes.

  - Redémarrer le service SNMP après avoir configuré celui-ci.

## Flux réseaux

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur Windows supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des
serveurs Windows:

    ``` shell
    yum install centreon-plugin-Operatingsystems-Windows-Snmp
    ```

2. Installer le pack depuis la page `Configuration > Plugin Packs`

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des
serveurs Windows:

    ``` shell
    yum install centreon-plugin-Operatingsystems-Windows-Snmp
    ```

2. Installer le RPM contenant les modèles de supervision

    ``` shell
    yum install centreon-pack-operatingsystems-windows-snmp
    ```

3. Installer le pack depuis la page `Configuration > Plugin Packs`

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Dans le formulaire de création de l'hôte sur l'interface Web de Centreon, il est
nécessaire de renseigner les valeurs pour les champs "Snmp Community" et "Snmp
Version".

## FAQ

### Comment tester en ligne de commande et quelles significations portent les options principales ?

A partir du moment ou la sonde est installée, vous pouvez tester directement
depuis votre poller de supervision avec l'utilisateur centreon-engine :

``` shell
su - centreon-engine
/usr/lib/centreon/plugins/centreon_windows_snmp.pl \
    --plugin=os::windows::snmp::plugin \
    --mode=service \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='windows_ro' \
    --snmp-port=1616 \
    --service='firefox' \
    --warning= \
    --critical=1: \
    --state='' \
    --regexp
```

La commande renvoie alors :

``` shell
CRITICAL: Service problem 'firefox'
```

La commande vérifie l'état d'un Service (`--mode=service`) sur une machine ayant
pour adresse 10.30.2.114 (`--hostname=10.30.2.114`) en version 2 du protocol
SNMP et avec la communauté windows\_ro  (`--snmp-community='windows_ro'`). Le
service supervisé est Firefox (`firefox`)

Tous les modes sont affichables via la commande suivante:

``` shell
/usr/lib/centreon/plugins/centreon_windows_snmp.pl \
    --plugin=os::windows::snmp::plugin \
    --list-mode
```

Les options des différents modes sont consultables via le help du mode:

``` shell
/usr/lib/centreon/plugins/centreon_windows_snmp.pl \
    --plugin=os::windows::snmp::plugin \
    --mode=service \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter
le serveur Windows sur le port 161, ou alors que la communauté SNMP configurée
n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP Table Request : (genError) A general failure occured

Un patch a été fait pour résoudre cette erreur qui vient de l'agent SNMP de
Windows (N'oubliez pas de mettre à jour votre plugins et votre pack). Ce patch
ne marche pas pour toutes les versions de Windows Serveur. Il faudra alors
utiliser l'agent NSClient RestAPI pour une supervision exhaustive.

### UNKNOWN: Can't construct cache..." pour Windows 2003 Server - Traffic Global

Ajoutez dans les "EXTRAOPTIONS" des services les options suivantes :

``` shell
--oid-display='ifDesc' --oid-filter='ifDesc'
```

### Valeur négative sur certain disque du mode storage

Il s'agit d'un comportement connu de l'agent SNMP de Windows. La valeur "Size"
et "Used" se trouvent sur un entier en 32 bits. Il n'y a pas de solution mis à
par utiliser un autre agent de monitoring comme NSClient++.
