---
id: applications-monitoring-kadiska-restapi
title: Kadiska Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 

## Contenu du Pack

### Modèles

Le Pack Centreon **Kadiska Rest API** apporte 2 modèles d'hôte différents :

* App-Monitoring-Kadiska-Runner-Restapi-custom
* App-Monitoring-Kadiska-Watcher-Restapi-custom

Il apporte les modèles de service suivants :

| Alias                                   | Modèle de service                                                      | Description                                                            | Défaut | Découverte |
|:----------------------------------------|:-----------------------------------------------------------------------|:-----------------------------------------------------------------------|:-------|:-----------|
| Target-Statistics                       | App-Monitoring-Kadiska-Restapi-Target-Statistics                       | Contrôle les données de performances des targets Kadiska via Rest API  | X      | X          |
| Watcher-Statistics-Per-Country          | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Country          | Contrôle les données de performances des watchers Kadiska par pays     |        |            |
| Watcher-Statistics-Per-ISP              | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-ISP              | Contrôle les données de performances des watchers Kadiska par ISP      |        |            |
| Watcher-Statistics-Per-Site-And-Gateway | App-Monitoring-Kadiska-Restapi-Watcher-Statistics-Per-Site-And-Gateway | Contrôle les données de performances des watchers Kadiska par site et gateway | X      |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle | Description                    |
|:----------------|:-------------------------------|
| Runners         | Découverte de runners Kadiska  |
| Watchers        | Découverte de watchers Kadiska |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
<TabItem value="Service" label="Service">

| Nom de la règle                                  | Description                                                                             |
|:-------------------------------------------------|:----------------------------------------------------------------------------------------|
| App-Monitoring-Kadiska-Restapi-Target-Statistics | Découverte de targets associées à un runner et supervise ses données de performances.    |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Target-Statistics" label="Target-Statistics">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| *targets*#tracer.packets.loss.percentage | %     |
| *targets*#tracer.path.length             |       |
| *targets*#tracer.round.trip.persecond    | ms    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Country" label="Watcher-Statistics-Per-Country">

| Metric Name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *country*#country.dtt.spent.time.milliseconds        | ms    |
| *country*#country.errors.percentage                  | %     |
| *country*#country.network.spent.time.milliseconds    | ms    |
| *country*#country.loading.page.duration.milliseconds | ms    |
| *country*#country.pages.count                        | count |
| *country*#country.processing.duration.milliseconds   | ms    |
| *country*#country.redirect.time.milliseconds         | ms    |
| *country*#country.requests.count                     | count |
| *country*#country.sessions.count                     | count |
| *country*#country.srt.spent.time.milliseconds        | ms    |
| *country*#country.users.count                        | count |
| *country*#country.waiting.time.milliseconds          | ms    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-ISP" label="Watcher-Statistics-Per-ISP">

| Metric Name                                           | Unit  |
|:------------------------------------------------------|:------|
| *isp*#isp.dtt.spent.time.milliseconds                 | ms    |
| *isp*#isp.errors.percentage                           | %     |
| *isp*#isp.network.spent.time.milliseconds             | ms    |
| *isp*#isp.loading.page.duration.milliseconds          | ms    |
| *isp*#isp.pages.count                                 | count |
| *isp*#isp.processing.duration.milliseconds            | ms    |
| *isp*#isp.redirect.time.milliseconds                  | ms    |
| *isp*#isp.requests.count                              | count |
| *isp*#isp.sessions.count                              | count |
| *isp*#isp.srt.spent.time.milliseconds                 | ms    |
| *isp*#isp.users.count                                 | count |
| *isp*#isp.waiting.time.milliseconds                   | ms    |

</TabItem>
<TabItem value="Watcher-Statistics-Per-Site-And-Gateway" label="Watcher-Statistics-Per-Site-And-Gateway">

| Metric Name                                                                                | Unit  |
|:-------------------------------------------------------------------------------------------|:------|
| *watcher_name~site_name~gateway_name*watcher.dtt.spent.time.milliseconds                   | ms    |
| *watcher_name~site_name~gateway_name*watcher.errors.percentage                             | %     |
| *watcher_name~site_name~gateway_name*watcher.network.spent.time.milliseconds               | ms    |
| *watcher_name~site_name~gateway_name*watcher.loading.page.duration.milliseconds            | ms    |
| *watcher_name~site_name~gateway_name*watcher.pages.count                                   | count |
| *watcher_name~site_name~gateway_name*watcher.processing.duration.milliseconds              | ms    |
| *watcher_name~site_name~gateway_name*watcher.redirect.time.milliseconds                    | ms    |
| *watcher_name~site_name~gateway_name*watcher.requests.count                                | count |
| *watcher_name~site_name~gateway_name*watcher.sessions.count                                | count |
| *watcher_name~site_name~gateway_name*watcher.srt.spent.time.milliseconds                   | ms    |
| *watcher_name~site_name~gateway_name*watcher.users.count                                   | count |
| *watcher_name~site_name~gateway_name*watcher.waiting.time.milliseconds                     | ms    |

</TabItem>
</Tabs>

## Prérequis

Un **client ID** et **client secret** pour joindre l'API de Kadiska sont nécessaires.

Pour créer cette paire, rendez-vous sur https://app.kadiska.com/, dans **Configuration > API Clients** et créez un client avec le rôle **Data Analyst**. Sauvegardez en lieu sûr le client secret, il ne sera pas possible ensuite de le retrouver depuis l'interface.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-kadiska-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Kadiska Rest API**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
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
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-kadiska-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

#### Runner Kadiska

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** correspondant à votre runner Kadiska.
* Spécifier l'adresse de l'API Kadiska au niveau du champs **IP Address/DNS**.
* Appliquez le modèle d'hôte **App-Monitoring-Kadiska-Runner-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Défaut : '443')                                                                       |
|             | KADISKAAPIPROTO        | (Défaut : 'https')                                                                     |
| X           | RUNNERNAME             | Spécifiez le nom du runner Kadiska                                                     |
|             | TIMEOUT                |                                                                                        |

#### Watcher Kadiska

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** correspondant à votre watcher Kadiska.
* Spécifier l'adresse de l'API Kadiska au niveau du champs **IP Address/DNS**.
* Appliquez le modèle d'hôte **App-Monitoring-Kadiska-Watcher-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Défaut : '443')                                                                       |
|             | KADISKAAPIPROTO        | (Défaut : 'https')                                                                     |
|             | GATEWAYNAME            | Specifiez le nom de la gateway Kadiska                                                 |
|             | SITENAME               | Specifiez le nom du site lié au watcher                                                |
| X           | WATCHERNAME            | Spécifiez le nom du watcher Kadiska                                                    |
|             | TIMEOUT                |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=watcher-statistics \
    --client-id= \
    --client-secret= \
    --select-watcher-name= \
    --select-site-name= \
    --select-gateway-name= \
    --period=15 \
    --port='443' \
    --proto='https' \
    --timeout='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: DTT spent: 9000 ms Errors: 9000 Full time network spent: 9000 ms Sessions: 9000 SRT spent: 9000 ms Requests: 9000 Redirect time avg: 9000 ms Loading page duration: 9000 ms Loaded pages: %d API Processing duration: 9000 ms Connected users: 9000 Waiting time avg: 9000 ms DTT spent: 9000 ms Errors: 9000%% Full time network spent: 9000 ms Sessions: 9000 SRT spent: 9000 ms Requests: 9000 Redirect time avg: 9000 ms Loading page duration: 9000 ms Loaded pages: %d API Processing duration: 9000 ms Connected users: 9000 Waiting time avg: 9000 ms DTT spent: 9000 ms Errors: 9000% Full network time spent: 9000 ms Loading page duration: 9000 ms Loaded pages: %d API Processing duration: 9000 ms Redirect time avg: 9000 ms Requests: 9000 Sessions: 9000 SRT spent: 9000 ms Connected users: 9000 Waiting time: 9000 ms | 'isp.dtt.spent.time.milliseconds'=9000ms;;;0; 'isp.errors.percentage'=9000%;;;0;100 'isp.network.spent.time.milliseconds'=9000ms;;;0; 'isp.sessions.count'=9000;;;0; 'isp.srt.spent.time.milliseconds'=9000ms;;;0; 'isp.requests.count'=9000;;;0; 'isp.redirect.time.milliseconds'=9000ms;;;0; 'isp.loading.page.duration.milliseconds'=9000ms;;;0; 'isp.pages.count'=9000;;;0; 'isp.processing.duration.milliseconds'=9000ms;;;0; 'users.count'=9000;;;0; 'isp.waiting.time.milliseconds'=9000ms;;;0; 'watcher.dtt.spent.time.milliseconds'=9000ms;;;0; 'watcher.errors.percentage'=9000%;;;0;100 'watcher.network.spent.time.milliseconds'=9000ms;;;0; 'watcher.sessions.count'=9000;;;0; 'watcher.srt.spent.time.milliseconds'=9000ms;;;0; 'watcher.requests.count'=9000;;;0; 'watcher.redirect.time.milliseconds'=9000ms;;;0; 'watchers.loading.page.duration.milliseconds'=9000ms;;;0; 'watchers.pages.count'=9000;;;0; 'watchers.processing.duration.milliseconds'=9000ms;;;0; 'users.count'=9000;;;0; 'watchers.waiting.time.milliseconds'=9000ms;;;0; 'watcher.dtt.spent.time.milliseconds'=9000;;;; 'watcher.errors.percentage'=9000;;;; 'watcher.network.spent.time.milliseconds'=9000;;;; 'watcher.loading.page.duration.milliseconds'=9000;;;; 'watcher.pages.count'=9000;;;; 'watcher.processing.duration.milliseconds'=9000;;;; 'watcher.redirect.time.milliseconds'=9000;;;; 'watcher.requests.count'=9000;;;; 'watcher.sessions.count'=9000;;;; 'watcher.srt.spent.time.milliseconds'=9000;;;; 'users.count'=9000;;;; 'watcher.waiting.time.milliseconds'=9000;;;; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=watcher-statistics \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
