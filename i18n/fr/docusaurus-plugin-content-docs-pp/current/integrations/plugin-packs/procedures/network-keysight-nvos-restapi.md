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
<TabItem value="Net-Keysight-Nvos-Restapi-custom" label="Net-Keysight-Nvos-Restapi-custom">

| Alias    | Modèle de service                         | Description                                                 |
|:---------|:------------------------------------------|:------------------------------------------------------------|
| Hardware | Net-Keysight-Nvos-Hardware-Restapi-custom | Contrôle l'état du matériel                                 |
| Licence  | Net-Keysight-Nvos-Licence-Restapi-custom  | Contrôle l'état de la licence                               |
| Time     | Net-Keysight-Nvos-Time-Restapi-custom     | Contrôle le décalage de temps                               |
| Uptime   | Net-Keysight-Nvos-Uptime-Restapi-custom   | Durée depuis laquelle l'équipement tourne sans interruption |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Keysight-Nvos-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                                | Description                     | Découverte |
|:----------------|:-------------------------------------------------|:--------------------------------|:----------:|
| Dynamic-Filters | Net-Keysight-Nvos-Dynamic-Filters-Restapi-custom | Contrôle les filtres dynamiques | X          |
| Ports           | Net-Keysight-Nvos-Ports-Restapi-custom           | Contrôle les ports              | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                               | Description |
|:----------------------------------------------|:------------|
| Net-Keysight-Nvos-Restapi-Dynamic-Filter-Name |             |
| Net-Keysight-Nvos-Restapi-Port-Name           |             |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| *df*~dynamic_filter.traffic.pass.bytespersecond | B/s   |
| *df*~dynamic_filter.traffic.insp.bytespersecond | B/s   |
| *df*~dynamic_filter.packets.denied.count        | count |
| *df*~dynamic_filter.packets.pass.count          | count |
| *df*~dynamic_filter.packets.insp.count          | count |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| *temperatures*#temperature-status           | N/A   |
| *temperatures*#hardware.temperature.celsius | C     |
| fans.failed.count                           | count |
| *psus*#psu-status                           | N/A   |

</TabItem>
<TabItem value="Licence" label="Licence">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

</TabItem>
<TabItem value="Ports" label="Ports">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| *ports*~license-status                  | N/A   |
| *ports*~link-status                     | N/A   |
| *ports*~port.traffic.out.percentage     | %     |
| *ports*~port.traffic.out.bytespersecond | B/s   |
| *ports*~port.packets.out.count          | count |
| *ports*~port.packets.dropped.count      | count |
| *ports*~port.packets.pass.count         | count |
| *ports*~port.packets.insp.count         | count |

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

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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

| Macro                       | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KEYSIGHTNVOSAPIUSERNAME     | API username                                                                                         |                   | X           |
| KEYSIGHTNVOSAPIPASSWORD     | API password                                                                                         |                   | X           |
| KEYSIGHTNVOSAPIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| KEYSIGHTNVOSAPIPORT         | Port used (default: 8000)                                                                            | 8000              |             |
| KEYSIGHTNVOSAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME            | Filter dynamic filters by name (can be a regexp)                                                   |                   |             |
| WARNINGPACKETSDENIED  |                                                                                                    |                   |             |
| CRITICALPACKETSDENIED |                                                                                                    |                   |             |
| WARNINGPACKETSINSP    | Thresholds                                                                                         |                   |             |
| CRITICALPACKETSINSP   | Thresholds                                                                                         |                   |             |
| WARNINGPACKETSPASS    | Thresholds                                                                                         |                   |             |
| CRITICALPACKETSPASS   | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICINSP    |                                                                                                    |                   |             |
| CRITICALTRAFFICINSP   |                                                                                                    |                   |             |
| WARNINGTRAFFICPASS    |                                                                                                    |                   |             |
| CRITICALTRAFFICPASS   |                                                                                                    |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro                     | Description                                                                                                                                                | Valeur par défaut      | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| UNKNOWNTEMPERATURESTATUS  | Define the conditions to match for the status to be UNKNOWN (default : '%{status} eq "unknown"'). You can use the following variables: %{status}, %{class} | %{status} eq "unknown" |             |
| WARNINGFANSFAILED         | Thresholds                                                                                                                                                 |                        |             |
| CRITICALFANSFAILED        | Thresholds                                                                                                                                                 |                        |             |
| CRITICALPSUSTATUS         |                                                                                                                                                            | %{status} eq "bad"     |             |
| WARNINGPSUSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                       |                        |             |
| WARNINGTEMPERATURE        | Thresholds                                                                                                                                                 |                        |             |
| CRITICALTEMPERATURE       | Thresholds                                                                                                                                                 |                        |             |
| WARNINGTEMPERATURESTATUS  | Define the conditions to match for the status to be WARNING (default : '%{status} eq "warn"'). You can use the following variables: %{status}, %{class}    | %{status} eq "warn"    |             |
| CRITICALTEMPERATURESTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} eq "hot"'); You can use the following variables: %{status}, %{class}     | %{status} eq "hot"     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                         | --verbose              |             |

</TabItem>
<TabItem value="Licence" label="Licence">

| Macro          | Description                                                                                                                                               | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}                                               |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /MINOR/i'). You can use the following variables: %{status}            |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /MAJOR\|CRITICAL/i'). You can use the following variables: %{status} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                        | --verbose         |             |

</TabItem>
<TabItem value="Ports" label="Ports">

| Macro                  | Description                                                                                                                                                                                                                | Valeur par défaut                                            | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|:-----------:|
| FILTERNAME             | Filter ports by name (can be a regexp)                                                                                                                                                                                     |                                                              |             |
| FILTERTYPE             | Filter ports by type (can be a regexp). You can use the following types: 'Network Port', 'Port Group' and 'Tool Port'                                                                                                      |                                                              |             |
| WARNINGLICENSESTATUS   | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /invalid\_software\_version/'). You can use the following variables: %{status}, %{name}                                                | %{status} =~ /invalid\_software\_version/                    |             |
| CRITICALLICENSESTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                                                                                                      |                                                              |             |
| CRITICALLINKSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name} | %{adminStatus} eq "enabled" and %{operationalStatus} ne "up" |             |
| WARNINGLINKSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                            |                                                              |             |
| WARNINGPACKETSDROPPED  | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| CRITICALPACKETSDROPPED | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| WARNINGPACKETSINSP     | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| CRITICALPACKETSINSP    | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| WARNINGPACKETSOUT      | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| CRITICALPACKETSOUT     | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| WARNINGPACKETSPASS     | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| CRITICALPACKETSPASS    | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| WARNINGTRAFFICOUT      | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| CRITICALTRAFFICOUT     | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| WARNINGTRAFFICOUTPRCT  | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| CRITICALTRAFFICOUTPRCT | Thresholds                                                                                                                                                                                                                 |                                                              |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                         | --verbose                                                    |             |

</TabItem>
<TabItem value="Time" label="Time">

| Macro             | Description                                                                                                                                                  | Valeur par défaut                  | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| TIMEZONE          | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'                                                                       |                                    |             |
| NTPHOSTNAME       | Set the NTP hostname (if not set, localtime is used)                                                                                                         |                                    |             |
| NTPPORT           | Set the NTP port (default: 123)                                                                                                                              |                                    |             |
| CRITICALNTPSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /in\_reach\|in\_sync/i') You can use the following variables: %{status} | %{status} !~ /in\_reach\|in\_sync/ |             |
| WARNINGNTPSTATUS  | Define the conditions to match for the status to be WARNING                                                                                                  |                                    |             |
| WARNINGOFFSET     | Define the time offset (in seconds) that will trigger a WARNING status                                                                                       |                                    |             |
| CRITICALOFFSET    | Define the time offset (in seconds) that will trigger a CRITICAL status                                                                                      |                                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                           | --verbose                          |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                 | Valeur par défaut | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNIT           | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                   |             |
| WARNINGUPTIME  | Warning threshold                                                                                                                                           |                   |             |
| CRITICALUPTIME | Critical threshold                                                                                                                                          |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                          |                   |             |

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
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=hardware \
	--hostname='10.0.0.1' \
	--proto='https' \
	--port='8000' \
	--api-username='' \
	--api-password=''  \
	--unknown-temperature-status='%{status} eq "unknown"' \
	--warning-temperature-status='%{status} eq "warn"' \
	--critical-temperature-status='%{status} eq "hot"' \
	--warning-temperature='' \
	--critical-temperature='' \
	--warning-fans-failed='' \
	--critical-fans-failed='' \
	--warning-psu-status='' \
	--critical-psu-status='%{status} eq "bad"' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: reading: 31 C number of failed fans: 81 all power supplies are ok | '*temperatures*#hardware.temperature.celsius'=31C;;;;'fans.failed.count'=81;;;0;
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
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                  | Modèle de service associé                        |
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| dynamic-filters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/dynamicfilters.pm)]          | Net-Keysight-Nvos-Dynamic-Filters-Restapi-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/hardware.pm)]                       | Net-Keysight-Nvos-Hardware-Restapi-custom        |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/license.pm)]                         | Net-Keysight-Nvos-Licence-Restapi-custom         |
| list-dynamic-filters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/listdynamicfilters.pm)] | Used for service discovery                       |
| list-ports [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/listports.pm)]                    | Used for service discovery                       |
| ports [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/ports.pm)]                             | Net-Keysight-Nvos-Ports-Restapi-custom           |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/time.pm)]                               | Net-Keysight-Nvos-Time-Restapi-custom            |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/keysight/nvos/restapi/mode/uptime.pm)]                           | Net-Keysight-Nvos-Uptime-Restapi-custom          |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Keysight NVOS API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (default: 8000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
<TabItem value="Dynamic-Filters" label="Dynamic-Filters">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-name            | Filter dynamic filters by name (can be a regexp).                                                                                                                                                                                             |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.                                                                                                                      |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                        | Description                                                                                                                                                  |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-temperature-status  | Define the conditions to match for the status to be UNKNOWN (default : '%{status} eq "unknown"'). You can use the following variables: %{status}, %{class}   |
| --warning-temperature-status  | Define the conditions to match for the status to be WARNING (default : '%{status} eq "warn"'). You can use the following variables: %{status}, %{class}      |
| --critical-temperature-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} eq "hot"'); You can use the following variables: %{status}, %{class}       |
| --unknown-psu-status          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                         |
| --warning-psu-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                         |
| --critical-status             | Define the conditions to match for the status to be CRITICAL (default: '%{status} eq "bad"'); You can use the following variables: %{status}, %{name}        |
| --warning-* --critical-*      | Thresholds. Can be: 'temperature', 'fans-failed'.                                                                                                            |

</TabItem>
<TabItem value="Licence" label="Licence">

| Option            | Description                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}                                                  |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /MINOR/i'). You can use the following variables: %{status}               |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /MAJOR\|CRITICAL/i'). You can use the following variables: %{status}    |

</TabItem>
<TabItem value="Ports" label="Ports">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration           | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-name             | Filter ports by name (can be a regexp).                                                                                                                                                                                                       |
| --filter-type             | Filter ports by type (can be a regexp). You can use the following types: 'Network Port', 'Port Group' and 'Tool Port'                                                                                                                         |
| --unknown-license-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                                                                                                          |
| --warning-license-status  | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /invalid\_software\_version/'). You can use the following variables: %{status}, %{name}                                                                   |
| --critical-license-status | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                                                                                                                         |
| --unknown-link-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                                               |
| --warning-link-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                                                                                               |
| --critical-link-status    | Define the conditions to match for the status to be CRITICAL (default: '%{adminStatus} eq "enabled" and %{operationalStatus} ne "up"'). You can use the following variables: %{adminStatus}, %{operationalStatus}, %{name}                    |
| --warning-* --critical-*  | Thresholds. Can be: 'traffic-out-prct', 'traffic-out', 'packets-out', 'packets-dropped', 'packets-pass', 'packets-insp'.                                                                                                                      |

</TabItem>
<TabItem value="Time" label="Time">

| Option                | Description                                                                                                                                                    |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-ntp-status  | Define the conditions to match for the status to be UNKNOWN.                                                                                                   |
| --warning-ntp-status  | Define the conditions to match for the status to be WARNING.                                                                                                   |
| --critical-ntp-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /in\_reach\|in\_sync/i') You can use the following variables: %{status}   |
| --warning-offset      | Define the time offset (in seconds) that will trigger a WARNING status.                                                                                        |
| --critical-offset     | Define the time offset (in seconds) that will trigger a CRITICAL status.                                                                                       |
| --ntp-hostname        | Set the NTP hostname (if not set, localtime is used).                                                                                                          |
| --ntp-port            | Set the NTP port (default: 123).                                                                                                                               |
| --timezone            | Override the timezone of distant equipment. Can use format: 'Europe/London' or '+0100'.                                                                        |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-uptime  | Warning threshold.                                                                                                                                             |
| --critical-uptime | Critical threshold.                                                                                                                                            |
| --unit            | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_keysight_nvos_restapi.pl \
	--plugin=network::keysight::nvos::restapi::plugin \
	--mode=hardware \
	--help
```
