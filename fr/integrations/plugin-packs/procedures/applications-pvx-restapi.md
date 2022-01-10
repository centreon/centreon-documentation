---
id: applications-pvx-restapi
title: PVX
---

## Vue d'ensemble

Chaque instance PVX-Skylight fournit un endoint API XML permettant à Centreon
d'interroger ces dernières. 

![architecture](../../../assets/integrations/external/skylight-pvx-connector.png)

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon PVX apporte 1 modèle d'hôte :
* App-Pvx-Application-Restapi-custom

Il apporte les Modèles de Service suivants :

| Alias                               | Modèle de service                                   | Description                                        | Défaut |
|:------------------------------------|:----------------------------------------------------|:---------------------------------------------------|:-------|
| Http-Hits-Application               | App-Pvx-Http-Hits-Application-Restapi               | Contrôle le nombre d'erreur HTTP                   | X      |
| Http-Hits                           | App-Pvx-Http-Hits-Restapi                           | Contrôle le nombre d'erreur HTTP                   |        |
| Http-Hits-Server-Ip                 | App-Pvx-Http-Hits-Server-Ip-Restapi                 | Contrôle le nombre d'erreur HTTP                   |        |
| Network-Connection-Application      | App-Pvx-Network-Connection-Application-Restapi      | Contrôle le ratio connections tentées              | X      |
| Network-Connection                  | App-Pvx-Network-Connection-Restapi                  | Contrôle le ratio connections tentées              |        |
| Network-Connection-Server-Ip        | App-Pvx-Network-Connection-Server-Ip-Restapi        | Contrôle le ratio connections tentées              |        |
| Network-Traffic-Application         | App-Pvx-Network-Traffic-Application-Restapi         | Contrôle le traffic par application.               | X      |
| Network-Traffic-Layer               | App-Pvx-Network-Traffic-Layer-Restapi               | Contrôle le traffic par ""layer"".                 |        |
| Network-Traffic                     | App-Pvx-Network-Traffic-Restapi                     | Contrôle le traffic par instance                   |        |
| Network-Traffic-Server-Ip           | App-Pvx-Network-Traffic-Server-Ip-Restapi           | Contrôle le traffic par IP                         |        |
| Network-User-Experience-Application | App-Pvx-Network-User-Experience-Application-Restapi | Contrôle l'expérience utilisateur par application. | X      |
| Network-User-Experience             | App-Pvx-Network-User-Experience-Restapi             | Contrôle l'expérience utilisateur par instance     |        |
| Network-User-Experience-Server-Ip   | App-Pvx-Network-User-Experience-Server-Ip-Restapi   | Contrôle l'expérience utilisateur par IP           |        |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Http-Hits*-->

| Métrique                              | Unité  |
|:--------------------------------------|:-------|
| *instances*#http.hits.persecond       | hits/s |
| *instances*#http.hits.error.persecond | hits/s |
| *instances*#http.hits.percentage      |        |

<!--Network-Connection*-->

| Métrique                                     | Unité         |
|:---------------------------------------------|:--------------|
| *instances*#connections.attempts.persecond   | connections/s |
| *instances*#connection.time.milliseconds     | ms            |
| *instances*#connections.ratio.percentage     |               |
| *instances*#connections.successful.persecond | connections/s |

<!--Network-Traffic*-->

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| traffic.client.bitspersecond                          | b/s   |
| traffic.server.bitspersecond                          | b/s   |
| traffic.aggregated.bitspersecond                      | b/s   |
| *instances*#instance.traffic.client.bitspersecond     | b/s   |
| *instances*#instance.traffic.server.bitspersecond     | b/s   |
| *instances*#instance.traffic.aggregated.bitspersecond | b/s   |

<!--Network-User-Experience*-->

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *instances*#enduser.experience.seconds | s     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Compatibilité

Le connecteur a été testé avec la version suivante : \* PVX version 5.1.1.

### PVX API

Pour interroger les instances via l'API, une clé d'accès est nécessaire. Cette 
clé n'a pas de date d'expiration. La procédure suivante, extrait de la 
[documentation officielle](<http://docs.performancevision.com/api_use.html>),
permet de la générer. A chaque étape, remplacez les valeurs des macro '\< \>' 
avec les vôtres.

```bash 
curl -k 'https://**<pvxapihost>**/api/login?user=**<user>**&password=**<password>**'`
```

Résultat :

``` json
{
    "type": "result",
    "result": "**session:91554086-842b-4b73-9028-c51d20d91b94**"
}
```

Grâce à l'ID de session obtenu, exécutez la commande suivante pour obtenir une 
clé secrète.

```bash 
curl -k 'https://**<pvxapihost>**/api/create-api-key?name=**<keyname>**&_session=session:91554086-842b-4b73-9028-c51d20d91b94'`
```

Résultat :

``` json
{
    "type": "result",
    "result": "**secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0**"
}
```

Dans cet exemple, la clé API est "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0".

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources *PVX* :

```bash
yum install centreon-plugin-Applications-Pvx-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **PVX** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources *PVX* :

```bash
yum install centreon-plugin-Applications-Pvx-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **PVX** :

 ```bash
yum install centreon-pack-applications-pvx-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **PVX** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur *PVX*.
* Appliquez le Modèle d'Hôte **App-Pvx-Application-Restapi-custom**.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire   | Macro              | Description                                                                        |
|:--------------|:-------------------|:-----------------------------------------------------------------------------------|
|               | PVXAPIEXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |
| X             | PVXAPIHOSTNAME     | PVX hostname                                                                       |
| X             | PVXAPIKEY          | PVX API key                                                                        |
|               | PVXAPIPORT         | (Default: '443')                                                                   |
|               | PVXAPIPROTO        | (Default: 'https')                                                                 |
|               | PVXAPIURLPATH      | (Default: '/api')                                                                  |
|               | PVXCUSTOMMODE      | (Default: 'api')                                                                   |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \
    --plugin=apps::pvx::restapi::plugin \
    --mode=http-hits \
    --custommode='api' \
    --hostname='10.0.0.1' \
    --url-path='/api' \
    --api-key='' \
    --port='443' \
    --proto='https' \
    --timeframe='3600' \
    --instance='' \
    --warning-ratio='' \
    --critical-ratio='' \
    --warning-hits-error='' \
    --critical-hits-error='' \
    --warning-hits='40' \
    --critical-hits='60' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: ratio: 18 hits error: 2 hits/s hits: 39 hits/s | 'http.hits.percentage'=18;;;0; 'http.hits.error.persecond'=2hits/s;;;0; 'http.hits.persecond'=39hits/s;0:40;0:60;0; 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre de
requêtes HTTP est supérieur à 40 (`--warning-hits='40'`) durant la dernière 
heure (`--timeframe='3600'`); l'alarme sera de type CRITICAL au-delà de 60
requête (`--warning-hits='60'`).

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \
    --plugin=apps::pvx::restapi::plugin \
    --mode=http-hits \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pvx_restapi.pl \
    --plugin=apps::pvx::restapi::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html#http-and-api-checks)
des Plugins basés sur HTTP/API.