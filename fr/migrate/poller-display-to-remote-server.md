---
id: poller-display-to-remote-server
title: Migration d'une plate-forme avec Poller Display
---

## Migrer le serveur Centreon Central

Si le module **centreon-poller-display-central-1.6.x** est installé :

1. Rendez-vous dans le menu **Administration > Extensions > Modules** et
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

1. Rendez-vous dans le menu **Administration > Extensions > Modules** et
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

4. Rendez-vous dans le menu **Administration > Extensions > Modules** et
installez le module **centreon-license-manager**.

5. Activer l'option Remote Server

    Pour transformer le serveur en Remote Server, connectez-vous au serveur et
    exécutez la commande suivante :

    ```shell
    /usr/share/centreon/bin/centreon -u admin -p centreon -a enableRemote -o CentreonRemoteServer \
    -v '<IP_CENTREON_CENTRAL>;<not check SSL CA on Central>;<HTTP method>;<TCP port>;<not check SSL CA on Remote>;<no proxy to call Central>'
    ```

    - Remplacez **\<IP_CENTREON_CENTRAL\>** par l'IP du serveur Centreon vu par le
        collecteur. Vous pouvez définir plusieurs adresses IP en utilisant la virgule
        comme séparateur.

        > Pour utiliser HTTPS, remplacez **\<IP_CENTREON_CENTRAL\>** par
        > **https://\<IP_CENTREON_CENTRAL\>**.
        >
        > Pour utiliser un autre port TCP, remplacez **@IP_CENTREON_CENTRAL** par
        > **\<IP_CENTREON_CENTRAL\>:\<PORT\>**.

    - Pour ne pas contrôler le certificat SSL sur le serveur Centreon Central, mettre
        à **1** l'option **\<not check SSL CA on Central\>**, sinon **0**.

    - L'option **\<HTTP method\>** permet de définir la méthode de connexion pour
        contacter le Remote Server : HTTP ou HTTPS.

    - L'option **\<TCP port\>** permet de définir sur quel port TCP communiquer avec
        le Remote Server.

    - Pour ne pas contrôler le certificat SSL sur le Remote server, mettre à **1**
        l'option **\<not check SSL CA on Central\>**, sinon **0**.

    - Pour ne pas utiliser le proxy pour contacter le serveur Centreon Central,
        mettre à **1** l'option **\<no proxy to call Central\>**, sinon **0**.

    Cette commande va activer le mode **Remote Server** :
    
    - en limitant l'accès au menu,
    - en limitant les actions possibles,
    - en authorisant le Central à s'y connecter,
    - en pré-enregistrant le serveur auprès du Central.

    ```text
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

    ``` SQL
    GRANT FILE on *.* to 'centreon'@'localhost';
    ```

7. Depuis l'interface web du serveur **Centreon Central**, éditez
tous les collecteurs rattachés au **Remote Server** et liez ceux-ci au
nouveau Remote Server via la liste de sélection.

> N'oubliez pas de [générer la configuration](../monitoring/monitoring-servers/deploying-a-configuration.html) de votre
> **Remote Server**.

> Un serveur Centreon Remote Server est un serveur dont l’administration est
> autonome.
>
> Ainsi, la configuration de l’annuaire LDAP, celle des utilisateurs
> ainsi que celle des ACL sont propres à ce serveur et doivent être configurées
> via les menus **Configuration** (pour les utilisateurs) et **Administration**
> (pour l'annuaire LDAP et les ACL).
