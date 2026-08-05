---
id: applications-veeam-vone-restapi
title: Veeam ONE Rest API
description: "Supervisez l'infrastructure de sauvegarde Veeam ONE via API REST : jobs, proxys, dépôts et licences."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Veeam ONE Rest API** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :

* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Veeam ONE Rest API** apporte un modèle d'hôte :

* **App-Veeam-Vone-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Veeam-Vone-Restapi-custom" label="App-Veeam-Vone-Restapi-custom">

| Alias        | Modèle de service                          | Description                       | Découverte |
|:-------------|:-------------------------------------------|:----------------------------------|:----------:|
| Repositories | App-Veeam-Vone-Repositories-Restapi-custom | Vérifier les dépôts de sauvegarde | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Veeam-Vone-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias   | Modèle de service                     | Description                       | Découverte |
|:--------|:--------------------------------------|:----------------------------------|:----------:|
| Jobs    | App-Veeam-Vone-Jobs-Restapi-custom    | Contrôle les jobs                 | X          |
| License | App-Veeam-Vone-License-Restapi-custom | Supervision des licences          |            |
| Proxies | App-Veeam-Vone-Proxies-Restapi-custom | Contrôle les proxys de sauvegarde | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                          | Description |
|:-----------------------------------------|:------------|
| App-Veeam-Vone-Restapi-Job-Name          |             |
| App-Veeam-Vone-Restapi-Proxies-Name      |             |
| App-Veeam-Vone-Restapi-Job-Name          | Découvre les jobs et supervise leur statut            |
| App-Veeam-Vone-Restapi-Proxies-Name      | Découvre les proxys et supervise leur statut            |
| App-Veeam-Vone-Restapi-Repositories-Name | Découvre les dépôts et supervise leur statut            |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Nom                       | Unité |
|:--------------------------|:------|
| jobs.detected.count       | count |
| job-status                | N/A   |
| job.last.duration.seconds | s     |

</TabItem>
<TabItem value="License" label="License">

| Nom                           | Unité |
|:------------------------------|:------|
| license.unit.usage.count      | count |
| license.unit.free.count       | count |
| license.unit.usage.percentage | %     |

</TabItem>
<TabItem value="Proxies" label="Proxies">

| Nom                    | Unité |
|:-----------------------|:------|
| proxies.detected.count | count |
| proxy-status           | N/A   |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Nom                               | Unité |
|:----------------------------------|:------|
| repositories.detected.count       | count |
| repository-status                 | N/A   |
| repository.space.usage.bytes      | B     |
| repository.space.free.bytes       | B     |
| repository.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Pour superviser l’infrastructure et les jobs de sauvegarde via Veeam ONE, l’API REST doit être configurée conformément à la [documentation officielle](https://helpcenter.veeam.com/docs/one/userguide/access.html?zoom_highlight=api&ver=13#veeam-one-rest-api).

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
dnf install centreon-pack-applications-veeam-vone-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-veeam-vone-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-veeam-vone-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-veeam-vone-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Veeam ONE Rest API**
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
3. Appliquez le modèle d'hôte **App-Veeam-Vone-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VONE_USERNAME       | Set username                                                                                                                                       |                   | X           |
| VONE_PASSWORD       | Set password                                                                                                                                       |                   | X           |
| VONE_PROTOCOL       | Define https if needed                                                                                                                             | https             |             |
| VONE_PORT           | Port used                                                                                                                                          | 1230              |             |
| VONE_CACHE_LIFETIME | Define the cache lifetime before raising an error                                                                                                  | 1800              |             |
| VONE_PATH           | Define API path                                                                                                                                    | /api/v2.2         |             |
| VONE_TIMEOUT        | Set timeout in seconds                                                                                                                             | 50                |             |
| VONE_EXTRA_OPTIONS  | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Macro                      | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| ADD_VM_REPLICATION_JOBS    | Include VM replication jobs when defined. This is the default option if no additional options are used                                           | 1                        |             |
| ADD_VM_BACKUP_JOBS         | Include VM backup jobs when defined                                                                                                              | 0                        |             |
| ADD_BACKUP_COPY_JOBS       | Include backup copy jobs when defined                                                                                                            | 0                        |             |
| UNKNOWN_JOB_STATUS         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{name\}, %\{type\}              | %\{status\} =~ /unknown/ |             |
| FILTER_UID                 | Filter jobs by UID (can be a regexp)                                                                                                             |                          |             |
| FILTER_NAME                | Filter jobs by name (can be a regexp)                                                                                                            |                          |             |
| FILTER_TYPE                | Filter jobs by type (can be a regexp)                                                                                                            |                          |             |
| WARNING_JOBS_DETECTED      | Threshold                                                                                                                                        |                          |             |
| CRITICAL_JOBS_DETECTED     | Threshold                                                                                                                                        |                          |             |
| WARNING_JOB_LAST_DURATION  | Threshold                                                                                                                                        |                          |             |
| CRITICAL_JOB_LAST_DURATION | Threshold                                                                                                                                        |                          |             |
| WARNING_JOB_STATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}, %\{type\}              | %\{status\} =~ /warning/ |             |
| CRITICAL_JOB_STATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}, %\{type\}             | %\{status\} =~ /failed/  |             |
| EXTRA_OPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

</TabItem>
<TabItem value="License" label="License">

| Macro                            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_LICENSE_UNIT_FREE        | Threshold                                                                                                                                        |                   |             |
| CRITICAL_LICENSE_UNIT_FREE       | Threshold                                                                                                                                        |                   |             |
| WARNING_LICENSE_UNIT_USAGE       | Threshold                                                                                                                                        |                   |             |
| CRITICAL_LICENSE_UNIT_USAGE      | Threshold                                                                                                                                        |                   |             |
| WARNING_LICENSE_UNIT_USAGE_PRCT  | Threshold in percentage                                                                                                                          |                   |             |
| CRITICAL_LICENSE_UNIT_USAGE_PRCT | Threshold in percentage                                                                                                                          |                   |             |
| EXTRA_OPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Proxies" label="Proxies">

| Macro                     | Description                                                                                                                                      | Valeur par défaut                          | Obligatoire |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|:-----------:|
| UNKNOWN_PROXY_STATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{name\}, %\{type\}               | %\{state\} =~ /unknown/                    |             |
| FILTER_UID                | Filter proxies by UID (can be a regexp)                                                                                                          |                                            |             |
| FILTER_NAME               | Filter proxies by name (can be a regexp)                                                                                                         |                                            |             |
| WARNING_PROXIES_DETECTED  | Thresholds                                                                                                                                       |                                            |             |
| CRITICAL_PROXIES_DETECTED | Thresholds                                                                                                                                       |                                            |             |
| WARNING_PROXY_STATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{name\}, %\{type\}               | %\{state\} =~ /warning\|outofdate/         |             |
| CRITICAL_PROXY_STATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{name\}, %\{type\}              | %\{state\} =~ /inaccessible\|disconnected/ |             |
| EXTRA_OPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                            |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                          | Description                                                                                                                                      | Valeur par défaut                          | Obligatoire |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|:-----------:|
| UNKNOWN_REPOSITORY_STATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{name\}, %\{type\}               | %\{state\} =~ /unknown/                    |             |
| FILTER_UID                     | Filter repositories by UID (can be a regexp)                                                                                                     |                                            |             |
| FILTER_NAME                    | Filter repositories by name (can be a regexp)                                                                                                    |                                            |             |
| WARNING_REPOSITORIES_DETECTED  | Threshold                                                                                                                                        |                                            |             |
| CRITICAL_REPOSITORIES_DETECTED | Threshold                                                                                                                                        |                                            |             |
| WARNING_REPOSITORY_STATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{name\}, %\{type\}               | %\{state\} =~ /warning\|outofdate/         |             |
| CRITICAL_REPOSITORY_STATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{name\}, %\{type\}              | %\{state\} =~ /inaccessible\|disconnected/ |             |
| WARNING_SPACE_USAGE            | Threshold in bytes                                                                                                                               |                                            |             |
| CRITICAL_SPACE_USAGE           | Threshold in bytes                                                                                                                               |                                            |             |
| WARNING_SPACE_USAGE_FREE       | Threshold in bytes                                                                                                                               |                                            |             |
| CRITICAL_SPACE_USAGE_FREE      | Threshold in bytes                                                                                                                               |                                            |             |
| WARNING_SPACE_USAGE_PRCT       | Threshold in percentage                                                                                                                          |                                            |             |
| CRITICAL_SPACE_USAGE_PRCT      | Threshold in percentage                                                                                                                          |                                            |             |
| EXTRA_OPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                            |             |

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
/usr/lib/centreon/plugins/centreon_veeam_vone_restapi.pl \
	--plugin=apps::backup::veeam::vone::restapi::plugin \
	--mode=proxies \
	--hostname='10.0.0.1' \
	--port='1230' \
	--proto='https' \
	--api-path='/api/v2.2' \
	--timeout='50' \
	--cache-lifetime='1800' \
	--api-username='username' \
	--api-password='password'  \
	--filter-uid='' \
	--filter-name='' \
	--warning-proxies-detected='' \
	--critical-proxies-detected='' \
	--unknown-proxy-status='%\{state\} =~ /unknown/' \
	--warning-proxy-status='%\{state\} =~ /warning|outofdate/'
	--critical-proxy-status='%\{state\} =~ /inaccessible|disconnected/' \
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: detected: 2834 All proxies are ok | 'proxies.detected.count'=2834;;;0; 
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
/usr/lib/centreon/plugins/centreon_veeam_vone_restapi.pl \
	--plugin=apps::backup::veeam::vone::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                     | Modèle de service associé                     |
|:-----------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/vone/restapi/mode/cache.pm)]               | Non utilisé dans ce connecteur de supervision |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/vone/restapi/mode/jobs.pm)]                 | App-Veeam-Vone-Jobs-Restapi-custom            |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/vone/restapi/mode/license.pm)]           | App-Veeam-Vone-License-Restapi-custom         |
| proxies [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/vone/restapi/mode/proxies.pm)]           | App-Veeam-Vone-Proxies-Restapi-custom         |
| repositories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/vone/restapi/mode/repositories.pm)] | App-Veeam-Vone-Repositories-Restapi-custom    |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --port                                     | Port used (default: 1239)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proto                                    | Define https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --api-username                             | Set username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-password                             | Set password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-path                                 | Define API path (default: '/api/v2.2')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --cache-use                                | Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --cache-lifetime                           | Define the cache lifetime before raising an error (default: 1800 seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Option                       | Description                                                                                                                                                               |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-vm-replication-jobs    | Include VM replication jobs when defined. This is the default option if no additional options are used.                                                                   |
| --add-vm-backup-jobs         | Include VM backup jobs when defined.                                                                                                                                      |
| --add-backup-copy-jobs       | Include backup copy jobs when defined.                                                                                                                                    |
| --filter-uid                 | Filter jobs by UID (can be a regexp).                                                                                                                                     |
| --filter-name                | Filter jobs by name (can be a regexp).                                                                                                                                    |
| --filter-type                | Filter jobs by type (can be a regexp).                                                                                                                                    |
| --unknown-job-status         | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/'). You can use the following variables: %\{status\}, %\{name\}, %\{type\} |
| --warning-job-status         | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /warning/'). You can use the following variables: %\{status\}, %\{name\}, %\{type\} |
| --critical-job-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /failed/'). You can use the following variables: %\{status\}, %\{name\}, %\{type\} |
| --warning-job-last-duration  | Threshold.                                                                                                                                                                |
| --critical-job-last-duration | Threshold.                                                                                                                                                                |
| --warning-jobs-detected      | Threshold.                                                                                                                                                                |
| --critical-jobs-detected     | Threshold.                                                                                                                                                                |

</TabItem>
<TabItem value="License" label="License">

| Option                             | Description                                                                                           |
|:-----------------------------------|:------------------------------------------------------------------------------------------------------|
| --filter-counters                  | Only display some counters (regexp can be used). Example: --filter-counters='license-unit-usage-prct' |
| --warning-license-unit-free        | Threshold.                                                                                            |
| --critical-license-unit-free       | Threshold.                                                                                            |
| --warning-license-unit-usage       | Threshold.                                                                                            |
| --critical-license-unit-usage      | Threshold.                                                                                            |
| --warning-license-unit-usage-prct  | Threshold in percentage.                                                                              |
| --critical-license-unit-usage-prct | Threshold in percentage.                                                                              |

</TabItem>
<TabItem value="Proxies" label="Proxies">

| Option                      | Description                                                                                                                                                                                |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-uid                | Filter proxies by UID (can be a regexp).                                                                                                                                                   |
| --filter-name               | Filter proxies by name (can be a regexp).                                                                                                                                                  |
| --unknown-proxy-status      | Define the conditions to match for the status to be UNKNOWN (default: '%\{state\} =~ /unknown/'). You can use the following variables: %\{state\}, %\{name\}, %\{type\}                    |
| --warning-proxy-status      | Define the conditions to match for the status to be WARNING (default: '%\{state\} =~ /warning\|outofdate/'). You can use the following variables: %\{state\}, %\{name\}, %\{type\}         |
| --critical-proxy-status     | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} =~ /inaccessible\|disconnected/'). You can use the following variables: %\{state\}, %\{name\}, %\{type\} |
| --warning-proxies-detected  | Thresholds.                                                                                                                                                                                |
| --critical-proxies-detected | Thresholds.                                                                                                                                                                                |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                           | Description                                                                                                                                                                                |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-uid                     | Filter repositories by UID (can be a regexp).                                                                                                                                              |
| --filter-name                    | Filter repositories by name (can be a regexp).                                                                                                                                             |
| --unknown-repository-status      | Define the conditions to match for the status to be UNKNOWN (default: '%\{state\} =~ /unknown/'). You can use the following variables: %\{state\}, %\{name\}, %\{type\}                    |
| --warning-repository-status      | Define the conditions to match for the status to be WARNING (default: '%\{state\} =~ /warning\|outofdate/'). You can use the following variables: %\{state\}, %\{name\}, %\{type\}         |
| --critical-repository-status     | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} =~ /inaccessible\|disconnected/'). You can use the following variables: %\{state\}, %\{name\}, %\{type\} |
| --warning-repositories-detected  | Threshold.                                                                                                                                                                                 |
| --critical-repositories-detected | Threshold.                                                                                                                                                                                 |
| --warning-space-usage            | Threshold in bytes.                                                                                                                                                                        |
| --critical-space-usage           | Threshold in bytes.                                                                                                                                                                        |
| --warning-space-usage-free       | Threshold in bytes.                                                                                                                                                                        |
| --critical-space-usage-free      | Threshold in bytes.                                                                                                                                                                        |
| --warning-space-usage-prct       | Threshold in percentage.                                                                                                                                                                   |
| --critical-space-usage-prct      | Threshold in percentage.                                                                                                                                                                   |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_veeam_vone_restapi.pl \
	--plugin=apps::backup::veeam::vone::restapi::plugin \
	--mode=proxies \
	--help
```
