---
id: network-lenovo-flexsystem-snmp
title: Lenovo Flex System Switch 
---

## Vue d'ensemble

Lenovo développe, fabrique et vend du matériel et logiciels informatiques.
Lenovo Flex System est l'architecture de serveurs lames de Lenovo.

## Contenu du Plugin-Pack

### Objets supervisés 

* Lenovo Flex System network switch

### Métriques collectées

En plus des modes et des métriques détaillés ci-après, il est également possible
de superviser les éléments suivants :

* Ntp : Vérifier le décalage de temps du serveur avec le serveur NTP
* Uptime : Durée depuis le dernier redémarrage

<!--Cpu-->

| Metric name                    | Description                              | Unit   |
| :----------------------------- | :--------------------------------------- | :------|
| cpu.utilization.1m.percentage  | CPU utilization for the last minute      | %      |
| cpu.utilization.5m.percentage  | CPU utilization for the last 5 minutes   | %      |

<!--Storage-->

| Metric name                         | Description                    | Unit   |
| :---------------------------------- | :----------------------------- |------- |
| storage.partitions.count            | Total number of partition      |        |
| partition#storage.space.usage.bytes | Used space on a disk partition | Bytes  |

<!--Memory-Usage-->

| Metric name             | Description                 | Unit   |
| :---------------------- | :---------------------------| :----- |
| memory.usage.bytes      | Total current memory usage  | Bytes  |
| memory.usage.percentage | Total current memory usage  |  %     |
| memory.free.bytes       | Current free memory         | Bytes  |

<!--Traffic-->

| Metric name                              | Description                                                               | Unit        |
| :--------------------------------------- | :------------------------------------------------------------------------ | :---------- |
| status                                   | Interface status                                                          |             |
| interface.traffic.\*.bitspersecond       | \*in/out. Incoming/outgoing traffic going through the interface           | Bytes/s & % |
| interface.packets.\*.errors.percentage   | \*in/out. Incoming/outgoing errored packets going through an interface    | Count & %   |
| interface.packets.\*.discards.percentage | \*in/out. Incoming/outgoing discarded packets going through an interface  | Count & %   |

A regexp filter is available to target a specific interface identifier/ifName [```--interface='^my-interface-name$' --name```] 

<!--Environment-->

| Metric name                   | Description                      | Unit     |               
| :---------------------------- | :------------------------------- | :--------|
| hardware.temperature.celsius  | Temperature of the system        | Celsius  |
| faultled                      | Status of the fault LED (On/Off) |          |

You can use ```--no-component``` if you want to alert when a component is 
absent/removed. You can also overload the default status using the 
```--threshold-overload option```. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

Pour utiliser ce plugin-pack, vous devez configurer le service SNMP sur le
chassis Lenovo Flex System Enterprise. Une description complète est disponible sur le
site officiel de Lenovo :

* Avec la console Web de CMM : https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.lxci_hwmp_scom.doc%2Fhwmp_enable_snmp_agent.html
* Avec l'interface en ligne de commande de CMM : https://flexsystem.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.acc.cmm.doc%2Fcli_command_snmp.html

### Flux réseaux

Les collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP
avec le chassis Lenovo Flex System Enterprise.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant un switch Lenovo Flex System :

```bash
yum install centreon-plugin-Network-Lenovo-Flexsystem-Snmp
```

2. Installer le Plugin-Pack *Lenovo Flex System Switch* depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant un switch Lenovo Flex System :

```bash
yum install centreon-plugin-Network-Lenovo-Flexsystem-Snmp
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision sur le serveur Centreon Central :

```bash
yum install centreon-pack-network-lenovo-flexsystem-snmp
```

3. Installer le Plugin-Pack *Lenovo Flex System Switch* depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Aller dans Configuration > Host > et cliquer sur Ajouter. Puis complétez les
champs SNMP Community et SNMP Version et appliquer le modèle d'hôte
*Net-Lenovo-Flexsystem-SNMP-custom*.

:warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP 3 et
configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS.

| Mandatory   | Name             | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for ?

Une fois le Plugin est installé, vous pouvez tester celui-ci directement en
ligne de commande depuis votre collecteur Centreon avec l'utilisateur
*centreon-engine* :
 
```bash
/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \
  --plugin=network::lenovo::flexsystem::snmp::plugin \
  --mode=interfaces --hostname=10.30.2.138 \
  --snmp-community='public' \
  --snmp-version='2c' \
  --add-status \
  --add-traffic
```

Résultat attendu :

```
OK: All interfaces are ok | 'traffic_in_lo'=11723.33b/s;;;0;10000000 'traffic_out_lo'=11723.33b/s;;;0;10000000 'traffic_in_ens192'=14097.70b/s;;;0;10000000000 'traffic_out_ens192'=21796.60b/s;;;0;10000000000
```

ous les modes disponibles dans le Plugin peuvent être listés via la commande
suivante :

```bash
/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \
  --plugin=network::lenovo::flexsystem::snmp::plugin \
  --list-mode
```

Les options des différents modes sont consultables via le paramètre ```--help```
du mode :

```bash
/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \
  --plugin=network::lenovo::flexsystem::snmp::plugin \
  --mode=interfaces \
  --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient
pas à contacter votre cluster Nutanix sur le port UDP 161 ou bien que la communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à
l'agent SNMP soient trop restreintes.
