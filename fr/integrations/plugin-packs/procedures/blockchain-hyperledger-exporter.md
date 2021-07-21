---
id: blockchain-hyperledger-exporter
title: Hyperledger API
---

## Vue d'ensemble

Hyperledger est une plateforme open-source de développement de blockchain et 
supporté par la fondation Linux. 

Le Plugin Pack *Hyperledger API* se connecte à une API de type *exporter* afin de 
récupérer des métriques au sujet des *channels*. 

## Contenu du Pack

### Objets supervisés 

* Sous-réseaux privés Hyperledger

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Channels-->

| Metric name                                       | Description                     |
|-------------------------------------------------- |---------------------------------|
| channel.ledger.transaction.count                  | Number of processed transaction |
| channel.gossip.membership.total.peers.known.count | Total known peers               | 
| channel.gossip.state.height.count                 | Current ledger height           |
| channel.ledger.blockchain.height.count            | Height of the chain in blocks   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Installation 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des noeuds *Hyperledger API*:

```bash
yum install centreon-plugin-Blockchain-Hyperledger-Exporter
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Hyperledger API* depuis la page  `Configuration > Plugin Packs`.

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des noeuds *Hyperledger API*:

```bash
yum install centreon-plugin-Blockchain-Hyperledger-Exporter
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin Pack *Hyperledger API*:

 ```bash
yum install centreon-pack-blockchain-hyperledger-exporter
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Hyperledger API* depuis la page  `Configuration > Plugin Packs`.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration d'un Hôte

* Ajoutez un nouvel Hôte depuis la page `Configuration > Hôtes`
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre noeud Hyperledger
* Appliquez le Modèle d'Hôte *Blockchain-Hyperledger-Exporter-custom*

| Mandatory | Name               | Description                                                                        |
|:----------|:-------------------|:-----------------------------------------------------------------------------------|
|    x      | EXPORTERAPIPORT    | Port used by the Hyperledger Exporter (Default: '80')                              |
|    x      | EXPORTERPROTO      | Protocol used by the Hyperledger Exporter (Default: 'http')                        |
|    X      | EXPORTERAPIURLPATH | URL to access the Hyperledger Exporter (Default: '/')                              |
|           | TIMEOUT            | Timeout (Default: '10')                                                            |
|           | EXTRAOPTIONS       | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Diagnostic des erreurs communes

### UNKNOWN: Can't connect to ... 

Cette erreur signifie que Centreon n'a pas réussi à se connecter à l'API du 
serveur Ciso ISE. Vérifiez que la requête n'est pas bloquée par un outil externe
(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans la
Macro EXTRAOPTIONS de l'Hôte ou directement dans la commande avec l'option 
```--proxyurl='http://proxy.mycompany:8080'```.

### J'obtiens le message d'erreur suivant:  ``UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Dans certains cas, et plus spécifiquement lors de l'usage d'un proxy 
d'entreprise, le protocole de connexion n'est pas supporté par la libraire lwp 
utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP curl. Pour ce faire, 
ajoutez l'option ```--http-backend='curl'``` dans la Macro EXTRAOPTIONS de 
l'Hôte ou directement à la commande.