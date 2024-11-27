---
id: applications-ansible-tower
title: Ansible Tower CLI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Ansible Tower** 
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Ansible Tower** apporte un modèle d'hôte :

* **App-Ansible-Tower-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Ansible-Tower-custom" label="App-Ansible-Tower-custom">

| Alias         | Modèle de service                          | Description                 |
|:--------------|:-------------------------------------------|:----------------------------|
| Hosts         | App-Ansible-Tower-Hosts-Api-custom         | Contrôle les hôtes          |
| Inventories   | App-Ansible-Tower-Inventories-Api-custom   | Contrôle l'inventaire       |
| Job-Templates | App-Ansible-Tower-Job-Templates-Api-custom | Contrôle les job templates  |
| Jobs          | App-Ansible-Tower-Jobs-Api-custom          | Contrôle les jobs           |
| Schedules     | App-Ansible-Tower-Schedules-Api-custom     | Contrôle les scheduled jobs |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Ansible-Tower-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle   | Description                                          |
|:------------------|:-----------------------------------------------------|
| Ansible Tower CLI | Discover hosts by requesting Ansible Tower using CLI |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Nom                | Unité |
|:-------------------|:------|
| hosts.total.count  | count |
| hosts.failed.count | count |
| job-status         | N/A   |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| inventories.total.count                      | count |
| inventories.failed.count                     | count |
| *inventories*#inventory.hosts.total.count    | count |
| *inventories*#inventory.hosts.failed.count   | count |
| *inventories*#inventory.sources.total.count  | count |
| *inventories*#inventory.sources.failed.count | count |
| *inventories*#inventory.groups.total.count   | count |
| *inventories*#inventory.groups.failed.count  | count |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Nom                      | Unité |
|:-------------------------|:------|
| jobtemplates.total.count | count |
| job-status               | N/A   |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Nom              | Unité |
|:-----------------|:------|
| jobs.total.count | count |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| schedules.total.count                        | count |
| job-status                                   | N/A   |
| *schedules*#schedule.start.last.time.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Pour utiliser le custom mode `towercli`, le plugin requiert que l'outil en ligne de commande `tower-cli` soit installé.
Référez-vous à [la documentation officielle de tower-cli](https://tower-cli.readthedocs.io/en/latest/install.html) pour l'installation.

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
dnf install centreon-pack-applications-ansible-tower
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-ansible-tower
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-ansible-tower
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-ansible-tower
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Ansible Tower**
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
dnf install centreon-plugin-Applications-Ansible-Tower
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Ansible-Tower
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-ansible-tower
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Ansible-Tower
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Ansible-Tower-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#modes-disponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro                    | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ANSIBLETOWERUSERNAME     | Ansible Tower username (default uses setting in 'tower config')                                                            |                   |             |
| ANSIBLETOWERPASSWORD     | Ansible Tower password (default uses setting in 'tower config')                                                            |                   |             |
| ANSIBLETOWERCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| ANSIBLETOWEREXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Macro             | Description                                                                                                                                                                       | Valeur par défaut                 | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| UNKNOWNJOBSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /default/ |             |
| FILTERNAME        | Filter host name (can use regexp)                                                                                                                                                 |                                   |             |
| WARNINGFAILED     | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALFAILED    | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALJOBSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /failed/  |             |
| WARNINGJOBSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                   |             |
| WARNINGTOTAL      | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALTOTAL     | Threshold                                                                                                                                                                         |                                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                | --verbose                         |             |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINVENTORY       | Filter inventory name (can use regexp)                                                             |                   |             |
| WARNINGFAILED         | Threshold                                                                                          |                   |             |
| CRITICALFAILED        | Threshold                                                                                          |                   |             |
| WARNINGGROUPSFAILED   | Threshold                                                                                          |                   |             |
| CRITICALGROUPSFAILED  | Threshold                                                                                          |                   |             |
| WARNINGGROUPSTOTAL    | Threshold                                                                                          |                   |             |
| CRITICALGROUPSTOTAL   | Threshold                                                                                          |                   |             |
| WARNINGHOSTSFAILED    | Threshold                                                                                          |                   |             |
| CRITICALHOSTSFAILED   | Threshold                                                                                          |                   |             |
| WARNINGHOSTSTOTAL     | Threshold                                                                                          |                   |             |
| CRITICALHOSTSTOTAL    | Threshold                                                                                          |                   |             |
| WARNINGSOURCESFAILED  | Threshold                                                                                          |                   |             |
| CRITICALSOURCESFAILED | Threshold                                                                                          |                   |             |
| WARNINGSOURCESTOTAL   | Threshold                                                                                          |                   |             |
| CRITICALSOURCESTOTAL  | Threshold                                                                                          |                   |             |
| WARNINGTOTAL          | Threshold                                                                                          |                   |             |
| CRITICALTOTAL         | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Macro              | Description                                                                                                                                                                       | Valeur par défaut                 | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| UNKNOWNJOBSTATUS   | Define the conditions to match for the status to be UNKNOWN (default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /default/ |             |
| FILTERNAME         | Filter job template name (can use regexp)                                                                                                                                         |                                   |             |
| WARNINGCANCELED    | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALCANCELED   | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGDEFAULT     | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALDEFAULT    | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGFAILED      | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALFAILED     | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALJOBSTATUS  | Define the conditions to match for the status to be CRITICAL (default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /failed/  |             |
| WARNINGJOBSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                   |             |
| WARNINGNEVER       | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALNEVER      | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGPENDING     | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALPENDING    | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGRUNNING     | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALRUNNING    | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGSUCCESSFUL  | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALSUCCESSFUL | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGTOTAL       | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALTOTAL      | Threshold                                                                                                                                                                         |                                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                | --verbose                         |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro              | Description                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Define which jobs should be monitored based on their names. This option will be treated as a regular expression |                   |             |
| WARNINGCANCELED    | Threshold warning for canceled jobs                                                                             |                   |             |
| CRITICALCANCELED   | Threshold critical for canceled jobs                                                                            |                   |             |
| WARNINGDEFAULT     | Threshold warning for default jobs                                                                              |                   |             |
| CRITICALDEFAULT    | Threshold critical for default jobs                                                                             |                   |             |
| WARNINGFAILED      | Threshold warning for failed jobs                                                                               |                   |             |
| CRITICALFAILED     | Threshold critical for failed jobs                                                                              |                   |             |
| WARNINGPENDING     | Threshold warning for pending jobs                                                                              |                   |             |
| CRITICALPENDING    | Threshold critical for pending jobs                                                                             |                   |             |
| WARNINGRUNNING     | Threshold warning for running jobs                                                                              |                   |             |
| CRITICALRUNNING    | Threshold critical for running jobs                                                                             |                   |             |
| WARNINGSUCCESSFUL  | Threshold warning for successful jobs                                                                           |                   |             |
| CRITICALSUCCESSFUL | Threshold critical for successful jobs                                                                          |                   |             |
| WARNINGTOTAL       | Threshold warning for total jobs                                                                                |                   |             |
| CRITICALTOTAL      | Threshold critical for total jobs                                                                               |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).              | --verbose         |             |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Macro                 | Description                                                                                                                                                                       | Valeur par défaut                 | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| UNKNOWNJOBSTATUS      | Define the conditions to match for the status to be UNKNOWN (default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /default/ |             |
| FILTERNAME            | Filter schedule name (can use regexp)                                                                                                                                             |                                   |             |
| WARNINGCANCELED       | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALCANCELED      | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGDEFAULT        | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALDEFAULT       | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGFAILED         | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALFAILED        | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALJOBSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last\_job\_status} =~ /failed/  |             |
| WARNINGJOBSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                   |             |
| WARNINGNEVER          | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALNEVER         | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGPENDING        | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALPENDING       | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGRUNNING        | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALRUNNING       | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGSTARTLASTTIME  | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALSTARTLASTTIME | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGSUCCESSFUL     | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALSUCCESSFUL    | Threshold                                                                                                                                                                         |                                   |             |
| WARNINGTOTAL          | Threshold                                                                                                                                                                         |                                   |             |
| CRITICALTOTAL         | Threshold                                                                                                                                                                         |                                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                | --verbose                         |             |

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
/usr/lib/centreon/plugins/centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--mode=hosts \
	--hostname='10.0.0.1' \
	--username='' \
	--password='' \
	--custommode='api'  \
	--filter-name='' \
	--unknown-job-status='%{last\_job\_status} =~ /default/' \
	--warning-job-status='' \
	--critical-job-status='%{last\_job\_status} =~ /failed/' \
	--warning-total='' \
	--critical-total='' \
	--warning-failed='' \
	--critical-failed='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:    | 'hosts.total.count'=93;;;0; 'hosts.failed.count'=65;;;0;total 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* api
* towercli

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                     | Modèle de service associé                  |
|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/automation/ansible/tower/mode/discovery.pm)]        | Used for host discovery                    |
| hosts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/automation/ansible/tower/mode/hosts.pm)]                | App-Ansible-Tower-Hosts-Api-custom         |
| inventories [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/automation/ansible/tower/mode/inventories.pm)]    | App-Ansible-Tower-Inventories-Api-custom   |
| job-templates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/automation/ansible/tower/mode/jobtemplates.pm)] | App-Ansible-Tower-Job-Templates-Api-custom |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/automation/ansible/tower/mode/jobs.pm)]                  | App-Ansible-Tower-Jobs-Api-custom          |
| schedules [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/automation/ansible/tower/mode/schedules.pm)]        | App-Ansible-Tower-Schedules-Api-custom     |

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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Ansible Tower hostname (default uses setting in 'tower config').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 |   Ansible Tower username (default uses setting in 'tower config').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --password                                 |   Ansible Tower password (default uses setting in 'tower config').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --nossl                                    |   Use http connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --command                                  |   Command to get information (default: 'tower-cli'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --proxyurl                                 |   Proxy URL if any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Option                   | Description                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter host name (can use regexp).                                                                                                                                                  |
| --display-failed-hosts   |   Display failed hosts list in verbose output.                                                                                                                                        |
| --unknown-job-status     |   Define the conditions to match for the status to be UNKNOWN (default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-job-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                  |
| --critical-job-status    |   Define the conditions to match for the status to be CRITICAL (default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-* --critical-* |    Thresholds. Can be: 'total', 'failed'.                                                                                                                                             |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Option                   | Description                                                                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-inventory       |   Filter inventory name (can use regexp).                                                                                                        |
| --warning-* --critical-* |    Thresholds. Can be: 'total', 'failed', 'hosts-total', 'hosts-failed',  'sources-total', 'sources-failed', 'groups-total', 'groups-failed'.    |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Option                   | Description                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter job template name (can use regexp).                                                                                                                                          |
| --launch-job-template-id |   The job\_template ID to launch.                                                                                                                                                     |
| --launch-inventory       |   Specify inventory for job template to run.                                                                                                                                          |
| --launch-credential      |   Specify machine credential for job template to run.                                                                                                                                 |
| --launch-tags            |   Specify tagged actions in the playbook to run.                                                                                                                                      |
| --launch-limit           |   Specify host limit for job template to run.                                                                                                                                         |
| --launch-extra-vars      |   yaml format text that contains extra variables to pass on.                                                                                                                          |
| --launch-max-retries     |   Number of retries to get job result once launched (default: 5).                                                                                                                     |
| --launch-retry-interval  |   Number of seconds between retries (default : 10).                                                                                                                                   |
| --unknown-job-status     |   Define the conditions to match for the status to be UNKNOWN (default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-job-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                  |
| --critical-job-status    |   Define the conditions to match for the status to be CRITICAL (default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-* --critical-* |    Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default', 'never'.                                                                         |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-name          |   Define which jobs should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                              |
| --filter-time          |   Define which jobs should be monitored based on the age of their last execution. Jobs that finished longer than X hours ago will be ignored.                                                                                                   |
| --display-failed-jobs  |   Display failed jobs list in verbose output.                                                                                                                                                                                                   |
| --memory               |   Only check new jobs.                                                                                                                                                                                                                          |
| --warning-total        |   Threshold warning for total jobs.                                                                                                                                                                                                             |
| --critical-total       |   Threshold critical for total jobs.                                                                                                                                                                                                            |
| --warning-successful   |   Threshold warning for successful jobs.                                                                                                                                                                                                        |
| --critical-successful  |   Threshold critical for successful jobs.                                                                                                                                                                                                       |
| --warning-failed       |   Threshold warning for failed jobs.                                                                                                                                                                                                            |
| --critical-failed      |   Threshold critical for failed jobs.                                                                                                                                                                                                           |
| --warning-running      |   Threshold warning for running jobs.                                                                                                                                                                                                           |
| --critical-running     |   Threshold critical for running jobs.                                                                                                                                                                                                          |
| --warning-canceled     |   Threshold warning for canceled jobs.                                                                                                                                                                                                          |
| --critical-canceled    |   Threshold critical for canceled jobs.                                                                                                                                                                                                         |
| --warning-pending      |   Threshold warning for pending jobs.                                                                                                                                                                                                           |
| --critical-pending     |   Threshold critical for pending jobs.                                                                                                                                                                                                          |
| --warning-default      |   Threshold warning for default jobs.                                                                                                                                                                                                           |
| --critical-default     |   Threshold critical for default jobs.                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Option                   | Description                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter schedule name (can use regexp).                                                                                                                                              |
| --unknown-job-status     |   Define the conditions to match for the status to be UNKNOWN (default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-job-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{last\_job\_status}, %{display}                                                  |
| --critical-job-status    |   Define the conditions to match for the status to be CRITICAL (default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   |
| --warning-* --critical-* |    Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default', 'never', 'start-last-time' (s).                                                  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--mode=hosts \
	--help
```
