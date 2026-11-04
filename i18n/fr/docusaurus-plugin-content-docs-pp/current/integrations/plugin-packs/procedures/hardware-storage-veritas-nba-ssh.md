---
id: hardware-storage-veritas-nba-ssh
title: Veritas NetBackup Appliance SSH
description: "Supervisez les appliances Veritas NetBackup en SSH : composants matériels, utilisation de la mémoire, statut et espace des partitions."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Veritas NetBackup Appliance SSH** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Veritas NetBackup Appliance SSH** apporte un modèle d'hôte :

* **HW-Storage-Veritas-Nba-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Veritas-Nba-SSH-custom" label="HW-Storage-Veritas-Nba-SSH-custom">

| Alias    | Modèle de service                          | Description                                                                                      |
|:---------|:-------------------------------------------|:-------------------------------------------------------------------------------------------------|
| Memory   | HW-Storage-Veritas-Nba-Memory-SSH-custom   | Contrôle l'utilisation de la mémoire.                                                            |
| Hardware | HW-Storage-Veritas-Nba-Hardware-SSH-custom | Contrôle l'état des composants matériels (disques, ventilateurs, alimentations et températures). |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Veritas-Nba-SSH-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                            | Description                                                  | Découverte |
|:-----------|:---------------------------------------------|:-------------------------------------------------------------|:----------:|
| Partitions | HW-Storage-Veritas-Nba-Partitions-SSH-custom | Contrôle l'état et l'utilisation de l'espace des partitions. |     X      |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                           | Description                                                                            |
|:------------------------------------------|:---------------------------------------------------------------------------------------|
| HW-Storage-Veritas-Nba-SSH-Partition-Name | Découvre les partitions en vue de contrôler leur état et l'utilisation de leur espace. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Memory" label="Memory">

| Nom                         | Unité |
|:----------------------------|:------|
| memory.usage.bytes          | B     |
| memory.free.bytes           | B     |
| memory.usage.percentage     | %     |
| memory.available.bytes      | B     |
| memory.available.percentage | %     |
| memory.buffer.bytes         | B     |
| memory.shared.bytes         | B     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| hardware.disk.count                                   | count |
| disk status                                           | N/A   |
| hardware.fan.count                                    | count |
| fan status                                            | N/A   |
| hardware.psu.count                                    | count |
| psu status                                            | N/A   |
| hardware.temperature.count                            | count |
| temperature status                                    | N/A   |
| *shelf_name*~*sensor_id*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Partitions" label="Partitions">

| Nom                                               | Unité |
|:--------------------------------------------------|:------|
| status                                            | N/A   |
| *partition_name*#partition.space.usage.bytes      | B     |
| *partition_name*#partition.space.free.bytes       | B     |
| *partition_name*#partition.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SSH

Le collecteur Centreon se connecte à l'appliance en SSH (port TCP/22 par
défaut) et parcourt les menus **Manage** et **Monitor** du NetBackup Appliance
Shell Menu. Créez sur l'appliance un utilisateur disposant du rôle
**Administrator**, puis renseignez son nom et son mot de passe dans les macros
d'hôtes.

L'appliance se pilote uniquement par ses menus interactifs, que seul le
backend SSH `libssh` prend en charge. Ce backend nécessite la version 1.2 ou
supérieure du module Perl `Libssh::Session` sur le collecteur.

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
dnf install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-veritas-nba-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Veritas NetBackup Appliance SSH**
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
dnf install centreon-plugin-Hardware-Storage-Veritas-Nba-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Veritas-Nba-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-veritas-nba-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Veritas-Nba-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Veritas-Nba-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                                                                                             | Valeur par défaut | Obligatoire |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NBA_SSH_USERNAME      | Define the user name to log in to the host                                                                                                                              |                   |             |
| NBA_SSH_PASSWORD      | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead |                   |             |
| NBA_SSH_PORT          | Define the TCP port on which SSH is listening                                                                                                                           | 22                |             |
| NBA_SSH_EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Memory" label="Memory">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_MEMORY_USAGE_PRCT  | Threshold in percentage                                                                                                                          | 80                |             |
| CRITICAL_MEMORY_USAGE_PRCT | Threshold in percentage                                                                                                                          | 90                |             |
| EXTRA_OPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT     | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'                                                            | .*                |             |
| WARNING       | Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,50'                                   |                   |             |
| CRITICAL      | Set critical threshold for 'temperature' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,70'                                 |                   |             |
| EXTRA_OPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Partitions" label="Partitions">

| Macro                     | Description                                                                                                                                                                                    | Valeur par défaut                                       | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:-----------:|
| INCLUDE_NAME              | Filter partitions by name (regexp)                                                                                                                                                             |                                                         |             |
| EXCLUDE_NAME              | Exclude partitions by name (regexp)                                                                                                                                                            |                                                         |             |
| WARNING_STATUS            | Define the conditions to match for the status to be WARNING (default: `'%{status} =~ /Degraded/i'`). You can use the following variables: `%{status}`, `%{name}`                               | %\{status\} =~ /Degraded/i                              |             |
| CRITICAL_STATUS           | Define the conditions to match for the status to be CRITICAL (default: `'%{status} !~ /^(Optimal\|Degraded\|Not Configured)$/i'`). You can use the following variables: `%{status}`, `%{name}` | %\{status\} !~ /^(Optimal\|Degraded\|Not Configured)$/i |             |
| WARNING_SPACE_USAGE_PRCT  | Threshold in percentage                                                                                                                                                                        | 80                                                      |             |
| CRITICAL_SPACE_USAGE_PRCT | Threshold in percentage                                                                                                                                                                        | 90                                                      |             |
| EXTRA_OPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                               |                                                         |             |

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
/usr/lib/centreon/plugins/centreon_veritas_nba_ssh.pl \
	--plugin=storage::veritas::nba::ssh::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--ssh-username='XXXX' \
	--ssh-password='XXXX' \
	--ssh-port='22' \
	--warning-memory-usage-prct='80' \
	--critical-memory-usage-prct='90'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Ram total: 250.70 GB used (-buffers/cache): 116.91 GB (46.63%) free: 3.00 GB (1.20%) available: 131.19 GB (52.33%), buffer: 130.79 GB, shared: 138.79 MB | 'memory.usage.bytes'=125530263552B;;;0;269182509056 'memory.free.bytes'=3222704128B;;;0;269182509056 'memory.usage.percentage'=46.63%;0:80;0:90;0;100 'memory.available.bytes'=140865015808B;;;0;269182509056 'memory.available.percentage'=52.33%;;;0;100 'memory.buffer.bytes'=140429541376B;;;0; 'memory.shared.bytes'=145530880B;;;0;
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
/usr/lib/centreon/plugins/centreon_veritas_nba_ssh.pl \
	--plugin=storage::veritas::nba::ssh::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                      | Modèle de service associé                    |
|:--------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/veritas/nba/ssh/mode/hardware.pm)] | HW-Storage-Veritas-Nba-Hardware-SSH-custom   |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/veritas/nba/ssh/mode/memory.pm)]     | HW-Storage-Veritas-Nba-Memory-SSH-custom     |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/veritas/nba/ssh/mode/storage.pm)]   | HW-Storage-Veritas-Nba-Partitions-SSH-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the `--show-password` option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage free perfdata into used: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage free perfdata into used: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] Common examples: Convert storage free perfdata into used: --change-perfdata='free,used,invert()' Convert storage free perfdata into used: --change-perfdata='used,free,invert()' Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)' Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps' Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach Common examples: Sum wrong packets from all interfaces (with interface need --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))' Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)' |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  | Timeout in seconds for the SSH connection or the local command (default: 55).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --command                                  | Command to get information. Use it if the output is in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --ssh-backend                              | Define the backend you want to use. It can be: `sshcli` (default for most plugins), `plink` and `libssh`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sshcli-command                           | SSH command (default: `ssh`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sshcli-path                              | SSH command path (default: `none`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --sshcli-option                            | Specify SSH CLI options (example: --sshcli-option='-o=StrictHostKeyChecking=no -o=LogLevel=ERROR'). The default parameter is --sshcli-option='-o=LogLevel=ERROR' which hides the SSH banner. If you override this parameter, make sure to append '-o=LogLevel=ERROR' to your new value to maintain this behavior. This parameter can be used multiple times and multiple options can be specified in the same parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --plink-command                            | Plink command (default: `plink`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --plink-path                               | Plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --plink-option                             | Specify Plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --no-data-status                           | Status to return when the mode collects no data at all: no instance was found, or every counter was skipped for lack of value. Without this option the plugin would display an empty (or meaningless) `OK:` output. Can be: 'ok', 'warning', 'critical', 'unknown' (default: 'unknown').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Memory" label="Memory">

| Option                           | Description                                                                     |
|:---------------------------------|:--------------------------------------------------------------------------------|
| --warning-memory-usage           | Threshold in bytes.                                                             |
| --critical-memory-usage          | Threshold in bytes.                                                             |
| --warning-memory-usage-free      | Threshold in bytes.                                                             |
| --critical-memory-usage-free     | Threshold in bytes.                                                             |
| --warning-memory-usage-prct      | Threshold in percentage.                                                        |
| --critical-memory-usage-prct     | Threshold in percentage.                                                        |
| --warning-memory-available       | Threshold in bytes.                                                             |
| --critical-memory-available      | Threshold in bytes.                                                             |
| --warning-memory-available-prct  | Threshold in percentage.                                                        |
| --critical-memory-available-prct | Threshold in percentage.                                                        |
| --warning-buffer                 | Threshold in bytes (the appliance reports buffers and cache as a single value). |
| --critical-buffer                | Threshold in bytes (the appliance reports buffers and cache as a single value). |
| --warning-shared                 | Threshold in bytes.                                                             |
| --critical-shared                | Threshold in bytes.                                                             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                           |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'.                                                                                                                                |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=temperature). You can also exclude items from specific instances: --filter=`fan,shelf1\.0`                                                       |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                            |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,WARNING,^(?!(ok)$)' |
| --warning            | Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,50'                                                                                                        |
| --critical           | Set critical threshold for 'temperature' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,70'                                                                                                      |
| --warning-count-*    | Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                          |
| --critical-count-*   | Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                         |

</TabItem>
<TabItem value="Partitions" label="Partitions">

| Option                      | Description                                                                                                                                                                                    |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           | Define which counters (filtered by regular expression) should be monitored. Can be: status, space-usage, space-usage-free, space-usage-prct. Example: --filter-counters='status'               |
| --include-name              | Filter partitions by name (regexp).                                                                                                                                                            |
| --exclude-name              | Exclude partitions by name (regexp).                                                                                                                                                           |
| --warning-status            | Define the conditions to match for the status to be WARNING (default: `'%{status} =~ /Degraded/i'`). You can use the following variables: `%{status}`, `%{name}`                               |
| --critical-status           | Define the conditions to match for the status to be CRITICAL (default: `'%{status} !~ /^(Optimal\|Degraded\|Not Configured)$/i'`). You can use the following variables: `%{status}`, `%{name}` |
| --warning-space-usage       | Threshold in bytes.                                                                                                                                                                            |
| --critical-space-usage      | Threshold in bytes.                                                                                                                                                                            |
| --warning-space-usage-free  | Threshold in bytes.                                                                                                                                                                            |
| --critical-space-usage-free | Threshold in bytes.                                                                                                                                                                            |
| --warning-space-usage-prct  | Threshold in percentage.                                                                                                                                                                       |
| --critical-space-usage-prct | Threshold in percentage.                                                                                                                                                                       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_veritas_nba_ssh.pl \
	--plugin=storage::veritas::nba::ssh::plugin \
	--mode=memory \
	--help
```
