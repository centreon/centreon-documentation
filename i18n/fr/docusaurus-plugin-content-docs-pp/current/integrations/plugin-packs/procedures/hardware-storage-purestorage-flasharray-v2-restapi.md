---
id: hardware-storage-purestorage-flasharray-v2-restapi
title: Pure Storage FlashArray v2 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Pure Storage FlashArray Rest API v2** apporte un modèle d'hôte :

* HW-Storage-Purestorage-Flasharray-V2-Restapi-custom

Il apporte les modèles de service suivants :

| Alias    | Modèle de service                                     | Description                      | Défaut | Découverte |
|:---------|:------------------------------------------------------|:---------------------------------|:-------|:-----------|
| Alerts   | HW-Storage-Purestorage-Flasharray-V2-Alerts-Restapi   | Contrôle les alertes             | X      |            |
| Arrays   | HW-Storage-Purestorage-Flasharray-V2-Arrays-Restapi   | Contrôle les grappes de stockage |        | X          |
| Hardware | HW-Storage-Purestorage-Flasharray-V2-Hardware-Restapi | Contrôle l'état matériel         | X      |            |
| Volumes  | HW-Storage-Purestorage-Flasharray-V2-Volumes-Restapi  | Contrôle les volumes             |        | X          |

### Règles de découverte

| Nom de la règle                                          | Description                                                 |
|:---------------------------------------------------------|:------------------------------------------------------------|
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Array-Name  | Découvre les grappes de stockage et supervise l'utilisation |
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Volume-Name | Découvre les volumes et supervise l'utilisation             |

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
<TabItem value="Hardware" label="Hardware">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| chassis status                                    |       |
| controller status                                 |       |
| drive bay status                                  |       |
| eth port status                                   |       |
| fc port status                                    |       |
| nvram bay status                                  |       |
| power supply status                               |       |
| sas port status                                   |       |
| temperature status                                |       |
| *sensor_name*#hardware.sensor.temperature.celsius | C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| *volume_name*#volume.space.usage.bytes      | B     |
| *volume_name*#volume.space.free.bytes       | B     |
| *volume_name*#volume.space.usage.percentage | %     |
| *volume_name*#volume.data.reduction.count   |       |

</TabItem>
</Tabs>

## Prérequis

Vous devez configurer l'utilisateur qui peut se connecter à la baie de stockage. Cet utilisateur doit avoir au moins un accès "en lecture seule" à la baie de stockage.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Pure Storage FlashArray Rest API v2**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

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
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Pure Storage FlashArray**.
* Appliquez le modèle d'hôte **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom**.
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
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_v2_restapi.pl \
    --plugin=storage::purestorage::flasharray::v2::restapi::plugin \
    --mode=arrays \
    --hostname='10.0.0.1' \
    --api-version='2.4' \
    --api-token='mytoken' \
    --insecure \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Array 'filer06-c' space usage total: 26.52 TB used: 16.15 TB (60.91%) free: 10.37 TB (39.09%) - data reduction: 3.808 - read: 732.13 MB/s, write: 0.00 B/s | 'filer06-c#array.space.usage.bytes'=17760870565810B;;;0;29159353378407 'filer06-c#array.space.free.bytes'=11398482812597B;;;0;29159353378407 'filer06-c#array.space.usage.percentage'=60.91%;;;0;100 'filer06-c#array.data.reduction.count'=3.808;;;0; 'filer06-c~5m#array.io.read.usage.bytespersecond'=767691223B/s;;;0; 'filer06-c~5m#array.io.write.usage.bytespersecond'=0B/s;;;0;
checking array 'filer06-c'
    space usage total: 26.52 TB used: 16.15 TB (60.91%) free: 10.37 TB (39.09%)
    data reduction: 3.808
    read: 732.13 MB/s, write: 0.00 B/s
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_v2_restapi.pl \
    --plugin=storage::purestorage::flasharray::v2::restapi::plugin \
    --mode=arrays \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_v2_restapi.pl \
    --plugin=storage::purestorage::flasharray::v2::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
