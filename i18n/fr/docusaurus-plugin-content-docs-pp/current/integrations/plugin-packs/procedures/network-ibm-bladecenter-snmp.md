---
id: network-ibm-bladecenter-snmp
title: IBM Bladecenter Switch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

IBM développe, fabrique et vend du matériel, des logiciels, des middlewares et
autres services et produits informatiques. Créée en 2002, IBM BladeCenter est
l'architecture de serveurs lames d'IBM.

## Contenu du Plugin-Pack

### Eléments supervisés

* Module switch IBM Bladecenter server

### Métriques collectées 

En plus des modes et des métriques détaillés ci-après, il est également possible
de superviser les éléments suivants :

* Ntp : Vérifier le décalage de temps du serveur avec le serveur NTP
* Uptime : Durée depuis le dernier redémarrage

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                    | Description                              | Unit   |
| :----------------------------- | :--------------------------------------- | :------|
| cpu.utilization.1m.percentage  | CPU utilization for the last minute      | %      |
| cpu.utilization.5m.percentage  | CPU utilization for the last 5 minutes   | %      |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                         | Description                    | Unit   |
| :---------------------------------- | :----------------------------- |------- |
| storage.partitions.count            | Total number of partition      |        |
| partition#storage.space.usage.bytes | Used space on a disk partition | Bytes  |

</TabItem>
<TabItem value="Memory-Usage" label="Memory-Usage">

| Metric name             | Description                 | Unit   |
| :---------------------- | :---------------------------| :----- |
| memory.usage.bytes      | Total current memory usage  | Bytes  |
| memory.usage.percentage | Total current memory usage  |  %     |
| memory.free.bytes       | Current free memory         | Bytes  |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric name                              | Description                                                               | Unit        |
| :--------------------------------------- | :------------------------------------------------------------------------ | :---------- |
| status                                   | Interface status                                                          |             |
| interface.traffic.\*.bitspersecond       | \*in/out. Incoming/outgoing traffic going through the interface           | Bytes/s & % |
| interface.packets.\*.errors.percentage   | \*in/out. Incoming/outgoing errored packets going through an interface    | Count & %   |
| interface.packets.\*.discards.percentage | \*in/out. Incoming/outgoing discarded packets going through an interface  | Count & %   |

A regexp filter is available to target a specific interface identifier/ifName [```--interface='^my-interface-name$' --name```] 

</TabItem>
<TabItem value="Environment" label="Environment">

| Metric name                   | Description                      | Unit     |               
| :---------------------------- | :------------------------------- | :--------|
| hardware.temperature.celsius  | Temperature of the system        | Celsius  |
| faultled                      | Status of the fault LED (On/Off) |          |

You can use ```--no-component``` if you want to alert when a component is 
absent/removed. You can also overload the default status using the 
```--threshold-overload option```. 

</TabItem>
</Tabs>

## Prérequis

Pour utiliser ce plugin-pack, vous devez configurer le service SNMP sur l'IBM 
BladeCenter. Une description complète est disponible sur le site officiel de Cisco:

* Avec l'interface Web de BladeCenter : https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.mgtmod.doc%2Fkp1ag_bc_mmug_configsnmp
* Avec l'interface en ligne de commande : https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.advmgtmod.doc%2Fkp1bc_bc_cli_snmp

### Flux réseaux

Les collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP
avec l'IBM BladeCenter.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon supervisant le module switch IBM BladeCenter :

```bash
yum install centreon-plugin-Network-Ibm-Bladecenter-Snmp
```

2. Installer le Plugin-Pack *IBM BladeCenter Switch* depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon supervisant le module switch IBM BladeCenter :

```bash
yum install centreon-plugin-Network-Ibm-Bladecenter-Snmp
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision sur le serveur Centreon Central :

```bash
yum install centreon-pack-network-ibm-bladecenter-snmp
```

3. Installer le Plugin-Pack *IBM BladeCenter Switch* depuis la page "Configuration > Plugin packs > Manager" de l'interface Web Centreon

</TabItem>
</Tabs>

## Configuration

Aller dans *Configuration* > *Host* > et cliquer sur *Ajouter*. Puis complétez
les champs *SNMP Community* et *SNMP Version* et appliquer le modèle d'hôte 
*Net-Ibm-Bladecenter-SNMP-custom*.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../../getting-started/how-to-guides/troubleshooting-plugins/#snmpv3-options-mapping).

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
  --mode=interfaces --hostname=10.30.2.138 \
  --snmp-community='public' \
  --snmp-version='2c' \
  --add-status \
  --add-traffic
```

Résultat attendu :

```
OK: All interfaces are ok | 'traffic_in_lo'=19795.35b/s;;;0;10000000 'traffic_out_lo'=19795.35b/s;;;0;10000000 'traffic_in_ens192'=26001.62b/s;;;0;10000000000 'traffic_out_ens192'=24438.38b/s;;;0;10000000000
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
  --mode=interfaces \
  --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient
pas à contacter votre cluster Nutanix sur le port UDP 161 ou bien que la
communauté SNMP configurée n'est pas correcte.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à
l'agent SNMP soient trop restreintes.