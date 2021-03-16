---
id: applications-commvault-commserve-restapi
title: Commvault CommServe Rest API
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack inclue la supervision des Alerts, Jobs, Media-agents et Storage-pools.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric name           | Description                                        | Unit |
| :-------------------- | :------------------------------------------------- | :--- |
| alert status          | alert status, possible to set string-based alerts  |      |
| alerts.total.count    | Number of alerts                                   |      |
| alerts.critical.count | Number of critical alerts                          |      |
| alerts.warning.count  | Number of warning alerts                           |      |
| alerts.info.count     | Number of informational alerts                     |      |

<!--Jobs-->

| Metric name           | Description                  | Unit |
| :-------------------- | :--------------------------- | :--- |
| job status            | Status of on job status      |      |
| job long status       | Status on job time duration  |      |
| jobs.total.count      | Number of jobs               |      |

<!--Media-agents-->

| Metric name              | Description             | Unit |
| :----------------------- | :---------------------- | :--- |
| media agent status       | Media agent status      |      |
| media.agents.total.count | Number of media agents  |      |

<!--Storage-pools-->

| Metric name                                          | Description                                          | Unit |
| :--------------------------------------------------- | :--------------------------------------------------- | :--- |
| storage status                                       | Storage status, possible to set string-based alerts  |      |
| *storagepoolname*#storagepool.space.usage.bytes      | Space usage                                          | B    |
| *storagepoolname*#storagepool.space.free.bytes       | Free space                                           | B    |
| *storagepoolname*#storagepool.space.usage.percentage | Space usage in percentage                            | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler l'application Commvault CommServe, l'API Rest doit être configuré (cf: https://api.commvault.com/)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Commvault-Commserve-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Commvault Commserve Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Commvault-Commserve-Restapi
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-commvault-commserve-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Commvault Commserve Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par application Commvault CommServe.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Commvault-Commserve-Restapi-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                 | Description                                                                |
| :-------- | :------------------- | :------------------------------------------------------------------------- |
| X         | COMMSERVEAPIPORT     | Port used (Default: 443)                                                   |
| X         | COMMSERVEAPIPROTO    | Specify https if needed (Default: 'https')                                 |
| X         | COMMSERVEAPIUSERNAME | Commvault CommServe username                                               |
| X         | COMMSERVEAPIPASSWORD | Commvault CommServe password                                               |
|           | COMMSERVEAPIPROTO    | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \
    --plugin=apps::backup::commvault::commserve::restapi::plugin \
    --mode=storage-pools \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-name='IPL' \
    --warning-space-usage-prct='90' \
    --critical-space-usage-prct='95' \
    --verbose
```

Exemple de sortie:
```
OK: All storage pools are ok | 'IPL1-TEST#storagepool.space.usage.bytes'=22104757B;;;0;37192871 'IPL1-TEST#storagepool.space.free.bytes'=15088114B;;;0;37192871 'IPL1-TEST#storagepool.space.usage.percentage'=59.43%;90;95;0;100 'IPL2-TEST#storagepool.space.usage.bytes'=6469140B;;;0;7340013 'IPL2-TEST#storagepool.space.free.bytes'=870873B;;;0;7340013 'IPL2-TEST#storagepool.space.usage.percentage'=88.14%;90;95;0;100
Storage pool 'IPL1-TEST' status: online, space usage total: 35.47 MB used: 21.08 MB (59.43%) free: 14.39 MB (40.57%)
Storage pool 'IPL2-TEST' status: online, space usage total: 7.00 MB used: 6.17 MB (88.14%) free: 850.46 KB (11.86%)
```

La commande ci-dessus contrôle les storage pools de l'application Commvault CommServe via l'API (```--mode=storage-pools```) nommée *IPL* (```--filter-name='IPL'```).
Le Plugin utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Cette commande déclenchera une alarme WARNING si l'espace utilisé est supérieur à 90% (```--warning-space-usage-prct='90'```)
et une alarme CRITICAL si l'espace utilisé est supérieur à 95% (```--critical-space-usage-prct='95'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \
    --plugin=apps::backup::commvault::commserve::restapi::plugin \
    --mode=storage-pools \
    --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```.
Cela signifie que Centreon n'a pas réussi à se connecter au Commvault CommServe API (*10.30.2.79*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *10.30.2.79* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.
