---
id: hardware-storage-purestorage-flashblade-v2-restapi
title: Pure Storage FlashBlade v2 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Pure Storage FlashBlade Rest API v2** apporte un modèle d'hôte :

* HW-Storage-Purestorage-Flashblade-V2-Restapi-custom

Il apporte les modèles de service suivants :

| Alias       | Modèle de service                                        | Description                       | Défaut | Découverte |
|:------------|:---------------------------------------------------------|:----------------------------------|:-------|:-----------|
| Alerts      | HW-Storage-Purestorage-Flashblade-V2-Alerts-Restapi      | Contrôle les alertes              | X      |            |
| Arrays      | HW-Storage-Purestorage-Flashblade-V2-Arrays-Restapi      | Contrôle les grappes de stockage  |        | X          |
| Filesystems | HW-Storage-Purestorage-Flashblade-V2-Filesystems-Restapi | Contrôle les systèmes de fichiers |        | X          |
| Hardware    | HW-Storage-Purestorage-Flashblade-V2-Hardware-Restapi    | Contrôle l'état matériel          | X      |            |

### Règles de découverte

| Nom de la règle                                              | Description                                                  |
|:-------------------------------------------------------------|:-------------------------------------------------------------|
| HW-Storage-Purestorage-Flashblade-V2-Restapi-Array-Name      | Découvre les grappes de stockage et supervise l'utilisation  |
| HW-Storage-Purestorage-Flashblade-V2-Restapi-Filesystem-Name | Découvre les systèmes de fichiers et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Métrique              | Unité |
|:----------------------|:------|
| alerts.detected.count |       |
| alert status          |       |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Métrique                                                    | Unité |
|:------------------------------------------------------------|:------|
| *array_name*#array.space.usage.bytes                        | B     |
| *array_name*#array.space.free.bytes                         | B     |
| *array_name*#array.space.usage.percentage                   | %     |
| *array_name*#array.data.reduction.count                     |       |
| *array_name~resolution*#array.io.read.usage.bytespersecond  | B/s   |
| *array_name~resolution*#array.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Filesystems" label="Filesystems">

| Métrique                                            | Unité |
|:----------------------------------------------------|:------|
| *filesystem_name*#filesystem.space.usage.bytes      | B     |
| *filesystem_name*#filesystem.space.free.bytes       | B     |
| *filesystem_name*#filesystem.space.usage.percentage | %     |
| *filesystem_name*#filesystem.data.reduction.count   |       |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique             | Unité |
|:---------------------|:------|
| chassis status       |       |
| eth port status      |       |
| fan status           |       |
| flash blade status   |       |
| fabric module status |       |
| mgmt port status     |       |
| power supply status  |       |

</TabItem>
</Tabs>

## Prérequis

Vous devez configurer un utilisateur pouvant se connecter à la baie de stockage. Cet utilisateur doit avoir au moins un accès "en lecture seule" à la baie de stockage.

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
dnf install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Pure Storage FlashBlade Rest API v2**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flashblade-V2-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flashblade-V2-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flashblade-v2-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Pure Storage FlashBlade**.
* Appliquez le modèle d'hôte **HW-Storage-Purestorage-Flashblade-V2-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro           | Description      |
|:------------|:----------------|:-----------------|
|             | APIEXTRAOPTIONS | --insecure       |
|             | APIPORT         |                  |
|             | APIPROTO        |                  |
| X           | APITOKEN        |                  |
|             | APIVERSION      | (Défaut : '2.4') |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \
    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \
    --mode=arrays \
    --hostname='10.0.0.1' \
    --api-version='2.4' \
    --api-token='mytoken' \
    --insecure \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Array 'objectstor301' space usage total: 59.73 TB used: 138.42 GB (0.23%) free: 59.60 TB (99.77%) - data reduction: 1.023 - read: 0.00 B/s, write: 73.16 KB/s | 'objectstor301#array.space.usage.bytes'=148629707720B;;;0;65677494565820 'objectstor301#array.space.free.bytes'=65528864858100B;;;0;65677494565820 'objectstor301#array.space.usage.percentage'=0.23%;;;0;100 'objectstor301#array.data.reduction.count'=1.023;;;0; 'objectstor301~5m#array.io.read.usage.bytespersecond'=0B/s;;;0; 'objectstor301~5m#array.io.write.usage.bytespersecond'=74913.1533333333B/s;;;0;
checking array 'objectstor301'
    space usage total: 59.73 TB used: 138.42 GB (0.23%) free: 59.60 TB (99.77%)
    data reduction: 1.023
    read: 0.00 B/s, write: 73.16 KB/s
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \
    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \
    --mode=arrays \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flashblade_v2_restapi.pl \
    --plugin=storage::purestorage::flashblade::v2::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
