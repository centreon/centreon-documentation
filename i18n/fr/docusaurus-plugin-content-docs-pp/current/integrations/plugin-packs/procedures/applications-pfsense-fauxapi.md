---
id: applications-pfsense-fauxapi
title: Pfsense Fauxapi
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Dans son principe, FauxAPI lit simplement le fichier config.xml de pfSense, le convertit en JSON et retourne à l'appelant de l'API.
FauxAPI fournit des interfaces API de sauvegarde et de restauration faciles qui, par défaut, stockent les sauvegardes de la configuration 
sur toutes les opérations d'écriture de la configuration ; il est donc très facile de revenir en arrière même si l'utilisateur de l'API parvient à déployer 
une configuration "très cassée".

## Contenu du Plugin-Pack

### Objets supervisés

* Gateways
* Rules
* System
* Backup Files

### Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle 
du Fauxapi Pfsense : https://github.com/ndejong/pfsense_fauxapi

<Tabs groupId="sync">
<TabItem value="Backup-files" label="Backup-files">

| Metric name                                | Description                 | Unit  |
| :----------------------------------------- | :---------------------------| :---- | 
| backups.total.count                        | Total number of backups     | count |
| backups.time.last.seconds                  | Last backup time in seconds.| s     |

</TabItem>
<TabItem value="Gateways" label="Gateways">

| Metric name                                 | Description                                                          | Unit |
| :------------------------------------------ | :------------------------------------------------------------------- | :--- |
| status                                      | Gateways status                                                      |      |
| gateway.packets.delay.milliseconds          | Delay packets going through the Pfsense in milliseconds.             | ms   |
| gateway.packets.loss.percentage             | Lost packets going through the Pfsense in percentage.                | %    |
| gateway.packets.stddev.milliseconds         | Standard deviation packets going through the Pfsense in milliseconds.| ms   |

</TabItem>
<TabItem value="Rules" label="Rules">

| Metric name                 | Description                                           | Unit  |
| :-------------------------- | :-----------------------------------------------------| :---- |
| rules.total.count           | Total number of rules                                 | count |
| rule.traffic.bitspersecond  | Traffic by rules in bits per seconds.                 | b/s   |

</TabItem>
<TabItem value="System" label="System">

| Metric name                                | Description                         | Unit  |
| :----------------------------------------- | :-----------------------------------| :---- |
| system.connections.tcp.usage.count         | Number of TCP connections           | count |
| system.connections.tcp.usage.percentage    | Usage TCP connections in percentage.| %     |
| system.temperature.celsius                 | System temperature in celsius.      | C     |

</TabItem>
</Tabs>

## Prérequis

Un compte de service est requis pour interroger le Fauxapi Pfsense. Celui-ci doit avoir suffisamment de privilèges en lecture dans l'environnement.
Au niveau des droits API, votre fichier de configuration doit contenir au minimum :

* config_backup_list
* gateway_status
* rule_get
* system_stats

Plus d'informations sont disponible sur la documentation officielle de Pfsense Fauxpi documentation : https://github.com/ndejong/pfsense_fauxapi/blob/master/README.md

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Pfsense Fauxapi :

```bash
yum install centreon-plugin-Applications-Pfsense-Fauxapi.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Pfsense Fauxapi* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Pfsense Fauxapi :

```bash
yum install centreon-plugin-Applications-Pfsense-Fauxapi.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-pfsense-fauxapi.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Pfsense Fauxapi* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
</Tabs>

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par environnement Pfsense Fauxapi
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Pfsense-Fauxapi-custom*.
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIKEY          | Pfsense Fauxapi key                                                        |
| X         | APISECRET       | Pfsense Fauxapi secret                                                     |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-key``` ou ```api-secret``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_pfsense_fauxapi.pl \
    --plugin=apps::pfsense::fauxapi::plugin \
    --mode=gateways \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-key='myapikey' \
    --api-secret='myapisecret' \
    --filter-name='WAN_DHCP' \
    --critical-status='%{status} !~ /none/i' \
    --warning-packets-loss=5 \ 
    --critical-packets-loss=10 \
    --verbose
    
OK: Gateway 'WAN_DHCP' packets status: none, delay: 1.00 ms, loss: 9.00 %, stddev: 7.00 ms | 'WAN_DHCP#gateway.packets.delay.milliseconds'=1.00ms;;120;300; 'WAN_DHCP#gateway.packets.loss.percentage'=9.00%;;;5;10 'WAN_DHCP#gateway.packets.stddev.milliseconds'=7.00ms;;360;480;
Gateway 'WAN_DHCP' packets status: none, delay: 1.00 ms, loss: 9.00 %, stddev: 7.00 ms
```

La commande ci-dessus contrôle le statut d'une gateway d'un Pfsense via la Fauxapi (```--mode=gateways```)  nommée *WAN_DHCP* (```--filter-name='WAN_DHCP'```). 
Le Plugin utilise l'api-key (```--api-key='myapikey'```), l'api-secret (```--api-secret='myapisecret'```)
et il se connecte à l'hôte _10.0.0.1_ (```--hostname='10.0.0.1'```) 
sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Cette commande déclenchera une alarme CRITICAL si le statut retourné de la gateway est différent de *none* (```--critical-status='%{status} !~ /none/i'```).

Cette commande déclenchera une alarme WARNING si les paquets perdus dépasse les 5% (```--warning-packets-loss='5'```) 
et une alerte CRITICAL s'il dépasse 10% (```--critical-packets-loss='10'```).

Des seuils peuvent être positionnés à l'aide des options ```--warning-*``` et ```--critical-*``` sur les métriques.

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins//centreon_pfsense_fauxapi.pl --plugin=apps::pfsense::fauxapi::plugin \
--mode=gateways --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to mypfsense.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to mypfsense.com:443 |```.
Cela signifie que Centreon n'a pas réussi à se connecter à Pfsense Fauxapi (*mypfsense.com*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *mypfsense.com* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

### Comment puis-je supprimer les perfdatas *count* dans le cas où je ne souhaite vérifier qu'une seule application ?

Le Plugin permet de filtrer sur un ou plusieurs éléments mais permet également de récupérer l'ensemble des éléments si aucun filtre n'est spécifié.
De ce fait, des perfdatas "globales" sur les statistiques des objets sont ajoutées par défaut. Il est possible de supprimer ces données de performance en appliquant le filtre suivant: ```--filter-perfdata='^$'```.
