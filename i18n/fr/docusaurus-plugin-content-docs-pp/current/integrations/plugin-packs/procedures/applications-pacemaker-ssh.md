---
id: applications-pacemaker-ssh
title: Pacemaker
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Pacemaker** apporte un modèle d'hôte :

* **App-Pacemaker-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Pacemaker-SSH-custom" label="App-Pacemaker-SSH-custom">

| Alias       | Modèle de service                    | Description                                                          |
|:------------|:-------------------------------------|:---------------------------------------------------------------------|
| CRM         | App-Pacemaker-CRM-SSH-custom         | Contrôle l'état du cluster via la commande crm_mon                   |
| Clustat     | App-Pacemaker-Clustat-SSH-custom     | Contrôle l'état du cluster via la commande clustat                   |
| Constraints | App-Pacemaker-Constraints-SSH-custom | Contrôle si une contrainte est en place sur une ressource du cluster |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Pacemaker-SSH-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Métrique                                                | Unité |
|:--------------------------------------------------------|:------|
| *cluster*~connection-status                             | N/A   |
| *cluster*~quorum-status                                 | N/A   |
| *cluster*~cluster.nodes.online.count                    | count |
| *cluster*~cluster.nodes.offline.count                   | count |
| *cluster*~cluster.nodes.standby.count                   | count |
| *cluster*~cluster.actions.failed.count                  | count |
| *resources*#resource-status                             | N/A   |
| *resources*#resource.actions.failed.count               | count |
| *resources*#resource.migration.failed.count             | count |
| *clone_resources*#clone-resource-status                 | N/A   |
| *clone_resources*#clone_resource.actions.failed.count   | count |
| *clone_resources*#clone_resource.migration.failed.count | count |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Métrique       | Unité |
|:---------------|:------|
| *nodes*#node   | N/A   |
| *groups*#group | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Constraints" label="Constraints">

Coming soon

</TabItem>
</Tabs>

## Prérequis

### Configuration SSH

L'utilisation de ce connecteur requiert la création d'un utilisateur sur la
ressource supervisée, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH. Les privilèges `sudo` ou `root` ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.

Deux méthodes de connexion SSH sont possibles :
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les macros d'hôtes.

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
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pacemaker-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Pacemaker**
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
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-pacemaker-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pacemaker-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Pacemaker-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | libssh            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                               |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Macro                                | Description                                                                                                                                                                                                                  | Valeur par défaut                  | Obligatoire |
|:-------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| FILTERRESOURCENAME                   | Filter resource (also clone resource) by name (can be a regexp)                                                                                                                                                              |                                    |             |
| WARNINGCLONERESOURCEACTIONSFAILED    | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCLONERESOURCEACTIONSFAILED   | Thresholds                                                                                                                                                                                                                   |                                    |             |
| WARNINGCLONERESOURCEMIGRATIONFAILED  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCLONERESOURCEMIGRATIONFAILED | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCLONERESOURCESTATUS          | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged} | %{status} =~ /failed/i             |             |
| WARNINGCLONERESOURCESTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                      |                                    |             |
| CRITICALCLUSTERACTIONSFAILED         | Thresholds                                                                                                                                                                                                                   | 0                                  |             |
| WARNINGCLUSTERACTIONSFAILED          | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALCONNECTIONSTATUS             | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                               | %{connection\_status} =~ /failed/i |             |
| WARNINGCONNECTIONSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                |                                    |             |
| CRITICALNODESOFFLINE                 | Thresholds                                                                                                                                                                                                                   | 0                                  |             |
| WARNINGNODESOFFLINE                  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| WARNINGNODESONLINE                   | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALNODESONLINE                  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| WARNINGNODESSTANDBY                  | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALNODESSTANDBY                 | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALQUORUMSTATUS                 | Define the conditions to match for the status to be CRITICAL (Default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                           | %{quorum\_status} =~ /noQuorum/i   |             |
| WARNINGQUORUMSTATUS                  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{quorum\_status}                                                                                                          |                                    |             |
| WARNINGRESOURCEACTIONSFAILED         | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALRESOURCEACTIONSFAILED        | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALRESOURCEMIGRATIONFAILED      | Thresholds                                                                                                                                                                                                                   | 0                                  |             |
| WARNINGRESOURCEMIGRATIONFAILED       | Thresholds                                                                                                                                                                                                                   |                                    |             |
| CRITICALRESOURCESTATUS               | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                | %{status} =~ /stopped\|failed/i    |             |
| WARNINGRESOURCESTATUS                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                              |                                    |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                          | --verbose                          |             |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RESOURCENAME | Set the resource name you want to check                                                             | RESOURCENAME      | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-resource-name='' \
	--warning-nodes-online='' \
	--critical-nodes-online='' \
	--warning-nodes-offline='' \
	--critical-nodes-offline='0' \
	--warning-nodes-standby='' \
	--critical-nodes-standby='' \
	--warning-clone-resource-status='' \
	--critical-clone-resource-status='%{status} =~ /failed/i' \
	--warning-clone-resource-actions-failed='' \
	--critical-clone-resource-actions-failed='' \
	--warning-clone-resource-migration-failed='' \
	--critical-clone-resource-migration-failed='' \
	--warning-connection-status='' \
	--critical-connection-status='%{connection_status} =~ /failed/i' \
	--warning-cluster-actions-failed='' \
	--critical-cluster-actions-failed='0' \
	--warning-resource-status='' \
	--critical-resource-status='%{status} =~ /stopped|failed/i' \
	--warning-resource-actions-failed='' \
	--critical-resource-actions-failed='' \
	--warning-resource-migration-failed='' \
	--critical-resource-migration-failed='0' \
	--warning-quorum-status='' \
	--critical-quorum-status='%{quorum_status} =~ /noQuorum/i' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:    actions failed: 74 actions failed: 57 migration failed: 44 actions failed: 8 migration failed: 66 | 'cluster.nodes.online.count'=90;;;0; 'cluster.nodes.offline.count'=87;;;0; 'cluster.nodes.standby.count'=36;;;0; 'cluster.actions.failed.count'=74;;;0; 'resource.actions.failed.count'=57;;;0; 'resource.migration.failed.count'=44;;;0; 'clone_resource.actions.failed.count'=8;;;0; 'clone_resource.migration.failed.count'=66;;;0; 
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
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                         | Modèle de service associé            |
|:-----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| clustat [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pacemaker/local/mode/clustat.pm)]         | App-Pacemaker-Clustat-SSH-custom     |
| constraints [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pacemaker/local/mode/constraints.pm)] | App-Pacemaker-Constraints-SSH-custom |
| crm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pacemaker/local/mode/crm.pm)]                 | App-Pacemaker-CRM-SSH-custom         |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  | Timeout in seconds for the command (Default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo  sudo command                       | .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="CRM" label="CRM">

| Option                           | Description                                                                                                                                                                                                                    |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-resource-name           | Filter resource (also clone resource) by name (can be a regexp).                                                                                                                                                               |
| --warning-connection-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_status}, %{connection\_error}                                                                                  |
| --critical-connection-status     | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_status} =~ /failed/i'). You can use the following variables: %{connection\_status}, %{connection\_error}                                 |
| --warning-quorum-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{quorum\_status}                                                                                                            |
| --critical-quorum-status         | Define the conditions to match for the status to be CRITICAL (Default: '%{quorum\_status} =~ /noQuorum/i'). You can use the following variables: %{quorum\_status}                                                             |
| --warning-resource-status        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                                                                |
| --critical-resource-status       | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /stopped\|failed/i'). You can use the following variables: %{name}, %{status}, %{node}, %{is\_unmanaged}                                  |
| --warning-clone-resource-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}                                        |
| --critical-clone-resource-status | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /failed/i'). You can use the following variables: %{name}, %{status}, %{masters\_nodes\_name}, %{slaves\_nodes\_name}, %{is\_unmanaged}   |
| --ignore-failed-actions          | Failed actions errors (that match) are skipped.                                                                                                                                                                                |
| --resources                      | If resources not started on the node specified, send a warning message: (format: \<rsc\_name\>:\<node\>,\<rsc\_name\>:\<node\>,...)                                                                                            |
| --warning-* --critical-*         | Thresholds. Can be: 'cluster-actions-failed', 'clone-resource-actions-failed', 'clone-resource-migration-failed', 'nodes-online', 'nodes-offline', 'nodes-standby', 'resource-actions-failed', 'resource-migration-failed'.    |

</TabItem>
<TabItem value="Clustat" label="Clustat">

| Option       | Description                                                                                                                                                                                      |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Can be ('group','node') Define the conditions to match for the status to be WARNING.                                                                                                             |
| --critical-* | Can be ('group','node') Define the conditions to match for the status to be CRITICAL. (Default: --critical-node '%{state} !~ /up\|clean/' --critical-group '%{state} !~ /started\|starting/')    |

</TabItem>
<TabItem value="Constraints" label="Constraints">

| Option     | Description                               |
|:-----------|:------------------------------------------|
| --resource | Set the resource name you want to check   |
| --warning  | Return a warning instead of a critical    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
	--plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--help
```
