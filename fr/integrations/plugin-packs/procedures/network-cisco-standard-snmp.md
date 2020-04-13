---
id: network-cisco-standard-snmp
title: Cisco Standard
---

## Vue d'ensemble

Cisco développe et fabrique des équipements réseaux & télécoms et des logiciels. Ils fournissent des solutions pour de multiples usages (mobiles, IOT, routage, ...). 

## Contenu du plugin-pack

### Elements supervisés

Vous pouvez superviser tous les équipements embarquant les MIBs standard de Cisco
    * Routeurs
    * Points d'accès 
    * Switchs
    * ...                     

### Règles de découverte 

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Nom de la règle                            | Description                                                                    |
| :----------------------------------------- | :----------------------------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery            | Découvrez vos équipements Cisco en scannant en SNMP un de vos sous-réseaux     |

<!--Services-->

| Nom de la règle                            | Description                                                              |
| :----------------------------------------- | :----------------------------------------------------------------------- |
| Net-Cisco-Standard-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errors and discards              |
| Net-Cisco-Standard-SNMP-Traffic-Name       | Discover network interfaces and monitor status and bandwidth utilization |

<!--END_DOCUSAURUS_CODE_TABS-->

## Collected metrics

Seul les métriques de base sont décrites dans cette section. De nombreux modes sont disponibles en supplément selon l'usage spécifique fait de votre équipement:

	* hsrp: Statut du protocole HSRP
	* ipsectunnel: Etat des tunnels VPN ipsec
	* ipsla: Métriques de performances des probes SLA configurées sur l'équipement
	* load: Load sur les coeurs de l'équipement sur le format Linux
	* memoryflash: Utilisation de la mémoire flash 
	* qosusage: Contrôle des configurations et consommations sur la partie QOS
	* stack: Etat de votre stack d'équipements

<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                                          |
| :--------------------------------- | :------------------------------------------------------------------- |
| cpu.utilization.5s.percentage      | CPU utilization during last 5 seconds. Units: %                      |
| cpu.utilization.1m.percentage      | CPU utilization during last 1 minute. Units: %                       |
| cpu.utilization.5m.percentage      | CPU utilization during last 5 minute. Units: %                       |
| core.cpu.utilization.5s.percentage | Each core CPU Utilization during last 5 seconds. Units: %            |
| core.cpu.utilization.1m.percentage | Each core CPU Utilization during last 1 minutes. Units: %            |
| core.cpu.utilization.5m.percentage | Each core CPU Utilization during last 5 minutes. Units: %            |

<!--Memory-->

| Metric name             | Description                                                    |
| :---------------------  | :------------------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Units: Bytes                       |
| memory.usage.percentage | Memory usage on the device. Units: %                           |

<!--Traffic-->

| Metric name                              | Description                                                                                |
| :--------------------------------------- | :----------------------------------------------------------------------------------------- |
| status                                   | Interface status                                                                           |
| interface.traffic.\*.bitspersecond       | \*in/out. Incoming/outgoing traffic going through the interface. Units: B/s & %            |
| interface.packets.\*.errors.percentage   | \*in/out. Incoming/outgoing errored packets going through an interface. Units: Count & %   |
| interface.packets.\*.discards.percentage | \*in/out. Incoming/outgoing discarded packets going through an interface. Units: Count & % |

AIl est possible de filtrer sur une interface en particulier. Par défaut ce filtre se base sur l'OID 'ifName' [```--interface='^my-interface-name$' --name```] 

<!--Environment-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| entPhysicalDescr              | A textual description of physical entity.                      |
| ciscoEnvMonPresent            | The type of environmental and monitor located in the chassis.  |

Supervision de tous les éléments hardware qui sont embarqués dans l'équipement. Par exemple: fan, module, physical, psu, sensor, temperature, voltage, etc.

Il est possible d'utiliser l'option --absent-problem si vous souhaitez avoir une alerte si un composant est enlevé/non-detecté. Les états par défaut peuvent également être paramétré via l'option --threshold-overload. 

<!--Configuration-->

| Metric name                  | Description                                                                    |
| :--------------------------- | :----------------------------------------------------------------------------- |
| ccmHistoryRunningLastChanged | The value of sysUpTime when the running configuration was last changed         |
| ccmHistoryRunningLastSaved   | The value of sysUpTime when the running configuration was last saved (written) |
| ccmHistoryStartupLastChanged | The value of sysUpTime when the startup configuration was last written         |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de votre équipement

Pour utiliser ce plugin-pack, vous devez configurer le SNMP sur votre équipement. Une description complète est disponible sur leur site officiel: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html

Voici un exemple: 

  * Connecter vous à l'équipement en mode configuration 

Router#configure terminal 
Enter configuration commands, one per line.  End with CNTL/Z. 
Router(config)#

  * Activer le SNMP tout en configurant une communauté en lecture seule 

Router(config)#snmp-server community public RO 

Dans l'exemple ci-dessus, la communauté choisie est 'public'. Personnalisez ça quand vous agissez en production. 

### Network flow

Vos serveurs Centreon doivent pouvoir communiquer via le port TCP/161 SNMP avec votre équipement.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le plugin sur tous les collecteurs supervisant des équipements Cisco

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Installer le pack 'Cisco-Standard-Snmp' depuis l'interface Web et la page "Configuration > Plugin packs > Manager". 


<!--Offline IMP License-->

1. Installer le plugin sur tous les collecteurs supervisant des équipements Cisco

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Installer le RPM pour avoir à disposition le pack dans votre interface web 

```bash
yum install centreon-pack-network-cisco-standard-snmp
```

3. Installer le pack 'Cisco-Standard-Snmp' depuis l'interface Web et la page "Configuration > Plugin packs > Manager". 

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration d'un hôte

Lorsque vous ajoutez un hôte, compléter les champs 'Communauté Snmp' et 'Version Snmp' pour refléter la configuration de l'équipement cible. 

  :warning: Si vous utilisez SNMP en v3, vous devez configurer vos paramètres spécifiques via la macro SNMPEXTRAOPTIONS

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester mes configuration et le plugin en ligne de commande ? 

Une fois le plugin installé, vous pouvez le tester en ligne de commande avec l'utilisateur centreon-engine: 

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='cisco_ro' \
  --verbose 
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) en version 2 du protocol SNMP et avec la communauté cisco_ro (```--snmp-version='2c' --snmp-community='cisco_ro'```) 

Tous les modes disponibles peuvent être affiché via l'option --list-mode:

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --list-mode
```

Pour un mode en particulier, il est possible d'utiliser le flag  ```--help``` pour connaître toutes les optiosn disponibles. 

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter votre équipemnt Cisco sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est possible: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP soient trop restreintes. Il faut qu'il ait accès à la branche entreprise Cisco: .1.3.6.1.4.1.9. 