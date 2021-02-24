---
id: network-cisco-standard-snmp
title: Cisco Standard
---

## Vue d'ensemble

Cisco développe et fabrique des équipements de télécommunications, réseaux et logiciels. Les solutions proposées répondent à de multiples usages (mobiles, IOT, routage, ...). 

## Contenu du Plugin-Pack

### Elements supervisés

Vous pouvez superviser tous les équipements embarquant les MIBs standards de Cisco:

* Routeurs
* Points d'accès 
* Switchs
* ...                     

### Règles de découverte 

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Nom de la règle                            | Description                                                                             |
| :----------------------------------------- | :-------------------------------------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery            | Découvrez vos équipements Cisco en scannant les agents SNMP sur un sous-réseau donné    |

<!--Services-->

| Nom de la règle                            | Description                                                                                   |
| :----------------------------------------- | :-------------------------------------------------------------------------------------------- |
| Net-Cisco-Standard-SNMP-Packet-Errors-Name | Découverte des interfaces réseau et supervision des paquets en erreur/discard sur l'interface |
| Net-Cisco-Standard-SNMP-Traffic-Name       | Découverte des interfaces réseau et supervision du trafic sur l'interface                     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

Seules les métriques de base sont décrites dans cette section. De nombreux modes supplémentaires sont disponibles selon la catégorie de votre équipement Cisco:

* hsrp: Statut du protocole HSRP
* ipsectunnel: Etat des tunnels VPN ipsec
* ipsla: Métriques de performances des sondes SLA configurées sur l'équipement
* load: Load sur les coeurs de l'équipement sur le format Linux
* memoryflash: Utilisation de la mémoire flash 
* qosusage: Contrôle des configurations et consommations sur la partie QOS
* stack: Etat de votre stack d'équipements

<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                                          |
| :--------------------------------- | :------------------------------------------------------------------- |
| cpu.utilization.5s.percentage      | CPU utilization during last 5 seconds. Unit: %                       |
| cpu.utilization.1m.percentage      | CPU utilization during last 1 minute. Unit: %                        |
| cpu.utilization.5m.percentage      | CPU utilization during last 5 minute. Unit: %                        |
| core.cpu.utilization.5s.percentage | Each core CPU Utilization during last 5 seconds. Unit : %            |
| core.cpu.utilization.1m.percentage | Each core CPU Utilization during last 1 minutes. Unit : %            |
| core.cpu.utilization.5m.percentage | Each core CPU Utilization during last 5 minutes. Unit : %            |

<!--Memory-->

| Metric name             | Description                                                    |
| :---------------------  | :------------------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Unit : Bytes                       |
| memory.usage.percentage | Memory usage on the device. Unit : %                           |

<!--Traffic-->

| Metric name                              | Description                                                                                |
| :--------------------------------------- | :----------------------------------------------------------------------------------------- |
| status                                   | Interface status                                                                           |
| interface.traffic.\*.bitspersecond       | \*in/out. Incoming/outgoing traffic going through the interface. Units: B/s & %            |
| interface.packets.\*.errors.percentage   | \*in/out. Incoming/outgoing errored packets going through an interface. Units: Count & %   |
| interface.packets.\*.discards.percentage | \*in/out. Incoming/outgoing discarded packets going through an interface. Units: Count & % |

Il est possible de filtrer sur une interface en particulier (L'utilisation de REGEX est possible). Par défaut ce filtre se base sur l'OID 'ifName' [```--interface='^my-interface-name$' --name```] 

<!--Environment-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| entPhysicalDescr              | A textual description of physical entity.                      |
| ciscoEnvMonPresent            | The type of environmental and monitor located in the chassis.  |

Ce mode permet de superviser les éléments physiques embarqués dans l'équipement, par exemple: fan, module, physical, psu, sensor, temperature, voltage, etc.

Il est possible d'utiliser l'option ```--absent-problem``` si vous souhaitez avoir une alerte lorsqu'un composant est enlevé/non-detecté. Les états par défaut peuvent également être paramétrés via l'option ```--threshold-overload```. 

<!--Configuration-->

| Metric name                  | Description                                                                    |
| :--------------------------- | :----------------------------------------------------------------------------- |
| ccmHistoryRunningLastChanged | The value of sysUpTime when the running configuration was last changed         |
| ccmHistoryRunningLastSaved   | The value of sysUpTime when the running configuration was last saved (written) |
| ccmHistoryStartupLastChanged | The value of sysUpTime when the startup configuration was last written         |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'équipement

Pour utiliser ce plugin-pack, vous devez configurer le service SNMP sur l'équipement. Une description complète est disponible sur le site officiel de Cisco: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html

Voici un exemple: 

  * Se connecter à l'équipement en mode configuration 

```
Router#configure terminal 
Enter configuration commands, one per line.  End with CNTL/Z. 
Router(config)#
```

  * Activer le SNMP en configurant une communauté en lecture seule 

```
Router(config)#snmp-server community public RO 
```

Dans l'exemple ci-dessus, la communauté choisie est 'public'. Cette valeur est ici utilisée à titre d'exemple et est à proscrire en utilisation normale. 

### Flux réseaux

Les collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP avec l'équipement.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des équipements Cisco:

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Installer le Plugin-Pack 'Cisco-Standard-Snmp' depuis l'interface Web et la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisants des équipements Cisco:

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

2. Installer le RPM pour avoir à disposition le Plugin-Pack dans l'interface Web de Centreon:

```bash
yum install centreon-pack-network-cisco-standard-snmp
```

3. Installer le Plugin-Pack 'Cisco-Standard-Snmp' depuis la page "Configuration > Plugin packs > Manager" de l'interface Web. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration d'un hôte

Lorsque vous ajoutez un hôte, complétez les champs 'Communauté Snmp' et 'Version Snmp' pour refléter la configuration de l'équipement cible. 

  :warning: Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ? 

Une fois le Plugin installé, vous pouvez le tester en ligne de commande avec l'utilisateur centreon-engine: 

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='cisco_ro' \
  	--verbose 
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```) d'un équipement ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) en version 2 du protocole SNMP et avec la communauté cisco_ro (```--snmp-version='2c' --snmp-community='cisco_ro'```) 

Tous les modes disponibles peuvent être affichés via l'option --list-mode:

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --list-mode
```

Pour un mode en particulier, il est possible d'utiliser le paramètre  ```--help``` pour lister toutes les options disponibles. 

```bash
/usr/lib/centreon/plugins//centreon_cisco_standard_snmp.pl \
    --plugin=network::cisco::standard::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient pas à contacter l'équipement Cisco sur le port 161 (firewall ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes. L'agent SNMP doit être en mesure d'accéder à la branche entreprise Cisco: .1.3.6.1.4.1.9. 
