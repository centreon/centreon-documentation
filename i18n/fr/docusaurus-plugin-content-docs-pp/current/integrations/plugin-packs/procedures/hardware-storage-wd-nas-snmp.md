---
id: hardware-storage-wd-nas-snmp
title: WD NAS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **WD NAS SNMP** apporte un modèle d'hôte :

* HW-Storage-Wd-Nas-SNMP-custom

Il apporte les modèles de service suivants :

| Alias    | Modèle de service               | Description          | Défaut | Découverte |
|:---------|:--------------------------------|:---------------------|:-------|:-----------|
| Hardware | HW-Storage-Wd-Nas-Hardware-SNMP | Contrôle le matériel | X      |            |
| Volumes  | HW-Storage-Wd-Nas-Volumes-SNMP  | Contrôle les volumes |        | X          |

### Règles de découverte

| Nom de la règle                    | Description                                     |
|:-----------------------------------|:------------------------------------------------|
| HW-Storage-Wd-Nas-SNMP-Volume-Name | Découvre les volumes et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| system#hardware.temperature.celsius       | C     |
| fan status                                |       |
| *drive_name*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| *volume_name*#volume.space.usage.bytes      | B     |
| *volume_name*#volume.space.free.bytes       | B     |
| *volume_name*#volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **WD NAS** en SNMP,  il est nécessaire de configurer l'agent sur l'équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **WD NAS SNMP**
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
dnf install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-wd-nas-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **WD NAS**.
* Appliquez le modèle d'hôte **HW-Storage-Wd-Nas-SNMP-custom**.

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
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
    --plugin=storage::wd::nas::snmp::plugin \
    --mode=volumes \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: volume 'Volume_1' space usage total: 7.20 TB used: 5.60 TB (77.78%) free: 1.60 TB (22.22%) | 'Volume_1#volume.space.usage.bytes'=6157265115545B;;;0;7916483719987.2 'Volume_1#volume.space.free.bytes'=1759218604441B;;;0;7916483719987.2 'Volume_1#volume.space.usage.percentage'=77.78%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
    --plugin=storage::wd::nas::snmp::plugin \
    --mode=volumes \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
    --plugin=storage::wd::nas::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
