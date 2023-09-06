---
id: operatingsystems-windows-wsman
title: Windows WSMAN
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Windows WSMAN** apporte un modèle d'hôte :

* **OS-Windows-WSMAN-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Windows-WSMAN-custom" label="OS-Windows-WSMAN-custom">

| Alias         | Modèle de service                     | Description                                                                                                                                                                  |
|:--------------|:--------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Windows-Cpu-WSMAN-custom           | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Memory        | OS-Windows-Memory-WSMAN-custom        | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                            |
| Services-Auto | OS-Windows-Services-Auto-WSMAN-custom | Contrôle permettant de vérifier si les services Windows sont démarrés                                                                                                        |
| Swap          | OS-Windows-Swap-WSMAN-custom          | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                       |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-WSMAN-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias              | Modèle de service                          | Description                                                                                                                                                 | Découverte |
|:-------------------|:-------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Disk-Global        | OS-Windows-Disk-Global-WSMAN-custom        | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le nom du disque                                                      | X          |
| Files-Date-Generic | OS-Windows-Files-Date-Generic-WSMAN-custom | Contrôle le temps                                                                                                                                           |            |
| Files-Size-Generic | OS-Windows-Files-Size-Generic-WSMAN-custom | Contrôle la taille des fichiers                                                                                                                             |            |
| Ntp                | OS-Windows-Ntp-WSMAN-custom                | Contrôle la synchronisation avec un serveur NTP                                                                                                             |            |
| Pending-Reboot     | OS-Windows-Pending-Reboot-WSMAN-custom     | Contrôle si Windows nécessite un redémarrage                                                                                                                |            |
| Process-Global     | OS-Windows-Process-Global-WSMAN-custom     | Contrôle permettant de vérifier que les processus Windows sont démarrés                                                                                     | X          |
| Service-Generic    | OS-Windows-Service-Generic-WSMAN-custom    | Contrôle permettant de vérifier si les services Windows sont démarrés                                                                                       | X          |
| Sessions           | OS-Windows-Sessions-WSMAN-custom           | Contrôle les sessions utilisateurs Windows                                                                                                                  |            |
| Traffic-Global     | OS-Windows-Traffic-Global-WSMAN-custom     | Contrôle de la bande passante de l'interface. Pour chaque contrôle apparaîtra le nom de l'interface                                                         | X          |
| Updates            | OS-Windows-Updates-WSMAN-custom            | Contrôle si Windows a des mises à jour en attente                                                                                                           |            |
| Uptime             | OS-Windows-Uptime-WSMAN-custom             | Contrôle permettant de vérifier la disponibilité du serveur Windows depuis le dernier redémarrage. Il s'agit d'une indication, il n'y a pas de seuil défini |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                 | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| OS-Windows-WSMAN-Disk-Name      | Discover the disk partitions and monitor space occupation     |
| OS-Windows-WSMAN-Processes-Name | Discover processes and monitor their system usage             |
| OS-Windows-WSMAN-Services-Name  | Discover services and monitor their system usage              |
| OS-Windows-WSMAN-Traffic-Name   | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| storages.detected.count                   | count |
| *storages*#storage.space.usage.bytes      | B     |
| *storages*#storage.space.free.bytes       | B     |
| *storages*#storage.space.usage.percentage | %     |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Métrique         | Unité |
|:-----------------|:------|
| file.size.bytes  | B     |
| files.size.bytes | B     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique            | Unité |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Métrique                 | Unité |
|:-------------------------|:------|
| processes.detected.count | count |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

Coming soon

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

Coming soon

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Métrique                            | Unité |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique                            | Unité |
|:------------------------------------|:------|
| *files*#page.space.usage.bytes      | B     |
| *files*#page.space.free.bytes       | B     |
| *files*#page.space.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| *interfaces*#interface.traffic.in.bitspersecond       | b/s   |
| *interfaces*#interface.traffic.out.bitspersecond      | b/s   |
| *interfaces*#interface.packets.in.discard.percentage  | %     |
| *interfaces*#interface.packets.in.error.percentage    | %     |
| *interfaces*#interface.packets.out.discard.percentage | %     |
| *interfaces*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Updates" label="Updates">

| Métrique                      | Unité |
|:------------------------------|:------|
| windows.pending.updates.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Pour superviser les serveurs Windows via WSMAN, merci de suivre notre [documentation officielle](../getting-started/how-to-guides/windows-winrm-wsman-tutorial.md) et de vous assurer que WinRM et vos droits sont correctement configurés.

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
dnf install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-wsman
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows WSMAN**
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
dnf install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-windows-wsman
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Wsman
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-WSMAN-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                           | Valeur par défaut | Obligatoire |
|:------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WSMANUSERNAME     | Define the username for authentication                                                                |                   |             |
| WSMANPASSWORD     | Define the password associated with the user name                                                     |                   |             |
| WSMANPROTO        | Define the transport scheme (default: 'http')                                                         | http              |             |
| WSMANPORT         | Define the port to connect to (default: 5985)                                                         | 5985              |             |
| WSMANEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                           | 80                |             |
| CRITICALAVERAGE | Critical threshold average CPU utilization                                                          | 90                |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                                |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORAGE       | Filter storages by name (can be a regexp)                                                           |                   |             |
| WARNINGUSAGE  | Thresholds                                                                                          | 80                |             |
| CRITICALUSAGE | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Macro          | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FOLDER         | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'                            |                   | X           |
| FILTERFILENAME | Filter files by name                                                                                |                   |             |
| WARNING        | Warning threshold in seconds for each files (diff time)                                             |                   |             |
| CRITICAL       | Critical threshold in seconds for each files (diff time)                                            |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Macro          | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FOLDER         | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'                            |                   | X           |
| FILTERFILENAME | Filter files by name                                                                                |                   |             |
| WARNINGONE     | Warning threshold in bytes for each files/directories                                               |                   |             |
| CRITICALONE    | Critical threshold in bytes for each files/directories                                              |                   |             |
| WARNINGTOTAL   | Warning threshold in bytes for all files/directories                                                |                   |             |
| CRITICALTOTAL  | Critical threshold in bytes for all files/directories                                               |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEPRCT  | Thresholds                                                                                          | 80                |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPADDR      | Set the ntp hostname (if not set, localtime is used)                                                            |                   |             |
| NTPPORT      | Set the ntp port (Default: 123)                                                                                 |                   |             |
| TIMEZONE     | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100' |                   |             |
| WARNING      | Time offset warning threshold (in seconds)                                                                      | -1:1              |             |
| CRITICAL     | Time offset critical Threshold (in seconds)                                                                     | -2:2              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)             |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Valeur par défaut           | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename} | %{RebootPending} =~ /true/i |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}                           |                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                      |                             |             |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME   | Filter process name                                                                                 |                   |             |
| CRITICALCOUNT | Critical threshold of matching processes detected                                                   | 1:                |             |
| WARNINGCOUNT  | Warning threshold of matching processes detected                                                    |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Macro        | Description                                                                                                                                                                                         | Valeur par défaut    | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| SERVICENAME  | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown | SERVICE!=Running     | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                 | --critical --verbose |             |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXCLUDE      | Exclude some services for --auto option (Can be a regexp)                                           |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LANGUAGE                     | Set the language used in config file (default: 'en')                                                                                             | en                |             |
| FILTERSESSIONNAME            | Filter session name (can be a regexp)                                                                                                            |                   |             |
| CONFIG                       | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE        | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSACTIVE       | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSCREATED       | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSCREATED      | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSDISCONNECTED  | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSDISCONNECTED | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSRECONNECTED   | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSRECONNECTED  | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                              |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICALPRCT | Thresholds                                                                                          | 20                |             |
| WARNINGPRCT  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Filter interface name (regexp can be used)                                                          | .*                |             |
| WARNINGIN    | Thresholds                                                                                          | 80                |             |
| CRITICALIN   | Thresholds                                                                                          | 90                |             |
| WARNINGOUT   | Thresholds                                                                                          | 80                |             |
| CRITICALOUT  | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                         | Valeur par défaut           | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERTITLE            | Filter windows updates by title (can be a regexp)                                                   |                             |             |
| EXCLUDETITLE           | Exclude windows updates by title (regexp can be used)                                               |                             |             |
| FILTERMANDATORY        |                                                                                                     |                             |             |
| WARNINGPENDINGUPDATES  | Thresholds                                                                                          |                             |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                          |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --display-updates |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib/centreon/plugins/centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--mode=updates \
	--hostname='10.0.0.1' \
	--wsman-scheme=http \
	--wsman-port=5985 \
	--wsman-username='' \
	--wsman-password=''  \
	--filter-title='' \
	--exclude-title='' \
	--filter-mandatory='' \
	--warning-pending-updates='' \
	--critical-pending-updates='' \
	--verbose \
	--display-updates
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: windows pending updates: 60 | 'windows.pending.updates.count'=60;;;0; 
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
/usr/lib/centreon/plugins/centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                            | Modèle de service associé                                                          |
|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/cpu.pm)]                        | OS-Windows-Cpu-WSMAN-custom                                                        |
| eventlog [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/eventlog.pm)]              | Not used in this Monitoring Connector                                              |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/filesdate.pm)]           | OS-Windows-Files-Date-Generic-WSMAN-custom                                         |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/filessize.pm)]           | OS-Windows-Files-Size-Generic-WSMAN-custom                                         |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/interfaces.pm)]          | OS-Windows-Traffic-Global-WSMAN-custom                                             |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/listinterfaces.pm)] | Used for service discovery                                                         |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/listprocesses.pm)]   | Used for service discovery                                                         |
| list-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/listservices.pm)]     | Used for service discovery                                                         |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/liststorages.pm)]     | Used for service discovery                                                         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/memory.pm)]                  | OS-Windows-Memory-WSMAN-custom                                                     |
| pages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/pages.pm)]                    | OS-Windows-Swap-WSMAN-custom                                                       |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/pendingreboot.pm)]   | OS-Windows-Pending-Reboot-WSMAN-custom                                             |
| processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/processes.pm)]            | OS-Windows-Process-Global-WSMAN-custom                                             |
| services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/services.pm)]              | OS-Windows-Service-Generic-WSMAN-custom<br />OS-Windows-Services-Auto-WSMAN-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/sessions.pm)]              | OS-Windows-Sessions-WSMAN-custom                                                   |
| storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/storages.pm)]              | OS-Windows-Disk-Global-WSMAN-custom                                                |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/time.pm)]                      | OS-Windows-Ntp-WSMAN-custom                                                        |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/updates.pm)]                | OS-Windows-Updates-WSMAN-custom                                                    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/wsman/mode/uptime.pm)]                  | OS-Windows-Uptime-WSMAN-custom                                                     |

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
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Need at least openwsman-perl version \>= 2.4.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --hostname                                 | Define the hostname to query (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --wsman-port                               | Define the port to connect to (default: 5985).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --wsman-path                               | Define the path of the WSMAN URL if it has been customized (default: '/wsman').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --wsman-scheme                             | Define the transport scheme (default: 'http').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --wsman-username                           | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --wsman-password                           | Define the password associated with the user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --wsman-timeout                            | Define the HTTP transport timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --wsman-auth-method                        | Define the authentication method. Available methods: noauth, basic (default), pass, digest, ntlm, gssnegotiate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --wsman-proxy-url                          | Define the URL of the HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --wsman-proxy-username                     | Define the user name to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --wsman-proxy-password                     | Define the password to authenticate to the proxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --wsman-debug                              | Define the openwsman log level. Available levels: error, critical, warning, message, info (default), debug.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --wsman-errors-exit                        | Define the expected exit code when wsman errors occur (default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-average      | Warning threshold average CPU utilization.                                                                                                                                                                                                    |
| --critical-average     | Critical threshold average CPU utilization.                                                                                                                                                                                                   |
| --warning-core         | Warning thresholds for each CPU core                                                                                                                                                                                                          |
| --critical-core        | Critical thresholds for each CPU core                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Option                   | Description                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------|
| --filter-name            | Filter storages by name (can be a regexp).                                            |
| --filter-type            | Filter storages by type (can be a regexp) (Default: 'localDisk').                     |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct'.    |

</TabItem>
<TabItem value="Files-Date-Generic" label="Files-Date-Generic">

| Option            | Description                                                                 |
|:------------------|:----------------------------------------------------------------------------|
| --folder          | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'.   |
| --filter-filename | Filter files by name.                                                       |
| --warning         | Warning threshold in seconds for each files (diff time).                    |
| --critical        | Critical threshold in seconds for each files (diff time).                   |

</TabItem>
<TabItem value="Files-Size-Generic" label="Files-Size-Generic">

| Option            | Description                                                                 |
|:------------------|:----------------------------------------------------------------------------|
| --folder          | Folder to check. (No WQL wildcard allowed) Ex: 'C:/Users/Administrator/'.   |
| --filter-filename | Filter files by name.                                                       |
| --warning-one     | Warning threshold in bytes for each files/directories.                      |
| --critical-one    | Critical threshold in bytes for each files/directories.                     |
| --warning-total   | Warning threshold in bytes for all files/directories.                       |
| --critical-total  | Critical threshold in bytes for all files/directories.                      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                         |
|:-------------------------|:--------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct'.    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option            | Description                                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------|
| --warning-offset  | Time offset warning threshold (in seconds).                                                                         |
| --critical-offset | Time offset critical Threshold (in seconds).                                                                        |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).                                                               |
| --ntp-port        | Set the ntp port (Default: 123).                                                                                    |
| --timezone        | Set the timezone of distant server. For Windows, you need to set it. Can use format: 'Europe/London' or '+0100'.    |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                                 |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                  |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                    |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.                             |

</TabItem>
<TabItem value="Process-Global" label="Process-Global">

| Option           | Description                                                                       |
|:-----------------|:----------------------------------------------------------------------------------|
| --process-status | Filter process status. Can be a regexp. (Default: 'running').                     |
| --process-name   | Filter process name.                                                              |
| --regexp-name    | Allows to use WQL wildcard to filter process name (with option --process-name).   |
| --warning        | Warning threshold of matching processes detected.                                 |
| --critical       | Critical threshold of matching processes detected.                                |

</TabItem>
<TabItem value="Service-Generic" label="Service-Generic">

| Option     | Description                                                                                                                                                                                           |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning  | Return warning.                                                                                                                                                                                       |
| --critical | Return critical.                                                                                                                                                                                      |
| --services | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown   |
| --auto     | Return threshold for auto services not running.                                                                                                                                                       |
| --exclude  | Exclude some services for --auto option (Can be a regexp).                                                                                                                                            |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Option     | Description                                                                                                                                                                                           |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning  | Return warning.                                                                                                                                                                                       |
| --critical | Return critical.                                                                                                                                                                                      |
| --services | Services to monitor. Syntax: \[service\_name\[\[=\|!=\]state\]\],... Available states are: - Stopped - Start Pending - Stop Pending - Running - Continue Pending - Pause Pending - Paused - Unknown   |
| --auto     | Return threshold for auto services not running.                                                                                                                                                       |
| --exclude  | Exclude some services for --auto option (Can be a regexp).                                                                                                                                            |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct'.    |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard',                                                                                                                                        |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                         |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                        |
| --filter-interface       | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface      | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --speed                  | Set interface speed (in Mb).                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                              |
|:-------------------------|:---------------------------------------------------------|
| --ps-display             | Display powershell script.                               |
| --ps-exec-only           | Print powershell output.                                 |
| --filter-title           | Filter windows updates by title (can be a regexp).       |
| --exclude-title          | Exclude windows updates by title (regexp can be used).   |
| --display-updates        | Display updates in verbose output.                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-uptime  | Warning threshold.                                                                                                                                             |
| --critical-uptime | Critical threshold.                                                                                                                                            |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_windows_wsman.pl \
	--plugin=os::windows::wsman::plugin \
	--mode=updates \
	--help
```
