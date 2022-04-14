---
id: network-switchs-symbol-wing-snmp
title: Symbol WiNG Switchs SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Symbol WiNG switch SNMP apporte 1 modèle d'hôte :
* Net-Symbol-Wing-SNMP

Il apporte les modèles de services suivants :

| Service Alias        | Service Template                          | Default | Discovery |
|:---------------------|:------------------------------------------|:--------|:----------|
| Systems              | Net-Symbol-Wing-Systems-SNMP              | X       |           |
| Traffic-Generic-Id   | Net-Symbol-Wing-Traffic-Generic-Id-SNMP   |         |           |
| Traffic-Generic-Name | Net-Symbol-Wing-Traffic-Generic-Name-SNMP |         | X         |
| Traffic-Global       | Net-Symbol-Wing-Traffic-Global-SNMP       |         |           |
| Packet-Errors        | Net-Symbol-wing-Packet-Errors-Global-SNMP |         | X         |

### Règles de découverte

| Nom de la règle                         | Description                                                               |
|:----------------------------------------|:--------------------------------------------------------------------------|
| Net-Symbol-Wing-SNMP-Traffic-Name       | Découverte des interfaces et supervision de la bande passante             |
| Net-Symbol-Wing-SNMP-Packet-Errors-Name | Découverte des interfaces et supervision des erreurs et rejets de paquets |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Systems" label="Systems">

| Metric name                             | Description                     | Unit   |
|:----------------------------------------|:--------------------------------|:-------|
| devices.total.count                     | Nombre total d'équipements      | nombre |
| *core*#cpu.utilization.1m.percentage    | Utilisation CPU sur 1m          | %      |
| *core*#cpu.utilization.5m.percentage    | Utilisation CPU sur 5m          | %      |
| *core*#cpu.utilization.15m.percentage   | Utilisation CPU sur 15m         | %      |
| *memory*#device.memory.usage.bytes      | Mémoire utilisée                | bytes  | 
| *memory*#device.memory.free.bytes       | Mémoire libre                   | bytes  |
| *memory*#device.memory.usage.percentage | Pourcentage de mémoire utilisée | %      |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                       | Description                                               | Unit   |
|:--------------------------------------------------|:----------------------------------------------------------|:-------|
| status                                            | Statut de l'interface                                     | String |
| *ifname*#interface.traffic.in.bitspersecond       | Débit entrant sur l'interface                             | Bits/s |
| *ifname*#interface.traffic.out.bitspersecond      | Débit sortant sur l'interface                             | Bits/s |
| *ifname*#interface.packets.in.error.percentage    | Pourcentage de paquets en erreur en entrée de l'interface | %      |
| *ifname*#interface.packets.in.discard.percentage  | Pourcentage de paquets refusés en entrée de l'interface   | %      |
| *ifname*#interface.packets.out.error.percentage   | Pourcentage de paquets en erreur en sortie de l'interface | %      |
| *ifname*#interface.packets.out.discard.percentage | Pourcentage de paquets refusés en sortie de l'interface   | %      |

</TabItem>
</Tabs>

## Prérequis

Pas de prérequis particuliers

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Symbol WiNG** :

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Symbol WiNG switch SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Symbol WiNG** :

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Symbol WiNG switch SNMP** :

 ```bash
yum install centreon-pack-network-switchs-symbol-wing-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Symbol WiNG switch SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**,**Alias** et **IP Address/DNS** correspondant à votre serveur **Symbol WiNG**.
* Appliquez le modèle d'hôte **Net-Symbol-Wing-SNMP-custom** .

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro SNMPEXTRAOPTIONS.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configurez vos propres identifiants SNMPv3               |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --mode=systems \
    --hostname='10.0.0.1' \
    --snmp-community='my-snmp-community' \
    --snmp-version='2c' \
    --filter-name='' \
    --warning-cpu-utilization-1m='' \
    --critical-cpu-utilization-1m='' \
    --warning-cpu-utilization-5m='80' \
    --critical-cpu-utilization-5m='90' \
    --warning-cpu-utilization-15m='' \
    --critical-cpu-utilization-15m='' \
    --warning-memory-usage='' \
    --critical-memory-usage='' \
    --warning-memory-usage-free='' \
    --critical-memory-usage-free='' \
    --warning-memory-usage-prct='' \
    --critical-memory-usage-prct='' \
    --warning-devices-total='' \
    --critical-devices-total='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total devices: %s %.2f %% (1m) %.2f %% (5m) %.2f %% (15m) | 'devices.total.count'=1;;;0; 'cpu.utilization.1m.percentage'=1%;;;0;100 'cpu.utilization.5m.percentage'=3%;80;90;0;100 'cpu.utilization.15m.percentage'=20%;;;0;100 'device.memory.usage.bytes'=8000B;;;0; 'device.memory.free.bytes'=192B;;;0; 'device.memory.usage.percentage'=99%;;;0;100 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si la charge CPU est supérieure à 80% durant les 5 dernières minutes
(`--warning-cpu-utilization-5m='80'`); l'alarme sera de type CRITICAL au-delà de 90% et durant les 5 dernières minutes.

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --mode=systems \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --list-mode 
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp)
pour le diagnostic des erreurs communes des Plugins Centreon.
