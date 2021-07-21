---
id: blockchain-parity-ethpoller-restapi
title: Ethpoller API
---

## Vue d'ensemble

Le BCM Poller expose collecte des données sur le comportement d'un réseau Blockchain 
basé sur les technologies Ethereum ou Hyperledger Fabric. 

Le Plugin Pack *Ethpoller API* récupère les informations collectées au travers de 
l'API exposée par cet outil afin d'offrir une analyse de l'utilisation et de l'adoption 
du réseaux au travers du comportement des noeuds observés.

## Contenu du Pack

### Objets supervisés

* EventPoller node 
    * Tracking
    * Stats
    * Disk  

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Tracking-->

| Metric name                               | Description                          | Unit |
|:----------------------------------------- |:------------------------------------ | ---- |
| parity.tracking.events.perminute          | Number of events by minute           |      |
| parity.tracking.mined.block.prct          | Percentage of block mined            |  %   |
| parity.tracking.balance.changes.perminute | Number of balance changes per minute | wei  |

<!--Stats-->

* Per *block*

| Metric name                        | Description                      | Unit |
|:---------------------------------- |:-------------------------------- |----- |
| parity.stats.block.perminute       | Number of block per minute       |      |
| parity.stats.transaction.perminute | Number of transaction per minute |      |
| parity.stats.fork.perminute        | Number of fork per minute        |      |

<!--Disk-->

| Metric name                     | Description                   | Unit |
|:--------------------------------|:------------------------------|:-----|
| eth.poller.disk.free            |  Free space                   |  B   |
| eth.poller.disk.available       |  Availability space           |  B   |
| eth.poller.disk.size            |  Total size                   |  B   |
| eth.poller.disk.used            |  Used space                   |  B   |
| eth.poller.disk.usage           |  Disk usage                   |  %   |
| eth.poller.blockchain.directory |  Size of blockchain directory |  B   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de récupérer des données, déployer le BCM Poller en suivant la documentation 
fournie par l'IRT-Systemx [ici](https://github.com/IRT-SystemX/bcm-poller#getting-started).

Le Collecteur Centreon doit pouvoir communiquer avec le BCM Poller au travers du port
configuré (par défaut: 8000).

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon interrogeant des ressources *Ethpoller API*:

```bash
yum install centreon-plugin-Blockchain-Parity-Ethpoller-Restapi
```

2. Dans l'interface Web de Centreon, installer le Plugin Pack *Ethpoller API* depuis la page  `Configuration > Plugin Packs`.

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon interrogeant des ressources *Ethpoller API*:

```bash
yum install centreon-plugin-Blockchain-Parity-Ethpoller-Restapi
```

2. Sur le serveur Central Centreon, installer le paquet RPM *Ethpoller API*:

 ```bash
yum install centreon-pack-blockchain-parity-ethpoller-restapi
```

3. Dans l'interface Web de Centreon, installer le Plugin Pack *Ethpoller API* depuis la page  `Configuration > Plugin Packs`.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration d'un Hôte

* Ajoutez un nouvel Hôte depuis la page `Configuration > Hôtes`
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre noeud Hyperledger
* Appliquez le Modèle d'Hôte *Blockchain-Hyperledger-Exporter-custom*

| Mandatory | Name                  | Description                                                                        |
|:----------|:--------------------- |:-----------------------------------------------------------------------------------|
|     X     | ETHPOLLERAPIPORT      | Port used (Default: '8000')                                                          |
|     X     | ETHPOLLERPROTO        | Protocol used (Default: 'http')                                                    |
|     X     | ETHPOLLERAPIURLPATH   | Path to the API - (Default: '/')                                                   |
|           | TIMEOUT               | Request timeout                                                                    |
|           | ETHPOLLEREXTRAOPTIONS | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin déployé, connectez vous à votre Collecteur en SSH et executez 
la commande suivante au travers de l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_blockchain_parity_ethpoller_api.pl  \ 
   --plugin=blockchain::parity::ethpoller::plugin  \ 
   --mode=tracking  \ 
   --hostname=10.0.0.1  \ 
   --port='8000'  \ 
   --proto='http'  \ 
   --url-path='/'  \ 
   --timeout='10' \ 
   --warning-balance-changes=''  \ 
   --critical-balance-changes=''  \ 
   --warning-events-frequency=''  \ 
   --critical-events-frequency=''  \ 
   --warning-mining-frequency=''  \ 
   --critical-mining-frequency=''  \ 
   --warning-mining-prct=''  \ 
   --critical-mining-prct='50:'   
```

Le retour de la commande doit être similaire à:

 ```bash
OK: Events metrics are ok - Mining metrics are ok - Balances metrics are ok |
'agent1#parity.tracking.events.perminute'=5.00;;;; 'agent2#parity.tracking.events.perminute'=15.00;;;; 'agent3#parity.tracking.events.perminute'=15.00;;;; 'agent4#parity.tracking.events.perminute'=10.00;;;; 'agent5#parity.tracking.events.perminute'=0.00;;;; 'credit#parity.tracking.events.perminute'=10.00;;;; 'deploy#parity.tracking.events.perminute'=20.00;;;; 'registry#parity.tracking.events.perminute'=5.00;;;; 'black#parity.tracking.mined.block.perminute'=5.00;;;; 'black#parity.tracking.mined.block.prct'=33.41%;;;0; 'gray#parity.tracking.mined.block.perminute'=10.00;;;; 'gray#parity.tracking.mined.block.prct'=33.14%;;;0; 'white#parity.tracking.mined.block.perminute'=10.00;;;; 'white#parity.tracking.mined.block.prct'=33.46%;;;0; 'master#parity.tracking.balance.changes.perminute'=0.00wei;;;; 'random#parity.tracking.balance.changes.perminute'=729999999999997378560.00wei;;;; 
```

Cette commande déclenchera une alerte CRITICAL si l'un des noeuds a miné moins de 
50% des blocks (`--critical-mining-prct=50:`). 

Les options disponibles pour un mode donnée peuvent être affiché en ajoutant 
l'option `--help` à la commande.

Tous les modes d'un Plugin donné peuvent être listés au moyen de la commande suivante:

```bash
/usr/lib/centreon/plugins//centreon_blockchain_parity_ethpoller_api.pl  \ 
   --plugin=blockchain::parity::ethpoller::plugin  \ 
   --mode=tracking  \ 
   --help
```

## Diagnostic des erreurs communes

### UNKNOWN: Can't connect to ... 

Cette erreur signifie que Centreon n'a pas réussi à se connecter à l'API du 
BCM Poller. Vérifiez que la requête n'est pas bloquée par un outil externe
(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans la
Macro EXTRAOPTIONS de l'Hôte ou directement dans la commande avec l'option 
```--proxyurl='http://proxy.mycompany:8080'```.

Vérifiez également que le port configuré est correct. 