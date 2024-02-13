---
id: applications-monitoring-centreon-map-engine-actuator
title: Centreon Map Engine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Map Engine est l'un des composants de [Centreon Map](https://docs.centreon.com/fr/docs/graph-views/introduction-map/).

## Contenu du pack

### Modèles

Le connecteur de supervision **Centreon Map Engine** apporte un modèle d'hôte :

* **App-Jvm-Centreon-Map-Engine-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Jvm-Centreon-Map-Engine-custom" label="App-Jvm-Centreon-Map-Engine-custom">

| Alias           | Modèle de service                                  | Description                                                         |
|:----------------|:---------------------------------------------------|:--------------------------------------------------------------------|
| Class-Count     | App-Jvm-Class-Count-Centreon-Map-Engine-custom     | Contrôle permettant de vérifier l'utilisation des classes de la JVM. |
| Cpu-Load        | App-Jvm-Cpu-Load-Centreon-Map-Engine-custom        | Contrôle permettant de vérifier l'utilisation CPU de la JVM.         |
| Fd-Usage        | App-Jvm-Fd-Usage-Centreon-Map-Engine-custom        | Contrôle de l'utilisation des file descriptors.                      |
| Load-Average    | App-Jvm-Load-Average-Centreon-Map-Engine-custom    | Contrôle de la charge système de la JVM.                             |
| Memory          | App-Jvm-Memory-Centreon-Map-Engine-custom          | Contrôle de la mémoire 'NonHeap' et 'Heap' de la JVM.                |
| Memory-Detailed | App-Jvm-Memory-Detailed-Centreon-Map-Engine-custom | Contrôle permettant de vérifier les pools de mémoire Java.           |
| Threads         | App-Jvm-Threads-Centreon-Map-Engine-custom         | Contrôle les threads.                                                |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Jvm-Centreon-Map-Engine-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Métrique                   | Unité |
|:---------------------------|:------|
| class.loaded.current.count | count |
| class.unloaded.count       | count |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Métrique                    | Unité |
|:----------------------------|:------|
| system.cpu.load.percentage  | %     |
| process.cpu.load.percentage | %     |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Métrique                   | Unité |
|:---------------------------|:------|
| fd.opened.usage.count      | count |
| fd.opened.free.count       | count |
| fd.opened.usage.percentage | %     |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Métrique             | Unité |
|:---------------------|:------|
| system.load.1m.count | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                   | Unité |
|:---------------------------|:------|
| memory.heap.usage.bytes    | B     |
| memory.nonheap.usage.bytes | B     |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| *mem*#memory.eden.usage.bytes      | B     |
| *mem*#memory.tenured.usage.bytes   | B     |
| *mem*#memory.survivor.usage.bytes  | B     |
| *mem*#memory.permanent.usage.bytes | B     |
| *mem*#memory.code.usage.bytes      | B     |

</TabItem>
<TabItem value="Threads" label="Threads">

| Métrique             | Unité |
|:---------------------|:------|
| threads.active.count | count |
| threads.daemon.count | count |

</TabItem>
</Tabs>

## Prérequis

Vous devez avoir préalablement installé [Centreon Map](https://docs.centreon.com/fr/docs/graph-views/introduction-map/) et tout particulièrement [Centreon Map Engine server](https://docs.centreon.com/fr/docs/graph-views/map-web-install/).

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
dnf install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-map-engine-actuator
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Centreon Map Engine**
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
dnf install centreon-plugin-Applications-Jvm-Actuator
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Jvm-Actuator
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-jvm-actuator
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Jvm-Actuator
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Jvm-Centreon-Map-Engine-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro                   | Description                                                                                                                | Valeur par défaut      | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| ACTUATORAPIUSERNAME     | Set API username                                                                                                           |                        | X           |
| ACTUATORAPIPASSWORD     | Set API password                                                                                                           |                        | X           |
| ACTUATORAPIPROTO        | Specify https if needed (default: 'http')                                                                                  | http                   |             |
| ACTUATORAPIPORT         | API port (default: 8080)                                                                                                   | 8081                   |             |
| ACTUATORAPIURLPATH      | API url path (default: '/centreon-studio/api/beta')                                                                        | /centreon-map/api/beta |             |
| ACTUATORCUSTOMMODE      | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | centreonmap            |             |
| ACTUATORAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                        |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCURRENT   | Thresholds                                                                                         |                   |             |
| CRITICALCURRENT  | Thresholds                                                                                         |                   |             |
| WARNINGUNLOADED  | Thresholds                                                                                         |                   |             |
| CRITICALUNLOADED | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPROCESS  | Warning threshold of process CPU load                                                              |                   |             |
| CRITICALPROCESS | Critical threshold of process CPU load                                                             |                   |             |
| WARNINGSYSTEM   | Warning threshold of system CPU load                                                               |                   |             |
| CRITICALSYSTEM  | Critical threshold of system CPU load                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                         |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOAD1  | Warning threshold for loadaverage                                                                  |                   |             |
| CRITICALLOAD1 | Critical threshold for loadaverage                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS           | Units of thresholds (default: '%') ('%', 'B')                                                      | %                 |             |
| WARNINGHEAP     | Warning threshold of Heap memory usage                                                             |                   |             |
| CRITICALHEAP    | Critical threshold of Heap memory usage                                                            |                   |             |
| WARNINGNONHEAP  | Warning threshold of NonHeap memory usage                                                          |                   |             |
| CRITICALNONHEAP | Critical threshold of NonHeap memory usage                                                         |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGEDEN       | Warning threshold of Heap 'Eden Space' memory usage                                                |                   |             |
| CRITICALEDEN      | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| WARNINGPERMANENT  | Warning threshold of NonHeap 'Permanent Generation' memory usage                                   |                   |             |
| CRITICALPERMANENT | Critical threshold of NonHeap 'Permanent Generation' memory usage                                  |                   |             |
| WARNINGSURVIVOR   | Warning threshold of Heap 'Survivor Space' memory usage                                            |                   |             |
| CRITICALSURVIVOR  | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Threads" label="Threads">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE  | Warning threshold                                                                                  |                   |             |
| CRITICALACTIVE | Critical threshold                                                                                 |                   |             |
| WARNINGDAEMON  | Warning threshold                                                                                  |                   |             |
| CRITICALDAEMON | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--mode=threads \
	--custommode='centreonmap' \
	--hostname='10.0.0.1' \
	--api-username='' \
	--api-password='' \
	--port='8081' \
	--proto='http' \
	--url-path='/centreon-map/api/beta'  \
	--warning-active='' \
	--critical-active='' \
	--warning-daemon='' \
	--critical-daemon='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: active: 18 daemon: 42 | 'threads.active.count'=18;;;0;'threads.daemon.count'=42;;;0;
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
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                  | Modèle de service associé                          |
|:--------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| class-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/classcount.pm)]         | App-Jvm-Class-Count-Centreon-Map-Engine-custom     |
| cpu-load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/cpuload.pm)]               | App-Jvm-Cpu-Load-Centreon-Map-Engine-custom        |
| fd-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/fdusage.pm)]               | App-Jvm-Fd-Usage-Centreon-Map-Engine-custom        |
| load-average [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/loadaverage.pm)]       | App-Jvm-Load-Average-Centreon-Map-Engine-custom    |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/memory.pm)]                  | App-Jvm-Memory-Centreon-Map-Engine-custom          |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/memorydetailed.pm)] | App-Jvm-Memory-Detailed-Centreon-Map-Engine-custom |
| threads [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/java/jvm/actuator/mode/threads.pm)]                | App-Jvm-Threads-Centreon-Map-Engine-custom         |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* centreonmap
* standard

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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --url-path                                 | API url path (default: '/centreon-studio/api/beta')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --port                                     | API port (default: 8080)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-username                             | Set API username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --api-password                             | Set API password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Class-Count" label="Class-Count">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --client-version         | Set the client version (default: '21.04.0')                                                                                                                                                                                                   |
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='current'                                                                                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'unloaded', 'current'.                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Option             | Description                                |
|:-------------------|:-------------------------------------------|
| --warning-system   | Warning threshold of system CPU load.      |
| --critical-system  | Critical threshold of system CPU load.     |
| --warning-process  | Warning threshold of process CPU load.     |
| --critical-process | Critical threshold of process CPU load.    |

</TabItem>
<TabItem value="Fd-Usage" label="Fd-Usage">

| Option                   | Description                                                     |
|:-------------------------|:----------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'usage', 'usage-free', 'usage-prct' (%).    |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Option           | Description                           |
|:-----------------|:--------------------------------------|
| --warning-load1  | Warning threshold for loadaverage     |
| --critical-load1 | Critical threshold for loadaverage    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option             | Description                                      |
|:-------------------|:-------------------------------------------------|
| --warning-heap     | Warning threshold of Heap memory usage           |
| --critical-heap    | Critical threshold of Heap memory usage          |
| --warning-nonheap  | Warning threshold of NonHeap memory usage        |
| --critical-nonheap | Critical threshold of NonHeap memory usage       |
| --units            | Units of thresholds (default: '%') ('%', 'B').   |

</TabItem>
<TabItem value="Memory-Detailed" label="Memory-Detailed">

| Option               | Description                                                         |
|:---------------------|:--------------------------------------------------------------------|
| --warning-eden       | Warning threshold of Heap 'Eden Space' memory usage                 |
| --critical-eden      | Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-tenured    | Warning threshold of Heap 'Tenured Generation' memory usage         |
| --critical-tenured   | Critical threshold of Heap 'Tenured Generation' memory usage        |
| --warning-survivor   | Warning threshold of Heap 'Survivor Space' memory usage             |
| --critical-survivor  | Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-permanent  | Warning threshold of NonHeap 'Permanent Generation' memory usage    |
| --critical-permanent | Critical threshold of NonHeap 'Permanent Generation' memory usage   |
| --warning-code       | Warning threshold of NonHeap 'Code Cache' memory usage              |
| --critical-code      | Critical threshold of NonHeap 'Code Cache' memory usage             |
| --units              | Units of thresholds (default: '%') ('%', 'B').                      |

</TabItem>
<TabItem value="Threads" label="Threads">

| Option       | Description                                        |
|:-------------|:---------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'active', 'daemon'.     |
| --critical-* | Critical threshold. Can be: 'active', 'daemon'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
	--plugin=apps::java::jvm::actuator::plugin \
	--mode=threads \
	--custommode='standard' \
	--help
```
