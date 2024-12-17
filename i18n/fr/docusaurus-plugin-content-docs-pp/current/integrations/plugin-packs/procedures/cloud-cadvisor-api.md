---
id: cloud-cadvisor-api
title: cAdvisor API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

cAdvisor (Container Advisor) permet aux utilisateurs d'observer l'utilisation des ressources 
et les performances de leurs conteneurs en cours d'exécution.

C'est un démon qui collecte et agrège de multiples informations à propos des conteneurs. 

## Contenu du pack

### Modèles

Le connecteur de supervision **cAdvisor API** apporte un modèle d'hôte :

* **Cloud-cAdvisor-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-cAdvisor-Api-custom" label="Cloud-cAdvisor-Api-custom">

| Alias       | Modèle de service                     | Description                                                          |
|:------------|:--------------------------------------|:---------------------------------------------------------------------|
| Node-Status | Cloud-cAdvisor-Node-Status-Api-custom | Contrôle d'informations de statuts et de métriques du noeud cAdvisor |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-cAdvisor-Api-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias             | Modèle de service                           | Description                                                            | Découverte |
|:------------------|:--------------------------------------------|:-----------------------------------------------------------------------|:----------:|
| Container-Disk-IO | Cloud-cAdvisor-Container-Disk-IO-Api-custom | Contrôle permettant de vérifier les I/O disques des containers. | X          |
| Container-Traffic | Cloud-cAdvisor-Container-Traffic-Api-custom | Contrôle permettant de vérifier l'utilisation du réseau des containers | X          |
| Container-Usage   | Cloud-cAdvisor-Container-Usage-Api-custom   | Contrôle permettant de vérifier l'utilisation des containers           | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                      | Description                                                   |
|:-------------------------------------|:--------------------------------------------------------------|
| Cloud-cAdvisor-API-Container-Disk-IO | Discover the disk partitions and monitor space occupation     |
| Cloud-cAdvisor-API-Container-Traffic | Discover network interfaces and monitor bandwidth utilization |
| Cloud-cAdvisor-API-Container-Usage   | Discover containers and monitor their resource usage          |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Container-Disk-IO" label="Container-Disk-IO">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *containers_diskio*#disk.io.read.bytespersecond  | B/s   |
| *containers_diskio*#disk.io.write.bytespersecond | B/s   |

</TabItem>
<TabItem value="Container-Traffic" label="Container-Traffic">

| Métrique                                                 | Unité |
|:---------------------------------------------------------|:------|
| *containers_traffic*#container.traffic.in.bitspersecond  | b/s   |
| *containers_traffic*#container.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Métrique                                                 | Unité |
|:---------------------------------------------------------|:------|
| *containers*#container.cpu.count                         | count |
| *containers*#container.cpu.utilization.percentage        | %     |
| *containers*#container.cpu.user.utilization.percentage   | %     |
| *containers*#container.cpu.system.utilization.percentage | %     |
| *containers*#container.memory.usage.bytes                | B     |
| *containers*#container.memory.cache.usage.bytes          | B     |
| *containers*#container.memory.rss.usage.bytes            | B     |
| *containers*#container.swap.usage.bytes                  | B     |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *node*#node.containers.running.count | count |
| *node*#node.core.count               | count |
| *node*#node.memory.bytes             | B     |
| *node*#node.cpu.frequency.hertz      | Hz    |

</TabItem>
</Tabs>

## Prérequis

### cAdvisor

Un conteneur ou un démon cAdvisor doit être en cours d'exécution et disponible. La 
documentation officielle permet de [déployer le nécessaire rapidement](https://github.com/google/cadvisor#quick-start-running-cadvisor-in-a-docker-container).

### Flux réseaux

Le Collecteur doit être en mesure de contacter le serveur hébergeant cAdvisor au travers 
du port TCP/8080. Attention, selon la configuration le port peut être différent. 

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
dnf install centreon-pack-cloud-cadvisor-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-cadvisor-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-cadvisor-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **cAdvisor API**
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
dnf install centreon-plugin-Cloud-cAdvisor-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-cAdvisor-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-cAdvisor-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-cAdvisor-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                   | Description                                                                                           | Valeur par défaut   | Obligatoire |
|:------------------------|:------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| CADVISORAPIPROTO        | Specify https if needed (Default: 'http')                                                             | http                |             |
| CADVISORAPIPORT         | Port used (Default: 8080)                                                                             | 8080                |             |
| CADVISORAPIPATH         | Path used (Default: '/containers/docker')                                                             | /containers/docker/ |             |
| PROXYURL                | Proxy URL. Eg: http://my.proxy:3128                                                                   |                     |             |
| CADVISORAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                     |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Container-Disk-IO" label="Container-Disk-IO">

| Macro               | Description                                                                                         | Valeur par défaut    | Obligatoire |
|:--------------------|:----------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| CONTAINERID         | Exact container ID                                                                                  |                      |             |
| CONTAINERNAME       | Exact container name (if multiple names: names separated by ':')                                    |                      |             |
| FILTERCONTAINERNAME | Filter by container name (can be a regexp)                                                          |                      |             |
| WARNINGDISKIOREAD   | Warning threshold                                                                                   |                      |             |
| CRITICALDISKIOREAD  | Critical threshold                                                                                  |                      |             |
| WARNINGDISKIOWRITE  | Warning threshold                                                                                   |                      |             |
| CRITICALDISKIOWRITE | Critical threshold                                                                                  |                      |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --use-name |             |

</TabItem>
<TabItem value="Container-Traffic" label="Container-Traffic">

| Macro               | Description                                                                                         | Valeur par défaut    | Obligatoire |
|:--------------------|:----------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| CONTAINERID         | Exact container ID                                                                                  |                      |             |
| CONTAINERNAME       | Exact container name (if multiple names: names separated by ':')                                    |                      |             |
| FILTERCONTAINERNAME | Filter by container name (can be a regexp)                                                          |                      |             |
| WARNINGTRAFFICIN    | Warning threshold                                                                                   |                      |             |
| CRITICALTRAFFICIN   | Critical threshold                                                                                  |                      |             |
| WARNINGTRAFFICOUT   | Warning threshold                                                                                   |                      |             |
| CRITICALTRAFFICOUT  | Critical threshold                                                                                  |                      |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --use-name |             |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Macro               | Description                                                                                         | Valeur par défaut    | Obligatoire |
|:--------------------|:----------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| CONTAINERID         | Exact container ID                                                                                  |                      |             |
| CONTAINERNAME       | Exact container name (if multiple names: names separated by ':')                                    |                      |             |
| FILTERCONTAINERNAME | Filter by container name (can be a regexp)                                                          |                      |             |
| WARNINGCPUNUMBER    | Warning threshold                                                                                   |                      |             |
| CRITICALCPUNUMBER   | Critical threshold                                                                                  |                      |             |
| WARNINGCPUSYSTEM    | Warning threshold                                                                                   |                      |             |
| CRITICALCPUSYSTEM   | Critical threshold                                                                                  |                      |             |
| WARNINGCPUTOTAL     | Warning threshold                                                                                   |                      |             |
| CRITICALCPUTOTAL    | Critical threshold                                                                                  |                      |             |
| WARNINGCPUUSER      | Warning threshold                                                                                   |                      |             |
| CRITICALCPUUSER     | Critical threshold                                                                                  |                      |             |
| WARNINGMEMORY       | Warning threshold                                                                                   |                      |             |
| CRITICALMEMORY      | Critical threshold                                                                                  |                      |             |
| WARNINGMEMORYCACHE  | Warning threshold                                                                                   |                      |             |
| CRITICALMEMORYCACHE | Critical threshold                                                                                  |                      |             |
| WARNINGMEMORYRSS    | Warning threshold                                                                                   |                      |             |
| CRITICALMEMORYRSS   | Critical threshold                                                                                  |                      |             |
| WARNINGSWAP         | Warning threshold                                                                                   |                      |             |
| CRITICALSWAP        | Critical threshold                                                                                  |                      |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --use-name |             |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Macro                     | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTAINERSRUNNING  | Thresholds                                                                                          |                   |             |
| CRITICALCONTAINERSRUNNING | Thresholds                                                                                          |                   |             |
| WARNINGCPUFREQUENCY       | Thresholds                                                                                          |                   |             |
| CRITICALCPUFREQUENCY      | Thresholds                                                                                          |                   |             |
| WARNINGMEMORYCAPACITY     | Thresholds                                                                                          |                   |             |
| CRITICALMEMORYCAPACITY    | Thresholds                                                                                          |                   |             |
| WARNINGNUMCORES           | Thresholds                                                                                          |                   |             |
| CRITICALNUMCORES          | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_cadvisor_api.pl \
	--plugin=cloud::cadvisor::restapi::plugin \
	--mode=node-status \
	--hostname=10.0.0.1 \
	--port='8080' \
	--proto='http' \
	--api-path='/containers/docker/' \
	--proxyurl=''  \
	--warning-containers-running='' \
	--critical-containers-running='' \
	--warning-num-cores='' \
	--critical-num-cores='' \
	--warning-memory-capacity='' \
	--critical-memory-capacity='' \
	--warning-cpu-frequency='' \
	--critical-cpu-frequency='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All node informations are ok | '*node*#node.containers.running.count'=;;;0;'*node*#node.core.count'=;;;0;'*node*#node.memory.bytes'=B;;;0;'*node*#node.cpu.frequency.hertz'=Hz;;;0;
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
/usr/lib/centreon/plugins/centreon_cadvisor_api.pl \
	--plugin=cloud::cadvisor::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                  | Modèle de service associé                   |
|:--------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| container-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/containerusage.pm)] | Cloud-cAdvisor-Container-Usage-Api-custom   |
| disk-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/diskio.pm)]                 | Cloud-cAdvisor-Container-Disk-IO-Api-custom |
| list-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/listcontainers.pm)] | Used for service discovery                  |
| node-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/nodestatus.pm)]         | Cloud-cAdvisor-Node-Status-Api-custom       |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cadvisor/restapi/mode/traffic.pm)]                | Cloud-cAdvisor-Container-Traffic-Api-custom |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --hostname                                 | IP Addr/FQDN of the cadvisor node (can be multiple).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --port                                     | Port used (Default: 8080)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (Default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-path                                 | Path used (Default: '/containers/docker')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --credentials                              | Specify this option if you access webpage over basic authentification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --username                                 | Specify username for basic authentification (Mandatory if --credentials is specidied)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --password                                 | Specify password for basic authentification (Mandatory if --credentials is specidied)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeout                                  | Threshold for HTTP timeout (Default: 10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --cert-file                                | Specify certificate to send to the webserver                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --key-file                                 | Specify key to send to the webserver                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --cacert-file                              | Specify root certificate to send to the webserver                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --cert-pwd                                 | Specify certificate's password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --cert-pkcs12                              | Specify type of certificate (PKCS12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Container-Disk-IO" label="Container-Disk-IO">

| Option            | Description                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------|
| --container-id    | Exact container ID.                                                                           |
| --container-name  | Exact container name (if multiple names: names separated by ':').                             |
| --use-name        | Use name for perfdata and display.                                                            |
| --filter-name     | Filter by container name (can be a regexp).                                                   |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^diskio-read$'   |
| --warning-*       | Warning threshold. Can be: 'diskio-read', 'diskio-write'.                                     |
| --critical-*      | Critical threshold. Can be: 'diskio-read', 'diskio-write'.                                    |

</TabItem>
<TabItem value="Container-Traffic" label="Container-Traffic">

| Option            | Description                                                                                  |
|:------------------|:---------------------------------------------------------------------------------------------|
| --container-id    | Exact container ID.                                                                          |
| --container-name  | Exact container name (if multiple names: names separated by ':').                            |
| --use-name        | Use docker name for perfdata and display.                                                    |
| --filter-name     | Filter by container name (can be a regexp).                                                  |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^traffic-in$'   |
| --warning-*       | Warning threshold. Can be: 'traffic-in', 'traffic-out'.                                      |
| --critical-*      | Critical threshold. Can be: 'traffic-in', 'traffic-out'.                                     |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Option            | Description                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------|
| --container-id    | Exact container ID.                                                                                             |
| --container-name  | Exact container name (if multiple names: names separated by ':').                                               |
| --use-name        | Use name for perfdata and display.                                                                              |
| --filter-name     | Filter by container name (can be a regexp).                                                                     |
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='cpu'                               |
| --warning-*       | Warning threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%).     |
| --critical-*      | Critical threshold. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%).    |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Option                   | Description                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'containers-running', 'num-cores', 'memory-capacity', 'cpu-frequency'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cadvisor_api.pl \
	--plugin=cloud::cadvisor::restapi::plugin \
	--mode=node-status \
	--help
```
