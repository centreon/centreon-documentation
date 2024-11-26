---
id: operatingsystems-aix-ssh
title: AIX SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **AIX SSH** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **AIX SSH** apporte un modèle d'hôte :

* **OS-AIX-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-AIX-SSH-custom" label="OS-AIX-SSH-custom">

| Alias   | Modèle de service         | Description                                                                         |
|:--------|:--------------------------|:------------------------------------------------------------------------------------|
| Errpt   | OS-AIX-Errpt-SSH-custom   | Contrôle permettant de vérifier les erreurs AIX via SSH                             |
| Lvsync  | OS-AIX-Lvsync-SSH-custom  | Contrôle permettant de vérifier la synchronisation des volumes logiques AIX via SSH |
| Process | OS-AIX-Process-SSH-custom | Contrôle permettant de vérifier les processus AIX via SSH                           |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-AIX-SSH-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service            | Description                                                     | Découverte |
|:-----------|:-----------------------------|:----------------------------------------------------------------|:----------:|
| Cmd-Return | OS-AIX-Cmd-Return-SSH-custom | Contrôle permettant de vérifier le retour de script AIX via SSH |            |
| Inode      | OS-AIX-Inode-SSH-custom      | Contrôle permettant de vérifier les inodes AIX via SSH          |            |
| Storage    | OS-AIX-Storage-SSH-custom    | Contrôle permettant de vérifier le stockage AIX via SSH         | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle      | Description                                                               |
|:---------------------|:--------------------------------------------------------------------------|
| OS-AIX-SSH-Disk-Name | Découvre les partitions du disque et supervise l'occupation de son espace |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cmd-Return" label="Cmd-Return">

| Nom                     | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Errpt" label="Errpt">

| Nom    | Unité |
|:-------|:------|
| errors | count |

</TabItem>
<TabItem value="Inode" label="Inode">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| *inodes*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Lvsync" label="Lvsync">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Process" label="Process">

| Nom                   | Unité |
|:----------------------|:------|
| processes.total.count | count |
| status                | N/A   |

</TabItem>
<TabItem value="Storage" label="Storage">

| Nom                                                 | Unité |
|:----------------------------------------------------|:------|
| *disk_name1*#storage.space.usage.bytes              | B     |
| *disk_name2*#storage.space.usage.bytes              | B     |
| *disk_name1*#storage.space.free.bytes               | B     |
| *disk_name2*#storage.space.free.bytes               | B     |
| *disk_name1*#storageresource.space.usage.percentage | %     |
| *disk_name2*#storageresource.space.usage.percentage | %     |

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
dnf install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-aix-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **AIX SSH**
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
dnf install centreon-plugin-Operatingsystems-Aix-Local
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Aix-Local
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-aix-local
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Aix-Local
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-AIX-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli, plink and libssh                                                                                             | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                  |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cmd-Return" label="Cmd-Return">

| Macro           | Description                                                                                                                                       | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MANAGERETURNS   | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem |                   |             |
| EXECCOMMAND     | Command to test (default: none). You can use 'sh' to use '&&' or '\ |\|'                                                                          |                   |             |
| EXECCOMMANDPATH | Command path                                                                                                                                      |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).  |                   |             |

</TabItem>
<TabItem value="Errpt" label="Errpt">

| Macro          | Description                                                                                                                                      | Valeur par défaut                  | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| ERRORTYPE      | Filter error type separated by a coma (INFO, PEND, PERF, PERM, TEMP, UNKN)                                                                       | INFO, PEND, PERF, PERM, TEMP, UNKN |             |
| ERRORCLASS     | Filter error class ('H' for hardware, 'S' for software, '0' for errlogger, 'U' for undetermined)                                                 | 0                                  |             |
| FILTERRESOURCE | Filter resource (can use a regexp)                                                                                                               |                                    |             |
| FILTERID       | Filter error code (can use a regexp)                                                                                                             |                                    |             |
| ERRORID        | Filter specific error code (can be a comma separated list)                                                                                       |                                    |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                    |             |

</TabItem>
<TabItem value="Inode" label="Inode">

| Macro         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNT   | Filter mountpoint (regexp can be used)                                                                                                           |                   |             |
| FILTERFS      | Filter filesystem (regexp can be used)                                                                                                           |                   |             |
| WARNINGUSAGE  | Warning threshold in percent                                                                                                                     |                   |             |
| CRITICALUSAGE | Critical threshold in percent                                                                                                                    |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Lvsync" label="Lvsync">

| Macro          | Description                                                                                                                                      | Valeur par défaut    | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTERTYPE     | Filter filesystem type (regexp can be used)                                                                                                      |                      |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}             |                      |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}            | %{state} =~ /stale/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}             |                      |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                      |             |

</TabItem>
<TabItem value="Process" label="Process">

| Macro          | Description                                                                                                                                                     | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOMMAND  | Filter process commands (regexp can be used)                                                                                                                    |                   |             |
| FILTERPPID     | Filter process ppid (regexp can be used)                                                                                                                        |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args}                |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args} |                   |             |
| WARNINGTOTAL   | Threshold                                                                                                                                                       |                   |             |
| CRITICALTOTAL  | Threshold                                                                                                                                                       |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                |                   |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERFS          | Filter filesystem (regexp can be used)                                                                                                           |                   |             |
| FILTERMOUNT       | Filter mountpoint (regexp can be used)                                                                                                           |                   |             |
| WARNINGUSAGE      | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE     | Threshold                                                                                                                                        |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_aix_local.pl \
	--plugin=os::aix::local::plugin  \
	--mode=storage \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='XXXX' \
	--ssh-password='XXXX' \
	--ssh-port=''  \
	--filter-fs='' \
	--filter-mount='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All storages are ok | 'disk_name1#storage.space.usage.bytes'=90102B;;;0;total_space 'disk_name2#storage.space.usage.bytes'=18580B;;;0;total_space 'disk_name1#storage.space.free.bytes'=53768B;;;0;total_space 'disk_name2#storage.space.free.bytes'=16004B;;;0;total_space 'disk_name1#storageresource.space.usage.percentage'=63%;;;0;100 'disk_name2#storageresource.space.usage.percentage'=54%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_aix_local.pl \
	--plugin=os::aix::local::plugin  \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                    | Modèle de service associé    |
|:------------------------------------------------------------------------------------------------------------------------|:-----------------------------|
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/cmdreturn.pm)]       | OS-AIX-Cmd-Return-SSH-custom |
| errpt [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/errpt.pm)]                | OS-AIX-Errpt-SSH-custom      |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/inodes.pm)]              | OS-AIX-Inode-SSH-custom      |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/liststorages.pm)] | Used for service discovery   |
| lvsync [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/lvsync.pm)]              | OS-AIX-Lvsync-SSH-custom     |
| process [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/process.pm)]            | OS-AIX-Process-SSH-custom    |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/aix/local/mode/storage.pm)]            | OS-AIX-Storage-SSH-custom    |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-backend                              |   Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  |   Timeout in seconds for the command (default: 45).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --sudo                                     |   sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ignore-exit-code                         |   Don't quit if the exit code matches that option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cmd-Return" label="Cmd-Return">

| Option                 | Description                                                                                                                                           |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       |   Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            |   Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         |   Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    |   Command path (default: none).                                                                                                                       |
| --exec-command-options |   Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Errpt" label="Errpt">

| Option            | Description                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------|
| --error-type      |   Filter error type separated by a coma (INFO, PEND, PERF, PERM, TEMP, UNKN).                                           |
| --error-class     |   Filter error class ('H' for hardware, 'S' for software, '0' for errlogger, 'U' for undetermined).                     |
| --error-id        |   Filter specific error code (can be a comma separated list).                                                           |
| --retention       |   Retention time of errors in seconds.                                                                                  |
| --verbose         |   Print error description in long output. \[ Error 'CODE' Date: Timestamp ResourceName: RsrcName Description: Desc \]   |
| --filter-resource |   Filter resource (can use a regexp).                                                                                   |
| --filter-id       |   Filter error code (can use a regexp).                                                                                 |
| --exclude-id      |   Filter on specific error code (can be a comma separated list).                                                        |
| --format-date     |   Print the date to format 20YY/mm/dd HH:MM instead of mmddHHMMYY.                                                      |

</TabItem>
<TabItem value="Inode" label="Inode">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-fs       |   Filter filesystem (regexp can be used).                                                                                     |
| --filter-mount    |   Filter mountpoint (regexp can be used).                                                                                     |
| --warning-usage   |   Warning threshold in percent.                                                                                               |
| --critical-usage  |   Critical threshold in percent.                                                                                              |

</TabItem>
<TabItem value="Lvsync" label="Lvsync">

| Option            | Description                                                                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                   |
| --filter-type     |   Filter filesystem type (regexp can be used).                                                                                                                                |
| --filter-mount    |   Filter storage mount point (regexp can be used).                                                                                                                            |
| --unknown-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}.                                       |
| --warning-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{lv}, %{mount}, %{type}.                                       |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%{state} =~ /stale/i'). You can use the following variables: %{state}, %{lv}, %{mount}, %{type}.    |

</TabItem>
<TabItem value="Process" label="Process">

| Option                   | Description                                                                                                                                                         |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                         |
| --filter-command         |   Filter process commands (regexp can be used).                                                                                                                     |
| --filter-arg             |   Filter process arguments (regexp can be used).                                                                                                                    |
| --filter-ppid            |   Filter process ppid (regexp can be used).                                                                                                                         |
| --filter-state           |   Filter process states (regexp can be used). You can use: 'Canceled', 'Nonexistent', 'Active', 'Swapped', 'Idle', 'Stopped', 'Running', 'Sleeping'.                |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '') You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args}     |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{ppid}, %{state}, %{elapsed}, %{cmd}, %{args}   |
| --warning-* --critical-* |   Thresholds. Can be: 'total'.                                                                                                                                      |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-fs              |   Filter filesystem (regexp can be used).                                                                                     |
| --filter-mount           |   Filter mountpoint (regexp can be used).                                                                                     |
| --space-reservation      |   Some filesystem has space reserved (like ext4 for root). The value is in percent of total (default: none).                  |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                        |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aix_local.pl \
	--plugin=os::aix::local::plugin  \
	--mode=storage \
	--help
```
