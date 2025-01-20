---
id: cloud-cloudfoundry-api
title: Cloud Foundry API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Cloud Foundry API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Cloud Foundry API** apporte un modèle d'hôte :

* **Cloud-Cloudfoundry-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Cloudfoundry-Api-custom" label="Cloud-Cloudfoundry-Api-custom">

| Alias           | Modèle de service                             | Description                      |
|:----------------|:----------------------------------------------|:---------------------------------|
| Apps-State      | Cloud-Cloudfoundry-Apps-State-Api-custom      | Contrôle l'état des applications |
| Instances-State | Cloud-Cloudfoundry-Instances-State-Api-custom | Contrôle l'état des instances    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Cloudfoundry-Api-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Apps-State" label="Apps-State">

| Nom                        | Unité |
|:---------------------------|:------|
| applications.started.count | count |
| applications.stopped.count | count |
| state                      | N/A   |
| state                      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Instances-State" label="Instances-State">

| Nom                     | Unité |
|:------------------------|:------|
| app-state               | N/A   |
| instances.running.count | count |
| instances.stopped.count | count |
| instances.crashed.count | count |
| instance-state          | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

* Votre collecteur Centreon doit être en mesure d'accéder à votre instance Cloud Foundry (vous devez disposer de son URL d'hébergement).
* Vous devez également disposer d'un compte utilisateur Cloud Foundry ayant les permissions nécessaires pour accéder aux données supervisées via l'API (applications, etc.). 
* Assurez-vous que le serveur Centreon peut communiquer avec l’API Cloud Foundry via le réseau. 
* Autorisez l'accès sortant vers l'URL de l'API (https://api./<domain/>) via les ports nécessaires (généralement 443 pour HTTPS).
* Vérifiez que le certificat SSL de l’API Cloud Foundry est valide et, si nécessaire, ajoutez-le aux certificats approuvés du collecteur Centreon.
* Pour plus d'information, référez-vous à la [documentation officielle Cloud Foundry](https://docs.cloudfoundry.org/).

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
dnf install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-cloudfoundry-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cloud Foundry**
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
dnf install centreon-plugin-Cloud-Cloudfoundry-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Cloudfoundry-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-cloudfoundry-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Cloudfoundry-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Cloudfoundry-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                   | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CLOUDFOUNDRYAPIHOSTNAME | Cloud Foundry API hostname                                                                                                 |                   |             |
| CLOUDFOUNDRYAPIUSERNAME | Cloud Foundry API username                                                                                                 |                   |             |
| CLOUDFOUNDRYAPIPASSWORD | Cloud Foundry API password                                                                                                 |                   |             |
| CLOUDFOUNDRYAPIPROTO    | Specify https if needed                                                                                                    | https             |             |
| CLOUDFOUNDRYAPIPORT     | Cloud Foundry API port                                                                                                     | 443               |             |
| CLOUDFOUNDRYAPIPATH     | Cloud Foundry API url path                                                                                                 | /v2               |             |
| CLOUDFOUNDRYCUSTOMMODE  | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | restapi           |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Apps-State" label="Apps-State">

| Macro            | Description                                                                                                                                      | Valeur par défaut      | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| ORGANIZATIONGUID | Only looks for apps from an organization                                                                                                         | .*                     |             |
| SPACEGUID        | Only looks for apps from a space                                                                                                                 | .*                     |             |
| FILTERNAME       | Filter apps name (can be a regexp)                                                                                                               | .*                     |             |
| WARNINGSTARTED   | Threshold                                                                                                                                        |                        |             |
| CRITICALSTARTED  | Threshold                                                                                                                                        |                        |             |
| CRITICALSTATE    | Threshold                                                                                                                                        | %\{state\} !~ /STARTED/i |             |
| WARNINGSTATE     | Threshold                                                                                                                                        |                        |             |
| WARNINGSTOPPED   | Threshold                                                                                                                                        |                        |             |
| CRITICALSTOPPED  | Threshold                                                                                                                                        |                        |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose              |             |

</TabItem>
<TabItem value="Instances-State" label="Instances-State">

| Macro                 | Description                                                                                                                                      | Valeur par défaut      | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| APPGUID               | App guid to look for                                                                                                                             | .*                     |             |
| CRITICALAPPSTATE      | Critical threshold for app state                                                                                                                 | %\{state\} !~ /STARTED/i |             |
| WARNINGAPPSTATE       | Warning threshold for app state                                                                                                                  |                        |             |
| WARNINGCRASHED        | Threshold                                                                                                                                        |                        |             |
| CRITICALCRASHED       | Threshold                                                                                                                                        |                        |             |
| CRITICALINSTANCESTATE | Critical threshold for instances state                                                                                                           | %\{state\} !~ /RUNNING/i |             |
| WARNINGINSTANCESTATE  | Warning threshold for instances state                                                                                                            |                        |             |
| WARNINGRUNNING        | Threshold                                                                                                                                        |                        |             |
| CRITICALRUNNING       | Threshold                                                                                                                                        |                        |             |
| WARNINGSTOPPED        | Threshold                                                                                                                                        |                        |             |
| CRITICALSTOPPED       | Threshold                                                                                                                                        |                        |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose              |             |

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
/usr/lib/centreon/plugins/centreon_cloudfoundry_restapi.pl \
	--plugin=cloud::cloudfoundry::restapi::plugin \
	--mode=apps-state \
	--custommode='restapi' \
	--hostname='10.0.0.1' \
	--api-path='/v2' \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--port='443' \
	--proto='https' \
	--organization-guid='.*' \
	--space-guid='.*' \
	--filter-name='.*' \
	--warning-state='' \
	--critical-state='%{state} !~ /STARTED/i' \
	--warning-started='' \
	--critical-started='' \
	--warning-stopped='' \
	--critical-stopped='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Started : 51099 Stopped : 45913 All apps state are ok | 'applications.started.count'=51099;;;0; 'applications.stopped.count'=45913;;;0; 
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
/usr/lib/centreon/plugins/centreon_cloudfoundry_restapi.pl \
	--plugin=cloud::cloudfoundry::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                            | Modèle de service associé                     |
|:------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| apps-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/appsstate.pm)]                 | Cloud-Cloudfoundry-Apps-State-Api-custom      |
| instances-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/instancesstate.pm)]       | Cloud-Cloudfoundry-Instances-State-Api-custom |
| list-apps [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/listapps.pm)]                   | Not used in this Monitoring Connector         |
| list-organizations [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/listorganizations.pm)] | Not used in this Monitoring Connector         |
| list-spaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/cloudfoundry/restapi/mode/listspaces.pm)]               | Not used in this Monitoring Connector         |

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
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
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
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 |   Cloud Foundry API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-path                                 |   Cloud Foundry API url path (default: '/v2')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-username                             |   Cloud Foundry API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-password                             |   Cloud Foundry API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --port                                     |   Cloud Foundry API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --username                                 |   Authorization endpoint username (default: 'cf')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --password                                 |   Authorization endpoint password (default: '')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Apps-State" label="Apps-State">

| Option              | Description                                                                            |
|:--------------------|:---------------------------------------------------------------------------------------|
| --organization-guid |   Only looks for apps from an organization.                                            |
| --space-guid        |   Only looks for apps from a space.                                                    |
| --filter-name       |   Filter apps name (can be a regexp).                                                  |
| --warning-*         |   Warning threshold for apps count based  on state (can be: 'started', 'stopped')      |
| --critical-*        |   Critical threshold for apps count based  on state (can be: 'started', 'stopped').    |

</TabItem>
<TabItem value="Instances-State" label="Instances-State">

| Option                    | Description                                                                                            |
|:--------------------------|:-------------------------------------------------------------------------------------------------------|
| --app-guid                |   App guid to look for.                                                                                |
| --warning-app-state       |   Warning threshold for app state.                                                                     |
| --critical-app-state      |   Critical threshold for app state (default: '%\{state\} !~ /STARTED/i').                                |
| --warning-instance-state  |   Warning threshold for instances state.                                                               |
| --critical-instance-state |   Critical threshold for instances state (default: '%\{state\} !~ /RUNNING/i').                          |
| --warning-*               |   Warning threshold for instances count based  on state (can be: 'running', 'stopped', 'crashed')      |
| --critical-*              |   Critical threshold for instances count based  on state (can be: 'running', 'stopped', 'crashed').    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cloudfoundry_restapi.pl \
	--plugin=cloud::cloudfoundry::restapi::plugin \
	--mode=apps-state \
	--help
```
