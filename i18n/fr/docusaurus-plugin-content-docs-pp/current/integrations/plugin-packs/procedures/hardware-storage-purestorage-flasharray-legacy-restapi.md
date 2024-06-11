---
id: hardware-storage-purestorage-flasharray-legacy-restapi
title: Pure Storage FlashArray Legacy Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Pure Storage FlashArray Legacy Rest API** apporte un modèle d'hôte :

* HW-Storage-Purestorage-Flasharray-Legacy-Restapi-custom

Il apporte les modèles de service suivants :

| Alias        | Modèle de service                                             | Description                        | Défaut |
|:-------------|:--------------------------------------------------------------|:-----------------------------------|:-------|
| Alarms       | HW-Storage-Purestorage-Flasharray-Legacy-Alarms-Restapi       | Contrôle les alarmes               | X      |
| Hardware     | HW-Storage-Purestorage-Flasharray-Legacy-Hardware-Restapi     | Contrôle l'état matériel           | X      |
| Volume-Usage | HW-Storage-Purestorage-Flasharray-Legacy-Volume-Usage-Restapi | Contrôle l'utilisation des volumes | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Métrique              | Unité |
|:----------------------|:------|
| alerts.detected.count |       |
| alert status          |       |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| entity status                                     |       |
| *entity_name*#hardware.entity.temperature.celsius |       |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| *volume_name*#volume.space.usage.bytes     | B     |
| *volume_name*#volume.data.reduction.count  |       |
| *volume_name*#volume.total.reduction.count |       |
| *volume_name*#volume.snapshots.usage.bytes | B     |

</TabItem>
</Tabs>

## Prérequis

Le Pack utilise l'ancienne API. Vous pouvez tester le Pack [Pure Storage FlashArray Rest API v2](hardware-storage-purestorage-flasharray-v2-restapi.md) plus récent.

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
dnf install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Pure Storage FlashArray Legacy Rest API**
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
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-Legacy-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-Legacy-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flasharray-legacy-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Pure Storage FlashArray**.
* Appliquez le modèle d'hôte **HW-Storage-Purestorage-Flasharray-Legacy-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro        | Description                                                                            |
|:------------|:-------------|:---------------------------------------------------------------------------------------|
| X           | APIUSERNAME  |                                                                                        |
| X           | APIPASSWORD  |                                                                                        |
|             | APIURLPATH   | (Défaut : '/api/1.11')                                                                 |
|             | EXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \
    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \
    --mode=volume-usage \
    --hostname=10.0.0.1 \
    --api-path='/api/1.11' \
    --username='myuser' \
    --password='mypass' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All volumes are ok | 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.space.usage.bytes'=327296252612B;;;0;3298534883328 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.data.reduction.count'=5.436;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.total.reduction.count'=8.870;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.snapshots.usage.bytes'=1454226866B;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.space.usage.bytes'=327296252612B;;;0;4298534883328 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.data.reduction.count'=4.436;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.total.reduction.count'=7.870;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.snapshots.usage.bytes'=1854226866B;;;0;
Volume 'PURE-M50R2-ADM24-CLU04-Oracle-prod1' usage total: 3.00 TB used: 304.82 GB (9.92%) free: 2.70 TB (90.08%), data reduction: 5.436, total reduction: 8.870, snapshots: 1.35 GB
Volume 'PURE-M50R2-ADM24-CLU04-Oracle-prod2' usage total: 3.91 TB used: 304.82 GB (7.61%) free: 3.61 TB (92.39%), data reduction: 4.436, total reduction: 7.870, snapshots: 1.73 GB
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \
    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \
    --mode=volume-usage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \
    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
