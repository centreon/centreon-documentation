---
id: applications-webservers-apache-serverstatus
title: Apache Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Apache Server**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Apache Server** apporte un modèle d'hôte :

* **App-Webserver-Apache-ServerStatus-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Webserver-Apache-ServerStatus-custom" label="App-Webserver-Apache-ServerStatus-custom">

| Alias               | Modèle de service                        | Description                                                                    |
|:--------------------|:-----------------------------------------|:-------------------------------------------------------------------------------|
| Apache-Requests     | App-Webserver-Apache-Requests-custom     | Contrôle permettant de vérifier les requêtes                                   |
| Apache-ResponseTime | App-Webserver-Apache-ResponseTime-custom | Contrôle permettant de vérifier le temps de réponse de la page du 'mod_status' |
| Apache-SlotStates   | App-Webserver-Apache-SlotStates-custom   | Contrôle permettant de vérifier l'état des slots                               |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Webserver-Apache-ServerStatus-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias          | Modèle de service                   | Description                                                       |
|:---------------|:------------------------------------|:------------------------------------------------------------------|
| Apache-Cpuload | App-Webserver-Apache-Cpuload-custom | Contrôle permettant de vérifier l'utilisation CPU d'Apache        |
| Apache-Workers | App-Webserver-Apache-Workers-custom | Contrôle permettant de vérifier les processus apache en exécution |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Apache-Cpuload" label="Apache-Cpuload">

| Nom     | Unité |
|:--------|:------|
| cpuload | %     |

</TabItem>
<TabItem value="Apache-Requests" label="Apache-Requests">

| Nom                 | Unité |
|:--------------------|:------|
| avg_RequestPerSec   | N/A   |
| bytesPerSec         | B     |
| avg_bytesPerRequest | B     |
| avg_bytesPerSec     | B     |
| accessPerSec        | N/A   |

</TabItem>
<TabItem value="Apache-ResponseTime" label="Apache-ResponseTime">

| Nom  | Unité |
|:-----|:------|
| time | s     |

</TabItem>
<TabItem value="Apache-SlotStates" label="Apache-SlotStates">

| Nom                                 | Unité |
|:------------------------------------|:------|
| apache.slot.busy.count              | count |
| apache.slot.free.count              | count |
| apache.slot.waiting.count           | count |
| apache.slot.starting.count          | count |
| apache.slot.reading.count           | count |
| apache.slot.sending.count           | count |
| apache.slot.keepalive.count         | count |
| apache.slot.dnslookup.count         | count |
| apache.slot.closing.count           | count |
| apache.slot.logging.count           | count |
| apache.slot.gracefulyfinished.count | count |
| apache.slot.idlecleanupworker.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Apache-Workers" label="Apache-Workers">

| Nom          | Unité |
|:-------------|:------|
| idle_workers | N/A   |
| busy_workers | N/A   |

</TabItem>
</Tabs>

## Prérequis

Avant d'utiliser ce connecteur, assurez-vous que le serveur Apache à superviser est correctement configuré :

- Le module `mod_status` doit être activé. Il permet de générer un rapport en temps réel sur l'état du serveur, exploité par Centreon.
- La directive `ExtendedStatus` doit être activée pour collecter des statistiques détaillées.
- La page `/server-status` doit être accessible **depuis le collecteur Centreon**, sans authentification.
- L’adresse IP du collecteur doit être autorisée dans la configuration Apache.

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
dnf install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-webservers-apache-serverstatus
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Apache Server**
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
dnf install centreon-plugin-Applications-Webservers-Apache-Serverstatus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Webservers-Apache-Serverstatus
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-webservers-apache-serverstatus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Webservers-Apache-Serverstatus
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Webserver-Apache-ServerStatus-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APACHEPROTOCOL     | Protocol used http or https                                                                          | http              |             |
| APACHEPORT         | Port used by Apache                                                                                  | 80                |             |
| APACHEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Apache-Cpuload" label="Apache-Cpuload">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold for CpuLoad                                                                     |                   |             |
| WARNING      | Warning Threshold for CpuLoad                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Apache-Requests" label="Apache-Requests">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL      | Critical Threshold for Request per seconds                                                         |                   |             |
| WARNING       | Warning Threshold for Request per seconds                                                          |                   |             |
| CRITICALBYTES | Critical Threshold for Bytes per seconds                                                           |                   |             |
| WARNINGBYTES  | Warning Threshold for Bytes per seconds                                                            |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Apache-ResponseTime" label="Apache-ResponseTime">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical threshold in seconds (server-status page response time)                                   | 2                 |             |
| WARNING      | Warning threshold in seconds (server-status page response time)                                    | 1                 |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Apache-SlotStates" label="Apache-SlotStates">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Threshold                                                                                          |                   |             |
| WARNING      | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Apache-Workers" label="Apache-Workers">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold (%) of busy workers                                                             |                   |             |
| WARNING      | Warning Threshold (%) of busy workers                                                              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_apache_serverstatus.pl \
	--plugin=apps::apache::serverstatus::plugin \
	--mode=workers \
	--hostname=10.0.0.1 \
	--proto=http \
	--port=80  \
	--warning= \
	--critical=
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Busy workers : 85695 Idle workers : 93363 | 'idle_workers'=93363;;;0; 'busy_workers'=85695;;;0;
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
/usr/lib/centreon/plugins/centreon_apache_serverstatus.pl \
	--plugin=apps::apache::serverstatus::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                               | Modèle de service associé                |
|:-----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| cpuload [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/cpuload.pm)]           | App-Webserver-Apache-Cpuload-custom      |
| requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/requests.pm)]         | App-Webserver-Apache-Requests-custom     |
| responsetime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/responsetime.pm)] | App-Webserver-Apache-ResponseTime-custom |
| slotstates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/slotstates.pm)]     | App-Webserver-Apache-SlotStates-custom   |
| workers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/apache/serverstatus/mode/workers.pm)]           | App-Webserver-Apache-Workers-custom      |

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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Apache-Cpuload" label="Apache-Cpuload">

| Option        | Description                                                                                                                                                                                                                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port        |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto       |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath     |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username    |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password    |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic       |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header      |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --warning     |   Warning Threshold for CpuLoad                                                                                                                                                                                                                                                                                       |
| --critical    |   Critical Threshold for CpuLoad                                                                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="Apache-Requests" label="Apache-Requests">

| Option                 | Description                                                                                                                                                                                                                                                                                                           |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                          |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                     |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                             |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                                                                                           |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                      |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                              |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                      |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                         |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                               |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                        |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                  |
| --hostname             |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port                 |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto                |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath              |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials          |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username             |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password             |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout              |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header               |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --warning              |   Warning Threshold for Request per seconds                                                                                                                                                                                                                                                                           |
| --critical             |   Critical Threshold for Request per seconds                                                                                                                                                                                                                                                                          |
| --warning-bytes        |   Warning Threshold for Bytes per seconds                                                                                                                                                                                                                                                                             |
| --critical-bytes       |   Critical Threshold for Bytes per seconds                                                                                                                                                                                                                                                                            |
| --warning-access       |   Warning Threshold for Access per seconds                                                                                                                                                                                                                                                                            |
| --critical-access      |   Critical Threshold for Access per seconds                                                                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Apache-ResponseTime" label="Apache-ResponseTime">

| Option            | Description                                                                                                                                                                                                                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname        |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port            |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto           |   Specify https if needed                                                                                                                                                                                                                                                                                             |
| --urlpath         |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials     |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username        |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password        |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic           |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout         |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header          |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --unknown-status  |   Warning threshold for http response code                                                                                                                                                                                                                                                                            |
| --warning-status  |   Warning threshold for http response code                                                                                                                                                                                                                                                                            |
| --critical-status |   Critical threshold for http response code (default: '%\{http\_code\} \< 200 or %\{http\_code\} \>= 300')                                                                                                                                                                                                            |
| --warning         |   Warning threshold in seconds (server-status page response time)                                                                                                                                                                                                                                                     |
| --critical        |   Critical threshold in seconds (server-status page response time)                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Apache-SlotStates" label="Apache-SlotStates">

| Option            | Description                                                                                                                                                                                                                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                           |
| --hostname        |   IP Address or FQDN of the web server host                                                                                                                                                                                                                                                                           |
| --port            |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto           |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --urlpath         |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials     |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username        |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password        |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic           |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout         |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header          |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --units           |   Threshold unit (default: '%'. Can be: '%' or 'absolute')                                                                                                                                                                                                                                                            |
| --warning-*       |   Warning threshold. Can be: 'busy', 'free', 'waiting', 'starting', 'reading', 'sending', 'keepalive', 'dns-lookup', 'closing', 'logging', 'gracefuly-finished', 'idle-cleanup-worker'.                                                                                                                               |
| --critical-*      |   Critical threshold. Can be: 'busy', 'free', 'waiting', 'starting', 'reading', 'sending', 'keepalive', 'dns-lookup', 'closing', 'logging', 'gracefuly-finished', 'idle-cleanup-worker'.  =over 8)                                                                                                                    |

</TabItem>
<TabItem value="Apache-Workers" label="Apache-Workers">

| Option        | Description                                                                                                                                                                                                                                                                                                           |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    |   IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                 |
| --port        |   Port used by Apache                                                                                                                                                                                                                                                                                                 |
| --proto       |   Protocol to use http or https, http is default                                                                                                                                                                                                                                                                      |
| --urlpath     |   Set path to get server-status page in auto mode (default: '/server-status/?auto')                                                                                                                                                                                                                                   |
| --credentials |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username    |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password    |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic       |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --header      |   Set HTTP headers (multiple option)                                                                                                                                                                                                                                                                                  |
| --warning     |   Warning Threshold (%) of busy workers                                                                                                                                                                                                                                                                               |
| --critical    |   Critical Threshold (%) of busy workers                                                                                                                                                                                                                                                                              |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_apache_serverstatus.pl \
	--plugin=apps::apache::serverstatus::plugin \
	--mode=workers \
	--help
```
