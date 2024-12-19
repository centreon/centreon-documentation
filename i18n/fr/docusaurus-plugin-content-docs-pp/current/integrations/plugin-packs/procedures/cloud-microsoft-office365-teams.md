---
id: cloud-microsoft-office365-teams
title: Office365 Teams
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Office365 Teams** apporte un modèle d'hôte :

* **Cloud-Microsoft-Office365-Teams-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Microsoft-Office365-Teams-Api-custom" label="Cloud-Microsoft-Office365-Teams-Api-custom">

| Alias          | Modèle de service                                         | Description                                          |
|:---------------|:----------------------------------------------------------|:-----------------------------------------------------|
| Devices-Usage  | Cloud-Microsoft-Office365-Teams-Devices-Usage-Api-custom  | Contrôle le nombre d'utilisateurs par type d'appareil |
| Users-Activity | Cloud-Microsoft-Office365-Teams-Users-Activity-Api-custom | Contrôle l'activité des utilisateurs                 |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Microsoft-Office365-Teams-Api-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Devices-Usage" label="Devices-Usage">

| Métrique                         | Unité |
|:---------------------------------|:------|
| active-devices                   | N/A   |
| teams.devices.windows.count      | count |
| teams.devices.mac.count          | count |
| teams.devices.web.count          | count |
| teams.devices.ios.count          | count |
| teams.devices.android.count      | count |
| teams.devices.windowsphone.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Users-Activity" label="Users-Activity">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| active-users                               | N/A   |
| teams.users.messages.team.total.count      | count |
| teams.users.messages.private.total.count   | count |
| teams.users.call.total.count               | count |
| teams.users.meeting.total.count            | count |
| *users*#teams.users.messages.team.count    | count |
| *users*#teams.users.messages.private.count | count |
| *users*#teams.users.call.count             | count |
| *users*#teams.users.meeting.count          | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Si vous n'avez pas encore créé votre compte sous Office 365, reportez-vous à la
documentation d'Office 365 Management ou suivez le lien dans la partie
'Aide supplémentaire'.

### Enregistrez une application

Les API de gestion Office 365 utilisent Azure AD pour assurer l’authentification
sécurisée des données dans Office 365. Pour accéder aux API de gestion
Office 365, vous devez enregistrer votre application dans Azure AD. Le terme
*Application* est utilisé comme concept, faisant référence non seulement au
programme d’application, mais également à son inscription Azure AD et à son rôle
lors des « dialogues » d’authentification/autorisation au moment de l’exécution.
(https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals)

### Spécifiez les autorisations dont votre application a besoin pour accéder aux API de gestion Office 365

Afin de récupérer les données de Teams Online, vous devez spécifier les
autorisations que votre application requiert dans le portail de gestion Azure :

* Microsoft Graph :
    * Reports.Read.All (Type : Application)
    * User.Read (Type : Delegated)
* Office365 Management APIs :
    * ServiceHealth.Read (Type : Application)
    * ActivityFeed.Read (Type : Application)

### Aide supplémentaire

Suivez le guide pratique pour obtenir une explication complète sur la façon d’enregistrer une demande et d’obtenir un **client ID** et un **secret ID** :
https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis

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
dnf install centreon-pack-cloud-microsoft-office365-teams
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-microsoft-office365-teams
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-microsoft-office365-teams
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-microsoft-office365-teams
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Office365 Teams**
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
dnf install centreon-plugin-Cloud-Microsoft-Office365-Teams-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Microsoft-Office365-Teams-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-microsoft-office365-teams-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Teams-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Microsoft-Office365-Teams-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OFFICE365CLIENTID     | Set Office 365 client ID                                                                                                                           |                   | X           |
| OFFICE365CLIENTSECRET | Set Office 365 client secret                                                                                                                       |                   | X           |
| OFFICE365TENANT       | Set Office 365 tenant ID                                                                                                                           |                   | X           |
| OFFICE365EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Devices-Usage" label="Devices-Usage">

| Macro                 | Description                                                                                                                                                  | Valeur par défaut | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS                 | Unit of thresholds ('%', 'count')                                                                                                                            | %                 |             |
| FILTERUSER            | Filter users                                                                                                                                                 |                   |             |
| FILTERCOUNTERS        | Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='windows'                                              |                   |             |
| WARNINGACTIVEDEVICES  | Warning threshold                                                                                                                                            |                   |             |
| CRITICALACTIVEDEVICES | Critical threshold                                                                                                                                           |                   |             |
| WARNINGANDROIDPHONE   | Warning threshold                                                                                                                                            |                   |             |
| CRITICALANDROIDPHONE  | Critical threshold                                                                                                                                           |                   |             |
| WARNINGIOS            | Warning threshold                                                                                                                                            |                   |             |
| CRITICALIOS           | Critical threshold                                                                                                                                           |                   |             |
| WARNINGMAC            | Warning threshold                                                                                                                                            |                   |             |
| CRITICALMAC           | Critical threshold                                                                                                                                           |                   |             |
| WARNINGWEB            | Warning threshold                                                                                                                                            |                   |             |
| CRITICALWEB           | Critical threshold                                                                                                                                           |                   |             |
| WARNINGWINDOWS        | Warning threshold                                                                                                                                            |                   |             |
| CRITICALWINDOWS       | Critical threshold                                                                                                                                           |                   |             |
| WARNINGWINDOWSPHONE   | Warning threshold                                                                                                                                            |                   |             |
| CRITICALWINDOWSPHONE  | Critical threshold                                                                                                                                           |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).             |                   |             |

</TabItem>
<TabItem value="Users-Activity" label="Users-Activity">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS                    | Unit of thresholds ('%', 'count')                                                                                                                | %                 |             |
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='total' (default: 'active\|total')         | active\|total     |             |
| FILTERUSER               | Filter users                                                                                                                                     |                   |             |
| WARNINGACTIVEUSERS       | Warning threshold                                                                                                                                |                   |             |
| CRITICALACTIVEUSERS      | Critical threshold                                                                                                                               |                   |             |
| WARNINGCALL              | Warning threshold                                                                                                                                |                   |             |
| CRITICALCALL             | Critical threshold                                                                                                                               |                   |             |
| WARNINGMEETING           | Warning threshold                                                                                                                                |                   |             |
| CRITICALMEETING          | Critical threshold                                                                                                                               |                   |             |
| WARNINGPRIVATECHAT       | Warning threshold                                                                                                                                |                   |             |
| CRITICALPRIVATECHAT      | Critical threshold                                                                                                                               |                   |             |
| WARNINGTEAMCHAT          | Warning threshold                                                                                                                                |                   |             |
| CRITICALTEAMCHAT         | Critical threshold                                                                                                                               |                   |             |
| WARNINGTOTALCALL         | Warning threshold                                                                                                                                |                   |             |
| CRITICALTOTALCALL        | Critical threshold                                                                                                                               |                   |             |
| WARNINGTOTALMEETING      | Warning threshold                                                                                                                                |                   |             |
| CRITICALTOTALMEETING     | Critical threshold                                                                                                                               |                   |             |
| WARNINGTOTALPRIVATECHAT  | Warning threshold                                                                                                                                |                   |             |
| CRITICALTOTALPRIVATECHAT | Critical threshold                                                                                                                               |                   |             |
| WARNINGTOTALTEAMCHAT     | Warning threshold                                                                                                                                |                   |             |
| CRITICALTOTALTEAMCHAT    | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_office365_teams_api.pl \
	--plugin=cloud::microsoft::office365::teams::plugin \
	--mode=devices-usage \
	--tenant='' \
	--client-id='' \
	--client-secret=''  \
	--filter-user=''  \
	--warning-windows='' \
	--critical-windows='' \
	--warning-mac='' \
	--critical-mac='' \
	--warning-web='' \
	--critical-web='' \
	--warning-ios='' \
	--critical-ios='' \
	--warning-android-phone='' \
	--critical-android-phone='' \
	--warning-windows-phone='' \
	--critical-windows-phone='' \
	--warning-active-devices='' \
	--critical-active-devices='' \
	--units=% \
	--filter-counters='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Windows: 30 Mac: 86 Web: 99 iOS: 53 Android Phone: 79 Windows Phone: 20 | 'active-devices'=28;;;;'teams.devices.windows.count'=30;;;0;'teams.devices.mac.count'=86;;;0;'teams.devices.web.count'=99;;;0;'teams.devices.ios.count'=53;;;0;'teams.devices.android.count'=79;;;0;'teams.devices.windowsphone.count'=20;;;0;
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
/usr/lib/centreon/plugins/centreon_office365_teams_api.pl \
	--plugin=cloud::microsoft::office365::teams::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                         | Modèle de service associé                                 |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| devices-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/teams/mode/devicesusage.pm)]   | Cloud-Microsoft-Office365-Teams-Devices-Usage-Api-custom  |
| users-activity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/teams/mode/usersactivity.pm)] | Cloud-Microsoft-Office365-Teams-Users-Activity-Api-custom |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Microsoft Office 365 Graph API      To connect to the Office 365 Graph API, you must register an     application.      Follow the 'How-to guide' at     https://docs.microsoft.com/en-us/graph/auth-register-app-v2?view=graph-r     est-1.0      This custom mode is using the 'OAuth 2.0 Client Credentials Grant Flow'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --tenant                                   | Set Office 365 tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-id                                | Set Office 365 client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-secret                            | Set Office 365 client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --login-endpoint                           | Set Office 365 login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --graph-endpoint                           | Set Office 365 graph endpoint URL (default: 'https://graph.microsoft.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Devices-Usage" label="Devices-Usage">

| Option            | Description                                                                                                                                                       |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-user     | Filter users.                                                                                                                                                     |
| --warning-*       | Warning threshold. Can be: 'active-devices', 'windows' (count), 'mac' (count), 'web' (count), 'ios' (count), 'android-phone' (count), 'windows-phone' (count).    |
| --critical-*      | Critical threshold. Can be: 'active-devices', 'windows' (count), 'mac' (count), 'web' (count), 'ios' (count), 'android-phone' (count), 'windows-phone' (count).   |
| --filter-counters | Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='windows'                                                   |
| --units           | Unit of thresholds (default: '%') ('%', 'count').                                                                                                                 |

</TabItem>
<TabItem value="Users-Activity" label="Users-Activity">

| Option            | Description                                                                                                                                                                                                                           |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-user     | Filter users.                                                                                                                                                                                                                         |
| --warning-*       | Warning threshold. Can be: 'active-users', 'total-team-chat' (count), 'total-private-chat' (count), 'total-call' (count), 'total-meeting' (count), 'team-chat' (count), 'private-chat' (count), 'call' (count), 'meeting' (count).    |
| --critical-*      | Critical threshold. Can be: 'active-users', 'total-team-chat' (count), 'total-private-chat' (count), 'total-call' (count), 'total-meeting' (count), 'team-chat' (count), 'private-chat' (count), 'call' (count), 'meeting' (count).   |
| --filter-counters | Only display some counters (regexp can be used). Example to hide per user counters: --filter-counters='total' (default: 'active\|total')                                                                                              |
| --units           | Unit of thresholds (default: '%') ('%', 'count').                                                                                                                                                                                     |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_office365_teams_api.pl \
	--plugin=cloud::microsoft::office365::teams::plugin \
	--mode=devices-usage \
	--help
```
