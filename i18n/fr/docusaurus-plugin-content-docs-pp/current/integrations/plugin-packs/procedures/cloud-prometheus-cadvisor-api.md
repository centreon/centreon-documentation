---
id: cloud-prometheus-cadvisor-api
title: cAdvisor
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **cAdvisor**
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **cAdvisor** apporte un modèle d'hôte :

* **Cloud-Prometheus-cAdvisor-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Prometheus-cAdvisor-Api-custom" label="Cloud-Prometheus-cAdvisor-Api-custom">

| Alias                | Modèle de service                               | Description                                       |
|:---------------------|:------------------------------------------------|:--------------------------------------------------|
| Container-Cpu        | Cloud-Prometheus-cAdvisor-Cpu-Api-custom        | Contrôle l'utilisation CPU du conteneur           |
| Container-Load       | Cloud-Prometheus-cAdvisor-Load-Api-custom       | Contrôle la charge du conteneur                   |
| Container-Memory     | Cloud-Prometheus-cAdvisor-Memory-Api-custom     | Contrôle la consommation mémoire du conteneur     |
| Container-Storage    | Cloud-Prometheus-cAdvisor-Storage-Api-custom    | Contrôle la consommation du stockage du conteneur |
| Container-Task-State | Cloud-Prometheus-cAdvisor-Task-State-Api-custom | Contrôle les tâches en cours du conteneur         |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Prometheus-cAdvisor-Api-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Container-Cpu" label="Container-Cpu">

| Nom                                               | Unité |
|:--------------------------------------------------|:------|
| *containers*#container.cpu.utilization.percentage | %     |
| *containers*#container.cpu.throttled.percentage   | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Container-Load" label="Container-Load">

| Nom                               | Unité |
|:----------------------------------|:------|
| *containers*#container.load.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Container-Memory" label="Container-Memory">

| Nom                            | Unité |
|:-------------------------------|:------|
| *containers*#memory..bytes     | B     |
| *containers*#memory..bytes     | B     |
| *containers*#cache.usage.bytes | B     |
| *containers*#rss.usage.bytes   | B     |
| *containers*#swap.usage.bytes  | B     |

</TabItem>
<TabItem value="Container-Storage" label="Container-Storage">

| Nom                                                | Unité |
|:---------------------------------------------------|:------|
| *containers*~*disk_name*#storage.space.usage.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Container-Task-State" label="Container-Task-State">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| *containers1*#tasks.sleeping.count        | count |
| *containers2*#tasks.sleeping.count        | count |
| *containers1*#tasks.running.count         | count |
| *containers2*#tasks.running.count         | count |
| *containers1*#tasks.stopped.count         | count |
| *containers2*#tasks.stopped.count         | count |
| *containers1*#tasks.uninterruptible.count | count |
| *containers2*#tasks.uninterruptible.count | count |
| *containers1*#tasks.iowaiting.count       | count |
| *containers2*#tasks.iowaiting.count       | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Il est essentiel d'avoir Docker, un fichier de configuration Prometheus et des volumes Docker appropriés pour utiliser Prometheus avec cAdvisor.

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
dnf install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-prometheus-cadvisor-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **cAdvisor**
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
dnf install centreon-plugin-Cloud-Prometheus-cAdvisor-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Prometheus-cAdvisor-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-prometheus-cadvisor-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Prometheus-cAdvisor-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Prometheus-cAdvisor-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROMETHEUSAPIHOSTNAME | Prometheus hostname                                                                                  |                   |             |
| PROMETHEUSAPIPROTO    | Specify https if needed (default: 'http')                                                            | http              |             |
| PROMETHEUSAPIPORT     | API port (default: 9090)                                                                             | 9090              |             |
| PROMETHEUSAPIURL      | API url path (default: '/api/v1')                                                                    | /api/v1           |             |
| EXTRAOPTIONS          | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Container-Cpu" label="Container-Cpu">

| Macro             | Description                                                                                        | Valeur par défaut          | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER         | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD               | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| WARNINGTHROTTLED  | Threshold                                                                                          | 10                         |             |
| CRITICALTHROTTLED | Threshold                                                                                          | 20                         |             |
| WARNINGUSAGE      | Threshold                                                                                          | 80                         |             |
| CRITICALUSAGE     | Threshold                                                                                          | 90                         |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Load" label="Container-Load">

| Macro        | Description                                                                                        | Valeur par défaut          | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER    | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD          | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| WARNINGLOAD  | Warning threshold                                                                                  |                            |             |
| CRITICALLOAD | Critical threshold                                                                                 |                            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Memory" label="Container-Memory">

| Macro           | Description                                                                                        | Valeur par défaut          | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER       | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD             | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| WARNINGCACHE    | Threshold                                                                                          |                            |             |
| CRITICALCACHE   | Threshold                                                                                          |                            |             |
| WARNINGRSS      | Threshold                                                                                          |                            |             |
| CRITICALRSS     | Threshold                                                                                          |                            |             |
| WARNINGSWAP     | Threshold                                                                                          |                            |             |
| CRITICALSWAP    | Threshold                                                                                          |                            |             |
| WARNINGUSAGE    | Threshold                                                                                          | 80                         |             |
| CRITICALUSAGE   | Threshold                                                                                          | 90                         |             |
| WARNINGWORKING  | Threshold                                                                                          |                            |             |
| CRITICALWORKING | Threshold                                                                                          |                            |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Storage" label="Container-Storage">

| Macro         | Description                                                                                        | Valeur par défaut          | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER     | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD           | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| DEVICE        | Filter on a specific device (must be a PromQL filter, Default: 'device=~".*"')                     | device=~".*"               |             |
| UNITS         | Units of thresholds (default: '%') ('%', 'B')                                                      | %                          |             |
| WARNINGUSAGE  | Warning threshold                                                                                  | 80                         |             |
| CRITICALUSAGE | Critical threshold                                                                                 | 90                         |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

</TabItem>
<TabItem value="Container-Task-State" label="Container-Task-State">

| Macro                   | Description                                                                                        | Valeur par défaut          | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CONTAINER               | Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')    | container\_name!~".*POD.*" |             |
| POD                     | Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                     | pod\_name=~".*"            |             |
| STATE                   | Filter on a specific state (must be a PromQL filter, Default: 'state=~".*"')                       | state=~".*"                |             |
| WARNINGIOWAITING        | Threshold                                                                                          |                            |             |
| CRITICALIOWAITING       | Threshold                                                                                          |                            |             |
| WARNINGRUNNING          | Threshold                                                                                          |                            |             |
| CRITICALRUNNING         | Threshold                                                                                          |                            |             |
| WARNINGSLEEPING         | Threshold                                                                                          |                            |             |
| CRITICALSLEEPING        | Threshold                                                                                          |                            |             |
| WARNINGSTOPPED          | Threshold                                                                                          |                            |             |
| CRITICALSTOPPED         | Threshold                                                                                          |                            |             |
| WARNINGUNINTERRUPTIBLE  | Threshold                                                                                          |                            |             |
| CRITICALUNINTERRUPTIBLE | Threshold                                                                                          |                            |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

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
/usr/lib/centreon/plugins/centreon_prometheus_cadvisor_api.pl \
	--plugin=cloud::prometheus::exporters::cadvisor::plugin \
	--mode=task-state \
	--hostname=10.0.0.1 \
	--url-path='/api/v1' \
	--port='9090' \
	--proto='http'  \
	--container='container\_name!~".*POD.*"' \
	--pod='pod\_name=~".*"' \
	--state='state=~".*"' \
	--warning-sleeping='' \
	--critical-sleeping='' \
	--warning-running='' \
	--critical-running='' \
	--warning-stopped='' \
	--critical-stopped='' \
	--warning-uninterruptible='' \
	--critical-uninterruptible='' \
	--warning-iowaiting='' \
	--critical-iowaiting='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All containers tasks states are ok | 'containers1#tasks.sleeping.count'=5212;;;0; 'containers2#tasks.sleeping.count'=72866;;;0; 'containers1#tasks.running.count'=3393;;;0; 'containers2#tasks.running.count'=4483;;;0; 'containers1#tasks.stopped.count'=1588;;;0; 'containers2#tasks.stopped.count'=97744;;;0; 'containers1#tasks.uninterruptible.count'=18752;;;0; 'containers2#tasks.uninterruptible.count'=54196;;;0; 'containers1#tasks.iowaiting.count'=74768;;;0; 'containers2#tasks.iowaiting.count'=34206;;;0;
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
/usr/lib/centreon/plugins/centreon_prometheus_cadvisor_api.pl \
	--plugin=cloud::prometheus::exporters::cadvisor::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                               | Modèle de service associé                       |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/cpu.pm)]                        | Cloud-Prometheus-cAdvisor-Cpu-Api-custom        |
| list-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/listcontainers.pm)] | Not used in this Monitoring Connector           |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/load.pm)]                      | Cloud-Prometheus-cAdvisor-Load-Api-custom       |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/memory.pm)]                  | Cloud-Prometheus-cAdvisor-Memory-Api-custom     |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/storage.pm)]                | Cloud-Prometheus-cAdvisor-Storage-Api-custom    |
| task-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/cadvisor/mode/taskstate.pm)]           | Cloud-Prometheus-cAdvisor-Task-State-Api-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --step                                     |   Set the step of the metric query (examples: '30s', '1m', '15m', '1h').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 |   Prometheus hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --url-path                                 |   API url path (default: '/api/v1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --port                                     |   API port (default: 9090)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --credentials                              |   Specify this option if you access the API with authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --username                                 |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --password                                 |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --basic                                    |   Specify this option if you access the API over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access the API over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --header                                   |   Set HTTP header (can be multiple, example: --header='Authorization:Bearer ABCD')  Useful to access Prometheus API hosted in a specific environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Container-Cpu" label="Container-Cpu">

| Option            | Description                                                                                                                                                                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --cpu-attribute   |   Set the CPU attribute to match element (must be a PromQL filter, Default: 'cpu="total"')                                                                                                                                                                      |
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                                                                                               |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                                                                                                |
| --warning-*       |   Warning threshold. Can be: 'usage', 'throttled'.                                                                                                                                                                                                              |
| --critical-*      |   Critical threshold. Can be: 'usage', 'throttled'.                                                                                                                                                                                                             |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                                                            |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - throttled: ^container\_cpu\_cfs\_throttled\_seconds\_total.*     - usage: ^container\_cpu\_usage\_seconds\_total.*   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='throttled'                                                                                                                                                                       |

</TabItem>
<TabItem value="Container-Load" label="Container-Load">

| Option            | Description                                                                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                        |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                         |
| --warning-load    |   Warning threshold.                                                                                                                                                                     |
| --critical-load   |   Critical threshold.                                                                                                                                                                    |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                     |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - load: ^container\_cpu\_load\_average\_10s$    |

</TabItem>
<TabItem value="Container-Memory" label="Container-Memory">

| Option            | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                                                                                                                                                                                                                                                           |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                                                                                                                                                                                                                                                            |
| --warning-*       |   Warning threshold. Can be: 'usage', 'working', 'cache' (B), 'rss' (B), 'swap' (B).                                                                                                                                                                                                                                                                                                                                        |
| --critical-*      |   Critical threshold. Can be: 'usage', 'working', 'cache' (B), 'rss' (B), 'swap' (B).                                                                                                                                                                                                                                                                                                                                       |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                                                                                                                                                                                                            |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                                                                                                                                                                                                                        |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - limits: ^container\_spec\_memory\_limit\_bytes.*     - usage: ^container\_memory\_usage\_bytes.*     - working: ^container\_memory\_working\_set\_bytes.*     - cache: ^container\_memory\_cache.*     - rss: ^container\_memory\_rss.*     - swap: ^container\_memory\_swap.*   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='usage'                                                                                                                                                                                                                                                                                                                                       |

</TabItem>
<TabItem value="Container-Storage" label="Container-Storage">

| Option            | Description                                                                                                                                                                                                                    |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                                                              |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                                                               |
| --device          |   Filter on a specific device (must be a PromQL filter, Default: 'device=~".*"')                                                                                                                                               |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                               |
| --free            |   Thresholds are on free space left.                                                                                                                                                                                           |
| --warning-usage   |   Warning threshold.                                                                                                                                                                                                           |
| --critical-usage  |   Critical threshold.                                                                                                                                                                                                          |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                                                           |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - used: ^container\_fs\_usage\_bytes.*     - limit: ^container\_fs\_limit\_bytes.*    |

</TabItem>
<TabItem value="Container-Task-State" label="Container-Task-State">

| Option            | Description                                                                                                                                                                           |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --container       |   Filter on a specific container (must be a PromQL filter, Default: 'container\_name!~".*POD.*"')                                                                                     |
| --pod             |   Filter on a specific pod (must be a PromQL filter, Default: 'pod\_name=~".*"')                                                                                                      |
| --state           |   Filter on a specific state (must be a PromQL filter, Default: 'state=~".*"')                                                                                                        |
| --warning-*       |   Warning threshold. Can be: 'sleeping', 'running', 'stopped', 'uninterruptible', 'iowaiting'.                                                                                        |
| --critical-*      |   Critical threshold. Can be: 'sleeping', 'running', 'stopped', 'uninterruptible', 'iowaiting'.                                                                                       |
| --extra-filter    |   Add a PromQL filter (can be defined multiple times)  Example : --extra-filter='name=~".*pretty.*"'                                                                                  |
| --metric-overload |   Overload default metrics name (can be defined multiple times)  Example : --metric-overload='metric,^my\_metric\_name$'  Default :      - tasks\_state: ^container\_tasks\_state$    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_prometheus_cadvisor_api.pl \
	--plugin=cloud::prometheus::exporters::cadvisor::plugin \
	--mode=task-state \
	--help
```
