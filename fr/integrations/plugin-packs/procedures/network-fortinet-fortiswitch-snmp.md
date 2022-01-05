---
id: network-fortinet-fortiswitch-snmp
title: Fortinet FortiSwitch SNMP
---

## Contenu du Pack

### Modèles

Le Pack Centreon Fortinet FortiSwitch SNMP apporte 1 modèle d'hôte :
* Net-Fortinet-Fortiswitch-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template                         | Default | Discovery |
|:--------------|:-----------------------------------------|:--------|:----------|
| Arp           | Net-Fortinet-Fortiswitch-Arp-SNMP        |         |           |
| Cpu           | Net-Fortinet-Fortiswitch-Cpu-SNMP        | X       |           |
| Disk          | Net-Fortinet-Fortiswitch-Disk-SNMP       | X       |           |
| Interfaces    | Net-Fortinet-Fortiswitch-Interfaces-SNMP |         | X         |
| Memory        | Net-Fortinet-Fortiswitch-Memory-SNMP     | X       |           |
| Uptime        | Net-Fortinet-Fortiswitch-Uptime-SNMP     | X       |           |

### Règles de découverte

| Rule name                                    | Description                                                             |
|:---------------------------------------------|:------------------------------------------------------------------------|
| Net-Fortinet-Fortiswitch-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Arp-->

| Metric name                 | Description                       | Unit  |
| :-------------------------- | :-------------------------------- | :---- |
| arp.total.entries.count     | Number of arp entries             |       |
| arp.duplicate.macaddr.count | Number of duplicate mac addresses |       |
| arp.duplicate.ipaddr.count  | Number of duplicate ip addresses  |       |

<!--Cpu-->

| Metric name                | Description     | Unit  |
| :------------------------- | :-------------- | :---- |
| cpu.utilization.percentage | CPU utilization | %     |

<!--Disk-->

| Metric name           | Description              | Unit  |
| :-------------------- | :----------------------- | :---- |
| disk.usage.bytes      | Disk usage               | B     |
| disk.free.bytes       | Free disk                | B     |
| disk.usage.percentage | Disk usage in percentage | %     |

<!--Interfaces-->

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

<!--Memory-->

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.bytes      | Memory usage               | B     |
| memory.free.bytes       | Free memory                | B     |
| memory.usage.percentage | Memory usage in percentage | %     |

<!--Uptime-->

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré comme indiqué sur
la documentation officielle :
* https://docs.fortinet.com/product/fortiswitch/

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur Linux supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Fortinet FortiSwitch SNMP** :

```bash
yum install centreon-plugin-Network-Fortinet-Fortiswitch-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Fortinet FortiSwitch SNMP** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Fortinet FortiSwitch SNMP** :

```bash
yum install centreon-plugin-Network-Fortinet-Fortiswitch-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Fortinet FortiSwitch SNMP** :

 ```bash
yum install centreon-pack-network-fortinet-fortiswitch-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Fortinet FortiSwitch SNMP** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **Fortinet FortiSwitch SNMP**.
* Appliquez le Modèle d'Hôte **Net-Fortinet-Fortiswitch-SNMP-custom**

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro SNMPEXTRAOPTIONS.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiswitch_snmp.pl \
    --plugin=network::fortinet::fortiswitch::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu-utilization='' \
    --critical-cpu-utilization='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Cpu utilization: 95.00% | 'cpu.utilization.percentage'=95%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiswitch_snmp.pl \
    --plugin=network::fortinet::fortiswitch::snmp::plugin \
    --mode=cpu \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiswitch_snmp.pl \
    --plugin=network::fortinet::fortiswitch::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html#snmp-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
