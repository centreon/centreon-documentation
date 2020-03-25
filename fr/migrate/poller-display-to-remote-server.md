---
id: poller-display-to-remote-server
title: Migration d'une plate-forme avec Poller Display
---

## Migrer le serveur Centreon Central

Si le module **centreon-poller-display-central-1.6.x** est installé :

1. Rendez-vous dans le menu **Administration \> Extensions \> Modules** et
désinstallez le module **centreon-poller-display-central**

2. Supprimez le paquet associé :

    ```shell
    yum remove centreon-poller-display-central
    ```

Puis suivez la [procédure de montée de version](../upgrade/upgrade-from-3-4.html)
si vous avez une plateforme sous CentOS 7 avec paquets Centreon, sinon la
[procédure de migration](../migrate/migrate-from-3-4.html) d'un serveur Centreon
Central vers 20.04.

> Si vous possédez des modules Centreon EMS, il est nécessaire de mettre à jour
> ces dépôts. Contactez votre support Centreon pour obtenir ces derniers. Demandez
> également les nouvelles licences associées.

## Migrer un Poller avec Poller Display vers Remote Server

1. Rendez-vous dans le menu **Administration \> Extensions \> Modules** et
supprimez le module **Centreon Poller Display**.

2. Si vous avez installé le module à partir du paquet RPM, supprimez le paquet
en exécutant la commande suivante :

    ```shell
    yum remove centreon-poller-display
    ```

3. Si votre serveur est basé sur la distribution CentOS ou Red Hat en version
7, réalisez la montée de version en suivant [cette procédure](../upgrade/upgrade-from-3-4.html),
sinon référez vous à [la procédure de migration](../migrate/migrate-from-3-4.html).

    > Si vous possédez des modules Centreon EMS, il est nécessaire de mettre à jour
    > ces dépôts. Contactez votre support Centreon pour obtenir ces derniers.

4. Rendez-vous dans le menu **Administration \> Extensions \> Modules** et
installez le module **centreon-license-manager**.

5.  Exécutez la commande suivante :

    ```shell
    /usr/share/centreon/bin/centreon -u admin -p <PASSWORD> -a enableRemote -o CentreonRemoteServer -v <IP_CENTREON_CENTRAL>
    ```

    > Remplacez **@IP\_CENTREON\_CENTRAL** par l'IP du serveur Centreon vu par le
    > collecteur, et **\<PASSWORD\>** par le mot de passe du compte admin.

    Cette commande va activer le mode **Remote Server** :

    ```shell
    Starting Centreon Remote enable process:
    Limiting Menu Access...               Success
    Limiting Actions...                   Done
    Authorizing Master...                 Done
    Set 'remote' instance type...         Done
    Notifying Master...
    Trying host '10.1.2.3'... Success
    Centreon Remote enabling finished.
    ```

6. Ajout des droits pour l'utilsateur de base de données centreon d'utiliser la
commande **LOAD DATA INFILE**:

    ```shell
    $ mysql -h <IP_REMOTE> -u root -p
    MariaDB [(none)]> GRANT FILE on *.* to 'centreon'@'localhost';
    ```

7. Echange de clé SSH :

    Si vous n’avez pas de clé SSH privée sur le serveur central pour l’utilisateur
    ‘centreon’ :

    ```shell
    su - centreon
    ssh-keygen -t rsa
    ```

    Vous devez copier cette clé sur le Remote Server :

    ```shell
    su - centreon
    ssh-copy-id -i .ssh/id_rsa.pub centreon@<IP_REMOTE>
    ```

8. Depuis l'interface web du serveur **Centreon Central**, éditez
tous les collecteurs rattachés au **Remote Server** et liez ceux-ci au
nouveau Remote Server via la liste de sélection.

> N'oubliez pas de [générer la configuration](../monitoring/deploy.html) de votre
> **Remote Server**.

> Un serveur Centreon Remote Server est un serveur dont l’administration est
> autonome.
>
> Ainsi, la configuration de l’annuaire LDAP, celle des utilisateurs
> ainsi que celle des ACL sont propres à ce serveur et doivent être configurées
> via les menus **Configuration** (pour les utilisateurs) et **Administration**
> (pour l'annuaire LDAP et les ACL).
