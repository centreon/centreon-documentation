---
id: network-oneaccess-snmp
title: OneAccess SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon OneAccess SNMP apporte 1 modèle d'hôte :
* Net-Oneaccess-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template               | Default | Discovery |
|:--------------|:-------------------------------|:--------|:----------|
| Cells-Radio   | Net-Oneaccess-Cells-Radio-SNMP |         |           |
| Cpu           | Net-Oneaccess-Cpu-SNMP         | X       |           |
| Interfaces    | Net-Oneaccess-Interfaces-SNMP  |         | X         |
| Memory        | Net-Oneaccess-Memory-SNMP      | X       |           |

### Règles de découverte

| Rule name                         | Description                                                             |
|:------------------ ---------------|:------------------------------------------------------------------------|
| Net-Oneaccess-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Metric name                                    | Description                                 | Unit  |
| :--------------------------------------------- | :------------------------------------------ | :---- |
| modules.cellradio.detected.count               | Number of cellular radio modules detected   |       |
| status                                         | Status of the SIM card and quality signal   |       |
| *module_id~operator*#module.cellradio.rsrp.dbm | Current reference signal receive power      | dBm   |
| *module_id~operator*#module.cellradio.rssi.dbm | Current received signal strength indication | dBm   |
| *module_id~operator*#module.cellradio.snr.db   | Current signal-to-noise ratio               | dB    |

</TabItem>

<TabItem value="Cpu" label="Cpu">

| Metric name                | Description     | Unit  |
| :------------------------- | :-------------- | :---- |
| cpu.utilization.percentage | CPU utilization | %     |

</TabItem>

<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

</TabItem>

<TabItem value="Memory" label="Memory">

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.bytes      | Memory usage               | B     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **OneAccess SNMP** :

```bash
yum install centreon-plugin-Network-Oneaccess-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **OneAccess SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **OneAccess SNMP** :

```bash
yum install centreon-plugin-Network-Oneaccess-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **OneAccess SNMP** :

```bash
yum install centreon-pack-network-oneaccess-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **OneAccess SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre équipement **OneAccess SNMP**.
* Appliquez le Modèle d'Hôte **Net-Oneaccess-SNMP-custom**

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
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
    --plugin=network::oneaccess::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning='' \
    --critical='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: CPU Usage: 31 % | 'cpu.utilization.percentage'=31%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
    --plugin=network::oneaccess::snmp::plugin \
    --mode=cpu \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_oneaccess.pl \
    --plugin=network::oneaccess::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md#snmp-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
