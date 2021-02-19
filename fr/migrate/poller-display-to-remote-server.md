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
Central vers 20.10.

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

5. Enregistrer le Remote Server

Pour l'enregistrer sur le serveur Centreon Central, exécutez la commande suivante :

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n <REMOTE_SERVER_NAME>
```

Exemple:

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1
```

> Remplacer **<IP_TARGET_NODE>** par l'adresse IP du serveur Centreon Central vue par votre collecteur.

> Le compte **<API_ACCOUNT>** doit avoir accès à l'API de configuration. Vous pouvez utiliser le compte **admin**.

> Vous pouvez changer le port et la méthode HTTP, le format de l'option **-h** est le suivant :
> HTTPS://<IP_TARGET_NODE>:PORT

Suivre ensuite les instructions

1. Saisir le mot de passe :

``` shell
192.168.0.1: please enter your password
```

2. Sélectionner l'adresse IP si plusieurs interfaces réseau existent:

```shell
Which IP do you want to use as CURRENT NODE IP ?
1) 192.168.0.2
2) 192.168.0.3
1
```

3. Valider les informations:

``` shell
Summary of the informations that will be send:

Api Connection:
username: admin
password: ******
target server: 192.168.0.1

Pending Registration Server:
name: remote-1
type: remote
address: 192.168.0.2

Do you want to register this server with those informations ? (y/n)y
```

4. Ajouter les informations nécessaires pour permettre de futures communications entre votre Remote Server et son Central

```shell
<CURRENT_NODE_ADDRESS> : Please enter your username:
admin
<CURRENT_NODE_ADDRESS> : Please enter your password:

<CURRENT_NODE_ADDRESS> : Protocol [http]:
<CURRENT_NODE_ADDRESS> : Port [80]:
<CURRENT_NODE_ADDRESS> : centreon root folder [centreon]:
```
5. Définir les accès au proxy du serveur Centreon du Central :

```shell
Are you using a proxy ? (y/n)
y
enter your proxy Host:
myproxy.example.com
enter your proxy Port [3128]:
Are you using a username/password ? (y/n)
y
enter your username:
my_proxy_username
enter your password:

```

Vous recevrez la validation du serveur Centreon Central :

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote: 'remote-1@192.168.0.2' has been converted and registered successfully.
```

### Principaux messages d'erreur

``` shell
2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Vos informations d'identification sont incorrectes pour le compte **<API_ACCOUNT>**.

``` shell
2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> L'utilisateur **<API_ACCOUNT>** n'a pas accès à l'API de configuration.

``` shell
Failed connect to 192.168.0.1:444; Connection refused
```

> Impossible d'accéder à l'API. Contrôler les valeurs **<IP_TARGET_NODE>**, méthode et port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> L'URL d'accès n'est pas complète ou invalide. Utilisez l'option **-root** pour définir le chemin de l'URL de l'API.
> Par exemple : **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> La version Centreon du serveur distant est invalide. Elle doit être supérieur ou égale à 20.10.

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
