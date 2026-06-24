---
id: applications-monitoring-ntopng-restapi
slug: /applications-monitoring-ntopng-restapi
title: NtopNG Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **NtopNG RestAPI**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **NtopNG RestAPI** apporte un modèle d'hôte :

* **App-Monitoring-Ntopng-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Ntopng-Restapi-custom" label="App-Monitoring-Ntopng-Restapi-custom">

| Alias          | Modèle de service                                   | Description                             |
|:---------------|:----------------------------------------------------|:----------------------------------------|
| Alerts         | App-Monitoring-Ntopng-Restapi-Alerts-custom         | Contrôle les alertes                    |
| Netflow-Health | App-Monitoring-Ntopng-Restapi-Netflow-Health-custom | Contrôle l'état de santé global netflow |
| Probe-Health   | App-Monitoring-Ntopng-Restapi-Probe-Health-custom   | Contrôle l'état de santé de la sonde    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Ntopng-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                               | Description                        |
|:-----------|:------------------------------------------------|:-----------------------------------|
| Host-Flows | App-Monitoring-Ntopng-Restapi-Host-Flows-custom | Contrôle les flux réseau d'un hôte |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| alerts.severity.info.count               | count |
| alerts.severity.warning.count            | count |
| alerts.severity.error.count              | count |
| status                                   | N/A   |
| *alarm_types*#alerts.type.detected.count | count |

</TabItem>
<TabItem value="Host-Flows" label="Host-Flows">

| Nom                            | Unité |
|:-------------------------------|:------|
| packets-received               | N/A   |
| packets-sent                   | N/A   |
| host.traffic.in.bitspersecond  | b/s   |
| host.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Netflow-Health" label="Netflow-Health">

| Nom                          | Unité |
|:-----------------------------|:------|
| flows.detected.count         | count |
| flows.alerted.detected.count | count |
| flows.alerted.percentage     | %     |
| packets.download.persecond   | /s    |
| packets.upload.persecond     | /s    |
| packets.dropped.persecond    | /s    |
| traffic.in.bitspersecond     | bps   |
| traffic.out.bitspersecond    | bps   |

</TabItem>
<TabItem value="Probe-Health" label="Probe-Health">

| Nom                        | Unité |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |
| cpu.load.percentage        | %     |
| memory.usage.percentage    | %     |
| alerts.dropped.persecond   | /s    |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser votre NtopNG, l'API Rest doit être configurée.
cf: https://www.ntop.org/guides/ntopng/api/

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
dnf install centreon-pack-applications-monitoring-ntopng-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-ntopng-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-ntopng-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-ntopng-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **NtopNG RestAPI**
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
dnf install centreon-plugin-Applications-Monitoring-Ntopng-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Ntopng-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-ntopng-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Ntopng-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Ntopng-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTOPNGAPIUSERNAME     | API username                                                                                         |                   | X           |
| NTOPNGAPIPASSWORD     | API password                                                                                         |                   | X           |
| NTOPNGAPIPROTOCOL     | Specify https if needed (default: 'http')                                                            | http              |             |
| NTOPNGAPIPORT         | Port used (default: 3000)                                                                            | 3000              |             |
| NTOPNGAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro                   | Description                                                                                                                                                                                   | Valeur par défaut           | Obligatoire |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| INTERFACE               | Interface name to check (0 by default)                                                                                                                                                        | 0                           |             |
| PERIOD                  | Set period to check new alarms. Can be: 'last-5mns' (default), 'last-hour'                                                                                                                    | last-5mns                   |             |
| FILTERTYPE              | Filter alerts by type (can be a regexp)                                                                                                                                                       |                             |             |
| FILTERSEVERITY          | Only get alerts by severity (can be a regexp)                                                                                                                                                 |                             |             |
| WARNINGSEVERITYWARNING  | Threshold                                                                                                                                                                                     |                             |             |
| CRITICALSEVERITYWARNING | Threshold                                                                                                                                                                                     |                             |             |
| WARNINGSEVERITYERROR    | Threshold                                                                                                                                                                                     |                             |             |
| CRITICALSEVERITYERROR   | Threshold                                                                                                                                                                                     |                             |             |
| WARNINGSEVERITYINFO     | Threshold                                                                                                                                                                                     |                             |             |
| CRITICALSEVERITYINFO    | Threshold                                                                                                                                                                                     |                             |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor/i') You can use the following variables: %\{severity\}, %\{type\}, %\{timeraised\}             | %\{severity\} =~ /warning/i |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/i'). You can use the following variables: %\{severity\}, %\{type\}, %\{timeraised\} | %\{severity\} =~ /error/i   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                            | --verbose                   |             |

</TabItem>
<TabItem value="Host-Flows" label="Host-Flows">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACE               | Interface name to check (0 by default)                                                             | 0                 |             |
| IP                      | Set IP Address to monitor (required)                                                               |                   |             |
| WARNINGPACKETSRECEIVED  | Threshold                                                                                          |                   |             |
| CRITICALPACKETSRECEIVED | Threshold                                                                                          |                   |             |
| WARNINGPACKETSSENT      | Threshold                                                                                          |                   |             |
| CRITICALPACKETSSENT     | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICIN        | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICIN       | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUT       | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUT      | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Netflow-Health" label="Netflow-Health">

| Macro                        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACE                    | Interface name to check (0 by default)                                                             | 0                 |             |
| WARNINGFLOWSALERTEDDETECTED  | Threshold                                                                                          |                   |             |
| CRITICALFLOWSALERTEDDETECTED | Threshold                                                                                          |                   |             |
| WARNINGFLOWSALERTEDPRCT      | Threshold                                                                                          |                   |             |
| CRITICALFLOWSALERTEDPRCT     | Threshold                                                                                          |                   |             |
| WARNINGFLOWSDETECTED         | Threshold                                                                                          |                   |             |
| CRITICALFLOWSDETECTED        | Threshold                                                                                          |                   |             |
| WARNINGPACKETSDOWNLOAD       | Threshold                                                                                          |                   |             |
| CRITICALPACKETSDOWNLOAD      | Threshold                                                                                          |                   |             |
| WARNINGPACKETSDROPPED        | Threshold                                                                                          |                   |             |
| CRITICALPACKETSDROPPED       | Threshold                                                                                          |                   |             |
| WARNINGPACKETSUPLOAD         | Threshold                                                                                          |                   |             |
| CRITICALPACKETSUPLOAD        | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICIN             | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICIN            | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUT            | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUT           | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Probe-Health" label="Probe-Health">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACE              | Interface name to check (0 by default)                                                             | 0                 |             |
| WARNINGCPULOAD         | Threshold                                                                                          |                   |             |
| CRITICALCPULOAD        | Threshold                                                                                          |                   |             |
| WARNINGCPUUTILIZATION  | Threshold                                                                                          |                   |             |
| CRITICALCPUUTILIZATION | Threshold                                                                                          |                   |             |
| WARNINGDROPPEDALERTS   | Threshold                                                                                          |                   |             |
| CRITICALDROPPEDALERTS  | Threshold                                                                                          |                   |             |
| WARNINGMEMORYUSAGE     | Threshold                                                                                          |                   |             |
| CRITICALMEMORYUSAGE    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
	--plugin=apps::monitoring::ntopng::restapi::plugin \
	--mode=probe-health \
	--hostname='10.0.0.1' \
	--port='3000' \
	--proto='http' \
	--api-username='xxxxxxx' \
	--api-password='xxxxxxx'  \
	--interface='0' \
	--warning-cpu-utilization='' \
	--critical-cpu-utilization='' \
	--warning-cpu-load='' \
	--critical-cpu-load='' \
	--warning-memory-usage='' \
	--critical-memory-usage='' \
	--warning-dropped-alerts='' \
	--critical-dropped-alerts=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: cpu utilization: 81311% cpu load: 85399 memory used: 83077 % dropped alerts: 78041/s | 'cpu.utilization.percentage'=81311%;;;0;100 'cpu.load.percentage'=85399;;;0; 'memory.usage.percentage'=83077%;;;0;100 'alerts.dropped.persecond'=78041/s;;;0;
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
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
	--plugin=apps::monitoring::ntopng::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                        | Modèle de service associé                           |
|:--------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/ntopng/restapi/mode/alerts.pm)]                | App-Monitoring-Ntopng-Restapi-Alerts-custom         |
| host-flows [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/ntopng/restapi/mode/hostflows.pm)]         | App-Monitoring-Ntopng-Restapi-Host-Flows-custom     |
| netflow-health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/ntopng/restapi/mode/netflowhealth.pm)] | App-Monitoring-Ntopng-Restapi-Netflow-Health-custom |
| probe-health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/ntopng/restapi/mode/probehealth.pm)]     | App-Monitoring-Ntopng-Restapi-Probe-Health-custom   |

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
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     |   Port used (default: 3000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-username                             |   API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             |   API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option                   | Description                                                                                                                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-type            |   Filter alerts by type (can be a regexp).                                                                                                                                                        |
| --filter-severity        |   Only get alerts by severity (can be a regexp).                                                                                                                                                  |
| --interface              |   Interface name to check (0 by default)                                                                                                                                                          |
| --period                 |   Set period to check new alarms. Can be: 'last-5mns' (default), 'last-hour'                                                                                                                      |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor/i') You can use the following variables: %\{severity\}, %\{type\}, %\{timeraised\}               |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/i'). You can use the following variables: %\{severity\}, %\{type\}, %\{timeraised\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'severity-info', 'severity-warning', 'severity-error'.                                                                                                                      |

</TabItem>
<TabItem value="Host-Flows" label="Host-Flows">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --interface              |   Interface name to check (0 by default).                                                 |
| --ip                     |   Set IP Address to monitor (required).                                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'packets-received', 'packets-sent', 'traffic-in', 'traffic-out'.    |

</TabItem>
<TabItem value="Netflow-Health" label="Netflow-Health">

| Option                   | Description                                                                                                                                                                       |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --interface              |   Interface name to check (0 by default).                                                                                                                                         |
| --warning-* --critical-* |   Thresholds. Can be: 'flows-detected', 'flows-alerted-detected', 'flows-alerted-prct',  'packets-download', 'packets-upload', 'packets-dropped', 'traffic-in', 'traffic-out'.    |

</TabItem>
<TabItem value="Probe-Health" label="Probe-Health">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --interface              |   Interface name to check (0 by default).                                                 |
| --warning-* --critical-* |   Thresholds. Can be: 'cpu-utilization', 'cpu-load', 'memory-usage', 'dropped-alerts'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
	--plugin=apps::monitoring::ntopng::restapi::plugin \
	--mode=probe-health \
	--help
```
