---
id: network-oneaccess-snmp
title: OneAccess SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **OneAccess** apporte 1 modèle d'hôte :
* Net-Oneaccess-SNMP-custom

Il apporte les modèles de services suivants :

| Alias       | Modèle de services             | Description                            | Défaut  |
|:------------|:-------------------------------|:---------------------------------------|:--------|
| Cells-Radio | Net-Oneaccess-Cells-Radio-SNMP | Contrôle les modules radio cellulaires |         |
| Cpu         | Net-Oneaccess-Cpu-SNMP         | Contrôle de l'utilisation du CPU       | X       |
| Interfaces  | Net-Oneaccess-Interfaces-SNMP  | Contrôle les interfaces                |         |
| Memory      | Net-Oneaccess-Memory-SNMP      | Contrôle de l'utilisation mémoire      | X       |
| Rtt-Probes  | Net-Oneaccess-Rtt-Probes-SNMP  | Contrôle les sondes round-time trip    |         |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                   | Description                                                             |
|:----------------------------------|:------------------------------------------------------------------------|
| Net-Oneaccess-SNMP-Interface-Name | Découvre les interfaces réseau et supervise le statut et l'utilisation |
| Net-Oneaccess-SNMP-Rtt-Probe-Tag  | Découvre les sondes et supervise le statut                              |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Metric name                                    | Unit  |
| :--------------------------------------------- | :---- |
| modules.cellradio.detected.count               |       |
| status                                         |       |
| *module_id~operator*#module.cellradio.rsrp.dbm | dBm   |
| *module_id~operator*#module.cellradio.rssi.dbm | dBm   |
| *module_id~operator*#module.cellradio.snr.db   | dB    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                | Unit  |
| :------------------------- | :---- |
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Unit |
|:--------------------------------------------------------- |:---- |
| status                                                    |      |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | %    |
| *interface_name*#interface.packets.out.error.percentage   | %    |
| *interface_name*#interface.packets.out.discard.percentage | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Unit  |
| :---------------------- | :---- |
| memory.usage.bytes      | B     |

</TabItem>
<TabItem value="Rtt-Probe" label="Rtt-Probe">

| Metric name                                   | Unit  |
| :-------------------------------------------- | :---- |
| probe status                                  |       |
| *tag_name*#probe.completion.time.milliseconds | ms    |

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

1. Installez le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **OneAccess SNMP** :

```bash
yum install centreon-plugin-Network-Oneaccess-Snmp
```

2. Sur l'interface web de Centreon, installez le Pack **OneAccess SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installez le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **OneAccess SNMP** :

```bash
yum install centreon-plugin-Network-Oneaccess-Snmp
```

2. Sur le serveur Central Centreon, installez le RPM du Pack **OneAccess SNMP** :

```bash
yum install centreon-pack-network-oneaccess-snmp
```

3. Sur l'interface web de Centreon, installez le Pack **OneAccess SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre équipement **OneAccess SNMP**.
* Appliquez le modèle d'hôte **Net-Oneaccess-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping). 

| Obligatoire | Nom              | Description                                              |
| :---------- | :--------------- | :------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

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

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp)
pour le diagnostic des erreurs communes des Plugins Centreon.
