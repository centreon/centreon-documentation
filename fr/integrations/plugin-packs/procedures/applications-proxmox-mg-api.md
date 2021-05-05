---
id: applications-proxmox-mg-api
title: Proxmox Mail Gateway
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack Proxmox Mail Gateway collecte les données pour:
* Mail
* Version

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Mail-->

| Metric name                      | Description                    | Unit |
| :------------------------------- | :----------------------------- | :--- |
| mails.incoming.count             | Number of incoming mails       |      |
| mails.outgoing.count             | Number of outgoing mails       |      |
| mails.traffic.in.bytespersecond  | Incoming mail traffic          | B/s  |
| mails.traffic.out.bytespersecond | Outgoing mail traffic          | B/s  |
| mails.spam.incoming.count        | Number of incoming spam mails  |      |
| mails.spam.outgoing.count        | Number of outgoing spam mails  |      |
| mails.virus.incoming.count       | Number of incoming virus mails |      |
| mails.virus.outgoing.count       | Number of outgoing virus mails |      |

<!--Version-->

| Metric name     | Description                  | Unit |
| :-------------- | :--------------------------- | :--- |
| version status  | Proxmox Mail Gateway version |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler l'application Proxmox Mail Gateway, l'API Rest doit être configuré (cf: https://pmg.proxmox.com/pmg-docs/api-viewer/index.html)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Proxmox-Mg-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Proxmox Mail Gateway* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Proxmox-Mg-Api
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-applications-proxmox-mg-api
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Proxmox Mail Gateway* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin Pack est conçu de manière à avoir dans Centreon un hôte par application Proxmox Mail Gateway.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Proxmox-Mg-Api-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                     | Description                                                                |
| :-------- | :----------------------- | :------------------------------------------------------------------------- |
| X         | PROXMOXMGAPIPORT         | Port used (Default: 8006)                                                  |
| X         | PROXMOXMGAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | PROMOXMGAPIURLPATH       | Api endpoint (Default: '/api2/json')                                       |
| X         | PROXMOXMGAPIUSERNAME     | Api username                                                               |
| X         | PROXMOXMGAPIPASSWORD     | Api password                                                               |
| X         | PROMOXMGAPIREALM         | Api realm (Default: 'pmg')                                                 |
|           | PROXMOXMGAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_proxmox_mg_api.pl \
    --plugin=apps::proxmox::mg::restapi::plugin \
    --mode=mail \
    --hostname='10.30.2.79' \
    --port='8006' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --hours=1 \
    --timespan=1800 \
    --verbose
```

Exemple de sortie:
```
OK: Mail statistics are ok | 'mails.incoming.count'=71;;;0; 'mails.outgoing.count'=31;;;0; 'mails.traffic.in.bytespersecond'=4255.35B/s;;;0; 'mails.traffic.out.bytespersecond'=2780.03B/s;;;0; 'mails.spam.incoming.count'=5;;;0; 'mails.spam.outgoing.count'=0;;;0; 'mails.virus.incoming.count'=0;;;0; 'mails.virus.outgoing.count'=0;;;0;
checking mail statistics
    number of mails incoming: 71, outgoing: 31
    traffic in: 4.16 KB/s, out: 2.71 KB/s
    number of spam mails incoming: 5, outgoing: 0
    number of virus mails incoming: 0, outgoing: 0
```

La commande ci-dessus contrôle statistiques mails (```--mode=mail```).
Le Plugin utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _8006_ (```--port='8006'```) utilisant le protocol _https_ (```--proto='https'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_mg_api.pl \
    --plugin=apps::proxmox::mg::restapi::plugin \
    --mode=mail \
    --help
```

## J'obtiens le message d'erreur suivant:

### ```UNKNOWN: 500 Can't connect to 10.30.2.79:8006 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to 10.30.2.79:8006 |```.
Cela signifie que Centreon n'a pas réussi à se connecter au Proxmox Mail Gateway API (*10.30.2.79*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *10.30.2.79* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.
