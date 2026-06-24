---
id: applications-monitoring-centreon-experience-monitoring-restapi
slug: /applications-monitoring-centreon-experience-monitoring-restapi
title: Centreon Experience Monitoring (formerly Quanta) Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Centreon Experience Monitoring (formerly Quanta) Rest API** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Centreon Experience Monitoring (formerly Quanta) Rest API** apporte un modèle d'hôte :

* **App-Monitoring-Centreon-DEM-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-DEM-Restapi-custom" label="App-Monitoring-Centreon-DEM-Restapi-custom">

| Alias                      | Modèle de service                                       | Description                                     |
|:---------------------------|:--------------------------------------------------------|:------------------------------------------------|
| RUM Overview               | App-Monitoring-Centreon-DEM-RUM-Restapi-custom          | Contrôle les métriques RUM d'un site            |
| Site Performances Overview | App-Monitoring-Centreon-DEM-Siteoverview-Restapi-custom | Contrôle les métriques de performance d'un site |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Centreon-DEM-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                   | Modèle de service                                                 | Description                                         | Découverte |
|:------------------------|:------------------------------------------------------------------|:----------------------------------------------------|:----------:|
| User Journey Incidents  | App-Monitoring-Centreon-DEM-Userjourney-Incidents-Restapi-custom  | Contrôle les incidents d'un parcours utilisateur    | X          |
| User Journey Statistics | App-Monitoring-Centreon-DEM-Userjourney-Statistics-Restapi-custom | Contrôle les statistiques d'un parcours utilisateur | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                             | Description                                                                       |
|:------------------------------------------------------------|:----------------------------------------------------------------------------------|
| App-Monitoring-Centreon-DEM-Restapi-Userjourneys-Incidents  | Découvrir les parcours utilisateur d'un site pour en superviser les incidents    |
| App-Monitoring-Centreon-DEM-Restapi-Userjourneys-Statistics | Découvrir les parcours utilisateur d'un site pour en superviser les statistiques  |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="RUM Overview" label="RUM Overview">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| *rum*#sessions.count                          | count |
| *rum*#pageviews.count                         | count |
| *rum*#bounce.rate.percentage                  | %     |
| *rum*#ttfb.milliseconds                       | ms    |
| *rum*#onload.time.milliseconds                | ms    |
| *rum*#nextpaint.interaction.time.milliseconds | ms    |
| *rum*#speedindex.time.milliseconds            | ms    |

</TabItem>
<TabItem value="Site Performances Overview" label="Site Performances Overview">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| performance-score                       | N/A   |
| digital-sobriety-score                  | N/A   |
| eco-design-score                        | N/A   |
| *sites*#perclick.carbon.footprint.gramm | g     |

</TabItem>
<TabItem value="User Journey Incidents" label="User Journey Incidents">

| Nom                                | Unité |
|:-----------------------------------|:------|
| centreon.dem.incidents.total.count | count |
| incident-status                    | N/A   |
| incident-type                      | N/A   |
| incident-duration                  | N/A   |

</TabItem>
<TabItem value="User Journey Statistics" label="User Journey Statistics">

| Nom                                            | Unité |
|:-----------------------------------------------|:------|
| journey-performance-score                      | N/A   |
| *metrics*#journey.herotime.milliseconds        | ms    |
| *metrics*#journey.speedindex.time.milliseconds | ms    |
| *metrics*#journey.ttfb.milliseconds            | ms    |
| interaction-performance-score                  | N/A   |
| *metrics*#herotime.milliseconds                | ms    |
| *metrics*#speedindex.time.milliseconds         | ms    |
| *metrics*#ttfb.milliseconds                    | ms    |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser Centreon Experience Monitoring, vous devez disposer [d'un jeton d'API valide](/experience-monitoring/installation/monitor-production-events#authentification-et-génération-de-token), et [avoir des parcours utilisateur configurés dans Centreon DEM](/experience-monitoring/configuration/user-journey/create-a-scenario).

Les données issues du Real User Monitoring ne seront accessibles que si vous avez réalisé [l'intégration du tag RUM de Centreon Experience Monitoring](/experience-monitoring/installation/real-user-monitoring-installation#trouver-le-tag-à-insérer-dans-mon-site).

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
dnf install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-dem-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Centreon Experience Monitoring (formerly Quanta) Rest API**
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
dnf install centreon-plugin-Applications-Monitoring-Centreon-DEM-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-DEM-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-centreon-dem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-DEM-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Centreon-DEM-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONDEMAPITOKEN        | API token                                                                                                                                          |                   |      X      |
| CENTREONDEMSITEID          | Set ID of the site (mandatory option)                                                                                                              |                   |      X      |
| CENTREONDEMTIMEOUT         | Set HTTP timeout                                                                                                                                   | 10                |             |
| CENTREONDEMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="RUM Overview" label="RUM Overview">

| Macro                        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds                                                                                                                         | 1800              |             |
| PERSPECTIVE                  | Set the perspective in which the data will be applied. Can be: 'all', 'url', 'browser', 'country', 'city', 'os'                                  | all               |             |
| LIMITRESULTS                 | To be used with --perspective. Limit the number of results to be fetched (number of different URLs, browsers, etc...).                           | 10                |             |
| WARNINGBOUNCERATE            | Warning threshold for bounce rate                                                                                                                |                   |             |
| CRITICALBOUNCERATE           | Critical threshold for bounce rate                                                                                                               |                   |             |
| WARNINGINTERACTIONNEXTPAINT  | Warning threshold for time to interaction next paint (in ms)                                                                                     |                   |             |
| CRITICALINTERACTIONNEXTPAINT | Critical threshold for time to interaction next paint (in ms)                                                                                    |                   |             |
| WARNINGONLOAD                | Warning threshold for `onload` time (in ms)                                                                                                      |                   |             |
| CRITICALONLOAD               | Critical threshold for `onload` time (in ms)                                                                                                     |                   |             |
| WARNINGPAGEVIEWS             | Warning threshold for page views                                                                                                                 |                   |             |
| CRITICALPAGEVIEWS            | Critical threshold for page views                                                                                                                |                   |             |
| WARNINGSESSIONS              | Warning threshold for sessions                                                                                                                   |                   |             |
| CRITICALSESSIONS             | Critical threshold for sessions                                                                                                                  |                   |             |
| WARNINGSPEEDINDEX            | Warning threshold for speed index                                                                                                                |                   |             |
| CRITICALSPEEDINDEX           | Critical threshold for speed index                                                                                                               |                   |             |
| WARNINGTTFB                  | Warning threshold for time to first byte (in ms)                                                                                                 |                   |             |
| CRITICALTTFB                 | Critical threshold for time to first byte (in ms)                                                                                                |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Site Performances Overview" label="Site Performances Overview">

| Macro                        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                    | Set timeframe in seconds                                                                                                                         | 3600              |             |
| WARNINGCARBONFOOTPRINT       | Warning threshold for carbon footprint                                                                                                           |                   |             |
| CRITICALCARBONFOOTPRINT      | Critical threshold for carbon footprint                                                                                                          |                   |             |
| WARNINGDIGITALSOBRIETYSCORE  | Warning threshold for digital sobriety score                                                                                                     |                   |             |
| CRITICALDIGITALSOBRIETYSCORE | Critical threshold for digital sobriety score                                                                                                    |                   |             |
| WARNINGECODESIGNSCORE        | Warning threshold for `eco design` score                                                                                                         |                   |             |
| CRITICALECODESIGNSCORE       | Critical threshold for `eco design` score                                                                                                        |                   |             |
| WARNINGPERFORMANCESCORE      | Warning threshold for performance score                                                                                                          |                   |             |
| CRITICALPERFORMANCESCORE     | Critical threshold for performance score                                                                                                         |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="User Journey Incidents" label="User Journey Incidents">

| Macro                    | Description                                                                                                                                                                               | Valeur par défaut | Obligatoire |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                | Set timeframe in seconds                                                                                                                                                                  | 300               |             |
| JOURNEYID                | Set ID of the user journey                                                                                                                                                                |                   |      X      |
| WARNINGINCIDENTDURATION  | Warning threshold for incident duration (in seconds)                                                                                                                                      |                   |             |
| CRITICALINCIDENTDURATION | Critical threshold for incident duration (in seconds)                                                                                                                                     |                   |             |
| WARNINGINCIDENTSTATUS    | Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: `%\{status\}`.  Example: `--warning-incident-status='%\{status\} =~ /open/i'`     |                   |             |
| CRITICALINCIDENTSTATUS   | Define the conditions to match for the status to be B\<CRITICAL\>.  You can use the following variables: `%\{status\}`.  Default: `--critical-incident-status='%\{status\} =~ /open/i'`   |                   |             |
| WARNINGINCIDENTSTOTAL    | Warning threshold for incidents total                                                                                                                                                     |                   |             |
| CRITICALINCIDENTSTOTAL   | Critical threshold for incidents total                                                                                                                                                    |                   |             |
| WARNINGINCIDENTTYPE      | Define the conditions to match for the incident type to be B\<WARNING\>.  You can use the following variables: `%\{type\}`.  Example: `--warning-incident-type='%\{type\} =~ /error/i'`   |                   |             |
| CRITICALINCIDENTTYPE     | Define the conditions to match for the incident type to be B\<CRITICAL\>.  You can use the following variables: `%\{type\}`.  Example: `--critical-incident-type='%\{type\} =~ /error/i'` |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                          |                   |             |

</TabItem>
<TabItem value="User Journey Statistics" label="User Journey Statistics">

| Macro                               | Description                                                                                                                                                            | Valeur par défaut | Obligatoire |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                           | Set timeframe in seconds                                                                                                                                               | 300               |             |
| JOURNEYID                           | Set ID of the user journey                                                                                                                                             |                   |      X      |
| WARNINGINTERACTIONHEROTIME          | Warning threshold for interaction hero time (in ms)                                                                                                                    |                   |             |
| CRITICALINTERACTIONHEROTIME         | Critical threshold for interaction hero time (in ms)                                                                                                                   |                   |             |
| WARNINGINTERACTIONPERFORMANCESCORE  | Warning threshold for interaction performance score                                                                                                                    |                   |             |
| CRITICALINTERACTIONPERFORMANCESCORE | Critical threshold for interaction performance score                                                                                                                   |                   |             |
| WARNINGINTERACTIONSPEEDINDEX        | Warning threshold for interaction speed index (in ms)                                                                                                                  |                   |             |
| CRITICALINTERACTIONSPEEDINDEX       | Critical threshold for interaction speed index (in ms)                                                                                                                 |                   |             |
| WARNINGINTERACTIONTTFB              | Warning threshold for interaction time to first byte (in ms)                                                                                                           |                   |             |
| CRITICALINTERACTIONTTFB             | Critical threshold for time to first byte (in ms)                                                                                                                      |                   |             |
| WARNINGJOURNEYHEROTIME              | Warning threshold for journey hero time (in ms)                                                                                                                        |                   |             |
| CRITICALJOURNEYHEROTIME             | Critical threshold for journey hero time (in ms)                                                                                                                       |                   |             |
| WARNINGJOURNEYPERFORMANCESCORE      | Warning threshold for journey performance score                                                                                                                        |                   |             |
| CRITICALJOURNEYPERFORMANCESCORE     | Critical threshold for journey performance score                                                                                                                       |                   |             |
| WARNINGJOURNEYSPEEDINDEX            | Warning threshold for journey speed index (in ms)                                                                                                                      |                   |             |
| CRITICALJOURNEYSPEEDINDEX           | Critical threshold for journey speed index (in ms)                                                                                                                     |                   |             |
| WARNINGJOURNEYTTFB                  | Warning threshold for journey time to first byte (in ms)                                                                                                               |                   |             |
| CRITICALJOURNEYTTFB                 | Critical threshold for journey time to first byte (in ms).  =back  nteraction related metrics  The following parameters take effect only if --show-interactions is set |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

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
/usr/lib/centreon/plugins/centreon_monitoring_centreon_dem_restapi.pl \
	--plugin=apps::centreon::dem::restapi::plugin \
	--mode=user-journey-statistics  \
	--api-token='XXX' \
	--timeout='10' \
	--site-id='XXX'  \
	--timeframe='300' \
	--journey-id='XXX' \
	--warning-journey-performance-score='' \
	--critical-journey-performance-score='' \
	--warning-journey-hero-time='' \
	--critical-journey-hero-time='' \
	--warning-journey-speed-index='' \
	--critical-journey-speed-index='' \
	--warning-journey-ttfb='' \
	--critical-journey-ttfb='' \
	--warning-interaction-performance-score='' \
	--critical-interaction-performance-score='' \
	--warning-interaction-hero-time='' \
	--critical-interaction-hero-time='' \
	--warning-interaction-speed-index='' \
	--critical-interaction-speed-index='' \
	--warning-interaction-ttfb='' \
	--critical-interaction-ttfb='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: User journey is OK | 'metrics1#journey.performance.score'=16818;;;0;100 'metrics2#journey.performance.score'=9864;;;0;100 'metrics1#journey.herotime.milliseconds'=70036ms;;;0; 'metrics2#journey.herotime.milliseconds'=76763ms;;;0; 'metrics1#journey.speedindex.time.milliseconds'=42976ms;;;0; 'metrics2#journey.speedindex.time.milliseconds'=54275ms;;;0; 'metrics1#journey.ttfb.milliseconds'=27667ms;;;0; 'metrics2#journey.ttfb.milliseconds'=43720ms;;;0; 'metrics1#interaction.performance.score'=8904;;;0;100 'metrics2#interaction.performance.score'=7892;;;0;100 'metrics1#herotime.milliseconds'=65803ms;;;0; 'metrics2#herotime.milliseconds'=63904ms;;;0; 'metrics1#speedindex.time.milliseconds'=15168ms;;;0; 'metrics2#speedindex.time.milliseconds'=52058ms;;;0; 'metrics1#ttfb.milliseconds'=89426ms;;;0; 'metrics2#ttfb.milliseconds'=18905ms;;;0; 
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
/usr/lib/centreon/plugins/centreon_monitoring_centreon_dem_restapi.pl \
	--plugin=apps::centreon::dem::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                    | Modèle de service associé                                         |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
| list-user-journeys [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/listuserjourneys.pm)]           | Utilisé pour la découverte de services                            |
| rum [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/rum.pm)]                                       | App-Monitoring-Centreon-DEM-RUM-Restapi-custom                    |
| site-overview [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/siteoverview.pm)]                    | App-Monitoring-Centreon-DEM-Siteoverview-Restapi-custom           |
| user-journey-incidents [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/userjourneyincidents.pm)]   | App-Monitoring-Centreon-DEM-Userjourney-Incidents-Restapi-custom  |
| user-journey-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/dem/restapi/mode/userjourneystatistics.pm)] | App-Monitoring-Centreon-DEM-Userjourney-Statistics-Restapi-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Centreon Experience Monitoring (formerly Quanta) API hostname (default: 'api.quanta.io')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --api-path                                 | API URL path (default: '/api/v1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-token                                | API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --timeout                                  | Set HTTP timeout.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="RUM Overview" label="RUM Overview">

| Option                            | Description                                                                                                                           |
|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| --site-id                         | Set ID of the site (mandatory option).                                                                                                |
| --timeframe                       | Set timeframe in seconds (default: 1800).                                                                                             |
| --perspective                     | Set the perspective in which the data will be applied. Can be: 'all', 'url', 'browser', 'country', 'city', 'os' (default: 'all').     |
| --limit-results                   | To be used with --perspective. Limit the number of results to be fetched (number of different URLs, browsers, etc...). (default: 10). |
| --warning-sessions                | Warning threshold for sessions.                                                                                                       |
| --critical-sessions               | Critical threshold for sessions.                                                                                                      |
| --warning-page-views              | Warning threshold for page views.                                                                                                     |
| --critical-page-views             | Critical threshold for page views.                                                                                                    |
| --warning-bounce-rate             | Warning threshold for bounce rate.                                                                                                    |
| --critical-bounce-rate            | Critical threshold for bounce rate.                                                                                                   |
| --warning-ttfb                    | Warning threshold for time to first byte (in ms).                                                                                     |
| --critical-ttfb                   | Critical threshold for time to first byte (in ms).                                                                                    |
| --warning-onload                  | Warning threshold for `onload` time (in ms).                                                                                          |
| --critical-onload                 | Critical threshold for `onload` time (in ms).                                                                                         |
| --warning-interaction-next-paint  | Warning threshold for time to interaction next paint (in ms).                                                                         |
| --critical-interaction-next-paint | Critical threshold for time to interaction next paint (in ms).                                                                        |
| --warning-speed-index             | Warning threshold for speed index.                                                                                                    |
| --critical-speed-index            | Critical threshold for speed index.                                                                                                   |

</TabItem>
<TabItem value="Site Performances Overview" label="Site Performances Overview">

| Option                            | Description                                    |
|:----------------------------------|:-----------------------------------------------|
| --site-id                         | Set ID of the site (mandatory option).         |
| --timeframe                       | Set timeframe in seconds (default: 3600).      |
| --warning-performance-score       | Warning threshold for performance score.       |
| --critical-performance-score      | Critical threshold for performance score.      |
| --warning-digital-sobriety-score  | Warning threshold for digital sobriety score.  |
| --critical-digital-sobriety-score | Critical threshold for digital sobriety score. |
| --warning-eco-design-score        | Warning threshold for `eco design` score.      |
| --critical-eco-design-score       | Critical threshold for `eco design` score.     |
| --warning-carbon-footprint        | Warning threshold for carbon footprint.        |
| --critical-carbon-footprint       | Critical threshold for carbon footprint.       |

</TabItem>
<TabItem value="User Journey Incidents" label="User Journey Incidents">

| Option                       | Description                                                                                                                                                                               |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --site-id                    | Set ID of the site (mandatory option).                                                                                                                                                    |
| --journey-id                 | Set ID of the user journey (mandatory option).                                                                                                                                            |
| --timeframe                  | Set timeframe in seconds (default: 300).                                                                                                                                                  |
| --ignore-closed              | Ignore closed incidents.                                                                                                                                                                  |
| --warning-incidents-total    | Warning threshold for incidents total.                                                                                                                                                    |
| --critical-incidents-total   | Critical threshold for incidents total.                                                                                                                                                   |
| --warning-incident-status    | Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: `%\{status\}`.  Example: `--warning-incident-status='%\{status\} =~ /open/i'`     |
| --critical-incident-status   | Define the conditions to match for the status to be B\<CRITICAL\>.  You can use the following variables: `%\{status\}`.  Default: `--critical-incident-status='%\{status\} =~ /open/i'`   |
| --warning-incident-type      | Define the conditions to match for the incident type to be B\<WARNING\>.  You can use the following variables: `%\{type\}`.  Example: `--warning-incident-type='%\{type\} =~ /error/i'`   |
| --critical-incident-type     | Define the conditions to match for the incident type to be B\<CRITICAL\>.  You can use the following variables: `%\{type\}`.  Example: `--critical-incident-type='%\{type\} =~ /error/i'` |
| --warning-incident-duration  | Warning threshold for incident duration (in seconds).                                                                                                                                     |
| --critical-incident-duration | Critical threshold for incident duration (in seconds).                                                                                                                                    |

</TabItem>
<TabItem value="User Journey Statistics" label="User Journey Statistics">

| Option                                   | Description                                                                                                                                                              |
|:-----------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --site-id                                | Set ID of the site (mandatory option).                                                                                                                                   |
| --journey-id                             | Set ID of the user journey (mandatory option).                                                                                                                           |
| --show-interactions                      | Also monitor interactions (scenario's steps) of a user journey.                                                                                                          |
| --timeframe                              | Set timeframe in seconds (default: 300).                                                                                                                                 |
| --warning-journey-performance-score      | Warning threshold for journey performance score.                                                                                                                         |
| --critical-journey-performance-score     | Critical threshold for journey performance score.                                                                                                                        |
| --warning-journey-hero-time              | Warning threshold for journey hero time (in ms).                                                                                                                         |
| --critical-journey-hero-time             | Critical threshold for journey hero time (in ms).                                                                                                                        |
| --warning-journey-speed-index            | Warning threshold for journey speed index (in ms).                                                                                                                       |
| --critical-journey-speed-index           | Critical threshold for journey speed index (in ms).                                                                                                                      |
| --warning-journey-ttfb                   | Warning threshold for journey time to first byte (in ms).                                                                                                                |
| --critical-journey-ttfb                  | Critical threshold for journey time to first byte (in ms).  =back  nteraction related metrics  The following parameters take effect only if --show-interactions is set   |
| --warning-interaction-performance-score  | Warning threshold for interaction performance score.                                                                                                                     |
| --critical-interaction-performance-score | Critical threshold for interaction performance score.                                                                                                                    |
| --warning-interaction-hero-time          | Warning threshold for interaction hero time (in ms).                                                                                                                     |
| --critical-interaction-hero-time         | Critical threshold for interaction hero time (in ms).                                                                                                                    |
| --warning-interaction-speed-index        | Warning threshold for interaction speed index (in ms).                                                                                                                   |
| --critical-interaction-speed-index       | Critical threshold for interaction speed index (in ms).                                                                                                                  |
| --warning-interaction-ttfb               | Warning threshold for interaction time to first byte (in ms).                                                                                                            |
| --critical-interaction-ttfb              | Critical threshold for time to first byte (in ms).                                                                                                                       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_centreon_dem_restapi.pl \
	--plugin=apps::centreon::dem::restapi::plugin \
	--mode=user-journey-statistics  \
	--help
```
