---
id: hardware-sensors-sensormetrix-em01-web
title: Sensormetrix
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Sensormetrix** apporte un modèle d'hôte :

* **HW-Sensor-Sensormetrix-Em01-Web-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Sensor-Sensormetrix-Em01-Web-custom" label="HW-Sensor-Sensormetrix-Em01-Web-custom">

| Alias        | Modèle de service                               | Description                     |
|:-------------|:------------------------------------------------|:--------------------------------|
| Humidity     | HW-Sensor-Sensormetrix-Em01-Humidity-custom     | Contrôle le taux d'humidité     |
| Illumination | HW-Sensor-Sensormetrix-Em01-Illumination-custom | Contrôle le taux d'illumination |
| Temperature  | HW-Sensor-Sensormetrix-Em01-Temperature-custom  | Contrôle la température         |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Sensor-Sensormetrix-Em01-Web-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                  | Modèle de service                             | Description                      |
|:-----------------------|:----------------------------------------------|:---------------------------------|
| Contact                | HW-Sensor-Sensormetrix-Em01-Contact-custom    | Contrôle le contact de la sonde  |
| Flood                  | HW-Sensor-Sensormetrix-Em01-Flood-custom      | Contrôle la sonde "d'inondation" |
| Thermistor-Temperature | HW-Sensor-Sensormetrix-Em01-Thermistor-custom | Contrôle la température          |
| Voltage                | HW-Sensor-Sensormetrix-Em01-Voltage-custom    | Contrôle le voltage              |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Contact" label="Contact">

| Métrique    | Unité |
|:------------|:------|
| status    | N/A     |

</TabItem>
<TabItem value="Flood" label="Flood">

| Métrique    | Unité |
|:------------|:------|
| status    | N/A     |

</TabItem>
<TabItem value="Humidity" label="Humidity">

| Métrique    | Unité |
|:------------|:------|
| humidity    | %     |

</TabItem>
<TabItem value="Illumination" label="Illumination">

| Métrique     | Unité |
|:-------------|:------|
| illumination | N/A   |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Métrique    | Unité |
|:------------|:------|
| temperature | N/A   |

</TabItem>
<TabItem value="Thermistor-Temperature" label="Thermistor-Temperature">

| Métrique    | Unité |
|:------------|:------|
| temperature | N/A   |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Métrique    | Unité |
|:------------|:------|
| voltage     | V     |

</TabItem>
</Tabs>

## Prérequis

Pour utiliser ce plugin, vous devez disposer d'un nom d'utilisateur et d'un mot de passe pour vous connecter à l'interface web de gestion du capteur.

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
dnf install centreon-pack-hardware-sensors-sensormetrix-em01-web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-sensors-sensormetrix-em01-web
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-sensors-sensormetrix-em01-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-sensors-sensormetrix-em01-web
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Sensormetrix**
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
dnf install centreon-plugin-Hardware-Sensors-Sensormetrix-Em01-Web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Sensors-Sensormetrix-Em01-Web
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-sensors-sensormetrix-em01-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Sensors-Sensormetrix-Em01-Web
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Sensor-Sensormetrix-Em01-Web-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                         | Description                                                                                          | Valeur par défaut | Obligatoire |
|:------------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SENSORMETRIXURLPATHCONTACT    | Set path to get server-status page in auto mode (default: '/index.htm?eL')                                                                                                     | /index.htm?eL     |             |
| SENSORMETRIXURLPATHFLOOD      | Set path to get server-status page in auto mode (default: '/')                                                                                                     |                   |             |
| SENSORMETRIXURLPATHHIL        | Set path to get server-status page in auto mode (default: '/index.htm?em')                           | /index.htm?em     | X           |
| SENSORMETRIXURLPATHTHERMISTOR | Set path to get server-status page in auto mode (default: '/index.htm?eR')                                                                                                     | /index.htm?eR     |             |
| SENSORMETRIXURLPATHVOLTAGE    | Set path to get server-status page in auto mode (default: '/index.htm?ev')                                                                                                     | /index.htm?ev     |             |
| SENSORMETRIXEXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Contact" label="Contact">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| THRESHOLD    | Threshold                                                                                                   | critical          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Flood" label="Flood">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| THRESHOLD    | Threshold                                                                                                   | critical          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Humidity" label="Humidity">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold for Humidity                                                                    |                   |             |
| WARNING      | Warning Threshold for Humidity                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Illumination" label="Illumination">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold for Illumination                                                                |                   |             |
| WARNING      | Warning Threshold for Illumination                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold for Temperature                                                                 |                   |             |
| WARNING      | Warning Threshold for Temperature                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Thermistor-Temperature" label="Thermistor-Temperature">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold for Thermistor Temperature                                                      |                   |             |
| WARNING      | Warning Threshold for Thermistor Temperature                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical Threshold for Voltage                                                                     |                   |             |
| WARNING      | Warning Threshold for Voltage                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_sensormetrix.pl \
	--plugin=hardware::sensors::sensormetrix::em01::web::plugin \
	--mode=voltage \
	--hostname=10.0.0.1 \
	--urlpath='/index.htm?ev'  \
	--warning='' \
	--critical=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Voltage: 54V | 'voltage'=54V;;;;
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
/usr/lib/centreon/plugins/centreon_sensormetrix.pl \
	--plugin=hardware::sensors::sensormetrix::em01::web::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                             | Modèle de service associé                       |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| contact [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/sensors/sensormetrix/em01/web/mode/contact.pm)]           | HW-Sensor-Sensormetrix-Em01-Contact-custom      |
| flood [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/sensors/sensormetrix/em01/web/mode/flood.pm)]               | HW-Sensor-Sensormetrix-Em01-Flood-custom        |
| humidity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/sensors/sensormetrix/em01/web/mode/humidity.pm)]         | HW-Sensor-Sensormetrix-Em01-Humidity-custom     |
| illumination [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/sensors/sensormetrix/em01/web/mode/illumination.pm)] | HW-Sensor-Sensormetrix-Em01-Illumination-custom |
| temperature [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/sensors/sensormetrix/em01/web/mode/temperature.pm)]   | HW-Sensor-Sensormetrix-Em01-Temperature-custom  |
| thermistor [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/sensors/sensormetrix/em01/web/mode/thermistor.pm)]     | HW-Sensor-Sensormetrix-Em01-Thermistor-custom   |
| voltage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/sensors/sensormetrix/em01/web/mode/voltage.pm)]           | HW-Sensor-Sensormetrix-Em01-Voltage-custom      |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Contact" label="Contact">

| Option        | Description                                                                                                                                                                                                                                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                |
| --port        | Port used by Apache                                                                                                                                                                                                                                                                                                |
| --proto       | Specify https if needed                                                                                                                                                                                                                                                                                            |
| --urlpath     | Set path to get server-status page in auto mode (default: '/index.htm?eL')                                                                                                                                                                                                                                         |
| --credentials | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                           |
| --username    | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --password    | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --basic       | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     | Threshold for HTTP timeout                                                                                                                                                                                                                                                                                         |
| --warning     | Warning if door is opened (can set --close for closed door)                                                                                                                                                                                                                                                        |
| --critical    | Critical if door is opened (can set --close for closed door)                                                                                                                                                                                                                                                       |
| --closed      | Threshold is on closed door (default: opened)                                                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="Flood" label="Flood">

| Option        | Description                                                                                                                                                                                                                                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                |
| --port        | Port used by Apache                                                                                                                                                                                                                                                                                                |
| --proto       | Specify https if needed                                                                                                                                                                                                                                                                                            |
| --urlpath     | Set path to get server-status page in auto mode (default: '/')                                                                                                                                                                                                                                                     |
| --credentials | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                           |
| --username    | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --password    | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --basic       | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     | Threshold for HTTP timeout                                                                                                                                                                                                                                                                                         |
| --warning     | Warning if flood sensor is wet (can set --dry for dry sensor)                                                                                                                                                                                                                                                      |
| --critical    | Critical if flood sensor is wet (can set --dry for dry sensor)                                                                                                                                                                                                                                                     |
| --closed      | Threshold is on dry sensor (default: wet)                                                                                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Humidity" label="Humidity">

| Option        | Description                                                                                                                                                                                                                                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                |
| --port        | Port used by Apache                                                                                                                                                                                                                                                                                                |
| --proto       | Specify https if needed                                                                                                                                                                                                                                                                                            |
| --urlpath     | Set path to get server-status page in auto mode (default: '/index.htm?em')                                                                                                                                                                                                                                         |
| --credentials | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                           |
| --username    | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --password    | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --basic       | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     | Threshold for HTTP timeout                                                                                                                                                                                                                                                                                         |
| --warning     | Warning Threshold for Humidity                                                                                                                                                                                                                                                                                     |
| --critical    | Critical Threshold for Humidity                                                                                                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Illumination" label="Illumination">

| Option        | Description                                                                                                                                                                                                                                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                |
| --port        | Port used by Apache                                                                                                                                                                                                                                                                                                |
| --proto       | Specify https if needed                                                                                                                                                                                                                                                                                            |
| --urlpath     | Set path to get server-status page in auto mode (default: '/index.htm?em')                                                                                                                                                                                                                                         |
| --credentials | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                           |
| --username    | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --password    | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --basic       | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     | Threshold for HTTP timeout                                                                                                                                                                                                                                                                                         |
| --warning     | Warning Threshold for Illumination                                                                                                                                                                                                                                                                                 |
| --critical    | Critical Threshold for Illumination                                                                                                                                                                                                                                                                                |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Option        | Description                                                                                                                                                                                                                                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                |
| --port        | Port used by Apache                                                                                                                                                                                                                                                                                                |
| --proto       | Specify https if needed                                                                                                                                                                                                                                                                                            |
| --urlpath     | Set path to get server-status page in auto mode (default: '/index.htm?em')                                                                                                                                                                                                                                         |
| --credentials | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                           |
| --username    | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --password    | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --basic       | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     | Threshold for HTTP timeout                                                                                                                                                                                                                                                                                         |
| --warning     | Warning Threshold for Temperature                                                                                                                                                                                                                                                                                  |
| --critical    | Critical Threshold for Temperature                                                                                                                                                                                                                                                                                 |

</TabItem>
<TabItem value="Thermistor-Temperature" label="Thermistor-Temperature">

| Option        | Description                                                                                                                                                                                                                                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                |
| --port        | Port used by Apache                                                                                                                                                                                                                                                                                                |
| --proto       | Specify https if needed                                                                                                                                                                                                                                                                                            |
| --urlpath     | Set path to get server-status page in auto mode (default: '/index.htm?eR')                                                                                                                                                                                                                                         |
| --credentials | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                           |
| --username    | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --password    | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --basic       | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     | Threshold for HTTP timeout                                                                                                                                                                                                                                                                                         |
| --warning     | Warning Threshold for Thermistor Temperature                                                                                                                                                                                                                                                                       |
| --critical    | Critical Threshold for Thermistor Temperature                                                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Option        | Description                                                                                                                                                                                                                                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the web server host                                                                                                                                                                                                                                                                                |
| --port        | Port used by Apache                                                                                                                                                                                                                                                                                                |
| --proto       | Specify https if needed                                                                                                                                                                                                                                                                                            |
| --urlpath     | Set path to get server-status page in auto mode (default: '/index.htm?ev')                                                                                                                                                                                                                                         |
| --credentials | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                           |
| --username    | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --password    | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                  |
| --basic       | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout     | Threshold for HTTP timeout                                                                                                                                                                                                                                                                                         |
| --warning     | Warning Threshold for Voltage                                                                                                                                                                                                                                                                                      |
| --critical    | Critical Threshold for Voltage                                                                                                                                                                                                                                                                                     |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_sensormetrix.pl \
	--plugin=hardware::sensors::sensormetrix::em01::web::plugin \
	--mode=voltage \
	--help
```
