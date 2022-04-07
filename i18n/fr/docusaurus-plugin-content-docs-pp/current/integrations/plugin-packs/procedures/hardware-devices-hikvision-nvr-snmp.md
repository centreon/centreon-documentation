---
id: hardware-devices-hikvision-nvr-snmp
title: Hikvision NVR SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Hikvision NVR SNMP apporte 1 modèle d'hôte :
* HW-Device-Hikvision-Nvr-SNMP-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template                    | Default | Discovery |
|:--------------|:------------------------------------|:--------|:----------|
| Disks         | HW-Device-Hikvision-Nvr-Disks-SNMP  | X       |           |
| Memory        | HW-Device-Hikvision-Nvr-Memory-SNMP | X       |           |
| Uptime        | HW-Device-Hikvision-Nvr-Uptime-SNMP | X       |           |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Disks" label="Disks">

| Metric name                             | Description                                                | Unit |
|:--------------------------------------- |:---------------------------------------------------------- |:---- |
| status                                  | Status of the disk                                         |      |
| disks.total.count                       | Current number of disks                                    |      |
| disks.errors.count                      | Current number of disks with status: abnormal, smartfailed |      |
| *disk_name*#disk.space.usage.bytes      | Space used on the disk                                     | B    |
| *disk_name*#disk.space.free.bytes       | Free space left on the disk                                | B    |
| *disk_name*#disk.space.usage.percentage | Space used on the disk in percentage                       | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.bytes      | Memory usage               | B     |
| memory.free.bytes       | Free memory                | B     |
| memory.usage.percentage | Memory usage in percentage | %     |

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

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Hikvision NVR SNMP** :

```bash
yum install centreon-plugin-Hardware-Devices-Hikvision-Nvr-Snmp
```

2. Sur l'interface Web de Centreon, installer le Pack **Hikvision NVR SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Hikvision NVR SNMP** :

```bash
yum install centreon-plugin-Hardware-Devices-Hikvision-Nvr-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Hikvision NVR SNMP** :

```bash
yum install centreon-pack-hardware-devices-hikvision-nvr-snmp
```

3. Sur l'interface Web de Centreon, installer le Pack **Hikvision NVR SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **Hikvision NVR SNMP**.
* Appliquez le Modèle d'Hôte **HW-Device-Hikvision-Nvr-SNMP-custom**

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
/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \
    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage-prct='' \
    --critical-usage-prct='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Memory total: 500.00 MB used: 25.00 MB (5.00%) free: 475.00 MB (95.00%) | 'memory.usage.bytes'=26214400B;;;0;524288000 'memory.free.bytes'=498073600B;;;0;524288000 'memory.usage.percentage'=5.00%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \
    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \
    --mode=memory \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_hikvision_nvr_snmp.pl \
    --plugin=hardware::devices::hikvision::nvr::snmp::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md/#troubleshooting-snmp)
pour le diagnostic des erreurs communes des Plugins Centreon.
