---
id: upgrade
title: Monter de version l'extension
---

> Lors d'une montée de version < 18.10.x vers une version >= 18.10.x, vous devez:
>
> - Récupérer une nouvelle licence via le support Centreon
> - S'assurer que votre serveur de reporting est basé sur CentOS 7. Si ce n'est
>   pas le cas, utiliser la procédure de [migration de votre serveur de
>   reporting](migrate.md)

La montée de version de Centreon MBI se fait en 4 étapes :

- Montée de version du dépôt RPM
- Mise à jour de Centreon MBI server (interface)
- Mise à jour du serveur de reporting
- Mise à jour de la base MariaDB

## Prérequis

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.md#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Étape 1 : Montée de version du paquet

Lors d'une montée de version majeure (ex: 20.10.x à 22.04.x) il faut en premier lieu mettre à jour
 le dépôt contenant les paquets. 

Vous trouverez ce dépôt depuis votre compte sur notre platefome de support https://support.centreon.com à l'onglet "Depots" :

![image](../assets/reporting/support_repos.png)

## Étape 2 : Mettre à jour l'interface

1. Mettre à jour le paquet: se connecter sur le serveur Centreon et exécuter la commande suivante :

    ```shell
    yum update centreon-bi-server
    ```

2. Mettre à jour l'interface: Se connecter à l'interface web de Centreon et se rendre dans le menu
 `Administration > Extension > Manager` puis cliquer sur le bouton de mise à jour de l'extension et des widgets.

## Étape 3 : Mettre  à jour le serveur de reporting

1. Premièrement, arrêtez le service d'ordonnancement (CBIS):

    ```shell
    systemctl stop cbis
    ```

2. Puis mettre à jour les paquets, en exécutant la commande suivante:

    ```shell
    yum update centreon-bi\*
    ```

3. Enfin, redémarrer le service d'ordonnancement:

    ```shell
    systemctl start cbis
    ```

## Étape 4 : mise à jour de MariaDB

1. Arrêtez le service **cbis** :
    ```shell
    systemctl stop cbis
    ```

2. Voir [Mettre à jour MariaDB](../upgrade/upgrade-mariadb.md).

3. Démarrez le service **cbis** :
    ```shell
    systemctl start cbis
    ```
