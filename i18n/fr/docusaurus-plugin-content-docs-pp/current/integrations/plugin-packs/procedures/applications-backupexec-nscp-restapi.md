---
id: applications-backupexec-nscp-restapi
title: Veritas Backup Exec NSCP Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision **Veritas Backup Exec NSCP Rest API** apporte un modèle d'hôte :

* **App-Backupexec-Nscp-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Backupexec-Nscp-Restapi-custom" label="App-Backupexec-Nscp-Restapi-custom">

| Alias   | Modèle de service                         | Description                                 | Découverte |
|:--------|:------------------------------------------|:--------------------------------------------|:-----------|
| Alerts  | App-Backupexec-Alerts-Nscp-Restapi-custom | Contrôle permettant de vérifier les alertes |            |
| Disks   | App-Backupexec-Disks-Nscp-Restapi-custom  | Contrôle permettant de vérifier les disques | X          |
| Jobs    | App-Backupexec-Jobs-Nscp-Restapi-custom   | Contrôle permettant de vérifier les jobs    |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-NSClient-05-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                       | Description                                                  |
|:--------------------------------------|:-------------------------------------------------------------|
| App-Backupexec-Nscp-Restapi-Disk-Name | Découvre les disques et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Nom                               | Unité |
|:----------------------------------|:------|
| alerts.severity.none.count        | count |
| alerts.severity.question.count    | count |
| alerts.severity.error.count       | count |
| alerts.severity.warning.count     | count |
| alerts.severity.information.count | count |
| alert status                      | N/A   |

</TabItem>
<TabItem value="Disks" label="Disks">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| disk status                             | N/A   |
| *disk_name*#disk.space.usage.bytes      | B     |
| *disk_name*#disk.space.free.bytes       | B     |
| *disk_name*#disk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Nom                 | Unité |
|:--------------------|:------|
| jobs.detected.count | count |
| job status          | N/A   |
| job long status     | N/A   |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser une ressource via NSClient++ API, installez la version Centreon de l'agent NSClient++ sur la ressource supervisée.
Suivez notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur Web / RestAPI** est correcte.

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
dnf install centreon-pack-applications-backupexec-nscp-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-backupexec-nscp-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-backupexec-nscp-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-backupexec-nscp-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Veritas Backup Exec NSCP Rest API**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash

```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash

```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash

```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash

```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-NSClient-05-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                     | Description                                                                                                                                | Valeur par défaut                                          | Obligatoire |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:-----------:|
| BEMCLIFILE                | Powershell module file (Default: C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli)                                               | C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli |             |
| NSCPRESTAPIPROTO          | Specify https if needed                                                                                                                    | https                                                      |             |
| NSCPRESTAPIPORT           | Port used                                                                                                                                  | 8443                                                       |             |
| NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --http-backend=curl --insecure                             |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro                       | Description                                                                                                                                                                     | Valeur par défaut          | Obligatoire |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| FILTERCATEGORY              | Only get alerts by category (can be a regexp)                                                                                                                                   |                            |             |
| FILTERSOURCE                | Filter alerts by source (can be a regexp)                                                                                                                                       |                            |             |
| FILTERSEVERITY              | Only get alerts by severity (can be a regexp)                                                                                                                                   |                            |             |
| WARNINGSEVERITYNONE         | Thresholds                                                                                                                                                                      |                            |             |
| CRITICALSEVERITYNONE        | Thresholds                                                                                                                                                                      |                            |             |
| WARNINGSEVERITYINFORMATION  | Thresholds                                                                                                                                                                      |                            |             |
| CRITICALSEVERITYINFORMATION | Thresholds                                                                                                                                                                      |                            |             |
| WARNINGSEVERITYQUESTION     | Thresholds                                                                                                                                                                      |                            |             |
| CRITICALSEVERITYQUESTION    | Thresholds                                                                                                                                                                      |                            |             |
| WARNINGSEVERITYWARNING      | Thresholds                                                                                                                                                                      |                            |             |
| CRITICALSEVERITYWARNING     | Thresholds                                                                                                                                                                      |                            |             |
| WARNINGSEVERITYERROR        | Thresholds                                                                                                                                                                      |                            |             |
| CRITICALSEVERITYERROR       | Thresholds                                                                                                                                                                      |                            |             |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING.You can use the following variables: %\{name}, %\{severity}, %\{source}, %\{category}, %\{timeraised}, %\{message}  | %\{severity} =~ /warning/i |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL.You can use the following variables: %\{name}, %\{severity}, %\{source}, %\{category}, %\{timeraised}, %\{message} | %\{severity} =~ /error/i   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                        | --verbose                  |  --verbose  |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro                  | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter disks by name (can be a regexp)                                                                                                   |                   |             |
| FILTERTYPE             | Filter disks by type (can be a regexp)                                                                                                   |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                                                               |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                                                               |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                                                               |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                                                               |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                                                               |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                                                               |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status}, %\{name}, %\{type}         |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status}, %\{name}, %\{type}        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | show-all          |  --verbose  |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro                 | Description                                                                                                                                                    | Valeur par défaut              | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| FILTERNAME            | Filter disks by name (can be a regexp)                                                                                                                         |                                |             |
| FILTERTYPE            | Filter disks by type (can be a regexp)                                                                                                                         |                                |             |
| FILTERSTARTTIME       | Filter job with start time greater than current time less value in seconds                                                                                     |                                |             |
| FILTERENDTIME         | Filter job with end time greater than current time less value in seconds                                                                                       | 86400                          |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive}  |                                |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive} | not %\{status} =~ /succeeded/i |             |
| WARNINGLONG           | Set warning threshold for long jobs. You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive}, %\{elapsed}             |                                |             |
| CRITICALLONG          | Set critical threshold for long jobs. You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive}, %\{elapsed}            |                                |             |
| WARNINGDETECTED       | Set warning threshold for detected jobs                                                                                                                        |                                |             |
| CRITICALDETECTED      | Set critical threshold for detected jobs                                                                                                                       |                                |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                       | --verbose                      |             |
</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --custommode=nsclient \
    --mode=query \
    --hostname='10.0.0.1' \
    --username='' \
    --password='' \
    --legacy-password='' \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='disks' \
    --arg=' --bemcli-file="C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli" \ 
    --filter-name="" \ 
    --filter-type="" \ 
    --warning-space-usage="" \ 
    --critical-space-usage="" \ 
    --warning-space-usage-free="" \ 
    --critical-space-usage-free="" \  
    --warning-space-usage-prct="" \ 
    --critical-space-usage-prct="" \ 
    --warning-status="" \ 
    --critical-status="" \ 
    --verbose'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All disks are ok | 'disk 1#disk.space.usage.bytes'=1000000B;;;0;100000000 'disk 1#disk.space.free.bytes'=99000000B;;;0;100000000 'disk 1#disk.space.usage.percentage'=1.00%;;;0;100 'disk 2#disk.space.usage.bytes'=1000000B;;;0;250000000 'disk 2#disk.space.free.bytes'=249000000B;;;0;250000000 'disk 2#disk.space.usage.percentage'=0.40%;;;0;100
checking disk 'disk 1' [type: tapeDriveDevice]
    status: enabled
    space usage total: 95.37 MB used: 976.56 KB (1.00%) free: 94.41 MB (99.00%)
checking disk 'disk 2' [type: deduplicationDiskStorageDevice]
    status: enabled
    space usage total: 238.42 MB used: 976.56 KB (0.40%) free: 237.46 MB (99.60%)
```

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
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg=' --bemcli-file="C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli" \ 
    --list-mode'
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                             | Modèle de service associé                 |
|:---------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| alert [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/backupexec/local/mode/alerts.pm)]        | App-Backupexec-Alerts-Nscp-Restapi-custom |
| disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/backupexec/local/mode/disks.pm)]          | App-Backupexec-Disks-Nscp-Restapi-custom  |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/backupexec/local/mode/jobs.pm)]           | App-Backupexec-Jobs-Nscp-Restapi-custom   |
| listdisks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/backup/backupexec/local/mode/listdisks.pm)] | Used for service discovery                |

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
<TabItem value="Alerts" label="Alerts">

| Option                          | Description                                                                                                                                                                                                            |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                       | Set timeout time for command execution (default: 50 sec)                                                                                                                                                               |
| --no-ps                         | Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                 |
| --command                       | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                 |
| --command-path                  | Command path (default: none).                                                                                                                                                                                          |
| --command-options               | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                |
| --ps-display                    | Display powershell script.                                                                                                                                                                                             |
| --ps-exec-only                  | Print powershell output.                                                                                                                                                                                               |
| --bemcli-file                   | Set powershell module file (default: 'C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli').                                                                                                                    |
| --filter-category               | Only get alerts by category (can be a regexp).                                                                                                                                                                         |
| --filter-source                 | Filter alerts by source (can be a regexp).                                                                                                                                                                             |
| --filter-severity               | Only get alerts by severity (can be a regexp).                                                                                                                                                                         |
| --warning-status                | Define the conditions to match for the status to be WARNING (default: '%\{severity} =~ /warning/i') You can use the following variables: %\{name}, %\{severity}, %\{source}, %\{category}, %\{timeraised}, %\{message} |
| -critical-status                | Define the conditions to match for the status to be CRITICAL (default: '%\{severity} =~ /error/i').You can use the following variables: %\{name}, %\{severity}, %\{source}, %\{category}, %\{timeraised}, %\{message}  |
| --warning-severity-none         | Thresholds.                                                                                                                                                                                                            |
| --critical-severity-none        | Thresholds.                                                                                                                                                                                                            |
| --warning-severity-information  | Thresholds.                                                                                                                                                                                                            |
| --critical-severity-information | Thresholds.                                                                                                                                                                                                            |
| --warning-severity-question     | Thresholds.                                                                                                                                                                                                            |
| --critical-severity-question    | Thresholds.                                                                                                                                                                                                            |
| --warning-severity-warning      | Thresholds.                                                                                                                                                                                                            |
| --critical-severity-warning     | Thresholds.                                                                                                                                                                                                            |
| --warning-severity-error        | Thresholds.                                                                                                                                                                                                            |
| --critical-severity-error       | Thresholds.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                      | Description                                                                                                                            |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                   | Set timeout time for command execution (default: 50 sec)                                                                               |
| --no-ps                     | Don't encode powershell. To be used with --command and 'type' command.                                                                 |
| --command                   | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!! |
| --command-path              | Command path (default: none).                                                                                                          |
| --command-options           | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                |
| --ps-display                | Display powershell script.                                                                                                             |
| --ps-exec-only              | Print powershell output.                                                                                                               |
| --bemcli-file               | Set powershell module file (default: 'C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli').                                    |
| --filter-name               | Filter disks by name (can be a regexp).                                                                                                |
| --filter-type               | Filter disks by type (can be a regexp).                                                                                                |
| --warning-status            | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status}, %\{name}, %\{type}.      |
| --critical-status           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status}, %\{name}, %\{type}.     |
| --warning-space-usage       | Thresholds.                                                                                                                            |
| --critical-space-usage      | Thresholds.                                                                                                                            |
| --warning-space-usage-free  | Thresholds.                                                                                                                            |
| --critical-space-usage-free | Thresholds.                                                                                                                            |
| --warning-space-usage-prtc  | Thresholds.                                                                                                                            |
| --critical-space-usage-prct | Thresholds.                                                                                                                            |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option              | Description                                                                                                                                                                                                 |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout           | Set timeout time for command execution (default: 50 sec)                                                                                                                                                    |
| --no-ps             | Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                      |
| --command           | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                      |
| --command-path      | Command path (default: none).                                                                                                                                                                               |
| --command-options   | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                     |
| --ps-display        | Display powershell script.                                                                                                                                                                                  |
| --ps-exec-only      | Print powershell output.                                                                                                                                                                                    |
| --bemcli-file       | Set powershell module file (default: 'C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli').                                                                                                         |
| --filter-name       | Filter disks by name (can be a regexp).                                                                                                                                                                     |
| --filter-type       | Filter disks by type (can be a regexp).                                                                                                                                                                     |
| --filter-start-time | Filter job with start time greater than current time less value in seconds.                                                                                                                                 |
| --filter-end-time   | Filter job with end time greater than current time less value in seconds (default: 86400).                                                                                                                  |
| --warning-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive}.                                              |
| --critical-status   | Define the conditions to match for the status to be CRITICAL (default: 'not %\{status} =~ /succeeded/i'). You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive}. |
| --warning-long      | Set warning threshold for long jobs. You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive}, %\{elapsed}.                                                         |
| --critical-long     | Set critical threshold for long jobs. You can use the following variables: %\{name}, %\{status}, %\{subStatus}, %\{type}, %\{isActive}, %\{elapsed}.                                                        |
| -warning-detected   | Set warning threshold for detected jobs.                                                                                                                                                                    |
| --critical-detected | Set critical threshold for detected jobs.                                                                                                                                                                   |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --command=check_centreon_plugins \
    --arg='apps::backup::backupexec::local::plugin' \
    --arg='disks' \
    --arg=' --bemcli-file="C:/Program Files/Veritas/Backup Exec/Modules/BEMCLI/bemcli" \ 
    --help'
 ```