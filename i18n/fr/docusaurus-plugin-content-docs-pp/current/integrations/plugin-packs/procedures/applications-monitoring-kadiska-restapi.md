---
id: applications-monitoring-kadiska-restapi
title: Kadiska Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Kadiska Rest API** apporte 3 modèles d'hôte :

* **App-Monitoring-Kadiska-Restapi-Alerts-custom**
* **App-Monitoring-Kadiska-Runner-Restapi-custom**
* **App-Monitoring-Kadiska-Watcher-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Kadiska-Restapi-Alerts-custom" label="App-Monitoring-Kadiska-Restapi-Alerts-custom">

| Alias  | Modèle de service                            | Description                                       | Découverte |
|:-------|:---------------------------------------------|:--------------------------------------------------|:----------:|
| Alerts | App-Monitoring-Kadiska-Restapi-Alerts-custom | Vérifie le status des règles d'alerte de Kadiska | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Kadiska-Restapi-Alerts-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Runner-Restapi-custom" label="App-Monitoring-Kadiska-Runner-Restapi-custom">

| Alias             | Modèle de service                                       | Description                                                           | Découverte |
|:------------------|:--------------------------------------------------------|:----------------------------------------------------------------------|:----------:|
| Alerts            | App-Monitoring-Kadiska-Restapi-Alerts-custom            | Vérifie le status des règles d'alerte de Kadiska                     | X          |
| Target-Statistics | App-Monitoring-Kadiska-Restapi-Target-Statistics-custom | Contrôle les données de performance des targets Kadiska via l'API Rest | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Kadiska-Runner-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Watcher-Restapi-custom" label="App-Monitoring-Kadiska-Watcher-Restapi-custom">

| Alias                                   | Modèle de service                                                             | Description                                                            |
|:----------------------------------------|:------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| Watcher-Statistics-Per-Site-And-Gateway | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Site-And-Gateway-custom | Contrôle les données de performance des watchers Kadiska via l'API Rest |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Kadiska-Watcher-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                          | Modèle de service                                                    | Description                                                            |
|:-------------------------------|:---------------------------------------------------------------------|:-----------------------------------------------------------------------|
| Watcher-Statistics-Per-Country | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Country-custom | Contrôle les données de performance des watchers Kadiska via l'API Rest |
| Watcher-Statistics-Per-ISP     | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-ISP-custom     | Contrôle les données de performance des watchers Kadiska via l'API Rest |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle  | Description                   |
|:-----------------|:------------------------------|
| Kadiska Runners  | Découvre les Runners Kadiska  |
| Kadiska Watchers | Découvre les Watchers Kadiska |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                                  | Description                                          |
|:-------------------------------------------------|:-----------------------------------------------------|
| App-Monitoring-Kadiska-Restapi-Alert-Rules       | Découvre les règles d'alerte de Kadiska             |
| App-Monitoring-Kadiska-Restapi-Target-Statistics | Découvre les cibles d'un tracer pour un Runner donné.|

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Métrique                    | Unité |
|:----------------------------|:------|
| rules.total.count           | count |
| rules.criticals.count       | count |
| rules.warnings.count        | count |
| rules.nodata.count          | count |
| *rules*#rule.ok.count       | count |
| *rules*#rule.warning.count  | count |
| *rules*#rule.critical.count | count |
| *rules*#rule.nodata.count   | count |

</TabItem>
<TabItem value="Target-Statistics" label="Target-Statistics">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| *targets*#tracer.round.trip.persecond    | ms    |
| *targets*#tracer.path.length             | N/A   |
| *targets*#tracer.packets.loss.percentage | %     |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| *country*#watcher.dtt.spent.time.milliseconds         | ms    |
| *country*#watcher.errors.percentage                   | %     |
| *country*#watcher.network.spent.time.milliseconds     | ms    |
| *country*#watcher.sessions.count                      | count |
| *country*#watcher.srt.spent.time.milliseconds         | ms    |
| *country*#watcher.requests.count                      | count |
| *country*#watcher.redirect.time.milliseconds          | ms    |
| *country*#watchers.loading.page.duration.milliseconds | ms    |
| *country*#watchers.pages.count                        | count |
| *country*#watchers.processing.duration.milliseconds   | ms    |
| *country*#watchers.users.count                        | count |
| *country*#watchers.waiting.time.milliseconds          | ms    |
| *isp*#isp.dtt.spent.time.milliseconds                 | ms    |
| *isp*#isp.errors.percentage                           | %     |
| *isp*#isp.network.spent.time.milliseconds             | ms    |
| *isp*#isp.sessions.count                              | count |
| *isp*#isp.srt.spent.time.milliseconds                 | ms    |
| *isp*#isp.requests.count                              | count |
| *isp*#isp.redirect.time.milliseconds                  | ms    |
| *isp*#isp.loading.page.duration.milliseconds          | ms    |
| *isp*#isp.pages.count                                 | count |
| *isp*#isp.processing.duration.milliseconds            | ms    |
| *isp*#isp.users.count                                 | count |
| *isp*#isp.waiting.time.milliseconds                   | ms    |
| *watcher*~watcher.dtt.spent.time.milliseconds         | ms    |
| *watcher*~watcher.errors.percentage                   | %     |
| *watcher*~watcher.network.spent.time.milliseconds     | ms    |
| *watcher*~watcher.loading.page.duration.milliseconds  | ms    |
| *watcher*~watcher.pages.count                         | count |
| *watcher*~watcher.processing.duration.milliseconds    | ms    |
| *watcher*~watcher.redirect.time.milliseconds          | ms    |
| *watcher*~watcher.requests.count                      | count |
| *watcher*~watcher.sessions.count                      | count |
| *watcher*~watcher.srt.spent.time.milliseconds         | ms    |
| *watcher*~watcher.users.count                         | count |
| *watcher*~watcher.waiting.time.milliseconds           | ms    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| *country*#watcher.dtt.spent.time.milliseconds         | ms    |
| *country*#watcher.errors.percentage                   | %     |
| *country*#watcher.network.spent.time.milliseconds     | ms    |
| *country*#watcher.sessions.count                      | count |
| *country*#watcher.srt.spent.time.milliseconds         | ms    |
| *country*#watcher.requests.count                      | count |
| *country*#watcher.redirect.time.milliseconds          | ms    |
| *country*#watchers.loading.page.duration.milliseconds | ms    |
| *country*#watchers.pages.count                        | count |
| *country*#watchers.processing.duration.milliseconds   | ms    |
| *country*#watchers.users.count                        | count |
| *country*#watchers.waiting.time.milliseconds          | ms    |
| *isp*#isp.dtt.spent.time.milliseconds                 | ms    |
| *isp*#isp.errors.percentage                           | %     |
| *isp*#isp.network.spent.time.milliseconds             | ms    |
| *isp*#isp.sessions.count                              | count |
| *isp*#isp.srt.spent.time.milliseconds                 | ms    |
| *isp*#isp.requests.count                              | count |
| *isp*#isp.redirect.time.milliseconds                  | ms    |
| *isp*#isp.loading.page.duration.milliseconds          | ms    |
| *isp*#isp.pages.count                                 | count |
| *isp*#isp.processing.duration.milliseconds            | ms    |
| *isp*#isp.users.count                                 | count |
| *isp*#isp.waiting.time.milliseconds                   | ms    |
| *watcher*~watcher.dtt.spent.time.milliseconds         | ms    |
| *watcher*~watcher.errors.percentage                   | %     |
| *watcher*~watcher.network.spent.time.milliseconds     | ms    |
| *watcher*~watcher.loading.page.duration.milliseconds  | ms    |
| *watcher*~watcher.pages.count                         | count |
| *watcher*~watcher.processing.duration.milliseconds    | ms    |
| *watcher*~watcher.redirect.time.milliseconds          | ms    |
| *watcher*~watcher.requests.count                      | count |
| *watcher*~watcher.sessions.count                      | count |
| *watcher*~watcher.srt.spent.time.milliseconds         | ms    |
| *watcher*~watcher.users.count                         | count |
| *watcher*~watcher.waiting.time.milliseconds           | ms    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| *country*#watcher.dtt.spent.time.milliseconds         | ms    |
| *country*#watcher.errors.percentage                   | %     |
| *country*#watcher.network.spent.time.milliseconds     | ms    |
| *country*#watcher.sessions.count                      | count |
| *country*#watcher.srt.spent.time.milliseconds         | ms    |
| *country*#watcher.requests.count                      | count |
| *country*#watcher.redirect.time.milliseconds          | ms    |
| *country*#watchers.loading.page.duration.milliseconds | ms    |
| *country*#watchers.pages.count                        | count |
| *country*#watchers.processing.duration.milliseconds   | ms    |
| *country*#watchers.users.count                        | count |
| *country*#watchers.waiting.time.milliseconds          | ms    |
| *isp*#isp.dtt.spent.time.milliseconds                 | ms    |
| *isp*#isp.errors.percentage                           | %     |
| *isp*#isp.network.spent.time.milliseconds             | ms    |
| *isp*#isp.sessions.count                              | count |
| *isp*#isp.srt.spent.time.milliseconds                 | ms    |
| *isp*#isp.requests.count                              | count |
| *isp*#isp.redirect.time.milliseconds                  | ms    |
| *isp*#isp.loading.page.duration.milliseconds          | ms    |
| *isp*#isp.pages.count                                 | count |
| *isp*#isp.processing.duration.milliseconds            | ms    |
| *isp*#isp.users.count                                 | count |
| *isp*#isp.waiting.time.milliseconds                   | ms    |
| *watcher*~watcher.dtt.spent.time.milliseconds         | ms    |
| *watcher*~watcher.errors.percentage                   | %     |
| *watcher*~watcher.network.spent.time.milliseconds     | ms    |
| *watcher*~watcher.loading.page.duration.milliseconds  | ms    |
| *watcher*~watcher.pages.count                         | count |
| *watcher*~watcher.processing.duration.milliseconds    | ms    |
| *watcher*~watcher.redirect.time.milliseconds          | ms    |
| *watcher*~watcher.requests.count                      | count |
| *watcher*~watcher.sessions.count                      | count |
| *watcher*~watcher.srt.spent.time.milliseconds         | ms    |
| *watcher*~watcher.users.count                         | count |
| *watcher*~watcher.waiting.time.milliseconds           | ms    |

</TabItem>
</Tabs>

## Prérequis

Un **client ID** et **client secret** pour joindre l'API de Kadiska sont nécessaires.

Pour créer cette paire, rendez-vous sur https://app.kadiska.com/, dans **Configuration > API Clients** et créez un client avec le rôle **Data Analyst**. Sauvegardez en lieu sûr le client secret, il ne sera pas possible ensuite de le retrouver depuis l'interface.

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
dnf install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Kadiska Rest API**
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
dnf install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Kadiska-Restapi-Alerts-custom" label="App-Monitoring-Kadiska-Restapi-Alerts-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Kadiska-Restapi-Alerts-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                  | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KADISKAAPIPROTO        | Specify https if needed (Default: 'https')                                                            | https             |             |
| KADISKAAPIPORT         | Port used (Default: 443)                                                                              | 443               |             |
| KADISKAAPICLIENTID     | Set client ID                                                                                         |                   | X           |
| KADISKAAPICLIENTSECRET | Set client secret                                                                                     |                   | X           |
| TIMEOUT                | Set timeout in seconds (Default: 10)                                                                  |                   |             |
| KADISKAEXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Runner-Restapi-custom" label="App-Monitoring-Kadiska-Runner-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Kadiska-Runner-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                  | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KADISKAAPIPROTO        | Specify https if needed (Default: 'https')                                                            | https             |             |
| KADISKAAPIPORT         | Port used (Default: 443)                                                                              | 443               |             |
| KADISKAAPICLIENTID     | Set client ID                                                                                         |                   | X           |
| KADISKAAPICLIENTSECRET | Set client secret                                                                                     |                   | X           |
| RUNNERNAME             | Filter on runner name to display net tracer targets' statistics linked to a particular runner         |                   |             |
| TIMEOUT                | Set timeout in seconds (Default: 10)                                                                  |                   |             |
| KADISKAEXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="App-Monitoring-Kadiska-Watcher-Restapi-custom" label="App-Monitoring-Kadiska-Watcher-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Kadiska-Watcher-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                  | Description                                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KADISKAAPIPROTO        | Specify https if needed (Default: 'https')                                                                                                                         | https             |             |
| KADISKAAPIPORT         | Port used (Default: 443)                                                                                                                                           | 443               |             |
| GATEWAYNAME            | Display statistics for watchers attached to a particular gateway                                                                                                   |                   |             |
| KADISKAAPICLIENTID     | Set client ID                                                                                                                                                     |                   | X           |
| KADISKAAPICLIENTSECRET | Set client secret                                                                                                                                                  |                   | X           |
| SITENAME               | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub" |                   |             |
| TIMEOUT                | Set timeout in seconds (Default: 10)                                                                                                                               |                   |             |
| WATCHERNAME            | Display statistics for a particular watcher                                                                                                                        |                   |             |
| KADISKAEXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                              |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERIOD       |                                                                                                     | 15                |             |
| RULENAME     | Only get rules by name (can be a regexp)                                                            |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Target-Statistics" label="Target-Statistics">

| Macro                   | Description                                                                                                                                                                                               | Valeur par défaut | Obligatoire |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERIOD                  |                                                                                                                                                                                                           | 15                |             |
| TARGETNAME              | Filter to display statistics for particular net tracer targets. Can be a regex or a single tracer target. A target name must be given. Regex example: --filter-target-name="(mylab.com\|shop.mylab.com)" |                   |             |
| WARNINGPACKETSLOSSPRCT  | Warning threshold for packet loss in percentage                                                                                                                                                                             |             |
| CRITICALPACKETSLOSSPRCT | Critical threshold for packet loss in percentage                                                                                                                                                        |                   |             |
| WARNINGPATHLENGTH       | Warning threshold for path length to reach targets                                                                                                                                                        |                   |             |
| CRITICALPATHLENGTH      | Critical threshold for path length to reach targets.                                                                  |                   |             |
| WARNINGROUNDTRIP        | Warning threshold for round trip in milliseconds                                                                                                                                                          |                   |             |
| CRITICALROUNDTRIP       | Critical threshold for round trip in milliseconds                                                                                                                                                         |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                       | --verbose         |             |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Macro                               | Description                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COUNTRY                             | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country | .*                |             |
| PERIOD                              |                                                                                                                  | 15                |             |
| WARNINGCOUNTRYDTTSPENT              | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYDTTSPENT             | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYERRORSPRCT            | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYERRORSPRCT           | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYFULLTIMENETWORKSPENT  | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYFULLTIMENETWORKSPENT | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYLOADINGPAGE           | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYLOADINGPAGE          | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYPAGES                 | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYPAGES                | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYPROCESSING            | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYPROCESSING           | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYREDIRECTTIMEAVG       | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYREDIRECTTIMEAVG      | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYREQUESTS              | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYREQUESTS             | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYSESSIONS              | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYSESSIONS             | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYSRTSPENT              | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYSRTSPENT             | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYUSERS                 | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYUSERS                | Thresholds                                                                                                       |                   |             |
| WARNINGCOUNTRYWAITINGTIMEAVG        | Thresholds                                                                                                       |                   |             |
| CRITICALCOUNTRYWAITINGTIMEAVG       | Thresholds                                                                                                       |                   |             |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Macro                           | Description                                                                                       | Valeur par défaut | Obligatoire |
|:--------------------------------|:--------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ISP                             | Display statistics per ISP. Leave empty to get statistics from all ISPs, or specify a particular ISP | .*                |             |
| PERIOD                          |                                                                                                   | 15                |             |
| WARNINGISPDTTSPENT              | Thresholds                                                                                        |                   |             |
| CRITICALISPDTTSPENT             | Thresholds                                                                                        |                   |             |
| WARNINGISPERRORSPRCT            | Thresholds                                                                                        |                   |             |
| CRITICALISPERRORSPRCT           | Thresholds                                                                                        |                   |             |
| WARNINGISPFULLTIMENETWORKSPENT  | Thresholds                                                                                        |                   |             |
| CRITICALISPFULLTIMENETWORKSPENT | Thresholds                                                                                        |                   |             |
| WARNINGISPLOADINGPAGE           | Thresholds                                                                                        |                   |             |
| CRITICALISPLOADINGPAGE          | Thresholds                                                                                        |                   |             |
| WARNINGISPPAGES                 | Thresholds                                                                                        |                   |             |
| CRITICALISPPAGES                | Thresholds                                                                                        |                   |             |
| WARNINGISPPROCESSING            | Thresholds                                                                                        |                   |             |
| CRITICALISPPROCESSING           | Thresholds                                                                                        |                   |             |
| WARNINGISPREDIRECTTIMEAVG       | Thresholds                                                                                        |                   |             |
| CRITICALISPREDIRECTTIMEAVG      | Thresholds                                                                                        |                   |             |
| WARNINGISPREQUESTS              | Thresholds                                                                                        |                   |             |
| CRITICALISPREQUESTS             | Thresholds                                                                                        |                   |             |
| WARNINGISPSESSIONS              | Thresholds                                                                                        |                   |             |
| CRITICALISPSESSIONS             | Thresholds                                                                                        |                   |             |
| WARNINGISPSRTSPENT              | Thresholds                                                                                        |                   |             |
| CRITICALISPSRTSPENT             | Thresholds                                                                                        |                   |             |
| WARNINGISPUSERS                 | Thresholds                                                                                        |                   |             |
| CRITICALISPUSERS                | Thresholds                                                                                        |                   |             |
| WARNINGISPWAITINGTIMEAVG        | Thresholds                                                                                        |                   |             |
| CRITICALISPWAITINGTIMEAVG       | Thresholds                                                                                        |                   |             |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Macro                               | Description | Valeur par défaut | Obligatoire |
|:------------------------------------|:------------|:------------------|:-----------:|
| PERIOD                              |             | 15                |             |
| WARNINGCOUNTRYDTTSPENT              | Thresholds  |                   |             |
| CRITICALCOUNTRYDTTSPENT             | Thresholds  |                   |             |
| WARNINGCOUNTRYERRORSPRCT            | Thresholds  |                   |             |
| CRITICALCOUNTRYERRORSPRCT           | Thresholds  |                   |             |
| WARNINGCOUNTRYFULLTIMENETWORKSPENT  | Thresholds  |                   |             |
| CRITICALCOUNTRYFULLTIMENETWORKSPENT | Thresholds  |                   |             |
| WARNINGCOUNTRYLOADINGPAGE           | Thresholds  |                   |             |
| CRITICALCOUNTRYLOADINGPAGE          | Thresholds  |                   |             |
| WARNINGCOUNTRYPAGES                 | Thresholds  |                   |             |
| CRITICALCOUNTRYPAGES                | Thresholds  |                   |             |
| WARNINGCOUNTRYPROCESSING            | Thresholds  |                   |             |
| CRITICALCOUNTRYPROCESSING           | Thresholds  |                   |             |
| WARNINGCOUNTRYREDIRECTTIMEAVG       | Thresholds  |                   |             |
| CRITICALCOUNTRYREDIRECTTIMEAVG      | Thresholds  |                   |             |
| WARNINGCOUNTRYREQUESTS              | Thresholds  |                   |             |
| CRITICALCOUNTRYREQUESTS             | Thresholds  |                   |             |
| WARNINGCOUNTRYSESSIONS              | Thresholds  |                   |             |
| CRITICALCOUNTRYSESSIONS             | Thresholds  |                   |             |
| WARNINGCOUNTRYSRTSPENT              | Thresholds  |                   |             |
| CRITICALCOUNTRYSRTSPENT             | Thresholds  |                   |             |
| WARNINGCOUNTRYUSERS                 | Thresholds  |                   |             |
| CRITICALCOUNTRYUSERS                | Thresholds  |                   |             |
| WARNINGCOUNTRYWAITINGTIMEAVG        | Thresholds  |                   |             |
| CRITICALCOUNTRYWAITINGTIMEAVG       | Thresholds  |                   |             |
| WARNINGISPDTTSPENT                  | Thresholds  |                   |             |
| CRITICALISPDTTSPENT                 | Thresholds  |                   |             |
| WARNINGISPERRORSPRCT                | Thresholds  |                   |             |
| CRITICALISPERRORSPRCT               | Thresholds  |                   |             |
| WARNINGISPFULLTIMENETWORKSPENT      | Thresholds  |                   |             |
| CRITICALISPFULLTIMENETWORKSPENT     | Thresholds  |                   |             |
| WARNINGISPLOADINGPAGE               | Thresholds  |                   |             |
| CRITICALISPLOADINGPAGE              | Thresholds  |                   |             |
| WARNINGISPPAGES                     | Thresholds  |                   |             |
| CRITICALISPPAGES                    | Thresholds  |                   |             |
| WARNINGISPPROCESSING                | Thresholds  |                   |             |
| CRITICALISPPROCESSING               | Thresholds  |                   |             |
| WARNINGISPREDIRECTTIMEAVG           | Thresholds  |                   |             |
| CRITICALISPREDIRECTTIMEAVG          | Thresholds  |                   |             |
| WARNINGISPREQUESTS                  | Thresholds  |                   |             |
| CRITICALISPREQUESTS                 | Thresholds  |                   |             |
| WARNINGISPSESSIONS                  | Thresholds  |                   |             |
| CRITICALISPSESSIONS                 | Thresholds  |                   |             |
| WARNINGISPSRTSPENT                  | Thresholds  |                   |             |
| CRITICALISPSRTSPENT                 | Thresholds  |                   |             |
| WARNINGISPUSERS                     | Thresholds  |                   |             |
| CRITICALISPUSERS                    | Thresholds  |                   |             |
| WARNINGISPWAITINGTIMEAVG            | Thresholds  |                   |             |
| CRITICALISPWAITINGTIMEAVG           | Thresholds  |                   |             |
| WARNINGWATCHERDTTSPENT              | Thresholds  |                   |             |
| CRITICALWATCHERDTTSPENT             | Thresholds  |                   |             |
| WARNINGWATCHERERRORSPRCT            | Thresholds  |                   |             |
| CRITICALWATCHERERRORSPRCT           | Thresholds  |                   |             |
| WARNINGWATCHERFULLNETWORKTIMESPENT  |             |                   |             |
| CRITICALWATCHERFULLNETWORKTIMESPENT |             |                   |             |
| WARNINGWATCHERLOADINGPAGE           | Thresholds  |                   |             |
| CRITICALWATCHERLOADINGPAGE          | Thresholds  |                   |             |
| WARNINGWATCHERPAGES                 | Thresholds  |                   |             |
| CRITICALWATCHERPAGES                | Thresholds  |                   |             |
| WARNINGWATCHERPROCESSING            | Thresholds  |                   |             |
| CRITICALWATCHERPROCESSING           | Thresholds  |                   |             |
| WARNINGWATCHERREDIRECTTIMEAVG       | Thresholds  |                   |             |
| CRITICALWATCHERREDIRECTTIMEAVG      | Thresholds  |                   |             |
| WARNINGWATCHERREQUESTS              | Thresholds  |                   |             |
| CRITICALWATCHERREQUESTS             | Thresholds  |                   |             |
| WARNINGWATCHERSESSIONS              | Thresholds  |                   |             |
| CRITICALWATCHERSESSIONS             | Thresholds  |                   |             |
| WARNINGWATCHERSRTSPENT              | Thresholds  |                   |             |
| CRITICALWATCHERSRTSPENT             | Thresholds  |                   |             |
| WARNINGWATCHERUSERS                 | Thresholds  |                   |             |
| CRITICALWATCHERUSERS                | Thresholds  |                   |             |
| WARNINGWATCHERWAITINGTIME           |             |                   |             |
| CRITICALWATCHERWAITINGTIME          |             |                   |             |

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
/usr/lib/centreon/plugins/centreon_monitoring_kadiska_restapi.pl \
	--plugin=apps::monitoring::kadiska::plugin \
	--mode=watcher-statistics \
	--client-id='' \
	--client-secret='' \
	--select-watcher-name='' \
	--select-site-name='' \
	--select-gateway-name='' \
	--period='15' \
	--port='443' \
	--proto='https' \
	--timeout=''  \
	--warning-watcher-redirect-time-avg='' \
	--critical-watcher-redirect-time-avg='' \
	--warning-watcher-full-network-time-spent='' \
	--critical-watcher-full-network-time-spent='' \
	--warning-country-dtt-spent='' \
	--critical-country-dtt-spent='' \
	--warning-country-errors-prct='' \
	--critical-country-errors-prct='' \
	--warning-country-full-time-network-spent='' \
	--critical-country-full-time-network-spent='' \
	--warning-country-sessions='' \
	--critical-country-sessions='' \
	--warning-country-srt-spent='' \
	--critical-country-srt-spent='' \
	--warning-country-requests='' \
	--critical-country-requests='' \
	--warning-country-redirect-time-avg='' \
	--critical-country-redirect-time-avg='' \
	--warning-country-loading-page='' \
	--critical-country-loading-page='' \
	--warning-country-pages='' \
	--critical-country-pages='' \
	--warning-country-processing='' \
	--critical-country-processing='' \
	--warning-country-users='' \
	--critical-country-users='' \
	--warning-country-waiting-time-avg='' \
	--critical-country-waiting-time-avg='' \
	--warning-watcher-loading-page='' \
	--critical-watcher-loading-page='' \
	--warning-watcher-errors-prct='' \
	--critical-watcher-errors-prct='' \
	--warning-watcher-dtt-spent='' \
	--critical-watcher-dtt-spent='' \
	--warning-watcher-waiting-time='' \
	--critical-watcher-waiting-time='' \
	--warning-watcher-requests='' \
	--critical-watcher-requests='' \
	--warning-isp-dtt-spent='' \
	--critical-isp-dtt-spent='' \
	--warning-isp-errors-prct='' \
	--critical-isp-errors-prct='' \
	--warning-isp-full-time-network-spent='' \
	--critical-isp-full-time-network-spent='' \
	--warning-isp-sessions='' \
	--critical-isp-sessions='' \
	--warning-isp-srt-spent='' \
	--critical-isp-srt-spent='' \
	--warning-isp-requests='' \
	--critical-isp-requests='' \
	--warning-isp-redirect-time-avg='' \
	--critical-isp-redirect-time-avg='' \
	--warning-isp-loading-page='' \
	--critical-isp-loading-page='' \
	--warning-isp-pages='' \
	--critical-isp-pages='' \
	--warning-isp-processing='' \
	--critical-isp-processing='' \
	--warning-isp-users='' \
	--critical-isp-users='' \
	--warning-isp-waiting-time-avg='' \
	--critical-isp-waiting-time-avg='' \
	--warning-watcher-processing='' \
	--critical-watcher-processing='' \
	--warning-watcher-users='' \
	--critical-watcher-users='' \
	--warning-watcher-sessions='' \
	--critical-watcher-sessions='' \
	--warning-watcher-pages='' \
	--critical-watcher-pages='' \
	--warning-watcher-srt-spent='' \
	--critical-watcher-srt-spent='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: DTT spent: 39 ms Errors: 83% Full time network spent: 96 ms Sessions: 58 SRT spent: 61 ms Requests: 73 Redirect time avg: 97 ms Loading page duration: 71 ms Loaded pages: 76 API Processing duration: 17 ms Connected users: 76 Waiting time avg: 31 ms DTT spent: 12 ms Errors: 2% Full time network spent: 72 ms Sessions: 0 SRT spent: 87 ms Requests: 31 Redirect time avg: 20 ms Loading page duration: 88 ms Loaded pages: 26 API Processing duration: 9 ms Connected users: 7 Waiting time avg: 76 ms DTT spent: 68 ms Errors: 41% Full network time spent: 62 ms Loading page duration: 30 ms Loaded pages: 11 API Processing duration: 93 ms Redirect time avg: 23 ms Requests: 56 Sessions: 90 SRT spent: 20 ms Connected users: 63 | 'watcher.dtt.spent.time.milliseconds'=39ms;;;0; 'watcher.errors.percentage'=83%;;;0;100 'watcher.network.spent.time.milliseconds'=96ms;;;0; 'watcher.sessions.count'=58;;;0; 'watcher.srt.spent.time.milliseconds'=61ms;;;0; 'watcher.requests.count'=73;;;0; 'watcher.redirect.time.milliseconds'=97ms;;;0; 'watchers.loading.page.duration.milliseconds'=71ms;;;0; 'watchers.pages.count'=76;;;0; 'watchers.processing.duration.milliseconds'=17ms;;;0; 'watchers.users.count'=76;;;0; 'watchers.waiting.time.milliseconds'=31ms;;;0; 'isp.dtt.spent.time.milliseconds'=12ms;;;0; 'isp.errors.percentage'=2%;;;0;100 'isp.network.spent.time.milliseconds'=72ms;;;0; 'isp.sessions.count'=0;;;0; 'isp.srt.spent.time.milliseconds'=87ms;;;0; 'isp.requests.count'=31;;;0; 'isp.redirect.time.milliseconds'=20ms;;;0; 'isp.loading.page.duration.milliseconds'=88ms;;;0; 'isp.pages.count'=26;;;0; 'isp.processing.duration.milliseconds'=9ms;;;0; 'isp.users.count'=7;;;0; 'isp.waiting.time.milliseconds'=76ms;;;0; 'watcher.dtt.spent.time.milliseconds'=68ms;;;; 'watcher.errors.percentage'=41%;;;; 'watcher.network.spent.time.milliseconds'=62ms;;;; 'watcher.loading.page.duration.milliseconds'=30ms;;;; 'watcher.pages.count'=11;;;; 'watcher.processing.duration.milliseconds'=93ms;;;; 'watcher.redirect.time.milliseconds'=23ms;;;; 'watcher.requests.count'=56;;;; 'watcher.sessions.count'=90;;;; 'watcher.srt.spent.time.milliseconds'=20ms;;;; 'watcher.users.count'=63;;;; 
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
/usr/lib/centreon/plugins/centreon_monitoring_kadiska_restapi.pl \
	--plugin=apps::monitoring::kadiska::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                             | Modèle de service associé                                                                                                                                                                                                     |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/alerts.pm)]                            | App-Monitoring-Kadiska-Restapi-Alerts-custom                                                                                                                                                                                  |
| list-alert-rules [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listalertrules.pm)]          | Used for service discovery                                                                                                                                                                                                    |
| list-runners [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listrunners.pm)]                 | Used for service discovery                                                                                                                                                                                                    |
| list-targets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listtargets.pm)]                 | Used for service discovery                                                                                                                                                                                                    |
| list-watchers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/listwatchers.pm)]               | Used for service discovery                                                                                                                                                                                                    |
| nettracer-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/nettracerstatistics.pm)] | App-Monitoring-Kadiska-Restapi-Target-Statistics-custom                                                                                                                                                                       |
| watcher-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/kadiska/mode/watcherstatistics.pm)]     | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Country-custom<br />App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-ISP-custom<br />App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Site-And-Gateway-custom |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Kadiska Rest API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 | Set hostname (Default: 'app.kadiska.com').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --period                                   | Set period in minutes from which you want to get information. (Default: '15') Example: --period=60 would return you the data from last hour.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --client-id                                | Set client id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --client-secret                            | Set client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option        | Description                                  |
|:--------------|:---------------------------------------------|
| --filter-name | Only get rules by name (can be a regexp).    |

</TabItem>
<TabItem value="Target-Statistics" label="Target-Statistics">

| Option                       | Description                                                                                                                                                                                                 |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-runner-name         | Filter on runner name to display net tracer targets' statistics linked to a particular runner.                                                                                                              |
| --filter-target-name         | Filter to display statistics for particular net tracer targets. Can be a regex or a single tracer target. A target name must be given.  Regex example: --filter-target-name="(mylab.com\|shop.mylab.com)"   |
| --warning-round-trip         | Warning threshold for round trip in milliseconds.                                                                                                                                                           |
| --critical-round-trip        | Critical threshold for round trip in milliseconds.                                                                                                                                                          |
| --warning-path-length        | Warning threshold for path length to reach targets.                                                                                                                                                         |
| --critical-path-length       | Critical threshold for path length to reach targets.                                                                  |
| --critical-packets-loss-prct | Critical threshold for packets' loss in percentage.                                                                                                                                                         |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Option                                                                       | Description                                                                                                                                                                                                 |
|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --select-site-name                                                           | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub"                                          |
| --select-gateway-name                                                        | Display statistics for watchers attached to a particular gateway.                                                                                                                                           |
| --select-watcher-name                                                        | Display statistics for a particular watcher.                                                                                                                                                                |
| --country                                                                    | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country.                                                                                           |
| --isp                                                                        | Display statistics per ISP. Leave empty to get statistics from all ISP, or specify particular ISP.                                                                                                          |
| --wfa                                                                        | Display statistics for watchers used by work-from-anywhereusers.                                                                                                                                            |
| --warning-\[country\|isp\|watcher\]-* --critical-\[country\|isp\|watcher\]-* | Thresholds. Can be: 'dtt-spent', 'errors-prct', 'full-time-network-spent', 'sessions', 'srt-spent', 'requests', 'redirect-time-avg', 'loading-page', 'pages', 'processing', 'users', 'waiting-time-avg'.    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Option                                                                       | Description                                                                                                                                                                                                 |
|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --select-site-name                                                           | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub"                                          |
| --select-gateway-name                                                        | Display statistics for watchers attached to a particular gateway.                                                                                                                                           |
| --select-watcher-name                                                        | Display statistics for a particular watcher.                                                                                                                                                                |
| --country                                                                    | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country.                                                                                           |
| --isp                                                                        | Display statistics per ISP. Leave empty to get statistics from all ISP, or specify particular ISP.                                                                                                          |
| --wfa                                                                        | Display statistics for watchers used by work-from-anywhereusers.                                                                                                                                            |
| --warning-\[country\|isp\|watcher\]-* --critical-\[country\|isp\|watcher\]-* | Thresholds. Can be: 'dtt-spent', 'errors-prct', 'full-time-network-spent', 'sessions', 'srt-spent', 'requests', 'redirect-time-avg', 'loading-page', 'pages', 'processing', 'users', 'waiting-time-avg'.    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Option                                                                       | Description                                                                                                                                                                                                 |
|:-----------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --select-site-name                                                           | Display statistics for watchers on a particular site.  Leave empty to get work-from-home watchers statistics: --select-site-name="" --select-watcher-name="GitHub"                                          |
| --select-gateway-name                                                        | Display statistics for watchers attached to a particular gateway.                                                                                                                                           |
| --select-watcher-name                                                        | Display statistics for a particular watcher.                                                                                                                                                                |
| --country                                                                    | Display statistics per country.  Leave empty to get statistics from all countries, or specify particular country.                                                                                           |
| --isp                                                                        | Display statistics per ISP. Leave empty to get statistics from all ISP, or specify particular ISP.                                                                                                          |
| --wfa                                                                        | Display statistics for watchers used by work-from-anywhereusers.                                                                                                                                            |
| --warning-\[country\|isp\|watcher\]-* --critical-\[country\|isp\|watcher\]-* | Thresholds. Can be: 'dtt-spent', 'errors-prct', 'full-time-network-spent', 'sessions', 'srt-spent', 'requests', 'redirect-time-avg', 'loading-page', 'pages', 'processing', 'users', 'waiting-time-avg'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_monitoring_kadiska_restapi.pl \
	--plugin=apps::monitoring::kadiska::plugin \
	--mode=watcher-statistics \
	--help
```
