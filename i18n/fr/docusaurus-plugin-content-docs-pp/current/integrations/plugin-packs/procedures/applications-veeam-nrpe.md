---
id: applications-veeam-nrpe
title: Veeam NSClient++ NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le connecteur de supervision *Veeam* fonctionne avec l'agent de supervision Centreon NSClient++ et Powershell, et contrôle le statut opérationnel d'un serveur Veeam.

## Contenu du pack

### Modèles

Le connecteur de supervision **Veeam** apporte un modèle d'hôte :

* **App-Veeam-NRPE-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Veeam-NRPE-custom" label="App-Veeam-NRPE-custom">

| Alias      | Modèle de service                | Description                                                   |
|:-----------|:---------------------------------|:--------------------------------------------------------------|
| Job-Status | App-Veeam-Job-Status-NRPE-custom | Contrôle permettant de vérifier l'état des jobs de sauvegarde |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Veeam-NRPE-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                  | Description                                               |
|:-------------|:-----------------------------------|:----------------------------------------------------------|
| Licenses     | App-Veeam-Licenses-NRPE-custom     | Contrôle les licences                                     |
| Repositories | App-Veeam-Repositories-NRPE-custom | Contrôle les dépôts                                       |
| Tape-Jobs    | App-Veeam-Tape-Jobs-NRPE-custom    | Contrôle permettant de vérifier l'état des jobs sur bande |
| Vsb-Jobs     | App-Veeam-Vsb-Jobs-NRPE-custom     | Contrôle l'état des jobs SureBackup                       |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Métrique            | Unité |
|:--------------------|:------|
| jobs.detected.count | count |
| *job*#status        | N/A   |
| *job*#long          | N/A   |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| licenses.total.count                          | count |
| *licenses*#status                             | N/A   |
| *licenses*#license.expires.seconds            | s     |
| *licenses*#license.instances.usage.count      | count |
| *licenses*#license.instances.free.count       | count |
| *licenses*#license.instances.usage.percentage | %     |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *repositories*~status                            | N/A   |
| *repositories*~repository.space.usage.bytes      | B     |
| *repositories*~repository.space.free.bytes       | B     |
| *repositories*~repository.space.usage.percentage | %     |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Métrique             | Unité |
|:---------------------|:------|
| tapejobs.total.count | count |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Métrique                        | Unité |
|:--------------------------------|:------|
| sure_backup.jobs.detected.count | count |
| sure_backup.jobs.success.count  | count |
| sure_backup.jobs.failed.count   | count |
| sure_backup.jobs.warning.count  | count |
| *jobs*#status                   | N/A   |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser les ressources *Windows* via NRPE, installez la version Centreon
de l'agent NSClient++. Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du serveur NRPE est correcte.

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
dnf install centreon-pack-applications-veeam-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-veeam-nrpe
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-veeam-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-veeam-nrpe
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Veeam**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Veeam-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                          | Valeur par défaut     | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         |  Port used to reach the NRPE server                                                                                                     | 5666                  |             |
| NRPECLIENT       | NRPE Binary used to perform the check                                                                                                     | check\_centreon\_nrpe |             |
| NRPETIMEOUT      | Timeout to connect to the NRPE Server                                                                                                     | 55                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                       |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Macro           | Description                                                                                                                                                                                                                      | Valeur par défaut                                   | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERENDTIME   | Filter job with end time greater than current time less value in seconds (default: 86400)                                                                                                                                        | 86400                                               |             |
| FILTERNAME      | Filter job name (can be a regexp)                                                                                                                                                                                                |                                                     |             |
| FILTERSTARTTIME | Filter job with start time greater than current time less value in seconds                                                                                                                                                       |                                                     |             |
| FILTERCOUNTERS  | Only display some counters (regexp can be used).                                                                                                                                                                                                                                 |                                                     |             |
| OKSTATUS        | Define the conditions to match for the status to be OK. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}                                                                        |                                                     |             |
| WARNINGLONG     | Set warning threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}                                                                                                             |                                                     |             |
| CRITICALLONG    | Set critical threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}                                                                                                            |                                                     |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL (default: '%\{is_running\} == 0 and not %\{status\} =~ /Success/i'). You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\} | %\{is_running\} == 0 and not %\{status\} =~ /Success/i |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}                                                                   |                                                     |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                               | --verbose                                           |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                             | Description                                                                                                                                                                | Valeur par défaut                | Obligatoire |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERTO                          | Filter licenses by person/organization (can be a regexp)                                                                                                                   |                                  |             |
| FILTERTYPE                        | Filter licenses by type (can be a regexp)                                                                                                                                  |                                  |             |
| FILTERSTATUS                      | Filter licenses by status (can be a regexp)                                                                                                                                |                                  |             |
| UNIT                              | Select the time unit for the expiration thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds                 |                                  |             |
| WARNINGEXPIRES                    | Thresholds                                                                                                                                                                 |                                  |             |
| CRITICALEXPIRES                   | Thresholds                                                                                                                                                                 |                                  |             |
| WARNINGLICENSEINSTANCESFREE       | Thresholds                                                                                                                                                                 |                                  |             |
| CRITICALLICENSEINSTANCESFREE      | Thresholds                                                                                                                                                                 |                                  |             |
| WARNINGLICENSEINSTANCESUSAGE      | Thresholds                                                                                                                                                                 |                                  |             |
| CRITICALLICENSEINSTANCESUSAGE     | Thresholds                                                                                                                                                                 |                                  |             |
| WARNINGLICENSEINSTANCESUSAGEPRCT  | Thresholds                                                                                                                                                                 |                                  |             |
| CRITICALLICENSEINSTANCESUSAGEPRCT | Thresholds                                                                                                                                                                 |                                  |             |
| CRITICALSTATUS                    | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired\|invalid/i'). You can use the following variables: %\{to\}, %\{status\}, %\{type\} | %\{status\} =~ /expired\|invalid/i |             |
| WARNINGSTATUS                     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{to\}, %\{status\}, %\{type\}                                                |                                  |             |
| WARNINGTOTAL                      | Thresholds                                                                                                                                                                 |                                  |             |
| CRITICALTOTAL                     | Thresholds                                                                                                                                                                 |                                  |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                         | --verbose                        |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                  | Description                                                                                                                                                                          | Valeur par défaut                        | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| FILTERNAME             | Filter repositories by name (can be a regexp)                                                                                                                                        |                                          |             |
| FILTERTYPE             | Filter repositories by type (can be a regexp)                                                                                                                                        |                                          |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                                                                                                           |                                          |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                                                                                                           |                                          |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                                                                                                           |                                          |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                                                                                                           |                                          |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                                                                                                           |                                          |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                                                                                                           |                                          |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: 'not %\{status\} =~ /ordinal\|maintenance/i'). You can use the following variables: %\{status\}, %\{name\}, %\{type\} | not %\{status\} =~ /ordinal\|maintenance/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}, %\{type\}                                                        |                                          |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                   | --verbose                                |             |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Macro          | Description                                                                                                                                                                                                                                  | Valeur par défaut                                           | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-----------:|
| FILTERNAME     | Filter job name (can be a regexp)                                                                                                                                                                                                            |                                                             |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{enabled} == 1 and not %\{last_result\} =~ /Success\|None/i'). You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\} | %\{enabled\} == 1 and not %\{last_result\} =~ /Success\|None/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: '') You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}                                                              |                                                             |             |
| WARNINGTOTAL   | Set warning threshold for total jobs                                                                                                                                                                                                         |                                                             |             |
| CRITICALTOTAL  | Set critical threshold for total jobs                                                                                                                                                                                                        |                                                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                           | --verbose                                                   |             |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Macro                | Description                                                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERNAME           | Filter job name (can be a regexp)                                                                                                                                                    |                             |             |
| FILTERTYPE           | Filter job type (can be a regexp)                                                                                                                                                    |                             |             |
| WARNINGJOBSWARNING   | Thresholds                                                                                                                                                                           |                             |             |
| CRITICALJOBSWARNING  | Thresholds                                                                                                                                                                           |                             |             |
| WARNINGJOBSDETECTED  | Thresholds                                                                                                                                                                           |                             |             |
| CRITICALJOBSDETECTED | Thresholds                                                                                                                                                                           |                             |             |
| WARNINGJOBSFAILED    | Thresholds                                                                                                                                                                           |                             |             |
| CRITICALJOBSFAILED   | Thresholds                                                                                                                                                                           |                             |             |
| WARNINGJOBSSUCCESS   | Thresholds                                                                                                                                                                           |                             |             |
| CRITICALJOBSSUCCESS  | Thresholds                                                                                                                                                                           |                             |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: 'not %\{status\} =~ /success/i'). You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\} | not %\{status\} =~ /success/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}                                           |                             |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                   | --verbose                   |             |

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
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 55  -c check_centreon_plugins -a 'apps::backup::veeam::local::plugin' 'tape-jobs'  ' \
	--filter-name="" \
	--warning-status="" \
	--critical-status="%\{enabled\} == 1 and not %\{last_result\} =~ /Success|None/i" \
	--warning-total="" \
	--critical-total="" \
	--verbose'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total jobs: 41 All jobs are ok | 'tapejobs.total.count'=41;;;0;
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
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 55  -c check_centreon_plugins -a 'apps::backup::veeam::local::plugin' 'tape-jobs'  ' \
	--filter-name="" \
	--list-mode'
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                       | Modèle de service associé             |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| job-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/jobstatus.pm)]               | App-Veeam-Job-Status-NRPE-custom      |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/licenses.pm)]                  | App-Veeam-Licenses-NRPE-custom        |
| list-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/listjobs.pm)]                 | Not used in this Monitoring Connector |
| list-repositories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/listrepositories.pm)] | Not used in this Monitoring Connector |
| repositories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/repositories.pm)]          | App-Veeam-Repositories-NRPE-custom    |
| tape-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/tapejobs.pm)]                 | App-Veeam-Tape-Jobs-NRPE-custom       |
| vsb-jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/veeam/local/mode/vsbjobs.pm)]                   | App-Veeam-Vsb-Jobs-NRPE-custom        |

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
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Job-Status" label="Job-Status">

| Option              | Description                                                                                                                                                                                                                         |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout           | Set timeout time for command execution (default: 50 sec)                                                                                                                                                                            |
| --no-ps             | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                                                               |
| --command           | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                              |
| --command-path      | Command path (default: none).                                                                                                                                                                                                       |
| --command-options   | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                             |
| --ps-display        | Display powershell script.                                                                                                                                                                                                          |
| --ps-exec-only      | Print powershell output.                                                                                                                                                                                                            |
| --filter-name       | Filter job name (can be a regexp).                                                                                                                                                                                                  |
| --exclude-name      | Exclude job name (regexp can be used).                                                                                                                                                                                              |
| --filter-type       | Filter job type (can be a regexp).                                                                                                                                                                                                  |
| --filter-start-time | Filter job with start time greater than current time less value in seconds.                                                                                                                                                         |
| --filter-end-time   | Filter job with end time greater than current time less value in seconds (default: 86400).                                                                                                                                          |
| --ok-status         | Define the conditions to match for the status to be OK. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}.                                                                          |
| --warning-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}.                                                                     |
| --critical-status   | Define the conditions to match for the status to be CRITICAL (default: '%\{is_running\} == 0 and not %\{status\} =~ /Success/i'). You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{is_running\}, %\{scheduled\}.   |
| --warning-long      | Set warning threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}.                                                                                                               |
| --critical-long     | Set critical threshold for long jobs. You can use the following variables: %\{display\}, %\{status\}, %\{type\}, %\{elapsed\}.                                                                                                              |
| --warning-total     | Set warning threshold for total jobs.                                                                                                                                                                                               |
| --critical-total    | Set critical threshold for total jobs.                                                                                                                                                                                              |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                   | Description                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (default: 50 sec)                                                                                                                      |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                                                         |
| --command                | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                        |
| --command-path           | Command path (default: none).                                                                                                                                                 |
| --command-options        | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                       |
| --ps-display             | Display powershell script.                                                                                                                                                    |
| --ps-exec-only           | Print powershell output.                                                                                                                                                      |
| --filter-to              | Filter licenses by person/organization (can be a regexp).                                                                                                                     |
| --filter-type            | Filter licenses by type (can be a regexp).                                                                                                                                    |
| --filter-status          | Filter licenses by status (can be a regexp).                                                                                                                                  |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{to\}, %\{status\}, %\{type\}.                                                  |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired\|invalid/i'). You can use the following variables: %\{to\}, %\{status\}, %\{type\}.   |
| --unit                   | Select the time unit for the expiration thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.                   |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'expires', 'license-instances-usage', 'license-instances-free', 'license-instances-usage-prct'.                                                  |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                   | Description                                                                                                                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (default: 50 sec)                                                                                                                                |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                   |
| --command                | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                  |
| --command-path           | Command path (default: none).                                                                                                                                                           |
| --command-options        | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                 |
| --ps-display             | Display powershell script.                                                                                                                                                              |
| --ps-exec-only           | Print powershell output.                                                                                                                                                                |
| --filter-name            | Filter repositories by name (can be a regexp).                                                                                                                                          |
| --exclude-name           | Exclude repositories by name (regexp can be used).                                                                                                                                      |
| --filter-type            | Filter repositories by type (can be a regexp).                                                                                                                                          |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}, %\{type\}.                                                          |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: 'not %\{status\} =~ /ordinal\|maintenance/i'). You can use the following variables: %\{status\}, %\{name\}, %\{type\}.   |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                                              |

</TabItem>
<TabItem value="Tape-Jobs" label="Tape-Jobs">

| Option            | Description                                                                                                                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (default: 50 sec)                                                                                                                                                                                        |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                                                                           |
| --command         | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                          |
| --command-path    | Command path (default: none).                                                                                                                                                                                                                   |
| --command-options | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                         |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                      |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                        |
| --filter-name     | Filter job name (can be a regexp).                                                                                                                                                                                                              |
| --exclude-name    | Exclude job name (regexp can be used).                                                                                                                                                                                                          |
| --filter-type     | Filter job type (can be a regexp).                                                                                                                                                                                                              |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (default: '') You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}.                                                                |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '') You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}.                                                                |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{enabled} == 1 and not %\{last_result\} =~ /Success\|None/i'). You can use the following variables: %\{display\}, %\{enabled\}, %\{type\}, %\{last_result\}, %\{last_state\}.   |
| --warning-total   | Set warning threshold for total jobs.                                                                                                                                                                                                           |
| --critical-total  | Set critical threshold for total jobs.                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Vsb-Jobs" label="Vsb-Jobs">

| Option                   | Description                                                                                                                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (default: 50 sec)                                                                                                                                |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                   |
| --command                | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                  |
| --command-path           | Command path (default: none).                                                                                                                                                           |
| --command-options        | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                 |
| --ps-display             | Display powershell script.                                                                                                                                                              |
| --ps-exec-only           | Print powershell output.                                                                                                                                                                |
| --filter-name            | Filter job name (can be a regexp).                                                                                                                                                      |
| --exclude-name           | Exclude job name (regexp can be used).                                                                                                                                                  |
| --filter-type            | Filter job type (can be a regexp).                                                                                                                                                      |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}.                                             |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}.                                             |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: 'not %\{status\} =~ /success/i'). You can use the following variables: %\{name\}, %\{type\}, %\{status\}, %\{duration\}.   |
| --warning-* --critical-* | Thresholds. Can be: 'jobs-detected', 'jobs-success', 'jobs-warning', 'jobs-failed'.                                                                                                     |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check_centreon_nrpe -H 10.0.0.1 -p 5666 -t 55  -c check_centreon_plugins -a 'apps::backup::veeam::local::plugin' 'tape-jobs'  ' \
	--filter-name="" \
	--warning-status="" \
	--help
```
