---
id: blockchain-parity-restapi
title: Parity API
---

## Vue d'ensemble

Parity est un fork de la Blockchain Ethereum. 

Le Plugin Pack *Parity API* collecte des informations et métriques sur l'activité 
des noeuds d'un réseau Blockchain au travers d'une API. 

## Contenu du Pack

### Objets supervisés

* Noeud(s) d'une Blockchain Parity
     * Parity
     * Info
     * Eth
     * Net

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Parity-->

| Metric name                 | Description                      | Unit |
|:----------------------------|:---------------------------------|------|
| parity.pending.transactions | Number of pending transactions   |      |
| parity.mempol.usage         | Memory pool usage                |   B  |
| parity.mempol.size          | Memory pool size                 |   B  |
| parity.peers.connected      | Number of connected peers        |      |
| parity.peers.max            | Maximum number of peers          |      |
| parity.peers.usage          | Peers usage expressed in percent |   %  |

<!--Eth-->

| Metric name                          | Description                   |
|:-------------------------------------|:------------------------------|
| parity.eth.sync.status               | State of node synchronization |
| parity.eth.block.gas                 | Gas                           |
| parity.eth.block.usage               | Block Usage                   |
| parity.eth.block.size                | Size of Block                 |
| parity.eth.block.transactions.number | Number of block transactions  |
| parity.eth.block.uncles              | Number of block uncles        |
| parity.eth.gas.limit                 | Maximum Gas available         |
| parity.eth.gas.price                 | Gas price                     |
| parity.eth.gas.used                  | Gas consumption               |

<!--Net-->

| Metric name                   | Description              |
|:------------------------------|:-------------------------|
| parity.network.peers.count    | Number of known peers    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Le Poller doit pouvoir communiquer avec le noeud Parity via le protocole HTTP et 
via le port configuré (par défaut: 8545).

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des noeuds Parity:

```bash
yum install centreon-plugin-Blockchain-Parity-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Parity API* depuis 
la page  `Configuration > Plugin Packs`.

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des noeuds Parity:

```bash
yum install centreon-plugin-Blockchain-Parity-Restapi
```

2. Installer le RPM du Plugin Pack *Parity API* sur le serveur Central: 

 ```bash
yum install centreon-pack-blockchain-parity-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Parity API* depuis 
la page  `Configuration > Plugin Packs`.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration d'un Hôte

* Ajoutez un nouvel Hôte via le menu `Configuration > Hosts`
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre noeud Parity
* Appliquez le Modèle d'Hôte *Blockchain-Parity-Restapi-custom* et configurer les macros associées

| Mandatory | Name               | Description                                                                        |
|:----------|:-------------------|:-----------------------------------------------------------------------------------|
|           | PARITYAPIPORT      | (Default: '8545')                                                                  |
|           | PARITYPROTO        | (Default: 'http')                                                                  |
|           | PARITYAPIURLPATH   | (Default: '/')                                                                     |
|           | TIMEOUT            |                                                                                    |
|           | PARITYEXTRAOPTIONS | Any extra option you may want to add to every command_line (eg. a --verbose flag)  |

## Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin déployé, connectez vous à votre Collecteur en SSH et executez 
la commande suivante au travers de l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \ 
   --plugin=blockchain::parity::restapi::plugin  \ 
   --mode=net  \ 
   --hostname=10.0.0.1  \ 
   --port=8545  \ 
   --proto=http \
   --timeout=10  \ 
   --proto=http  \ 
   --api-path=/  \ 
   --warning-peers=''  \ 
   --critical-peers='1:'   
```

Le retour de la commande doit être similaire à:

`OK: Parity network module: connected peers: 2`

Cette commande déclenchera une alerte WARNING si le nombre de peers connecté est 
inférieur à 1 (`--critical-peers=1:`).

Tous les modes d'un Plugin donné peuvent être listés au moyen de la commande suivante:

```bash
/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \ 
    --plugin=blockchain::parity::restapi::plugin  \ 
    --mode=net  \ 
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