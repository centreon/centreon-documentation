---
id: hardware-storage-hp-p2000-xmlapi
title: HP P2000 XML API
description: Supervisez les baies de stockage HP P2000 via l'API XML : état du matériel, disques virtuels et statistiques d'E/S des volumes.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **HP P2000** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **HP P2000** apporte un modèle d'hôte :

* **HW-Storage-Hp-P2000-Xmlapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Hp-P2000-Xmlapi-custom" label="HW-Storage-Hp-P2000-Xmlapi-custom">

| Alias               | Modèle de service                                     | Description                           | Découverte |
|:--------------------|:------------------------------------------------------|:--------------------------------------|:----------:|
| Health              | HW-Storage-Hp-P2000-Health-Xmlapi-custom              | Contrôle l'état de santé              |            |
| Volume-Stats-Global | HW-Storage-Hp-P2000-Volume-Stats-Global-Xmlapi-custom | Contrôle les statistiques des volumes |     X      |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Hp-P2000-Xmlapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias             | Modèle de service                                   | Description                           |
|:------------------|:----------------------------------------------------|:--------------------------------------|
| Vdisks            | HW-Storage-Hp-P2000-Vdisks-Xmlapi-custom            | Contrôle les disques virtuelles       |
| Volume-Stats-Name | HW-Storage-Hp-P2000-Volume-Stats-Name-Xmlapi-custom | Contrôle les statistiques d'un volume |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                    | Description                                                                         |
|:-----------------------------------|:------------------------------------------------------------------------------------|
| HW-Storage-Hp-P2000-Xmlapi-Volumes | Découvre les partitions du disque en utilisant son nom et supervise l'espace occupé |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Nom                       | Unité |
|:--------------------------|:------|
| hardware.disk.status      | N/A   |
| hardware.disk.count       | count |
| hardware.enclosure.status | N/A   |
| hardware.enclosure.count  | count |
| hardware.fan.status       | N/A   |
| hardware.fan.count        | count |
| hardware.fan.speed.rpm    | rpm   |
| hardware.fru.status       | N/A   |
| hardware.fru.count        | count |
| hardware.psu.status       | N/A   |
| hardware.psu.count        | count |
| hardware.saslink.status   | N/A   |
| hardware.saslink.count    | count |
| hardware.sensor.status    | N/A   |
| hardware.sensor.count     | count |
| hardware.sensor.unit      | N/A   |
| hardware.vdisk.status     | N/A   |
| hardware.vdisk.count      | count |

</TabItem>
<TabItem value="Vdisks" label="Vdisks">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| *disk_name*#vdisk.space.usage.bytes      | B     |
| *disk_name*#vdisk.space.free.bytes       | B     |
| *disk_name*#vdisk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Volume-Stats-Global" label="Volume-Stats-Global">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| *volume*#volume.io.read.usage.bytespersecond  | B/s   |
| *volume*#volume.io.write.usage.bytespersecond | B/s   |
| *volume*#volume.cache.read.hits.percentage    | %     |
| *volume*#volume.cache.write.hits.percentage   | %     |
| *volume*#volume.io.usage.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Volume-Stats-Name" label="Volume-Stats-Name">

| Nom                                            | Unité |
|:-----------------------------------------------|:------|
| *volume1*#volume.io.read.usage.bytespersecond  | B/s   |
| *volume2*#volume.io.read.usage.bytespersecond  | B/s   |
| *volume1*#volume.io.write.usage.bytespersecond | B/s   |
| *volume2*#volume.io.write.usage.bytespersecond | B/s   |
| *volume1*#volume.cache.read.hits.percentage    | %     |
| *volume2*#volume.cache.read.hits.percentage    | %     |
| *volume1*#volume.cache.write.hits.percentage   | %     |
| *volume2*#volume.cache.write.hits.percentage   | %     |
| *volume1*#volume.io.usage.iops                 | iops  |
| *volume2*#volume.io.usage.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Un compte doit être créé sur le P2000 supervisé.

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
dnf install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **HP P2000**
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
dnf install centreon-plugin-Hardware-Storage-Hp-P2000-Xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hp-P2000-Xmlapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-hp-p2000-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hp-P2000-Xmlapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Hp-P2000-Xmlapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro        | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| HTTPUSERNAME | Username to connect                                                                                                                                |                   |      X      |
| HTTPPASSWORD | Password to connect                                                                                                                                |                   |      X      |
| HTTPPROTOCOL | Specify https if needed                                                                                                                            | http              |             |
| HTTPPORT     | Port used                                                                                                                                          | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check. Can be: 'disk', 'enclosure', 'fan', 'fru', 'psu', 'saslink', 'sensor', 'vdisk'                                         | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Vdisks" label="Vdisks">

| Macro             | Description                                                                                                                                      | Valeur par défaut          | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| UNKNOWNSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{display\}                      | %\{status\} =~ /unknown/i  |             |
| FILTERNAME        | Filter virtual disk name (can be a regexp)                                                                                                       |                            |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                      | %\{status\} =~ /degraded/i |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}                     | %\{status\} =~ /failed/i   |             |
| WARNINGUSAGE      | Threshold                                                                                                                                        |                            |             |
| CRITICALUSAGE     | Threshold                                                                                                                                        |                            |             |
| WARNINGUSAGEFREE  | Threshold                                                                                                                                        |                            |             |
| CRITICALUSAGEFREE | Threshold                                                                                                                                        |                            |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                                                                        |                            |             |
| CRITICALUSAGEPRCT | Threshold                                                                                                                                        |                            |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

</TabItem>
<TabItem value="Volume-Stats-Global" label="Volume-Stats-Global">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                 | Set the volume name                                                                                                                              | .*                |             |
| CRITICALIOPS           | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPS            | Threshold                                                                                                                                        |                   |             |
| CRITICALREAD           | Threshold                                                                                                                                        |                   |             |
| WARNINGREAD            | Threshold                                                                                                                                        |                   |             |
| CRITICALREADCACHEHITS  | Threshold                                                                                                                                        |                   |             |
| WARNINGREADCACHEHITS   | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITE          | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITE           | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITECACHEHITS | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITECACHEHITS  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Volume-Stats-Name" label="Volume-Stats-Name">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NAME                   | Set the volume name                                                                                                                              |                   |             |
| CRITICALIOPS           | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPS            | Threshold                                                                                                                                        |                   |             |
| CRITICALREAD           | Threshold                                                                                                                                        |                   |             |
| WARNINGREAD            | Threshold                                                                                                                                        |                   |             |
| CRITICALREADCACHEHITS  | Threshold                                                                                                                                        |                   |             |
| WARNINGREADCACHEHITS   | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITE          | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITE           | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITECACHEHITS | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITECACHEHITS  | Threshold                                                                                                                                        |                   |             |
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
/usr/lib/centreon/plugins/centreon_hp_p2000.pl \
	--plugin=storage::hp::p2000::xmlapi::plugin \
	--mode=volume-stats \
	--hostname=10.0.0.1 \
	--port='80' \
	--proto='http' \
	--username='XXXX' \
	--password='XXXX' \
	--name='' \
	--warning-read='' \
	--critical-read='' \
	--warning-write='' \
	--critical-write='' \
	--warning-iops='' \
	--critical-iops='' \
	--warning-write-cache-hits='' \
	--critical-write-cache-hits='' \
	--warning-read-cache-hits='' \
	--critical-read-cache-hits=''  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All volumes statistics are ok | 'volume1#volume.io.read.usage.bytespersecond'=67056B/s;;;0; 'volume2#volume.io.read.usage.bytespersecond'=87122B/s;;;0; 'volume1#volume.io.write.usage.bytespersecond'=48347B/s;;;0; 'volume2#volume.io.write.usage.bytespersecond'=76968B/s;;;0; 'volume1#volume.cache.read.hits.percentage'=41509%;;;0;100 'volume2#volume.cache.read.hits.percentage'=58150%;;;0;100 'volume1#volume.cache.write.hits.percentage'=35171%;;;0;100 'volume2#volume.cache.write.hits.percentage'=68769%;;;0;100 'volume1#volume.io.usage.iops'=39588iops;;;0; 'volume2#volume.io.usage.iops'=44259iops;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_p2000.pl \
	--plugin=storage::hp::p2000::xmlapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                              | Modèle de service associé                                                                                      |
|:----------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| controllers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/controllers.pm)]   | Non-utilisé dans ce connecteur de supervision                                                                          |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/health.pm)]             | HW-Storage-Hp-P2000-Health-Xmlapi-custom                                                                       |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/listvolumes.pm)]  | Utilisé pour le service de découverte                                                                                     |
| ntp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/ntp.pm)]                   | Non-utilisé dans ce connecteur de supervision                                                                          |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/time.pm)]                 | Non-utilisé dans ce connecteur de supervision                                                                          |
| vdisks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/vdisks.pm)]             | HW-Storage-Hp-P2000-Vdisks-Xmlapi-custom                                                                       |
| volume-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/p2000/xmlapi/mode/volumesstats.pm)] | HW-Storage-Hp-P2000-Volume-Stats-Global-Xmlapi-custom<br />HW-Storage-Hp-P2000-Volume-Stats-Name-Xmlapi-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   HP p2000 Hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     |   Port used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    |   Specify https if needed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --urlpath                                  |   Set path to xml api (default: '/api/')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --username                                 |   Username to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --password                                 |   Password to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --digest-sha256                            |   New digest to use (md5 deprecated).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Option               | Description                                                                                                                                                                                                             |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'disk', 'enclosure', 'fan', 'fru', 'psu', 'saslink', 'sensor', 'vdisk'.                                                                                             |
| --filter             |   Exclude the items given as a comma-separated list (example: --filter=fru --filter=enclosure). You can also exclude items from specific instances: --filter=disk,1                                                     |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping). It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.   |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                            |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,OK,unknown'        |
| --warning            |   Set warning threshold for 'sensor', 'fan.speed' (syntax: type,instance,threshold) Example: --warning='sensor,temperature.*,30'                                                                                        |
| --critical           |   Set warning threshold for 'sensor', 'fan.speed' (syntax: type,instance,threshold) Example: --warning='sensor,temperature.*,30'                                                                                        |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                          |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                         |

</TabItem>
<TabItem value="Vdisks" label="Vdisks">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                 |
| --filter-name            |   Filter virtual disk name (can be a regexp).                                                                                                                           |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}    |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /failed/i'). You can use the following variables: %\{status\}, %\{display\}    |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                                  |

</TabItem>
<TabItem value="Volume-Stats-Global" label="Volume-Stats-Global">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                  |
| --critical-*      |   Critical threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                 |
| --name            |   Set the volume name.                                                                                                        |
| --regexp          |   Allows to use regexp to filter volume name (with option --name).                                                            |

</TabItem>
<TabItem value="Volume-Stats-Name" label="Volume-Stats-Name">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                  |
| --critical-*      |   Critical threshold. Can be: 'read', 'write', 'iops', 'write-cache-hits', 'read-cache-hits'.                                 |
| --name            |   Set the volume name.                                                                                                        |
| --regexp          |   Allows to use regexp to filter volume name (with option --name).                                                            |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_p2000.pl \
	--plugin=storage::hp::p2000::xmlapi::plugin \
	--mode=volume-stats \
	--help
```
