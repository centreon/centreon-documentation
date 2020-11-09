---
id: hardware-pdu-cyberpower-snmp
title: CyberPower Systems PDU SNMP
---

## Vue d'ensemble

Le Plugin-Pack CyberPower PDU 

## Contenu du Plugin-Pack

### Objets supervisés

* Composants physiques et logiques du PDU (Bank, Phases, Outlets).

## Métriques collectées

## Collected metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Load-->

| Metric name              | Description                                       | Unit |
|:------------------------ |:------------------------------------------------- |:---- |
| bank status              | Bank status, possible to set string-based alerts  |      |
| bank.current.ampere      | Current Bank Ampere level                         |  A   |
| phase status             | Phase status, possible to set string-based alerts |      |
| phase.current.ampere     | Current Ampere level on a given Phase             |  A   |
| phase.power.watt         | Current Watt Power on a given Phase               |  W   |

<!--Outlets-->

| Metric name                | Description                                             | Unit |
|:---------------------------|:--------------------------------------------------------|:-----|
| outlet status              | Outlet status, possible to set string-based alerts      |      |
| outlet.current.ampere      | Current Ampere on a given outlet                        |   A  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis 

Le Service SNMP doit être activé et configuré sur l'équipement CyberPower. 

Le Collecteur Centreon doit être en mesure d'atteindre le PDU CyberPower via le port
UDP/161. 

Afin d'obtenir plus d'information sur la configuration SNMP, il est recommandé de se référer à la
documentation officielle: 
https://dl4jz3rbrsfum.cloudfront.net/documents/CyberPower_UM_IntelligentPDUUserGuide.pdf\.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources *CyberPower Systems PDU SNMP*:

```bash
yum install centreon-plugin-Hardware-Pdu-Cyberpower-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *CyberPower Systems PDU SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *CyberPower Systems PDU SNMP* applications:

```bash
yum install centreon-plugin-Hardware-Pdu-Cyberpower-Snmp
```

2. Installer le RPM Centreon Plugin-Pack sur votre serveur Centreon Central:

```bash
yum install centreon-pack-hardware-pdu-cyberpower-snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *CyberPower Systems PDU SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Connecter vous à Centreon et ajouter un nouvel Hôte via la page "Configuration > Hôtes". 
* Remplir les champs "Nom", "Alias", "Adresse IP / DNS", "Communauté Snmp" et "Version Snmp" selon la configuration de l'équipement
* Ajouter le modèle *HW-Pdu-Cyberpower-SNMP*.

  :warning: Si vous utilisez SNMP v3, configurer la macro SNMPEXTRAOPTIONS avec les paramètres adéquats

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de
commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* (certaines options comme ```--snmp-community``` doivent être
ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_pdu_cyberpower_snmp.pl \
--plugin=hardware::pdu::cyberpower::snmp::plugin \
--mode=outlets \
--snmp-community=cps_pdu \
--hostname=10.31.2.1 \
--snmp-version=2c \
--verbose 
```

La commande doit retourner un message de sortie similaire à celui ci-dessous : 

```bash
OK: Device 'PDU81005' outlets are ok | 'PDU81005~Outlet3 bank 1#outlet.current.ampere'=0.4A;;;0; 'PDU81005~Outlet7 bank 1#outlet.current.ampere'=0.4A;;;0; 'PDU81005~Outlet8 bank 1#outlet.current.ampere'=0.9A;;;0;checking device 'PDU81005'outlet 'Outlet1 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet2 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet3 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.4 Aoutlet 'Outlet4 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet5 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet6 bank 1' state: 'on' [phase: seqPhase1ToNeutral]outlet 'Outlet7 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.4 Aoutlet 'Outlet8 bank 1' state: 'on' [phase: seqPhase1ToNeutral], current : 0.9 A
```

Dans cet exemple, le Plugin contrôle le statut et les métriques associées aux Outlets: 
(```--plugin=hardware::pdu::cyberpower::snmp::plugin --mode=outlets```)

L'ensemble des seuils disponibles peut être affiché en utilisant l'option ```--help``` à la fin de la commande: 

```bash
/usr/lib/centreon/plugins/centreon_pdu_cyberpower_snmp.pl \
--plugin=hardware::pdu::cyberpower::snmp::plugin \
--mode=outlets \
--help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement 
Cisco sur le port UDP/161, ou alors que la communauté SNMP configurée n'est pas correcte. 

Il est également possible qu'un équipement tiers (Pare-feu, ...) bloque la requête effectuée par le Plugin.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte pas la MIB CyberPower utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes. 
  * L'agent SNMP doit être en mesure d'accéder à la branche entreprise CyberPower: .1.3.6.1.4.1.3808