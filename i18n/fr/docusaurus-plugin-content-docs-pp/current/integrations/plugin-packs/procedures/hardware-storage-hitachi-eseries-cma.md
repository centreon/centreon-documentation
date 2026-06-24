---
id: hardware-storage-hitachi-eseries-cma
slug: /hardware-storage-hitachi-eseries-cma
title: Hitachi E Series CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Hitachi E Series CMA** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Hitachi E Series CMA** apporte un modèle d'hôte :

* **HW-Storage-Hitachi-Eseries-CMA-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Hitachi-Eseries-CMA-custom" label="HW-Storage-Hitachi-Eseries-CMA-custom">

| Alias       | Modèle de service                                 | Description                                                                |
|:------------|:--------------------------------------------------|:---------------------------------------------------------------------------|
| Efficiency  | HW-Storage-Hitachi-Eseries-Efficiency-CMA-custom  | Contrôle de l'efficacité du système Hitachi E Series (raidcom)             |
| Pair-Status | HW-Storage-Hitachi-Eseries-Pair-Status-CMA-custom | Contrôle du statut des paires Hitachi E Series (pairdisplay)               |
| Path-Status | HW-Storage-Hitachi-Eseries-Path-Status-CMA-custom | Contrôle du statut des chemins Hitachi E Series (raidcom)                  |
| Pool        | HW-Storage-Hitachi-Eseries-Pool-CMA-custom        | Contrôle du statut et de la capacité des pools Hitachi E Series (raidcom)  |
| Quorum      | HW-Storage-Hitachi-Eseries-Quorum-CMA-custom      | Contrôle du statut du quorum Hitachi E Series (raidcom)                    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Hitachi-Eseries-CMA-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Efficiency" label="Efficiency">

| Nom                    | Unité |
|:-----------------------|:------|
| total-efficiency-ratio | N/A   |
| data-reduction-ratio   | N/A   |
| software-saving-ratio  | N/A   |

</TabItem>
<TabItem value="Pair-Status" label="Pair-Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Path-Status" label="Path-Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Pool" label="Pool">

| Nom                                         | Unité |
|:--------------------------------------------|:------|
| status                                      | N/A   |
| *pools*#storage.pool.space.usage.bytes      | B     |
| *pools*#storage.pool.space.usage.percentage | %     |

</TabItem>
<TabItem value="Quorum" label="Quorum">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
</Tabs>

## Prérequis

Pour monitorer les baies Hitachi E-Series ce connecteur utilise le client CCI (Command Control Interface) qui doit être installé et configuré comme décrit dans la [documentation officielle Hitachi](https://docs.hitachivantara.com)

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
dnf install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hitachi-eseries-cma
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Hitachi E Series CMA**
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
dnf install 
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install 
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install 
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install 
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Hitachi-Eseries-CMA-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                        | Description                                                                                                                                        | Valeur par défaut                 | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| CENTREON_AGENT_PLUGINS       | Path where the centreon_plugins.exe plugin can be found                                                                                            | C:/Program Files/Centreon/Plugins |             |
| COMMAND_PATH                 | Command path                                                                                                                                       |                                   |             |
| INSTANCE_ID                  |                                                                                                                                                    |                                   |             |
| TIMEOUT                      | Timeout time for command execution                                                                                                                 | 45                                |           |
| CENTREON_AGENT_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Efficiency" label="Efficiency">

| Macro                           | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_DATA_REDUCTION_RATIO    | Warning threshold for Data Reduction Ratio (TLS\_R)                                                                                              |                   |             |
| CRITICAL_DATA_REDUCTION_RATIO   | Critical threshold for Data Reduction Ratio (TLS\_R)                                                                                             |                   |             |
| WARNING_SOFTWARE_SAVING_RATIO   | Warning threshold for Software Saving Ratio (PLS\_R)                                                                                             |                   |             |
| CRITICAL_SOFTWARE_SAVING_RATIO  | Critical threshold for Software Saving Ratio (PLS\_R)                                                                                            |                   |             |
| WARNING_TOTAL_EFFICIENCY_RATIO  | Warning threshold for Total Efficiency Ratio (TOTAL\_EFF)                                                                                        | 2.01:             |             |
| CRITICAL_TOTAL_EFFICIENCY_RATIO | Critical threshold for Total Efficiency Ratio (TOTAL\_EFF)                                                                                       | 1.01:             |             |
| EXTRA_OPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Pair-Status" label="Pair-Status">

| Macro              | Description                                                                                                                                                           | Valeur par défaut                                      | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:-----------:|
| REMOTE_INSTANCE_ID | Remote array ID. If starts with + or -, it is added to the local array ID, otherwise used as is (e.g. `--remote-instance-id='100'` or `--remote-instance-id='+1000'`) |                                                        |             |
| GROUP_ID           | `HORCM` group name to check                                                                                                                                           |                                                        | X           |
| LDEV_ID            | Filter pair volumes by `LDEV ID`. Can be used multiple times (e.g. `--ldev-id='1' --ldev-id='2' --ldev-id='3'`)                                                       |                                                        |             |
| CRITICAL_STATUS    | Critical threshold for pair status                                                                                                                                    | %\{status\_l\} ne "PAIR" \|\| %\{status\_r\} ne "PAIR" |             |
| WARNING_STATUS     | Warning threshold for pair status                                                                                                                                     |                                                        |             |
| EXTRA_OPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                      |                                                        |             |

</TabItem>
<TabItem value="Path-Status" label="Path-Status">

| Macro           | Description                                                                                                                                      | Valeur par défaut    | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| INCLUDE_PORT    | Filter paths by port name (regexp, e.g. `--include-port='CL1-A'`)                                                                                |                      |             |
| EXCLUDE_PORT    | Exclude paths by port name (regexp)                                                                                                              |                      |             |
| INCLUDE_LUN     | Filter paths by LUN ID (regexp)                                                                                                                  |                      |             |
| EXCLUDE_LUN     | Exclude paths by LUN ID (regexp)                                                                                                                 |                      |             |
| CRITICAL_STATUS | Critical threshold for path status                                                                                                               | %\{status\} ne "NML" |             |
| WARNING_STATUS  | Warning threshold for path status                                                                                                                |                      |             |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                      |             |

</TabItem>
<TabItem value="Pool" label="Pool">

| Macro               | Description                                                                                                                                      | Valeur par défaut      | Obligatoire |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| INCLUDE_PID         | Filter pools by PID (regexp)                                                                                                                     |                        |             |
| EXCLUDE_PID         | Exclude pools by PID (regexp)                                                                                                                    |                        |             |
| CRITICAL_STATUS     | Critical threshold for pool status                                                                                                               | %\{status\} ne "POLN"' |             |
| WARNING_STATUS      | Warning threshold for pool status                                                                                                                |                        |             |
| WARNING_USAGE       | Warning threshold in bytes for pool space usage                                                                                                  |                        |             |
| CRITICAL_USAGE      | Critical threshold in bytes for pool space usage                                                                                                 |                        |             |
| WARNING_USAGE_PRCT  | Warning threshold in percentage for pool space usage                                                                                             |                        |             |
| CRITICAL_USAGE_PRCT | Critical threshold in percentage for pool space usage                                                                                            |                        |             |
| EXTRA_OPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                        |             |

</TabItem>
<TabItem value="Quorum" label="Quorum">

| Macro           | Description                                                                                                                                      | Valeur par défaut       | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| QUORUM_ID       |                                                                                                                                                  |                         |             |
| CRITICAL_STATUS | Critical threshold for quorum status                                                                                                             | %\{status\} ne "NORMAL" |             |
| WARNING_STATUS  | Warning threshold for quorum status                                                                                                              |                         |             |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                         |             |

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
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=storage::hitachi::eseries::local::plugin \
	--mode=quorum \
	--timeout="45" \
	--instance-id="" \
	--query-id="" \
	--warning-status='' \
	--critical-status='%\{status\} ne "NORMAL"' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All quorums are normal 
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
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=storage::hitachi::eseries::local::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                 | Modèle de service associé                         |
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| efficiency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/efficiency.pm)]  | HW-Storage-Hitachi-Eseries-Efficiency-CMA-custom  |
| pair-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/pairstatus.pm)] | HW-Storage-Hitachi-Eseries-Pair-Status-CMA-custom |
| path-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/pathstatus.pm)] | HW-Storage-Hitachi-Eseries-Path-Status-CMA-custom |
| pool [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/pool.pm)]              | HW-Storage-Hitachi-Eseries-Pool-CMA-custom        |
| quorum [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/eseries/local/mode/quorum.pm)]          | HW-Storage-Hitachi-Eseries-Quorum-CMA-custom      |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'        |
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
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --instance-id                              | Storage array ID (4 digits, required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 45).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-path                             | Path to the raidcom/pairdisplay binaries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --sudo                                     | Run commands with sudo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Efficiency" label="Efficiency">

| Option                            | Description                                                                                                    |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------------|
| --warning-total-efficiency-ratio  | Warning threshold for Total Efficiency Ratio (TOTAL\_EFF) (default: `2.01:` to warn if equal to or below 2).   |
| --critical-total-efficiency-ratio | Critical threshold for Total Efficiency Ratio (TOTAL\_EFF) (default: `1.01:` to alert if equal to or below 1). |
| --warning-data-reduction-ratio    | Warning threshold for Data Reduction Ratio (TLS\_R).                                                           |
| --critical-data-reduction-ratio   | Critical threshold for Data Reduction Ratio (TLS\_R).                                                          |
| --warning-software-saving-ratio   | Warning threshold for Software Saving Ratio (PLS\_R).                                                          |
| --critical-software-saving-ratio  | Critical threshold for Software Saving Ratio (PLS\_R).                                                         |

</TabItem>
<TabItem value="Pair-Status" label="Pair-Status">

| Option               | Description                                                                                                                                                            |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-instance-id | Remote array ID. If starts with + or -, it is added to the local array ID, otherwise used as is (e.g. `--remote-instance-id='100'` or `--remote-instance-id='+1000'`). |
| --group-id           | `HORCM` group name to check .                                                                                                                                          |
| --ldev-id            | Filter pair volumes by `LDEV ID`. Can be used multiple times (e.g. `--ldev-id='1' --ldev-id='2' --ldev-id='3'`).                                                       |
| --warning-status     | Warning threshold for pair status.                                                                                                                                     |
| --critical-status    | Critical threshold for pair status (default: `'%\{status\_l\} ne "PAIR" \|\| %\{status\_r\} ne "PAIR"'`).                                                              |

</TabItem>
<TabItem value="Path-Status" label="Path-Status">

| Option            | Description                                                             |
|:------------------|:------------------------------------------------------------------------|
| --include-port    | Filter paths by port name (regexp, e.g. `--include-port='CL1-A'`).      |
| --exclude-port    | Exclude paths by port name (regexp).                                    |
| --include-lun     | Filter paths by LUN ID (regexp).                                        |
| --exclude-lun     | Exclude paths by LUN ID (regexp).                                       |
| --warning-status  | Warning threshold for path status.                                      |
| --critical-status | Critical threshold for path status (default: `'%\{status\} ne "NML"'`). |

</TabItem>
<TabItem value="Pool" label="Pool">

| Option                | Description                                                              |
|:----------------------|:-------------------------------------------------------------------------|
| --include-pid         | Filter pools by PID (regexp).                                            |
| --exclude-pid         | Exclude pools by PID (regexp).                                           |
| --warning-status      | Warning threshold for pool status.                                       |
| --critical-status     | Critical threshold for pool status (default: `'%\{status\} ne "POLN"'`). |
| --warning-usage       | Warning threshold in bytes for pool space usage.                         |
| --critical-usage      | Critical threshold in bytes for pool space usage.                        |
| --warning-usage-prct  | Warning threshold in percentage for pool space usage.                    |
| --critical-usage-prct | Critical threshold in percentage for pool space usage.                   |

</TabItem>
<TabItem value="Quorum" label="Quorum">

| Option            | Description                                                                                                           |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|
| --quorum-id       | Check a specific quorum ID (optional). If not specified, all quorums are discovered automatically starting from ID 0. |
| --warning-status  | Warning threshold for quorum status.                                                                                  |
| --critical-status | Critical threshold for quorum status (default: `'%\{status\} ne "NORMAL"'`).                                          |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
C:/Program Files/Centreon/Plugins/centreon_plugins.exe" \
	--plugin=storage::hitachi::eseries::local::plugin \
	--mode=quorum \
	--help
```
