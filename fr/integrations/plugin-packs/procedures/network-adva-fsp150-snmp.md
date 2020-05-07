---
id: network-adva-fsp150-snmp
title: Adva FSP 150 SNMP
---

## Vue d'ensemble
Adva Optical Networking vend des équipements réseaux pour les services de données, stockage, voip et video. 

## Contenu du pack de supervision

### Objets supervisés

* Réseau
* Stockage
* Voip
* Video

## Métriques Collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->
| Nom de métrique                           | Description                                                               |
| :---------------------------------------- | :------------------------------------------------------------------------ |
| alerts.problems.current.count             | Total des alarmes courantes ou nouvelles alarmes. Unité: Count            |

<!--Hardware-->
| Nom de métrique                           | Description                                                               |
| :---------------------------------------- | :------------------------------------------------------------------------ |
| hardware.card.count                       | Nombre de cartes. Unité: Count                                            |
| hardware.shelf.count                      | Nombre d'étagères. Unité: Count                                           |

<!--Interfaces-->
| Nom de métrique                           | Description                                                               |
| :---------------------------------------- | :------------------------------------------------------------------------ |
| interface.traffic.in.bitspersecond        | Trafic entrant passant par l'interface. Unité: b/s & %                    |
| interface.packets.in.error.percentage     | Paquets en erreur entrants passant par une interface. Unité: Count & %    |
| interface.packets.in.discard.percentage   | Paquets rejetés entrants passant par une interface. Unité: Count & %      |
| interface.traffic.out.bitspersecond       | Trafic sortant passant par l'interface. Unité: b/s & %                    |
| interface.packets.out.error.percentage    | Paquets en erreur sortants passant par une interface. Unité: Count & %    |
| interface.packets.out.discard.percentage  | Paquets rejetés sortants passant par une interface. Unité: Count & %      |

Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de la forme (```--interface='^my-interface-name$' --name```).

<!--Systems-->
| Nom de métrique                           | Description                                                               |
| :---------------------------------------- | :------------------------------------------------------------------------ |
| system.cpu.utilization.15min.percentage   | Utilisation du CPU pendant les 15 dernières minutes. Unité: %             |
| system.memory.usage.bytes                 | Utilisation de la mémoire sur l'appareil. Unité: Bytes                    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis
### Configuration de l'équipement Adva FSP 150
Afin de superviser vos équipemnt Adva le SNMP v2 doit être configuré.
La communication doit être possible sur le port 161 depuis le collecteur de supervision vers vos équipements.

### Flux réseau
La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers l'équipement Adva supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des équipements Adva FSP 150:

```bash
yum install centreon-plugin-Network-Adva-Fsp150-Snmp
```

Installer le Plugin-Pack 'Adva Fsp 150 SNMP' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--Offline IMP License-->
1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des équipemnts Adva FSP 150:

```bash
yum install centreon-plugin-Network-Adva-Fsp150-Snmp
```

2. Installer le RPM contenant les modèles de supervision:

```bash
yum install centreon-pack-network-adva-fsp150-snmp
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Dans le formulaire de création de l'hôte sur l'interface Web de Centreon, il est nécessaire de renseigner les valeurs pour les champs "Snmp Community" et "Snmp Version". 
  :warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP idoine et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS 
| Obligatoire | Nom              | Description                                         |
| :---------- | :--------------- | :-------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configurez votre propre combo d'identifiants SNMPv3 |

## FAQ

### Comment tester en ligne de commande et quelles significations portent les options principales ?

A partir du moment où la sonde est installée, vous pouvez tester directement depuis votre poller de supervision avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \
    --plugin=network::adva::fsp150::snmp::plugin \
    --mode=systems \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='public' \
    --verbose 
```

La commande vérifie l'état du processeur et de la mémoire (```--mode=systems```) d'un équpipement ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) en version 2 du protocol SNMP et avec la communauté public  (```--snmp-community='public'```).

Tous les modes sont affichables via la commande suivante:

```bash
/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \
    --plugin=network::adva::fsp150::snmp::plugin \
    --list-mode
```

Les options des différents modes sont consultables en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \
    --plugin=network::adva::fsp150::snmp::plugin \
    --mode=systems \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipemnt Adva sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Ce message d'erreur fait souvent référence aux problèmes suivants : 
  - L'équipement Adva Optical ne supporte pas le MIB utilisé par le plugin
  - L'OID SNMP ciblé ne peut pas être récupéré en raison de l'insuffisance des privilèges sur l'équipemnt
