---
id: network-keysight-nvos-restapi
title: Keysight NVOS Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Keysight NVOS Rest API** apporte un modèle d'hôte :

* **Net-Keysight-Nvos-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Keysight-Nvos-Restapi" label="Net-Keysight-Nvos-Restapi">

| Alias    | Modèle de service                  | Description                                                 |
|:---------|:-----------------------------------|:------------------------------------------------------------|
| Hardware | Net-Keysight-Nvos-Hardware-Restapi | Contrôle l'état du matériel                                 |
| Time     | Net-Keysight-Nvos-Time-Restapi     | Contrôle le décalage de temps                               |
| Uptime   | Net-Keysight-Nvos-Uptime-Restapi   | Durée depuis laquelle l'équipement tourne sans interruption |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Keysight-Nvos-Restapi** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                         | Description                     | Découverte |
|:----------------|:------------------------------------------|:--------------------------------|:-----------|
| Dynamic-Filters | Net-Keysight-Nvos-Dynamic-Filters-Restapi | Contrôle les filtres dynamiques | X          |
| Ports           | Net-Keysight-Nvos-Ports-Restapi           | Contrôle les ports              | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                               | Description                                                |
|:----------------------------------------------|:-----------------------------------------------------------|
| Net-Keysight-Nvos-Restapi-Dynamic-Filter-Name | Découvre les filtres dynamiques et supervise l'utilisation |
| Net-Keysight-Nvos-Restapi-Port-Name           | Découvre les ports et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| df~dynamic_filter.traffic.pass.bytespersecond | B/s   |
| df~dynamic_filter.traffic.insp.bytespersecond | B/s   |
| df~dynamic_filter.packets.denied.count        | count |
| df~dynamic_filter.packets.pass.count          | count |
| df~dynamic_filter.packets.insp.count          | count |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| temperatures#temperature-status           | N/A   |
| temperatures#hardware.temperature.celsius |       |
| fans.failed.count                         | count |
| psus#psu-status                           | N/A   |

</TabItem>
<TabItem value="Ports" label="Ports">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| ports~license-status                  | N/A   |
| ports~port.traffic.out.percentage     | %     |
| ports~port.traffic.out.bytespersecond | B/s   |
| ports~port.packets.out.count          | count |
| ports~port.packets.dropped.count      | count |
| ports~port.packets.pass.count         | count |
| ports~port.packets.insp.count         | count |

</TabItem>
<TabItem value="Time" label="Time">

| Métrique            | Unité |
|:--------------------|:------|
| ntp-status          | N/A   |
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec des droits de lecture sur l'[Automation API](https://docs.bmc.com/docs/automation-api/918/) Control-M est nécessaire.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquets
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-keysight-nvos-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Keysight NVOS Rest API**
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
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-keysight-nvos-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Keysight-Nvos-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Keysight-Nvos-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                       | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| KEYSIGHTNVOSAPIPASSWORD     | API password                                                                                          |                   |             |
| KEYSIGHTNVOSAPIPORT         | Port used                                                                                             | 8000              |             |
| KEYSIGHTNVOSAPIPROTO        | Specify https if needed                                                                               | https             |             |
| KEYSIGHTNVOSAPIUSERNAME     | API username                                                                                          |                   |             |
| KEYSIGHTNVOSAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Macro                 | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME            | Filter dynamic filters by name (can be a regexp)                                                    |                   |             |
| WARNINGPACKETSDENIED  |                                                                                                     |                   |             |
| CRITICALPACKETSDENIED |                                                                                                     |                   |             |
| WARNINGPACKETSINSP    | Thresholds                                                                                          |                   |             |
| CRITICALPACKETSINSP   | Thresholds                                                                                          |                   |             |
| WARNINGPACKETSPASS    | Thresholds                                                                                          |                   |             |
| CRITICALPACKETSPASS   | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICINSP    |                                                                                                     |                   |             |
| CRITICALTRAFFICINSP   |                                                                                                     |                   |             |
| WARNINGTRAFFICPASS    |                                                                                                     |                   |             |
| CRITICALTRAFFICPASS   |                                                                                                     |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro                     | Description                                                                                                                     | Valeur par défaut      | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:------------|
| UNKNOWNTEMPERATURESTATUS  | Set unknown threshold for status (Default : '%{status} eq "unknown"'). You can use the following variables: %{status}, %{class} | %{status} eq "unknown" |             |
| WARNINGFANSFAILED         | Thresholds                                                                                                                      |                        |             |
| CRITICALFANSFAILED        | Thresholds                                                                                                                      |                        |             |
| CRITICALPSUSTATUS         |                                                                                                                                 | %{status} eq "bad"     |             |
| WARNINGPSUSTATUS          | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                       |                        |             |
| WARNINGTEMPERATURE        | Thresholds                                                                                                                      |                        |             |
| CRITICALTEMPERATURE       | Thresholds                                                                                                                      |                        |             |
| WARNINGTEMPERATURESTATUS  | Set warning threshold for status (Default : '%{status} eq "warn"'). You can use the following variables: %{status}, %{class}    | %{status} eq "warn"    |             |
| CRITICALTEMPERATURESTATUS | Set critical threshold for status (Default: '%{status} eq "hot"'); You can use the following variables: %{status}, %{class}     | %{status} eq "hot"     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                             | --verbose              |             |

</TabItem>
<TabItem value="Ports" label="Ports">

| Macro                  | Description                                                                                                                                                                                     | Valeur par défaut                                            | Obligatoire |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|:------------|
| FILTERNAME             | Filter ports by name (can be a regexp)                                                                                                                                                          |                                                              |             |
| WARNINGLICENSESTATUS   | Set warning threshold for status (Default: '%{status} =~ /invalid\_software\_version/'). You can use the following variables: %{status}, %{name}                                                | %{status} =~ /invalid_software_version/                      |             |
| CRITICALLICENSESTATUS  | Set critical threshold for status. You can use the following variables: %{status}, %{name}                                                                                                      |                                                              |             |
| CRITICALLINKSTATUS     | Set critical threshold for status (Default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name} | %{adminStatus} eq "enabled" and %{operationalStatus} ne "up" |             |
| WARNINGLINKSTATUS      | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                            |                                                              |             |
| WARNINGPACKETSDROPPED  | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSDROPPED | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGPACKETSINSP     | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSINSP    | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGPACKETSOUT      | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSOUT     | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGPACKETSPASS     | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALPACKETSPASS    | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGTRAFFICOUT      | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALTRAFFICOUT     | Thresholds                                                                                                                                                                                      |                                                              |             |
| WARNINGTRAFFICOUTPRCT  | Thresholds                                                                                                                                                                                      |                                                              |             |
| CRITICALTRAFFICOUTPRCT | Thresholds                                                                                                                                                                                      |                                                              |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                             | --verbose                                                    |             |

</TabItem>
<TabItem value="Time" label="Time">

| Macro             | Description                                                                                                                         | Valeur par défaut               | Obligatoire |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:------------|
| TIMEZONE          | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'                                              |                                 |             |
| NTPHOSTNAME       | Set the ntp hostname (if not set, localtime is used)                                                                                |                                 |             |
| NTPPORT           | Set the ntp port (Default: 123)                                                                                                     |                                 |             |
| CRITICALNTPSTATUS | Set thresholds for status (Default critical: '%{status} !~ /in\_reach\|in\_sync/i')  You can use the following variables: %{status} | %{status} !~ /in_reach\|in_sync/ |             |
| WARNINGNTPSTATUS  |                                                                                                                                     |                                 |             |
| WARNINGOFFSET     | Time offset warning threshold (in seconds)                                                                                          |                                 |             |
| CRITICALOFFSET    | Time offset critical Threshold (in seconds)                                                                                         |                                 |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                 | --verbose                       |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                 | Valeur par défaut | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| UNIT           | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                   |             |
| WARNINGUPTIME  | Threshold warning                                                                                                                                           |                   |             |
| CRITICALUPTIME | Threshold critical                                                                                                                                          |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                         |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=hardware \
	--hostname='10.0.0.1' \
	--proto='https' \
	--port='8000' \
	--api-username='username' \
	--api-password='*****'  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: temperature 'MAIN' status: normal, reading: 40 C - all power supplies are ok | 'MAIN#hardware.temperature.celsius'=40C;;;;
temperature 'MAIN' status: normal, reading: 40 C
power supply 'power_module_a' status: good
power supply 'power_module_b' status: good
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode                 | Modèle de service associé                 |
|:---------------------|:------------------------------------------|
| dynamic-filters      | Net-Keysight-Nvos-Dynamic-Filters-Restapi |
| hardware             | Net-Keysight-Nvos-Hardware-Restapi        |
| list-dynamic-filters | Used for service discovery                |
| list-ports           | Used for service discovery                |
| ports                | Net-Keysight-Nvos-Ports-Restapi           |
| time                 | Net-Keysight-Nvos-Time-Restapi            |
| uptime               | Net-Keysight-Nvos-Uptime-Restapi          |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global       |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global       |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --version                                  | Display the plugin's version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global       |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get the an information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                         | Global       |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Global       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global       |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                           | Output       |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                            | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output       |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.\*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output       |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                              | Output       |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output       |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --output-ignore-label                      | Remove the status label from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --float-precision                          | Set the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --source-encoding                          | Set encoding of monitoring sources (in some cases. Default: 'UTF-8').      Keysight NVOS API                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --port                                     | Port used (Default: 8000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --timeout                                  | Set timeout in seconds (Default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be a URL or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Option                   | Description                                                                                                                 | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                  | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                             | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                     | Retention |
| --redis-db               | Set Redis database index.                                                                                                   | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                        | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                              | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                         | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                          | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                  | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                          | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                               | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                   | Retention |
| --filter-name            | Filter dynamic filters by name (can be a regexp).                                                                           | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.    | Mode      |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                        | Description                                                                                                                       | Type |
|:------------------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-temperature-status  | Set unknown threshold for status (Default : '%{status} eq "unknown"'). You can use the following variables: %{status}, %{class}   | Mode |
| --warning-temperature-status  | Set warning threshold for status (Default : '%{status} eq "warn"'). You can use the following variables: %{status}, %{class}      | Mode |
| --critical-temperature-status | Set critical threshold for status (Default: '%{status} eq "hot"'); You can use the following variables: %{status}, %{class}       | Mode |
| --unknown-psu-status          | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                         | Mode |
| --warning-psu-status          | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                         | Mode |
| --critical-status             | Set critical threshold for status (Default: '%{status} eq "bad"'); You can use the following variables: %{status}, %{name}        | Mode |
| --warning-* --critical-*      | Thresholds. Can be: 'temperature', 'fans-failed'.                                                                                 | Mode |

</TabItem>
<TabItem value="Ports" label="Ports">

| Option                    | Description                                                                                                                                                                                       | Type      |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached               | Memcached server to use (only one server).                                                                                                                                                        | Retention |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                   | Retention |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                           | Retention |
| --redis-db                | Set Redis database index.                                                                                                                                                                         | Retention |
| --failback-file           | Failback on a local file if redis connection failed.                                                                                                                                              | Retention |
| --memexpiration           | Time to keep data in seconds (Default: 86400).                                                                                                                                                    | Retention |
| --statefile-dir           | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                               | Retention |
| --statefile-suffix        | Add a suffix for the statefile name (Default: '').                                                                                                                                                | Retention |
| --statefile-concat-cwd    | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                        | Retention |
| --statefile-format        | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                | Retention |
| --statefile-key           | Key to encrypt/decrypt cache.                                                                                                                                                                     | Retention |
| --statefile-cipher        | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                         | Retention |
| --filter-name             | Filter ports by name (can be a regexp).                                                                                                                                                           | Mode      |
| --unknown-license-status  | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                                                                                         | Mode      |
| --warning-license-status  | Set warning threshold for status (Default: '%{status} =~ /invalid\_software\_version/'). You can use the following variables: %{status}, %{name}                                                  | Mode      |
| --critical-license-status | Set critical threshold for status. You can use the following variables: %{status}, %{name}                                                                                                        | Mode      |
| --unknown-link-status     | Set unknown threshold for status. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --warning-link-status     | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                              | Mode      |
| --critical-link-status    | Set critical threshold for status (Default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}   | Mode      |
| --warning-* --critical-*  | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.                                                                          | Mode      |

</TabItem>
<TabItem value="Time" label="Time">

| Option                | Description                                                                                                                           | Type |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-ntp-status  |                                                                                                                                       | Mode |
| --warning-ntp-status  |                                                                                                                                       | Mode |
| --critical-ntp-status | Set thresholds for status (Default critical: '%{status} !~ /in\_reach\|in\_sync/i')  You can use the following variables: %{status}   | Mode |
| --warning-offset      | Time offset warning threshold (in seconds).                                                                                           | Mode |
| --critical-offset     | Time offset critical Threshold (in seconds).                                                                                          | Mode |
| --ntp-hostname        | Set the ntp hostname (if not set, localtime is used).                                                                                 | Mode |
| --ntp-port            | Set the ntp port (Default: 123).                                                                                                      | Mode |
| --timezone            | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'.                                               | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-uptime  | Threshold warning.                                                                                                                                             | Mode |
| --critical-uptime | Threshold critical.                                                                                                                                            | Mode |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=dynamic-filters \
    --help
```
