---
id: network-firewalls-pfsense-snmp
title: pfSense
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

pfSense est un routeur/pare-feu open source basé sur FreeBSD et
entièrement configurable via une interface Web.

Le Plugin-Pack Centreon *pfSense* permet de récupérer le status des interfaces
réseaux ainsi que les informations sur le nombre de packets différents par
secondes par l'intermédiaire du protocole SNMP.

## Contenu du Plugin-Pack

### Objets supervisés

* pfSense firewall

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Blocked-Packets-Per-Interface" label="Blocked-Packets-Per-Interface">

| Metric name                                 | Description       | Unit    |
|:--------------------------------------------|:------------------|:--------|
| pfinterface.pass.traffic.in.bitspersecond   | Traffic in Pass   | b/s     |
| pfinterface.pass.traffic.out.bitspersecond  | Traffic out Pass  | b/s     |
| pfinterface.block.traffic.in.bitspersecond  | Traffic in Block  | b/s     |
| pfinterface.block.traffic.out.bitspersecond | Traffic out Block | b/s     |

</TabItem>
<TabItem value="Short-Packets" label="Short-Packets">

| Metric name             | Description                            |
|:------------------------|:---------------------------------------|
| packets.short.persecond | The number of short packets per second |

</TabItem>
<TabItem value="Normalize-Packets" label="Normalize-Packets">

| Metric name                  | Description                                  |
|:-----------------------------|:---------------------------------------------|
| packets.normalized.persecond | The number of normalized  packets per second |

</TabItem>
<TabItem value="Memory-Dropped-Packets" label="Memory-Dropped-Packets">

| Metric name                     | Description                                            |
|:--------------------------------|:-------------------------------------------------------|
| packets.memorydropped.persecond | The number of dropped packets due to memory per second |

</TabItem>
<TabItem value="Match-Packets" label="Match-Packets">

| Metric name               | Description                              |
|:--------------------------|:-----------------------------------------|
| packets.matched.persecond | The number of matched packets per second |

</TabItem>
<TabItem value="Fragment-Packets" label="Fragment-Packets">

| Metric name                  | Description                                 |
|:-----------------------------|:--------------------------------------------|
| packets.fragmented.persecond | The number of fragmented packets per second |

</TabItem>
<TabItem value="Bad-Offset-Packets" label="Bad-Offset-Packets">

| Metric name                 | Description                                 |
|:----------------------------|:--------------------------------------------|
| packets.badoffset.persecond | The number of bad offset packets per second |

</TabItem>
</Tabs>

## Prérequis

### Configuration du parefeu pfSense

Afin de superviser le pare-feu pfSense, le SNMP v2 ou v3 doit
être configuré comme indiqué sur la documentation officielle fournie par 
Netgate:
https://docs.netgate.com/pfsense/en/latest/services/snmp.html

### Flux réseaux

La communication doit être possible depuis le collecteur Centreon vers le port
SNMP (UDP/161) du serveur Kaspersky Security Center.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser un pare-feu pfSense :

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *pfSense* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser un pare-feu pfSense :

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-firewalls-pfsense-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *pfSense* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".

* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre pare-feu pfSense

* Appliquez le Modèle d'Hôte *Network-Firewalls-Pfsense-Snmp-custom*

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS. 
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins/#snmpv3-options-mapping).

| Mandatory | Name             | Description                                 |
|:----------|:---------------- |:------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur
*centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
    --plugin=apps::pfsense::snmp::plugin \
    --mode=pfinterfaces \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-name='em.*' \
    --warning-traffic-in-block='80' \
    --warning-traffic-out-block='90' \
    --critical-traffic-in-block='80' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie de la forme ci-dessous :

```bash
OK : All pfInterfaes are ok | 'pfinterface.pass.traffic.in.bitspersecond'=43978.08b/s;0:8000000000;0:9000000000;0;10000000000
'pfinterface.pass.traffic.out.bitspersecond'=77012.32b/s;0:8000000000;0:9000000000;0;10000000000
'pfinterface.block.traffic.in.bitspersecond'=33878.08b/s;0:8000000000;0:9000000000;0;10000000000
'pfinterface.block.traffic.out.bitspersecond'=25014.32b/s;0:8000000000;0:9000000000;0;10000000000
```

Dans cet exemple, une alarme de type WARNING est déclenchée si :

* La charge de la bande passante passant par l'interface est plus grande que 80% (--warning-traffic-in-block='80')

* La charge de la bande passante bloquée est plus grande que 80% (--warning-traffic-out-block='80')

Une alarme CRITICAL est quant à elle déclenchée si 

* La charge de la bande passante passant par l'interface est plus grande que 90% (--critical-traffic-in-block='90')

* La charge de la bande passante bloquée est plus grande que 90% (--critical-traffic-out-block='90')

La liste de toutes les options complémentaires et leur signification
peut être affichée en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
    --plugin=apps::pfsense::snmp::plugin \
    --mode=pfinterfaces \
    --help
```

Tous les modes disponibles peuvent être affichés via l'option
```--list-mode``` :

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
    --plugin=apps::pfsense::snmp::plugin \
    --list-mode
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient
pas à contacter le pare-feu pfSence sur le port 161 (firewall
ou autre équipement en coupure) ou que la communauté SNMP configurée n'est pas 
correcte.