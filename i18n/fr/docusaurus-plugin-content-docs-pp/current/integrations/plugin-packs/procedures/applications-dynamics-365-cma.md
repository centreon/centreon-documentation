---
id: applications-dynamics-365-cma
title: Dynamics365 CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

Le connecteur **Dynamics365 CMA** permet de fournir des modèles et commandes à l'agent de supervision Centreon (Centreon Monitoring Agent - CMA). Celui-ci est un agent d'observabilité implémentant le protocole OpenTelemetry.

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

Le connecteur de supervision **Dynamics365 CMA** apporte un modèle d'hôte :

* **App-Dynamics-365-CMA-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Dynamics-365-CMA-custom" label="App-Dynamics-365-CMA-custom">

| Alias      | Modèle de service                      | Description                                                                    | Type de contrôle |
|:-----------|:---------------------------------------|:-------------------------------------------------------------------------------|------------------|
| New-Orders | App-Dynamics-365-New-Orders-CMA-custom | Contrôle permettant de vérifier la présence de nouvelles commandes et leur âge | natif            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Dynamics-365-CMA-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="New-Orders" label="New-Orders">

| Nom            | Unité |
|:---------------|:------|
| critical_count | count |
| warning_count  | count |
| ok_count       | count |

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
dnf install centreon-pack-applications-dynamics-365-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-dynamics-365-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-dynamics-365-cma
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Dynamics365 CMA**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

3. Créez le connecteur suivant :

Dans le menu **Configuration > Commandes > Connecteurs**, cliquez sur **Ajouter** puis saisissez les champs suivants :

| Paramètre                 | Valeur                                                                                                                                                                                      |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nom du connecteur         | Centreon Monitoring Agent                                                                                                                                                               |
| Description du connecteur | Centreon Monitoring Agent                                                                                                                                                               |
| Ligne de commande         | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Utilisé par la commande   | Sélectionner toutes les commandes dont le nom correspond à `App-Dynamics-365-CMA-*`                                                                                         |
| Statut du connecteur      | Activé                                                                                                                                                                                      |

### Plugin

Ce connecteur de supervision s'appuie sur une intégration prise en charge par Centreon Engine et ne requiert pas de plugin.

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Dynamics-365-CMA-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
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
<TabItem value="New-Orders" label="New-Orders">

Checks files in a directory tree, applies filters, and evaluates file metadata (size, timestamps, version, line count, etc.) for monitoring and alerting.

| Macro          | Description                                                                              | Obligatoire | Allowed values                                                                                                                                                                         | Valeur par défaut                                                  | Exemples                             |
|:---------------|:-----------------------------------------------------------------------------------------|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------|
| PATHS          | Root directory to search files in.                                                       |      X      |                                                                                                                                                                                        | C:/D365/Interfaces/Input/SalesOrders/New/                          | path/to/file                         |
| PATTERN        | Shell-style wildcards pattern to match filenames.<br/>* can be used as a wildcard        |             |                                                                                                                                                                                        | *.xml                                                              |                                      |
| MAXDEPTH       | Max recursion depth.                                                                     |             | - 0: top only <br/>- 1: include subdirs <br/>- -1: recursively include all subdirs                                                                                                     | 0                                                                  |                                      |
| OUTPUTSYNTAX   | Output format string for the overall check result.                                       |             | Placeholders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{warn_list}`, `{crit_count}`, `{crit_list}`, `{problem_count}`, `{problem_list}`, `{ok_count}`, `{ok_list}` | `$\{status}: $\{problem_count}/$\{count} files ($\{problem_list})` |                                      |
| DETAILSYNTAX   | Format for each file detail inside `{list}`.                                             |             | `{path}`, `{filename}`, `{size}`, `{creation}`, `{access}`, `{written}`, `{version}`, `{line_count}`, `{extension}`.                                                                   | `$\{name}   `                                                      |                                      |
| OKSYNTAX       | Output if all files are OK.                                                              |             |                                                                                                                                                                                        | `{status}: All {count} files are ok`                               |                                      |
| FILTER         | Filter expression to select files for the check.                                         |             |                                                                                                                                                                                        | none                                                               | `size > 1M && extension == '.dll'`   |
| WARNINGSTATUS  | Filter expression: files matching are considered WARNING.                                |             |                                                                                                                                                                                        |                                                                    |                                      |
| CRITICALSTATUS | Filter expression: files matching are considered CRITICAL.                               |             |                                                                                                                                                                                        |                                                                    |                                      |
| WARNING        | WARNING status items count must be strictly higher than this value to trigger WARNING.   |             |                                                                                                                                                                                        | count > 20                                                         | 0 = at least 1 file to trigger alert |
| CRITICAL       | CRITICAL status items count must be strictly higher than this value to trigger CRITICAL. |             |                                                                                                                                                                                        | age > -1d or count > 100                                           | 0 = at least 1 file to trigger alert |
| VERBOSE        | Display detailed file info.                                                              |             |                                                                                                                                                                                        |                                                                    |                                      |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API si votre erreur ne correspond pas à l'un des cas suivants.