---
id: hardware-devices-eltek-enexus-snmp
title: Eltek eNexus SNMP
---

## Vue d'ensemble

Eltek est un spécialiste mondial de la conversion de l'énergie électrique qui développe et commercialise des systèmes pour les télécommunications et les applications industrielles.

## Contenu du pack de supervision 

### Objets supervisés
* Télécommunications

Les modèles suivants peuvent être supervisés:
* SmartPack2 V2.x
* SmartPack S V2.x
* Compack V2.x

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

Pas de règle de découverte des hôtes disponible sur ce pack

<!--Services-->

Pas de règle de découverte des services disponible sur ce pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name                        | Description                         |
| :--------------------------------- | :---------------------------------- |
| alarms.active.count                | Current total alarms. Unit: Count   |

<!--Battery-->

| Metric name                             | Description                                                         |
| :-------------------------------------- | :------------------------------------------------------------------ |
| battery.temperature.celsius             | Current battery temperature. Units: celsius & fahrenheit            |
| battery.charge.remaining.percentage     | Current battery charge remaining. Units: percentage & amperehour    |
| battery.charge.remaining.percentage     | Current battery charge remaining. Units: percentage & amperehour    |
| battery.charge.remaining.time.seconds   | Current battery charge remaining. Unit: seconds                     |
| battery.charge.remaining.time.seconds   | Current battery charge remaining time. Unit: seconds                |
| battery.voltage.volt                    | Current battery voltage. Unit: volt                                 |
| battery.current.ampere                  | Current battery load. Unit: ampere                                  |

<!--Load-->

| Metric name                               | Description                                                             |
| :---------------------------------------- | :---------------------------------------------------------------------- |
| load.current.ampere                       | Current load. Unit: ampere                                              |
| load.energy.delivered.watt                | Accumulated energy delivered. Unit: watt                                |
| phase.voltage.volt                        | By phase instance. Current voltage. Unit: volt                          |

<!--Outputs-->

| Metric name                             | Description                                                         |
| :-------------------------------------- | :------------------------------------------------------------------ |
| outputs.disconnected.count              | Current disconnected outputs. Unit: Count                           |
| outputs.notenergized.count              | Current not energized outputs. Unit: Count                          |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration des équipements Eltek eNexusL

Afin de superviser vos équipements Eltek le SNMP v2 doit être configuré.

La communication doit être possible sur le port 161 depuis le collecteur de supervision vers vos équipements.

## Configuration d'un équipement SNMP

:note: Les instructions ci-après peuvent changer en fonction de la version de votre Eltek. Des documentations sont le cas échéant disponibles sur le site officiel du constructeur.

Sur l'interface Web:

1. Cliquer sur l'icône "système Conf. " dans la barre de menu supérieure.
2. Dans la barre de menu de gauche, cliquer sur "Device Settings" pour développer le menu.
3. Sous "Device Settings", cliquer sur "SNMP Settings". La page  "General SNMP configuration" apparaît.
4. Enfin, ajouter vos informations SNMP

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers l'équipemnt Eltek eNexus supervisé. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des équipements Eltek eNexus:

```bash
yum install centreon-plugin-Hardware-Devices-Eltek-Enexus-Snmp
```
Installer le Plugin-Pack 'Eltek eNexus' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des équipemnts Eltek eNexus:

```bash
yum install centreon-plugin-Hardware-Devices-Eltek-Enexus-Snmp
```

2. Installer le RPM contenant les modèles de supervision:

```bash
yum install hardware-devices-eltek-enexus-snmp
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Dans le formulaire de création de l'hôte sur l'interface Web de Centreon, il est nécessaire de renseigner les valeurs pour les champs "Snmp Community" et "Snmp Version". 

  :warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP idoine et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS 

| Obligatoire | Nom              | Description                                         |
| :---------- | :--------------- | :-------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configurez votre propre combo d'identifiants SNMPv3 |

## FAQ

### Comment tester en ligne de commande et quelles significations portent les options principales ?

A partir du moment ou la sonde est installée, vous pouvez tester directement depuis votre poller de supervision avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \
	--plugin=hardware::devices::eltek::enexus::snmp::plugin \
	--mode=battery \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='public' \
  --verbose 
```

La commande vérifie le status de la batterie (```--mode=battery```) d'un équpipement ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) en version 2 du protocol SNMP et avec la communauté public  (```--snmp-community='public'```).

Tous les modes sont affichables via la commande suivante:

```bash
/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \
    --plugin=hardware::devices::eltek::enexus::snmp::plugin \
    --list-mode
```

Les options des différents modes sont consultables via le help du mode: 

```bash
/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \
    --plugin=hardware::devices::eltek::enexus::snmp::plugin \
    --mode=battery \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipemnt Eltek sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Ce message d'erreur fait souvent référence aux problèmes suivants : 
  - L'équipement Adva Optical ne supporte pas le MIB utilisé par le plugin
  - L'OID SNMP ciblé ne peut pas être récupéré en raison de l'insuffisance des privilèges sur l'équipement
