---
id: network-viptela-snmp
title: Viptela SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Viptela SNMP apporte 1 modèle d'hôte :
* Net-Viptela-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias       | Service Template                     | Default | Discovery |
|:--------------------|:-------------------------------------|:--------|:----------|
| Control-Connections | Net-Viptela-Control-Connections-SNMP |         |           |
| Cpu                 | Net-Viptela-Cpu-SNMP                 | X       |           |
| Disk                | Net-Viptela-Disk-SNMP                | X       |           |
| Gre-Tunnels         | Net-Viptela-Gre-Tunnels-SNMP         |         | X         |
| Hardware            | Net-Viptela-Hardware-SNMP            | X       |           |
| Interfaces          | Net-Viptela-Interfaces-SNMP          |         | X         |
| Memory              | Net-Viptela-Memory-SNMP              | X       |           |
| Uptime              | Net-Viptela-Uptime-SNMP              | X       |           |

### Règles de découverte

| Rule name                        | Description                                                             |
|:------------------ --------------|:------------------------------------------------------------------------|
| Net-Viptela-SNMP-Interface-Name  | Découvre les interfaces réseaux et supervise le statut et l'utilisation |
| Net-Viptela-SNMP-Gre-Tunnel-Name | Découvre les tunnels GRE et supervise le statut et l'utilisation        |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Control-Connections" label="Control-Connections">

| Metric name                             | Description                                             | Unit  |
| :-------------------------------------- | :------------------------------------------------------ | :---- |
| control.connections.detected.count      | Number of control connections detected                  |       |
| control.connections.down.count          | Number of control connections with status down          |       |
| control.connections.connect.count       | Number of control connections with status connect       |       |
| control.connections.handshake.count     | Number of control connections with status handshake     |       |
| control.connections.trying.count        | Number of control connections with status trying        |       |
| control.connections.challenge.count     | Number of control connections with status challenge     |       |
| control.connections.challengeResp.count | Number of control connections with status challengeResp |       |
| control.connections.challengeAck.count  | Number of control connections with status challengeAck  |       |
| control.connections.up.count            | Number of control connections with status up            |       |
| control.connections.tearDown.count      | Number of control connections with status tearDown      |       |
| status                                  | Status for the control connection                       |       |

</TabItem>

<TabItem value="Cpu" label="Cpu">

| Metric name                | Description     | Unit  |
| :------------------------- | :-------------- | :---- |
| cpu.utilization.percentage | CPU utilization | %     |

</TabItem>

<TabItem value="Disk" label="Disk">

| Metric name           | Description              | Unit  |
| :-------------------- | :----------------------- | :---- |
| disk.usage.bytes      | Disk usage               | B     |
| disk.free.bytes       | Free disk                | B     |
| disk.usage.percentage | Disk usage in percentage | %     |

</TabItem>

<TabItem value="Gre-Tunnels" label="Gre-Tunnels">

| Metric name                                      | Description                                       | Unit  |
| :----------------------------------------------- | :------------------------------------------------ | :---- |
| gre_tunnels.detected.count                       | Number of GRE tunnels detected                    |       |
| gre_tunnels.operational.up.count                 | Number of GRE tunnels with status up              |       |
| gre_tunnels.operational.down.count               | Number of GRE tunnels with status down            |       |
| gre_tunnels.operational.invalid.count            | Number of GRE tunnels with status invalid         |       |
| status                                           | Status for the GRE tunnel                         |       |
| *source_ip~dest_ip*#gre_tunnel.packets.in.count  | Number of incoming packets for the GRE tunnel     |       |
| *source_ip~dest_ip*#gre_tunnel.packets.out.count | Number of outgoing packets for for the GRE tunnel |       |

</TabItem>

<TabItem value="Hardware" label="Hardware">

| Metric name                               | Description                                   | Unit |
|:----------------------------------------- |:--------------------------------------------- | :--- |
| fan status                                | Status of the fan                             |      |
| led status                                | Status of the LED                             |      |
| nim status                                | Status of the NIM                             |      |
| pem status                                | Status of the PEM                             |      |
| pim status                                | Status of the PIM                             |      |
| usb status                                | Status of the USB                             |      |
| temperature status                        | Status of temperature probes                  |      |
| *probe_name*#hardware.temperature.celsius | Current temperature                           | C    |

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
| memory.free.bytes       | Free memory                | B     |
| memory.usage.percentage | Memory usage in percentage | %     |
| memory.buffer.bytes     | Buffers memory             | B     |
| memory.cached.bytes     | Cached memory              | B     |

</TabItem>

<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

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

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Viptela SNMP** :

```bash
yum install centreon-plugin-Network-Viptela-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Viptela SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Viptela SNMP** :

```bash
yum install centreon-plugin-Network-Viptela-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Viptela SNMP** :

```bash
yum install centreon-pack-network-viptela-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Viptela SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Viptela SNMP**.
* Appliquez le Modèle d'Hôte **Net-Viptela-SNMP-custom**

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
/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \
    --plugin=network::viptela::snmp::plugin \
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
/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \
    --plugin=network::viptela::snmp::plugin \
    --mode=cpu \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_viptela_snmp.pl \
    --plugin=network::viptela::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md#snmp-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
