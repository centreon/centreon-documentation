---
id: network-cisco-firepower-fmc-restapi
title: Cisco Firepower Management Console Rest API
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack inclut la supervision des équipements rattachés à la console de management Firepower. 

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Devices-->

| Metric name                  | Description                     | Unit |
| :----------------------------| :------------------------------ | :--- |
| devices.total.count          | Number of devices               |      |
| devices.status.green.count   | Number of green status devices  |      |
| devices.status.black.count   | Number of black status devices  |      |
| devices.status.blue.count    | Number of blue status devices   |      |
| devices.status.red.count     | Number of red status devices    |      |
| devices.status.yellow.count  | Number of yellow status devices |      |
| device status                | Device status                   |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler l'application Cisco Firepower Management Center, l'API Rest doit être configuré comme indiqué dans lea documentation officielle: 
- https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/REST/Firepower_Management_Center_REST_API_Quick_Start_Guide_620.html

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco Firepower FMC Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-cisco-firepower-fmc-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Cisco Firepower FMC Rest API* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par équipement Cisco Firepower Management Center.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le Modèle *Net-Cisco-Firepower-Fmc-Restapi-custom*. 
Une fois celui-ci configuré, certaines Macros doivent être renseignées:

| Mandatory | Name               | Description                                                                |
| :-------- | :----------------- | :-------------------------------------------------------------------- ---- |
| X         | FMCAPIPORT         | Port used (Default: 443)                                                   |
| X         | FMCAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | FMCAPIUSERNAME     | Cisco Firepower management center password                                 |
| X         | FMCAPIPASSWORD     | Cisco Firepower management center username                                 |
|           | FMCAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
    --plugin=network::cisco::firepower::fmc::restapi::plugin \
    --mode=devices \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-domain-name='Global' \
    --critical-devices-status-red='0' \
    --verbose
```

Exemple de sortie:
```
OK: Domain 'Global' devices are ok | 'devices.total.count'=2;;;0; 'devices.status.green.count'=0;;;0;2 'devices.status.black.count'=0;;;0;2 'devices.status.blue.count'=0;;;0;2 'devices.status.red.count'=0;;0;0;2 'devices.status.yellow.count'=0;;;0;2
checking domain 'Global'
device 'APEXTIFWL01' status: green
device 'APEXTIFWL02' status: green
```

La commande ci-dessus contrôle les équipements attachés au Cisco Firepower Management Center (```--mode=devices```) du domaine *Global* (```--filter-domain-name='Global'```).
Le Plugin utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Cette commande déclenchera une alarme CRITICAL si le nombre d'équipement avec un statut en rouge est supérieur à 0 (```--critical-devices-status-red='0'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl --plugin=network::cisco::firepower::fmc::restapi::plugin \
     --mode=devices \
     --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```.
Cela signifie que Centreon n'a pas réussi à se connecter au Cisco Firepower Management Center API (*10.30.2.79*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *10.30.2.79* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

