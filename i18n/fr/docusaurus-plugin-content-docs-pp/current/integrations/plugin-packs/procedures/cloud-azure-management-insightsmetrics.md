---
id: cloud-azure-management-insightsmetrics
title: Azure InsightsMetrics
description: "Supervisez les machines virtuelles Azure via l'API LogAnalytics et la base InsightsMetrics : CPU, mémoire et disques logiques."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Vue d'ensemble

> Ce Pack est fourni à titre expérimental (version 2.x.x).

Le connecteur **Azure InsightsMetrics** permet de superviser des métriques additionnelles relatives aux ressources Azure. Pour cela,
elle se base sur l'API *LogAnalytics* d'Azure et exécute des requêtes KustoQL sur la base de données InsightsMetrics.
Ce connecteur permet par exemple de récupérer et de superviser les indicateurs système (CPU, mémoire, disques...) de Virtual Machines directement sur Azure.

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Azure InsightsMetrics**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure InsightsMetrics** apporte un modèle d'hôte :

* **Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom" label="Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom">

| Alias  | Modèle de service                                                       | Description                                          |
|:-------|:------------------------------------------------------------------------|:-----------------------------------------------------|
| Cpu    | Cloud-Azure-Management-InsightsMetrics-VirtualMachine-Cpu-Api-custom    | Contrôle le CPU des VM Azure via InsightsMetrics     |
| Memory | Cloud-Azure-Management-InsightsMetrics-VirtualMachine-Memory-Api-custom | Contrôle la mémoire des VM Azure via InsightsMetrics |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                | Modèle de service                                                                     | Description                                                    | Découverte |
|:---------------------|:--------------------------------------------------------------------------------------|:---------------------------------------------------------------|:----------:|
| Logical-Disks-Global | Cloud-Azure-Management-InsightsMetrics-VirtualMachine-Logical-Disks-Global-Api-custom | Contrôle les disques logiques des VM Azure via InsightsMetrics | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                                              | Description                                               |
|:-----------------------------------------------------------------------------|:----------------------------------------------------------|
| Cloud-Azure-Management-InsightsMetrics-Api-VirtualMachine-Logical-Disks-Name | Discover the disk partitions and monitor space occupation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom                                                                  | Unité |
|:---------------------------------------------------------------------|:------|
| *computer*~azure.insights.cpu.average.utilization.percentage         | %     |
| *computer*~*cpu_core*#azure.insights.cpu.core.utilization.percentage | %     |

</TabItem>
<TabItem value="Logical-Disks-Global" label="Logical-Disks-Global">

| Nom                                                                        | Unité |
|:---------------------------------------------------------------------------|:------|
| status                                                                     | N/A   |
| status                                                                     | N/A   |
| *computer*~*disk_name1*#azure.insights.logicaldisk.used.bytes              | B     |
| *computer*~*disk_name2*#azure.insights.logicaldisk.used.bytes              | B     |
| *computer*~*disk_name1*#azure.insights.logicaldisk.used.percentage         | %     |
| *computer*~*disk_name2*#azure.insights.logicaldisk.used.percentage         | %     |
| *computer*~*disk_name1*#azure.insights.logicaldisk.free.percentage         | %     |
| *computer*~*disk_name2*#azure.insights.logicaldisk.free.percentage         | %     |
| reads-persecond                                                            | N/A   |
| reads-persecond                                                            | N/A   |
| *computer*~*disk_name1*#azure.insights.logicaldisks.io.readbytespersecond  | B/s   |
| *computer*~*disk_name2*#azure.insights.logicaldisks.io.readbytespersecond  | B/s   |
| writes-persecond                                                           | N/A   |
| writes-persecond                                                           | N/A   |
| *computer*~*disk_name1*#azure.insights.logicaldisks.io.writebytespersecond | B/s   |
| *computer*~*disk_name2*#azure.insights.logicaldisks.io.writebytespersecond | B/s   |
| transfers-persecond                                                        | N/A   |
| transfers-persecond                                                        | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| *computer*~azure.insights.memory.usage.bytes          | B     |
| *computer*~azure.insights.memory.usage.percentage     | %     |
| *computer*~azure.insights.memory.available.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir
les prérequis nécessaires pour interroger les API d'Azure.

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-azure-management-insightsmetrics
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-management-insightsmetrics
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-azure-management-insightsmetrics
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-management-insightsmetrics
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure InsightsMetrics**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-azure-management-insightsmetrics-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Management-InsightsMetrics-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Management-InsightsMetrics-VirtualMachine-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

| Macro                     | Description                                                                                                                                                                                                                                    | Valeur par défaut           | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| AZURECLIENTID             | Set Azure client ID                                                                                                                                                                                                                            |                             | X           |
| AZURECLIENTSECRET         | Set Azure client secret                                                                                                                                                                                                                        |                             | X           |
| AZURECUSTOMMODE           | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                                                                                                                     | api                         |             |
| AZURELOGANALYTICSENDPOINT | Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                    | https://api.loganalytics.io |             |
| AZURERESOURCE             | Filter on a specific Azure "computer" based on the full resource ID. Example: --filter-resourceid='/subscriptions/1234abcd-5678-defg-9012-3456789abcde/resourcegroups/my\_resourcegroup/providers/microsoft.compute/virtualmachines/azure-vm1' |                             |             |
| AZURESUBSCRIPTION         | Set Azure subscription ID                                                                                                                                                                                                                      |                             | X           |
| AZURETENANT               | Set Azure tenant ID                                                                                                                                                                                                                            |                             | X           |
| AZUREWORKSPACEID          | (mandatory) Specify the Azure Log Analytics Workspace ID                                                                                                                                                                                       |                             |             |
| PROXYURL                  | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                       |                             |             |
| EXTRAOPTIONS              | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                           |                             |             |

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCPUID                          | Filter on specific CPU ID                                                                          |                   |             |
| WARNINGAVERAGEUTILIZATIONPERCENTAGE  | Threshold                                                                                          | 90                |             |
| CRITICALAVERAGEUTILIZATIONPERCENTAGE | Threshold                                                                                          | 95                |             |
| WARNINGCOREUTILIZATIONPERCENTAGE     | Threshold                                                                                          |                   |             |
| CRITICALCOREUTILIZATIONPERCENTAGE    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Logical-Disks-Global" label="Logical-Disks-Global">

| Macro                       | Description                                                                                        | Valeur par défaut       | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERDISK                  | Filter on specific logical(s) disk(s)                                                              | .*                      |             |
| WARNINGFREEPERCENTAGE       | Threshold                                                                                          |                         |             |
| CRITICALFREEPERCENTAGE      | Threshold                                                                                          |                         |             |
| WARNINGREADBYTESPERSECOND   | Threshold                                                                                          |                         |             |
| CRITICALREADBYTESPERSECOND  | Threshold                                                                                          |                         |             |
| WARNINGREADSPERSECOND       | Threshold                                                                                          |                         |             |
| CRITICALREADSPERSECOND      | Threshold                                                                                          |                         |             |
| CRITICALSTATUS              | Critical threshold on logical disk status (default: '%\{status\} eq "NOT OK"')                     | %\{status\} eq "NOT OK" |             |
| WARNINGSTATUS               | Warning threshold on logical disk status (default: none)                                           |                         |             |
| WARNINGTRANSFERSPERSECOND   | Threshold                                                                                          |                         |             |
| CRITICALTRANSFERSPERSECOND  | Threshold                                                                                          |                         |             |
| WARNINGUSAGE                | Threshold                                                                                          |                         |             |
| CRITICALUSAGE               | Threshold                                                                                          |                         |             |
| WARNINGUSAGEPERCENTAGE      | Threshold                                                                                          | 90                      |             |
| CRITICALUSAGEPERCENTAGE     | Threshold                                                                                          | 95                      |             |
| WARNINGWRITEBYTESPERSECOND  | Threshold                                                                                          |                         |             |
| CRITICALWRITEBYTESPERSECOND | Threshold                                                                                          |                         |             |
| WARNINGWRITESPERSECOND      | Threshold                                                                                          |                         |             |
| CRITICALWRITESPERSECOND     | Threshold                                                                                          |                         |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose               |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                       | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVAILABLEPERCENTAGE  | Threshold                                                                                          |                   |             |
| CRITICALAVAILABLEPERCENTAGE | Threshold                                                                                          |                   |             |
| WARNINGUSAGE                | Threshold                                                                                          |                   |             |
| CRITICALUSAGE               | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPERCENTAGE      | Threshold                                                                                          | 90                |             |
| CRITICALUSAGEPERCENTAGE     | Threshold                                                                                          | 95                |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance Azure en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_azure_management_insightsmetrics_api.pl \
	--plugin=cloud::azure::management::insightsmetrics::plugin \
	--mode=logical-disks \
	--custommode='api' \
	--management-endpoint='https://api.loganalytics.io' \
	--subscription='xxxxxx' \
	--tenant='xxxxxx' \
	--client-id='xxxxxx' \
	--client-secret='xxxxxx' \
	--workspace-id='xxxxxx' \
	--filter-resourceid='' \
	--proxyurl=''  \
	--filter-disk='.*' \
	--warning-status='' \
	--critical-status='%\{status\} eq "NOT OK"' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-percentage='90' \
	--critical-usage-percentage='95' \
	--warning-free-percentage='' \
	--critical-free-percentage='' \
	--warning-reads-persecond='' \
	--critical-reads-persecond='' \
	--warning-read-bytes-persecond='' \
	--critical-read-bytes-persecond='' \
	--warning-writes-persecond='' \
	--critical-writes-persecond='' \
	--warning-write-bytes-persecond='' \
	--critical-write-bytes-persecond='' \
	--warning-transfers-persecond='' \
	--critical-transfers-persecond='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All logical disks are ok | 'computer~disk_name1#azure.insights.logicaldisk.used.bytes'=89131B;;;0; 'computer~disk_name2#azure.insights.logicaldisk.used.bytes'=10393B;;;0; 'computer~disk_name1#azure.insights.logicaldisk.used.percentage'=425%;0:90;0:95;0;100 'computer~disk_name2#azure.insights.logicaldisk.used.percentage'=59588%;0:90;0:95;0;100 'computer~disk_name1#azure.insights.logicaldisk.free.percentage'=22084%;;;0;100 'computer~disk_name2#azure.insights.logicaldisk.free.percentage'=65395%;;;0;100 'computer~disk_name1#azure.insights.logicaldisks.io.readspersecond'=62496;;;0; 'computer~disk_name2#azure.insights.logicaldisks.io.readspersecond'=2683;;;0; 'computer~disk_name1#azure.insights.logicaldisks.io.readbytespersecond'=79647B/s;;;0; 'computer~disk_name2#azure.insights.logicaldisks.io.readbytespersecond'=49971B/s;;;0; 'computer~disk_name1#azure.insights.logicaldisks.io.writespersecond'=47277;;;0; 'computer~disk_name2#azure.insights.logicaldisks.io.writespersecond'=59012;;;0; 'computer~disk_name1#azure.insights.logicaldisks.io.writebytespersecond'=82857B/s;;;0; 'computer~disk_name2#azure.insights.logicaldisks.io.writebytespersecond'=76189B/s;;;0; 'computer~disk_name1#azure.insights.logicaldisks.io.transferspersecond'=53698;;;0; 'computer~disk_name2#azure.insights.logicaldisks.io.transferspersecond'=58393;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_management_insightsmetrics_api.pl \
	--plugin=cloud::azure::management::insightsmetrics::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                       | Modèle de service associé                                                             |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/management/insightsmetrics/mode/cpu.pm)]                             | Cloud-Azure-Management-InsightsMetrics-VirtualMachine-Cpu-Api-custom                  |
| list-logical-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/management/insightsmetrics/mode/listlogicaldisks.pm)] | Used for service discovery                                                            |
| logical-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/management/insightsmetrics/mode/logicaldisks.pm)]          | Cloud-Azure-Management-InsightsMetrics-VirtualMachine-Logical-Disks-Global-Api-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/management/insightsmetrics/mode/memory.pm)]                       | Cloud-Azure-Management-InsightsMetrics-VirtualMachine-Memory-Api-custom               |

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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --subscription                             |   Set Azure subscription ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --tenant                                   |   Set Azure tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --client-id                                |   Set Azure client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --client-secret                            |   Set Azure client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --login-endpoint                           |   Set Azure login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --management-endpoint                      |   Set Azure management endpoint URL (default: 'https://management.azure.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --interval                                 |   Set interval of the metric query (can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --aggregation                              |   Define how the data must be aggregated. Available aggregations: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --zeroed                                   |   Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option              | Description                                                                                                                                                                                                                                        |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --workspace-id      |  (mandatory) Specify the Azure Log Analytics Workspace ID.                                                                                                                                                                                         |
| --filter-computer   |   Filter on a specific Azure "computer" name. Example: --filter-name='azure-vm1'                                                                                                                                                                   |
| --filter-resourceid |   Filter on a specific Azure "computer" based on the full resource ID. Example: --filter-resourceid='/subscriptions/1234abcd-5678-defg-9012-3456789abcde/resourcegroups/my\_resourcegroup/providers/microsoft.compute/virtualmachines/azure-vm1'   |
| --filter-cpu        |   Filter on specific CPU ID.                                                                                                                                                                                                                       |
| --warning-*         |   Warning threshold where '*' can be: 'average-utilization-percentage', 'core-utilization-percentage'                                                                                                                                              |
| --critical-*        |   Critical threshold where '*' can be: 'average-utilization-percentage', 'core-utilization-percentage'                                                                                                                                             |

</TabItem>
<TabItem value="Logical-Disks-Global" label="Logical-Disks-Global">

| Option              | Description                                                                                                                                                                                                                                        |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --workspace-id      |  (mandatory) Specify the Azure Log Analytics Workspace ID.                                                                                                                                                                                         |
| --filter-computer   |   Filter on a specific Azure "computer" name. Example: --filter-name='azure-vm1'                                                                                                                                                                   |
| --filter-resourceid |   Filter on a specific Azure "computer" based on the full resource ID. Example: --filter-resourceid='/subscriptions/1234abcd-5678-defg-9012-3456789abcde/resourcegroups/my\_resourcegroup/providers/microsoft.compute/virtualmachines/azure-vm1'   |
| --filter-disk       |   Filter on specific logical(s) disk(s).                                                                                                                                                                                                           |
| --warning-status    |   Warning threshold on logical disk status (default: none).                                                                                                                                                                                        |
| --critical-status   |   Critical threshold on logical disk status (default: '%\{status\} eq "NOT OK"').                                                                                                                                                                  |
| --warning-*         |   Warning threshold where '*' can be: 'usage', 'usage-percentage', 'free-percentage', 'reads-persecond', 'read-bytes-persecond', 'writes-persecond', 'write-bytes-persecond', 'transfers-persecond'                                                |
| --critical-*        |   Critical threshold where '*' can be: 'usage', 'usage-percentage', 'free-percentage', 'reads-persecond', 'read-bytes-persecond', 'writes-persecond', 'write-bytes-persecond', 'transfers-persecond'                                               |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option              | Description                                                                                                                                                                                                                                        |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --workspace-id      |  (mandatory) Specify the Azure Log Analytics Workspace ID.                                                                                                                                                                                         |
| --filter-computer   |   Filter on a specific Azure "computer" name. Example: --filter-name='azure-vm1'                                                                                                                                                                   |
| --filter-resourceid |   Filter on a specific Azure "computer" based on the full resource ID. Example: --filter-resourceid='/subscriptions/1234abcd-5678-defg-9012-3456789abcde/resourcegroups/my\_resourcegroup/providers/microsoft.compute/virtualmachines/azure-vm1'   |
| --warning-*         |   Warning threshold where '*' can be: 'usage', 'usage-percentage', 'available-percentage'                                                                                                                                                          |
| --critical-*        |   Critical threshold where '*' can be: 'usage', 'usage-percentage', 'available-percentage'                                                                                                                                                         |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_management_insightsmetrics_api.pl \
	--plugin=cloud::azure::management::insightsmetrics::plugin \
	--mode=logical-disks \
	--help
```
