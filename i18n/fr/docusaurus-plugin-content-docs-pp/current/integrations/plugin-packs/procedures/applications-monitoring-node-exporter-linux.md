---
id: applications-monitoring-node-exporter-linux
title: Node Exporter Linux Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Node Exporter Linux Metrics** apporte un modèle d'hôte :

* **App-Monitoring-Node-Exporter-Linux-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Node-Exporter-Linux-custom" label="App-Monitoring-Node-Exporter-Linux-custom">

| Alias        | Modèle de service                                 | Description                                   | Découverte |
|:-------------|:--------------------------------------------------|:----------------------------------------------|:----------:|
| Node-Cpu     | App-Monitoring-Node-Exporter-Linux-Cpu-custom     | Contrôle l'utilisation CPU du noeud           |            |
| Node-Load    | App-Monitoring-Node-Exporter-Linux-Load-custom    | Contrôle la charge du noeud                   |            |
| Node-Memory  | App-Monitoring-Node-Exporter-Linux-Memory-custom  | Contrôle la consommation mémoire du noeud     |            |
| Node-Storage | App-Monitoring-Node-Exporter-Linux-Storage-custom | Contrôle la consommation du stockage du noeud | X          |
| Node-Traffic | App-Monitoring-Node-Exporter-Linux-Traffic-custom | Contrôle l'utilisation CPU du noeud           | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Node-Exporter-Linux-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                   | Description                                                             |
|:--------------------------------------------------|:------------------------------------------------------------------------|
| App-Monitoring-Node-Exporter-Linux-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |
| App-Monitoring-Node-Exporter-Linux-Storage-Name   | Découvre les partitions de disque et supervise l'occupation de l'espace de stockage               |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Métrique                                           | Unité |
|:---------------------------------------------------|:------|
| cpu.utilization.percentage                         | %     |
| *node_cpu*#node.cpu.idle.utilization.percentage    | %     |
| *node_cpu*#node.cpu.iowait.utilization.percentage  | %     |
| *node_cpu*#node.cpu.irq.utilization.percentage     | %     |
| *node_cpu*#node.cpu.nice.utilization.percentage    | %     |
| *node_cpu*#node.cpu.softirq.utilization.percentage | %     |
| *node_cpu*#node.cpu.steal.utilization.percentage   | %     |
| *node_cpu*#node.cpu.system.utilization.percentage  | %     |
| *node_cpu*#node.cpu.user.utilization.percentage    | %     |

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Métrique             | Unité |
|:---------------------|:------|
| load.1minute.count   | count |
| load.5minutes.count  | count |
| load.15minutes.count | count |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Métrique                 | Unité |
|:-------------------------|:------|
| node.memory.usage.bytes  | B     |
| node.memory.buffer.bytes | B     |
| node.memory.cached.bytes | B     |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *disk_name*#node.storage.space.free.bytes | B     |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| *interface*~status                         | N/A   |
| *interface*~node.packets.in.count          | count |
| *interface*~node.packets.out.count         | count |
| *interface*~node.traffic.in.bitspersecond  | b/s   |
| *interface*~node.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

Pour installer l'exporteur de métriques Node exporter, vous pouvez suivre cette documentation : https://prometheus.io/docs/guides/node-exporter/#installing-and-running-the-node-exporter.

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
dnf install centreon-pack-applications-monitoring-node-exporter-linux
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-node-exporter-linux
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-node-exporter-linux
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-node-exporter-linux
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Node Exporter Linux Metrics**
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
dnf install centreon-plugin-Applications-Monitoring-Nodeexporter-Linux
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Nodeexporter-Linux
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-nodeexporter-linux
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Linux
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Node-Exporter-Linux-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                          | Valeur par défaut | Obligatoire |
|:------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NODEEXPORTERPROTO | Specify https if needed (default: 'http')                                                            | http              |             |
| NODEEXPORTERURL   | URL to scrape metrics from (default: '/metrics')                                                     | /metrics          |             |
| NODEEXPORTERPORT  | Port used (default: 80)                                                                              | 9100              |             |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold                                                                                  |                   |             |
| CRITICALAVERAGE | Critical threshold                                                                                 |                   |             |
| WARNINGIDLE     | Warning threshold                                                                                  |                   |             |
| CRITICALIDLE    | Critical threshold                                                                                 |                   |             |
| WARNINGIOWAIT   | Warning threshold                                                                                  |                   |             |
| CRITICALIOWAIT  | Critical threshold                                                                                 |                   |             |
| WARNINGIRQ      | Warning threshold                                                                                  |                   |             |
| CRITICALIRQ     | Critical threshold                                                                                 |                   |             |
| WARNINGNICE     | Warning threshold                                                                                  |                   |             |
| CRITICALNICE    | Critical threshold                                                                                 |                   |             |
| WARNINGSOFTIRQ  | Warning threshold                                                                                  |                   |             |
| CRITICALSOFTIRQ | Critical threshold                                                                                 |                   |             |
| WARNINGSTEAL    | Warning threshold                                                                                  |                   |             |
| CRITICALSTEAL   | Critical threshold                                                                                 |                   |             |
| WARNINGSYSTEM   | Warning threshold                                                                                  |                   |             |
| CRITICALSYSTEM  | Critical threshold                                                                                 |                   |             |
| WARNINGUSER     | Warning threshold                                                                                  |                   |             |
| CRITICALUSER    | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOAD1  | Warning threshold                                                                                  |                   |             |
| WARNINGLOAD15 | Warning threshold                                                                                  |                   |             |
| WARNINGLOAD5  | Warning threshold                                                                                  |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS          | Units of thresholds. Can be : '%', 'B' Default: '%'                                                | %                 |             |
| WARNINGBUFFER  | Warning threshold                                                                                  |                   |             |
| CRITICALBUFFER | Critical threshold                                                                                 |                   |             |
| WARNINGCACHED  | Warning threshold                                                                                  |                   |             |
| CRITICALCACHED | Critical threshold                                                                                 |                   |             |
| WARNINGUSAGE   | Warning threshold                                                                                  |                   |             |
| CRITICALUSAGE  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FSTYPE        | Inclusion filter on fstype.  Can be used to exclude fstypes. Example : --fstype='^(?!(tmpfs))'     | ^(?!(tmpfs))      |             |
| PARTITIONNAME | Specify which disk to monitor. Can be a regex.  Default: all disks are monitored                   | .*                |             |
| UNITS         | Units of thresholds. Can be : '%', 'B' Default: '%'                                                | %                 |             |
| WARNINGUSAGE  | Warning threshold                                                                                  |                   |             |
| CRITICALUSAGE | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Macro              | Description                                                                                                              | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME      | Specify which interface to monitor. Can be a regex.          Default: all interfaces are monitored except 'lo' interface | ^(?!(lo$))        |             |
| WARNINGPACKETSIN   | Warning thresholds                                                                                                       |                   |             |
| CRITICALPACKETSIN  | Critical thresholds                                                                                                      |                   |             |
| WARNINGPACKETSOUT  | Warning thresholds                                                                                                       |                   |             |
| CRITICALPACKETSOUT | Critical thresholds                                                                                                      |                   |             |
| WARNINGTRAFFICIN   | Warning thresholds                                                                                                       |                   |             |
| CRITICALTRAFFICIN  | Critical thresholds                                                                                                      |                   |             |
| WARNINGTRAFFICOUT  | Warning thresholds                                                                                                       |                   |             |
| CRITICALTRAFFICOUT | Critical thresholds                                                                                                      |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

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
/usr/lib/centreon/plugins/centreon_monitoring_nodeexporter_linux.pl \
	--plugin=apps::monitoring::nodeexporter::linux::plugin \
	--mode=traffic \
	--hostname=10.0.0.1 \
	--urlpath='/metrics' \
	--port='9100' \
	--proto='http'  \
	--interface='^(?!(lo$))' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-packets-in='' \
	--critical-packets-in='' \
	--warning-packets-out='' \
	--critical-packets-out=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: packets in: 45 packets out: 92 traffic in: 9 9/s traffic in: 1 1/s | '*interface*~node.packets.in.count'=45;;;0;'*interface*~node.packets.out.count'=92;;;0;'*interface*~node.traffic.in.bitspersecond'=9b/s;;;0;'*interface*~node.traffic.out.bitspersecond'=1b/s;;;0;
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
/usr/lib/centreon/plugins/centreon_monitoring_nodeexporter_linux.pl \
	--plugin=apps::monitoring::nodeexporter::linux::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                              | Modèle de service associé                         |
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/linux/mode/cpu.pm)]                        | App-Monitoring-Node-Exporter-Linux-Cpu-custom     |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/linux/mode/listinterfaces.pm)] | Used for service discovery                        |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/linux/mode/liststorages.pm)]     | Used for service discovery                        |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/linux/mode/load.pm)]                      | App-Monitoring-Node-Exporter-Linux-Load-custom    |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/linux/mode/memory.pm)]                  | App-Monitoring-Node-Exporter-Linux-Memory-custom  |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/linux/mode/storage.pm)]                | App-Monitoring-Node-Exporter-Linux-Storage-custom |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/nodeexporter/linux/mode/traffic.pm)]                | App-Monitoring-Node-Exporter-Linux-Traffic-custom |

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
| --hostname                                 | Endpoint hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | Port used (default: 80)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --urlpath                                  | URL to scrape metrics from (default: '/metrics').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --username                                 | Endpoint username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --password                                 | Endpoint password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Set HTTP timeout (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
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
<TabItem value="Node-Cpu" label="Node-Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold.  Can be: 'average', 'idle', 'iowait', 'nice', 'irq' 'softirq', 'steal', 'system', 'user'                                                                                                                                   |
| --critical-*           | Critical threshold.  Can be: 'average', 'idle', 'iowait', 'nice', 'irq' 'softirq', 'steal', 'system', 'user'                                                                                                                                  |

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Option       | Description                                                |
|:-------------|:-----------------------------------------------------------|
| --warning-*  | Warning threshold.  Can be: 'load1', 'load5', 'load15'.    |
| --critical-* | Warning threshold.  Can be: 'load1', 'load5', 'load15'.    |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Option       | Description                                                  |
|:-------------|:-------------------------------------------------------------|
| --units      | Units of thresholds. Can be : '%', 'B' Default: '%'          |
| --warning-*  | Warning threshold.  Can be: 'usage', 'buffer', 'cached'.     |
| --critical-* | Critical threshold.  Can be: 'usage', 'buffer', 'cached'.    |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Option           | Description                                                                                      |
|:-----------------|:-------------------------------------------------------------------------------------------------|
| --fstype         | Inclusion filter on fstype.  Can be used to exclude fstypes. Example : --fstype='^(?!(tmpfs))'   |
| --storage        | Specify which disk to monitor. Can be a regex.  Default: all disks are monitored.                |
| --units          | Units of thresholds. Can be : '%', 'B' Default: '%'                                              |
| --warning-usage  | Warning threshold.                                                                               |
| --critical-usage | Critical threshold.                                                                              |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --interface            |         Specify which interface to monitor. Can be a regex.          Default: all interfaces are monitored except 'lo' interface.                                                                                                             |
| --warning-*            |         Warning thresholds.          Can be: 'traffic-in', 'traffic-out', 'packets-in', 'packets-out'.                                                                                                                                        |
| --critical-*           |         Critical thresholds.          Can be: 'traffic-in', 'traffic-out', 'packets-in', 'packets-out'.                                                                                                                                       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_nodeexporter_linux.pl \
	--plugin=apps::monitoring::nodeexporter::linux::plugin \
	--mode=traffic \
	--help
```
