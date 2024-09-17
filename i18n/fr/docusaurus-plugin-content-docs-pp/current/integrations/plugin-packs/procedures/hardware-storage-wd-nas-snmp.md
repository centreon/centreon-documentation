---
id: hardware-storage-wd-nas-snmp
title: WD NAS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **WD NAS SNMP** apporte un modèle d'hôte :

* **HW-Storage-Wd-Nas-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Wd-Nas-SNMP-custom" label="HW-Storage-Wd-Nas-SNMP-custom">

| Alias    | Modèle de service                      | Description          |
|:---------|:---------------------------------------|:---------------------|
| Hardware | HW-Storage-Wd-Nas-Hardware-SNMP-custom | Contrôle le matériel |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Wd-Nas-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias   | Modèle de service                     | Description          | Découverte |
|:--------|:--------------------------------------|:---------------------|:----------:|
| Volumes | HW-Storage-Wd-Nas-Volumes-SNMP-custom | Contrôle les volumes | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                           |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-Storage-Wd-Nas-SNMP-custom** host template |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                    | Description                                               |
|:-----------------------------------|:----------------------------------------------------------|
| HW-Storage-Wd-Nas-SNMP-Volume-Name | Discover the disk partitions and monitor space occupation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| hardware.temperature.celsius          | C     |
| *fans*#fan-status                     | N/A   |
| *drives*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| *volumes*#volume.space.usage.bytes      | B     |
| *volumes*#volume.space.free.bytes       | B     |
| *volumes*#volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **WD NAS** en SNMP,  il est nécessaire de configurer l'agent sur l'équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

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
dnf install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **WD NAS SNMP**
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
dnf install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Wd-Nas-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDRIVETEMPERATURE   |                                                                                                    |                   |             |
| CRITICALDRIVETEMPERATURE  |                                                                                                    |                   |             |
| WARNINGFANSTATUS          |                                                                                                    |                   |             |
| CRITICALFANSTATUS         |                                                                                                    |                   |             |
| WARNINGSYSTEMTEMPERATURE  |                                                                                                    |                   |             |
| CRITICALSYSTEMTEMPERATURE |                                                                                                    |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             |                                                                                                    |                   |             |
| WARNINGSPACEUSAGE      |                                                                                                    |                   |             |
| CRITICALSPACEUSAGE     |                                                                                                    |                   |             |
| WARNINGSPACEUSAGEFREE  |                                                                                                    |                   |             |
| CRITICALSPACEUSAGEFREE |                                                                                                    |                   |             |
| WARNINGSPACEUSAGEPRCT  |                                                                                                    |                   |             |
| CRITICALSPACEUSAGEPRCT |                                                                                                    |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
	--plugin=storage::wd::nas::snmp::plugin \
	--mode=volumes \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--warning-space-usage='' \
	--critical-space-usage='' \
	--warning-space-usage-free='' \
	--critical-space-usage-free='' \
	--warning-space-usage-prct='' \
	--critical-space-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All volumes are ok | '*volumes*#volume.space.usage.bytes'=B;;;0;total'*volumes*#volume.space.free.bytes'=B;;;0;total'*volumes*#volume.space.usage.percentage'=%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
	--plugin=storage::wd::nas::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                         | Modèle de service associé              |
|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/wd/nas/snmp/mode/hardware.pm)]        | HW-Storage-Wd-Nas-Hardware-SNMP-custom |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/wd/nas/snmp/mode/listvolumes.pm)] | Used for service discovery             |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/wd/nas/snmp/mode/volumes.pm)]          | HW-Storage-Wd-Nas-Volumes-SNMP-custom  |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option | Description |
|:-------|:------------|

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
	--plugin=storage::wd::nas::snmp::plugin \
	--mode=volumes \
	--help
```
