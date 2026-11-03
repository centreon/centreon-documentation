---
id: applications-cisco-cms-restapi
title: Cisco CMS
description: "Supervisez Cisco Meeting Server (CMS) via API REST : alarmes, appels, état des bases de données, licences et statut système."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Cisco CMS**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco CMS** apporte un modèle d'hôte :

* **App-Cisco-Cms-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Cisco-Cms-Restapi-custom" label="App-Cisco-Cms-Restapi-custom">

| Alias           | Modèle de service                            | Description                                                                |
|:----------------|:---------------------------------------------|:---------------------------------------------------------------------------|
| Alarms          | App-Cisco-Cms-Alarms-Restapi-custom          | Contrôle le nombre d'alarmes                                               |
| Calls           | App-Cisco-Cms-Calls-Restapi-custom           | Contrôle le nombre d'appels, le nombre de participants locaux et à distance |
| Database-Status | App-Cisco-Cms-Database-Status-Restapi-custom | Contrôle l'état des serveurs de bases de données                            |
| Licences        | App-Cisco-Cms-Licences-Restapi-custom        | Contrôle l'état des licences                                               |
| System-Status   | App-Cisco-Cms-System-Status-Restapi-custom   | Contrôle l'état du système et le trafic audio et vidéo                     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Cisco-Cms-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |


</TabItem>
<TabItem value="Calls" label="Calls">

| Nom                 | Unité        |
|:--------------------|:-------------|
| active-calls        | calls        |
| local-participants  | participants |
| remote-participants | participants |
| call-legs           | legs         |


</TabItem>
<TabItem value="Database-Status" label="Database-Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |


</TabItem>
<TabItem value="Licences" label="Licences">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |
| status | N/A   |


</TabItem>
<TabItem value="System-Status" label="System-Status">

| Nom                 | Unité |
|:--------------------|:------|
| status              | N/A   |
| active-legs         | legs  |
| completed-legs      | legs  |
| audio-outgoing-rate | b/s   |
| audio-incoming-rate | b/s   |
| video-outgoing-rate | b/s   |
| video-incoming-rate | b/s   |


</TabItem>
</Tabs>

## Prérequis

Pour plus d’informations, veuillez consulter la documentation officielle de Cisco Meeting Server : [Cisco Meeting Server Developer Guide](https://developer.cisco.com/docs/cisco-meeting-server/).

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
dnf install centreon-pack-applications-cisco-cms-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-cisco-cms-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-cisco-cms-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-cisco-cms-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco CMS**
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
dnf install centreon-plugin-Applications-Cisco-Cms-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Cisco-Cms-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-cisco-cms-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Cisco-Cms-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Cisco-Cms-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro          | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CMSAPIUSERNAME | Set API username                                                                                                           |                   | X           |
| CMSAPIPASSWORD | Set API password                                                                                                           |                   | X           |
| CMSAPIPROTO    | Specify https if needed (default: 'https')                                                                                 | https             |             |
| CMSAPIPORT     | API port (default: 445)                                                                                                    | 445               |             |
| CMSAPIURLPATH  | API url path (default: '/api/v1')                                                                                          | /api/v1           |             |
| CMSCUSTOMMODE  | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | xmlapi            |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Macro          | Description                                                                                                                                   | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE     | Filter by type (can be a regexp)                                                                                                              |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: '') You can use the following variables: %\{type\}, %\{active\_time\}   |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{type\}, %\{active\_time\} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                            |                   |             |

</TabItem>
<TabItem value="Calls" label="Calls">

| Macro                      | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS             | Only display some counters (regexp can be used). (example: --filter-counters='calls')              |                   |             |
| WARNINGACTIVECALLS         | Threshold                                                                                          |                   |             |
| CRITICALACTIVECALLS        | Threshold                                                                                          |                   |             |
| WARNINGCALLLEGS            | Threshold                                                                                          |                   |             |
| CRITICALCALLLEGS           | Threshold                                                                                          |                   |             |
| WARNINGLOCALPARTICIPANTS   | Threshold                                                                                          |                   |             |
| CRITICALLOCALPARTICIPANTS  | Threshold                                                                                          |                   |             |
| WARNINGREMOTEPARTICIPANTS  | Threshold                                                                                          |                   |             |
| CRITICALREMOTEPARTICIPANTS | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Database-Status" label="Database-Status">

| Macro          | Description                                                                                                                                                                           | Valeur par défaut  | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. (default: '%\{up\} !~ /true/i'). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\} | %\{up\} !~ /true/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. (default: ''). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\}                    |                    |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                    |                    |             |

</TabItem>
<TabItem value="Licences" label="Licences">

| Macro          | Description                                                                                                                                                                           | Valeur par défaut                                         | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. (default: ''). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\}                    | "%\{status\} eq ""activated"" && %\{expiry\_days\} \< 60" |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. (default: '%\{up\} !~ /true/i'). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\} | "%\{status\} eq ""activated"" && %\{expiry\_days\} \< 30" |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                    |                                                           |             |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Macro                     | Description                                                                                                                                                                 | Valeur par défaut         | Obligatoire |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| FILTERCOUNTERS            | Only display some counters (regexp can be used). (example: --filter-counters='rate')                                                                                        |                           |             |
| WARNINGACTIVELEGS         | Threshold                                                                                                                                                                   |                           |             |
| CRITICALACTIVELEGS        | Threshold                                                                                                                                                                   |                           |             |
| WARNINGAUDIOINCOMINGRATE  | Threshold                                                                                                                                                                   |                           |             |
| CRITICALAUDIOINCOMINGRATE | Threshold                                                                                                                                                                   |                           |             |
| WARNINGAUDIOOUTGOINGRATE  | Threshold                                                                                                                                                                   |                           |             |
| CRITICALAUDIOOUTGOINGRATE | Threshold                                                                                                                                                                   |                           |             |
| WARNINGCOMPLETEDLEGS      | Threshold                                                                                                                                                                   |                           |             |
| CRITICALCOMPLETEDLEGS     | Threshold                                                                                                                                                                   |                           |             |
| CRITICALSTATUS            | Define the conditions to match for the status to be CRITICAL. (default: '%\{activated\} !~ /true/i'). Can use special variables like: %\{activated\}, %\{cluster\_enabled\} | %\{activated\} !~ /true/i |             |
| WARNINGSTATUS             | Define the conditions to match for the status to be WARNING. (default: ''). Can use special variables like: %\{activated\}, %\{cluster\_enabled\}                           |                           |             |
| WARNINGVIDEOINCOMINGRATE  | Threshold                                                                                                                                                                   |                           |             |
| CRITICALVIDEOINCOMINGRATE | Threshold                                                                                                                                                                   |                           |             |
| WARNINGVIDEOOUTGOINGRATE  | Threshold                                                                                                                                                                   |                           |             |
| CRITICALVIDEOOUTGOINGRATE | Threshold                                                                                                                                                                   |                           |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                          |                           |             |

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
/usr/lib/centreon/plugins/centreon_cisco_cms_restapi.pl \
	--plugin=apps::cisco::cms::restapi::plugin \
	--mode=database-status \
	--custommode='xmlapi' \
	--hostname=10.0.0.1 \
	--url-path='/api/v1' \
	--username='xxxxxxx' \
	--password='xxxxxxx' \
	--port='445' \
	--proto='https' \
	--warning-status='"%\{status\} eq ""activated"" && %\{expiry\_days\} < 60"' \
	--critical-status='"%\{status\} eq ""activated"" && %\{expiry\_days\} < 30"'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All database hosts are ok
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_cms_restapi.pl \
	--plugin=apps::cisco::cms::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                  | Modèle de service associé                                                               |
|:--------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------|
| alarms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/cisco/cms/restapi/mode/alarms.pm)]                  | App-Cisco-Cms-Alarms-Restapi-custom                                                     |
| calls [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/cisco/cms/restapi/mode/calls.pm)]                    | App-Cisco-Cms-Calls-Restapi-custom                                                      |
| database-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/cisco/cms/restapi/mode/databasestatus.pm)] | App-Cisco-Cms-Database-Status-Restapi-custom<br />App-Cisco-Cms-Licences-Restapi-custom |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/cisco/cms/restapi/mode/licenses.pm)]              | Not used in this Monitoring Connector                                                   |
| system-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/cisco/cms/restapi/mode/systemstatus.pm)]     | App-Cisco-Cms-System-Status-Restapi-custom                                              |

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
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --url-path                                 |   API url path (default: '/api/v1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --port                                     |   API port (default: 445)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 |   Set API username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --password                                 |   Set API password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-type          |   Filter by type (can be a regexp).                                                                                                                                                                                                             |
| --warning-status       |   Define the conditions to match for the status to be WARNING (default: '') You can use the following variables: %\{type\}, %\{active\_time\}                                                                                                   |
| --critical-status      |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{type\}, %\{active\_time\}                                                                                                 |
| --memory               |   Only check new alarms.                                                                                                                                                                                                                        |

</TabItem>
<TabItem value="Calls" label="Calls">

| Option            | Description                                                                                                |
|:------------------|:-----------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='calls')                    |
| --warning-*       |   Warning threshold. Can be: 'active-calls', 'local-participants', 'remote-participants', 'call-legs'.     |
| --critical-*      |   Critical threshold. Can be: 'active-calls', 'local-participants', 'remote-participants', 'call-legs'.    |

</TabItem>
<TabItem value="Database-Status" label="Database-Status">

| Option            | Description                                                                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING. (default: ''). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\}                       |
| --critical-status |   Define the conditions to match for the status to be CRITICAL. (default: '%\{up\} !~ /true/i'). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\}    |

</TabItem>
<TabItem value="Licences" label="Licences">

| Option            | Description                                                                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING. (default: ''). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\}                       |
| --critical-status |   Define the conditions to match for the status to be CRITICAL. (default: '%\{up\} !~ /true/i'). Can use special variables like: %\{hostname\}, %\{master\}, %\{up\}, %\{sync\_behind\}    |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Option            | Description                                                                                                                                                                     |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='rate')                                                                                          |
| --warning-status  |   Define the conditions to match for the status to be WARNING. (default: ''). Can use special variables like: %\{activated\}, %\{cluster\_enabled\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL. (default: '%\{activated\} !~ /true/i'). Can use special variables like: %\{activated\}, %\{cluster\_enabled\}   |
| --warning-*       |   Warning threshold. Can be: 'active-legs', 'completed-legs', 'audio-outgoing-rate', 'audio-incoming-rate', 'video-outgoing-rate', 'video-incoming-rate'.                       |
| --critical-*      |   Critical threshold. Can be: 'active-legs', 'completed-legs', 'audio-outgoing-rate', 'audio-incoming-rate', 'video-outgoing-rate', 'video-incoming-rate'.                      |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_cms_restapi.pl \
	--plugin=apps::cisco::cms::restapi::plugin \
	--mode=database-status \
	--help
```
