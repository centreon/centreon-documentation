---
id: applications-dynamics-ax-nsclient-05-nrpe
title: Dynamics AX NSClient 0.5 NRPE
description: "Supervisez Dynamics AX via NSClient++ et NRPE, en suivant l'importation des fichiers RIS et l'état du service RecurringIntegrationsScheduler."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce connecteur de supervision permet de récupérer les métriques et les statuts collectés 
grâce à l'agent de monitoring NSClient++ et son serveur NRPE embarqué. Le connecteur permet de superviser :
* Windows Server OS à partir de la version 2003 SP2
* Windows (postes de travail) à partir de la version XP

## Contenu du pack

### Modèles

Le connecteur de supervision **Dynamics AX NSClient 0.5 NRPE** apporte un modèle d'hôte :

* **App-Dynamics-AX-NRPE-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Dynamics-AX-NRPE-custom" label="App-Dynamics-AX-NRPE-custom">

| Alias                       | Modèle de service                                       | Description                                                                      | 
|:----------------------------|:--------------------------------------------------------|:---------------------------------------------------------------------------------|
| RIS-Import-Input            | App-Dynamics-AX-RIS-Import-Input-NRPE-custom            | Contrôle permettant de vérifier la présence de fichiers à importer               | 
| RIS-Import-ProcessingErrors | App-Dynamics-AX-RIS-Import-ProcessingErrors-NRPE-custom | Contrôle permettant de vérifier les fichiers importés en échec                     |
| Service-RIS                 | App-Dynamics-AX-Service-RIS-NRPE-custom                 | Contrôle permettant de vérifier l'état du service RecurringIntegrationsScheduler |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Dynamics-AX-NRPE-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Nom   | Unité |
|:------|:----- |
| count | count |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Nom   | Unité |
|:------|:----- |
| count | count |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

Pas de métrique pour ce service.

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser les ressources *Dynamics AX* via NRPE, installez la version Centreon de l'agent NSClient++.
Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

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
dnf install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-dynamics-ax-nsclient-05-nrpe
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows NSClient API**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-windows-restapi
apt install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
yum install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Dynamics-AX-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NRPECLIENT       | Name of the plugin to use to talk with the NRPE3 daemon                                                                                    | check_nrpe        |             |
| NRPEPORT         | TCP port the NRPE3 daemon is listening on                                                                                                  | 5666              |             |
| NRPETIMEOUT      | Command timeout                                                                                                                            | 30                |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | -u -2 -P 8192     |             |
| EXTRAOPTIONS     | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Macro        | Description                                                                                                                              | Valeur par défaut                                                | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:-----------:|
| PATHS        | The path to search for files under                                                                                                       | C:/RIS/Import/RIS General Ledger/Input                           |             |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                                 | *.xlsx                                                           |             |
| TOPSYNTAX    | The top level syntax string                                                                                                              | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |             |
| DETAILSYNTAX | Detail level syntax                                                                                                                      | $\{name}                                                         |             |
| FILTER       | Filter which marks interesting items.                                                                                                    | none                                                             |             |
| WARNING      | Filter which marks items which generates a warning state.                                                                                | count > 5                                                        |             |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                               | age > -1d or count > 20                                          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | "empty-state=ok" show-all                                        |             |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Macro        | Description                                                                                                                              | Valeur par défaut                                                | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:-----------:|
| PATHS        | The path to search for files under                                                                                                       | C:/RIS/Import/RIS General Ledger/ProcessingErrors                |             |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                                 | *.xlsx                                                           |             |
| TOPSYNTAX    | The top level syntax string                                                                                                              | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |             |
| DETAILSYNTAX | Detail level syntax                                                                                                                      | $\{name}                                                         |             |
| FILTER       | Filter which marks interesting items.                                                                                                    | none                                                             |             |
| WARNING      | Filter which marks items which generates a warning state.                                                                                | count > 5                                                        |             |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                               | age > -1d or count > 20                                          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | "empty-state=ok" show-all                                        |             |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

| Macro        | Description                                                                                                                              | Valeur par défaut                   | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:-----------:|
| EXCLUDE      | A list of services to ignore (mainly useful in combination with service=*)                                                               |                                     |             |
| OK           | Filter which marks items which generates an ok state                                                                                     | state_is_ok()                       |             |
| SERVICE      | The service to check, set this to * to check all services                                                                                | RecurringIntegrationsScheduler      |             |
| TOPSYNTAX    | The top level syntax string                                                                                                              | $\{problem_list}                    |             |
| DETAILSYNTAX | Detail level syntax                                                                                                                      | $\{name}=$\{state} ($\{start_type}) |             |
| FILTER       | Filter which marks interesting items.                                                                                                    | none                                |             |
| WARNING      | Filter which marks items which generates a warning state.                                                                                | none                                |             |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                               | not state_is_ok()                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | 'perf-config=none'                  |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API si votre erreur ne correspond pas à l'un des cas suivants.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::windows::local::plugin' 'query'  ' \
	--list-mode
	
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                | Modèle de service associé                                                                                                                              |
|:------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]          | Not used in this Monitoring Connector                                                                                                                  |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/cmdreturn.pm)]               | Not used in this Monitoring Connector                                                                                                                  |
| list-certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/listcertificates.pm)] | Not used in this Monitoring Connector                                                                                                                  |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/liststorages.pm)]         | Not used in this Monitoring Connector                                                                                                                  |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)]       | Not used in this Monitoring Connector                                                                                                                  |
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/nsclient/restapi/mode/query.pm)]                   | App-Dynamics-AX-RIS-Import-Input-NRPE-custom<br />App-Dynamics-AX-RIS-Import-ProcessingErrors-NRPE-custom<br />App-Dynamics-AX-Service-RIS-NRPE-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]                  | Not used in this Monitoring Connector                                                                                                                  |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                           | Not used in this Monitoring Connector                                                                                                                  |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]                    | Not used in this Monitoring Connector                                                                                                                  |

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
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%\{http_code\} \< 200 or %\{http_code\} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::windows::local::plugin' 'query'  ' \
	--help
```