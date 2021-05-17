---
id: upgrade
title: Monter de version de l'extension
---

> Lors d'une montée de version < 18.10.x vers une version >= 18.10.x, vous devez:
>
> - Récupérer une nouvelle license via le support Centreon
> - S'assurer que votre serveur de reporting est basé sur CentOS 7. Si ce n'est
>   pas le cas, utiliser la procédure de [migration de votre serveur de
>   reporting](migrate.html)

La montée de version de Centreon MBI se fait en 3 étapes :

- Montée de version du dépôt RPM
- La mise à jour de Centreon MBI server (interface)
- La mise à jour du serveur de reporting

## Monter de version du paquet

Lors d'une montée de version majeure (ex: 20.10.x à 21.04.x) il faut en premier lieu mettre à jour
 le dépôt contenant les paquets. 

Vous trouverez ce dépôt depuis votre compte sur notre platefome de support https://support.centreon.com à l'onglet "Depots" :

![image](../assets/reporting/support_repos.png)

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
