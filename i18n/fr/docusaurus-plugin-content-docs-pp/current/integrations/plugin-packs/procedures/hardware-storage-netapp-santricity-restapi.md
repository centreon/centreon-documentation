---
id: hardware-storage-netapp-santricity-restapi
title: Netapp Santricity Restapi
description: "Supervisez les systèmes de stockage NetApp SANtricity via l'API REST : matériel, contrôleurs, pools, systèmes et volumes."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **NetApp Santricity Restapi** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **NetApp Santricity Restapi** apporte un modèle d'hôte :

* **HW-Storage-NetApp-Santricity-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-NetApp-Santricity-Restapi-custom" label="HW-Storage-NetApp-Santricity-Restapi-custom">

| Alias               | Modèle de service                                               | Description                                        |
|:--------------------|:----------------------------------------------------------------|:---------------------------------------------------|
| Hardware            | HW-Storage-NetApp-Santricity-Hardware-Restapi-custom            | Contrôle l'état matériel du stockage Netapp        |
| Storage-Controllers | HW-Storage-NetApp-Santricity-Storage-Controllers-Restapi-custom | Contrôle l'état des contrôleurs du stockage Netapp |
| Storage-Pools       | HW-Storage-NetApp-Santricity-Storage-Pools-Restapi-custom       | Contrôle l'état du pool du stockage Netapp         |
| Storage-Systems     | HW-Storage-NetApp-Santricity-Storage-Systems-Restapi-custom     | Contrôle l'état des systèmes du stockage Netapp    |
| Storage-Volumes     | HW-Storage-NetApp-Santricity-Storage-Volumes-Restapi-custom     | Contrôle l'état des volumes du stockage Netapp     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-NetApp-Santricity-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Nom                                | Unité |
|:-----------------------------------|:------|
| hardware.battery.status            | N/A   |
| hardware.battery.count             | count |
| hardware.board.status              | N/A   |
| hardware.board.count               | count |
| hardware.cbd.status                | N/A   |
| hardware.cbd.count                 | count |
| hardware.cmd.status                | N/A   |
| hardware.cmd.count                 | count |
| hardware.ctrl.status               | N/A   |
| hardware.ctrl.count                | count |
| hardware.drive.status              | N/A   |
| hardware.drive.count               | count |
| hardware.drive.temperature.celsius | C     |
| hardware.fan.status                | N/A   |
| hardware.fan.count                 | count |
| hardware.psu.status                | N/A   |
| hardware.psu.count                 | count |
| hardware.storage.status            | N/A   |
| hardware.storage.count             | count |
| hardware.thsensor.status           | N/A   |
| hardware.thsensor.count            | count |

</TabItem>
<TabItem value="Storage-Controllers" label="Storage-Controllers">

| Nom                                                     | Unité |
|:--------------------------------------------------------|:------|
| controller-status                                       | N/A   |
| *ss*~*controllers*#volume.cpu.utilization.percentage    | %     |
| *ss*~*controllers*#volume.io.read.usage.bytespersecond  | B/s   |
| *ss*~*controllers*#volume.io.write.usage.bytespersecond | B/s   |
| *ss*~*controllers*#system.io.read.usage.iops            | iops  |
| *ss*~*controllers*#system.io.write.usage.iops           | iops  |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| pool-status                              | N/A   |
| *ss*~*pools*#pool.space.usage.bytes      | B     |
| *ss*~*pools*#pool.space.free.bytes       | B     |
| *ss*~*pools*#pool.space.usage.percentage | %     |

</TabItem>
<TabItem value="Storage-Systems" label="Storage-Systems">

| Nom                              | Unité |
|:---------------------------------|:------|
| status                           | N/A   |
| *ss*#pool.space.usage.bytes      | B     |
| *ss*#pool.space.free.bytes       | B     |
| *ss*#pool.space.usage.percentage | %     |

</TabItem>
<TabItem value="Storage-Volumes" label="Storage-Volumes">

| Nom                                                  | Unité |
|:-----------------------------------------------------|:------|
| volume-status                                        | N/A   |
| *ss*~*volumes1*#volume.io.read.usage.bytespersecond  | B/s   |
| *ss*~*volumes2*#volume.io.read.usage.bytespersecond  | B/s   |
| *ss*~*volumes1*#volume.io.write.usage.bytespersecond | B/s   |
| *ss*~*volumes2*#volume.io.write.usage.bytespersecond | B/s   |
| *ss*~*volumes1*#volume.io.read.usage.iops            | iops  |
| *ss*~*volumes2*#volume.io.read.usage.iops            | iops  |
| *ss*~*volumes1*#volume.io.write.usage.iops           | iops  |
| *ss*~*volumes2*#volume.io.write.usage.iops           | iops  |

</TabItem>
</Tabs>

## Prérequis

### Configuration de l'API SANtricity

Le Plugin Centreon *Netapp Santricity Restapi* s'appuie sur l'API Rest NetApp SANtricity fournie par la solution Web Services Proxy (WSP).
Celle-ci doit être préalablement installée et opérationnelle sur un serveur dédié (Windows/Linux) afin de pouvoir utiliser l'API Rest.
Les ressources ci-après décrivent les méthodes d'installation ainsi que le fonctionnement de l'API.

### Ressources en ligne

* Installation de SANtricity Web Services: https://library.netapp.com/ecm/ecm_download_file/ECMLP2846165
* Prise en main et exploitation de l'API Rest: https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-netapp-santricity-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-netapp-santricity-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-netapp-santricity-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-netapp-santricity-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **NetApp Santricity Restapi**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-netapp-santricity-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-NetApp-Santricity-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | Santricity API username                                                                                                                            |                   |      X      |
| APIPASSWORD     | Santricity API password                                                                                                                            |                   |      X      |
| APIPROTO        | Specify https if needed                                                                                                                            | http              |             |
| APIPORT         | Port used                                                                                                                                          | 8080              |             |
| APIPATH         | Specify api path                                                                                                                                   | /devmgr/v2        |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                                             | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check. Can be: 'storage', 'ctrl', 'battery', 'board', 'cbd', 'cmd', 'drive', 'psu', 'fan', 'thsensor'                                | .*                |             |
| FILTER       | Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='drive,010000005000C500C244251B0000000000000000' |                   |             |
| WARNING      | Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='drive.temperature,.*,40'                                    |                   |             |
| CRITICAL     | Set critical threshold for 'drive.temperature' (syntax: type,regexp,threshold) Example: --critical='drive.temperature,.*,50'                            |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).        |                   |             |

</TabItem>
<TabItem value="Storage-Controllers" label="Storage-Controllers">

| Macro                    | Description                                                                                                                                      | Valeur par défaut                     | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example: --filter-counters='controller-status'                                                  | .*                                    |             |
| FILTERSTORAGE            | Filter storage name (can be a regexp)                                                                                                            | .*                                    |             |
| FILTERCONTROLLER         | Filter controller name (can be a regexp)                                                                                                         | .*                                    |             |
| WARNINGCONTROLLERSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                      | %\{status\} =~ /rpaParErr\|degraded/i |             |
| CRITICALCONTROLLERSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}                     | %\{status\} =~ /failed/i              |             |
| WARNINGCPUUTILIZATION    | Threshold                                                                                                                                        |                                       |             |
| CRITICALCPUUTILIZATION   | Threshold                                                                                                                                        |                                       |             |
| WARNINGREAD              | Threshold                                                                                                                                        |                                       |             |
| CRITICALREAD             | Threshold                                                                                                                                        |                                       |             |
| WARNINGREADIOPS          | Threshold                                                                                                                                        |                                       |             |
| CRITICALREADIOPS         | Threshold                                                                                                                                        |                                       |             |
| WARNINGWRITE             | Threshold                                                                                                                                        |                                       |             |
| CRITICALWRITE            | Threshold                                                                                                                                        |                                       |             |
| WARNINGWRITEIOPS         | Threshold                                                                                                                                        |                                       |             |
| CRITICALWRITEIOPS        | Threshold                                                                                                                                        |                                       |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                       |             |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Macro              | Description                                                                                                                                      | Valeur par défaut                | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERCOUNTERS     | Only display some counters (regexp can be used). Example: --filter-counters='^pool-status$'                                                      | .*                               |             |
| FILTERSTORAGE      | Filter storage name (can be a regexp)                                                                                                            | .*                               |             |
| FILTERPOOL         | Filter pool name (can be a regexp)                                                                                                               | .*                               |             |
| WARNINGPOOLSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{raid\_status\}, %\{state\}, %\{display\}    | %\{raid\_status\} =~ /degraded/i |             |
| CRITICALPOOLSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{raid\_status\}, %\{state\}, %\{display\}   | %\{raid\_status\} =~ /failed/i   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                  |             |

</TabItem>
<TabItem value="Storage-Systems" label="Storage-Systems">

| Macro             | Description                                                                                                                                      | Valeur par défaut           | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERCOUNTERS    | Only display some counters (regexp can be used). Example: --filter-counters='status'                                                             | .*                          |             |
| FILTERSTORAGE     | Filter storage name (can be a regexp)                                                                                                            |                             |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}                     | %\{status\} =~ /needsAttn/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                      |                             |             |
| WARNINGUSAGE      | Threshold                                                                                                                                        |                             |             |
| CRITICALUSAGE     | Threshold                                                                                                                                        |                             |             |
| WARNINGUSAGEFREE  | Threshold                                                                                                                                        |                             |             |
| CRITICALUSAGEFREE | Threshold                                                                                                                                        |                             |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                                                                        |                             |             |
| CRITICALUSAGEPRCT | Threshold                                                                                                                                        |                             |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                             |             |

</TabItem>
<TabItem value="Storage-Volumes" label="Storage-Volumes">

| Macro                | Description                                                                                                                  | Valeur par défaut          | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| FILTERCOUNTERS       | Only display some counters (regexp can be used). Example: --filter-counters='volume-status'                                  | .*                         |             |
| FILTERSTORAGE        | Filter storage name (can be a regexp)                                                                                        | .*                         |             |
| FILTERVOLUME         | Filter volume name (can be a regexp)                                                                                         | .*                         |             |
| WARNINGREAD          | Threshold                                                                                                                    |                            |             |
| CRITICALREAD         | Threshold                                                                                                                    |                            |             |
| WARNINGREADIOPS      | Threshold                                                                                                                    |                            |             |
| CRITICALREADIOPS     | Threshold                                                                                                                    |                            |             |
| WARNINGVOLUMESTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}  | %\{status\} =~ /degraded/i |             |
| CRITICALVOLUMESTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\} | %\{status\} =~ /failed/i   |             |
| WARNINGWRITE         | Threshold                                                                                                                    |                            |             |
| CRITICALWRITE        | Threshold                                                                                                                    |                            |             |
| WARNINGWRITEIOPS     | Threshold                                                                                                                    |                            |             |
| CRITICALWRITEIOPS    | Threshold                                                                                                                    |                            |             |

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
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
	--plugin=storage::netapp::santricity::restapi::plugin \
	--mode=storage-volumes \
	--hostname=10.0.0.1 \
	--port='8080' \
	--proto='http' \
	--api-username='xxxx' \
	--api-password='xxxx' \
	--api-path='/devmgr/v2'   \
	--filter-counters='.*' \
	--filter-storage-name='.*' \
	--filter-volume-name='.*' \
	--warning-volume-status='%\{status\} =~ /degraded/i' \
	--critical-volume-status='%\{status\} =~ /failed/i' \
	--warning-read='' \
	--critical-read='' \
	--warning-write='' \
	--critical-write='' \
	--warning-read-iops='' \
	--critical-read-iops='' \
	--warning-write-iops='' \
	--critical-write-iops=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: volumes are ok | 'ss~volumes1#volume.io.read.usage.bytespersecond'=87557B/s;;;; 'ss~volumes2#volume.io.read.usage.bytespersecond'=49905B/s;;;; 'ss~volumes1#volume.io.write.usage.bytespersecond'=13740B/s;;;0; 'ss~volumes2#volume.io.write.usage.bytespersecond'=16146B/s;;;0; 'ss~volumes1#volume.io.read.usage.iops'=72629iops;;;0; 'ss~volumes2#volume.io.read.usage.iops'=93885iops;;;0; 'ss~volumes1#volume.io.write.usage.iops'=50248iops;;;0; 'ss~volumes2#volume.io.write.usage.iops'=69374iops;;;0; 
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
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
	--plugin=storage::netapp::santricity::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                     | Modèle de service associé                                       |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/santricity/restapi/mode/hardware.pm)]                      | HW-Storage-NetApp-Santricity-Hardware-Restapi-custom            |
| storage-controllers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/santricity/restapi/mode/storagecontrollers.pm)] | HW-Storage-NetApp-Santricity-Storage-Controllers-Restapi-custom |
| storage-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/santricity/restapi/mode/storagepools.pm)]             | HW-Storage-NetApp-Santricity-Storage-Pools-Restapi-custom       |
| storage-systems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/santricity/restapi/mode/storagesystems.pm)]         | HW-Storage-NetApp-Santricity-Storage-Systems-Restapi-custom     |
| storage-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/santricity/restapi/mode/storagevolumes.pm)]         | HW-Storage-NetApp-Santricity-Storage-Volumes-Restapi-custom     |

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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Santricity hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --port                                     |   Port used (default: 8080)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-username                             |   Santricity API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-password                             |   Santricity API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-path                                 |   Specify api path (default: '/devmgr/v2')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                              |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'storage', 'ctrl', 'battery', 'board', 'cbd', 'cmd', 'drive', 'psu', 'fan', 'thsensor'.                                                                              |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='drive,010000005000C500C244251B0000000000000000'                                                                |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.   |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                             |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='drive,OK,preFailCopy'    |
| --warning            |   Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='drive.temperature,.*,40'                                                                                                   |
| --critical           |   Set critical threshold for 'drive.temperature' (syntax: type,regexp,threshold) Example: --critical='drive.temperature,.*,50'                                                                                           |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                           |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                          |

</TabItem>
<TabItem value="Storage-Controllers" label="Storage-Controllers">

| Option                       | Description                                                                                                                                                                        |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters            |   Only display some counters (regexp can be used). Example: --filter-counters='controller-status'                                                                                  |
| --filter-storage-name        |   Filter storage name (can be a regexp).                                                                                                                                           |
| --filter-controller-name     |   Filter controller name (can be a regexp).                                                                                                                                        |
| --unknown-controller-status  |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}               |
| --warning-controller-status  |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /rpaParErr\|degraded/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --critical-controller-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /failed/i'). You can use the following variables: %\{status\}, %\{display\}               |
| --warning-* --critical-*     |   Thresholds. Can be: 'cpu-utilization' (%), 'read' (B/s), 'write' (B/s), 'read-iops', 'write-iops'.                                                                               |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Option                   | Description                                                                                                                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^pool-status$'                                                                                                   |
| --filter-storage-name    |   Filter storage name (can be a regexp).                                                                                                                                                        |
| --filter-pool-name       |   Filter pool name (can be a regexp).                                                                                                                                                           |
| --unknown-pool-status    |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{raid\_status\}, %\{state\}, %\{display\}                                                 |
| --warning-pool-status    |   Define the conditions to match for the status to be WARNING (default: '%\{raid\_status\} =~ /degraded/i'). You can use the following variables: %\{raid\_status\}, %\{state\}, %\{display\}   |
| --critical-pool-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{raid\_status\} =~ /failed/i'). You can use the following variables: %\{raid\_status\}, %\{state\}, %\{display\}    |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage-prct', 'space-usage', 'space-usage-free'.                                                                                                                    |

</TabItem>
<TabItem value="Storage-Systems" label="Storage-Systems">

| Option                   | Description                                                                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                    |
| --filter-storage-name    |   Filter storage name (can be a regexp).                                                                                                                                  |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{state\}, %\{display\}                                 |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                                             |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /needsAttn/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                                    |

</TabItem>
<TabItem value="Storage-Volumes" label="Storage-Volumes">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='volume-status'                                                                           |
| --filter-storage-name    |   Filter storage name (can be a regexp).                                                                                                                                |
| --filter-volume-name     |   Filter volume name (can be a regexp).                                                                                                                                 |
| --unknown-volume-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{display\}                                           |
| --warning-volume-status  |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --critical-volume-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /failed/i'). You can use the following variables: %\{status\}, %\{display\}    |
| --warning-* --critical-* |   Thresholds. Can be: 'read' (B/s), 'write' (B/s), 'read-iops', 'write-iops'.                                                                                           |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \
	--plugin=storage::netapp::santricity::restapi::plugin \
	--mode=storage-volumes \
	--help
```
