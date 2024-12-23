---
id: applications-commvault-commserve-restapi
title: Commvault CommServe Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Commvault Commserve Rest API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Commvault Commserve Rest API** apporte un modèle d'hôte :

* **App-Commvault-Commserve-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Commvault-Commserve-Restapi-custom" label="App-Commvault-Commserve-Restapi-custom">

| Alias         | Modèle de service                                    | Description                    | Découverte |
|:--------------|:-----------------------------------------------------|:-------------------------------|:----------:|
| Alerts        | App-Commvault-Commserve-Alerts-Restapi-custom        | Contrôle les alertes           |            |
| Jobs          | App-Commvault-Commserve-Jobs-Restapi-custom          | Contrôle les jobs              | X          |
| Media-Agents  | App-Commvault-Commserve-Media-Agents-Restapi-custom  | Contrôle les media agents      | X          |
| Storage-Pools | App-Commvault-Commserve-Storage-Pools-Restapi-custom | Contrôle les pools de stockage |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Commvault-Commserve-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                           | Description                                                                         |
|:----------------------------------------------------------|:------------------------------------------------------------------------------------|
| App-Commvault-Commserve-Restapi-Media-Agent-Name          | Découvre les media agents et les supervise                                          |
| App-Commvault-Commserve-Restapi-Storage-Policies-Job-Name | Découvre les partitions du disque en utilisant son nom et supervise l'espace occupé |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Nom                   | Unité |
|:----------------------|:------|
| alerts.total.count    | count |
| alerts.critical.count | count |
| alerts.warning.count  | count |
| alerts.info.count     | count |
| status                | N/A   |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Nom              | Unité |
|:-----------------|:------|
| jobs.total.count | count |
| status           | N/A   |
| long             | N/A   |

</TabItem>
<TabItem value="Media-Agents" label="Media-Agents">

| Nom                        | Unité |
|:---------------------------|:------|
| media.agents.total.count   | count |
| media.agents.online.count  | count |
| media.agents.offline.count | count |
| status                     | N/A   |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| status                                   | N/A   |
| *sp1*#storagepool.space.usage.bytes      | B     |
| *sp2*#storagepool.space.usage.bytes      | B     |
| *sp1*#storagepool.space.free.bytes       | B     |
| *sp2*#storagepool.space.free.bytes       | B     |
| *sp1*#storagepool.space.usage.percentage | %     |
| *sp2*#storagepool.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser l'application Commvault CommServe, l'API Rest doit être configurée (voir https://api.commvault.com/).

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
dnf install centreon-pack-applications-commvault-commserve-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-commvault-commserve-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-commvault-commserve-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-commvault-commserve-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Commvault Commserve Rest API**
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
dnf install centreon-plugin-Applications-Commvault-Commserve-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Commvault-Commserve-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-commvault-commserve-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Commvault-Commserve-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Commvault-Commserve-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                    | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMSERVEAPIUSERNAME     | Set API username                                                                                                                                   |                   | X           |
| COMMSERVEAPIPASSWORD     | Set API password                                                                                                                                   |                   | X           |
| COMMSERVEAPIPROTO        | Specify https if needed                                                                                                                            | https             |             |
| COMMSERVEAPIPORT         | API port                                                                                                                                           | 443               |             |
| COMMSERVEAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro                  | Description                                                                                                                                           | Valeur par défaut         | Obligatoire |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| FILTERALERTNAME        | Filter alerts by name (can be a regexp)                                                                                                               |                           |             |
| FILTERALERTTYPE        | Filter alerts by type (can be a regexp)                                                                                                               |                           |             |
| WARNINGALERTSCRITICAL  | Threshold                                                                                                                                             |                           |             |
| CRITICALALERTSCRITICAL | Threshold                                                                                                                                             |                           |             |
| WARNINGALERTSWARNING   | Threshold                                                                                                                                             |                           |             |
| CRITICALALERTSWARNING  | Threshold                                                                                                                                             |                           |             |
| WARNINGALERTSINFO      | Threshold                                                                                                                                             |                           |             |
| CRITICALALERTSINFO     | Threshold                                                                                                                                             |                           |             |
| WARNINGALERTSTOTAL     | Threshold                                                                                                                                             |                           |             |
| CRITICALALERTSTOTAL    | Threshold                                                                                                                                             |                           |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{severity\}, %\{status\}, %\{type\}, %\{name\}, %\{since\}  | %\{severity\} =~ /warning/  |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{severity\}, %\{status\}, %\{type\}, %\{name\}, %\{since\} | %\{severity\} =~ /critical/ |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).      | --verbose                 |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro             | Description                                                                                                                                      | Valeur par défaut              | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| FILTERPOLICYNAME  | Filter jobs by policy name (can be a regexp)                                                                                                     |                                |             |
| FILTERPOLICYID    | Filter jobs by policy ID (can be a regexp)                                                                                                       |                                |             |
| FILTERTYPE        | Filter jobs by type (can be a regexp)                                                                                                            |                                |             |
| FILTERCLIENTNAME  | Filter jobs by client name (can be a regexp)                                                                                                     |                                |             |
| FILTERCLIENTGROUP | Filter jobs by client groups (can be a regexp)                                                                                                   |                                |             |
| TIMEFRAME         | Set timeframe in seconds (E.g '3600' to check last 60 minutes)                                                                                   |                                |             |
| WARNINGJOBSTOTAL  | Threshold                                                                                                                                        |                                |             |
| CRITICALJOBSTOTAL | Threshold                                                                                                                                        |                                |             |
| WARNINGLONG       | Set warning threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                             |                                |             |
| CRITICALLONG      | Set critical threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                            |                                |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}, %\{type\}                 | %\{status\} =~ /abnormal/i       |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{status\}, %\{type\}                | %\{status\} =~ /errors\|failed/i |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                      |             |

</TabItem>
<TabItem value="Media-Agents" label="Media-Agents">

| Macro                      | Description                                                                                                                                                   | Valeur par défaut                                     | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTERMEDIAAGENTID         | Filter media agents by ID (can be a regexp)                                                                                                                   |                                                       |             |
| FILTERMEDIAAGENTNAME       | Filter media agents by name (can be a regexp)                                                                                                                 |                                                       |             |
| UNKNOWNSTATUS              | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %%\{status\}, %\{is_maintenance\}, %\{offline_reason\}, %\{name\} |                                                       |             |
| WARNINGMEDIAAGENTSOFFLINE  | Threshold                                                                                                                                                     |                                                       |             |
| CRITICALMEDIAAGENTSOFFLINE | Threshold                                                                                                                                                     |                                                       |             |
| WARNINGMEDIAAGENTSONLINE   | Threshold                                                                                                                                                     |                                                       |             |
| CRITICALMEDIAAGENTSONLINE  | Threshold                                                                                                                                                     |                                                       |             |
| WARNINGMEDIAAGENTSTOTAL    | Threshold                                                                                                                                                     |                                                       |             |
| CRITICALMEDIAAGENTSTOTAL   | Threshold                                                                                                                                                     |                                                       |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{is_maintenance\}, %\{offline_reason\}, %\{name\} | %\{is_maintenance\} eq "no" and %\{status\} eq "offline" |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{is_maintenance\}, %\{offline_reason\}, %\{name\}  |                                                       |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).              | --verbose                                             |             |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Macro             | Description                                                                                                                                      | Valeur par défaut      | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERNAME        | Filter storage pools by name (can be a regexp)                                                                                                   |                        |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}                         | %\{status\} !~ /online/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                          |                        |             |
| WARNINGUSAGE      | Threshold                                                                                                                                        |                        |             |
| CRITICALUSAGE     | Threshold                                                                                                                                        |                        |             |
| WARNINGUSAGEFREE  | Threshold                                                                                                                                        |                        |             |
| CRITICALUSAGEFREE | Threshold                                                                                                                                        |                        |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                                                                        |                        |             |
| CRITICALUSAGEPRCT | Threshold                                                                                                                                        |                        |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose              |             |

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
/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \
	--plugin=apps::backup::commvault::commserve::restapi::plugin \
	--mode=storage-pools \
	--hostname='10.0.0.1' \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--port='443' \
	--proto='https'  \
	--filter-name='' \
	--warning-status='' \
	--critical-status='%\{status\} !~ /online/i' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All storage pools are ok | 'IPL1-TEST#storagepool.space.usage.bytes'=22104757B;;;0;37192871 'IPL1-TEST#storagepool.space.free.bytes'=15088114B;;;0;37192871 'IPL1-TEST#storagepool.space.usage.percentage'=59.43%;90;95;0;100 'IPL2-TEST#storagepool.space.usage.bytes'=6469140B;;;0;7340013 'IPL2-TEST#storagepool.space.free.bytes'=870873B;;;0;7340013 'IPL2-TEST#storagepool.space.usage.percentage'=88.14%;90;95;0;100
Storage pool 'IPL1-TEST' status: online, space usage total: 35.47 MB used: 21.08 MB (59.43%) free: 14.39 MB (40.57%)
Storage pool 'IPL2-TEST' status: online, space usage total: 7.00 MB used: 6.17 MB (88.14%) free: 850.46 KB (11.86%)
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
/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \
	--plugin=apps::backup::commvault::commserve::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                              | Modèle de service associé                            |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/commvault/commserve/restapi/mode/alerts.pm)]                             | App-Commvault-Commserve-Alerts-Restapi-custom        |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/commvault/commserve/restapi/mode/jobs.pm)]                                 | App-Commvault-Commserve-Jobs-Restapi-custom          |
| list-media-agents [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/commvault/commserve/restapi/mode/listmediaagents.pm)]         | Used for service discovery                           |
| list-storage-policies [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/commvault/commserve/restapi/mode/liststoragepolicies.pm)] | Used for service discovery                           |
| media-agents [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/commvault/commserve/restapi/mode/mediaagents.pm)]                  | App-Commvault-Commserve-Media-Agents-Restapi-custom  |
| storage-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/commvault/commserve/restapi/mode/storagepools.pm)]                | App-Commvault-Commserve-Storage-Pools-Restapi-custom |

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
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --hostname                                 |   API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --url-path                                 |   API url path (default: '/webconsole/api')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     |   API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   Set API username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --api-password                             |   Set API password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --cache-create                             |   Create a cache file and quit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --cache-use                                |   Use the cache file (created with --cache-create).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option              | Description                                                                                                                                                                                      |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-alert-name |   Filter alerts by name (can be a regexp).                                                                                                                                                       |
| --filter-alert-type |   Filter alerts by type (can be a regexp).                                                                                                                                                       |
| --warning-status    |   Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /warning/') You can use the following variables: %\{severity\}, %\{status\}, %\{type\}, %\{name\}, %\{since\}      |
| --critical-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /critical/'). You can use the following variables: %\{severity\}, %\{status\}, %\{type\}, %\{name\}, %\{since\}   |
| --memory            |   Only check new alerts.                                                                                                                                                                         |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                   | Description                                                                                                                                                                       |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-policy-name     |   Filter jobs by policy name (can be a regexp).                                                                                                                                   |
| --filter-policy-id       |   Filter jobs by policy ID (can be a regexp).                                                                                                                                     |
| --filter-type            |   Filter jobs by type (can be a regexp).                                                                                                                                          |
| --filter-client-name     |   Filter jobs by client name (can be a regexp).                                                                                                                                   |
| --filter-client-group    |   Filter jobs by client groups (can be a regexp).                                                                                                                                 |
| --timeframe              |   Set timeframe in seconds (E.g '3600' to check last 60 minutes).                                                                                                                 |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /abnormal/i') You can use the following variables: %\{display\}, %\{status\}, %\{type\}           |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /errors\|failed/i'). You can use the following variables: %\{display\}, %\{status\}, %\{type\}   |
| --warning-long           |   Set warning threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                                                            |
| --critical-long          |   Set critical threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{elapsed\}, %\{type\}                                                           |
| --warning-* --critical-* |   Thresholds. Can be: 'jobs-total'.                                                                                                                                               |

</TabItem>
<TabItem value="Media-Agents" label="Media-Agents">

| Option                    | Description                                                                                                                                                                                                                          |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-media-agent-id   |   Filter media agents by ID (can be a regexp).                                                                                                                                                                                       |
| --filter-media-agent-name |   Filter media agents by name (can be a regexp).                                                                                                                                                                                     |
| --unknown-status          |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %%\{status\}, %\{is_maintenance\}, %\{offline_reason\}, %\{name\}                                                                                                                |
| --warning-status          |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{is_maintenance\}, %\{offline_reason\}, %\{name\}                                                                       |
| --critical-status         |   Define the conditions to match for the status to be CRITICAL (default: '%\{is_maintenance\} eq "no" and %\{status\} eq "offline"'). You can use the following variables: %\{status\}, %\{is_maintenance\}, %\{offline_reason\}, %\{name\}   |
| --warning-* --critical-*  |   Thresholds. Can be: 'media-agents-total', 'media-agents-online', 'media-agents-offline'.                                                                                                                                           |

</TabItem>
<TabItem value="Storage-Pools" label="Storage-Pools">

| Option                   | Description                                                                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                          |
| --filter-name            |   Filter storage pools by name (can be a regexp).                                                                                                                |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{display\}                                        |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                                        |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /online/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                           |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \
	--plugin=apps::backup::commvault::commserve::restapi::plugin \
	--mode=storage-pools \
	--help
```
