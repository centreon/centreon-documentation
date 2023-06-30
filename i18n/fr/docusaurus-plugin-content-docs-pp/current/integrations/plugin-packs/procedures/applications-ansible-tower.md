---
id: applications-ansible-tower
title: Ansible Tower CLI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Ansible Tower** apporte un modèle d'hôte :

* **App-Ansible-Tower-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Ansible-Tower" label="App-Ansible-Tower">

| Alias         | Modèle de service                   | Description                 |
|:--------------|:------------------------------------|:----------------------------|
| Hosts         | App-Ansible-Tower-Hosts-Api         | Contrôle les hôtes          |
| Inventories   | App-Ansible-Tower-Inventories-Api   | Contrôle l'inventaire       |
| Job-Templates | App-Ansible-Tower-Job-Templates-Api | Contrôle les job templates  |
| Jobs          | App-Ansible-Tower-Jobs-Api          | Contrôle les jobs           |
| Schedules     | App-Ansible-Tower-Schedules-Api     | Contrôle les scheduled jobs |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Ansible-Tower-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle   | Description                                          |
|:------------------|:-----------------------------------------------------|
| Ansible Tower CLI | Discover hosts by querying Ansible Tower using the CLI |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Métrique           | Unité |
|:-------------------|:------|
| hosts.total.count  | count |
| hosts.failed.count | count |
| hosts#job-status   | N/A   |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| inventories.total.count                    | count |
| inventories.failed.count                   | count |
| inventories#inventory.hosts.total.count    | count |
| inventories#inventory.hosts.failed.count   | count |
| inventories#inventory.sources.total.count  | count |
| inventories#inventory.sources.failed.count | count |
| inventories#inventory.groups.total.count   | count |
| inventories#inventory.groups.failed.count  | count |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

Coming soon

</TabItem>
<TabItem value="Jobs" label="Jobs">

Coming soon

</TabItem>
<TabItem value="Schedules" label="Schedules">

Coming soon

</TabItem>
</Tabs>

## Prérequis

Pour utiliser le custom mode `towercli`, le plugin requiert que l'outil en ligne de commande `tower-cli` soit installé.
Référez-vous à [la documentation officielle de tower-cli](https://tower-cli.readthedocs.io/en/latest/install.html) pour l'installation.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquets
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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                    | Description                                                                                                   | Valeur par défaut | Obligatoire |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| ANSIBLETOWERCUSTOMMODE   | When a plugin offers several ways to get information the desired one must be defined with this option | api               |             |
| ANSIBLETOWERPASSWORD     | API password                                                                                                  |                   |             |
| ANSIBLETOWERUSERNAME     | API username                                                                                                  |                   |             |
| ANSIBLETOWEREXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)         |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparait dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Macro             | Description                                                                                                                                            | Valeur par défaut               | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:------------|
| UNKNOWNJOBSTATUS  | Set unknown threshold for status (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last_job_status} =~ /default/ |             |
| FILTERNAME        | Filter host name (Can use regexp)                                                                                                                      |                                 |             |
| WARNINGFAILED     | Thresholds                                                                                                                                             |                                 |             |
| CRITICALFAILED    | Thresholds                                                                                                                                             |                                 |             |
| CRITICALJOBSTATUS | Set critical threshold for status (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last_job_status} =~ /failed/  |             |
| WARNINGJOBSTATUS  | Set warning threshold for status. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                 |             |
| WARNINGTOTAL      | Thresholds                                                                                                                                             |                                 |             |
| CRITICALTOTAL     | Thresholds                                                                                                                                             |                                 |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                    | --verbose                       |             |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Macro                 | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERINVENTORY       | Filter inventory name (Can use regexp)                                                              |                   |             |
| WARNINGFAILED         | Thresholds                                                                                          |                   |             |
| CRITICALFAILED        | Thresholds                                                                                          |                   |             |
| WARNINGGROUPSFAILED   | Thresholds                                                                                          |                   |             |
| CRITICALGROUPSFAILED  | Thresholds                                                                                          |                   |             |
| WARNINGGROUPSTOTAL    | Thresholds                                                                                          |                   |             |
| CRITICALGROUPSTOTAL   | Thresholds                                                                                          |                   |             |
| WARNINGHOSTSFAILED    | Thresholds                                                                                          |                   |             |
| CRITICALHOSTSFAILED   | Thresholds                                                                                          |                   |             |
| WARNINGHOSTSTOTAL     | Thresholds                                                                                          |                   |             |
| CRITICALHOSTSTOTAL    | Thresholds                                                                                          |                   |             |
| WARNINGSOURCESFAILED  | Thresholds                                                                                          |                   |             |
| CRITICALSOURCESFAILED | Thresholds                                                                                          |                   |             |
| WARNINGSOURCESTOTAL   | Thresholds                                                                                          |                   |             |
| CRITICALSOURCESTOTAL  | Thresholds                                                                                          |                   |             |
| WARNINGTOTAL          | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL         | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Macro              | Description                                                                                                                                            | Valeur par défaut               | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:------------|
| UNKNOWNJOBSTATUS   | Set unknown threshold for status (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last_job_status} =~ /default/ |             |
| FILTERNAME         | Filter job template name (Can use regexp)                                                                                                              |                                 |             |
| WARNINGCANCELED    | Thresholds                                                                                                                                             |                                 |             |
| CRITICALCANCELED   | Thresholds                                                                                                                                             |                                 |             |
| WARNINGDEFAULT     | Thresholds                                                                                                                                             |                                 |             |
| CRITICALDEFAULT    | Thresholds                                                                                                                                             |                                 |             |
| WARNINGFAILED      | Thresholds                                                                                                                                             |                                 |             |
| CRITICALFAILED     | Thresholds                                                                                                                                             |                                 |             |
| CRITICALJOBSTATUS  | Set critical threshold for status (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last_job_status} =~ /failed/  |             |
| WARNINGJOBSTATUS   | Set warning threshold for status. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                 |             |
| WARNINGNEVER       | Thresholds                                                                                                                                             |                                 |             |
| CRITICALNEVER      | Thresholds                                                                                                                                             |                                 |             |
| WARNINGPENDING     | Thresholds                                                                                                                                             |                                 |             |
| CRITICALPENDING    | Thresholds                                                                                                                                             |                                 |             |
| WARNINGRUNNING     | Thresholds                                                                                                                                             |                                 |             |
| CRITICALRUNNING    | Thresholds                                                                                                                                             |                                 |             |
| WARNINGSUCCESSFUL  | Thresholds                                                                                                                                             |                                 |             |
| CRITICALSUCCESSFUL | Thresholds                                                                                                                                             |                                 |             |
| WARNINGTOTAL       | Thresholds                                                                                                                                             |                                 |             |
| CRITICALTOTAL      | Thresholds                                                                                                                                             |                                 |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                    | --verbose                       |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME         | Filter job name (Can use regexp)                                                                    |                   |             |
| WARNINGCANCELED    | Thresholds                                                                                          |                   |             |
| CRITICALCANCELED   | Thresholds                                                                                          |                   |             |
| WARNINGDEFAULT     | Thresholds                                                                                          |                   |             |
| CRITICALDEFAULT    | Thresholds                                                                                          |                   |             |
| WARNINGFAILED      | Thresholds                                                                                          |                   |             |
| CRITICALFAILED     | Thresholds                                                                                          |                   |             |
| WARNINGPENDING     | Thresholds                                                                                          |                   |             |
| CRITICALPENDING    | Thresholds                                                                                          |                   |             |
| WARNINGRUNNING     | Thresholds                                                                                          |                   |             |
| CRITICALRUNNING    | Thresholds                                                                                          |                   |             |
| WARNINGSUCCESSFUL  | Thresholds                                                                                          |                   |             |
| CRITICALSUCCESSFUL | Thresholds                                                                                          |                   |             |
| WARNINGTOTAL       | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL      | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Macro                 | Description                                                                                                                                            | Valeur par défaut               | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:------------|
| UNKNOWNJOBSTATUS      | Set unknown threshold for status (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last_job_status} =~ /default/ |             |
| FILTERNAME            | Filter schedule name (Can use regexp)                                                                                                                  |                                 |             |
| WARNINGCANCELED       | Thresholds                                                                                                                                             |                                 |             |
| CRITICALCANCELED      | Thresholds                                                                                                                                             |                                 |             |
| WARNINGDEFAULT        | Thresholds                                                                                                                                             |                                 |             |
| CRITICALDEFAULT       | Thresholds                                                                                                                                             |                                 |             |
| WARNINGFAILED         | Thresholds                                                                                                                                             |                                 |             |
| CRITICALFAILED        | Thresholds                                                                                                                                             |                                 |             |
| CRITICALJOBSTATUS     | Set critical threshold for status (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display} | %{last_job_status} =~ /failed/  |             |
| WARNINGJOBSTATUS      | Set warning threshold for status. You can use the following variables: %{last\_job\_status}, %{display}                                                |                                 |             |
| WARNINGNEVER          | Thresholds                                                                                                                                             |                                 |             |
| CRITICALNEVER         | Thresholds                                                                                                                                             |                                 |             |
| WARNINGPENDING        | Thresholds                                                                                                                                             |                                 |             |
| CRITICALPENDING       | Thresholds                                                                                                                                             |                                 |             |
| WARNINGRUNNING        | Thresholds                                                                                                                                             |                                 |             |
| CRITICALRUNNING       | Thresholds                                                                                                                                             |                                 |             |
| WARNINGSTARTLASTTIME  | Thresholds                                                                                                                                             |                                 |             |
| CRITICALSTARTLASTTIME | Thresholds                                                                                                                                             |                                 |             |
| WARNINGSUCCESSFUL     | Thresholds                                                                                                                                             |                                 |             |
| CRITICALSUCCESSFUL    | Thresholds                                                                                                                                             |                                 |             |
| WARNINGTOTAL          | Thresholds                                                                                                                                             |                                 |             |
| CRITICALTOTAL         | Thresholds                                                                                                                                             |                                 |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                    | --verbose                       |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparait dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--mode=hosts \
	--hostname='10.0.0.1' \
	--username='' \
	--password='' \
	--custommode='api'  \
	--filter-name='' \
	--unknown-job-status='%{last_job_status} =~ /default/' \
	--warning-job-status='' \
	--critical-job-status='%{last_job_status} =~ /failed/' \
	--warning-total='' \
	--critical-total='' \
	--warning-failed='' \
	--critical-failed='' \
	--verbose\
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All hosts are ok | 'hosts.total.count'=12;;;0; 'hosts.failed.count'=0;;;0;total 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode          | Modèle de service associé           |
|:--------------|:------------------------------------|
| discovery     | Used for host discovery             |
| hosts         | App-Ansible-Tower-Hosts-Api         |
| inventories   | App-Ansible-Tower-Inventories-Api   |
| job-templates | App-Ansible-Tower-Job-Templates-Api |
| jobs          | App-Ansible-Tower-Jobs-Api          |
| schedules     | App-Ansible-Tower-Schedules-Api     |

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

### Options disponibles

#### Options génériques

Les options génériques quel que soit le mode sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Global |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Ansible Tower Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option           | Description                                                                                                                        | Type         |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --hostname       | Santricity hostname.                                                                                                               | Api          |
| --port           | Port used (Default: 80)                                                                                                            | Api          |
| --proto          | Specify https if needed (Default: 'http')                                                                                          | Api          |
| --username       | API username.                                                                                                                      | Api          |
| --password       | API password.                                                                                                                      | Api          |
| --api-path       | Specify api path (Default: '/api/v2')                                                                                              | Api          |
| --timeout        | Set timeout in seconds (Default: 10).                                                                                              | Api          |
| --http-peer-addr | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                | Http global  |
| --proxyurl       | Proxy URL. Eg: http://my.proxy:3128                                                                                                | Http global  |
| --proxypac       | Proxy pac file (can be a URL or a local file).                                                                                     | Http global  |
| --insecure       | Accept insecure SSL connections.                                                                                                   | Http global  |
| --http-backend   | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                            | Http global  |
| --ssl-opt        | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                          | Backend lwp  |
| --curl-opt       | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).   | Backend curl |

</TabItem>
<TabItem value="towercli" label="towercli">

| Option            | Description                                                                                       | Type     |
|:------------------|:--------------------------------------------------------------------------------------------------|:---------|
| --hostname        | Ansible Tower hostname (Default uses setting in 'tower config').                                  | Towercli |
| --username        | Ansible Tower username (Default uses setting in 'tower config').                                  | Towercli |
| --password        | Ansible Tower password (Default uses setting in 'tower config').                                  | Towercli |
| --nossl           | Use http connection.                                                                              | Towercli |
| --timeout         | Set timeout in seconds (Default: 50).                                                             | Towercli |
| --sudo            | Use 'sudo' to execute the command.                                                                | Towercli |
| --command         | Command to get information (Default: 'tower-cli'). Can be changed if you have output in a file.   | Towercli |
| --command-path    | Command path (Default: none).                                                                     | Towercli |
| --command-options | Command options (Default: none).                                                                  | Towercli |
| --proxyurl        | Proxy URL if any                                                                                  | Towercli |

</TabItem>
</Tabs>

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Option                   | Description                                                                                                                                              | Type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter host name (Can use regexp).                                                                                                                       | Mode |
| --display-failed-hosts   | Display failed hosts list in verbose output.                                                                                                             | Mode |
| --unknown-job-status     | Set unknown threshold for status (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   | Mode |
| --warning-job-status     | Set warning threshold for status. You can use the following variables: %{last\_job\_status}, %{display}                                                  | Mode |
| --critical-job-status    | Set critical threshold for status (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'failed'.                                                                                                                   | Mode |

</TabItem>
<TabItem value="Inventories" label="Inventories">

| Option                   | Description                                                                                                                                  | Type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-inventory       | Filter inventory name (Can use regexp).                                                                                                      | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'failed', 'hosts-total', 'hosts-failed', 'sources-total', 'sources-failed', 'groups-total', 'groups-failed'.    | Mode |

</TabItem>
<TabItem value="Job-Templates" label="Job-Templates">

| Option                   | Description                                                                                                                                              | Type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter job template name (Can use regexp).                                                                                                               | Mode |
| --launch-job-template-id | The job\_template id to launch.                                                                                                                          | Mode |
| --launch-inventory       | Specify inventory for job template to run.                                                                                                               | Mode |
| --launch-credential      | Specify machine credential for job template to run.                                                                                                      | Mode |
| --launch-tags            | Specify tagged actions in the playbook to run.                                                                                                           | Mode |
| --launch-limit           | Specify host limit for job template to run.                                                                                                              | Mode |
| --launch-extra-vars      | yaml format text that contains extra variables to pass on.                                                                                               | Mode |
| --launch-max-retries     | Number of retries to get job result once launched (Default: 5).                                                                                          | Mode |
| --launch-retry-interval  | Number of seconds between retries (Default : 10).                                                                                                        | Mode |
| --unknown-job-status     | Set unknown threshold for status (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   | Mode |
| --warning-job-status     | Set warning threshold for status. You can use the following variables: %{last\_job\_status}, %{display}                                                  | Mode |
| --critical-job-status    | Set critical threshold for status (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default', 'never'.                                               | Mode |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                   | Description                                                                                                  | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                              | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db               | Set Redis database index.                                                                                    | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --filter-name            | Filter job name (Can use regexp).                                                                            | Mode      |
| --display-failed-jobs    | Display failed jobs list in verbose output.                                                                  | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default'.            | Mode      |

</TabItem>
<TabItem value="Schedules" label="Schedules">

| Option                   | Description                                                                                                                                              | Type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter schedule name (Can use regexp).                                                                                                                   | Mode |
| --unknown-job-status     | Set unknown threshold for status (Default: '%{last\_job\_status} =~ /default/'). You can use the following variables: %{last\_job\_status}, %{display}   | Mode |
| --warning-job-status     | Set warning threshold for status. You can use the following variables: %{last\_job\_status}, %{display}                                                  | Mode |
| --critical-job-status    | Set critical threshold for status (Default: '%{last\_job\_status} =~ /failed/'). You can use the following variables: %{last\_job\_status}, %{display}   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'successful', 'failed', 'running', 'canceled', 'pending', 'default', 'never', 'start-last-time' (s).                        | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ansible_tower.pl \
	--plugin=apps::automation::ansible::tower::plugin \
	--mode=hosts \
    --help
```
