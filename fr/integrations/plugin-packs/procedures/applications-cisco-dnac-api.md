---
id: applications-cisco-dnac-api
title: Cisco DNA Center Rest API
---

## Contenu du Plugin-Pack

### Objets supervisés

Le plugin-pack inclue la supervision Network-devices et Sites.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Network-devices-->

| Metric name                                                           | Description                                          | Unit |
| :-------------------------------------------------------------------- | :--------------------------------------------------- | :--- |
| network.devices.total.count                                           | Number of devices                                    |      |
| *categoryname*#category.network.devices.health.good.count             | Number of good health devices by category            |      |
| *categoryname*#category.network.devices.health.good.percentage        | Number of good health devices by category            | %    |
| *categoryname*#category.network.devices.health.fair.count             | Number of fair health devices by category            |      |
| *categoryname*#category.network.devices.health.fair.percentage        | Number of fair health devices by category            | %    |
| *categoryname*#category.network.devices.health.bad.count              | Number of bad health devices by category             |      |
| *categoryname*#category.network.devices.health.bad.percentage         | Number of bad health devices by category             | %    |
| *categoryname*#category.network.devices.health.unmonitored.count      | Number of unmonitored health devices by category     |      |
| *categoryname*#category.network.devices.health.unmonitored.percentage | Number of unmonitored health devices by category     | %    |

<!--Sites-->

| Metric name                                        | Description                | Unit |
|:-------------------------------------------------- |:-------------------------- | :--- |
| *sitename*#site.network.devices.healthy.count      | Number of healthy devices  |      |
| *sitename*#site.network.devices.healthy.percentage | Number of healthy devices  | %    |
| *sitename*#site.clients.healthy.count              | Number of healthy clients  |      |
| *sitename*#site.clients.healthy.percentage         | Number of healthy clients  | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler l'application Cisco DNA Center, l'API Rest doit être configuré (cf: ```https://developer.cisco.com/docs/dna-center/#!cisco-dna-center-platform-overview```)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Cisco-Dnac-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco DNA Center Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Cisco-Dnac-Restapi
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-cisco-dnac-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco DNA Center Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par application Cisco DNA Center.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Cisco-Dnac-Restapi-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                | Description                                                                 |
| :-------- | :------------------ | :-------------------------------------------------------------------------- |
| X         | DNACAPIPORT         | Port used (Default: 443)                                                    |
| X         | DNACAPIPROTO        | Specify https if needed (Default: 'https')                                  |
| X         | DNACAPIUSERNAME     | Cisco DNA Center username                                                   |
| X         | DNACAPIPASSWORD     | Cisco DNA Center password                                                   |
|           | DNACAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag)  |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl \
    --plugin=apps::cisco::dnac::restapi::plugin \
    --mode=network-devices \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-category-name='Access|Core' \
    --critical-category-devices-health-bad-usage-prct='0' \
    --verbose
```

Exemple de sortie:
```
OK: All network categories are ok | 'network.devices.total.count'=14;;;0; 'Access#category.network.devices.health.good.count'=13;;;0;13 'Access#category.network.devices.health.good.percentage'=13.00;;;0;100 'Access#category.network.devices.health.fair.count'=0;;;0;13 'Access#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Access#category.network.devices.health.bad.count'=0;;;0;13 'Access#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Access#category.network.devices.health.unmonitored.count'=0;;;0;13 'Access#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100 'Core#category.network.devices.health.good.count'=1;;;0;1 'Core#category.network.devices.health.good.percentage'=1.00;;;0;100 'Core#category.network.devices.health.fair.count'=0;;;0;1 'Core#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Core#category.network.devices.health.bad.count'=0;;;0;1 'Core#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Core#category.network.devices.health.unmonitored.count'=0;;;0;1 'Core#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100
checking network category 'Access'
    good devices: 100.00% (13 on 13)
    fair devices: 0.00% (0 on 13)
    bad devices: 0.00% (0 on 13)
    unmonitored devices: 0.00% (0 on 13)
checking network category 'Core'
    good devices: 100.00% (1 on 1)
    fair devices: 0.00% (0 on 1)
    bad devices: 0.00% (0 on 1)
    unmonitored devices: 0.00% (0 on 1)
```

La commande ci-dessus contrôle les équipements réseaux de l'application Cisco DNA Center via l'API (```--mode=network-devices```) de la catégorie *Access* et *Core* (```--filter-category-name='Access|Core'```).
Le Plugin utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Cette commande déclenchera une alarme CRITICAL si le pourcentage d'équipements réseaux en état *bad* est supérieur à 0% (```--critical-category-devices-health-bad-usage-prct='0'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl --plugin=apps::cisco::dnac::restapi::plugin \
    --mode=network-devices \
    --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```.
Cela signifie que Centreon n'a pas réussi à se connecter au Cisco DNA Center API (*10.30.2.79*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *10.30.2.79* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

