---
id: applications-monitoring-kadiska-restapi
title: Kadiska Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Kadiska Rest API** apporte 2 modèles d'hôte différents :

* App-Monitoring-Kadiska-Station-Restapi-custom
* App-Monitoring-Kadiska-Watcher-Restapi-custom

Il apporte les modèles de service suivants :

| Alias              | Modèle de service                                 | Description                                                            | Défaut | Découverte |
|:-------------------|:--------------------------------------------------|:-----------------------------------------------------------------------|:-------|:-----------|
| Target-Statistics  | App-Monitoring-Kadiska-Restapi-Target-Statistics  | Contrôle les données de performances des targets Kadiska via Rest API  | X      | X          |
| Watcher-Statistics | App-Monitoring-Kadiska-Restapi-Watcher-Statistics | Contrôle les données de performances des watchers Kadiska via Rest API | X      |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle | Description                    |
|:----------------|:-------------------------------|
| Stations        | Découverte de stations Kadiska |
| Watchers        | Découverte de watchers Kadiska |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
<TabItem value="Service" label="Service">

| Nom de la règle                                  | Description                                                                              |
|:-------------------------------------------------|:-----------------------------------------------------------------------------------------|
| App-Monitoring-Kadiska-Restapi-Target-Statistics | Découverte de targets associées à une station et supervise ses données de performances.  |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services.

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Target-Statistics" label="Target-Statistics">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| *targets*#tracer.packets.loss.percentage | %     |
| *targets*#tracer.path.length             |       |
| *targets*#tracer.round.trip.persecond    | ms    |

</TabItem>
<TabItem value="Watcher-Statistics" label="Watcher-Statistics">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *watchers*#watcher.errors.percentage | %     |
| *watchers*#watcher.pages.count       | count |
| *watchers*#watcher.requests.count    | count |
| *watchers*#watcher.sessions.count    | count |

</TabItem>
</Tabs>

## Prérequis

Un **client ID** et **client secret** pour joindre l'API de Kadiska sont nécessaires.

Pour créer cette paire, rendez-vous sur https://app.kadiska.com/, dans **Configuration > API Clients** et créez un client avec le rôle **Data Analyst**. Sauvegardez en lieu sûr le client secret, il ne sera pas possible ensuite de le retrouver depuis l'interface.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Kadiska Rest API** :

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

2. Sur l'interface Web de Centreon, installez le Plugin Pack **Kadiska Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Kadiska Rest API** :

```bash
yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Kadiska Rest API** :

```bash
yum install centreon-pack-applications-monitoring-kadiska-restapi
```

3. Sur l'interface Web de Centreon, installez le Plugin Pack **Kadiska Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

#### Station Kadiska

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Kadiska Rest API**.
* Appliquez le modèle d'hôte **App-Monitoring-Kadiska-Station-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Défaut : '443')                                                                       |
|             | KADISKAAPIPROTO        | (Défaut : 'https')                                                                     |
| X           | STATIONNAME            | Spécifiez le nom de la station Kadiska                                                 |
|             | TIMEOUT                |                                                                                        |

#### Watcher Kadiska

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Kadiska Rest API**.
* Appliquez le modèle d'hôte **App-Monitoring-Kadiska-Watcher-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                  | Description                                                                            |
|:------------|:-----------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS           | Any extra option you may want to add to every command\_line (eg. a --verbose flag)     |
| X           | KADISKAAPICLIENTID     | Kadiska Client ID                                                                      |
| X           | KADISKAAPICLIENTSECRET | Kadiska Client Secret                                                                  |
|             | KADISKAAPIPORT         | (Défaut : '443')                                                                       |
|             | KADISKAAPIPROTO        | (Défaut : 'https')                                                                     |
| X           | WATCHERNAME            | Spécifiez le nom du watcher Kadiska                                                    |
|             | TIMEOUT                |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=tracer-statistics \
    --client-id='client:xxx' \
    --client-secret='my-secret' \
    --filter-station-name='Paris-RT' \
    --filter-tracer='tracer:xxx' \
    --period=15 \
    --port='443' \
    --proto='https' \
    --timeout='' \
    --verbose \
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Round trip: 2 ms Path length: 9 Packets Loss: 3 % | 'tracer.round.trip.persecond'=2ms;;;0; 'tracer.path.length'=9;;;0; 'tracer.packets.loss.percentage'=3%;;;0;100 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \
    --plugin=apps::monitoring::kadiska::plugin \
    --mode=tracer-statistics \
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