---
id: applications-wsus-cma
slug: /applications-wsus-cma
title: Microsoft WSUS CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Microsoft WSUS CMA**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Microsoft WSUS CMA** apporte 2 modèles d'hôte :

* **App-Wsus-CMA-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Wsus-CMA-custom" label="App-Wsus-CMA-custom">

| Alias                  | Modèle de service                          | Description                                                                    |
|:-----------------------|:-------------------------------------------|:-------------------------------------------------------------------------------|
| Computers-Status       | App-Wsus-Computers-Status-CMA-custom       | Contrôle le nombre d'ordinateurs dans chacun des statuts                       |
| Server-Statistics      | App-Wsus-Server-Statistics-CMA-custom      | Contrôle plusieurs statistiques du serveur WSUS                                |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-CMA-custom | Contrôle le statut de la synchronisation des mises à jour avec le serveur WSUS |
| Update-Status          | App-Wsus-Update-Status-CMA-custom          | Contrôle le statut des mises à jour                                            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Wsus-CMA-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Nom                | Unité |
|:-------------------|:------|
| up-to-date         | N/A   |
| needing-updates    | N/A   |
| with-update-errors | N/A   |
| not-contacted      | N/A   |
| unassigned         | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Nom                  | Unité |
|:---------------------|:------|
| computers            | N/A   |
| computer-groups      | N/A   |
| updates              | N/A   |
| approved-updates     | N/A   |
| declined-updates     | N/A   |
| not-approved-updates | N/A   |
| stale-updates        | N/A   |
| expired-updates      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Nom                           | Unité |
|:------------------------------|:------|
| synchronisation-status        | N/A   |
| synchronisation_progress      | N/A   |
| last-synchronisation-status   | N/A   |
| last_synchronisation_duration | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Nom                 | Unité |
|:--------------------|:------|
| with-client-errors  | N/A   |
| with-server-errors  | N/A   |
| needing-files       | N/A   |
| needed-by-computers | N/A   |
| up-to-date          | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

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
dnf install centreon-pack-applications-wsus-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-wsus-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-wsus-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-wsus-cma
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Microsoft WSUS CMA**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

Ce connecteur de supervision s'appuie sur une intégration prise en charge par Centreon Engine et ne requiert pas de plugin.

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="App-Wsus-CMA-custom" label="App-Wsus-CMA-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Wsus-CMA-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                             | Valeur par défaut                 | Obligatoire |
|:---------------------|:--------------------------------------------------------|:----------------------------------|:-----------:|
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found | C:/Program Files/Centreon/Plugins |      X      |
| SYSTEMLANGUAGE       | Language installed on the Windows system                | en                                |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NOTUPDATEDSINCE          | Time in days to count computers not updated since (default: 30)                                                                                  |                   |             |
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                             |                   |             |
| WARNINGNEEDINGUPDATES    | Threshold                                                                                                                                        |                   |             |
| CRITICALNEEDINGUPDATES   | Threshold                                                                                                                                        |                   |             |
| WARNINGNOTCONTACTED      | Threshold                                                                                                                                        |                   |             |
| CRITICALNOTCONTACTED     | Threshold                                                                                                                                        |                   |             |
| WARNINGUNASSIGNED        | Threshold                                                                                                                                        |                   |             |
| CRITICALUNASSIGNED       | Threshold                                                                                                                                        |                   |             |
| WARNINGUPTODATE          | Threshold                                                                                                                                        |                   |             |
| CRITICALUPTODATE         | Threshold                                                                                                                                        |                   |             |
| WARNINGWITHUPDATEERRORS  | Threshold                                                                                                                                        |                   |             |
| CRITICALWITHUPDATEERRORS | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='not'                                                                |                   |             |
| WARNINGAPPROVEDUPDATES     | Threshold                                                                                                                                        |                   |             |
| CRITICALAPPROVEDUPDATES    | Threshold                                                                                                                                        |                   |             |
| WARNINGCOMPUTERGROUPS      | Threshold                                                                                                                                        |                   |             |
| CRITICALCOMPUTERGROUPS     | Threshold                                                                                                                                        |                   |             |
| WARNINGCOMPUTERS           | Threshold                                                                                                                                        |                   |             |
| CRITICALCOMPUTERS          | Threshold                                                                                                                                        |                   |             |
| WARNINGDECLINEDUPDATES     | Threshold                                                                                                                                        |                   |             |
| CRITICALDECLINEDUPDATES    | Threshold                                                                                                                                        |                   |             |
| WARNINGEXPIREDUPDATES      | Threshold                                                                                                                                        |                   |             |
| CRITICALEXPIREDUPDATES     | Threshold                                                                                                                                        |                   |             |
| WARNINGNOTAPPROVEDUPDATES  | Threshold                                                                                                                                        |                   |             |
| CRITICALNOTAPPROVEDUPDATES | Threshold                                                                                                                                        |                   |             |
| WARNINGSTALEUPDATES        | Threshold                                                                                                                                        |                   |             |
| CRITICALSTALEUPDATES       | Threshold                                                                                                                                        |                   |             |
| WARNINGUPDATES             | Threshold                                                                                                                                        |                   |             |
| CRITICALUPDATES            | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Macro                               | Description                                                                                                                                      | Valeur par défaut          | Obligatoire |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example: --filter-counters='status'                                                             |                            |             |
| WARNINGLASTSYNCHRONISATIONDURATION  | Threshold                                                                                                                                        |                            |             |
| CRITICALLASTSYNCHRONISATIONDURATION | Threshold                                                                                                                                        |                            |             |
| CRITICALLASTSYNCHRONISATIONSTATUS   | Set critical threshold for current synchronisation status. You can use the following variables: %\{status\}                                      | %\{status\} !~ /Succeeded/ |             |
| WARNINGLASTSYNCHRONISATIONSTATUS    | Set warning threshold for current synchronisation status. You can use the following variables: %\{status\}                                       |                            |             |
| WARNINGSYNCHRONISATIONPROGRESS      | Threshold                                                                                                                                        |                            |             |
| CRITICALSYNCHRONISATIONPROGRESS     | Threshold                                                                                                                                        |                            |             |
| WARNINGSYNCHRONISATIONSTATUS        | Set warning threshold for current synchronisation status. You can use the following variables: %\{status\}                                       |                            |             |
| CRITICALSYNCHRONISATIONSTATUS       | Set critical threshold for current synchronisation status. You can use the following variables: %\{status\}                                      |                            |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                             |                   |             |
| WARNINGNEEDEDBYCOMPUTER  | Threshold                                                                                                                                        |                   |             |
| CRITICALNEEDEDBYCOMPUTER | Threshold                                                                                                                                        |                   |             |
| WARNINGNEEDINGFILES      | Threshold                                                                                                                                        |                   |             |
| CRITICALNEEDINGFILES     | Threshold                                                                                                                                        |                   |             |
| WARNINGUPTODATE          | Threshold                                                                                                                                        |                   |             |
| CRITICALUPTODATE         | Threshold                                                                                                                                        |                   |             |
| WARNINGWITHCLIENTERRORS  | Threshold                                                                                                                                        |                   |             |
| CRITICALWITHCLIENTERRORS | Threshold                                                                                                                                        |                   |             |
| WARNINGWITHSERVERERRORS  | Threshold                                                                                                                                        |                   |             |
| CRITICALWITHSERVERERRORS | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Vous pouvez tester que le plugin parvient bien à superviser votre serveur Windows en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```cmd
"C:\Program Files\Centreon\Plugins\centreon_plugins.exe" --plugin=apps::microsoft::wsus::local::plugin \
    --mode=updates-status \
	--wsus-server="" \
	--wsus-port="" \
	--filter-counters="" \
	--warning-with-client-errors="" \
	--critical-with-client-errors="" \
	--warning-with-server-errors="" \
	--critical-with-server-errors="" \
	--warning-needing-files="" \
	--critical-needing-files="" \
	--warning-needed-by-computers="" \
	--critical-needed-by-computers="" \
	--warning-up-to-date="" \
	--critical-up-to-date="" \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: With Client Errors: 32694 With Server Errors: 3648 Needing Files: 40252 Needed By Computers: 5327 Up-to-date: 70835 | 'with-client-errors'=32694;;;0; 'with-server-errors'=3648;;;0; 'needing-files'=40252;;;0; 'needed-by-computers'=5327;;;0; 'up-to-date'=70835;;;0;
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
cd "C:/Program Files/Centreon/Plugins/".\centreon_plugins.exe `
	--plugin=apps::microsoft::wsus::local::plugin 
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                   | Modèle de service associé                  |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| computers-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/computersstatus.pm)]             | App-Wsus-Computers-Status-CMA-custom       |
| server-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/serverstatistics.pm)]           | App-Wsus-Server-Statistics-CMA-custom      |
| synchronisation-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/synchronisationstatus.pm)] | App-Wsus-Synchronisation-Status-CMA-custom |
| updates-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/wsus/local/mode/updatesstatus.pm)]                 | App-Wsus-Update-Status-CMA-custom          |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Option                   | Description                                                                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   |
| --timeout                |   Set timeout time for command execution (default: 30 sec)                                                                               |
| --no-ps                  |   Don't encode powershell. To be used with --command and 'type' command.                                                                 |
| --command                |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   |
| --command-path           |   Command path (default: none).                                                                                                          |
| --command-options        |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                |
| --ps-display             |   Display powershell script.                                                                                                             |
| --ps-exec-only           |   Print powershell output.                                                                                                               |
| --wsus-server            |   Set WSUS hostname/IP.                                                                                                                  |
| --wsus-port              |   Set WSUS port.                                                                                                                         |
| --not-updated-since      |   Time in days to count computers not updated since (default: 30).                                                                       |
| --use-ssl                |   Set if WSUS use ssl.                                                                                                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'needing-updates', 'with-update-errors', 'up-to-date', 'not-contacted', 'unassigned'                               |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Option            | Description                                                                                                                                                                    |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='not'                                                                                            |
| --timeout         |   Set timeout time for command execution (default: 30 sec)                                                                                                                     |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                       |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.                                         |
| --command-path    |   Command path (default: none).                                                                                                                                                |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                      |
| --ps-display      |   Display powershell script.                                                                                                                                                   |
| --ps-exec-only    |   Print powershell output.                                                                                                                                                     |
| --wsus-server     |   Set WSUS hostname/IP (default: localhost).                                                                                                                                   |
| --wsus-port       |   Set WSUS port (default: 8530).                                                                                                                                               |
| --use-ssl         |   Set if WSUS use ssl.                                                                                                                                                         |
| --warning-*       |   Warning thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'    |
| --critical-*      |   Critical thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'   |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Option                                 | Description                                                                                                                                              |
|:---------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                      |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                   |
| --timeout                              |   Set timeout time for command execution (default: 30 sec)                                                                                               |
| --no-ps                                |   Don't encode powershell. To be used with --command and 'type' command.                                                                                 |
| --command                              |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.                   |
| --command-path                         |   Command path (default: none).                                                                                                                          |
| --command-options                      |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                |
| --ps-display                           |   Display powershell script.                                                                                                                             |
| --ps-exec-only                         |   Print powershell output.                                                                                                                               |
| --wsus-server                          |   Set WSUS hostname/IP (default: localhost).                                                                                                             |
| --wsus-port                            |   Set WSUS port (default: 8530).                                                                                                                         |
| --use-ssl                              |   Set if WSUS use ssl.                                                                                                                                   |
| --warning-synchronisation-status       |   Set warning threshold for current synchronisation status (default: '') You can use the following variables: %\{status\}.                               |
| --critical-synchronisation-status      |   Set critical threshold for current synchronisation status (default: ''). You can use the following variables: %\{status\}.                             |
| --warning-last-synchronisation-status  |   Set warning threshold for current synchronisation status (default: '') You can use the following variables: %\{status\}.                               |
| --critical-last-synchronisation-status |   Set critical threshold for current synchronisation status (default: '%\{status\} !~ /Succeeded/'). You can use the following variables: %\{status\}.   |
| --warning-* --critical-*               |   Thresholds. Can be: 'last-synchronisation-duration' (s), 'synchronisation-progress' (%).                                                               |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   |
| --timeout         |   Set timeout time for command execution (default: 30 sec)                                                                               |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                 |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   |
| --command-path    |   Command path (default: none).                                                                                                          |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                |
| --ps-display      |   Display powershell script.                                                                                                             |
| --ps-exec-only    |   Print powershell output.                                                                                                               |
| --wsus-server     |   Set WSUS hostname/IP (default: localhost).                                                                                             |
| --wsus-port       |   Set WSUS port (default: 8530).                                                                                                         |
| --use-ssl         |   Set if WSUS use ssl.                                                                                                                   |
| --warning-*       |   Warning thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.          |
| --critical-*      |   Critical thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.         |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
cd "C:/Program Files/Centreon/Plugins/"
.\centreon_plugins.exe `
	--plugin=apps::microsoft::wsus::local::plugin \
	--mode=updates-status \
	--help
```
