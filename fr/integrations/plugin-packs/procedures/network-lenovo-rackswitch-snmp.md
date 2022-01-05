---
id: network-lenovo-rackswitch-snmp
title: Lenovo RackSwitch SNMP
---

## Contenu du Pack

### Modèles

Le Pack Centreon Lenovo RackSwitch SNMP apporte 1 modèle d'hôte :
* Net-Lenovo-Rackswitch-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template                      | Default | Discovery |
|:--------------|:--------------------------------------|:--------|:----------|
| Cpu           | Net-Lenovo-Rackswitch-Cpu-SNMP        | X       |           |
| Hardwar       | Net-Lenovo-Rackswitch-Memory-SNMP     | X       |           |
| Interfaces    | Net-Lenovo-Rackswitch-Interfaces-SNMP |         | X         |
| Memory        | Net-Lenovo-Rackswitch-Memory-SNMP     | X       |           |
| Uptime        | Net-Lenovo-Rackswitch-Uptime-SNMP     | X       |           |

### Règles de découverte

| Rule name                                 | Description                                                             |
|:------------------------------------------|:------------------------------------------------------------------------|
| Net-Lenovo-Rackswitch-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                   | Description                            | Unit  |
| :---------------------------- | :------------------------------------- | :---- |
| cpu.utilization.5s.percentage | CPU utilization for the last 5 seconds | %     |
| cpu.utilization.1m.percentage | CPU utilization for the last minute    | %     |
| cpu.utilization.5m.percentage | CPU utilization for the last 5 minutes | %     |

<!--Hardware-->

| Metric name                                      | Description                        | Unit  |
| :----------------------------------------------- | :--------------------------------- | :---- |
| status                                           | Global health status of the device |       |
| *sensor_num*#hardware.sensor.temperature.celsius | Temperature of the sensor          | C     |
| *fan_num*#hardware.fan.speed.rpm                 | Speed of the fan                   | rpm   |

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

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur Linux supervisé.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Lenovo RackSwitch SNMP** :

```bash
yum install centreon-plugin-Network-Lenovo-Rackswitch-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Lenovo RackSwitch SNMP** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Lenovo RackSwitch SNMP** :

```bash
yum install centreon-plugin-Network-Lenovo-Rackswitch-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Lenovo RackSwitch SNMP** :

 ```bash
yum install centreon-pack-network-lenovo-rackswitch-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Lenovo RackSwitch SNMP** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **Lenovo RackSwitch SNMP**.
* Appliquez le Modèle d'Hôte **Net-Lenovo-Rackswitch-SNMP-custom**

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
/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \
    --plugin=network::lenovo::rackswitch::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage-prct='' \
    --critical-usage-prc='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Memory total: 502.43 MB used: 164.67 MB (32.77%) free: 337.76 MB (67.23%) | 'memory.usage.bytes'=172666880B;;;0;526831616 'memory.free.bytes'=354164736B;;;0;526831616 'memory.usage.percentage'=32.77%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \
    --plugin=network::lenovo::rackswitch::snmp::plugin \
    --mode=memory \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \
    --plugin=network::lenovo::rackswitch::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html#snmp-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
