---
id: network-cisco-meraki-restapi
title: Cisco Meraki Rest API
---

## Vue d'ensemble

Cisco Meraki est une solution de gestion des réseaux administrés dans le Cloud. L’offre comprend plusieurs produits, 
tous administrables depuis une même console, dans le Cloud : firewalling, switching, Wi-Fi, téléphonie IP, caméra IP, MDM.

## Contenu du Plugin-Pack

### Elements supervisés

Vous pouvez superviser les équipements suivants via l'API Meraki : 

* Equipements : Point d'accès, etc.
* Réseaux

### Métriques collectées 

<!--DOCUSAURUS_CODE_TABS-->

<!--Api-Requests-->

| Metric name                         | Description                                                                                                                                                                                                                 |
| :---------------------------------- | :------------------------------------------------------------------------------ |
| organization.api.requests.200.count | Number of requests returning a HTTP Status 200 (OK). Unit: Count                |
| organization.api.requests.404.count | Number of requests returning a HTTP Status 404 (Not found). Unit: Count         |
| organization.api.requests.429.count | Number of requests returning a HTTP Status 249 (TOO MANY REQUESTS). Unit: Count |

<!--Device-->

| Metric name                      | Description                                                       |
| :------------------------------- | :---------------------------------------------------------------- |
| status                           | Device status                                                     |
| devices.total.online.count       | Number of total devices online (in case of regexp). Unit: Count   |
| devices.total.offline.count      | Number of total devices offline (in case of regexp). Unit: Count  |
| devices.total.alerting.count     | Number of total devices alerting (in case of regexp). Unit: Count |
| device.connections.success.count | Number of successful connections by device. Unit: Count           |
| device.connections.auth.count    | Number of authentication connnections by device. Unit: Count      |
| device.connections.assoc.count   | Number of association connections by device. Unit: Count          |
| device.connections.dhcp.count    | Number of DHCP connections by device. Unit: Count                 |
| device.connections.dns.count     | Number of DNS connections by device. Unit: Count                  |
| device.traffic.in.bitspersecond  | Incoming traffic going through the device. Unit: bits/second      |
| device.traffic.out.bitspersecond | Outcoming traffic going through the device. Unit: bits/second     |

<!--Network-->

| Metric name                       | Description                                                    |
| :-------------------------------- | :------------------------------------------------------------- |
| network.connections.success.count | Number of successful connections by network. Unit: Count       |
| network.connections.auth.count    | Number of authentication connnections by network. Unit: Count  |
| network.connections.assoc.count   | Number of association connections by network. Unit: Count      |
| network.connections.dhcp.count    | Number of DHCP connections by network. Unit: Count             |
| network.connections.dns.count     | Number of DNS connections by network. Unit: Count              |
| network.traffic.in.bitspersecond  | Incoming traffic going through the network. Unit: bits/second  |
| network.traffic.out.bitspersecond | Outcoming traffic going through the network. Unit: bits/second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration de l'API Meraki

Plus d'informations à propos de l'API de Cisco Meraki sont disponibles sur la documentation officielle :
https://documentation.meraki.com/zGeneral_Administration/Other_Topics/The_Cisco_Meraki_Dashboard_API

Afin de pouvoir utiliser l'API Cisco Meraki, activez tout d'abord celle-ci pour votre organisation 
sur le portail Cisco Meraki à l'aide du menu *Organization > Settings > Dashboard API access*.
  
Une fois l'API activée, allez dans le menu *my profile* pour générer une *API Key*. Celle-ci sera associé à votre compte administrateur Cisco Meraki Dashboard.
 
Vous pouvez générer, révoquer et regénérer une API Key pour votre profil.

> Sauvegardez votre *API Key* en lieu sûr puisqu'elle contient des informations d'authentification pour toute votre organisation.
> Il est possible de regénérer l '*API Key* à tout moment, cela révoquera l'existante.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Cisco Meraki:

```bash
yum install centreon-plugin-Network-Cisco-Meraki-Restapi
```

2. Dans l'interface Centreon, installer le Plugin-Pack *Cisco Meraki Rest API* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Cisco Meraki:

```bash
yum install centreon-plugin-Network-Cisco-Meraki-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-network-cisco-meraki-restapi.noarch
```

3. Dans l'interface Centreon, installer le Plugin-Pack *Cisco Meraki Rest API* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

- Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
- Appliquez le bon modèle d'Hôte. Les modèles Cisco Meraki sont tous nommés "Net-Cisco-Meraki%Restapi".

Les Macros suivantes sont communes à tous les modèles d'Hôtes:

| Mandatory   | Nom                | Description                                                                |
| :---------- | :----------------- | :------------------------------------------------------------------------- |
| X           | MERAKIAPIHOSTNAME  | FQDN of the Meraki API. usually api.meraki.com                             |
| X           | MERAKIAPIPORT      | Port used. Must be 443.                                                    |
| X           | MERAKIAPIPROTO     | Protocole used. Must be HTTPS.                                             |
| X           | MERAKIAPITOKEN     | Meraki API key of your profile. Password checkbox must be checked          |
|             | MERAKIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

Selon le modèle d'Hôte choisi, il est nécessaire de paramétrer certaines Macros supplémentaires:

<!--DOCUSAURUS_CODE_TABS-->

<!--Net-Cisco-Meraki-Device-Restapi-custom-->

| Mandatory   | Nom              | Description                                                |
| :---------- | :--------------- | :--------------------------------------------------------- |
| X           | MERAKIDEVICENAME | Name of the device you want to monitor (can be a regexp)   |

<!--Net-Cisco-Meraki-Network-Restapi-custom-->

| Mandatory   | Nom               | Description                                              |
| :---------- | :---------------- | :------------------------------------------------------- |
| X           | MERAKINETWORKNAME | Name of the network you wan to monitor (can be a regexp) |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* 
(certaines options comme ```api-token```, ```filter-device-name``` ou ```proxyurl``` doivent être ajustées en fonction du contexte):

```bash
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl \
  --plugin='network::cisco::meraki::cloudcontroller::restapi::plugin' \
  --mode='devices' \
  --hostname='api.meraki.com' \
  --api-token='12345abcd6789efgh0123abcd4567efgh8901abcd' \
  --proxyurl='http://proxy.mycompany:8080' \
  --filter-device-name='centreon-par-training-ap' \
  --critical-status='%{status} =~ /alerting/i' \
  --critical-link-status='%{link_status} =~ /failed/i' \
  --verbose
```

La commande retourne le message de sortie ci-dessous:

```bash 	
OK: Device 'centreon-par-training-ap' status: online - connection success: 0 - traffic in: 51.66 b/s, out: 515.86 b/s - link 'WAN 1' status: active | 
'devices.total.online.count'=0;;;0;1 'devices.total.offline.count'=0;;;0;1 'devices.total.alerting.count'=0;;;0;1 
'centreon-par-training-ap#device.connections.success.count'=0;;;0; 'centreon-par-training-ap#device.connections.auth.count'=0;;;0; 
'centreon-par-training-ap#device.connections.assoc.count'=0;;;0; 'centreon-par-training-ap#device.connections.dhcp.count'=0;;;0; 
'centreon-par-training-ap#device.connections.dns.count'=0;;;0; 'centreon-par-training-ap#device.traffic.in.bitspersecond'=51.6626907073509b/s;;;0; 
'centreon-par-training-ap#device.traffic.out.bitspersecond'=515.864632454924b/s;;;0;
checking device 'centreon-par-training-ap'
    status: online
    connection success: 0
    traffic in: 51.66 b/s, out: 515.86 b/s
    link 'WAN 1' status: active
```

Cette commande supervise l'utilisation de l'équipement (```--mode=devices```) *centreon-par-training-ap* (```--filter-device-ame='centreon-par-training-ap'```)
ainsi que le statut de l'équipement (```--critical-status='%{status} =~ /alerting/i'```) et le statut du lien de celui-ci (```--critical-link-status='%{link_status} =~ /failed/i'```).
On précise l'API Key (```--api-token='12345abcd6789efgh0123abcd4567efgh8901abcd'```) ainsi que l'utilisation d'un proxy (```--proxyurl='http://proxy.mycompany:8080'```) 
pour requêter l'API (```--hostname='api.meraki.com'```)
Des seuils peuvent être positionnés à l'aide des options ```--warning-*``` et ```--critical-*``` sur les métriques.

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```
/usr/lib/centreon/plugins/centreon_cisco_meraki_restapi.pl --plugin='network::cisco::meraki::cloudcontroller::restapi::plugin' --mode='devices' --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to api.meraki.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to api.meraki.com:443 |```.

Cela signifie que Centreon n'a pas réussi à se connecter à l'API Cisco Meraki (*api.meraki.com*).

La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *api.meraki.com* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

#### ```UNKNOWN: cannot check than 5 networks at once (api rate limit)```

Lors du déploiement de mes contrôles, j'obtiens le message suivante ```UNKNOWN: cannot check than 5 networks at once (api rate limit)```

Cela signifie que vous avez atteint le nombre maximal de requêtes simultanées à l'API de Cisco Meraki.

Vérifiez que vos filtres (```--filter-network-name``` ou ```--filter-device-name```) ne soient pas trop larges.
