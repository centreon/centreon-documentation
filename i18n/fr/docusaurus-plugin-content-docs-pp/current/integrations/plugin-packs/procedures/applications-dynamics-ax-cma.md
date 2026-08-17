---
id: applications-dynamics-ax-cma
title: Dynamics AX CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

Le connecteur permet de superviser :
* Windows Server OS à partir de la version 2003 SP2
* Windows (postes de travail) à partir de la version XP.

## Contenu du pack

### Modèles

Le connecteur de supervision **Dynamics AX CMA** apporte un modèle d'hôte :

* **App-Dynamics-AX-CMA-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Dynamics-AX-CMA-custom" label="App-Dynamics-AX-CMA-custom">

| Alias                       | Modèle de service                                      | Description                                                                      | 
|:----------------------------|:-------------------------------------------------------|:---------------------------------------------------------------------------------|
| RIS-Import-Input            | App-Dynamics-AX-RIS-Import-Input-CMA-custom            | Contrôle permettant de vérifier la présence de fichiers à importer               | 
| RIS-Import-ProcessingErrors | App-Dynamics-AX-RIS-Import-ProcessingErrors-CMA-custom | Contrôle permettant de vérifier les fichiers importés en échec                   |
| Service-RIS                 | App-Dynamics-AX-Service-RIS-CMA-custom                 | Contrôle permettant de vérifier l'état du service RecurringIntegrationsScheduler |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Dynamics-AX-CMA-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Nom   | Unité |
|:------|:----- |
| count | count |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Nom   | Unité |
|:------|:----- |
| count | count |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

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
dnf install centreon-pack-applications-dynamics-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-dynamics-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-dynamics-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-dynamics-cma
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Dynamics AX CMA**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

Ce connecteur de supervision s'appuie sur une intégration prise en charge par Centreon Engine et ne requiert pas de plugin.

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Dynamics-AX-CMA-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                              | Valeur par défaut                   | Obligatoire |
|:---------------------|:---------------------------------------------------------|:------------------------------------|:-----------:|
| SYSTEMLANGUAGE       | Language installed on the Dynamics365 system.            | en                                  |             |
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found. | `C:/Program Files/Centreon/Plugins` |      X      |


5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

Analyse les fichiers d'une arborescence de répertoires, applique des filtres et évalue les métadonnées des fichiers (taille, horodatage, version, nombre de lignes, etc.) à des fins de surveillance et d'alerte.

| Macro          | Description                                                                              | Obligatoire | Valeurs autorisées                                                                                                                                                                     | Valeur par défaut                                             | Exemples                             |
|:---------------|:-----------------------------------------------------------------------------------------|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------|
| PATHS          | Root directory to search files in.                                                       |      X      |                                                                                                                                                                                        | C:/RIS/Import/RIS General Ledger/Input                         | path/to/file                         |
| PATTERN        | Shell-style wildcards pattern to match filenames.<br/>* can be used as a wildcard        |             |                                                                                                                                                                                        | *.xlsx                                                         |                                      |
| MAXDEPTH       | Max recursion depth.                                                                     |             | - 0: top only <br/>- 1: include subdirs <br/>- -1: recursively include all subdirs                                                                                                     | 0                                                              |                                      |
| OUTPUTSYNTAX   | Output format string for the overall check result.                                       |             | Placeholders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{warn_list}`, `{crit_count}`, `{crit_list}`, `{problem_count}`, `{problem_list}`, `{ok_count}`, `{ok_list}` | `${status}: ${problem_count}/${count} files (${problem_list})` |                                      |     
| DETAILSYNTAX   | Format for each file detail inside `{list}`.                                             |             | `{path}`, `{filename}`, `{size}`, `{creation}`, `{access}`, `{written}`, `{version}`, `{line_count}`, `{extension}`.                                                                   | `${name}`                                                      |                                      |
| OKSYNTAX       | Output if all files are OK.                                                              |             |                                                                                                                                                                                        | `{status}: {ok_count} files found - {ok_list}`                 |                                      |
| FILTER         | Filter expression to select files for the check.                                         |             |                                                                                                                                                                                        | none                                                           | `size > 1M && extension == '.dll'`   |
| WARNINGSTATUS  | Filter expression: files matching are considered WARNING.                                |             |                                                                                                                                                                                        |                                                                |                                      |
| CRITICALSTATUS | Filter expression: files matching are considered CRITICAL.                               |             |                                                                                                                                                                                        |                                                                |                                      |
| WARNING        | WARNING status items count must be strictly higher than this value to trigger WARNING.   |             |                                                                                                                                                                                        | count > 5                                                      | 0 = at least 1 file to trigger alert |
| CRITICAL       | CRITICAL status items count must be strictly higher than this value to trigger CRITICAL. |             |                                                                                                                                                                                        | age > -1d or count > 20                                        | 0 = at least 1 file to trigger alert |
| VERBOSE        | Display detailed file info.                                                              |             |                                                                                                                                                                                        | false                                                          |                                      |
| TIMEOUT        | Set timeout for command execution                                                        |             |                                                                                                                                                                                        | 120                                                            |

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

_"I want to trigger a CRITICAL alert if at least one file of my test directory has not be updated since 1 day or more, and WARNING alert if more than 12 hours and less than 1 day"_

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

_"I want to trigger a CRITICAL alert if at least 1 DLL in System32 (including subdirs without recursivity) size is >100M, and trigger a WARNING alert if at least 2 DLLs size is >10M"_

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

_"I want to trigger a CRITICAL alert if file is not present"_

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

_"I want to trigger a CRITICAL alert if at least one file is present"_

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
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

Analyse les fichiers d'une arborescence de répertoires, applique des filtres et évalue les métadonnées des fichiers (taille, horodatage, version, nombre de lignes, etc.) à des fins de surveillance et d'alerte.

| Macro          | Description                                                                              | Obligatoire | Valeurs autorisées                                                                                                                                                                     | DValeur par défaut                                             | Exemples                             |
|:---------------|:-----------------------------------------------------------------------------------------|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------|
| PATHS          | Root directory to search files in.                                                       |      X      |                                                                                                                                                                                        | C:/RIS/Import/RIS General Ledger/Input                         | path/to/file                         |
| PATTERN        | Shell-style wildcards pattern to match filenames.<br/>* can be used as a wildcard        |             |                                                                                                                                                                                        | *.xlsx                                                         |                                      |
| MAXDEPTH       | Max recursion depth.                                                                     |             | - 0: top only <br/>- 1: include subdirs <br/>- -1: recursively include all subdirs                                                                                                     | 0                                                              |                                      |
| OUTPUTSYNTAX   | Output format string for the overall check result.                                       |             | Placeholders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{warn_list}`, `{crit_count}`, `{crit_list}`, `{problem_count}`, `{problem_list}`, `{ok_count}`, `{ok_list}` | `${status}: ${problem_count}/${count} files (${problem_list})` |                                      |     
| DETAILSYNTAX   | Format for each file detail inside `{list}`.                                             |             | `{path}`, `{filename}`, `{size}`, `{creation}`, `{access}`, `{written}`, `{version}`, `{line_count}`, `{extension}`.                                                                   | `${name}`                                                      |                                      |
| OKSYNTAX       | Output if all files are OK.                                                              |             |                                                                                                                                                                                        | `{status}: {ok_count} files found - {ok_list}`                 |                                      |
| FILTER         | Filter expression to select files for the check.                                         |             |                                                                                                                                                                                        | none                                                           | `size > 1M && extension == '.dll'`   |
| WARNINGSTATUS  | Filter expression: files matching are considered WARNING.                                |             |                                                                                                                                                                                        |                                                                |                                      |
| CRITICALSTATUS | Filter expression: files matching are considered CRITICAL.                               |             |                                                                                                                                                                                        |                                                                |                                      |
| WARNING        | WARNING status items count must be strictly higher than this value to trigger WARNING.   |             |                                                                                                                                                                                        | count > 5                                                      | 0 = at least 1 file to trigger alert |
| CRITICAL       | CRITICAL status items count must be strictly higher than this value to trigger CRITICAL. |             |                                                                                                                                                                                        | age > -1d or count > 20                                        | 0 = at least 1 file to trigger alert |
| VERBOSE        | Display detailed file info.                                                              |             |                                                                                                                                                                                        | false                                                          |                                      |
| TIMEOUT        | Set timeout for command execution                                                        |             |                                                                                                                                                                                        | 120                                                            |

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

_"I want to trigger CRITICAL alert if at least 1 DLLs in System32 (including subdirs without recursivity) size is >100M, and trigger WARNING alert if at least 2 DLLs size is >10M"_

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

_"I want to trigger a CRITICAL alert if file is not present"_

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

_"I want to trigger a CRITICAL alert if at least one file is present"_

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
<TabItem value="Service-RIS" label="Service-RIS">

| Macro                | Description                                                                                                                               | Valeur par défaut              | Obligatoire |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| STARTAUTO            | Only services that start automatically will be counted                                                                                    | false                          |             |
| FILTERNAME           | Regex to filter service names                                                                                                             | RecurringIntegrationsScheduler |             |
| EXCLUDENAME          | Regex to exclude service names                                                                                                            |                                |             |
| FILTERDISPLAY        | Regex to filter service display names as they appear in service manager                                                                   |                                |             |
| EXCLUDEDISPLAY       | Regex to exclude service display names                                                                                                    |                                |             |
| SERVICE_TYPE         | Regex to filter by service type                                                                                                           | service                        |             |
| START_TYPE           | Regex to filter by service startup type. Can be auto, boot, system, demand, disabledn or empty to match all modes.                        |                                |             |
| DELAYED              | Regex to filter by delayed startup services. Can be true, false or empty to match all services.                                           |                                |             |
| WARNINGSTATE         | Regex to match service state that will trigger a warning. States are (stopped, starting, stopping, running, continuing, pausing, paused)  | none                           |             |
| CRITICALSTATE        | Regex to match service state that will trigger a critical. States are (stopped, starting, stopping, running, continuing, pausing, paused) | not state_is_ok()              |             |
| WARNINGTOTALRUNNING  | Running service number threshold below which the service will pass in the warning state                                                   |                                |             |
| CRITICALTOTALRUNNING | Running service number threshold below which the service will pass in the critical state                                                  |                                |             |
| WARNINGTOTALPAUSED   | Number of services in the pause state above which the service goes into the warning state                                                 |                                |             |
| CRITICALTOTALPAUSED  | Number of services in the pause state above which the service goes into the critical state                                                |                                |             |
| WARNINGTOTALSTOPPED  | Number of services in a stopped state above which the service takes on a warning status                                                   |                                |             |
| CRITICALTOTALSTOPPED | Number of services in a stopped state above which the service takes on a critical status                                                  |                                |             |
| TIMEOUT              | Set timeout for command execution                                                                                                         | 120                            |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.
