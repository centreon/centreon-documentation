---
id: hardware-storage-hpe-primera-restapi
title: HPE Primera REST API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Compatibilité

Ce connecteur a été conçu pour être compatible avec les produits suivants.

| Produit     | Modèles       | Versions |
| ----------- | ------------- | -------- |
| HPE Primera | C650 2 noeuds | 4.5.24.7 |
| HPE Alletra | 9000          | NA       |

## Contenu du pack

### Modèles

Le connecteur de supervision **HPE Primera REST API** apporte un modèle d'hôte :

* **HW-Storage-HPE-Primera-API-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-HPE-Primera-API-custom" label="HW-Storage-HPE-Primera-API-custom">

| Alias       | Modèle de service                                 | Description                                             | Découverte |
|:------------|:--------------------------------------------------|:--------------------------------------------------------|:----------:|
| Capacity    | HW-Storage-HPE-Primera-Capacity-RESTAPI-custom    | Contrôle la capacité des différents types de stockage   |            |
| Disk-Status | HW-Storage-HPE-Primera-Disk-Status-RESTAPI-custom | Contrôle l'état de fonctionnement des disques physiques | X          |
| Licenses    | HW-Storage-HPE-Primera-Licenses-RESTAPI-custom    | Contrôle l'état des licences                            |            |
| Nodes       | HW-Storage-HPE-Primera-Nodes-RESTAPI-custom       | Contrôle l'état des noeuds                              |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-HPE-Primera-API-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                                  | Description                                | Découverte |
|:-------------|:---------------------------------------------------|:-------------------------------------------|:----------:|
| Disk-Usage   | HW-Storage-HPE-Primera-Disk-Usage-RESTAPI-custom   | Contrôle l'utilisation des disques         | X          |
| Volume-Usage | HW-Storage-HPE-Primera-Volume-Usage-RESTAPI-custom | Contrôle le taux d'utilisation des volumes | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                     | Description                                                |
|:----------------------------------------------------|:-----------------------------------------------------------|
| HW-Storage-HPE-Primera-RESTAPI-Disk-Status-Id       | Découvre les disques physiques et en supervise le statut.     |
| HW-Storage-HPE-Primera-RESTAPI-Disk-Status-Position | Découvre les disques physiques et en supervise le statut.     |
| HW-Storage-HPE-Primera-RESTAPI-Disk-Usage-Id        | Découvre les disques physiques et en supervise l'utilisation. |
| HW-Storage-HPE-Primera-RESTAPI-Disk-Usage-Position  | Découvre les disques physiques et en supervise l'utilisation. |
| HW-Storage-HPE-Primera-RESTAPI-Volume-Usage-Id      | Découvre les volumes et en supervise l'utilisation.           |
| HW-Storage-HPE-Primera-RESTAPI-Volume-Usage-Name    | Découvre les volumes et en supervise l'utilisation.

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Capacity" label="Capacity">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| *storage_type*~storage.space.usage.bytes                  | B     |
| *storage_type*~storage.space.free.bytes                   | B     |
| *storage_type*~storage.space.usage.percentage             | %     |
| *storage_type*~storage.space.unavailable.bytes            | B     |
| *storage_type*~storage.space.failed.bytes                 | B     |
| *storage_type*~storage.space.compaction.ratio.count       | count |
| *storage_type*~storage.space.deduplication.ratio.count    | count |
| *storage_type*~storage.space.compression.ratio.count      | count |
| *storage_type*~storage.space.data_reduction.ratio.count   | count |
| *storage_type*~storage.space.overprovisioning.ratio.count | count |

</TabItem>
<TabItem value="Disk-Status" label="Disk-Status">

| Métrique             | Unité |
|:---------------------|:------|
| disks.total.count    | count |
| disks.normal.count   | count |
| disks.degraded.count | count |
| disks.new.count      | count |
| disks.failed.count   | count |
| disks.unknown.count  | count |
| *disk_id*#status     | N/A   |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| disks.total.space.usage.bytes         | B     |
| disks.total.space.usage.percent       | %     |
| disks.total.space.free.bytes          | B     |
| *disk_id*#disk.space.usage.bytes      | B     |
| *disk_id*#disk.space.free.bytes       | B     |
| *disk_id*#disk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| licenses.total.count                      | count |
| licenses.expired.count                    | count |
| *license_name*#license.expiration.seconds | s     |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Métrique              | Unité |
|:----------------------|:------|
| nodes.total.count     | count |
| nodes.online.count    | count |
| nodes.offline.count   | count |
| *node_id*#node-status | N/A   |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *volume_id*#volume.space.usage.bytes      | B     |
| *volume_id*#volume.space.free.bytes       | B     |
| *volume_id*#volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

La procédure ci-dessous est extraite de la [documentation officielle de HPE](https://support.hpe.com/hpesc/public/docDisplay?docId=a00118636en_us&page=GUID-77CF1ECF-98D5-44E1-B040-F54F17374A20.html).

1. Loggez-vous à la CLI en tant que `Super`, `Service`, ou tout autre rôle disposant de la permission `wsapi_set`.
2. Démarrez le serveur WSAPI.
    ```
   cli%
   startwsapi
   ```
3. Pour configurer WSAPI, entrez `setwsapi` dans la CLI.

Veuillez vous référer à la documentation officielle pour plus de détails.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hpe-primera-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **HPE Primera REST API**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Storage-Hpe-Primera-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hpe-Primera-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-hpe-primera-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hpe-Primera-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-HPE-Primera-API-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | Define the username for authentication.                                                                                                            | LOGIN             |      X      |
| APIPASSWORD     | Define the password associated with the username.                                                                                                  | PASSWORD          |      X      |
| APIPROTO        | Define the protocol to reach the API.                                                                                                              | https             |             |
| APIPORT         | Define the TCP port to use to reach the API.                                                                                                       | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Capacity" label="Capacity">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE               | Filter storage by type (regular expression). The known types are: allCapacity, FCCapacity, SSDCapacity and NLCapacity                            |                   |             |
| WARNINGCOMPACTION        | Thresholds.                                                                                                                                      |                   |             |
| CRITICALCOMPACTION       | Thresholds.                                                                                                                                      |                   |             |
| WARNINGCOMPRESSION       | Thresholds.                                                                                                                                      |                   |             |
| CRITICALCOMPRESSION      | Thresholds.                                                                                                                                      |                   |             |
| WARNINGDATAREDUCTION     | Thresholds.                                                                                                                                      |                   |             |
| CRITICALDATAREDUCTION    | Thresholds.                                                                                                                                      |                   |             |
| WARNINGDEDUPLICATION     | Thresholds.                                                                                                                                      |                   |             |
| CRITICALDEDUPLICATION    | Thresholds.                                                                                                                                      |                   |             |
| WARNINGOVERPROVISIONING  | Thresholds.                                                                                                                                      |                   |             |
| CRITICALOVERPROVISIONING | Thresholds.                                                                                                                                      |                   |             |
| WARNINGSPACEFAILED       | Thresholds.                                                                                                                                      |                   |             |
| CRITICALSPACEFAILED      | Thresholds.                                                                                                                                      |                   |             |
| WARNINGSPACEUNAVAILABLE  | Thresholds.                                                                                                                                      |                   |             |
| CRITICALSPACEUNAVAILABLE | Thresholds.                                                                                                                                      |                   |             |
| WARNINGSPACEUSAGE        | Thresholds.                                                                                                                                      |                   |             |
| CRITICALSPACEUSAGE       | Thresholds.                                                                                                                                      |                   |             |
| WARNINGSPACEUSAGEFREE    | Thresholds.                                                                                                                                      |                   |             |
| CRITICALSPACEUSAGEFREE   | Thresholds.                                                                                                                                      |                   |             |
| WARNINGSPACEUSAGEPRCT    | Thresholds.                                                                                                                                      |                   |             |
| CRITICALSPACEUSAGEPRCT   | Thresholds.                                                                                                                                      |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk-Status" label="Disk-Status">

| Macro                 | Description                                                                                                                                                                                                                                                                                                                                                                  | Valeur par défaut                         | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|:-----------:|
| FILTERID              | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression                                                                                                                                                                                                                                                               |                                           |             |
| FILTERMANUFACTURER    | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression                                                                                                                                                                                                                                                 |                                           |             |
| FILTERMODEL           | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression                                                                                                                                                                                                                                                        |                                           |             |
| FILTERSERIAL          | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression                                                                                                                                                                                                                                                |                                           |             |
| FILTERPOSITION        | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression |                                           |             |
| WARNINGDISKSDEGRADED  | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| CRITICALDISKSDEGRADED | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| WARNINGDISKSFAILED    | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| CRITICALDISKSFAILED   | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| WARNINGDISKSNEW       | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| CRITICALDISKSNEW      | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| WARNINGDISKSNORMAL    | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| CRITICALDISKSNORMAL   | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| WARNINGDISKSTOTAL     | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| CRITICALDISKSTOTAL    | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| WARNINGDISKSUNKNOWN   | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| CRITICALDISKSUNKNOWN  | Thresholds.                                                                                                                                                                                                                                                                                                                                                                  |                                           |             |
| WARNINGSTATUS         | Define the condition to match for the returned status to be WARNING. Default: '%\{status\} =~ /^(new\|degraded\|unknown)$/'                                                                                                                                                                                                                                                    | %\{status\} =~ /^(new\|degraded\|unknown)$/ |             |
| CRITICALSTATUS        | Define the condition to match for the returned status to be CRITICAL. Default: '%\{status\} =~ /failed/'                                                                                                                                                                                                                                                                       | %\{status\} =~ /failed/                     |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                                                                             | --verbose                                 |             |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro                  | Description                                                                                                                                                                                                                                                                                                                                                                  | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERID               | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression                                                                                                                                                                                                                                                               |                   |             |
| FILTERMANUFACTURER     | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression                                                                                                                                                                                                                                                 |                   |             |
| FILTERMODEL            | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression                                                                                                                                                                                                                                                        |                   |             |
| FILTERSERIAL           | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression                                                                                                                                                                                                                                                |                   |             |
| FILTERPOSITION         | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression |                   |             |
| WARNINGTOTALFREE       | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| CRITICALTOTALFREE      | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| WARNINGTOTALUSAGE      | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| CRITICALTOTALUSAGE     | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| WARNINGTOTALUSAGEPRCT  | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |                   |             |
| CRITICALTOTALUSAGEPRCT | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |                   |             |
| WARNINGUSAGE           | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| CRITICALUSAGE          | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| WARNINGUSAGEFREE       | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| CRITICALUSAGEFREE      | Thresholds in bytes.                                                                                                                                                                                                                                                                                                                                                         |                   |             |
| WARNINGUSAGEPRCT       | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |                   |             |
| CRITICALUSAGEPRCT      | Thresholds in percents.                                                                                                                                                                                                                                                                                                                                                      |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                                                                             | --verbose         |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                     | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                | Filter licenses by name (regular expression)                                                                                                     |                   |             |
| WARNINGEXPIRED            | Thresholds. Applies to the number of expired licenses.                                                                                           |                   |             |
| CRITICALEXPIRED           | Thresholds. Applies to the number of expired licenses.                                                                                           |                   |             |
| WARNINGLICENSEEXPIRATION  | Thresholds. Applies to the remaining time in seconds until the licenses will expire.                                                             | 1296000:          |             |
| CRITICALLICENSEEXPIRATION | Thresholds. Applies to the remaining time in seconds until the licenses will expire.                                                             | 86400:            |             |
| WARNINGTOTAL              | Thresholds. Aplies to the total number of licenses.                                                                                              |                   |             |
| CRITICALTOTAL             | Thresholds. Aplies to the total number of licenses.                                                                                              |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro              | Description                                                                                                                                      | Valeur par défaut     | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERNODEID       | Define which nodes (filtered by regular expression) should be monitored. Example: --filter-node='^(0\|1)$'                                       |                       |             |
| WARNINGNODESTATUS  | Define the conditions to match for the status to be WARNING. You can use the %\{status\} variables.                                                | %\{status\} ne "online" |             |
| CRITICALNODESTATUS | Define the conditions to match for the status to be CRITICAL. You can use the %\{status\} variables.                                               |                       |             |
| WARNINGOFFLINE     | Thresholds for the number of offline nodes                                                                                                       | 0:0                   |             |
| CRITICALOFFLINE    | Thresholds for the number of offline nodes                                                                                                       |                       |             |
| WARNINGONLINE      | Thresholds for the number of online nodes                                                                                                        |                       |             |
| CRITICALONLINE     | Thresholds for the number of online nodes                                                                                                        |                       |             |
| WARNINGTOTAL       | Thresholds for the total number of nodes                                                                                                         |                       |             |
| CRITICALTOTAL      | Thresholds for the total number of nodes                                                                                                         |                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                       |             |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME        | Define which volumes should be monitored based on the volume names. This option will be treated as a regular expression.                         |                   |             |
| FILTERID          | Define which volumes should be monitored based on their IDs. This option will be treated as a regular expression.                                |                   |             |
| WARNINGUSAGE      | Thresholds.                                                                                                                                      |                   |             |
| CRITICALUSAGE     | Thresholds.                                                                                                                                      |                   |             |
| WARNINGUSAGEFREE  | Thresholds.                                                                                                                                      |                   |             |
| CRITICALUSAGEFREE | Thresholds.                                                                                                                                      |                   |             |
| WARNINGUSAGEPRCT  | Thresholds.                                                                                                                                      |                   |             |
| CRITICALUSAGEPRCT | Thresholds.                                                                                                                                      |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_hpe_primera_restapi.pl \
	--plugin=storage::hp::primera::restapi::plugin \
	--mode=licenses \
	--hostname='10.0.0.1' \
	--api-username='LOGIN' \
	--api-password='PASSWORD' \
	--port='443' \
	--proto='https'  \
	--filter-name='' \
	--warning-total='' \
	--critical-total='' \
	--warning-expired='' \
	--critical-expired='' \
	--warning-license-expiration='1296000:' \
	--critical-license-expiration='86400:' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
CRITICAL: License 'Adaptive Flash Cache' expires: 2024-07-14. Adaptive Flash Cache license has expired. \| 'licenses.total.count'=25;;;0; 'licenses.expired.count'=1;;;0;25 'Adaptive Flash Cache#Adaptive Flash Cache#license.expiration.seconds'=0s;1296000:;86400:;0; 'Autonomic Rebalance#Autonomic Rebalance#license.expiration.seconds'=1234567890s;1296000:;86400:;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hpe_primera_restapi.pl \
	--plugin=storage::hp::primera::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                | Modèle de service associé                          |
|:------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/capacity.pm)]        | HW-Storage-HPE-Primera-Capacity-RESTAPI-custom     |
| disk-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/diskstatus.pm)]   | HW-Storage-HPE-Primera-Disk-Status-RESTAPI-custom  |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/diskusage.pm)]     | HW-Storage-HPE-Primera-Disk-Usage-RESTAPI-custom   |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/licenses.pm)]        | HW-Storage-HPE-Primera-Licenses-RESTAPI-custom     |
| list-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/listdisks.pm)]     | Used for service discovery                         |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/listvolumes.pm)] | Used for service discovery                         |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/nodes.pm)]              | HW-Storage-HPE-Primera-Nodes-RESTAPI-custom        |
| volume-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/primera/restapi/mode/volumeusage.pm)] | HW-Storage-HPE-Primera-Volume-Usage-RESTAPI-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      HPE Primera REST API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --hostname                                 | Address of the server that hosts the API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --port                                     | Define the TCP port to use to reach the API (default: 443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proto                                    | Define the protocol to reach the API (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --api-password                             | Define the password associated with the username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --timeout                                  | Define the timeout in seconds for HTTP requests (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Capacity" label="Capacity">

| Option                   | Description                                                                                                                                                                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-type            | Filter storage by type (regular expression). The known types are: allCapacity, FCCapacity, SSDCapacity and NLCapacity.                                                                                                                                                     |
| --warning-* --critical-* | Thresholds that can apply to: - Space oriented metrics: 'space-usage', 'space-usage-free', 'space-usage-prct', 'space-unavailable', 'space-failed', - Storage optimization metrics: 'compaction', 'deduplication', 'compression', 'data-reduction', 'overprovisioning'.    |

</TabItem>
<TabItem value="Disk-Status" label="Disk-Status">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id              | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression.                                                                                                                                                                                                                                                                 |
| --filter-manufacturer    | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression.                                                                                                                                                                                                                                                   |
| --filter-model           | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression.                                                                                                                                                                                                                                                          |
| --filter-serial          | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression.                                                                                                                                                                                                                                                  |
| --filter-position        | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression.   |
| --warning-status         | Define the condition to match for the returned status to be WARNING. Default: '%\{status\} =~ /^(new\|degraded\|unknown)$/'                                                                                                                                                                                                                                                       |
| --critical-status        | Define the condition to match for the returned status to be CRITICAL. Default: '%\{status\} =~ /failed/'                                                                                                                                                                                                                                                                          |
| --unknown-status         | Define the condition to match for the returned status to be UNKNOWN. Default: '%\{status\} =~ /NOT\_DOCUMENTED$/'                                                                                                                                                                                                                                                                 |
| --warning-* --critical-* | Thresholds. '*' may stand for 'disks-total', 'disks-normal', 'disks-degraded', 'disks-new', 'disks-failed', 'disks-unknown'.                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Define which counters (filtered by regular expression) should be monitored. Example: --filter-counters='^usage$'                                                                                                                                                                                                                                                                |
| --filter-id              | Define which disks should be monitored based on their IDs. This option will be treated as a regular expression.                                                                                                                                                                                                                                                                 |
| --filter-manufacturer    | Define which volumes should be monitored based on the disk manufacturer. This option will be treated as a regular expression.                                                                                                                                                                                                                                                   |
| --filter-model           | Define which volumes should be monitored based on the disk model. This option will be treated as a regular expression.                                                                                                                                                                                                                                                          |
| --filter-serial          | Define which volumes should be monitored based on the disk serial number. This option will be treated as a regular expression.                                                                                                                                                                                                                                                  |
| --filter-position        | Define which volumes should be monitored based on the disk position. The position is composed of 3 integers, separated by colons: - Cage number where the physical disk is in. - Magazine number where the physical disk is in. - For DC4 cages, disk position within the magazine. For non-DC4 cages, 0. Example: 7:5:0 This option will be treated as a regular expression.   |
| --warning-* --critical-* | Thresholds for disk usage metrics. * may be replaced with: - For individual disks: 'usage' (B), 'usage-free' (B), 'usage-prct' (%). - For global statistics: 'total-usage' (B), 'total-free' (B), 'total-usage-prct' (%).                                                                                                                                                       |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                   | Description                                                                                                                                                                                                                                                                                                |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter licenses by name (regular expression).                                                                                                                                                                                                                                                              |
| --warning-* --critical-* | Thresholds for counters and license validity remaining time in seconds. * may be replaced with:  'total': applies to the total number of licenses. 'expired': applies to the number of expired licenses. 'license-expiration': applies to the remaining time in seconds until the licenses will expire.    |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Option                 | Description                                                                                                                             |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node          | Define which nodes (filtered by regular expression) should be monitored. Example: --filter-node='^(0\|1)$'                              |
| --warning-node-status  | Define the conditions to match for the status to be WARNING. (default: '%\{status\} ne "online"'). You can use the %\{status\} variables.   |
| --critical-node-status | Define the conditions to match for the status to be CRITICAL You can use the %\{status\} variables.                                       |
| --warning-total        | Thresholds for the total number of nodes.                                                                                               |
| --critical-total       | Thresholds for the total number of nodes.                                                                                               |
| --warning-online       | Thresholds for the number of online nodes.                                                                                              |
| --critical-online      | Thresholds for the number of online nodes.                                                                                              |
| --warning-offline      | Thresholds for the number of offline nodes.                                                                                             |
| --critical-offline     | Thresholds for the number of offline nodes.                                                                                             |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Option                   | Description                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Define which counters (filtered by regular expression) should be monitored. Example: --filter-counters='^usage$'           |
| --filter-id              | Define which volumes should be monitored based on their IDs. This option will be treated as a regular expression.          |
| --filter-name            | Define which volumes should be monitored based on the volume names. This option will be treated as a regular expression.   |
| --warning-* --critical-* | Thresholds for volume usage metrics. * may be replaced with: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).              |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hpe_primera_restapi.pl \
	--plugin=storage::hp::primera::restapi::plugin \
	--mode=licenses \
	--help
```
