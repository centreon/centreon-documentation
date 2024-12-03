---
id: operatingsystems-windows-centreon-monitoring-agent
title: Windows Centreon Monitoring Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Pour le moment, ce connecteur de supervision est en version **BETA**.

Vous pouvez consulter [cette page](../getting-started/how-to-guides/cma.md) pour plus d'informations sur ce que permet 
Centreon Monitoring Agent.

## Contenu du pack

### Modèles

Le connecteur de supervision **Windows Centreon Monitoring Agent** apporte un modèle d'hôte :

* **OS-Windows-Centreon-Monitoring-Agent-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Windows-Centreon-Monitoring-Agent-custom" label="OS-Windows-Centreon-Monitoring-Agent-custom">

| Alias          | Modèle de service                                          | Description                                                                                                                                                               |
|:---------------|:-----------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CPU            | OS-Windows-CPU-Centreon-Monitoring-Agent-custom            | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Memory         | OS-Windows-Memory-Centreon-Monitoring-Agent-custom         | Contrôle le du taux d'utilisation de la mémoire                                                                                                                           |
| Ntp            | OS-Windows-Ntp-Centreon-Monitoring-Agent-custom            | Contrôle la synchronisation avec un serveur NTP                                                                                                                           |
| Pending-Reboot | OS-Windows-Pending-Reboot-Centreon-Monitoring-Agent-custom | Contrôle si Windows nécessite un redémarrage                                                                                                                              |
| Sessions       | OS-Windows-Sessions-Centreon-Monitoring-Agent-custom       | Contrôle le nombre de sessions actives                                                                                                                                    |
| Swap           | OS-Windows-Swap-Centreon-Monitoring-Agent-custom           | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                    |
| Updates        | OS-Windows-Updates-Centreon-Monitoring-Agent-custom        | Contrôle si des mises à jour sont en attente                                                                                                                              |
| Uptime         | OS-Windows-Uptime-Centreon-Monitoring-Agent-custom         | Contrôle la durée depuis laquelle le serveur tourne sans interruption                                                                                                     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-Centreon-Monitoring-Agent-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                                        | Description                                                                                                                                                               |
|:-------------|:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Certificates | OS-Windows-Certificates-Centreon-Monitoring-Agent-custom | Contrôle les certificats locaux                                                                                                                                           |
| CPU-detailed | OS-Windows-CPU-detailed-Centreon-Monitoring-Agent-custom | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Storage      | OS-Windows-Storage-Centreon-Monitoring-Agent-custom      | Contrôle du taux d'utilisation des disques                                                                                                                                |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| certificates.detected.count          | count |
| certificate#certificate.expires.days | d     |

</TabItem>
<TabItem value="CPU" label="CPU">

| Métrique | Unité |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Métrique | Unité |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique | Unité |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique    | Unité |
|:------------|:------|
| offset      | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

Pas de métrique pour ce service.

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
<TabItem value="Storage" label="Storage">

| Métrique | Unité |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique | Unité |
|:---------|:------|
|          |       |

</TabItem>
<TabItem value="Updates" label="Updates">

| Métrique                      | Unité |
|:------------------------------|:------|
| windows.pending.updates.count | count |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique | Unité |
|:---------|:------|
|          |       |

</TabItem>
</Tabs>

## Prérequis

### Flux réseau

Un flux TCP doit être ouvert depuis l'hôte supervisé vers le collecteur.

| Source         | Destination | Protocole | Port | Objet                                                                       |
|----------------|-------------|-----------|------|-----------------------------------------------------------------------------|
| Hôte supervisé | Collecteur  | TCP       | 4317 | Obtention de la configuration et envoi des données au format OpenTelemetry. |

### Prérequis système sur le collecteur

> Rappel: pour pouvoir utiliser l'agent **Centreon Monitoring Agent**, vous devez utiliser un collecteur ayant au
minimum la version `24.09.0` pour les utilisateurs de Centreon Cloud, et la version `24.04.6` ou `24.10.0` pour les utilisateurs On Prem de `centreon-engine`. L'agent devra se configurer en se connectant à Centreon Engine.

### Configuration de Centreon Engine

Référez-vous à [cette page](../getting-started/how-to-guides/cma.md#configurez-engine) pour la procédure de configuration de centreon-engine.

### Prérequis système sur l'hôte à superviser

L'installateur de Centreon Monitoring Agent pour Windows peut se télécharger à partir des [pages de release du projet
centreon-collect](https://github.com/centreon/centreon-collect/releases?q=centreon-collect&expanded=true).

#### Installation de Centreon Monitoring Agent

La procédure d'installation et de configuration de Centreon Monitoring Agent pour Windows est détaillée dans 
[la documentation dédiée à ce sujet](../getting-started/how-to-guides/cma.md#étape-2--préparez-lhôte).

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
dnf install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

> Aucune version de Centreon Engine supportée sur CentOS 7 n'est compatible avec Centreon Monitoring Agent.

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows Centreon Monitoring Agent**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

3. Créez le connecteur suivant :

Dans le menu **Configuration > Commandes > Connecteurs**, cliquez sur **Ajouter** puis saisissez les champs suivants :

| Paramètre                 | Valeur                                                                                                                                                                                        |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nom du connecteur         | Centreon Monitoring Agent                                                                                                                                                                     |
| Description du connecteur | Centreon Monitoring Agent                                                                                                                                                                     |
| Ligne de commande         | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Utilisé par la commande   | Selectionner toutes les commandes dont le nom correspond à `OS-Windows-Centreon-Monitoring-Agent-*`                                                                                           |
| Statut du connecteur      | Activé                                                                                                                                                                                        |

### Plugin

Ce connecteur de supervision s'appuie sur une intégration prise en charge par Centreon Engine et ne requiert pas de plugin.

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-Centreon-Monitoring-Agent-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                              | Valeur par défaut                   | Obligatoire |
|:---------------------|:---------------------------------------------------------|:------------------------------------|:-----------:|
| SYSTEMLANGUAGE       | Language installed on the Windows system.                | en                                  |             |
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found. | `C:/Program Files/Centreon/Plugins` |      X      |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Macro                        | Description                                                                                                                                                 | Valeur par défaut | Obligatoire |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSUBJECT                | Filter certificate by subject (can be a regexp).                                                                                                            |                   |             |
| FILTERTHUMBPRINT             | Filter certificate by thumbprint (can be a regexp).                                                                                                         |                   |             |
| FILTERPATH                   | Filter certificate by path (can be a regexp).                                                                                                               |                   |             |
| THRESHOLDSUNIT               | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. | d                 |             |
| WARNINGCERTIFICATEEXPIRES    | Thresholds.                                                                                                                                                 | 60:               |             |
| CRITICALCERTIFICATEEXPIRES   | Thresholds.                                                                                                                                                 | 30:               |             |
| WARNINGCERTIFICATESDETECTED  | Thresholds.                                                                                                                                                 |                   |             |
| CRITICALCERTIFICATESDETECTED | Thresholds.                                                                                                                                                 |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                    |                   |             |

</TabItem>
<TabItem value="CPU" label="CPU">

| Macro           | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCORE     | Threshold for warning status on core usage in percentage                                                                                 |                   |             |
| CRITICALCORE    | Threshold for critical status on core usage in percentage                                                                                |                   |             |
| WARNINGAVERAGE  | Threshold for warning status on average usage in percentage                                                                              |                   |             |
| CRITICALAVERAGE | Threshold for critical status on average usage in percentage                                                                             |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Macro                 | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCORE           | Threshold for warning status on core usage in percentage                                                                                 |                   |             |
| CRITICALCORE          | Threshold for critical status on core usage in percentage                                                                                |                   |             |
| WARNINGAVERAGE        | Threshold for warning status on average usage in percentage                                                                              |                   |             |
| CRITICALAVERAGE       | Threshold for critical status on average usage in percentage                                                                             |                   |             |
| WARNINGCOREUSER       | Threshold for warning status on core user usage in percentage                                                                            |                   |             |
| CRITICALCOREUSER      | Threshold for critical status on core user usage in percentage                                                                           |                   |             |
| WARNINGAVERAGEUSER    | Threshold for warning status on average user usage in percentage                                                                         |                   |             |
| CRITICALAVERAGEUSER   | Threshold for critical status on average user usage in percentage                                                                        |                   |             |
| WARNINGCORESYSTEM     | Threshold for warning status on core system usage in percentage                                                                          |                   |             |
| CRITICALCORESYSTEM    | Threshold for critical status on core system usage in percentage                                                                         |                   |             |
| WARNINGAVERAGESYSTEM  | Threshold for warning status on average system usage in percentage                                                                       |                   |             |
| CRITICALAVERAGESYSTEM | Threshold for critical status on average system usage in percentage                                                                      |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                 | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE          | Threshold for warning status on physical memory usage in bytes                                                                           |                   |             |
| CRITICALUSAGE         | Threshold for critical status on physical memory usage in bytes                                                                          |                   |             |
| WARNINGUSAGEFREE      | Threshold for warning status on free physical memory in bytes                                                                            |                   |             |
| CRITICALUSAGEFREE     | Threshold for critical status on free physical memory in bytes                                                                           |                   |             |
| WARNINGUSAGEPRCT      | Threshold for warning status on physical memory usage in percentage                                                                      |                   |             |
| CRITICALUSAGEPRCT     | Threshold for critical status on physical memory usage in percentage                                                                     |                   |             |
| WARNINGUSAGEFREEPRCT  | Threshold for warning status on free physical memory in percentage                                                                       |                   |             |
| CRITICALUSAGEFREEPRCT | Threshold for critical status on free physical memory in percentage                                                                      |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro          | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPHOSTNAME    | Set the NTP server to use (if not set, we try to find it with w32tm command).                                                            |                   |             |
| NTPPORT        | Set the NTP port (default: 123).                                                                                                         |                   |             |
| WARNINGOFFSET  | Thresholds.                                                                                                                              | -1:1              |             |
| CRITICALOFFSET | Thresholds.                                                                                                                              | -2:2              |             |
| TIMEOUT        | Set timeout time for 'w32tm' command execution (default: 30 sec).                                                                        | 10                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Valeur par défaut             | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename} | `%{RebootPending} =~ /true/i` |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}                           |                               |             |
| TIMEOUT        | Set timeout time for command execution                                                                                                                                                                                                | 10                            |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                 |                               |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                               | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSESSIONNAME                   | Filter session name (can be a regexp).                                                                                                               |                   |             |
| CONFIG                              | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE               | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSACTIVE              | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSCREATED              | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSCREATED             | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSDISCONNECTED         | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSDISCONNECTED        | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSRECONNECTED          | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSRECONNECTED         | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSDISCONNECTEDCURRENT  | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSDISCONNECTEDCURRENT | Thresholds.                                                                                                                                          |                   |             |
| TIMEOUT                             | Timeout in seconds for the command                                                                                                   | 10                |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)             |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro             | Description                                                                                                                                                                                                                                                                                    | Valeur par défaut | Obligatoire |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING           | Thresholds                                                                                                                                                                                                                                                                                     |                   |             |
| CRITICAL          | Thresholds                                                                                                                                                                                                                                                                                     |                   |             |
| FILTERSTORAGETYPE | Case insensitive regex to filter storage type it includes drive type (fixed, network...). Types recognized by agent: hrunknown, hrstoragefixeddisk, hrstorageremovabledisk, hrstoragecompactdisc, hrstorageramdisk, hrstoragenetworkdisk, hrfsunknown, hrfsfat, hrfsntfs, hrfsfat32, hrfsexfat |                   |             |
| FILTERFS          | Case insensitive regex to filter filesystem. Example: [C-D]:\\.*                                                                                                                                                                                                                               |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                       |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro                | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSWAP          | Threshold for warning status on swap memory usage in bytes                                                                               |                   |             |
| CRITICALSWAP         | Threshold for critical status on swap memory usage in bytes                                                                              |                   |             |
| WARNINGSWAPFREE      | Threshold for warning status on free swap memory in bytes                                                                                |                   |             |
| CRITICALSWAPFREE     | Threshold for critical status on free swap memory in bytes                                                                               |                   |             |
| WARNINGSWAPPRCT      | Threshold for warning status on swap memory usage in percentage                                                                          |                   |             |
| CRITICALSWAPPRCT     | Threshold for critical status on swap memory usage in percentage                                                                         |                   |             |
| WARNINGSWAPFREEPRCT  | Threshold for warning status on free swap memory in percentage                                                                           |                   |             |
| CRITICALSWAPFREEPRCT | Threshold for critical status on free swap memory in percentage                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                                                              | Valeur par défaut  | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGPENDINGUPDATES  | Thresholds                                                                                                                               | 1                  |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                                                               |                    |             |
| TIMEOUT                | Set timeout time for command execution.                                                                                | 30                 |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --filter-mandatory |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro           | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUPTIME   | Warning threshold, if computer has been up for less than this time, service will be in warning state                                     |                   |             |
| CRITICALUPTIME  | Critical threshold                                                                                                                       |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Vous pouvez tester que le plugin parvient bien à superviser votre serveur Windows en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```cmd
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin os::windows::local::plugin --mode sessions --language='fr' --timeout='30' --use-new-perfdata
```

> NB : Cette commande ne peut pas s'exécuter sur les collecteurs, il faut la lancer directement sur le serveur Windows.

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Sessions created: 0, disconnected: 0, reconnected : 0, current active : 1, current disconnected : 1 | 'sessions.created.total.count'=0;;;0; 'sessions.disconnected.total.count'=0;;;0; 'sessions.reconnected.total.count'=0;;;0; 'sessions.active.current.count'=1;;;0; 'sessions.disconnected.current.count'=1;;;0;
```

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Le plugin apporte les modes suivants :

| Mode                                                                                                                          | Modèle de service associé                                  |
|:------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]    | OS-Windows-Certificates-Centreon-Monitoring-Agent-custom   |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)] | OS-Windows-Pending-Reboot-Centreon-Monitoring-Agent-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]            | OS-Windows-Sessions-Centreon-Monitoring-Agent-custom       |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                     | OS-Windows-Ntp-Centreon-Monitoring-Agent-custom            |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]              | OS-Windows-Updates-Centreon-Monitoring-Agent-custom        |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Option                           | Description                                                                                                                                                 |
|:---------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-thumbprint              | Filter certificate by thumbprint (can be a regexp).                                                                                                         |
| --filter-subject                 | Filter certificate by subject (can be a regexp).                                                                                                            |
| --filter-path                    | Filter certificate by path (can be a regexp).                                                                                                               |
| --unit                           | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |
| --warning-certificates-detected  | Thresholds.                                                                                                                                                 |
| --critical-certificates-detected | Thresholds.                                                                                                                                                 |
| --warning-certificate-expires    | Thresholds.                                                                                                                                                 |
| --critical-certificate-expires   | Thresholds.                                                                                                                                                 |
| --no-ps                          | Don't encode powershell. To be used with --command and 'type' command.                                                                                      |
| --command                        | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                      |
| --command-path                   | Command path (default: none).                                                                                                                               |
| --command-options                | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                     |
| --ps-display                     | Display powershell script.                                                                                                                                  |
| --ps-exec-only                   | Print powershell output.                                                                                                                                    |

</TabItem>
<TabItem value="CPU" label="CPU">

| Option                            | Description                                                                        |
|:----------------------------------|:-----------------------------------------------------------------------------------|
| --use-nt-query-system-information | (default true): true: use NtQuerySystemInformation instead of performance counters |
| --cpu-detailed                    | (default false): true: add detailed cpu usage metrics                              |
| --warning-core                    | Threshold for warning status on core usage in percentage                           |
| --critical-core                   | Threshold for critical status on core usage in percentage                          |
| --warning-average                 | Threshold for warning status on average usage in percentage                        |
| --critical-average                | Threshold for critical status on average usage in percentage                       |
| --warning-core-user               | Threshold for warning status on core user usage in percentage                      |
| --critical-core-user              | Threshold for critical status on core user usage in percentage                     |
| --warning-average-user            | Threshold for warning status on average user usage in percentage                   |
| --critical-average-user           | Threshold for critical status on average user usage in percentage                  |
| --warning-core-system             | Threshold for warning status on core system usage in percentage                    |
| --critical-core-system            | Threshold for critical status on core system usage in percentage                   |
| --warning-average-system          | Threshold for warning status on average system usage in percentage                 |
| --critical-average-system         | Threshold for critical status on average system usage in percentage                |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Option                            | Description                                                                        |
|:----------------------------------|:-----------------------------------------------------------------------------------|
| --use-nt-query-system-information | (default true): true: use NtQuerySystemInformation instead of performance counters |
| --cpu-detailed                    | (default false): true: add detailed cpu usage metrics                              |
| --warning-core                    | Threshold for warning status on core usage in percentage                           |
| --critical-core                   | Threshold for critical status on core usage in percentage                          |
| --warning-average                 | Threshold for warning status on average usage in percentage                        |
| --critical-average                | Threshold for critical status on average usage in percentage                       |
| --warning-core-user               | Threshold for warning status on core user usage in percentage                      |
| --critical-core-user              | Threshold for critical status on core user usage in percentage                     |
| --warning-average-user            | Threshold for warning status on average user usage in percentage                   |
| --critical-average-user           | Threshold for critical status on average user usage in percentage                  |
| --warning-core-system             | Threshold for warning status on core system usage in percentage                    |
| --critical-core-system            | Threshold for critical status on core system usage in percentage                   |
| --warning-average-system          | Threshold for warning status on average system usage in percentage                 |
| --critical-average-system         | Threshold for critical status on average system usage in percentage                |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                       | Description                                                          |
|:-----------------------------|:---------------------------------------------------------------------|
| --swap                       | (default false): true: add swap to output                            |
| --virtual                    | (default false): true: add virtual memory to output                  |
| --warning-usage              | Threshold for warning status on physical memory usage in bytes       |
| --critical-usage             | Threshold for critical status on physical memory usage in bytes      |
| --warning-usage-free         | Threshold for warning status on free physical memory in bytes        |
| --critical-usage-free        | Threshold for critical status on free physical memory in bytes       |
| --warning-usage-prct         | Threshold for warning status on physical memory usage in percentage  |
| --critical-usage-prct        | Threshold for critical status on physical memory usage in percentage |
| --warning-usage-free-prct    | Threshold for warning status on free physical memory in percentage   |
| --critical-usage-free-prct   | Threshold for critical status on free physical memory in percentage  |
| --warning-swap               | Threshold for warning status on swap usage in bytes                  |
| --critical-swap              | Threshold for critical status on swap usage in bytes                 |
| --warning-swap-free          | Threshold for warning status on free swap in bytes                   |
| --critical-swap-free         | Threshold for critical status on free swap in bytes                  |
| --warning-swap-prct          | Threshold for warning status on swap usage in percentage             |
| --critical-swap-prct         | Threshold for critical status on swap usage in percentage            |
| --warning-swap-free-prct     | Threshold for warning status on free swap in percentage              |
| --critical-swap-free-prct    | Threshold for critical status on free swap in percentage             |
| --warning-virtual            | Threshold for warning status on virtual memory usage in bytes        |
| --critical-virtual           | Threshold for critical status on virtual memory usage in bytes       |
| --warning-virtual-free       | Threshold for warning status on free virtual memory in bytes         |
| --critical-virtual-free      | Threshold for critical status on free virtual memory in bytes        |
| --warning-virtual-prct       | Threshold for warning status on virtual memory usage in percentage   |
| --critical-virtual-prct      | Threshold for critical status on virtual memory usage in percentage  |
| --warning-virtual-free-prct  | Threshold for warning status on free virtual memory in percentage    |
| --critical-virtual-free-prct | Threshold for critical status on free virtual memory in percentage   |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option         | Description                                                                |
|:---------------|:---------------------------------------------------------------------------|
| --warning      | Warning threshold.                                                         |
| --critical     | Critical threshold.                                                        |
| --ntp-hostname | Set the ntp hostname (if not set, we try to find it with w32tm command).   |
| --ntp-port     | Set the ntp port (Default: 123).                                           |
| --timeout      | Set timeout time for 'w32tm' command execution (Default: 30 sec)           |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                               |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (Default: 50 sec)                                                                                                                                                                                                  |
| --no-ps           | Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                                    |
| --command         | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                    |
| --command-path    | Command path (Default: none).                                                                                                                                                                                                                             |
| --command-options | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                   |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                  |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}. |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.                           |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                | Description                                                                                                                                                                                                                                                                                    |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unit                | (default %): unit of threshold. If different from % threshold are in bytes                                                                                                                                                                                                                     |
| --free                | (default used): true: threshold is applied on free space and service become warning if free sapce is lower than threshold. false: threshold is applied on used space and service become warning if used space is higher than threshold                                                         |
| --warning             | warning threshold                                                                                                                                                                                                                                                                              |
| --critical            | critical threshold                                                                                                                                                                                                                                                                             |
| --filter-storage-type | Case insensitive regex to filter storage type it includes drive type (fixed, network...). Types recognized by agent: hrunknown, hrstoragefixeddisk, hrstorageremovabledisk, hrstoragecompactdisc, hrstorageramdisk, hrstoragenetworkdisk, hrfsunknown, hrfsfat, hrfsntfs, hrfsfat32, hrfsexfat |
| --filter-fs           | Regex to filter filesystem. Example: [C-D]:\\.*                                                                                                                                                                                                                                                                   |
| --exclude-fs          | Regex to exclude filesystem                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                       | Description                                                          |
|:-----------------------------|:---------------------------------------------------------------------|
| --swap                       | (default false): true: add swap to output                            |
| --virtual                    | (default false): true: add virtual memory to output                  |
| --warning-usage              | Threshold for warning status on physical memory usage in bytes       |
| --critical-usage             | Threshold for critical status on physical memory usage in bytes      |
| --warning-usage-free         | Threshold for warning status on free physical memory in bytes        |
| --critical-usage-free        | Threshold for critical status on free physical memory in bytes       |
| --warning-usage-prct         | Threshold for warning status on physical memory usage in percentage  |
| --critical-usage-prct        | Threshold for critical status on physical memory usage in percentage |
| --warning-usage-free-prct    | Threshold for warning status on free physical memory in percentage   |
| --critical-usage-free-prct   | Threshold for critical status on free physical memory in percentage  |
| --warning-swap               | Threshold for warning status on swap usage in bytes                  |
| --critical-swap              | Threshold for critical status on swap usage in bytes                 |
| --warning-swap-free          | Threshold for warning status on free swap in bytes                   |
| --critical-swap-free         | Threshold for critical status on free swap in bytes                  |
| --warning-swap-prct          | Threshold for warning status on swap usage in percentage             |
| --critical-swap-prct         | Threshold for critical status on swap usage in percentage            |
| --warning-swap-free-prct     | Threshold for warning status on free swap in percentage              |
| --critical-swap-free-prct    | Threshold for critical status on free swap in percentage             |
| --warning-virtual            | Threshold for warning status on virtual memory usage in bytes        |
| --critical-virtual           | Threshold for critical status on virtual memory usage in bytes       |
| --warning-virtual-free       | Threshold for warning status on free virtual memory in bytes         |
| --critical-virtual-free      | Threshold for critical status on free virtual memory in bytes        |
| --warning-virtual-prct       | Threshold for warning status on virtual memory usage in percentage   |
| --critical-virtual-prct      | Threshold for critical status on virtual memory usage in percentage  |
| --warning-virtual-free-prct  | Threshold for warning status on free virtual memory in percentage    |
| --critical-virtual-free-prct | Threshold for critical status on free virtual memory in percentage   |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                                                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (Default: 50 sec)                                                                                 |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command                | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path           | Command path (Default: none).                                                                                                            |
| --command-options        | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display             | Display powershell script.                                                                                                               |
| --ps-exec-only           | Print powershell output.                                                                                                                 |
| --filter-title           | Filter windows updates by title (can be a regexp).                                                                                       |
| --exclude-title          | Exclude windows updates by title (regexp can be used).                                                                                   |
| --display-updates        | Display updates in verbose output.                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                                                                                                   |

</TabItem>
<TabItem value="Uptime" label="Uptime>

| Option             | Description                                                                                          |
|:-------------------|:-----------------------------------------------------------------------------------------------------|
| --unit             | (defaults s): can be s, second, m, minute, h, hour, d, day, w, week                                  |
| --warning-uptime   | warning threshold, if computer has been up for less than this time, service will be in warning state |
| --critical-uptime  | critical threshold                                                                                   |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin=os::windows::local::plugin --mode=certificates --help
```
