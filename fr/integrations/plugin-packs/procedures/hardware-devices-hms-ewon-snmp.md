---
id: hardware-devices-hms-ewon-snmp
title: HMS Ewon SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack HMS Ewon la supervision des Tags.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Tags-->

| Metric name                | Description        | Unit |
| :------------------------- | :----------------- | :--- |
| interface status           | Status of the tag  |      |
| *tagname*#tag.value.count  | Tag value          |      |

It is possible to filter on the name of a tag using a REGEXP of the form [```--filter-tag-name='Fuel'```].

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler vos équipements HMS Ewon, le SNMP doit être configuré.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Hms-Ewon-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *HMS Ewon SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Hms-Ewon-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-hardware-devices-hms-ewon-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *HMS Ewon SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par équipement HMS Ewon.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *HW-Device-Hms-Ewon-SNMP-custom*. 
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
/usr/lib/centreon/plugins/centreon_hms_ewon_snmp.pl \
    --plugin=hardware::devices::hms::ewon::snmp::plugin \
    --mode=tags \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='ewon_ro' \
    --filter-tag-name=Partiel \
    --tag-threshold-warning='40000' \
    --tag-threshold-critical='50000'
    --verbose
```

Exemple de sortie :

```
CRITICAL: Tag 'Compt_H_Partiel' value: 441985 | 'Compt_H_Partiel#tag.value.count'=441985;0:40000;0:50000;; 'Compt_Ea_Partiel#tag.value.count'=20507;0:40000;0:50000;; 'Compt_Er_Partiel#tag.value.count'=1040;0:40000;0:50000;;
Tag 'Compt_H_Partiel' status: none, value: 441985
Tag 'Compt_Ea_Partiel' status: none, value: 20507
Tag 'Compt_Er_Partiel' status: none, value: 1040
```

Cette commande contrôle les tags (```--mode=tags```) d'un équipement ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *ewon_ro* (```--snmp-community='ewon_ro'```).

Cette commande déclenchera une alarme WARNING si la valeur des tags est supérieur à 40000 (```--tag-threshold-warning='40000'```)
et une alarme CRITICAL si supérieur à 50000 (```--tag-threshold-critical='50000'```).
 
Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins/centreon_hms_ewon_snmp.pl \
    --plugin=hardware::devices::hms::ewon::snmp::plugin \
	--mode=tags \
	--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement HMS Ewon sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement HMS Ewon ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.8284.2.1).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
