---
id: network-switchs-symbol-wing-snmp
title: Symbol WiNG switch SNMP
---

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Symbol WiNG switch SNMP apporte 1 modèle d'hôte :
* Net-Symbol-Wing-SNMP

Il apporte les Modèles de Services suivants :

| Service Alias        | Service Template                          | Default | Discovery |
|:---------------------|:------------------------------------------|:--------|:----------|
| Systems              | Net-Symbol-Wing-Systems-SNMP              | X       |           |
| Traffic-Generic-Id   | Net-Symbol-Wing-Traffic-Generic-Id-SNMP   |         |           |
| Traffic-Generic-Name | Net-Symbol-Wing-Traffic-Generic-Name-SNMP |         | X         |
| Traffic-Global       | Net-Symbol-Wing-Traffic-Global-SNMP       |         |           |
| Packet-Errors        | Net-Symbol-wing-Packet-Errors-Global-SNMP |         | X         |

### Règles de découverte

| Rule name                               | Description |
|:----------------------------------------|:------------|
| Net-Symbol-Wing-SNMP-Traffic-Name       |             |
| Net-Symbol-Wing-SNMP-Packet-Errors-Name |             |


### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Systems-->

* Global

| Metric name         | Description       | Unit  |
|:--------------------|:------------------|:------|
| devices.total.count | total devices: %s | count |

* Par *cpu*

| Metric name                    | Description   | Unit |
|:-------------------------------|:--------------|:-----|
| cpu.utilization.1m.percentage  | %.2f %% (1m)  | %    |
| cpu.utilization.5m.percentage  | %.2f %% (5m)  | %    |
| cpu.utilization.15m.percentage | %.2f %% (15m) | %    |

* Par *memory*

| Metric name                    | Description | Unit |
|:-------------------------------|:------------|:-----|
| device.memory.usage.bytes      |             | B    |
| device.memory.free.bytes       |             | B    |
| device.memory.usage.percentage |             | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Pas de pré-requis particuliers

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur Linux supervisé.## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Symbol WiNG*:

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Symbol WiNG switch SNMP* depuis la page **Configuration > Packs de plugins**

<!--Offline IMP License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Symbol WiNG*:

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Symbol WiNG switch SNMP*:

 ```bash
yum install centreon-pack-network-switchs-symbol-wing-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Symbol WiNG switch SNMP* depuis la page **Configuration > Packs de plugins**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur *Symbol WiNG*
* Appliquez le Modèle d'Hôte *network-switchs-symbol-wing-snmp-custom* 

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro SNMPEXTRAOPTIONS.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

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
    --critical-devices-total='' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total devices: %s %.2f %% (1m) %.2f %% (5m) %.2f %% (15m)    | 'devices.total.count'=9000;;;0; 'cpu.utilization.1m.percentage'=9000%;;;0;100 'cpu.utilization.5m.percentage'=9000%;80;90;0;100 'cpu.utilization.15m.percentage'=9000%;;;0;100 'device.memory.usage.bytes'=9000B;;;0; 'device.memory.free.bytes'=9000B;;;0; 'device.memory.usage.percentage'=9000%;;;0;100 
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

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html)
pour le diagnostique des erreurs commununes des Plugins Centreon.
