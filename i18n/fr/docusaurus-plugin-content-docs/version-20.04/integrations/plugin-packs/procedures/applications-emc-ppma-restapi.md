---
id: applications-emc-ppma-restapi
title: EMC PPMA Rest API
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack EMC PowerPath Management Appliance collecte les données pour:
* Hosts

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Metric name                            | Description                                                  | Unit |
| :------------------------------------- | :----------------------------------------------------------- | :--- |
| host status                            | Host powerpath status, possible to set string-based alerts   |      |
| *hostname*#host.paths.total.count      | Number of total paths for the host                           |      |
| *hostname*#host.paths.dead.count       | Number of dead paths for the host                            |      |
| *hostname*#host.volumes.total.count    | Number of volumes attached                                   |      |
| *hostname*#host.volumes.dead.count     | Number of dead volumes attached                              |      |
| *hostname*#host.volumes.degraded.count | Number of degraded volumes attached                          |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler l'application EMC PPMA, l'API Rest doit être configuré (cf: https://dl.dell.com/content/docu98223_PowerPath-Management-Appliance-3.x-Rest-API-Reference.pdf?language=fr_FR)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Emc-Ppma-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Emc PPMA Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Emc-Ppma-Restapi
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-emc-ppma-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Emc PPMA Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par application EMC PPMA.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Emc-Ppma-Restapi-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                | Description                                                                |
| :-------- | :------------------ | :------------------------------------------------------------------------- |
| X         | PPMAAPIPORT         | Port used (Default: 443)                                                   |
| X         | PPMAAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | PPMAAPIUSERNAME     | EMC PPMA username                                                          |
| X         | PPMAAPIPASSWORD     | EMC PPMA password                                                          |
|           | PPMAAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

Par défaut, le modèle *App-Emc-Ppma-Restapi* n'a pas de modèles de services associés. Vous pouvez au choix:
 * associer des modèles de services au modèle d'hôte *App-Emc-Ppma-Restapi-custom*
 * utiliser la découverte des services

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \
    --plugin=apps::emc::ppma::restapi::plugin \
    --mode=hosts \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-name='centreontest' \
    --warning-paths-dead='0' \
    --critical-paths-dead='1' \
    --verbose
```

Exemple de sortie:
```
OK: All hosts are ok | 'centreontest1#host.paths.total.count'=976;;;0; 'centreontest1#host.paths.dead.count'=0;0;0:1;0;976 'centreontest1#host.volumes.total.count'=136;;;0; 'centreontest1#host.volumes.dead.count'=0;;;0;136 'centreontest1#host.volumes.degraded.count'=0;;;0;136 'centreontest2#host.paths.total.count'=976;;;0; 'centreontest2#host.paths.dead.count'=0;0;0:1;0;976 'centreontest2#host.volumes.total.count'=136;;;0; 'centreontest2#host.volumes.dead.count'=0;;;0;136 'centreontest2#host.volumes.degraded.count'=0;;;0;136
checking host 'centreontest1'
    status: powerPathManagedpath total: 976, dead: 0
    volume total: 136, dead: 0, degraded: 0
checking host 'centreontest2'
    status: powerPathManagedpath total: 976, dead: 0
    volume total: 136, dead: 0, degraded: 0
```

La commande ci-dessus contrôle les hôtés nommés *centreontest* (```--filter-name='centreontest'```) et attachés à l'application EMC PPMA (```--mode=hosts```).
Le Plugin utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Cette commande déclenchera une alarme WARNING si le nombre de *dead path* d'un hôte est supérieur à 0 (```--warning-paths-dead='0'```)
et une alarme CRITICAL si supérieur à 1 (```--critical-paths-dead='1'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \
    --plugin=apps::emc::ppma::restapi::plugin \
    --mode=hosts \
    --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```.
Cela signifie que Centreon n'a pas réussi à se connecter au EMC PPMA API (*10.30.2.79*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *10.30.2.79* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.
