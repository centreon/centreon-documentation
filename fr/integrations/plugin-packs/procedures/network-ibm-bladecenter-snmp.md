---
id: network-ibm-bladecenter-snmp
title: IBM Bladecenter Switch
---

## Vue d'ensemble

IBM develops, manufactures and sells hardware, middleware, software and other
services and products. Created in 2002, IBM BladeCenter was IBM's blade server
architecture. 

## Contenu du Plugin-Pack

### Eléments supervisés

* IBM Bladecenter switch

### Métriques collectées 

In addition to modes and metrics described here, it is also possible to monitor 
the following indicators:

* Ntp: Check time offset of server with ntp server
* Uptime: Elapsed time since the last reboot

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

## Prérequis

To use this pack, the SNMP service must be properly configured on your 
IBM BladeCenter server. Lenovo provides an official documentation
to achieve this: 
* Throught BladeCenter Web Interface: https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.mgtmod.doc%2Fkp1ag_bc_mmug_configsnmp.html
* Throught BladeCenter Command-Line Interface https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.advmgtmod.doc%2Fkp1bc_bc_cli_snmp.html

### Flux réseaux

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant un switch IBM BladeCenter :

```bash
yum install centreon-plugin-Network-Ibm-Bladecenter-Snmp
```

2. Installer le Plugin-Pack *IBM BladeCenter Switch* depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant un switch IBM BladeCenter :

```bash
yum install centreon-plugin-Network-Ibm-Bladecenter-Snmp
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision sur le serveur Centreon **Central** :

```bash
yum install centreon-pack-network-ibm-bladecenter-snmp
```

3. Installer le Plugin-Pack *IBM BladeCenter Switch* depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Aller dans *Configuration* > *Host* > et cliquer sur *Ajouter*. Puis complétez
les champs *SNMP Community* et *SNMP Version* et appliquer le modèle d'hôte 
*Net-Ibm-Bladecenter-SNMP-custom*.

:warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP 3 et
configurez les paramètres SNMP v3 via la macro *SNMPEXTRAOPTIONS*.

| Obligatoire   | Nom              | Description                                    |
| :------------ | :--------------- | :--------------------------------------------- |
|               | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester en ligne de commande et que signifient les options principales ?

Une fois le Plugin est installé, vous pouvez tester celui-ci directement en
ligne de commande depuis votre collecteur Centreon avec l'utilisateur 
*centreon-engine*:
 
```bash
/usr/lib/centreon/plugins/centreon_net_bladecenter_snmp.pl \
  --plugin=network::ibm::bladecenter::snmp::plugin \
  --mode=disk --hostname=10.30.2.138 \
  --snmp-community='public' \
  --snmp-version='2c'
```

Résultat attendu :

```
OK: All storages are ok | 'storage.partitions.count'=15;;;0; 'Swap space#storage.space.usage.bytes'=46661632B;;;0;536866816 'Virtual memory#storage.space.usage.bytes'=1853689856B;;;0;2464456704 '/#storage.space.usage.bytes'=2498961408B;;;0;4156227584 '/dev/shm#storage.space.usage.bytes'=0B;;;0;963792896 '/run#storage.space.usage.bytes'=101556224B;;;0;963792896 '/sys/fs/cgroup#storage.space.usage.bytes'=0B;;;0;963792896 '/boot#storage.space.usage.bytes'=198213632B;;;0;511647744 '/var/lib/centreon-broker#storage.space.usage.bytes'=6324224B;;;0;2046640128 '/var/lib/mysql#storage.space.usage.bytes'=744546304B;;;0;4093313024 '/var/cache/centreon/backup#storage.space.usage.bytes'=2625536B;;;0;1023303680 'Memory buffers#storage.space.usage.bytes'=343834624B;;;0;1927589888 '/var/lib/centreon#storage.space.usage.bytes'=323940352B;;;0;2046640128 '/var/log#storage.space.usage.bytes'=123432960B;;;0;2046640128 'Cached memory#storage.space.usage.bytes'=840286208B;;;0;840286208 'Shared memory#storage.space.usage.bytes'=101048320B;;;0;101048320

```

Tous les modes disponibles dans le Plugin peuvent être listés via la commande
suivante :

```bash
/usr/lib/centreon/plugins/centreon_net_bladecenter_snmp.pl \
  ---plugin=network::ibm::bladecenter::snmp::plugin \
  --list-mode
```

Les options des différents modes sont consultables via le paramètre ```--help```
du mode :  

```bash
/usr/lib/centreon/plugins/centreon_net_bladecenter_snmp.pl \
  --plugin=network::ibm::bladecenter::snmp::plugin \
  --mode=disk \
  --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient
pas à contacter votre cluster Nutanix sur le port UDP 161 ou bien que la
communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à
l'agent SNMP soient trop restreintes.