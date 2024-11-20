---
id: applications-oracle-ovm-api
title: Oracle VM Manager API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Oracle VM Manager API** apporte un modèle d'hôte :

* **App-Oracle-Ovm-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Oracle-Ovm-Api-custom" label="App-Oracle-Ovm-Api-custom">

| Alias        | Modèle de service                           | Description                       |
|:-------------|:--------------------------------------------|:----------------------------------|
| File-Servers | App-Oracle-Ovm-File-Servers-Api-custom      | Contrôle les serveurs de fichiers |
| Manager      | App-Oracle-Ovm-Manager-Api-custom           | Contrôle le manager               |
| Server-Pools | App-Oracle-Ovm-File-Server-Pools-Api-custom | Contrôle les pools de serveurs    |
| Servers      | App-Oracle-Ovm-Servers-Api-custom           | Contrôle les serveurs             |
| Vm           | App-Oracle-Ovm-Vm-Api-custom                | Contrôle les machines virtuelles  |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Oracle-Ovm-Api-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="File-Servers" label="File-Servers">

| Métrique                                                      | Unité |
|:--------------------------------------------------------------|:------|
| *fileservers*~*filesystems*#serverpool.space.usage.bytes      | B     |
| *fileservers*~*filesystems*#serverpool.space.free.bytes       | B     |
| *fileservers*~*filesystems*#serverpool.space.usage.percentage | %     |

</TabItem>
<TabItem value="Manager" label="Manager">

| Métrique                     | Unité |
|:-----------------------------|:------|
| status                       | N/A   |
| manager.jobs.succeeded.count | count |
| manager.jobs.failed.count    | count |

</TabItem>
<TabItem value="Server-Pools" label="Server-Pools">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| *pools*~serverpool.servers.running.count   | count |
| *pools*~serverpool.servers.stopped.count   | count |
| *pools*~serverpool.vm.running.count        | count |
| *pools*~serverpool.vm.stopped.count        | count |
| *pools*~serverpool.memory.usage.bytes      | B     |
| *pools*~serverpool.memory.free.bytes       | B     |
| *pools*~serverpool.memory.usage.percentage | %     |

</TabItem>
<TabItem value="Servers" label="Servers">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| servers.running.count                    | count |
| servers.stopped.count                    | count |
| *servers*#status                         | N/A   |
| *servers*#server.memory.usage.bytes      | B     |
| *servers*#server.memory.free.bytes       | B     |
| *servers*#server.memory.usage.percentage | %     |

</TabItem>
<TabItem value="Vm" label="Vm">

| Métrique                      | Unité |
|:------------------------------|:------|
| virtualmachines.running.count | count |
| virtualmachines.stopped.count | count |
| *vm*#status                   | N/A   |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler l'application Oracle VM Manager, l'API Rest doit être configurée (l'API SOAP est dépréciée). 

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
dnf install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-oracle-ovm-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Oracle VM Manager API**
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
dnf install centreon-plugin-Applications-Oracle-Ovm-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Oracle-Ovm-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-oracle-ovm-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Oracle-Ovm-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Oracle-Ovm-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OVMAPIUSERNAME     | API username                                                                                                               | username          | X           |
| OVMAPIPASSWORD     | API password                                                                                                               | password          | X           |
| OVMAPIPROTO        | Specify https if needed (default: 'https')                                                                                 | https             |             |
| OVMAPIPORT         | Port used (default: 7002)                                                                                                  | 7002              |             |
| OVMAPICUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | rest              |             |
| OVMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="File-Servers" label="File-Servers">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERFILESERVERNAME   | Filter file servers by name (can be a regexp)                                                      |                   |             |
| FILTERFILESYSTEMNAME   | Filter file systems by name (can be a regexp)                                                      |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                         |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Manager" label="Manager">

| Macro                 | Description                                                                                                                                                | Valeur par défaut       | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| WARNINGJOBSFAILED     | Thresholds                                                                                                                                                 |                         |             |
| CRITICALJOBSFAILED    | Thresholds                                                                                                                                                 |                         |             |
| WARNINGJOBSSUCCEEDED  | Thresholds                                                                                                                                                 |                         |             |
| CRITICALJOBSSUCCEEDED | Thresholds                                                                                                                                                 |                         |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /running/i'). You can use the following variables: %\{status\}, %\{name\} | %\{status\} !~ /running/i |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                       |                         |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                         | --verbose               |             |

</TabItem>
<TabItem value="Server-Pools" label="Server-Pools">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSERVERPOOLNAME    | Filter server pools by name (can be a regexp)                                                      |                   |             |
| WARNINGMEMORYUSAGE      | Thresholds                                                                                         |                   |             |
| CRITICALMEMORYUSAGE     | Thresholds                                                                                         |                   |             |
| WARNINGMEMORYUSAGEFREE  | Thresholds                                                                                         |                   |             |
| CRITICALMEMORYUSAGEFREE | Thresholds                                                                                         |                   |             |
| WARNINGMEMORYUSAGEPRCT  | Thresholds                                                                                         |                   |             |
| CRITICALMEMORYUSAGEPRCT | Thresholds                                                                                         |                   |             |
| WARNINGSERVERSRUNNING   | Thresholds                                                                                         |                   |             |
| CRITICALSERVERSRUNNING  | Thresholds                                                                                         |                   |             |
| WARNINGSERVERSSTOPPED   | Thresholds                                                                                         |                   |             |
| CRITICALSERVERSSTOPPED  | Thresholds                                                                                         |                   |             |
| WARNINGVMRUNNING        | Thresholds                                                                                         |                   |             |
| CRITICALVMRUNNING       | Thresholds                                                                                         |                   |             |
| WARNINGVMSTOPPED        | Thresholds                                                                                         |                   |             |
| CRITICALVMSTOPPED       | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Servers" label="Servers">

| Macro                   | Description                                                                                                                                                    | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME              | Filter servers by name (can be a regexp)                                                                                                                       |                   |             |
| WARNINGMEMORYUSAGE      | Thresholds                                                                                                                                                     |                   |             |
| CRITICALMEMORYUSAGE     | Thresholds                                                                                                                                                     |                   |             |
| WARNINGMEMORYUSAGEFREE  | Thresholds                                                                                                                                                     |                   |             |
| CRITICALMEMORYUSAGEFREE | Thresholds                                                                                                                                                     |                   |             |
| WARNINGMEMORYUSAGEPRCT  | Thresholds                                                                                                                                                     |                   |             |
| CRITICALMEMORYUSAGEPRCT | Thresholds                                                                                                                                                     |                   |             |
| WARNINGSERVERSRUNNING   | Thresholds                                                                                                                                                     |                   |             |
| CRITICALSERVERSRUNNING  | Thresholds                                                                                                                                                     |                   |             |
| WARNINGSERVERSSTOPPED   | Thresholds                                                                                                                                                     |                   |             |
| CRITICALSERVERSSTOPPED  | Thresholds                                                                                                                                                     |                   |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{running_status\}, %\{is_maintenance\}, %\{up2date\}, %\{name\}  |                   |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{running_status\}, %\{is_maintenance\}, %\{up2date\}, %\{name\} |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                             | --verbose         |             |

</TabItem>
<TabItem value="Vm" label="Vm">

| Macro             | Description                                                                                                                    | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME        | Filter virtual machines by name (can be a regexp)                                                                              |                   |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{running_status\}, %\{name\}  |                   |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{running_status\}, %\{name\} |                   |             |
| WARNINGVMRUNNING  | Thresholds                                                                                                                     |                   |             |
| CRITICALVMRUNNING | Thresholds                                                                                                                     |                   |             |
| WARNINGVMSTOPPED  | Thresholds                                                                                                                     |                   |             |
| CRITICALVMSTOPPED | Thresholds                                                                                                                     |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                             | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
	--plugin=apps::oracle::ovm::api::plugin \
	--mode=servers \
	--hostname='10.0.0.1' \
	--api-username='username' \
	--api-password='password' \
	--custommode='rest' \
	--port='7002' \
	--proto='https'  \
	--filter-name='' \
	--warning-servers-running='' \
	--critical-servers-running='' \
	--warning-servers-stopped='' \
	--critical-servers-stopped='' \
	--warning-status='' \
	--critical-status='' \
	--warning-memory-usage='' \
	--critical-memory-usage='' \
	--warning-memory-usage-free='' \
	--critical-memory-usage-free='' \
	--warning-memory-usage-prct='' \
	--critical-memory-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: running: 66 stopped: 23 All servers are ok | 'servers.running.count'=66;;;0;total'servers.stopped.count'=23;;;0;total'*servers*#status'=;;;;'*servers*#server.memory.usage.bytes'=B;;;0;total_memory'*servers*#server.memory.free.bytes'=B;;;0;total_memory'*servers*#server.memory.usage.percentage'=%;;;0;100
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
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
	--plugin=apps::oracle::ovm::api::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                         | Modèle de service associé                   |
|:-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/discovery.pm)]      | Not used in this Monitoring Connector       |
| file-servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/fileservers.pm)] | App-Oracle-Ovm-File-Servers-Api-custom      |
| manager [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/manager.pm)]          | App-Oracle-Ovm-Manager-Api-custom           |
| server-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/serverpools.pm)] | App-Oracle-Ovm-File-Server-Pools-Api-custom |
| servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/servers.pm)]          | App-Oracle-Ovm-Servers-Api-custom           |
| vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/oracle/ovm/api/mode/vm.pm)]                    | App-Oracle-Ovm-Vm-Api-custom                |

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
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Oracle OVM Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (default: 7002)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="File-Servers" label="File-Servers">

| Option                   | Description                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^space-usage$'   |
| --filter-fileserver-name | Filter file servers by name (can be a regexp).                                                |
| --filter-filesystem-name | Filter file systems by name (can be a regexp).                                                |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct' (%).        |

</TabItem>
<TabItem value="Manager" label="Manager">

| Option                   | Description                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                         |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{name\}                                         |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                         |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /running/i'). You can use the following variables: %\{status\}, %\{name\}   |
| --warning-* --critical-* | Thresholds. Can be: 'jobs-succeeded', 'jobs-failed'.                                                                                                         |

</TabItem>
<TabItem value="Server-Pools" label="Server-Pools">

| Option                    | Description                                                                                                                                                    |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         | Only display some counters (regexp can be used). Example: --filter-counters='^memory-usage$'                                                                   |
| --filter-server-pool-name | Filter server pools by name (can be a regexp).                                                                                                                 |
| --warning-* --critical-*  | Thresholds. Can be: 'servers-running', 'servers-stopped', 'vm-running', 'vm-stopped', 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%).    |

</TabItem>
<TabItem value="Servers" label="Servers">

| Option                   | Description                                                                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^memory-usage$'                                                                     |
| --filter-name            | Filter servers by name (can be a regexp).                                                                                                                        |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{running_status\}, %\{is_maintenance\}, %\{up2date\}, %\{name\}    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{running_status\}, %\{is_maintenance\}, %\{up2date\}, %\{name\}    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{running_status\}, %\{is_maintenance\}, %\{up2date\}, %\{name\}   |
| --warning-* --critical-* | Thresholds. Can be: 'servers-running', 'servers-stopped', 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%).                                  |

</TabItem>
<TabItem value="Vm" label="Vm">

| Option                   | Description                                                                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                             |
| --filter-name            | Filter virtual machines by name (can be a regexp).                                                                               |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{running_status\}, %\{name\}    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{running_status\}, %\{name\}    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{running_status\}, %\{name\}   |
| --warning-* --critical-* | Thresholds. Can be: 'vm-running', 'vm-stopped'.                                                                                  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
	--plugin=apps::oracle::ovm::api::plugin \
	--mode=servers \
	--help
```
