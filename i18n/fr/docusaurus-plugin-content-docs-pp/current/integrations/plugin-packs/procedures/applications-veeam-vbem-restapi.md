---
id: applications-veeam-vbem-restapi
title: Veeam Backup Enterprise Manager
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Veeam Backup Enterprise Manager Rest API** apporte un modèle d'hôte :

* **App-Veeam-Vbem-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Veeam-Vbem-Restapi-custom" label="App-Veeam-Vbem-Restapi-custom">

| Alias        | Modèle de service                          | Description         | Découverte |
|:-------------|:-------------------------------------------|:--------------------|:----------:|
| Repositories | App-Veeam-Vbem-Restapi-Repositories-custom | Contrôle les dépôts | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Veeam-Vbem-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias | Modèle de service                  | Description       | Découverte |
|:------|:-----------------------------------|:------------------|:----------:|
| Jobs  | App-Veeam-Vbem-Restapi-Jobs-custom | Contrôle les jobs | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                        | Description                                    |
|:---------------------------------------|:-----------------------------------------------|
| App-Veeam-Vbem-Restapi-Job-Name        | Découvre les jobs et supervise le statut       |
| App-Veeam-Vbem-Restapi-Repository-Name | Découvre les dépôts et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| jobs.executions.detected.count              |       |
| *job_name*#job.executions.failed.percentage | %     |
| *job_name*#job.execution.last.seconds       | s     |
| *job_name*#job.running.duration.seconds     | s     |
| job execution status                        |       |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Métrique                                            | Unité |
|:----------------------------------------------------|:------|
| *repository_name*#repository.space.usage.bytes      | B     |
| *repository_name*#repository.space.free.bytes       | B     |
| *repository_name*#repository.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec des droits de lecture sur l'[API](https://helpcenter.veeam.com/docs/backup/em_rest/em_web_api_reference.html?ver=120) Veeam Backup Enterprise Manager est nécessaire.

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
dnf install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Veeam Backup Enterprise Manager Rest API**
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
dnf install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Veeam-Vbem-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                                                                                           | Valeur par défaut | Obligatoire |
|:--------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VBEMAPIUSERNAME     | Set username                                                                                          |                   | X           |
| VBEMAPIPASSWORD     | Set password                                                                                          |                   | X           |
| VBEMAPIPORT         | Port used                                                                                             | 9398              |             |
| VBEMAPIPROTOCOL     | Specify HTTPS if needed                                                                               | https             |             |
| VBEMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Macro                           | Description                                                                                                                                               | Valeur par défaut       | Obligatoire |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| TIMEFRAME                       | Timeframe to get BackupJobSession (in seconds. Default: 86400)                                                                                            | 86400                   |             |
| UNIT                            | Select the unit for last execution time threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds | s                       |             |
| FILTERUID                       | Filter jobs by UID                                                                                                                                        |                         |             |
| FILTERNAME                      | Filter jobs by name                                                                                                                                       |                         |             |
| FILTERTYPE                      | Filter jobs by type                                                                                                                                       |                         |             |
| WARNINGEXECUTIONSTATUS          | Set warning threshold for last job execution status (Default: %{status} =~ /warning/i). You can use the following variables like: %{status}, %{jobName}   | %{status} =~ /warning/i |             |
| CRITICALEXECUTIONSTATUS         | Set critical threshold for last job execution status (Default: %{status} =~ /failed/i). You can use the following variables: %{status}, %{jobName}        | %{status} =~ /failed/i  |             |
| WARNINGJOBEXECUTIONLAST         | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBEXECUTIONLAST        | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBEXECUTIONSFAILEDPRCT  | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBEXECUTIONSFAILEDPRCT | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBRUNNINGDURATION       | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBRUNNINGDURATION      | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBSEXECUTIONSDETECTED   | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBSEXECUTIONSDETECTED  | Thresholds                                                                                                                                                |                         |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                       | --verbose               |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME             | Filter repositories by name (can be a regexp)                                                       |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
	--mode=repositories \
	--hostname='10.0.0.1' \
	--port='9398' \
	--proto='https' \
	--api-username='myuser' \
	--api-password='mypass'  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All repositories are ok | 'Default Backup Repository#repository.space.usage.bytes'=136771342336B;;;0;268368347136 'Default Backup Repository#repository.space.free.bytes'=131597004800B;;;0;268368347136 'Default Backup Repository#repository.space.usage.percentage'=50.96%;;;0;100 'Repository-SCALITY-veeam#repository.space.usage.bytes'=0B;;;0;1048576000000000 'Repository-SCALITY-veeam#repository.space.free.bytes'=1048576000000000B;;;0;1048576000000000 'Repository-SCALITY-veeam#repository.space.usage.percentage'=0.00%;;;0;100 'Scale-out Backup Repository I3M#repository.space.usage.bytes'=1123733454848B;;;0;23890250670080 'Scale-out Backup Repository I3M#repository.space.free.bytes'=22766517215232B;;;0;23890250670080 'Scale-out Backup Repository I3M#repository.space.usage.percentage'=4.70%;;;0;100 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.usage.bytes'=158555994574848B;;;0;280007584776192 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.free.bytes'=121451590201344B;;;0;280007584776192 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.usage.percentage'=56.63%;;;0;100 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.usage.bytes'=163895073898496B;;;0;280007584776192 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.free.bytes'=116112510877696B;;;0;280007584776192 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.usage.percentage'=58.53%;;;0;100 'Scale-out Backup Repository ORACLE & SQL#repository.space.usage.bytes'=163858194489344B;;;0;280007584776192 'Scale-out Backup Repository ORACLE & SQL#repository.space.free.bytes'=116149390286848B;;;0;280007584776192 'Scale-out Backup Repository ORACLE & SQL#repository.space.usage.percentage'=58.52%;;;0;100
repository 'Default Backup Repository' space usage total: 249.94 GB used: 127.38 GB (50.96%) free: 122.56 GB (49.04%)
repository 'Repository-SCALITY-veeam' space usage total: 953.67 TB used: 0.00 B (0.00%) free: 953.67 TB (100.00%)
repository 'Scale-out Backup Repository I3M' space usage total: 21.73 TB used: 1.02 TB (4.70%) free: 20.71 TB (95.30%)
repository 'Scale-out Backup Repository INFRASTRUCTURE' space usage total: 254.67 TB used: 144.21 TB (56.63%) free: 110.46 TB (43.37%)
repository 'Scale-out Backup Repository MEDICAL & FONCTIONNEL' space usage total: 254.67 TB used: 149.06 TB (58.53%) free: 105.60 TB (41.47%)
repository 'Scale-out Backup Repository ORACLE & SQL' space usage total: 254.67 TB used: 149.03 TB (58.52%) free: 105.64 TB (41.48%)
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
/usr/lib/centreon/plugins//centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode              | Modèle de service associé                  |
|:------------------|:-------------------------------------------|
| cache             | Not used in this Monitoring Connector      |
| jobs              | App-Veeam-Vbem-Restapi-Jobs-custom         |
| list-jobs         | Used for service discovery                 |
| list-repositories | Used for service discovery                 |
| repositories      | App-Veeam-Vbem-Restapi-Repositories-custom |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Veeam Backup Enterprise Manager Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (Default: 9398)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | Set username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             | Set password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set timeout in seconds (Default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --cache-use                                | Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Option                      | Description                                                                                                                                                  |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-uid                | Filter jobs by UID.                                                                                                                                          |
| --filter-name               | Filter jobs by name.                                                                                                                                         |
| --filter-type               | Filter jobs by type.                                                                                                                                         |
| --timeframe                 | Timeframe to get BackupJobSession (in seconds. Default: 86400).                                                                                              |
| --unit                      | Select the unit for last execution time threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --unknown-execution-status  | Set unknown threshold for last job execution status. You can use the following variables: %{status}, %{jobName}                                              |
| --warning-execution-status  | Set warning threshold for last job execution status (Default: %{status} =~ /warning/i). You can use the following variables like: %{status}, %{jobName}      |
| --critical-execution-status | Set critical threshold for last job execution status (Default: %{status} =~ /failed/i). You can use the following variables: %{status}, %{jobName}           |
| --warning-* --critical-*    | Thresholds. Can be: 'jobs-executions-detected', 'job-executions-failed-prct', 'job-execution-last', 'job-running-duration'.                                  |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                   | Description                                                                   |
|:-------------------------|:------------------------------------------------------------------------------|
| --filter-name            | Filter repositories by name (can be a regexp).                                |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
	--mode=jobs \
	--help
```
