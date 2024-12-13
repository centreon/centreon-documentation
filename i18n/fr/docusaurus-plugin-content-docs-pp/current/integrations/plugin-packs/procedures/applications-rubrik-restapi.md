---
id: applications-rubrik-restapi
title: Rubrik Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Rubrik Rest API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Rubrik Rest API** apporte un modèle d'hôte :

* **App-Rubrik-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Rubrik-Restapi-custom" label="App-Rubrik-Restapi-custom">

| Alias      | Modèle de service                    | Description                            |
|:-----------|:-------------------------------------|:---------------------------------------|
| Cluster    | App-Rubrik-Cluster-Restapi-custom    | Contrôle le cluster                    |
| Compliance | App-Rubrik-Compliance-Restapi-custom | Contrôle la conformité des sauvegardes |
| Disks      | App-Rubrik-Disks-Restapi-custom      | Contrôle les disques                   |
| Nodes      | App-Rubrik-Nodes-Restapi-custom      | Contrôle les noeuds du cluster         |
| Storage    | App-Rubrik-Storage-Restapi-custom    | Contrôle le système de stockage        |
| Tasks      | App-Rubrik-Tasks-Restapi-custom      | Contrôle les tâches                    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Rubrik-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias | Modèle de service              | Description       | Découverte |
|:------|:-------------------------------|:------------------|:----------:|
| Jobs  | App-Rubrik-Jobs-Restapi-custom | Contrôle les jobs | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle             | Description                              |
|:----------------------------|:-----------------------------------------|
| App-Rubrik-Restapi-Job-Name | Découvre les jobs et supervise le statut |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| status                                           | N/A   |
| *clusters*#cluster.io.read.usage.bytespersecond  | B/s   |
| *clusters*#cluster.io.write.usage.bytespersecond | B/s   |
| *clusters*#cluster.io.read.usage.iops            | iops  |
| *clusters*#cluster.io.write.usage.iops           | iops  |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| backup.objects.incompliance.24h.count  | count |
| backup.objects.noncompliance.24h.count | count |

</TabItem>
<TabItem value="Disks" label="Disks">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| *clusters*~cluster.disks.total.count  | count |
| *clusters*~cluster.disks.active.count | count |
| disk-status                           | N/A   |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| jobs.executions.detected.count          | count |
| *jobs*~job.executions.failed.percentage | %     |
| *jobs*~job.execution.last.seconds       | s     |
| *jobs*~job.running.duration.seconds     | s     |
| execution-status                        | N/A   |
| execution-status                        | N/A   |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| *clusters*~cluster.nodes.total.count | count |
| *clusters*~cluster.nodes.ok.count    | count |
| node-status                          | N/A   |

</TabItem>
<TabItem value="Storage" label="Storage">

| Nom                               | Unité |
|:----------------------------------|:------|
| storage.space.usage.bytes         | B     |
| storage.space.free.bytes          | B     |
| storage.space.usage.percentage    | %     |
| storage.full.remaining.days.count | d     |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Nom                       | Unité |
|:--------------------------|:------|
| tasks.succeeded.24h.count | count |
| tasks.failed.24h.count    | count |
| tasks.canceled.24h.count  | count |

</TabItem>
</Tabs>

## Prérequis

L'API Rubrik REST fournit une interface RESTful pour travailler avec les clusters Rubrik et les *appliances* virtuelles Rubrik Edge. 

L'API peut être utilisée pour interroger, configurer et contrôler presque toutes les opérations du logiciel Rubrik.

Si vous avez accès à un cluster Rubrik, vous pouvez également utiliser l'aire de jeu Rubrik API à l'adresse suivante:

https://\{\{node_ip\}\}/docs/\{\{v1|v2|internal\}\}/playground

_Note : les paramètres internes de l'API peuvent changer entre les versions du MDP2_

Plus d'informations disponibles sur : https://github.com/rubrikinc/api-documentation

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
dnf install centreon-pack-applications-rubrik-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-rubrik-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-rubrik-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-rubrik-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Rubrik Rest API**
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
dnf install centreon-plugin-Applications-Rubrik-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Rubrik-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-rubrik-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Rubrik-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Rubrik-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                   | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RUBRIKAPIUSERNAME       | API username (Mandatory with API password for the first authentication way)                                                                        |                   | X           |
| RUBRIKAPIPASSWORD       | API password (Mandatory with API username for the first authentication way)                                                                        |                   | X           |
| RUBRIKAPISERVICEACCOUNT | Service account ID (Mandatory with API service account secret for the second authentication way)                                                   |                   | X           |
| RUBRIKAPISECRET         | Service account secret (Mandatory with API service account ID for the second authentication way)                                                   |                   | X           |
| RUBRIKAPITOKEN          | Use token authentication (the third way to authenticate). If option is empty, token is created.                                                    |                   | X           |
| RUBRIKAPIPROTO          | Specify https if needed                                                                                                         | https             |             |
| RUBRIKAPIPORT           | Port used                                                                                                                            | 443               |             |
| RUBRIKAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Macro             | Description                                                                                                                                           | Valeur par défaut  | Obligatoire |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| CLUSTERID         | Which cluster to check (default: 'me')                                                                                                                | me                 |             |
| UNKNOWNSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{name\}                                  |                    |             |
| WARNINGREAD       | Threshold                                                                                                                                             |                    |             |
| CRITICALREAD      | Threshold                                                                                                                                             |                    |             |
| WARNINGREADIOPS   | Threshold                                                                                                                                             |                    |             |
| CRITICALREADIOPS  | Threshold                                                                                                                                             |                    |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /ok/i'). You can use the following variables: %\{status\}, %\{name\} | %\{status\} !~ /ok/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                  |                    |             |
| WARNINGWRITE      | Threshold                                                                                                                                             |                    |             |
| CRITICALWRITE     | Threshold                                                                                                                                             |                    |             |
| WARNINGWRITEIOPS  | Threshold                                                                                                                                             |                    |             |
| CRITICALWRITEIOPS | Threshold                                                                                                                                             |                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                    | --verbose          |             |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGINCOMPLIANCE   | Threshold                                                                                          |                   |             |
| CRITICALINCOMPLIANCE  | Threshold                                                                                          |                   |             |
| WARNINGNONCOMPLIANCE  | Threshold                                                                                          |                   |             |
| CRITICALNONCOMPLIANCE | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro                      | Description                                                                                                                                             | Valeur par défaut      | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| CLUSTERID                  | Which cluster to check (default: 'me')                                                                                                                  | me                     |             |
| FILTERDISKID               | Filter disks by disk ID (can be a regexp)                                                                                                               |                        |             |
| UNKNOWNDISKSTATUS          |                                                                                                                                                         |                        |             |
| WARNINGCLUSTERDISKSACTIVE  | Threshold                                                                                                                                               |                        |             |
| CRITICALCLUSTERDISKSACTIVE | Threshold                                                                                                                                               |                        |             |
| WARNINGCLUSTERDISKSTOTAL   | Threshold                                                                                                                                               |                        |             |
| CRITICALCLUSTERDISKSTOTAL  | Threshold                                                                                                                                               |                        |             |
| CRITICALDISKSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /active/i'). You can use the following variables: %\{status\}, %\{id\} | %\{status\} !~ /active/i |             |
| WARNINGDISKSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{id\}                                      |                        |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                      | --verbose              |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro                           | Description                                                                                                                                         | Valeur par défaut       | Obligatoire |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERJOBID                     | Filter jobs by job ID                                                                                                                               |                         |             |
| FILTERJOBNAME                   | Filter jobs by job name                                                                                                                             |                         |             |
| FILTERJOBTYPE                   | Filter jobs by job type                                                                                                                             |                         |             |
| FILTEROBJECTTYPE                | Filter jobs by object type                                                                                                                          |                         |             |
| FILTERLOCATIONNAME              | Filter jobs by location name                                                                                                                        |                         |             |
| CRITICALEXECUTIONSTATUS         | Set critical threshold for last job execution status (default: %\{status\} =~ /Failure/i). You can use the following variables: %\{status\}, %\{jobName\} | %\{status\} =~ /failure/i |             |
| WARNINGEXECUTIONSTATUS          | Set warning threshold for last job execution status. You can use the following variables: %\{status\}, %\{jobName\}                                     |                         |             |
| WARNINGJOBEXECUTIONLAST         | Threshold                                                                                                                                           |                         |             |
| CRITICALJOBEXECUTIONLAST        | Threshold                                                                                                                                           |                         |             |
| WARNINGJOBEXECUTIONSFAILEDPRCT  | Threshold                                                                                                                                           |                         |             |
| CRITICALJOBEXECUTIONSFAILEDPRCT | Threshold                                                                                                                                           |                         |             |
| WARNINGJOBRUNNINGDURATION       | Threshold                                                                                                                                           |                         |             |
| CRITICALJOBRUNNINGDURATION      | Threshold                                                                                                                                           |                         |             |
| WARNINGJOBSEXECUTIONSDETECTED   | Threshold                                                                                                                                           |                         |             |
| CRITICALJOBSEXECUTIONSDETECTED  | Threshold                                                                                                                                           |                         |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                  | --verbose               |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro                     | Description                                                                                                                                                         | Valeur par défaut  | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| CLUSTERID                 | Which cluster to check (default: 'me')                                                                                                                              | me                 |             |
| FILTERNODEID              | Filter nodes by node ID (can be a regexp)                                                                                                                           |                    |             |
| UNKNOWNNODESTATUS         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{ip_address\}, %\{id\}                                  |                    |             |
| WARNINGCLUSTERNODESOK     | Threshold                                                                                                                                                           |                    |             |
| CRITICALCLUSTERNODESOK    | Threshold                                                                                                                                                           |                    |             |
| WARNINGCLUSTERNODESTOTAL  | Threshold                                                                                                                                                           |                    |             |
| CRITICALCLUSTERNODESTOTAL | Threshold                                                                                                                                                           |                    |             |
| CRITICALNODESTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /ok/i'). You can use the following variables: %\{status\}, %\{ip_address\}, %\{id\} | %\{status\} !~ /ok/i |             |
| WARNINGNODESTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{ip_address\}, %\{id\}                                  |                    |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                  | --verbose          |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFULLREMAININGDAYS  | Threshold                                                                                          |                   |             |
| CRITICALFULLREMAININGDAYS | Threshold                                                                                          |                   |             |
| WARNINGUSAGE              | Threshold                                                                                          |                   |             |
| CRITICALUSAGE             | Threshold                                                                                          |                   |             |
| WARNINGUSAGEFREE          | Threshold                                                                                          |                   |             |
| CRITICALUSAGEFREE         | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT          | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT         | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCANCELED   | Threshold                                                                                          |                   |             |
| CRITICALCANCELED  | Threshold                                                                                          |                   |             |
| WARNINGFAILED     | Threshold                                                                                          |                   |             |
| CRITICALFAILED    | Threshold                                                                                          |                   |             |
| WARNINGSUCCEEDED  | Threshold                                                                                          |                   |             |
| CRITICALSUCCEEDED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
	--plugin=apps::backup::rubrik::restapi::plugin \
	--mode=jobs \
	--hostname='10.0.0.1' \
	--api-username='username' \
	--api-password='password' \
	--port='443' \
	--proto='https'  \
	--filter-job-id='' \
	--filter-job-name='' \
	--filter-job-type='' \
	--filter-object-type='' \
	--filter-location-name='' \
	--warning-job-execution-last='' \
	--critical-job-execution-last='' \
	--warning-job-running-duration='' \
	--critical-job-running-duration='' \
	--warning-job-executions-failed-prct='' \
	--critical-job-executions-failed-prct='' \
	--warning-jobs-executions-detected='' \
	--critical-jobs-executions-detected='' \
	--warning-execution-status='' \
	--critical-execution-status='%\{status\} =~ /failure/i' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: job 'centreon.groupe.active volumes' \[type: backup\] number of failed executions: 0.00 % - last execution 1M 2w 5d 7h 14m 47s - last execution started: 2024-07-18T20:00:01.382Z status: Success | 'jobs.executions.detected.count'=2;;;0; 'centreon.groupe.active volumes~backup#job.executions.failed.percentage'=0.00%;;;0;100 'centreon.groupe.active volumes~backup#job.execution.last.seconds'=4297430s;;;0;

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
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
	--plugin=apps::backup::rubrik::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                             | Modèle de service associé             |
|:---------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/cache.pm)]           | Not used in this Monitoring Connector |
| cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/cluster.pm)]       | App-Rubrik-Cluster-Restapi-custom     |
| compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/compliance.pm)] | App-Rubrik-Compliance-Restapi-custom  |
| disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/disks.pm)]           | App-Rubrik-Disks-Restapi-custom       |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/jobs.pm)]             | App-Rubrik-Jobs-Restapi-custom        |
| list-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/listjobs.pm)]    | Used for service discovery            |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/nodes.pm)]           | App-Rubrik-Nodes-Restapi-custom       |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/storage.pm)]       | App-Rubrik-Storage-Restapi-custom     |
| tasks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/rubrik/restapi/mode/tasks.pm)]           | App-Rubrik-Tasks-Restapi-custom       |

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
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
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
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file                            |   Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --service-account                          |   Service account ID (with --secret and --organization-id options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --secret                                   |   Service account secret (with --service-account and --organization-id options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --organization-id                          |   Organization ID (with --service-account and --secret options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --api-username                             |   API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-password                             |   API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --token                                    |   Use token authentication. If option is empty, token is created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --cache-use                                |   Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Option                   | Description                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                    |
| --cluster-id             |   Which cluster to check (default: 'me').                                                                                                                 |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{name\}                                    |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                    |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /ok/i'). You can use the following variables: %\{status\}, %\{name\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'read' (B/s), 'write' (B/s), 'read-iops', 'write-iops'.                                                                             |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Option                   | Description                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='noncompliance'   |
| --warning-* --critical-* |   Thresholds. Can be: 'incompliance', 'noncompliance'.                                          |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                   | Description                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='disk-status'                                                                 |
| --cluster-id             |   Which cluster to check (default: 'me').                                                                                                                   |
| --filter-disk-id         |   Filter disks by disk ID (can be a regexp).                                                                                                                |
| --unknown-disks-status   |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{id\}                                        |
| --warning-disk-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{id\}                                        |
| --critical-disk-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /active/i'). You can use the following variables: %\{status\}, %\{id\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'cluster-disks-total', 'cluster-disks-active'.                                                                                        |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                      | Description                                                                                                                                                           |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-job-id             |   Filter jobs by job ID.                                                                                                                                              |
| --filter-job-name           |   Filter jobs by job name.                                                                                                                                            |
| --filter-job-type           |   Filter jobs by job type.                                                                                                                                            |
| --filter-object-type        |   Filter jobs by object type.                                                                                                                                         |
| --filter-location-name      |   Filter jobs by location name.                                                                                                                                       |
| --unit                      |   Select the time unit for last execution time thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --limit                     |   Define the number of entries to retrieve for the pagination (default: 500).                                                                                         |
| --check-retention           |   Use the retention file to check if a job have been detected once but does not appear in the API response.                                                           |
| --unknown-execution-status  |   Set unknown threshold for last job execution status. You can use the following variables: %\{status\}, %\{jobName\}                                                     |
| --warning-execution-status  |   Set warning threshold for last job execution status. You can use the following variables: %\{status\}, %\{jobName\}                                                     |
| --critical-execution-status |   Set critical threshold for last job execution status (default: %\{status\} =~ /Failure/i). You can use the following variables: %\{status\}, %\{jobName\}                 |
| --warning-* --critical-*    |   Thresholds. Can be: 'jobs-executions-detected', 'job-executions-failed-prct', 'job-execution-last', 'job-running-duration'.                                         |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='node-status'                                                                             |
| --cluster-id             |   Which cluster to check (default: 'me').                                                                                                                               |
| --filter-node-id         |   Filter nodes by node ID (can be a regexp).                                                                                                                            |
| --unknown-node-status    |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{ip_address\}, %\{id\}                                    |
| --warning-node-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{ip_address\}, %\{id\}                                    |
| --critical-node-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /ok/i'). You can use the following variables: %\{status\}, %\{ip_address\}, %\{id\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'cluster-nodes-total', 'cluster-nodes-ok'.                                                                                                        |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='remaining'        |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'full-remaining-days'.    |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Option                   | Description                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='failed'   |
| --warning-* --critical-* |   Thresholds. Can be: 'succeeded', 'failed', 'canceled'.                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
	--plugin=apps::backup::rubrik::restapi::plugin \
	--mode=jobs \
	--help
```
