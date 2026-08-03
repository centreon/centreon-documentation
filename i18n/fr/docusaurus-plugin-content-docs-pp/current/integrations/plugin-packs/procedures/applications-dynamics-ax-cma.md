---
id: applications-dynamics-ax-cma
title: Dynamics AX CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

Le connecteur permet de superviser :
* Windows Server OS à partir de la version 2003 SP2
* Windows (postes de travail) à partir de la version XP

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows NSClient API**
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

| Macro        | Description                                                                                                                              | Valeur par défaut                                                | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:-----------:|
| PATHS        | The path to search for files under                                                                                                       | C:/RIS/Import/RIS General Ledger/Input                           |             |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                                 | *.xlsx                                                           |             |
| TOPSYNTAX    | The top level syntax string                                                                                                              | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |             |
| DETAILSYNTAX | Detail level syntax                                                                                                                      | $\{name}                                                         |             |
| FILTER       | Filter which marks interesting items.                                                                                                    | none                                                             |             |
| WARNING      | Filter which marks items which generates a warning state.                                                                                | count > 5                                                        |             |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                               | age > -1d or count > 20                                          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | "empty-state=ok" show-all                                        |             |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Macro        | Description                                                                                                                              | Valeur par défaut                                                | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:-----------:|
| PATHS        | The path to search for files under                                                                                                       | C:/RIS/Import/RIS General Ledger/ProcessingErrors                |             |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                                 | *.xlsx                                                           |             |
| TOPSYNTAX    | The top level syntax string                                                                                                              | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |             |
| DETAILSYNTAX | Detail level syntax                                                                                                                      | $\{name}                                                         |             |
| FILTER       | Filter which marks interesting items.                                                                                                    | none                                                             |             |
| WARNING      | Filter which marks items which generates a warning state.                                                                                | count > 5                                                        |             |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                               | age > -1d or count > 20                                          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | "empty-state=ok" show-all                                        |             |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

| Macro        | Description                                                                                                                              | Valeur par défaut                   | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:-----------:|
| EXCLUDE      | A list of services to ignore (mainly useful in combination with service=*)                                                               |                                     |             |
| OK           | Filter which marks items which generates an ok state                                                                                     | state_is_ok()                       |             |
| SERVICE      | The service to check, set this to * to check all services                                                                                | RecurringIntegrationsScheduler      |             |
| TOPSYNTAX    | The top level syntax string                                                                                                              | $\{problem_list}                    |             |
| DETAILSYNTAX | Detail level syntax                                                                                                                      | $\{name}=$\{state} ($\{start_type}) |             |
| FILTER       | Filter which marks interesting items.                                                                                                    | none                                |             |
| WARNING      | Filter which marks items which generates a warning state.                                                                                | none                                |             |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                               | not state_is_ok()                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | 'perf-config=none'                  |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API si votre erreur ne correspond pas à l'un des cas suivants.