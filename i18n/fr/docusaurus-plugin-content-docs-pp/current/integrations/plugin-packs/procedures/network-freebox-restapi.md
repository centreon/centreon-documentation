---
id: network-freebox-restapi
title: Freebox RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Freebox** apporte un modèle d'hôte :

* **Net-Freebox-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Freebox-Restapi-custom" label="Net-Freebox-Restapi-custom">

| Alias     | Modèle de service                    | Description                                           |
|:----------|:-------------------------------------|:------------------------------------------------------|
| Dsl-Usage | Net-Freebox-Dsl-Usage-RESTAPI-custom | Contrôle permettant de vérifier l'utilisation DSL     |
| Net-Usage | Net-Freebox-Net-Usage-RESTAPI-custom | Contrôle permettant de vérifier l'utilisation réseau  |
| System    | Net-Freebox-System-RESTAPI-custom    | Contrôle permettant de vérifier l'utilisation système |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Freebox-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Métrique    | Unité |
|:------------|:------|
| rate-up     | b/s   |
| rate-down   | b/s   |
| snr-up      | dB    |
| snr-down    | dB    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Métrique      | Unité |
|:--------------|:------|
| bw-up         | b/s   |
| bw-down       | b/s   |
| rate-up       | b/s   |
| rate-down     | b/s   |
| vpn-rate-up   | b/s   |
| vpn-rate-down | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="System" label="System">

| Métrique           | Unité |
|:-------------------|:------|
| temperature-cpum   | C     |
| temperature-cpub   | C     |
| temperature-switch | C     |
| fan-speed          | rpm   |
| disk-status        | N/A   |
| *wifi*#wifi-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Il est nécessaire au préalable d'autoriser le client, de choisir un _app\_id_ et d'obtenir un token. 

- Appelez la terminaison API permettant d'autoriser une application, remplacez les valeurs par celles souhaitées:

`curl http://<freebox_ip>/api/v4/login/authorize -d '{"app_id":"centreon","app_name":"centreon","app_version":"3.0","device_name":"Freebox"}'`

- Validez depuis l'écran de la Freebox et récupérez le token
- Ouvrez la page suivante http://\<freebox_ip\>/api/v4/login/authorize/\<app_id\>
- Vérifiez que l'application est correcte et possède les bons droits

Conservez précieusement votre _app\_id_ et le token car ils seront nécessaires durant la configuration de l'hôte.

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
dnf install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-freebox-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Freebox**
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
dnf install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-freebox-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Freebox-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                                                                                          | Valeur par défaut | Obligatoire |
|:--------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FREEBOXAPPTOKEN     | Freebox App Token                                                                                    |                   | X           |
| FREEBOXAPPID        | Freebox App ID                                                                                       |                   | X           |
| FREEBOXEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRATEDOWN  | Thresholds                                                                                         |                   |             |
| CRITICALRATEDOWN | Thresholds                                                                                         |                   |             |
| WARNINGRATEUP    | Thresholds                                                                                         |                   |             |
| CRITICALRATEUP   | Thresholds                                                                                         |                   |             |
| WARNINGSNRDOWN   | Thresholds                                                                                         |                   |             |
| CRITICALSNRDOWN  | Thresholds                                                                                         |                   |             |
| WARNINGSNRUP     | Thresholds                                                                                         |                   |             |
| CRITICALSNRUP    | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBWDOWN    | Thresholds                                                                                         |                   |             |
| CRITICALBWDOWN   | Thresholds                                                                                         |                   |             |
| WARNINGBWUP      | Thresholds                                                                                         |                   |             |
| CRITICALBWUP     | Thresholds                                                                                         |                   |             |
| WARNINGRATEDOWN  | Thresholds                                                                                         |                   |             |
| CRITICALRATEDOWN | Thresholds                                                                                         |                   |             |
| WARNINGRATEUP    | Thresholds                                                                                         |                   |             |
| CRITICALRATEUP   | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="System" label="System">

| Macro                     | Description                                                                                                                               | Valeur par défaut          | Obligatoire |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| CRITICALDISKSTATUS        | Set critical threshold for disk status (default: '%\{status\} =~ /error/i'). You can use the following variables: %\{status\}                 | %\{status\} =~ /error/i      |             |
| WARNINGDISKSTATUS         | Set warning threshold for disk status. You can use the following variables: %\{status\}                                                     |                            |             |
| WARNINGFANSPEED           | Thresholds                                                                                                                                |                            |             |
| CRITICALFANSPEED          | Thresholds                                                                                                                                |                            |             |
| WARNINGTEMPERATURECPUB    | Thresholds                                                                                                                                |                            |             |
| CRITICALTEMPERATURECPUB   | Thresholds                                                                                                                                |                            |             |
| WARNINGTEMPERATURECPUM    | Thresholds                                                                                                                                |                            |             |
| CRITICALTEMPERATURECPUM   | Thresholds                                                                                                                                |                            |             |
| WARNINGTEMPERATURESWITCH  | Thresholds                                                                                                                                |                            |             |
| CRITICALTEMPERATURESWITCH | Thresholds                                                                                                                                |                            |             |
| WARNINGWIFISTATUS         | Set warning threshold for wifi status (default: '%\{status\} =~ /bad\_param/i'). You can use the following variables: %\{status\}, %\{display\} | %\{status\} =~ /bad\_param/i |             |
| CRITICALWIFISTATUS        | Set critical threshold for wifi status (default: '%\{status\} =~ /failed/i'). You can use the following variables: %\{status\}, %\{display\}    | %\{status\} =~ /failed/i     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                        | --verbose                  |             |

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
/usr/lib/centreon/plugins/centreon_freebox_restapi.pl \
	--plugin=network::freebox::restapi::plugin \
	--mode=net-usage \
	--hostname='10.0.0.1' \
	--freebox-app-id='' \
	--freebox-app-token=''  \
	--warning-rate-up='' \
	--critical-rate-up='' \
	--warning-rate-down='' \
	--critical-rate-down='' \
	--warning-bw-up='' \
	--critical-bw-up='' \
	--warning-bw-down='' \
	--critical-bw-down='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Upload available bandwidth : 79 79/s Download available bandwidth : 60 60/s Upload rate : 78 78/s Download rate : 30 30/s Vpn client upload rate : 68 68/s Vpn client download rate : 26 26/s | 'bw-up'=79b/s;;;0;'bw-down'=60b/s;;;0;'rate-up'=78b/s;;;0;'rate-down'=30b/s;;;0;'vpn-rate-up'=68b/s;;;0;'vpn-rate-down'=26b/s;;;0;
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
/usr/lib/centreon/plugins/centreon_freebox_restapi.pl \
	--plugin=network::freebox::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                       | Modèle de service associé            |
|:---------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| dsl-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/freebox/restapi/mode/dslusage.pm)] | Net-Freebox-Dsl-Usage-RESTAPI-custom |
| net-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/freebox/restapi/mode/netusage.pm)] | Net-Freebox-Net-Usage-RESTAPI-custom |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/freebox/restapi/mode/system.pm)]      | Net-Freebox-System-RESTAPI-custom    |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Freebox hostname (default: 'mafreebox.free.fr').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --freebox-app-id                           | Freebox App ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --freebox-app-token                        | Freebox App Token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --freebox-api-version                      | Freebox API version (default: 'v4').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Set HTTP timeout in seconds (default: '10').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --resolution                               | Selected data performance resolution in seconds (default: '300').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
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
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^rate-up$'   |
| --warning-* --critical-* | Thresholds. Can be: 'rate-up', 'rate-down', 'snr-up', 'snr-down'.                         |

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Option                   | Description                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^bw-up$'              |
| --warning-* --critical-* | Thresholds. Can be: 'bw-up', 'bw-down', 'rate-up', 'rate-down', 'vpn-rate-up', 'vpn-rate-down'.    |

</TabItem>
<TabItem value="System" label="System">

| Option                   | Description                                                                                                                                 |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^temperature-cpum$'                                            |
| --warning-wifi-status    | Set warning threshold for wifi status (default: '%\{status\} =~ /bad\_param/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --critical-wifi-status   | Set critical threshold for wifi status (default: '%\{status\} =~ /failed/i'). You can use the following variables: %\{status\}, %\{display\}      |
| --warning-disk-status    | Set warning threshold for disk status. You can use the following variables: %\{status\}                                                       |
| --critical-disk-status   | Set critical threshold for disk status (default: '%\{status\} =~ /error/i'). You can use the following variables: %\{status\}                   |
| --warning-* --critical-* | Thresholds. Can be: 'temperature-cpum', 'temperature-cpub', 'temperature-switch', 'fan-speed'.                                              |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_freebox_restapi.pl \
	--plugin=network::freebox::restapi::plugin \
	--mode=net-usage \
	--help
```
