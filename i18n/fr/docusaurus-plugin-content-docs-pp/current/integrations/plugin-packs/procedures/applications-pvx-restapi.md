---
id: applications-pvx-restapi
title: PVX
description: Supervisez PVX (Accedian Skylight) via l'API REST : hits HTTP, connexions réseau, trafic et expérience utilisateur.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **PVX**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **PVX** apporte un modèle d'hôte :

* **App-Pvx-Application-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Pvx-Application-Restapi-custom" label="App-Pvx-Application-Restapi-custom">

| Alias                               | Modèle de service                                          | Description                                                                |
|:------------------------------------|:-----------------------------------------------------------|:---------------------------------------------------------------------------|
| Http-Hits-Application               | App-Pvx-Http-Hits-Application-Restapi-custom               | Contrôle le nombre d'erreurs HTTP                                          |
| Network-Connection-Application      | App-Pvx-Network-Connection-Application-Restapi-custom      | Contrôle le ratio connexions tentées/connexions réussies par application |
| Network-Traffic-Application         | App-Pvx-Network-Traffic-Application-Restapi-custom         | Contrôle le trafic par application                                        |
| Network-User-Experience-Application | App-Pvx-Network-User-Experience-Application-Restapi-custom | Contrôle l'expérience utilisateur par application                          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Pvx-Application-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                             | Modèle de service                                        | Description                                                                         |
|:----------------------------------|:---------------------------------------------------------|:------------------------------------------------------------------------------------|
| Http-Hits                         | App-Pvx-Http-Hits-Restapi-custom                         | Contrôle le nombre d'erreurs HTTP                                                   |
| Http-Hits-Server-Ip               | App-Pvx-Http-Hits-Server-Ip-Restapi-custom               | Contrôle le nombre d'erreurs HTTP                                                   |
| Network-Connection                | App-Pvx-Network-Connection-Restapi-custom                | Contrôle le ratio connexions tentées/connexions réussies par instance |
| Network-Connection-Server-Ip      | App-Pvx-Network-Connection-Server-Ip-Restapi-custom      | Contrôle le ratio connections tentées/connexions réussies par IP         |
| Network-Traffic                   | App-Pvx-Network-Traffic-Restapi-custom                   | Contrôle le trafic par instance                                        |
| Network-Traffic-Layer             | App-Pvx-Network-Traffic-Layer-Restapi-custom             | Contrôle le trafic par "layer"                                                   |
| Network-Traffic-Server-Ip         | App-Pvx-Network-Traffic-Server-Ip-Restapi-custom         | Contrôle le trafic par IP                                               |
| Network-User-Experience           | App-Pvx-Network-User-Experience-Restapi-custom           | Contrôle l'expérience utilisateur par instance                        |
| Network-User-Experience-Server-Ip | App-Pvx-Network-User-Experience-Server-Ip-Restapi-custom | Contrôle l'expérience utilisateur par IP                                  |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Http-Hits" label="Http-Hits">

| Nom                                   | Unité  |
|:--------------------------------------|:-------|
| *instances*#http.hits.percentage      | %      |
| *instances*#http.hits.error.persecond | hits/s |
| *instances*#http.hits.persecond       | hits/s |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Http-Hits-Application" label="Http-Hits-Application">

| Nom                                   | Unité  |
|:--------------------------------------|:-------|
| *instances*#http.hits.percentage      | %      |
| *instances*#http.hits.error.persecond | hits/s |
| *instances*#http.hits.persecond       | hits/s |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Http-Hits-Server-Ip" label="Http-Hits-Server-Ip">

| Nom                                   | Unité  |
|:--------------------------------------|:-------|
| *instances*#http.hits.percentage      | %      |
| *instances*#http.hits.error.persecond | hits/s |
| *instances*#http.hits.persecond       | hits/s |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Network-Connection" label="Network-Connection">

| Nom                                          | Unité         |
|:---------------------------------------------|:--------------|
| *instances*#connections.ratio.percentage     | %             |
| *instances*#connections.attempts.persecond   | connections/s |
| *instances*#connections.successful.persecond | connections/s |
| *instances*#connection.time.milliseconds     | ms            |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Network-Connection-Application" label="Network-Connection-Application">

| Nom                                          | Unité         |
|:---------------------------------------------|:--------------|
| *instances*#connections.ratio.percentage     | %             |
| *instances*#connections.attempts.persecond   | connections/s |
| *instances*#connections.successful.persecond | connections/s |
| *instances*#connection.time.milliseconds     | ms            |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Network-Connection-Server-Ip" label="Network-Connection-Server-Ip">

| Nom                                          | Unité         |
|:---------------------------------------------|:--------------|
| *instances*#connections.ratio.percentage     | %             |
| *instances*#connections.attempts.persecond   | connections/s |
| *instances*#connections.successful.persecond | connections/s |
| *instances*#connection.time.milliseconds     | ms            |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Network-Traffic" label="Network-Traffic">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-Traffic-Application" label="Network-Traffic-Application">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-Traffic-Layer" label="Network-Traffic-Layer">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-Traffic-Server-Ip" label="Network-Traffic-Server-Ip">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| traffic.aggregated.bitspersecond                      | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.client.bitspersecond                          | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |

</TabItem>
<TabItem value="Network-User-Experience" label="Network-User-Experience">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| *instances*#enduser.experience.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Network-User-Experience-Application" label="Network-User-Experience-Application">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| *instances*#enduser.experience.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Network-User-Experience-Server-Ip" label="Network-User-Experience-Server-Ip">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| *instances*#enduser.experience.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Compatibilité

Le connecteur a été testé avec les versions suivantes :
* PVX version 5.1.1

### API PVX

Pour interroger l’API PVX, vous devez générer une clé d’accès. Cette clé n’expirera jamais. La procédure ci-dessous est un extrait de la [documentation officielle](http://docs.performancevision.com/api_use.html). À chaque étape, remplacez les valeurs des macros entourées de '< \>' par les vôtres.

```bash
curl -k 'https://**<pvxapihost>**/api/login?user=**<user>**&password=**<password>**'`
```

Résultat

``` json
{
    "type": "result",
    "result": "**session:xxxxxxxx**"
}
```

Grâce à l’ID de session obtenu, exécutez la commande ci-dessous pour créer une clé secrète :

```bash
curl -k 'https://**<pvxapihost>**/api/create-api-key?name=**<keyname>**&_session=session:xxxxxxxx'
```

Résultat:

``` json
{
    "type": "result",
    "result": "**secret:xxxxxxxx**"
}
```

Dans cet exemple, la clé API est "secret:xxxxxxxx".


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
dnf install centreon-pack-applications-pvx-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-pvx-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-pvx-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-pvx-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **PVX**
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
dnf install centreon-plugin-Applications-Pvx-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Pvx-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-pvx-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Pvx-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Pvx-Application-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PVXAPIHOSTNAME     | PVX hostname                                                                                                               |                   | X            |
| PVXAPIPROTO        | Specify https if needed                                                                                                    | https             |             |
| PVXAPIPORT         | API port                                                                                                                   | 443               |             |
| PVXAPIKEY          | PVX API key                                                                                                                |                   | X            |
| PVXAPITIMEOUT      | Set HTTP timeout                                                                                                           |                   |             |
| PVXAPIURLPATH      | PVX url path                                                                                                               | /api              |             |
| PVXCUSTOMMODE      | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | api               |             |
| PVX_AUTH_SERVICE_URL | Authentication service URL                                                                                                                                                                                                                                                                      | /api/v1/auth/login |           |
| PVX_USE_AUTH_SERVICE | Three authentication methods are supported: legacy username/password, API key, and username/password via the authentication server. Starting with Accedian Skylight version 17 and later authentication must be performed via the authentication server, enabled by setting this macro to `1`   | 0                  |           |
| PVXAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Http-Hits" label="Http-Hits">

| Macro             | Description                                                                                                                          | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                              | 900               |             |
| INSTANCE          | Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER            | Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                           |                   |             |
| FROM              | Add a PVQL from clause to filter on a specific layer (default: 'http')                                                               |                   | X           |
| TOP               | Only search for the top X results (top is made on 'hits\_error')                                                                     |                   |             |
| FILTERCOUNTERS    | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                  |                   |             |
| WARNINGHITS       | Threshold                                                                                                                            |                   |             |
| CRITICALHITS      | Threshold                                                                                                                            |                   |             |
| WARNINGHITSERROR  | Threshold                                                                                                                            |                   |             |
| CRITICALHITSERROR | Threshold                                                                                                                            |                   |             |
| WARNINGRATIO      | Threshold                                                                                                                            |                   |             |
| CRITICALRATIO     | Threshold                                                                                                                            |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                   | --verbose         |             |

</TabItem>
<TabItem value="Http-Hits-Application" label="Http-Hits-Application">

| Macro             | Description                                                                                                                          | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE          | Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                              |                   |             |
| FILTER            | Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                           |                   |             |
| FROM              | Add a PVQL from clause to filter on a specific layer (default: 'http')                                                               |                   | X           |
| TOP               | Only search for the top X results (top is made on 'hits\_error')                                                                     |                   |             |
| FILTERCOUNTERS    | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                  |                   |             |
| WARNINGHITS       | Threshold                                                                                                                            |                   |             |
| CRITICALHITS      | Threshold                                                                                                                            |                   |             |
| WARNINGHITSERROR  | Threshold                                                                                                                            |                   |             |
| CRITICALHITSERROR | Threshold                                                                                                                            |                   |             |
| WARNINGRATIO      | Threshold                                                                                                                            |                   |             |
| CRITICALRATIO     | Threshold                                                                                                                            |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                   |                   |             |

</TabItem>
<TabItem value="Http-Hits-Server-Ip" label="Http-Hits-Server-Ip">

| Macro             | Description                                                                                                                          | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE          | Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME         | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                              |                   |             |
| FILTER            | Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                           |                   |             |
| FROM              | Add a PVQL from clause to filter on a specific layer (default: 'http')                                                               |                   | X           |
| TOP               | Only search for the top X results (top is made on 'hits\_error')                                                                     |                   |             |
| FILTERCOUNTERS    | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                  |                   |             |
| WARNINGHITS       | Threshold                                                                                                                            |                   |             |
| CRITICALHITS      | Threshold                                                                                                                            |                   |             |
| WARNINGHITSERROR  | Threshold                                                                                                                            |                   |             |
| CRITICALHITSERROR | Threshold                                                                                                                            |                   |             |
| WARNINGRATIO      | Threshold                                                                                                                            |                   |             |
| CRITICALRATIO     | Threshold                                                                                                                            |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                   |                   |             |

</TabItem>
<TabItem value="Network-Connection" label="Network-Connection">

| Macro                  | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               | 900               |             |
| INSTANCE               | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER                 | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                   | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                    | Only search for the top X results (top is made on 'ratio')                                                                            |                   |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                   |                   |             |
| WARNINGATTEMPT         | Threshold                                                                                                                             |                   |             |
| CRITICALATTEMPT        | Threshold                                                                                                                             |                   |             |
| WARNINGCONNECTIONTIME  | Threshold                                                                                                                             |                   |             |
| CRITICALCONNECTIONTIME | Threshold                                                                                                                             |                   |             |
| WARNINGRATIO           | Threshold                                                                                                                             |                   |             |
| CRITICALRATIO          | Threshold                                                                                                                             |                   |             |
| WARNINGSUCCESSFUL      | Threshold                                                                                                                             |                   |             |
| CRITICALSUCCESSFUL     | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    | --verbose         |             |

</TabItem>
<TabItem value="Network-Connection-Application" label="Network-Connection-Application">

| Macro                  | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE               | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                 | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                   | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                    | Only search for the top X results (top is made on 'ratio')                                                                            |                   |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                   |                   |             |
| WARNINGATTEMPT         | Threshold                                                                                                                             |                   |             |
| CRITICALATTEMPT        | Threshold                                                                                                                             |                   |             |
| WARNINGCONNECTIONTIME  | Threshold                                                                                                                             |                   |             |
| CRITICALCONNECTIONTIME | Threshold                                                                                                                             |                   |             |
| WARNINGRATIO           | Threshold                                                                                                                             |                   |             |
| CRITICALRATIO          | Threshold                                                                                                                             |                   |             |
| WARNINGSUCCESSFUL      | Threshold                                                                                                                             |                   |             |
| CRITICALSUCCESSFUL     | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    |                   |             |

</TabItem>
<TabItem value="Network-Connection-Server-Ip" label="Network-Connection-Server-Ip">

| Macro                  | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE               | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME              | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                 | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                   | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                    | Only search for the top X results (top is made on 'ratio')                                                                            |                   |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                   |                   |             |
| WARNINGATTEMPT         | Threshold                                                                                                                             |                   |             |
| CRITICALATTEMPT        | Threshold                                                                                                                             |                   |             |
| WARNINGCONNECTIONTIME  | Threshold                                                                                                                             |                   |             |
| CRITICALCONNECTIONTIME | Threshold                                                                                                                             |                   |             |
| WARNINGRATIO           | Threshold                                                                                                                             |                   |             |
| CRITICALRATIO          | Threshold                                                                                                                             |                   |             |
| WARNINGSUCCESSFUL      | Threshold                                                                                                                             |                   |             |
| CRITICALSUCCESSFUL     | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    |                   |             |

</TabItem>
<TabItem value="Network-Traffic" label="Network-Traffic">

| Macro                      | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               | 900               |             |
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                   |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                   |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                   |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                   |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    | --verbose         |             |

</TabItem>
<TabItem value="Network-Traffic-Application" label="Network-Traffic-Application">

| Macro                      | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                   |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                   |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                   |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                   |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    |                   |             |

</TabItem>
<TabItem value="Network-Traffic-Layer" label="Network-Traffic-Layer">

| Macro                      | Description                                                                                                                           | Valeur par défaut                        | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | layer                                    | X           |
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                                          |             |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                                          |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                                          | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                                          |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                                          |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                                          |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                                          |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                                          |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                                          |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                                          |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                                          |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                                          |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                                          |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                                          |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                                          |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                                          |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                                          |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    | --verbose --filter-perfdata="noperfdata" |             |

</TabItem>
<TabItem value="Network-Traffic-Server-Ip" label="Network-Traffic-Server-Ip">

| Macro                      | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE                   | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME                  | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER                     | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM                       | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP                        | Only search for the top X results (top is made on 'traffic')                                                                          |                   |             |
| FILTERCOUNTERS             | Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                           |                   |             |
| WARNINGCLIENTTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALCLIENTTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGSERVERTRAFFIC       | Threshold                                                                                                                             |                   |             |
| CRITICALSERVERTRAFFIC      | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALCLIENTTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALCLIENTTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALSERVERTRAFFIC  | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALSERVERTRAFFIC | Threshold                                                                                                                             |                   |             |
| WARNINGTOTALTRAFFIC        | Threshold                                                                                                                             |                   |             |
| CRITICALTOTALTRAFFIC       | Threshold                                                                                                                             |                   |             |
| WARNINGTRAFFIC             | Threshold                                                                                                                             |                   |             |
| CRITICALTRAFFIC            | Threshold                                                                                                                             |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    |                   |             |

</TabItem>
<TabItem value="Network-User-Experience" label="Network-User-Experience">

| Macro          | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME      | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               | 900               |             |
| INSTANCE       | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) |                   | X           |
| FILTER         | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM           | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP            | Only search for the top X results                                                                                                     |                   |             |
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'             |                   |             |
| WARNINGTIME    | Warning threshold (s)                                                                                                                 |                   |             |
| CRITICALTIME   | Critical threshold (s)                                                                                                                |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    | --verbose         |             |

</TabItem>
<TabItem value="Network-User-Experience-Application" label="Network-User-Experience-Application">

| Macro          | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE       | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | application       | X           |
| TIMEFRAME      | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER         | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM           | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP            | Only search for the top X results                                                                                                     |                   |             |
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'             |                   |             |
| WARNINGTIME    | Warning threshold (s)                                                                                                                 |                   |             |
| CRITICALTIME   | Critical threshold (s)                                                                                                                |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    |                   |             |

</TabItem>
<TabItem value="Network-User-Experience-Server-Ip" label="Network-User-Experience-Server-Ip">

| Macro          | Description                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INSTANCE       | Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name) | server.ip         | X           |
| TIMEFRAME      | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                               |                   |             |
| FILTER         | Add a PVQL filter (example: --filter='application = "mysql"')                                                                         |                   |             |
| FROM           | Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                          |                   | X           |
| TOP            | Only search for the top X results                                                                                                     |                   |             |
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'             |                   |             |
| WARNINGTIME    | Warning threshold (s)                                                                                                                 |                   |             |
| CRITICALTIME   | Critical threshold (s)                                                                                                                |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                    |                   |             |

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
/usr/lib/centreon/plugins/centreon_pvx_restapi.pl \
	--plugin=apps::pvx::restapi::plugin \
	--mode=http-hits \
	--custommode='api' \
	--hostname='10.0.0.1' \
	--url-path='/api' \
	--api-key='xxxxxx' \
	--port='443' \
	--proto='https' \
	--timeout=''  \
 	--auth-service-url='/api/v1/auth/login' \
  	--use-auth-service='0'  \
        --timeframe='900' \
	--instance='' \
	--filter='' \
	--from='' \
	--top='' \
	--filter-counters='' \
	--warning-ratio='' \
	--critical-ratio='' \
	--warning-hits-error='' \
	--critical-hits-error='' \
	--warning-hits='' \
	--critical-hits='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: ratio: 18 hits error: 2 hits/s hits: 39 hits/s | 'http.hits.percentage'=18;;;0; 'http.hits.error.persecond'=2hits/s;;;0; 'http.hits.persecond'=39hits/s;0:40;0:60;0;

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
/usr/lib/centreon/plugins/centreon_pvx_restapi.pl \
	--plugin=apps::pvx::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                           | Modèle de service associé                                                                                                                                                                              |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| http-hits [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/httphits.pm)]                            | App-Pvx-Http-Hits-Restapi-custom<br />App-Pvx-Http-Hits-Application-Restapi-custom<br />App-Pvx-Http-Hits-Server-Ip-Restapi-custom                                                                     |
| network-connection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/networkconnection.pm)]          | App-Pvx-Network-Connection-Restapi-custom<br />App-Pvx-Network-Connection-Application-Restapi-custom<br />App-Pvx-Network-Connection-Server-Ip-Restapi-custom                                          |
| network-traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/networktraffic.pm)]                | App-Pvx-Network-Traffic-Restapi-custom<br />App-Pvx-Network-Traffic-Application-Restapi-custom<br />App-Pvx-Network-Traffic-Layer-Restapi-custom<br />App-Pvx-Network-Traffic-Server-Ip-Restapi-custom |
| network-user-experience [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pvx/restapi/mode/networkuserexperience.pm)] | App-Pvx-Network-User-Experience-Restapi-custom<br />App-Pvx-Network-User-Experience-Application-Restapi-custom<br />App-Pvx-Network-User-Experience-Server-Ip-Restapi-custom                           |

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
| --default-value                            |   Set a default value when nothing returned by PVX API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
| --timeframe                                |   Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timezone                                 |   Set your timezone.  Can use format: 'Europe/London' or '+0100'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --api-key                                  |   PVX API key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --hostname                                 |   PVX hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --url-path                                 |   PVX url path (default: '/api')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --port                                     |   API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 |   Specify the username for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 |   Specify the password for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --basic                                    |   Specify this option if you access the API over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access the API over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Http-Hits" label="Http-Hits">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                             |
| --from            |   Add a PVQL from clause to filter on a specific layer (default: 'http')                                                                 |
| --top             |   Only search for the top X results (top is made on 'hits\_error').                                                                      |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                            |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                           |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                    |

</TabItem>
<TabItem value="Http-Hits-Application" label="Http-Hits-Application">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                             |
| --from            |   Add a PVQL from clause to filter on a specific layer (default: 'http')                                                                 |
| --top             |   Only search for the top X results (top is made on 'hits\_error').                                                                      |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                            |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                           |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                    |

</TabItem>
<TabItem value="Http-Hits-Server-Ip" label="Http-Hits-Server-Ip">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'host')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='host = "www.lo.ki"')                                                                             |
| --from            |   Add a PVQL from clause to filter on a specific layer (default: 'http')                                                                 |
| --top             |   Only search for the top X results (top is made on 'hits\_error').                                                                      |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                            |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'hits-error' (hits/s), 'hits' (hits/s).                                                           |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                    |

</TabItem>
<TabItem value="Network-Connection" label="Network-Connection">

| Option            | Description                                                                                                                               |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top             |   Only search for the top X results (top is made on 'ratio').                                                                             |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                  |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                 |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                     |

</TabItem>
<TabItem value="Network-Connection-Application" label="Network-Connection-Application">

| Option            | Description                                                                                                                               |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top             |   Only search for the top X results (top is made on 'ratio').                                                                             |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                  |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                 |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                     |

</TabItem>
<TabItem value="Network-Connection-Server-Ip" label="Network-Connection-Server-Ip">

| Option            | Description                                                                                                                               |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top             |   Only search for the top X results (top is made on 'ratio').                                                                             |
| --warning-*       |   Warning threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                  |
| --critical-*      |   Critical threshold. Can be: 'ratio', 'attempt' (conn/s), 'successful' (conn/s), 'connection-time' (ms).                                 |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                     |

</TabItem>
<TabItem value="Network-Traffic" label="Network-Traffic">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-Traffic-Application" label="Network-Traffic-Application">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-Traffic-Layer" label="Network-Traffic-Layer">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-Traffic-Server-Ip" label="Network-Traffic-Server-Ip">

| Option            | Description                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| --instance        |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)         |
| --filter          |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                                 |
| --from            |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                                  |
| --top             |   Only search for the top X results (top is made on 'traffic').                                                                                 |
| --warning-*       |   Warning threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.    |
| --critical-*      |   Critical threshold. Can be: 'total-traffic', 'total-client-traffic', 'total-server-traffic', 'traffic', 'client-traffic', 'server-traffic'.   |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='total-traffic'                                                   |

</TabItem>
<TabItem value="Network-User-Experience" label="Network-User-Experience">

| Option          | Description                                                                                                                               |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance      |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter        |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from          |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top           |   Only search for the top X results.                                                                                                      |
| --warning-time  |   Warning threshold (s).                                                                                                                  |
| --critical-time |   Critical threshold (s).                                                                                                                 |

</TabItem>
<TabItem value="Network-User-Experience-Application" label="Network-User-Experience-Application">

| Option          | Description                                                                                                                               |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance      |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter        |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from          |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top           |   Only search for the top X results.                                                                                                      |
| --warning-time  |   Warning threshold (s).                                                                                                                  |
| --critical-time |   Critical threshold (s).                                                                                                                 |

</TabItem>
<TabItem value="Network-User-Experience-Server-Ip" label="Network-User-Experience-Server-Ip">

| Option          | Description                                                                                                                               |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --instance      |   Filter on a specific instance (must be a PVQL object, Default: 'layer')  (Object 'application' will be mapped with applications name)   |
| --filter        |   Add a PVQL filter (example: --filter='application = "mysql"')                                                                           |
| --from          |   Add a PVQL from clause to filter on a specific layer (example: --from='tcp')                                                            |
| --top           |   Only search for the top X results.                                                                                                      |
| --warning-time  |   Warning threshold (s).                                                                                                                  |
| --critical-time |   Critical threshold (s).                                                                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_pvx_restapi.pl \
	--plugin=apps::pvx::restapi::plugin \
	--mode=http-hits \
	--help
```
