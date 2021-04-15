---
id: network-firewalls-pfsense-snmp
title: pfSense
---

## Vue d'ensemble

pfSense est un routeur/pare-feu open source basé sur FreeBSD et
entièrement configurable via une interface Web.

Le Plugin-Pack Centreon *pfSense* permet de récupérer le status des interfaces
réseaux ainsi que les informations sur le nombre de packets différents par
secondes par l'intermédiaire du protocole SNMP.

## Contenu du Plugin-Pack

### Objets supervis�s

* pfSense firewall

### M�triques collect�es

<!--DOCUSAURUS_CODE_TABS-->

<!--Blocked-Packets-Per-Interface-->

| Metric name                                 | Description       | Unit    |
|:--------------------------------------------|:------------------|:--------|
| pfinterface.pass.traffic.in.bitspersecond   | Traffic in Pass   | b/s     |
| pfinterface.pass.traffic.out.bitspersecond  | Traffic out Pass  | b/s     |
| pfinterface.block.traffic.in.bitspersecond  | Traffic in Block  | b/s     |
| pfinterface.block.traffic.out.bitspersecond | Traffic out Block | b/s     |

<!--Short-Packets-->

| Metric name             | Description                            |
|:------------------------|:---------------------------------------|
| packets.short.persecond | The number of short packets per second |

<!--Normalize-Packets-->

| Metric name                  | Description                                  |
|:-----------------------------|:---------------------------------------------|
| packets.normalized.persecond | The number of normalized  packets per second |

<!--Memory-Dropped-Packets-->

| Metric name                     | Description                                            |
|:--------------------------------|:-------------------------------------------------------|
| packets.memorydropped.persecond | The number of dropped packets due to memory per second |

<!--Match-Packets-->

| Metric name               | Description                              |
|:--------------------------|:-----------------------------------------|
| packets.matched.persecond | The number of matched packets per second |

<!--Fragment-Packets-->

| Metric name                  | Description                                 |
|:-----------------------------|:--------------------------------------------|
| packets.fragmented.persecond | The number of fragmented packets per second |

<!--Bad-Offset-Packets-->

| Metric name                 | Description                                 |
|:----------------------------|:--------------------------------------------|
| packets.badoffset.persecond | The number of bad offset packets per second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Pr�requis

### Configuration du parefeu pfSense

Afin de superviser le pare-feu pfSense, le SNMP v2 ou v3 doit
être configuré comme indiqué sur la documentation officielle fournie par 
Netgate:
https://docs.netgate.com/pfsense/en/latest/services/snmp.html

### Flux réseaux

La communication doit être possible depuis le collecteur Centreon vers le port
SNMP (UDP/161) du serveur Kaspersky Security Center.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser un pare-feu pfSense :

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *pfSense* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser un pare-feu pfSense :

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-firewalls-pfsense-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *pfSense* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### H�te

* Ajoutez un nouvel H�te depuis la page "Configuration > H�tes".

* Compl�tez les champs "Nom","Alias" & "IP Address / DNS" correspondant � votre pare-feu pfSense

* Appliquez le Mod�le d'H�te *Network-Firewalls-Pfsense-Snmp-custom*

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres 
spécifiques associés via la macro SNMPEXTRAOPTIONS

| Mandatory | Name             | Description                                 |
|:----------|:---------------- |:------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin install�, vous pouvez tester celui-ci directement en ligne
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
    -

La commande devrait retourner un message de sortie de la forme ci-dessous :

```bash
OK : All pfInterfaes are ok |
```

Dans cet exemple, une alarme de type WARNING est d�clench�e si :

* The traffic in Pass is greater than 80% (--warning-traffic-in-block='80')

* The traffic in Block is greater than 80% (--warning-traffic-out-block='80')

Une alarme CRITICAL est quant � elle d�clench�e si 

* The traffic in Pass is greater than 90% (--critical-traffic-in-block='90')

* The traffic in Block is greater than 90% (--critical-traffic-out-block='90')

La liste de toutes les options compl�mentaires et leur signification
peut �tre affich�e en ajoutant le param�tre ```--help``` � la commande:

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
    --plugin=apps::pfsense::snmp::plugin \
    --mode=pfinterfaces \
    --help
```

Tous les modes disponibles peuvent �tre affich�s via l'option
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

### UNKNOWN: SNMP GET Request : Cant get a single value.

Les autorisations données à l'utilisateur en SNMP sont trop restreintes pour
faire fonctionner le mode/plugin. L'agent SNMP doit pouvoir accéder à la branche 
.1.3.6.1.4.1.12325.1.200.1.