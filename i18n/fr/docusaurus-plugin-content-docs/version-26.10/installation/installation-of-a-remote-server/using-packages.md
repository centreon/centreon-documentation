---
id: using-packages
title: À partir des paquets (serveur distant)
description: "Installer et enregistrer un serveur distant à partir des paquets RPM ou DEB"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DatabaseRepository from '../_database-repository.mdx';
import DatabaseLocalInstall from '../_database-local-install.mdx';
import DatabaseRemoteInstall from '../_database-remote-install.mdx';
import DatabaseEnableRestart from '../_database-enable-restart.mdx';
import DatabaseTlsConf from '../_database-tls-conf.mdx';
import InstallCommon from '../_install-common.mdx';
import TlsCertificates from '../_tls-certificates.mdx';
import InterfaceTlsConf from '../_interface-tls-conf.mdx';
import CentreonRepository from '../_centreon-repository.mdx';
import DependenciesRepository from '../_dependencies-repository.mdx';

Vous devez exécuter la procédure d'installation en tant qu'utilisateur privilégié.

> Lorsque vous exécutez une commande, vérifiez ce qu'elle affiche. En cas de message d'erreur, arrêtez la procédure et corrigez le problème.

Nous vous recommandons de chiffrer les communications du serveur web comme celles de la base de données, même si ces étapes ne sont pas nécessaires au fonctionnement de Centreon. La procédure ci-dessous met en place ce chiffrement. Dans certains cas (par exemple pour réaliser des tests rapides), vous pouvez préférer une installation non sécurisée : il vous suffit alors d'ignorer l'[étape 3 : Mettre en place la configuration TLS](#étape-3--mettre-en-place-la-configuration-tls).

<InstallCommon />

#### Dépendances

<DependenciesRepository />

#### Dépôt de base de données

<DatabaseRepository />

#### Dépôt Centreon

<CentreonRepository />

## Étape 2 : Installer le serveur

Cette section décrit comment installer un serveur distant Centreon.

Vous pouvez installer ce serveur avec une base de données locale au serveur, ou
avec une base de données distante sur un serveur dédié.

<Tabs groupId="sync">
  <TabItem value="Avec une base de données locale" label="Avec une base de données locale">
    <DatabaseLocalInstall />

Vous pouvez maintenant passer à l'[étape suivante](#étape-3--mettre-en-place-la-configuration-tls).

  </TabItem>
  <TabItem value="Avec une base de données distante" label="Avec une base de données distante">
    <DatabaseRemoteInstall />
  </TabItem>
</Tabs>

## Étape 3 : Mettre en place la configuration TLS

### Générer les certificats

<TlsCertificates />

### Pour la base de données

<DatabaseTlsConf />

### Pour l'interface web

Cette section décrit comment mettre en place une connexion TLS entre le serveur distant et son interface web.

<InterfaceTlsConf />

## Étape 4 : Configuration

### Nom du serveur

Si vous souhaitez changer le nom du serveur, utilisez la commande suivante :
```shell
hostnamectl set-hostname new-server-name
```

Remplacez **new-server-name** par le nom de votre choix. Exemple :
```shell
hostnamectl set-hostname remote1
```

### Démarrage des services au démarrage du système

Pour que les services démarrent automatiquement au démarrage du système, exécutez les commandes suivantes
sur le serveur distant :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl enable php8.4-fpm apache2 centreon cbd centengine gorgoned centreontrapd snmpd snmptrapd
```

</TabItem>
</Tabs>

Exécutez ensuite la commande suivante (sur le serveur distant si vous utilisez une base de données locale, ou sur votre serveur de base de données dédié) :

<DatabaseEnableRestart />

## Étape 5 : Installation web

1. Démarrez le serveur Apache avec la
commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

2. Pour terminer l'installation, suivez la
procédure d'[installation web](../web-and-post-installation.md#installation-web).

> Pendant l'installation web, il n'est pas nécessaire d'installer le module Autodiscovery.

> À l'étape **Initialisation de la supervision**, seules les actions 6 à 8 sont nécessaires.

<!-- ## Étape 5 : Enregistrer le serveur

Pour transformer le serveur en serveur distant et l'enregistrer sur le serveur central ou sur un autre serveur distant, exécutez la commande suivante sur le futur serveur distant :

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \
-t remote -h <IP_TARGET_NODE> -n<REMOTE_SERVER_NAME>
```

Si vous utilisez une [URI personnalisée](../../administration/secure-platform.md#uri-personnalisée), ajoutez-la à la fin de la commande, au format suivant : **/uri_personnalisée**.

Exemple (avec une URI personnalisée) :

``` shell
/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1 /monitoring
```

> Remplacez **\<IP_TARGET_NODE\>** par l'adresse IP du serveur central, telle que vue par le serveur distant.

> Le compte **\<API_ACCOUNT\>** doit avoir accès à l'API de configuration. Vous pouvez utiliser le compte **admin** par défaut.

> Si vous devez changer la méthode HTTP ou le port, utilisez le format suivant pour l'option **-h** :
> `HTTPS:/<IP_TARGET_NODE>:PORT`

Suivez ensuite les instructions :
1. Saisissez votre mot de passe :

    ``` shell
    192.168.0.1: please enter your password:
    ```

2. Sélectionnez l'adresse IP si plusieurs interfaces réseau existent :

    ```shell
    Which IP do you want to use as CURRENT NODE IP?
    1) 192.168.0.2
    2) 192.168.0.3
    1
    ```

3. Validez ensuite les informations :

    ``` shell
    Summary of the information that will be sent:

    API connection:
    username: admin
    password: ******
    target server: 192.168.0.1

    Pending Registration Server:
    name: remote-1
    type: remote
    address: 192.168.0.2

    Do you want to register this server with the previous information? (y/n)y
    ```

4. Ajoutez les informations complémentaires permettant les futures communications entre votre serveur distant et son serveur central :
renseignez les informations demandées pour convertir votre plateforme en serveur distant :

  ```shell
  <CURRENT_NODE_ADDRESS>: Please enter your username:
  admin
  <CURRENT_NODE_ADDRESS>: Please enter your password:

  <CURRENT_NODE_ADDRESS>: Protocol [http]:
  <CURRENT_NODE_ADDRESS>: Port [80]:
  <CURRENT_NODE_ADDRESS> : centreon root folder [centreon]:
  ```

5. Si vous utilisez un proxy, renseignez les identifiants correspondants :

    ```shell
    Are you using a proxy? (y/n)
    y
    enter your proxy Host:
    myproxy.example.com
    enter your proxy Port [3128]:
    Are you using a username/password? (y/n)
    y
    enter your username:
    my_proxy_username
    enter your password:

    ```

Vous recevrez la validation du serveur central Centreon :

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote: 'remote-1@192.168.0.2' has been converted and registered successfully.
```

### Principaux messages d'erreur

``` shell
2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials
```

> Vos informations d'identification sont incorrectes pour le compte **\<API_ACCOUNT\>**.

``` shell
2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.
```

> L'utilisateur **\<API_ACCOUNT\>** n'a pas accès à l'API de configuration.

``` shell
Couldn't connect to 192.168.0.1:444; Connection refused
```

> Impossible d'accéder à l'API. Contrôlez les valeurs **\<IP_TARGET_NODE\>**, la méthode et le port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login
```

> L'URL d'accès n'est pas complète ou n'est pas valide. Utilisez l'option **--root** pour définir le chemin de l'URL de l'API. Par exemple : **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> La version Centreon du serveur cible n'est pas valide. Elle doit être supérieure ou égale à 26.10. -->

## Étape 6 : Étendre les droits du SGBD local

Enfin, ajoutez à l'utilisateur de base de données **centreon** les droits nécessaires pour utiliser la commande
**LOAD DATA INFILE** :

```sql
mysql -u root -p
GRANT FILE on *.* to 'centreon'@'localhost';
SET GLOBAL local_infile=1;
exit
```

## Étape 7 : Rattacher le serveur distant au serveur central

Rendez-vous au chapitre
[Rattacher un serveur distant à un serveur central](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md).

## Étape 8 : Sécuriser votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../../administration/secure-platform.md).
