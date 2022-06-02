---
id: network-dell-nseries-snmp
title: Dell N-series SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Dell N-series apporte un modèle d'hôte :
* Net-Dell-Nseries-SNMP-custom

Il apporte les modèles de service suivants :

| Alias         | Modèle de services                  | Défaut | Découverte |
|:--------------|:------------------------------------|:--------|:----------|
| Cpu           | Net-Dell-Nseries-Cpu-SNMP           | X       |           |
| Environment   | Net-Dell-Nseries-Environment-SNMP   | X       |           |
| Global-Status | Net-Dell-Nseries-Global-Status-SNMP |         |           |
| Interfaces    | Net-Dell-Nseries-Interfaces-SNMP    |         | X         |
| Memory        | Net-Dell-Nseries-Memory-SNMP        | X       |           |
| Uptime        | Net-Dell-Nseries-Uptime-SNMP        |         |           |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                      | Description                                                 |
|:-------------------------------------|:------------------------------------------------------------|
| Net-Dell-Nseries-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                   | Description                            | Unit  |
| :---------------------------- | :------------------------------------- | :---- |
| cpu.utilization.5s.percentage | CPU utilization for the last 5 seconds | %     |
| cpu.utilization.1m.percentage | CPU utilization for the last minute    | %     |
| cpu.utilization.5m.percentage | CPU utilization for the last 5 minutes | %     |

</TabItem>
<TabItem value="Environment" label="Environment">

| Metric name                                    | Description                     | Unit  |
| :--------------------------------------------- | :------------------------------ | :---- |
| fan status                                     | Status of the fan               |       |
| *fan_instance*#hardware.fan.speed.rpm          | Speed of the fan                | rpm   |
| psu status                                     | Status of the power supply      |       |
| temperature status                             | Status/ of the probe sensor     |       |
| *sensor_instance*#hardware.temperature.celsius | Temperature of the probe sensor | C     |

</TabItem>
<TabItem value="Global-Status" label="Global-Status">

| Metric name   | Description                      | Unit  |
| :------------ | :------------------------------- | :---- |
| global status | Current overall equipment status |       |

</TabItem>
<TabItem value="Interface" label="Interface">

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

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |

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

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Dell N-series SNMP** :

```bash
yum install centreon-plugin-Network-Dell-Nseries-Snmp
```

2. Sur l'interface web de Centreon, installer le Pack **Dell N-series SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Dell N-series SNMP** :

```bash
yum install centreon-plugin-Network-Dell-Nseries-Snmp
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Dell N-series SNMP** :

```bash
yum install centreon-pack-network-dell-nseries-snmp
```

3. Sur l'interface web de Centreon, installer le Pack **Dell N-series SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre équipement **Dell N-series SNMP**.
* Appliquez le modèle d'hôte **Net-Dell-Nseries-SNMP-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom              | Description                                              |
| :---------- | :--------------- | :------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_dell_nseries_snmp.pl \
    --plugin=network::dell::nseries::snmp::plugin \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning='' \
    --critical=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: CPU Usage: 44.13%% (5sec), 34.23%% (1min), 24.10% (5min) | 'cpu.utilization.5s.percentage'=44.13%;;;0;100 'cpu.utilization.1m.percentage'=34.23%;;;0;100 'cpu.utilization.5m.percentage'=24.10%;;;0;100 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_dell_nseries_snmp.pl \
    --plugin=network::dell::nseries::snmp::plugin \
    --mode=cpu \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_dell_nseries_snmp.pl \
    --plugin=network::dell::nseries::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
