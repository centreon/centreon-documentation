---
id: hardware-devices-barco-cs-restapi
title: Barco ClickShare Rest API
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack Barco ClickShare collecte les données pour:
* Device

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Device-->

| Metric name                       | Description                               | Unit |
| :-------------------------------- | :---------------------------------------- | :--- |
| device status                     | Status of the device                      |      |
| cpu#hardware.temperature.celsius  | cpu sensor temperature                    | C    |
| pcie#hardware.temperature.celsius | pcie sensor temperature                   | C    |
| sio#hardware.temperature.celsius  | sio sensor temperature                    | C    |
| cpu#hardware.fan.speed.rpm        | cpu fan speed (supported since api v1.11) | rpm  |
| process status                    | Status of processes                       |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler l'équipement Barco ClickShare, l'API Rest doit être configuré (cf: https://www.barco.com/en/support/knowledge-base/kb11350)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Barco-Cs-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Barco ClickShare Rest API* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum installcentreon-plugin-Hardware-Devices-Barco-Cs-Restapi
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-hardware-devices-barco-cs-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Barco ClickShare Rest API* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin Pack est conçu de manière à avoir dans Centreon un hôte par équipement Barco ClickShare.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *HW-Device-Barco-Cs-Restapi-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                   | Description                                                                |
| :-------- | :--------------------- | :------------------------------------------------------------------------- |
| X         | BARCOCSAPIPORT         | Port used (Default: 4001)                                                  |
| X         | BARCOCSAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | BARCOCSAPIUSERNAME     | Api username                                                               |
| X         | BARCOCSAPIPASSWORD     | Api password                                                               |
|           | BARCOCSAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_barco_cs_restapi.pl \
    --plugin=hardware::devices::barco::cs::restapi::plugin \
    --mode=device \
    --hostname='10.30.2.79' \
    --port='4001' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --warning-cpu-temperature='55' \
    --critical-cpu-temperature='60' \
    --verbose
```

Exemple de sortie:
```
OK: device is ok | 'cpu#hardware.temperature.celsius'=52C;0:55;0:60;; 'pcie#hardware.temperature.celsius'=50C;0:55;0:60;;
checking device
    status: ok
    temperature cpu 52 C, pcie 50 C
    process 'Button Agent' status is running
    process 'ClickShare Server' status is running
    process 'Config Manager' status is running
    process 'DBus Daemon' status is running
    process 'DHCP Server' status is running
    process 'Device Daemon' status is running
    process 'Graphics Server' status is running
    process 'Job Scheduler' status is running
    process 'LED Control' status is running
    process 'Miracast Server' status is running
    process 'Process Monitor' status is running
    process 'System Logging' status is running
    process 'WebUI Server' status is running
    process 'Wifi Access Point Daemon' status is running
```

La commande ci-dessus contrôle statistiques mails (```--mode=mail```).
Le Plugin utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _8006_ (```--port='8006'```) utilisant le protocol _https_ (```--proto='https'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_barco_cs_restapi.pl \
    --plugin=hardware::devices::barco::cs::restapi::plugin \
    --mode=device \
    --help
```

## J'obtiens le message d'erreur suivant:

### ```UNKNOWN: 500 Can't connect to 10.30.2.79:4001 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to 10.30.2.79:4001 |```.
Cela signifie que Centreon n'a pas réussi à se connecter au Barco ClickShare API (*10.30.2.79*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *10.30.2.79* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.
