---
id: network-microsens-g6-snmp
title: Microsens G6 SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Pack Centreon Microsens G6 SNMP apporte 1 modèle d'hôte :
* Net-Microsens-G6-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template                   | Default | Discovery |
|:--------------|:-----------------------------------|:--------|:----------|
| Cpu-Detailed  | Net-Microsens-G6-Cpu-Detailed-SNMP | X       |           |
| Hardware      | Net-Microsens-G6-Hardware-SNMP     | X       |           |
| Interfaces    | Net-Microsens-G6-Interfaces-SNMP   |         | X         |
| Load          | Net-Microsens-G6-Load-SNMP         | X       |           |
| Memory        | Net-Microsens-G6-Memory-SNMP       | X       |           |
| Sfp           | Net-Microsens-G6-Sfp-SNMP          |         | X         |
| Uptime        | Net-Microsens-G6-Uptime-SNMP       | X       |           |

### Règles de découverte

| Rule name                            | Description                                                             |
|:-------------------------------------|:------------------------------------------------------------------------|
| Net-Microsens-G6-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |
| Net-Microsens-G6-SNMP-Sfp-Port       | Découvre les ports sfp et supervise le statut et l'utilisation          |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Metric name                           | Description                 | Unit  |
| :------------------------------------ | :-------------------------- | :---- |
| cpu.user.utilization.percentage       | CPU User utilization        | %     |
| cpu.nice.utilization.percentage       | CPU Nice utilization        | %     |
| cpu.system.utilization.percentage     | CPU System utilization      | %     |
| cpu.idle.utilization.percentage       | CPU Idle utilization        | %     |
| cpu.wait.utilization.percentage       | CPU Wait utilization        | %     |
| cpu.kernel.utilization.percentage     | CPU Kernel utilization      | %     |
| cpu.interrupt.utilization.percentage  | CPU Interrupt utilization   | %     |
| cpu.softirq.utilization.percentage    | CPU SoftIrq utilization     | %     |
| cpu.steal.utilization.percentage      | CPU Steal utilization       | %     |
| cpu.guest.utilization.percentage      | CPU Guest utilization       | %     |
| cpu.guestnice.utilization.percentage  | CPU Guest Nice utilization  | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                         | Description                        | Unit  |
| :---------------------------------- | :--------------------------------- | :---- |
| fan status                          | Status of the fan                  |       |
| psu status                          | Status of the power supply         |       |
| sd card status                      | Status/health/state of the SD card |       |
| system#hardware.temperature.celsius | Temperature of the system          | C     |

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
<TabItem value="Load" label="Load">

| Metric name            | Description                   | Unit |
| :--------------------- | :---------------------------- | :--- |
| load.1m.count          | System load 1 minute-sample   |      |
| load.5m.count          | System load 5 minutes-sample  |      |
| load.15m.count         | System load 15 minutes-sample |      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |
| memory.free.bytes       | Free memory on the device                | B     |
| memory.usage.percentage | Percentage of memory usage on the device | %     |
| memory.buffer.bytes     | Buffered memory allocation               | B     |
| memory.cached.bytes     | Cached memory allocation                 | B     |
| memory.shared.bytes     | Shared memory allocation                 | B     |

</TabItem>
<TabItem value="Sfp" label="Sfp">

| Metric name                           | Description                     | Unit |
|:------------------------------------- |:------------------------------- |:---- |
| status                                | Status of the SFP port          |      |
| *port_index*#port.input.power.dbm     | Optical input of the SFP port   | dBm  |
| *port_index*#port.output.power.dbm    | Optical output of the SFP port  | dBm  |
| *port_index*#port.temperature.celsius | Temperature inside the SFP port | C    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré comme indiqué sur
la documentation officielle :
* https://www.microsens.com/fileadmin/files/downloads/Application_notes/AN-16010_Basic_Config_of_G6_Devices_v1.0.1.pdf

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur Linux supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Microsens G6 SNMP** :

```bash
yum install centreon-plugin-Network-Microsens-G6-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Microsens G6 SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Microsens G6 SNMP** :

```bash
yum install centreon-plugin-Network-Microsens-G6-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Microsens G6 SNMP** :

```bash
yum install centreon-pack-network-microsens-g6-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Microsens G6 SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **Microsens G6 SNMP**.
* Appliquez le Modèle d'Hôte **network-microsens-g6-snmp-custom**

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins/centreon_microsens_g6_snmp.pl \
    --plugin=network::microsens::g6::snmp::plugin \
    --mode=sfp \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-port='^(2|4)$' \
    --warning-status='' \
    --critical-status='' \
    --warning-temperature='' \
    --critical-temperature='' \
    --warning-input-power='' \
    --critical-input-power='' \
    --warning-output-power='' \
    --critical-output-power='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All sfp ports are ok | '2#port.input.power.dbm'=1.3dBm;;;; '2#port.output.power.dbm'=0.3dBm;;;; '2#port.temperature.celsius'=65.9C;;;; '4#port.input.power.dbm'=1.4dBm;;;; '4#port.output.power.dbm'=0.7dBm;;;; '4#port.temperature.celsius'=66.3C;;;;
checking sfp port '2'
    status: laserDisabled
    input power: 1.3 dBm, output power: 0.3 dBm
    temperature: 65.90 C
checking sfp port '4'
    status: laserDisabled
    input power: 1.4 dBm, output power: 0.7 dBm
    temperature: 66.30 C
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_microsens_g6_snmp.pl \
    --plugin=network::microsens::g6::snmp::plugin \
    --mode=sfp \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_microsens_g6_snmp.pl \
    --plugin=network::microsens::g6::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp)
pour le diagnostic des erreurs communes des Plugins Centreon.
