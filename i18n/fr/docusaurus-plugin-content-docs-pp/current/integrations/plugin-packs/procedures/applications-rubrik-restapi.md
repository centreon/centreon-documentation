---
id: applications-rubrik-restapi
title: Rubrik Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Rubrik Rest API** apporte un modèle d'hôte :

* **App-Rubrik-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Rubrik-Restapi" label="App-Rubrik-Restapi">

| Alias      | Modèle de service             | Description                            |
|:-----------|:------------------------------|:---------------------------------------|
| Cluster    | App-Rubrik-Cluster-Restapi    | Contrôle le cluster                    |
| Compliance | App-Rubrik-Compliance-Restapi | Contrôle la conformité des sauvegardes |
| Disks      | App-Rubrik-Disks-Restapi      | Contrôle les disques                   |
| Nodes      | App-Rubrik-Nodes-Restapi      | Contrôle les noeuds du cluster         |
| Storage    | App-Rubrik-Storage-Restapi    | Contrôle le système de stockage        |
| Tasks      | App-Rubrik-Tasks-Restapi      | Contrôle les tâches                    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Rubrik-Restapi** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias | Modèle de service       | Description       | Découverte |
|:------|:------------------------|:------------------|:-----------|
| Jobs  | App-Rubrik-Jobs-Restapi | Contrôle les jobs | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle             | Description                              |
|:----------------------------|:-----------------------------------------|
| App-Rubrik-Restapi-Job-Name | Découvre les jobs et supervise le statut |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| cluster status                                       |       |
| *cluster_name*#cluster.io.read.usage.bytespersecond  | B/s   |
| *cluster_name*#cluster.io.write.usage.bytespersecond | B/s   |
| *cluster_name*#cluster.io.read.usage.iops            | iops  |
| *cluster_name*#cluster.io.write.usage.iops           | iops  |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| backup.objects.incompliance.24h.count  |       |
| backup.objects.noncompliance.24h.count |       |

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *cluster_name*#cluster.disks.total.count  |       |
| *cluster_name*#cluster.disks.active.count |       |
| cluster disk status                       |       |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| jobs.executions.detected.count              |       |
| *job_name*#job.executions.failed.percentage | %     |
| *job_name*#job.execution.last.seconds       | s     |
| *job_name*#job.running.duration.seconds     | s     |
| last job execution status                   |       |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| *cluster_name*#cluster.nodes.total.count |       |
| *cluster_name*#cluster.nodes.ok.count    |       |
| cluster node status                      |       |

</TabItem>
<TabItem value="Storage" label="Storage">

| Métrique                          | Unité |
|:----------------------------------|:------|
| storage.space.usage.bytes         | B     |
| storage.space.free.bytes          | B     |
| storage.space.usage.percentage    | %     |
| storage.full.remaining.days.count |       |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Métrique                  | Unité |
|:--------------------------|:------|
| tasks.succeeded.24h.count |       |
| tasks.failed.24h.count    |       |
| tasks.canceled.24h.count  |       |

</TabItem>
</Tabs>

## Prérequis

L'API Rubrik REST fournit une interface RESTful pour travailler avec les clusters Rubrik et les *appliances* virtuelles Rubrik Edge. 

L'API peut être utilisée pour interroger, configurer et contrôler presque toutes les opérations du logiciel Rubrik.

Si vous avez accès à un cluster Rubrik, vous pouvez également utiliser l'aire de jeu Rubrik API à l'adresse suivante:

https://{{node_ip}}/docs/{{{v1|v2|internal}}/playground

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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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

| Macro                 | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| RUBRIKAPIPASSWORD     | API password                                                                                          |                   |             |
| RUBRIKAPIPORT         | Port used                                                                                             | 443               |             |
| RUBRIKAPIPROTO        | Specify https if needed                                                                               | https             |             |
| RUBRIKAPIUSERNAME     | API username                                                                                          |                   |             |
| RUBRIKAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Macro             | Description                                                                                                                | Valeur par défaut  | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------|:-------------------|:------------|
| CLUSTERID         | Which cluster to check (Default: 'me')                                                                                     | me                 |             |
| UNKNOWNSTATUS     | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                  |                    |             |
| WARNINGREAD       | Thresholds                                                                                                                 |                    |             |
| CRITICALREAD      | Thresholds                                                                                                                 |                    |             |
| WARNINGREADIOPS   | Thresholds                                                                                                                 |                    |             |
| CRITICALREADIOPS  | Thresholds                                                                                                                 |                    |             |
| CRITICALSTATUS    | Set critical threshold for status (Default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{name} | %{status} !~ /ok/i |             |
| WARNINGSTATUS     | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                  |                    |             |
| WARNINGWRITE      | Thresholds                                                                                                                 |                    |             |
| CRITICALWRITE     | Thresholds                                                                                                                 |                    |             |
| WARNINGWRITEIOPS  | Thresholds                                                                                                                 |                    |             |
| CRITICALWRITEIOPS | Thresholds                                                                                                                 |                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                        | --verbose          |             |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Macro                 | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGINCOMPLIANCE   | Thresholds                                                                                          |                   |             |
| CRITICALINCOMPLIANCE  | Thresholds                                                                                          |                   |             |
| WARNINGNONCOMPLIANCE  | Thresholds                                                                                          |                   |             |
| CRITICALNONCOMPLIANCE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro                      | Description                                                                                                                  | Valeur par défaut      | Obligatoire |
|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:-----------------------|:------------|
| CLUSTERID                  | Which cluster to check (Default: 'me')                                                                                       | me                     |             |
| FILTERDISKID               | Filter disks by disk id (can be a regexp)                                                                                    |                        |             |
| UNKNOWNDISKSTATUS          |                                                                                                                              |                        |             |
| WARNINGCLUSTERDISKSACTIVE  | Thresholds                                                                                                                   |                        |             |
| CRITICALCLUSTERDISKSACTIVE | Thresholds                                                                                                                   |                        |             |
| WARNINGCLUSTERDISKSTOTAL   | Thresholds                                                                                                                   |                        |             |
| CRITICALCLUSTERDISKSTOTAL  | Thresholds                                                                                                                   |                        |             |
| CRITICALDISKSTATUS         | Set critical threshold for status (Default: '%{status} !~ /active/i'). You can use the following variables: %{status}, %{id} | %{status} !~ /active/i |             |
| WARNINGDISKSTATUS          | Set warning threshold for status. You can use the following variables: %{status}, %{id}                                      |                        |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                          | --verbose              |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro                           | Description                                                                                                                                         | Valeur par défaut       | Obligatoire |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:------------|
| FILTERJOBID                     | Filter jobs by job ID                                                                                                                               |                         |             |
| FILTERJOBNAME                   | Filter jobs by job name                                                                                                                             |                         |             |
| FILTERJOBTYPE                   | Filter jobs by job type                                                                                                                             |                         |             |
| FILTERLOCATIONNAME              | Filter jobs by location name                                                                                                                        |                         |             |
| CRITICALEXECUTIONSTATUS         | Set critical threshold for last job execution status (Default: %{status} =~ /Failure/i). You can use the following variables: %{status}, %{jobName} | %{status} =~ /failure/i |             |
| WARNINGEXECUTIONSTATUS          | Set warning threshold for last job execution status. You can use the following variables: %{status}, %{jobName}                                     |                         |             |
| WARNINGJOBEXECUTIONLAST         | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBEXECUTIONLAST        | Thresholds                                                                                                                                          |                         |             |
| WARNINGJOBEXECUTIONSFAILEDPRCT  | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBEXECUTIONSFAILEDPRCT | Thresholds                                                                                                                                          |                         |             |
| WARNINGJOBRUNNINGDURATION       | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBRUNNINGDURATION      | Thresholds                                                                                                                                          |                         |             |
| WARNINGJOBSEXECUTIONSDETECTED   | Thresholds                                                                                                                                          |                         |             |
| CRITICALJOBSEXECUTIONSDETECTED  | Thresholds                                                                                                                                          |                         |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                 | --verbose               |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro                     | Description                                                                                                                              | Valeur par défaut  | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:------------|
| CLUSTERID                 | Which cluster to check (Default: 'me')                                                                                                   | me                 |             |
| FILTERNODEID              | Filter nodes by node id (can be a regexp)                                                                                                |                    |             |
| UNKNOWNNODESTATUS         | Set unknown threshold for status. You can use the following variables: %{status}, %{ip\_address}, %{id}                                  |                    |             |
| WARNINGCLUSTERNODESOK     | Thresholds                                                                                                                               |                    |             |
| CRITICALCLUSTERNODESOK    | Thresholds                                                                                                                               |                    |             |
| WARNINGCLUSTERNODESTOTAL  | Thresholds                                                                                                                               |                    |             |
| CRITICALCLUSTERNODESTOTAL | Thresholds                                                                                                                               |                    |             |
| CRITICALNODESTATUS        | Set critical threshold for status (Default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{ip\_address}, %{id} | %{status} !~ /ok/i |             |
| WARNINGNODESTATUS         | Set warning threshold for status. You can use the following variables: %{status}, %{ip\_address}, %{id}                                  |                    |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                      | --verbose          |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro                     | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGFULLREMAININGDAYS  | Thresholds                                                                                          |                   |             |
| CRITICALFULLREMAININGDAYS | Thresholds                                                                                          |                   |             |
| WARNINGUSAGE              | Thresholds                                                                                          |                   |             |
| CRITICALUSAGE             | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEFREE          | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEFREE         | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEPRCT          | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEPRCT         | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCANCELED   | Thresholds                                                                                          |                   |             |
| CRITICALCANCELED  | Thresholds                                                                                          |                   |             |
| WARNINGFAILED     | Thresholds                                                                                          |                   |             |
| CRITICALFAILED    | Thresholds                                                                                          |                   |             |
| WARNINGSUCCEEDED  | Thresholds                                                                                          |                   |             |
| CRITICALSUCCEEDED | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
    --plugin=apps::backup::rubrik::restapi::plugin \
    --mode=nodes \
    --hostname='10.0.0.1' \
    --proto='https' \
    --port='443' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --api-password='****' \
    --api-username='centreon' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: cluster 'RubrikOne' nodes are ok | 'RubrikOne#cluster.nodes.total.count'=7;;;0; 'RubrikOne#cluster.nodes.ok.count'=7;;;0;7
checking cluster 'RubrikOne'
node 'RVM15CS00XXXX' [ip address: 172.10.69.92] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.93] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.94] status: ok
node 'RVM18BS00XXXX' [ip address: 172.10.69.91] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.95] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.96] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.97] status: ok
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
	--plugin=apps::backup::rubrik::restapi::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode       | Modèle de service associé     |
|:-----------|:------------------------------|
| cluster    | App-Rubrik-Cluster-Restapi    |
| compliance | App-Rubrik-Compliance-Restapi |
| disks      | App-Rubrik-Disks-Restapi      |
| jobs       | App-Rubrik-Jobs-Restapi       |
| list-jobs  | Used for service discovery    |
| nodes      | App-Rubrik-Nodes-Restapi      |
| storage    | App-Rubrik-Storage-Restapi    |
| tasks      | App-Rubrik-Tasks-Restapi      |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global       |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global       |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global       |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global       |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global       |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output       |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output       |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output       |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Rubrik Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Api          |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Api          |
| --service-account                          | Service account ID (with --secret and --organization-id options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Api          |
| --secret                                   | Service account secret (with --service-account and --organization-id options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Api          |
| --organization-id                          | Organization ID (with --service-account and --secret options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Api          |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Api          |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Api          |
| --token                                    | Use token authentication. If option is empty, token is created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Api          |
| --timeout                                  | Set timeout in seconds (Default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Api          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Http global  |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Http global  |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Http global  |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Http global  |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention    |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Retention    |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Cluster" label="Cluster">

| Option                   | Description                                                                                                                  | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                         | Mode |
| --cluster-id             | Which cluster to check (Default: 'me').                                                                                      | Mode |
| --unknown-status         | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                    | Mode |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                    | Mode |
| --critical-status        | Set critical threshold for status (Default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{name}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'read' (B/s), 'write' (B/s), 'read-iops', 'write-iops'.                                                  | Mode |

</TabItem>
<TabItem value="Compliance" label="Compliance">

| Option                   | Description                                                                                   | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='noncompliance'   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'incompliance', 'noncompliance'.                                          | Mode |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                   | Description                                                                                                                    | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='disk-status'                                      | Mode |
| --cluster-id             | Which cluster to check (Default: 'me').                                                                                        | Mode |
| --filter-disk-id         | Filter disks by disk id (can be a regexp).                                                                                     | Mode |
| --unknown-disks-status   | Set unknown threshold for status. You can use the following variables: %{status}, %{id}                                        | Mode |
| --warning-disk-status    | Set warning threshold for status. You can use the following variables: %{status}, %{id}                                        | Mode |
| --critical-disk-status   | Set critical threshold for status (Default: '%{status} !~ /active/i'). You can use the following variables: %{status}, %{id}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'cluster-disks-total', 'cluster-disks-active'.                                                             | Mode |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                      | Description                                                                                                                                                  | Type |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-job-id             | Filter jobs by job ID.                                                                                                                                       | Mode |
| --filter-job-name           | Filter jobs by job name.                                                                                                                                     | Mode |
| --filter-job-type           | Filter jobs by job type.                                                                                                                                     | Mode |
| --filter-location-name      | Filter jobs by location name.                                                                                                                                | Mode |
| --unit                      | Select the unit for last execution time threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   | Mode |
| --unknown-execution-status  | Set unknown threshold for last job execution status. You can use the following variables: %{status}, %{jobName}                                              | Mode |
| --warning-execution-status  | Set warning threshold for last job execution status. You can use the following variables: %{status}, %{jobName}                                              | Mode |
| --critical-execution-status | Set critical threshold for last job execution status (Default: %{status} =~ /Failure/i). You can use the following variables: %{status}, %{jobName}          | Mode |
| --warning-* --critical-*    | Thresholds. Can be: 'jobs-executions-detected', 'job-executions-failed-prct', 'job-execution-last', 'job-running-duration'.                                  | Mode |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Option                   | Description                                                                                                                                | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='node-status'                                                  | Mode |
| --cluster-id             | Which cluster to check (Default: 'me').                                                                                                    | Mode |
| --filter-node-id         | Filter nodes by node id (can be a regexp).                                                                                                 | Mode |
| --unknown-node-status    | Set unknown threshold for status. You can use the following variables: %{status}, %{ip\_address}, %{id}                                    | Mode |
| --warning-node-status    | Set warning threshold for status. You can use the following variables: %{status}, %{ip\_address}, %{id}                                    | Mode |
| --critical-node-status   | Set critical threshold for status (Default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{ip\_address}, %{id}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'cluster-nodes-total', 'cluster-nodes-ok'.                                                                             | Mode |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                    | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='remaining'        | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'full-remaining-days'.    | Mode |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Option                   | Description                                                                            | Type |
|:-------------------------|:---------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='failed'   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'succeeded', 'failed', 'canceled'.                                 | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
	--plugin=apps::backup::rubrik::restapi::plugin \
	--mode=cluster \
    --help
```
