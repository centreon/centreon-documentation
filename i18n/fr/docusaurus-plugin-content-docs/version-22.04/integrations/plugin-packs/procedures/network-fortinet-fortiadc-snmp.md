---
id: network-fortinet-fortiadc-snmp
title: Fortinet FortiADC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Fortinet FortiADC SNMP apporte 1 modèle d'hôte :
* Net-Fortinet-Fortiadc-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias   | Service Template                           | Default | Discovery |
|:----------------|:-------------------------------------------|:--------|:----------|
| Cpu             | Net-Fortinet-Fortiadc-Cpu-SNMP             | X       |           |
| Hardware        | Net-Fortinet-Fortiadc-Hardware-SNMP        | X       |           |
| Interfaces      | Net-Fortinet-Fortiadc-Interfaces-SNMP      |         | X         |
| Memory          | Net-Fortinet-Fortiadc-Memory-SNMP          | X       |           |
| Security        | Net-Fortinet-Fortiadc-Security-SNMP        | X       |           |
| Uptime          | Net-Fortinet-Fortiadc-Uptime-SNMP          | X       |           |
| Virtual-Servers | Net-Fortinet-Fortiadc-Virtual-Servers-SNMP | X       | X         |

### Règles de découverte

| Rule name                                      | Description                                                             |
|:-----------------------------------------------|:------------------------------------------------------------------------|
| Net-Fortinet-Fortiadc-SNMP-Interface-Name      | Découvre les interfaces réseaux et supervise le statut et l'utilisation |
| Net-Fortinet-Fortiadc-SNMP-Virtual-Server-Name | Découvre les serveurs virtuels et supervise le statut et l'utilisation  |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                                    | Description                                 | Unit |
| :--------------------------------------------- | :------------------------------------------ | :--- |
| cpu.utilization.2s.percentage                  | CPU utilization for the last 2 seconds      | %    |
| cpu.utilization.1m.percentage                  | CPU utilization for the last minute         | %    |
| cpu.utilization.5m.percentage                  | CPU utilization for the last 5 minutes      | %    |
| *core_name*#core.cpu.utilization.2s.percentage | CPU Core utilization for the last 2 seconds | %    |
| *core_name*#core.cpu.utilization.1m.percentage | CPU Core utilization for the last minute    | %    |
| *core_name*#core.cpu.utilization.5m.percentage | CPU Core utilization for the last 5 minutes | %    |

</TabItem>

<TabItem value="Hardware" label="Hardware">

| Metric name                               | Description                                   | Unit |
|:----------------------------------------- |:--------------------------------------------- | :--- |
| fan status                                | Status of the fan                             |      |
| *fan_name*hardware.fan.speed.rpm          | Current fan speed                             | rpm  |
| temperature status                        | Status of temperature probes (cpu and device) |      |
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
| memory.usage.percentage | Memory usage in percentage | %     |

</TabItem>

<TabItem value="Security" label="Security">

| Metric name           | Description                | Unit  |
| :-------------------- | :------------------------- | :---- |
| ddos status           | Current DDoS attack status |       |

</TabItem>

<TabItem value="Uptime" label="Uptime">

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

</TabItem>

<TabItem value="Virtual-servers" label="Virtual-servers">

| Metric name                                                 | Description                                       | Unit  |
| :---------------------------------------------------------- | :------------------------------------------------ | :---- |
| virtual_servers.detected.count                              | Number of virtual servers detected                |       |
| virtual_servers.healthy.count                               | Number of virtual servers with status healthy     |       |
| status                                                      | Status for the virtual server                     |       |
| *vdom_name~vs_name*#virtual_server.connections.count        | Concurrent connection rate for the virtual server |       |
| *vdom_name~vs_name*#virtual_server.throughput.bitspersecond | Throughput rate for the virtual server            | bps   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré comme indiqué sur
la documentation officielle :
* https://docs.fortinet.com/product/fortiadc/

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Fortinet FortiADC SNMP** :

```bash
yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Fortinet FortiADC SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Fortinet FortiADC SNMP** :

```bash
yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Fortinet FortiADC SNMP** :

 ```bash
yum install centreon-pack-network-fortinet-fortiadc-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Fortinet FortiADC SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Fortinet FortiADC SNMP**.
* Appliquez le Modèle d'Hôte **Net-Fortinet-Fortiadc-SNMP-custom**

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
/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \
    --plugin=network::fortinet::fortiadc::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-average-5m='' \
    --critical-average-5m='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 16 CPU(s) average usage is 0.81 % (2s) 0.00 % (1m) 0.12 % (5m) - All core cpu are ok | 'cpu.utilization.2s.percentage'=0.81%;;;0;100 'cpu.utilization.1m.percentage'=0.00%;;;0;100 'cpu.utilization.5m.percentage'=0.12%;;;0;100 'Core 0#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 0#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 0#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 1#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.5m.percentage'=2.00%;;;0;100 'Core 10#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 10#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 10#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 11#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 12#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 13#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 14#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 15#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 2#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 3#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 4#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 6#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 8#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.5m.percentage'=0.00%;;;0;100
CPU '1' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '2' usage 1.00 % (2s) 0.00 % (1m) 2.00 % (5m)
CPU '11' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '12' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '13' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '14' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '15' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '16' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '3' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '4' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '5' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '6' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '7' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '8' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '9' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '10' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \
    --plugin=network::fortinet::fortiadc::snmp::plugin \
    --mode=cpu \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \
    --plugin=network::fortinet::fortiadc::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md#snmp-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
