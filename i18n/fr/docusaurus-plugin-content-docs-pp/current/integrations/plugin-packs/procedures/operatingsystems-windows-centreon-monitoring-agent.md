---
id: operatingsystems-windows-centreon-monitoring-agent
title: Windows CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

Le connecteur **Windows CMA** permet de fournir des modèles et commandes à l'agent de supervision Centreon (Centreon Monitoring Agent - CMA). Celui-ci est un agent d'observabilité implémentant le protocole OpenTelemetry.

Pour plus d'informations sur le fonctionnement de l'agent lui-même:

<Tabs groupId="version" queryString>
<TabItem value="OnPrem" label="OnPrem">

Lisez [la documentation CMA pour Centreon OnPrem](/docs/cma).
(Ce lien vous redirige vers la dernière version de la documentation OnPrem. Utilisez le sélecteur de version dans le coin supérieur droit pour passer à une autre version si nécessaire.)

</TabItem>
<TabItem value="Cloud" label="Cloud">

Lisez [la documentation CMA pour Centreon Cloud](/cloud/cma/cma-setup).

</TabItem>
</Tabs>

## Contenu du pack

### Modèles

Le connecteur de supervision **Windows CMA** apporte un modèle d'hôte :

* **OS-Windows-Centreon-Monitoring-Agent-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Windows-Centreon-Monitoring-Agent-custom" label="OS-Windows-Centreon-Monitoring-Agent-custom">

| Alias          | Modèle de service                                          | Description                                                                                                                                                               | Type de contrôle |
|:---------------|:-----------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| CMA-Health     | OS-Windows-Health-Centreon-Monitoring-Agent-custom         | Contrôle permettant de vérifier l'état de santé de l'agent Centreon                                                                                                       | natif            |
| CPU            | OS-Windows-CPU-Centreon-Monitoring-Agent-custom            | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur | natif            |
| CPU-detailed   | OS-Windows-CPU-detailed-Centreon-Monitoring-Agent-custom    | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur | natif            |
| Memory         | OS-Windows-Memory-Centreon-Monitoring-Agent-custom         | Contrôle du taux d'utilisation de la mémoire                                                                                                                              | natif            |
| Ntp            | OS-Windows-Ntp-Centreon-Monitoring-Agent-custom            | Contrôle la synchronisation avec un serveur NTP                                                                                                                           | non natif        |
| Pending-Reboot | OS-Windows-Pending-Reboot-Centreon-Monitoring-Agent-custom | Contrôle si Windows nécessite un redémarrage                                                                                                                              | non natif        |
| Services-Auto  | OS-Windows-Services-Auto-Centreon-Monitoring-Agent-custom  | Contrôle permettant de vérifier si les services Windows automatiques sont démarrés                                                                                        | natif            |
| Sessions       | OS-Windows-Sessions-Centreon-Monitoring-Agent-custom       | Contrôle le nombre de sessions actives                                                                                                                                    | non natif        |
| Swap           | OS-Windows-Swap-Centreon-Monitoring-Agent-custom           | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                    | natif            |
| Updates        | OS-Windows-Updates-Centreon-Monitoring-Agent-custom        | Contrôle si des mises à jour sont en attente                                                                                                                              | non natif        |
| Uptime         | OS-Windows-Uptime-Centreon-Monitoring-Agent-custom         | Contrôle la durée depuis laquelle le serveur tourne sans interruption                                                                                                     | natif            |
| Custom-Script  | OS-Windows-Custom-Script-Centreon-Monitoring-Agent-custom  | Contrôle permettant d'exécuter un script personnalisé sur l'hôte supervisé                                                                                                | non natif        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-Centreon-Monitoring-Agent-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                                           | Description                                                                                                                                                               | Type de contrôle |
|:----------------|:------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Certificates    | OS-Windows-Certificates-Centreon-Monitoring-Agent-custom    | Contrôle les certificats locaux                                                                                                                                           | non natif        |
| Counter         | OS-Windows-Counter-Generic-Centreon-Monitoring-Agent-custom | Contrôle la valeur d'un compteur Windows _perfmon_.                                                                                                                       | natif            |
| Eventlog-Nscp   | OS-Windows-Eventlog-Nscp-Centreon-Monitoring-Agent-custom   | Contrôle les événements en erreur dans les eventlogs à la manière de NSClient++                                                                                           | natif            |
| Files-Generic   | OS-Windows-Files-Generic-Centreon-Monitoring-Agent-custom   | Contrôle la taille ou n'importe quel aspect d'un fichier à la manière de NSClient+.+.                                                                                     | natif            |
| Process-generic | OS-Windows-Process-Nscp-Centreon-Monitoring-Agent-custom    | Contrôle le statut d'un processus.                                                                                                                                        | natif            |
| Services        | OS-Windows-Services-Centreon-Monitoring-Agent-custom        | Contrôle permettant de vérifier l'état des services Windows                                                                                                               | natif            |                    
| Storage         | OS-Windows-Storage-Centreon-Monitoring-Agent-custom         | Contrôle du taux d'utilisation des disques                                                                                                                                | natif            |
| Task-Global     | OS-Windows-Task-Global-Centreon-Monitoring-Agent-custom     | Contrôle le résultat de la dernière exécution des tâches planifiées Windows.                                                                                              | natif            |
| Task-Name       | OS-Windows-Task-Name-Centreon-Monitoring-Agent-custom       | Contrôle le résultat de la dernière exécution d'une tâche planifiée Windows.                                                                                              | natif            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| certificates.detected.count          | count |
| certificate#certificate.expires.days | d     |

</TabItem>
<TabItem value="CMA-Health" label="CMA-Health">

| Nom      | Unité |
|:---------|:------|
| runtime  | s     |
| interval | s     |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Nom            | Unité  |
|:---------------|:-------|
| *counter_name* | *unit* |
| critical-count | count  |
| warning-count  | count  |
| _total         | *unit* |

The counters names and their unit depend on the specified counters.

</TabItem>
<TabItem value="CPU" label="CPU">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| *core_index*#core.cpu.utilization.percentage | %     |
| user#cpu.utilization.percentage              | %     |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Nom                                                         | Unité |
|:------------------------------------------------------------|:------|
| *core_index*\~user#core.cpu.utilization.percentage          | %     |
| user#cpu.utilization.percentage                             | %     |
| *core_index*\~system#core.cpu.utilization.percentage        | %     |
| *core_index*\~idle#core.cpu.utilization.percentage          | %     |
| *core_index*\~interrupt#core.cpu.utilization.percentage     | %     |
| *core_index*\~dpc_interrupt#core.cpu.utilization.percentage | %     |
| *core_index*\~used#core.cpu.utilization.percentage          | %     |

</TabItem>
<TabItem value="Eventlog-Nscp" label="Eventlog-Nscp">

| Nom            | Unité |
|:---------------|:------|
| critical-count | count |
| warning-count  | count |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Nom            | Unité |
|:---------------|:------|
| critical_count | count |
| warning_count  | count |
| ok_count       | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                     | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Nom    | Unité |
|:-------|:------|
| offset | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Nom           | Unité |
|:--------------|:------|
| process.count | count |

</TabItem>
<TabItem value="Services" label="Services">

| Nom                       | Unité |
|:--------------------------|:------|
| services.stopped.count    | count |
| services.starting.count   | count |
| services.stopping.count   | count |
| services.running.count    | count |
| services.continuing.count | count |
| services.pausing.count    | count |
| services.paused.count     | count |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Nom                       | Unité |
|:--------------------------|:------|
| services.stopped.count    | count |
| services.starting.count   | count |
| services.stopping.count   | count |
| services.running.count    | count |
| services.continuing.count | count |
| services.pausing.count    | count |
| services.paused.count     | count |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Nom                                 | Unité |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Storage" label="Storage">

| Nom      | Unité |
|:---------|:------|
| used_C:\ | B     |
| used_D:\ | B     |

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom                     | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

</TabItem>
<TabItem value="Task-Global" label="Task-Global">

| Nom            | Unité     |
|:---------------|:----------|
| *task_name*    | exit_code |
| ok_count       | count     |
| warning_count  | count     |
| critical_count | count     |

</TabItem>
<TabItem value="Task-Name" label="Task-Name">

| Nom            | Unité     |
|:---------------|:----------|
| *task_name*    | exit_code |
| ok_count       | count     |
| warning_count  | count     |
| critical_count | count     |

</TabItem>
<TabItem value="Updates" label="Updates">

| Nom                           | Unité |
|:------------------------------|:------|
| windows.pending.updates.count | count |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Nom    | Unité |
|:-------|:------|
| uptime | s     |

</TabItem>
<TabItem value="Custom-Script" label="Custom-Script">

Pas de métrique pour ce service.

</TabItem>

</Tabs>

## Prérequis

<CMAprerequisites />

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
dnf install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-centreon-monitoring-agent
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

> Aucune version de Centreon Engine supportée sur CentOS 7 n'est compatible avec Centreon Monitoring Agent.

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows CMA**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

3. Créez le connecteur suivant :

Dans le menu **Configuration > Commandes > Connecteurs**, cliquez sur **Ajouter** puis saisissez les champs suivants :

| Paramètre                 | Valeur                                                                                                                                                                                      |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nom du connecteur         | Centreon Monitoring Agent                                                                                                                                                               |
| Description du connecteur | Centreon Monitoring Agent                                                                                                                                                               |
| Ligne de commande         | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Utilisé par la commande   | Selectionner toutes les commandes dont le nom correspond à `OS-Windows-Centreon-Monitoring-Agent-*`                                                                                         |
| Statut du connecteur      | Activé                                                                                                                                                                                      |

### Plugin

Ce connecteur de supervision s'appuie sur une intégration prise en charge par Centreon Engine et ne requiert pas de plugin.

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-Centreon-Monitoring-Agent-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                              | Valeur par défaut                   | Obligatoire |
|:---------------------|:---------------------------------------------------------|:------------------------------------|:-----------:|
| SYSTEMLANGUAGE       | Language installed on the Windows system.                | en                                  |             |
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found. | `C:/Program Files/Centreon/Plugins` |      X      |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Macro                        | Description                                                                                                                                                 | Valeur par défaut | Obligatoire |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSUBJECT                | Filter certificate by subject (can be a regexp).                                                                                                            |                   |             |
| FILTERTHUMBPRINT             | Filter certificate by thumbprint (can be a regexp).                                                                                                         |                   |             |
| FILTERPATH                   | Filter certificate by path (can be a regexp).                                                                                                               |                   |             |
| THRESHOLDSUNIT               | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. | d                 |             |
| TIMEOUT                      | Set timeout for command execution                                                                                                                           | 120               |             |
| WARNINGCERTIFICATEEXPIRES    | Thresholds                                                                                                                                                  | 60:               |             |
| CRITICALCERTIFICATEEXPIRES   | Thresholds                                                                                                                                                  | 30:               |             |
| WARNINGCERTIFICATESDETECTED  | Thresholds                                                                                                                                                  |                   |             |
| CRITICALCERTIFICATESDETECTED | Thresholds                                                                                                                                                  |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                    |                   |             |

</TabItem>
<TabItem value="CMA-Health" label="CMA-Health">

| Macro            | Description                                                 | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRUNTIME   | Warning if a check duration is greater than this value (s)  |                   |             |
| CRITICALRUNTIME  | Critical if a check duration is greater than this value (s) |                   |             |
| WARNINGINTERVAL  | Warning if a check interval is greater than this value (s)  |                   |             |
| CRITICALINTERVAL | Critical if a check interval is greater than this value (s) |                   |             |
| TIMEOUT          | Set timeout for command execution                           | 120               |             |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Macro          | Description                                                                                                       | Valeur par défaut   | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| COUNTERNAME    | Counter name. Examples: `\\System\\System Up Time`, `\\LogicalDisk(*)\\% Free Space`.                             |                     |      X      |
| DETAILSYNTAX   | Format for each element inside `{list}`. Place-holders: `{label}`, `{value}`.                                     | `{alias} = {value}` |             |
| WARNING        | Minimum WARNING items before overall status is WARNING.                                                           | 1                   |             |
| CRITICAL       | Minimum CRITICAL items before overall status is CRITICAL.                                                         | 1                   |             |
| WARNINGSTATUS  | Filter expression that marks an item WARNING. Example: `value > 80`.                                              |                     |             |
| CRITICALSTATUS | Filter expression that marks an item CRITICAL. Example: `value > 90`.                                             |                     |             |
| OUTPUTSYNTAX   | Format the output. Place-holders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{crit_count}`, ... | `{status}: {list}`  |             |
| USEENGLISH     | Force the use of English counter names, otherwise they'll be in the local language.                               | true                |             |
| VERBOSE        | Add verbose output in the end.                                                                                    | false               |             |
| TIMEOUT        | Set timeout for command execution                                                                                 | 120                 |             |

</TabItem>
<TabItem value="CPU" label="CPU">

| Macro           | Description                                                  | Valeur par défaut | Obligatoire |
|:----------------|:-------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCORE     | Threshold for warning status on core usage in percentage     |                   |             |
| CRITICALCORE    | Threshold for critical status on core usage in percentage    |                   |             |
| WARNINGAVERAGE  | Threshold for warning status on average usage in percentage  |                   |             |
| CRITICALAVERAGE | Threshold for critical status on average usage in percentage |                   |             |
| TIMEOUT         | Set timeout for command execution                            | 120               |             |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Macro                 | Description                                                         | Valeur par défaut | Obligatoire |
|:----------------------|:--------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCORE           | Threshold for warning status on core usage in percentage            |                   |             |
| CRITICALCORE          | Threshold for critical status on core usage in percentage           |                   |             |
| WARNINGAVERAGE        | Threshold for warning status on average usage in percentage         |                   |             |
| CRITICALAVERAGE       | Threshold for critical status on average usage in percentage        |                   |             |
| WARNINGCOREUSER       | Threshold for warning status on core user usage in percentage       |                   |             |
| CRITICALCOREUSER      | Threshold for critical status on core user usage in percentage      |                   |             |
| WARNINGAVERAGEUSER    | Threshold for warning status on average user usage in percentage    |                   |             |
| CRITICALAVERAGEUSER   | Threshold for critical status on average user usage in percentage   |                   |             |
| WARNINGCORESYSTEM     | Threshold for warning status on core system usage in percentage     |                   |             |
| CRITICALCORESYSTEM    | Threshold for critical status on core system usage in percentage    |                   |             |
| WARNINGAVERAGESYSTEM  | Threshold for warning status on average system usage in percentage  |                   |             |
| CRITICALAVERAGESYSTEM | Threshold for critical status on average system usage in percentage |                   |             |
| TIMEOUT               | Set timeout for command execution                                   | 120               |             |

</TabItem>
<TabItem value="Eventlog-Nscp" label="Eventlog-Nscp">

| Macro             | Description                                                                                                                                                   | Valeur par défaut                                           | Obligatoire |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-----------:|
| FILE              | Event log file to monitor                                                                                                                                     |                                                             |             |
| FILTEREVENT       | Filter to apply on event log                                                                                                                                  | written > 60m and level in ('error', 'warning', 'critical') |             |
| SCANRANGE         | Validity of events, can be s, second, m, minute, h, hour, d, day, w, week                                                                                     | 24h                                                         |             |
| WARNINGSTATUS     | Filter to apply on event log to get warning events                                                                                                            | level = 'warning'                                           |             |
| CRITICALSTATUS    | Filter to apply on event log to get critical events                                                                                                           | level in ('error', 'critical')                              |             |
| WARNINGCOUNT      | Number of warning events to trigger a warning                                                                                                                 | 1                                                           |             |
| CRITICALCOUNT     | Number of critical events to trigger a critical                                                                                                               | 1                                                           |             |
| EMPTYSTATE        | Message to display when no event is found                                                                                                                     | Empty or no match for this filter                           |             |
| OUTPUTSYNTAX      | Output format when status is not ok                                                                                                                           | \{status\}: \{count\} \{problem_list\}                      |             |
| OKSYNTAX          | Output format when status is ok                                                                                                                               | \{status\}: Event log seems fine                            |             |
| EVENTDETAILSYNTAX | Output format for each event                                                                                                                                  | '\{source\} \{id\}'                                         |             |
| UNIQUEINDEX       | Unique index for events, events are grouped by this index. For example is two events have the same provider and the same id, only latest is printed to output | \{provider\}\{id\}                                          |             |
| VERBOSE           | Display all events in long plugins output format (one line per event)                                                                                         | true                                                        |             |
| TIMEOUT           | Set timeout for command execution                                                                                                                             | 120                                                         |             |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

Analyse les fichiers d'une arborescence de répertoires, applique des filtres et évalue les métadonnées des fichiers (taille, horodatage, version, nombre de lignes, etc.) à des fins de surveillance et d'alerte.

| Macro          | Description                                                                              | Obligatoire | Valeurs autorisées                                                                                                                                                                     | DValeur par défaut                                         | Exemples                             |
|:---------------|:-----------------------------------------------------------------------------------------|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------|
| PATHS          | Root directory to search files in.                                                       |      X      |                                                                                                                                                                                        |                                                            | path/to/file                         |
| PATTERN        | Shell-style wildcards pattern to match filenames.<br/>* can be used as a wildcard        |             |                                                                                                                                                                                        | `*.*`                                                      |                                      |
| MAXDEPTH       | Max recursion depth.                                                                     |             | - 0: top only <br/>- 1: include subdirs <br/>- -1: recursively include all subdirs                                                                                                     | 0                                                          |                                      |
| OUTPUTSYNTAX   | Output format string for the overall check result.                                       |             | Placeholders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{warn_list}`, `{crit_count}`, `{crit_list}`, `{problem_count}`, `{problem_list}`, `{ok_count}`, `{ok_list}` | `{status}: {problem_count}/{count} files ({problem_list})` |                                      |     
| DETAILSYNTAX   | Format for each file detail inside `{list}`.                                             |             | `{path}`, `{filename}`, `{size}`, `{creation}`, `{access}`, `{written}`, `{version}`, `{line_count}`, `{extension}`.                                                                   | `{filename}`                                               |                                      |
| OKSYNTAX       | Output if all files are OK.                                                              |             |                                                                                                                                                                                        | `{status}: All {count} files are ok`                       |                                      |
| FILTER         | Filter expression to select files for the check.                                         |             |                                                                                                                                                                                        |                                                            | `size > 1M && extension == '.dll'`   |
| WARNINGSTATUS  | Filter expression: files matching are considered WARNING.                                |             |                                                                                                                                                                                        | no relevant status change if empty                         |                                      |
| CRITICALSTATUS | Filter expression: files matching are considered CRITICAL.                               |             |                                                                                                                                                                                        | no relevant status change if empty                         |                                      |
| WARNING        | WARNING status items count must be strictly higher than this value to trigger WARNING.   |             |                                                                                                                                                                                        | 0                                                          | 0 = at least 1 file to trigger alert |
| CRITICAL       | CRITICAL status items count must be strictly higher than this value to trigger CRITICAL. |             |                                                                                                                                                                                        | 0                                                          | 0 = at least 1 file to trigger alert |
| VERBOSE        | Display detailed file info.                                                              |             |                                                                                                                                                                                        | false                                                      |                                      |
| TIMEOUT        | Set timeout for command execution                                                        |             |                                                                                                                                                                                        | 120                                                        |                                      |

### Filter expressions

> Applies for FILTER, WARNINGSTATUS, CRITICALSTATUS.

Filter syntax is similar to C/SQL:

- Numeric operators: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Logical: `&&` (AND), `||` (OR)
- String equality: `==`, `!=` (note: single `=` is **not** valid)
- IN/NOT IN: `filename in ('myfile.txt')`, `version in ('1.0', '1.1')`

Supported file metadata labels:

- size           (in bytes, supports units: K, Ko, M, Mo, G, Go)
- line_count     (line counting in txt file)
- creation       (file age in seconds since creation, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- access         (file age in seconds since last access, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- written        (file age in seconds since last modification, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- filename       (name of the file, string comparison)
- path           (full file path, string comparison)
- extension      (file extension, e.g. '.dll')
- version        (for .exe/.dll files, string comparison)

You can also add this result list filter in WARNINGSTATUS and CRITICALSTATUS:

- count          number of items

### Warning and Critical Status

Files matching the WARNINGSTATUS/CRITICALSTATUS filters are considered WARNING/CRITICAL.
You can combine with WARNING/CRITICAL to require multiple matches before changing the global state.

### Examples

#### Filters

> Applies for FILTER, WARNINGSTATUS, CRITICALSTATUS.

- "size > 50M"                            # File larger than 50 MB
- "extension == '.bak'"                   # Backup files
- "size > 200m && extension == '.dll'"    # Large DLLs
- "count &lt;= 0"                            # No file found
- "filename in ('myfile.txt')"            # Specific file by name
- "filename == 'myfile.txt'"              # Specific file by name (alternative)

#### File age check

File age can be checked using 3 metadata labels, which can be mixed using logical operators :

- creation       (file age in seconds since creation, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- access         (file age in seconds since last access, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- written        (file age in seconds since last modification, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)

_“I want to trigger a CRITICAL alert if at least one file of my test directory has not be updated since 1 day or more, and WARNING alert if more than 12 hours and less than 1 day”_

```
PATH= C:/Users/User/Documents/test
PATTERN= *.*
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS= written > 12h
CRITICALSTATUS= written > 1d
WARNING= 0
CRITICAL= 0
```

#### File size check

_“I want to trigger CRITICAL alert if at least 1 DLLs in System32 (including subdirs without recursivity) size is >100M, and trigger WARNING alert if at least 2 DLLs size is >10M”_

The extension filter can be done using PATTERN or FILTER.

```
PATH= C:/Windows/System32
PATTERN= *.dll
MAXDEPTH= 1,
OUTPUTSYNTAX= {status}: {problem_count}/{count} DLLs have issues: {problem_list}
DETAILSYNTAX= {filename}: {size} {version}
FILTER= extension == '.dll'
WARNINGSTATUS= size > 10m
CRITICALSTATUS= size > 100m
WARNING= 1
CRITICAL= 0
```

Note:

- If "line_count" is used in any filter or output, line count calculation will be enabled (may impact performance).
- Paths, patterns, and filters are case-insensitive on Windows.
- Use `/` as the path separator instead of `\` (e.g., `C:/Users/...`). Backslashes require extra escaping and may cause errors.


#### File presence check

_“I want to trigger a CRITICAL alert if file is not present“_

```
PATH= C:/Users/User/Documents/test
PATTERN= myfile.txt
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS=
CRITICALSTATUS= count < 0
WARNING=
CRITICAL= 0
```

_“I want to trigger a CRITICAL alert if at least one file is present“_

```
PATH= C:/Users/User/Documents/test
PATTERN= myfile.txt
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS=
CRITICALSTATUS= count > 0
WARNING=
CRITICAL= 0
```

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                 | Description                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE          | Threshold for warning status on physical memory usage in bytes       |                   |             |
| CRITICALUSAGE         | Threshold for critical status on physical memory usage in bytes      |                   |             |
| WARNINGUSAGEFREE      | Threshold for warning status on free physical memory in bytes        |                   |             |
| CRITICALUSAGEFREE     | Threshold for critical status on free physical memory in bytes       |                   |             |
| WARNINGUSAGEPRCT      | Threshold for warning status on physical memory usage in percentage  |                   |             |
| CRITICALUSAGEPRCT     | Threshold for critical status on physical memory usage in percentage |                   |             |
| WARNINGUSAGEFREEPRCT  | Threshold for warning status on free physical memory in percentage   |                   |             |
| CRITICALUSAGEFREEPRCT | Threshold for critical status on free physical memory in percentage  |                   |             |
| TIMEOUT               | Set timeout for command execution                                    | 120               |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro          | Description                                                                                                                                                          | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPHOSTNAME    | Set the NTP server to use (if not set, we try to find it with w32tm command).                                                                                        |                   |             |
| NTPPORT        | Set the NTP port (default: 123).                                                                                                                                     |                   |             |
| WARNINGOFFSET  | Time warning threshold range (in seconds), in the format `-n:n` (e.g., `-5:5`). Returns WARNING when the offset is less than -n seconds or greater than n seconds.   | -1:1              |             |
| CRITICALOFFSET | Time critical threshold range (in seconds), in the format `-n:n` (e.g., `-5:5`). Returns CRITICAL when the offset is less than -n seconds or greater than n seconds. | -2:2              |             |
| TIMEOUT        | Set timeout time for 'w32tm' command execution (default: 30 sec).                                                                                                    | 10                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                             |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                  | Valeur par défaut             | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}  | `%{RebootPending} =~ /true/i` |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\} |                               |             |
| TIMEOUT        | Set timeout time for command execution                                                                                                                                                                                       | 10                            |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                     |                               |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro          | Description                                                      | Valeur par défaut                     | Obligatoire |
|:---------------|:-----------------------------------------------------------------|:--------------------------------------|:-----------:|
| PROCESS        | Name of the executable                                           |                                       |      X      |
| WARNINGSTATUS  | Filter to apply on processes to identify those in WARNING state  | `status != 'started'`                 |             |
| CRITICALSTATUS | Filter to apply on processes to identify those in CRITICAL state |                                       |             |
| WARNINGRULES   | Condition to match for the overall status to be WARNING          | `warn_count > 0`                      |             |
| CRITICALRULES  | Condition to match for the overall status to be CRITICAL         | `ok_count <1`                          |             |
| EMPTYSTATE     | Message to display when no process is found                      | `No files found matching this filter` |             |
| OUTPUTSYNTAX   | Format of the output when the status is not OK                   | `{status}: {problem_list}`            |             |
| OKSYNTAX       | Format of the output when the status is OK                       | `{status}: All processes are ok`      |             |
| DETAILSYNTAX   | How each process is displayed in the output                      | `{exe}={state}`                       |             |
| VERBOSE        | Display all not ok processes in long output                      | true                                  |             |
| TIMEOUT        | Set timeout for command execution                                | 120                                   |             |

</TabItem>
<TabItem value="Services" label="Services">

| Macro                | Description                                                                                                                               | Valeur par défaut | Obligatoire |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STARTAUTO            | Only services that start automatically will be counted                                                                                    | false             |             |
| FILTERNAME           | Regex to filter service names                                                                                                             | .*                |             |
| EXCLUDENAME          | Regex to exclude service names                                                                                                            |                   |             |
| FILTERDISPLAY        | Regex to filter service display names as they appear in service manager                                                                   |                   |             |
| EXCLUDEDISPLAY       | Regex to exclude service display names                                                                                                    |                   |             |
| SERVICE_TYPE         | Regex to filter by service type                                                                                                           | service           |             |
| START_TYPE           | Regex to filter by service startup type. Can be auto, boot, system, demand, disabledn or empty to match all modes.                        |                   |             |
| DELAYED              | Regex to filter by delayed startup services. Can be true, false or empty to match all services.                                           |                   |             |
| WARNINGSTATE         | Regex to match service state that will trigger a warning. States are (stopped, starting, stopping, running, continuing, pausing, paused)  |                   |             |
| CRITICALSTATE        | Regex to match service state that will trigger a critical. States are (stopped, starting, stopping, running, continuing, pausing, paused) |                   |             |
| WARNINGTOTALRUNNING  | Running service number threshold below which the service will pass in the warning state                                                   |                   |             |
| CRITICALTOTALRUNNING | Running service number threshold below which the service will pass in the critical state                                                  |                   |             |
| WARNINGTOTALPAUSED   | Number of services in the pause state above which the service goes into the warning state                                                 |                   |             |
| CRITICALTOTALPAUSED  | Number of services in the pause state above which the service goes into the critical state                                                |                   |             |
| WARNINGTOTALSTOPPED  | Number of services in a stopped state above which the service takes on a warning status                                                   |                   |             |
| CRITICALTOTALSTOPPED | Number of services in a stopped state above which the service takes on a critical status                                                  |                   |             |
| TIMEOUT              | Set timeout for command execution                                                                                                         | 120               |             |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Macro                | Description                                                                                                                               | Valeur par défaut | Obligatoire |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STARTAUTO            | Only services that start automatically will be counted                                                                                    | true              |             |
| FILTERNAME           | Regex to filter service names                                                                                                             | .*                |             |
| EXCLUDENAME          | Regex to exclude service names                                                                                                            |                   |             |
| FILTERDISPLAY        | Regex to filter service display names as they appear in service manager                                                                   |                   |             |
| EXCLUDEDISPLAY       | Regex to exclude service display names                                                                                                    |                   |             |
| SERVICE_TYPE         | Regex to filter by service type                                                                                                           | service           |             |
| START_TYPE           | Regex to filter by service startup type. Can be auto, boot, system, demand, disabledn or empty to match all modes.                        |                   |             |
| DELAYED              | Regex to filter by delayed startup services. Can be true, false or empty to match all services.                                           |                   |             |
| WARNINGSTATE         | Regex to match service state that will trigger a warning. States are (stopped, starting, stopping, running, continuing, pausing, paused)  |                   |             |
| CRITICALSTATE        | Regex to match service state that will trigger a critical. States are (stopped, starting, stopping, running, continuing, pausing, paused) |                   |             |
| WARNINGTOTALRUNNING  | Running service number threshold below which the service will pass in the warning state                                                   |                   |             |
| CRITICALTOTALRUNNING | Running service number threshold below which the service will pass in the critical state                                                  |                   |             |
| WARNINGTOTALPAUSED   | Number of services in the pause state above which the service goes into the warning state                                                 |                   |             |
| CRITICALTOTALPAUSED  | Number of services in the pause state above which the service goes into the critical state                                                |                   |             |
| WARNINGTOTALSTOPPED  | Number of services in a stopped state above which the service takes on a warning status                                                   |                   |             |
| CRITICALTOTALSTOPPED | Number of services in a stopped state above which the service takes on a critical status                                                  |                   |             |
| TIMEOUT              | Set timeout for command execution                                                                                                         | 120               |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                               | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSESSIONNAME                   | Filter session name (can be a regexp).                                                                                                               |                   |             |
| CONFIG                              | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE               | Thresholds                                                                                                                                           |                   |             |
| CRITICALSESSIONSACTIVE              | Thresholds                                                                                                                                           |                   |             |
| WARNINGSESSIONSCREATED              | Thresholds                                                                                                                                           |                   |             |
| CRITICALSESSIONSCREATED             | Thresholds                                                                                                                                           |                   |             |
| WARNINGSESSIONSDISCONNECTED         | Thresholds                                                                                                                                           |                   |             |
| CRITICALSESSIONSDISCONNECTED        | Thresholds                                                                                                                                           |                   |             |
| WARNINGSESSIONSRECONNECTED          | Thresholds                                                                                                                                           |                   |             |
| CRITICALSESSIONSRECONNECTED         | Thresholds                                                                                                                                           |                   |             |
| WARNINGSESSIONSDISCONNECTEDCURRENT  | Thresholds                                                                                                                                           |                   |             |
| CRITICALSESSIONSDISCONNECTEDCURRENT | Thresholds                                                                                                                                           |                   |             |
| TIMEOUT                             | Timeout in seconds for the command                                                                                                                   | 10                |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)             |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro             | Description                                                                                                                                                                                                                                                                                    | Valeur par défaut | Obligatoire |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING           | Thresholds                                                                                                                                                                                                                                                                                     | 80                |             |
| CRITICAL          | Thresholds                                                                                                                                                                                                                                                                                     | 90                |             |
| FILTERSTORAGETYPE | Case insensitive regex to filter storage type it includes drive type (fixed, network...). Types recognized by agent: hrunknown, hrstoragefixeddisk, hrstorageremovabledisk, hrstoragecompactdisc, hrstorageramdisk, hrstoragenetworkdisk, hrfsunknown, hrfsfat, hrfsntfs, hrfsfat32, hrfsexfat | .*                |             |
| FILTERFS          | Case insensitive regex to filter filesystem. Example: [C-D]:\\.*                                                                                                                                                                                                                               | .*                |             |
| TIMEOUT           | Set timeout for command execution                                                                                                                                                                                                                                                              | 120               |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro                | Description                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-----------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSWAP          | Threshold for warning status on swap memory usage in bytes       |                   |             |
| CRITICALSWAP         | Threshold for critical status on swap memory usage in bytes      |                   |             |
| WARNINGSWAPFREE      | Threshold for warning status on free swap memory in bytes        |                   |             |
| CRITICALSWAPFREE     | Threshold for critical status on free swap memory in bytes       |                   |             |
| WARNINGSWAPPRCT      | Threshold for warning status on swap memory usage in percentage  |                   |             |
| CRITICALSWAPPRCT     | Threshold for critical status on swap memory usage in percentage |                   |             |
| WARNINGSWAPFREEPRCT  | Threshold for warning status on free swap memory in percentage   |                   |             |
| CRITICALSWAPFREEPRCT | Threshold for critical status on free swap memory in percentage  |                   |             |
| TIMEOUT              | Set timeout for command execution                                | 120               |             |

</TabItem>
<TabItem value="Task-Global" label="Task-Global">

| Macro          | Description                                                                                                               | Valeur par défaut                                                                               | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------|:-----------:|
| FILTERTASK     | Filter expression that determines which tasks to check.                                                                   | `enabled == 1`                                                                                  |      X      |
| WARNINGSTATUS  | Filter expression that marks a task WARNING.                                                                              | `exit_code != 0`                                                                                |             |
| CRITICALSTATUS | Filter expression that marks a task CRITICAL.                                                                             | `exit_code < 0 \|\| missed_runs > 2`                                                            |             |
| WARNING        | Minimum WARNING tasks before overall status is WARNING.                                                                   | `1`                                                                                             |             |
| CRITICAL       | Minimum CRITICAL tasks before overall status is CRITICAL.                                                                 | `1`                                                                                             |             |
| OUTPUTSYNTAX   | Format the not OK output. Place-holders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{crit_count}`, etc. | `{status}: {ok_count} Ok - {warn_count} Warning - {crit_count} Critical tasks - {problem_list}` |             |
| OKSYNTAX       | Format the OK output. Place-holders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{crit_count}`, etc.     | `{status}: All tasks are ok - {ok_list}`                                                        |             |
| DETAILSYNTAX   | Format for each task detail inside `{list}`. Place-holders: `{folder}`, `{name}`, `{exit_code}`, etc.                     | `{folder}/{name} exit code: {exit_code}`                                                        |             |
| VERBOSE        | Add verbose output including detailed task information.                                                                   | `false`                                                                                         |             |
| TIMEOUT        | Set timeout for command execution                                                                                         | 120                                                                                             |             |

</TabItem>
<TabItem value="Task-Name" label="Task-Name">

| Macro          | Description                                                                                                               | Valeur par défaut                                                                               | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------|:-----------:|
| TASKNAME       | Name of the task to monitor. Omit the task's folder. Example: put `WinSAT` not ` \Microsoft\Windows\Maintenance\WinSAT`   |                                                                                                 |      X      |
| WARNINGSTATUS  | Filter expression that marks a task WARNING.                                                                              | `exit_code != 0`                                                                                |             |
| CRITICALSTATUS | Filter expression that marks a task CRITICAL.                                                                             | `exit_code < 0 \|\| missed_runs > 2`                                                            |             |
| WARNING        | Minimum WARNING tasks before overall status is WARNING.                                                                   | `1`                                                                                             |             |
| CRITICAL       | Minimum CRITICAL tasks before overall status is CRITICAL.                                                                 | `1`                                                                                             |             |
| OUTPUTSYNTAX   | Format the not OK output. Place-holders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{crit_count}`, etc. | `{status}: {ok_count} Ok - {warn_count} Warning - {crit_count} Critical tasks - {problem_list}` |             |
| OKSYNTAX       | Format the OK output. Place-holders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{crit_count}`, etc.     | `{status}: All tasks are ok - {ok_list}`                                                        |             |
| DETAILSYNTAX   | Format for each task detail inside `{list}`. Place-holders: `{folder}`, `{name}`, `{exit_code}`, etc.                     | `{folder}/{name} exit code: {exit_code}`                                                        |             |
| VERBOSE        | Add verbose output including detailed task information.                                                                   | `false`                                                                                         |             |
| TIMEOUT        | Set timeout for command execution                                                                                         | 120                                                                                             |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                                                              | Valeur par défaut  | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGPENDINGUPDATES  | Thresholds                                                                                                                               | 1                  |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                                                               |                    |             |
| TIMEOUT                | Set timeout time for command execution.                                                                                                  | 30                 |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --filter-mandatory |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                          | Valeur par défaut | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUPTIME  | Warning threshold, if computer has been up for less than this time, service will be in warning state | 3600:             |             |
| CRITICALUPTIME | Critical threshold                                                                                   | 600:              |             |
| TIMEOUT        | Set timeout for command execution                                                                    | 120               |             |


</TabItem>
<TabItem value="Custom-Script" label="Custom-Script">

| Macro       | Description                                          | Valeur par défaut | Obligatoire |
|:------------|:-----------------------------------------------------|:------------------|:-----------:|
| CUSTOMCHECK | Name of the custom check to use                      |                   |      X      |
| ARG1        | Extra argument 1 to pass to the custom check command |                   |             |
| ARG2        | Extra argument 2 to pass to the custom check command |                   |             |
| ARG3        | Extra argument 3 to pass to the custom check command |                   |             |
| ARG4        | Extra argument 4 to pass to the custom check command |                   |             |
| ARG5        | Extra argument 5 to pass to the custom check command |                   |             |
| ARG6        | Extra argument 6 to pass to the custom check command |                   |             |
| ARG7        | Extra argument 7 to pass to the custom check command |                   |             |
| ARG8        | Extra argument 8 to pass to the custom check command |                   |             |
| TIMEOUT     | Set timeout for command execution                    | 120               |             |


> Les commandes sont définies dans un fichier de configuration dédié utilisant un format compatible avec NSClient / NRPE.
> Le chemin d'accès à ce fichier est configuré via le programme d'installation ou le registre à l'aide du paramètre **custom_check_file**.
> Pour mettre à jour les commandes, modifiez le fichier et rechargez l'agent.

```cmd
[custom_checks]
check_echo = /usr/bin/echo "$ARG1$ $ARG2$"
custom_check_2 = /path/to/custom_check_2 -c /arg=$ARG1$
```
</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ? (contrôles non natifs uniquement)

Vous pouvez tester que le plugin parvient bien à superviser votre serveur Windows en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```cmd
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin os::windows::local::plugin --mode sessions --language=fr --timeout=30 --use-new-perfdata
```

> NB : Cette commande ne peut pas s'exécuter sur les collecteurs, il faut la lancer directement sur le serveur Windows.

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Sessions created: 0, disconnected: 0, reconnected : 0, current active : 1, current disconnected : 1 | 'sessions.created.total.count'=0;;;0; 'sessions.disconnected.total.count'=0;;;0; 'sessions.reconnected.total.count'=0;;;0; 'sessions.active.current.count'=1;;;0; 'sessions.disconnected.current.count'=1;;;0;
```

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Le plugin apporte les modes suivants :

| Mode                                                                                                                          | Modèle de service associé                                  |
|:------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]    | OS-Windows-Certificates-Centreon-Monitoring-Agent-custom   |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)] | OS-Windows-Pending-Reboot-Centreon-Monitoring-Agent-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]            | OS-Windows-Sessions-Centreon-Monitoring-Agent-custom       |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                     | OS-Windows-Ntp-Centreon-Monitoring-Agent-custom            |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]              | OS-Windows-Updates-Centreon-Monitoring-Agent-custom        |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                        |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)' |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Option                           | Description                                                                                                                                                 |
|:---------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-thumbprint              | Filter certificate by thumbprint (can be a regexp).                                                                                                         |
| --filter-subject                 | Filter certificate by subject (can be a regexp).                                                                                                            |
| --filter-path                    | Filter certificate by path (can be a regexp).                                                                                                               |
| --unit                           | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |
| --warning-certificates-detected  | Thresholds                                                                                                                                                  |
| --critical-certificates-detected | Thresholds                                                                                                                                                  |
| --warning-certificate-expires    | Thresholds                                                                                                                                                  |
| --critical-certificate-expires   | Thresholds                                                                                                                                                  |
| --no-ps                          | Don't encode powershell. To be used with --command and 'type' command.                                                                                      |
| --command                        | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                      |
| --command-path                   | Command path (default: none).                                                                                                                               |
| --command-options                | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                     |
| --ps-display                     | Display powershell script.                                                                                                                                  |
| --ps-exec-only                   | Print powershell output.                                                                                                                                    |

</TabItem>
<TabItem value="CPU" label="CPU">

| Option                            | Description                                                                        |
|:----------------------------------|:-----------------------------------------------------------------------------------|
| --use-nt-query-system-information | (default true): true: use NtQuerySystemInformation instead of performance counters |
| --cpu-detailed                    | (default false): true: add detailed cpu usage metrics                              |
| --warning-core                    | Threshold for warning status on core usage in percentage                           |
| --critical-core                   | Threshold for critical status on core usage in percentage                          |
| --warning-average                 | Threshold for warning status on average usage in percentage                        |
| --critical-average                | Threshold for critical status on average usage in percentage                       |
| --warning-core-user               | Threshold for warning status on core user usage in percentage                      |
| --critical-core-user              | Threshold for critical status on core user usage in percentage                     |
| --warning-average-user            | Threshold for warning status on average user usage in percentage                   |
| --critical-average-user           | Threshold for critical status on average user usage in percentage                  |
| --warning-core-system             | Threshold for warning status on core system usage in percentage                    |
| --critical-core-system            | Threshold for critical status on core system usage in percentage                   |
| --warning-average-system          | Threshold for warning status on average system usage in percentage                 |
| --critical-average-system         | Threshold for critical status on average system usage in percentage                |

</TabItem>
<TabItem value="CPU-detailed" label="CPU-detailed">

| Option                            | Description                                                                        |
|:----------------------------------|:-----------------------------------------------------------------------------------|
| --use-nt-query-system-information | (default true): true: use NtQuerySystemInformation instead of performance counters |
| --cpu-detailed                    | (default false): true: add detailed cpu usage metrics                              |
| --warning-core                    | Threshold for warning status on core usage in percentage                           |
| --critical-core                   | Threshold for critical status on core usage in percentage                          |
| --warning-average                 | Threshold for warning status on average usage in percentage                        |
| --critical-average                | Threshold for critical status on average usage in percentage                       |
| --warning-core-user               | Threshold for warning status on core user usage in percentage                      |
| --critical-core-user              | Threshold for critical status on core user usage in percentage                     |
| --warning-average-user            | Threshold for warning status on average user usage in percentage                   |
| --critical-average-user           | Threshold for critical status on average user usage in percentage                  |
| --warning-core-system             | Threshold for warning status on core system usage in percentage                    |
| --critical-core-system            | Threshold for critical status on core system usage in percentage                   |
| --warning-average-system          | Threshold for warning status on average system usage in percentage                 |
| --critical-average-system         | Threshold for critical status on average system usage in percentage                |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                       | Description                                                          |
|:-----------------------------|:---------------------------------------------------------------------|
| --swap                       | (default false): true: add swap to output                            |
| --virtual                    | (default false): true: add virtual memory to output                  |
| --warning-usage              | Threshold for warning status on physical memory usage in bytes       |
| --critical-usage             | Threshold for critical status on physical memory usage in bytes      |
| --warning-usage-free         | Threshold for warning status on free physical memory in bytes        |
| --critical-usage-free        | Threshold for critical status on free physical memory in bytes       |
| --warning-usage-prct         | Threshold for warning status on physical memory usage in percentage  |
| --critical-usage-prct        | Threshold for critical status on physical memory usage in percentage |
| --warning-usage-free-prct    | Threshold for warning status on free physical memory in percentage   |
| --critical-usage-free-prct   | Threshold for critical status on free physical memory in percentage  |
| --warning-swap               | Threshold for warning status on swap usage in bytes                  |
| --critical-swap              | Threshold for critical status on swap usage in bytes                 |
| --warning-swap-free          | Threshold for warning status on free swap in bytes                   |
| --critical-swap-free         | Threshold for critical status on free swap in bytes                  |
| --warning-swap-prct          | Threshold for warning status on swap usage in percentage             |
| --critical-swap-prct         | Threshold for critical status on swap usage in percentage            |
| --warning-swap-free-prct     | Threshold for warning status on free swap in percentage              |
| --critical-swap-free-prct    | Threshold for critical status on free swap in percentage             |
| --warning-virtual            | Threshold for warning status on virtual memory usage in bytes        |
| --critical-virtual           | Threshold for critical status on virtual memory usage in bytes       |
| --warning-virtual-free       | Threshold for warning status on free virtual memory in bytes         |
| --critical-virtual-free      | Threshold for critical status on free virtual memory in bytes        |
| --warning-virtual-prct       | Threshold for warning status on virtual memory usage in percentage   |
| --critical-virtual-prct      | Threshold for critical status on virtual memory usage in percentage  |
| --warning-virtual-free-prct  | Threshold for warning status on free virtual memory in percentage    |
| --critical-virtual-free-prct | Threshold for critical status on free virtual memory in percentage   |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option         | Description                                                                |
|:---------------|:---------------------------------------------------------------------------|
| --warning      | Warning threshold.                                                         |
| --critical     | Critical threshold.                                                        |
| --ntp-hostname | Set the ntp hostname (if not set, we try to find it with w32tm command).   |
| --ntp-port     | Set the ntp port (Default: 123).                                           |
| --timeout      | Set timeout time for 'w32tm' command execution (Default: 30 sec)           |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (Default: 50 sec)                                                                                                                                                                                                                |
| --no-ps           | Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                                                  |
| --command         | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                                  |
| --command-path    | Command path (Default: none).                                                                                                                                                                                                                                           |
| --command-options | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                                 |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                              |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                                |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%\{RebootPending\} =~ /true/i'). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}. |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}.                             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |
| --language               | Set the language used in config file (default: 'en').                                                                                            |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                    |
| --command-path           | Command path (Default: none).                                                                                                                    |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                           |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                           |
| --warning-* --critical-* | Thresholds Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.      |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                | Description                                                                                                                                                                                                                                                                                    |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unit                | (default %): unit of threshold. If different from % threshold are in bytes                                                                                                                                                                                                                     |
| --free                | (default used): true: threshold is applied on free space and service become warning if free sapce is lower than threshold. false: threshold is applied on used space and service become warning if used space is higher than threshold                                                         |
| --warning             | warning threshold                                                                                                                                                                                                                                                                              |
| --critical            | critical threshold                                                                                                                                                                                                                                                                             |
| --filter-storage-type | Case insensitive regex to filter storage type it includes drive type (fixed, network...). Types recognized by agent: hrunknown, hrstoragefixeddisk, hrstorageremovabledisk, hrstoragecompactdisc, hrstorageramdisk, hrstoragenetworkdisk, hrfsunknown, hrfsfat, hrfsntfs, hrfsfat32, hrfsexfat |
| --filter-fs           | Regex to filter filesystem. Example: [C-D]:\\.*                                                                                                                                                                                                                                                |
| --exclude-fs          | Regex to exclude filesystem                                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                       | Description                                                          |
|:-----------------------------|:---------------------------------------------------------------------|
| --swap                       | (default false): true: add swap to output                            |
| --virtual                    | (default false): true: add virtual memory to output                  |
| --warning-usage              | Threshold for warning status on physical memory usage in bytes       |
| --critical-usage             | Threshold for critical status on physical memory usage in bytes      |
| --warning-usage-free         | Threshold for warning status on free physical memory in bytes        |
| --critical-usage-free        | Threshold for critical status on free physical memory in bytes       |
| --warning-usage-prct         | Threshold for warning status on physical memory usage in percentage  |
| --critical-usage-prct        | Threshold for critical status on physical memory usage in percentage |
| --warning-usage-free-prct    | Threshold for warning status on free physical memory in percentage   |
| --critical-usage-free-prct   | Threshold for critical status on free physical memory in percentage  |
| --warning-swap               | Threshold for warning status on swap usage in bytes                  |
| --critical-swap              | Threshold for critical status on swap usage in bytes                 |
| --warning-swap-free          | Threshold for warning status on free swap in bytes                   |
| --critical-swap-free         | Threshold for critical status on free swap in bytes                  |
| --warning-swap-prct          | Threshold for warning status on swap usage in percentage             |
| --critical-swap-prct         | Threshold for critical status on swap usage in percentage            |
| --warning-swap-free-prct     | Threshold for warning status on free swap in percentage              |
| --critical-swap-free-prct    | Threshold for critical status on free swap in percentage             |
| --warning-virtual            | Threshold for warning status on virtual memory usage in bytes        |
| --critical-virtual           | Threshold for critical status on virtual memory usage in bytes       |
| --warning-virtual-free       | Threshold for warning status on free virtual memory in bytes         |
| --critical-virtual-free      | Threshold for critical status on free virtual memory in bytes        |
| --warning-virtual-prct       | Threshold for warning status on virtual memory usage in percentage   |
| --critical-virtual-prct      | Threshold for critical status on virtual memory usage in percentage  |
| --warning-virtual-free-prct  | Threshold for warning status on free virtual memory in percentage    |
| --critical-virtual-free-prct | Threshold for critical status on free virtual memory in percentage   |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                                                                                                            |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (Default: 50 sec)                                                                               |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                  |
| --command                | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!! |
| --command-path           | Command path (Default: none).                                                                                                          |
| --command-options        | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                |
| --ps-display             | Display powershell script.                                                                                                             |
| --ps-exec-only           | Print powershell output.                                                                                                               |
| --filter-title           | Filter windows updates by title (can be a regexp).                                                                                     |
| --exclude-title          | Exclude windows updates by title (regexp can be used).                                                                                 |
| --display-updates        | Display updates in verbose output.                                                                                                     |
| --warning-* --critical-* | Thresholds Can be: 'pending-updates'.                                                                                                  |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option             | Description                                                                                          |
|:-------------------|:-----------------------------------------------------------------------------------------------------|
| --unit             | (defaults s): can be s, second, m, minute, h, hour, d, day, w, week                                  |
| --warning-uptime   | warning threshold, if computer has been up for less than this time, service will be in warning state |
| --critical-uptime  | critical threshold                                                                                   |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin=os::windows::local::plugin --mode=certificates --help
```
