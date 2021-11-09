---
id: update
title: Mise à jour de l'extension
---

La mise à jour de Centreon MBI se fait en 2 étapes :

-   La mise à jour de Centreon MBI server (interface)
-   La mise à jour du serveur de reporting

## Mettre à jour l'interface

1. Mettre à jour le paquet: se connecter sur le serveur Centreon et exécuter la commande suivante :

        yum update centreon-bi-server

2. Mettre à jour l'interface: Se connecter à l'interface web de Centreon et se rendre dans le menu
 `Administration > Extension > Manager` puis cliquer sur le bouton de mise à jour de l'extension et des widgets.


## Mettre  à jour le serveur de reporting

Premièrement, arrêtez le service d'ordonnancement (CBIS):

    systemctl stop cbis

Puis mettre à jour les paquets, en exécutant la commande suivante:

    yum update centreon-bi\*

Enfin, redémarrer le service d'ordonnancement:

    systemctl start cbis