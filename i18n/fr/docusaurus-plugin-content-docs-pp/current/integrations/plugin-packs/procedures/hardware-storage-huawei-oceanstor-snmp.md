---
id: hardware-storage-huawei-oceanstor-snmp
title: Huawei OceanStor SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du connecteur de supervision

### Modèles

Le Pack Centreon **Huawei OceanStor SNMP** apporte un modèle d'hôte :

* HW-Storage-Huawei-Oceanstor-SNMP-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                                | Description                                       | Défaut | Découverte |
|:----------------|:-------------------------------------------------|:--------------------------------------------------|:-------|:-----------|
| Controllers     | HW-Storage-Huawei-Oceanstor-Controllers-SNMP     | Contrôle les contrôleurs                          | X      | X          |
| Hardware-Global | HW-Storage-Huawei-Oceanstor-Hardware-Global-SNMP | Contrôle les composants matériel de l'équipement  | X      |            |
| Luns            | HW-Storage-Huawei-Oceanstor-Luns-SNMP            | Contrôle les LUNs                                 | X      | X          |
| Storage-Pools   | HW-Storage-Huawei-Oceanstor-Storage-Pools-SNMP   | Contrôle les pools de stockage                    |        | X          |

### Règles de découvertes

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Nom de la règle                                    | Description                                                                            |
| :------------------------------------------------- | :------------------------------------------------------------------------------------- |
| HW-Storage-Huawei-Oceanstor-SNMP-Controller-Id     | Découvre les contrôleurs et supervise le statut et l'utilisation processeur et mémoire |
| HW-Storage-Huawei-Oceanstor-SNMP-Lun-Name          | Découvre les LUNs et supervise l'espace utilisé                                        |
| HW-Storage-Huawei-Oceanstor-SNMP-Storage-Pool-Name | Découvre les pools de stockage et supervise le statut et l'espace utilisé              |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Controllers" label="Controllers">

| Métrique                                              | Unité |
| :---------------------------------------------------- | :---- |
| status                                                |       |
| *controller_id*#controller.cpu.utilization.percentage | %     |
| *controller_id*#controller.memory.usage.percentage    | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                               | Unité |
| :----------------------------------------------------- | :---- |
| bbu status                                             |       |
| disk status                                            |       |
| *disk_instance*#hardware.disk.temperature.celsius      | C     |
| enclosure status                                       |       |
| *enclosure\_id*#hardware.enclosure.temperature.celsius | C     |
| expboard status                                        |       |
| fan status                                             |       |
| psu status                                             |       |

</TabItem>
<TabItem value="Luns" label="Luns">

| Métrique                              | Unité |
| :------------------------------------ | :---- |
| *lun_name*#lun.space.usage.bytes      | B     |
| *lun_name*#lun.space.free.bytes       | B     |
| *lun_name*#lun.space.usage.percentage | %     |
| *lun_name*#lun.space.prot.bytes       | B     |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Métrique                                               | Unité |
| :----------------------------------------------------- | :---- |
| status                                                 |       |
| *storagepool_name*#storage_pool.space.usage.bytes      | B     |
| *storagepool_name*#storage_pool.space.free.bytes       | B     |
| *storagepool_name*#storage_pool.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de contrôler votre équipement Huawei OceanStor, le SNMP doit être configuré. 

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Huawei OceanStor SNMP**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).
Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Huawei-Oceanstor-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-huawei-oceanstor-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Huawei OceanStor**.
* Appliquez le modèle d'hôte **HW-Storage-Huawei-Oceanstor-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='huawei_ro' \
    --warning-cpu-utilization=90 \
    --warning-cpu-utilization=95 \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All controllers are ok | '0A#controller.cpu.utilization.percentage'=6.00%;0:95;;0;100 '0A#controller.memory.usage.percentage'=76.00%;;;0;100 '0B#controller.cpu.utilization.percentage'=8.00%;0:95;;0;100 '0B#controller.memory.usage.percentage'=75.00%;;;0;100
checking controller '0A'
    health status: Normal [running status: Online]
    cpu usage: 6.00 %
    memory used: 76.00 %
checking controller '0B'
    health status: Normal [running status: Online]
    cpu usage: 8.00 %
    memory used: 75.00 %
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --mode=controllers \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_huawei_oceanstor_snmp.pl \
    --plugin=storage::huawei::oceanstor::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
