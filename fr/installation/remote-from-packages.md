---
id: remote-from-packages
title: A partir des paquets
---

Installer un Remote Server est similaire à l'installation d'un serveur Centreon Central.

## Étapes pré-installation

### Désactiver SELinux

SELinux doit être désactivé. Pour cela vous devez modifier le fichier */etc/selinux/config* et remplacer "enforcing"
par "disabled" comme dans l'exemple suivant :

``` shell
SELINUX=disabled
```

> Après avoir sauvegardé le fichier, veuillez redémarrer votre système d'exploitation pour prendre en compte les changements.

Une vérification rapide permet de confirmer le statut de SELinux:

``` shell
getenforce
```

Vous devriez avoir le résultat suivant :

``` shell
Disabled
```

### Installation des dépôts

#### Dépôt *Software collections* de Red Hat

Afin d'installer les logiciels Centreon, le dépôt *Software collections* de Red Hat doit être activé.

> Le dépôt *Software collections* est nécessaire pour l'installation de PHP 7 et les librairies associées.

Exécutez la commande suivante :

``` shell
yum install -y centos-release-scl
```

Le dépôt est maintenant installé.

#### Dépôt Centreon

Afin d'installer les logiciels Centreon à partir des dépôts, vous devez au préalable installer le fichier lié au dépôt.

Exécutez la commande suivante:

``` shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

Le dépôt est maintenant installé.

## Installation du serveur central

Ce chapitre décrit l'installation d'un serveur central Centreon.

### Installer un serveur Centreon central avec base de données

Exécutez la commande :

``` shell
yum install -y centreon centreon-database
systemctl restart mariadb
```

> Centreon a démarré sa compatibilité avec le mode strict SQL. Cependant, tous ses composants ne sont pas encore prêts.
> C'est pourquoi il est impératif de désactiver le mode strict SQL si vous utilisez MariaDB \>= 10.2.4 ou MySQL
> \>= 5.7.5 pour vos environnements de production.

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->
 Exécutez les commandes suivantes :

```SQL
SET sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
```

ou modifiez le fichier */etc/my.cnf.d/centreon.cnf* pour ajouter à la section '[server]' la ligne suivante :

``` shell
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```
<!--MySQL-->
 Exécutez les commandes suivantes :

``` SQL
SET sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
```

ou modifiez le fichier */etc/my.cnf.d/centreon.cnf* pour ajouter à la section '[server]' la ligne suivante :

``` shell
sql_mode = 'NO_ENGINE_SUBSTITUTION'
```
<!--END_DOCUSAURUS_CODE_TABS-->

Puis redémarrez votre SGBD.

### Installer un serveur Centreon central avec une base de données déportée

Exécutez la commande :

``` shell
yum install -y centreon-base-config-centreon-engine
```

#### Installer le SGBD sur un serveur dédié

Exécutez la commande :

``` shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

> Le paquet **centreon-database** installe un serveur de base de données avec une configuration optimisée pour l'utilisation avec Centreon.

Puis créer un utilisateur **root** distant :

``` SQL
CREATE USER 'root'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Remplacez **\<IP\>** par l'adresse IP publique du serveur Centreon et **\<PASSWORD\>** par le mot de passe de l'utilisateur
> **root**.

> MySQL >= 8 requiert un mot de passe fort. Utilisez des lettres minuscules et majuscules ainsi que des caractères
> numériques et spéciaux; ou désinstallez le plugin **validate_password** de MySQL en utilisant la commande
> suivantes :
>
> ``` SQL
> uninstall plugin validate_password;
> ```

> Si PHP est utilisé dans une version 7.1 antérieure à la version 7.1.16, ou PHP 7.2 antérieure à 7.2.4, le
> plugin de mot de passe doit être défini à mysql_native_password pour MySQL 8 Server, car sinon des erreurs
> similaires à *The server requested authentication method unknown to the client [caching_sha2_password]* peuvent
> apparaitre, même si caching_sha2_password n'est pas utilisé.
>  
> Ceci est dû au fait que MySQL 8 utilise par défaut caching_sha2_password, un plugin qui n'est pas reconnu par les
> anciennes versions de PHP. À la place il faut modifier le paramètre *default_authentication_plugin=
> mysql_native_password* dans le fichier **my.cnf**.
> 
> Changez la méthode de stockage du mot de passe, utilisez la commande suivante :
>
> ```SQL
> ALTER USER 'root'@'<IP>' IDENTIFIED WITH mysql_native_password BY '<PASSWORD>';
> FLUSH PRIVILEGES;
> ```

> Centreon a démarré sa compatibilité avec le mode strict SQL. Cependant, tous ses composants ne sont pas encore prêts.
> C'est pourquoi il est impératif de désactiver le mode strict SQL si vous utilisez MariaDB \>= 10.2.4 ou MySQL
> \>= 5.7.5 pour vos environnements de production.

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->
 Exécutez les commandes suivantes :

``` SQL
SET sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
```

ou modifiez le fichier */etc/my.cnf.d/centreon.cnf* pour ajouter à la section '[server]' la ligne suivante :

``` shell
sql_mode = 'NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```
<!--MySQL-->
 Exécutez les commandes suivantes :

```SQL
SET sql_mode = 'NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode = 'NO_ENGINE_SUBSTITUTION';
```

ou modifiez le fichier */etc/my.cnf.d/centreon.cnf* pour ajouter à la section '[server]' la ligne suivante :

``` shell
sql_mode = 'NO_ENGINE_SUBSTITUTION'
```
<!--END_DOCUSAURUS_CODE_TABS-->

Puis redémarrez votre SGBD.

Une fois l'installation terminée vous pouvez supprimer ce compte via la commande :

``` SQL
DROP USER 'root'@'<IP>';
```

### Système de gestion de base de données

La base de données MySQL doit être disponible pour pouvoir continuer l'installation (localement ou non). Pour
information nous recommandons MariaDB.

Pour les systèmes CentOS / RHEL en version 7, il est nécessaire de modifier la limitation **LimitNOFILE**. Changer
cette option dans /etc/my.cnf *ne fonctionnera pas*.

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->
``` SQL
mkdir -p  /etc/systemd/system/mariadb.service.d/
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mariadb.service.d/limits.conf
systemctl daemon-reload
systemctl restart mysql
```
<!--MySQL-->
``` SQL
mkdir -p  /etc/systemd/system/mysqld.service.d
echo -ne "[Service]\nLimitNOFILE=32000\n" | tee /etc/systemd/system/mysqld.service.d/limits.conf
systemctl daemon-reload
systemctl restart mysqld
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Fuseau horaire PHP

La timezone par défaut de PHP doit être configurée. Exécuter la commande suivante :

``` shell
echo "date.timezone = Europe/Paris" > /etc/opt/rh/rh-php72/php.d/php-timezone.ini
```

> Changez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux horaires est disponible
> [ici](http://php.net/manual/en/timezones.php).

Après avoir réalisé la modification, redémarrez le service PHP-FPM :

``` shell
systemctl restart rh-php72-php-fpm
```

### Pare-feu

Paramétrer le pare-feu système ou désactiver ce dernier. Pour désactiver ce dernier exécuter les commandes suivantes :

``` shell
systemctl stop firewalld
systemctl disable firewalld
systemctl status firewalld
```

### Lancer les services au démarrage

Activer le lancement automatique de services au démarrage.
Lancer les commandes suivantes sur le serveur :

``` shell
systemctl enable httpd24-httpd
systemctl enable snmpd
systemctl enable snmptrapd
systemctl enable rh-php72-php-fpm
systemctl enable centcore
systemctl enable centreontrapd
systemctl enable cbd
systemctl enable centengine
systemctl enable centreon
```

<!--DOCUSAURUS_CODE_TABS-->
<!--MariaDB-->
``` shell
systemctl enable mariadb
```
<!--MySQL-->
``` shell
systemctl enable mysqld
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Si la base de données MariaDB est sur un serveur dédié, lancer la dernière commande d'activation sur ce dernier.

### Terminer l'installation

Avant de démarrer la configuration via l'interface web les commandes suivantes doivent être exécutées :

``` shell
systemctl start rh-php72-php-fpm
systemctl start httpd24-httpd
systemctl start mysqld
systemctl start centreon
systemctl start snmpd
systemctl start snmptrapd
```

## Première configuration

Continuez l'installation en réalisant la [première configuration](post-install#Web-installation).

## Activer l'option Remote Server

Connectez-vous à votre serveur ayant la fonction **Remote Server** et exécutez la commande suivante :

``` shell
/usr/share/centreon/bin/centreon -u admin -p centreon -a enableRemote -o CentreonRemoteServer \
-v '<IP_CENTREON_CENTRAL>;<not check SSL CA on Central>;<HTTP method>;<TCP port>;<not check SSL CA on Remote>;<no proxy to call Central>'
```

Remplacez **\<IP_CENTREON_CENTRAL\>** par l'IP du serveur Centreon vu par le collecteur. Vous pouvez définir plusieurs
adresses IP en utilisant la virgule comme séparateur.

> Pour utiliser HTTPS, remplacez **\<IP_CENTREON_CENTRAL\>** par **https://\<IP_CENTREON_CENTRAL\>**.
>
> Pour utiliser un autre port TCP, remplacez **@IP_CENTREON_CENTRAL** par **\<IP_CENTREON_CENTRAL\>:\<PORT\>**.

Pour ne pas contrôler le certificat SSL sur le serveur Centreon Central, mettre à **1** l'option **\<not check SSL CA
on Central\>**, sinon **0**.

L'option **\<HTTP method\>** permet de définir la méthode de connexion pour contacter le Remote Server : HTTP ou HTTPS.

L'option **\<TCP port\>** permet de définir sur quel port TCP communiquer avec le Remote Server.

Pour ne pas contrôler le certificat SSL sur le Remote server, mettre à **1** l'option **\<not check SSL CA on Central\>**,
sinon **0**.

Pour ne pas utiliser le proxy pour contacter le serveur Centreon Central, mettre à **1** l'option **\<no proxy to call
Central\>**, sinon **0**.

Cette commande va activer le mode **Remote Server** :

``` shell
Starting Centreon Remote enable process:
Limiting Menu Access...               Success
Limiting Actions...                   Done
Authorizing Master...                 Done
Set 'remote' instance type...         Done
Notifying Master...
Trying host '10.1.2.3'... Success
Centreon Remote enabling finished.
```

Ajout des droits pour que l'utilisateur de base de données centreon puisse utiliser la commande **LOAD DATA INFILE** :

``` SQL
GRANT FILE on *.* to 'centreon'@'localhost';
```

## Echange de clés SSH

La communication entre le serveur central et un collecteur se fait via SSH.

Vous devez échanger les clés SSH entre les serveurs.

Si vous n’avez pas de clé SSH privée sur le serveur central pour l’utilisateur **centreon** :

``` shell
su - centreon
ssh-keygen -t rsa
```

> Appuyez sur la touche *entrée* quand il vous sera demandé de saisir un fichier pour enregistrer la clé. **Laissez le
> mot de passe vide**. Vous recevrez une empreinte digitale de clé et une image randomart.

Générez un mot de passe sur le nouveau serveur pour l'utilisateur **centreon** :

``` shell
passwd centreon
```

Vous devez copier cette clé sur le nouveau serveur :

``` shell
su - centreon
ssh-copy-id -i .ssh/id_rsa.pub centreon@IP_NEW_POLLER
```

## Configurer un nouveau Remote Server dans Centreon

Rendez-vous au menu **Configuration > Pollers** et cliquez sur **Add server with wizard** pour accéder à l’assistant de
configuration.

Sélectionnez **Add a Centreon Remote Server** et cliquez sur **Next** :

![image](assets/installation/poller/wizard_add_remote_1.png)

Si vous avez activé votre serveur en suivant la documentation, sélectionnez l'option **Select a Remote Server**. Dans
la liste déroulante sélectionnez votre serveur, puis saisissez les informations demandées :

![image](assets/installation/poller/wizard_add_remote_2a.png)

Sinon, sélectionnez l'option **Create new Remote Server** et saisissez les informations demandées :

![image](assets/installation/poller/wizard_add_remote_2b.png)

Les champs **Database user** et **Database password** sont les accès aux bases de données Centreon définis durant
l'installation de votre Remote Server.

Le champ **Server IP address** est de la forme : [(http|https)://]@IP[:(port)]. Si votre Remote Server est accessible
en HTTPS, il est nécessaire de préciser la méthode d'accès et le port si celui-ci n'est pas par défaut.

L'option **Do not check SSL certificate validation** permet de contacter le Remote Server si celui-ci possède un
certificat SSL auto-signé.

L'option **Do not use configured proxy tp connect to this server** permet de de contacter le Remote Server en
n'utilisant pas la configuration du proxy configurée sur le serveur Centreon Central.

Cliquez sur **Next** :

Sélectionnez le(s) collecteur(s) à lier à ce Remote Server. Puis cliquez sur **Apply** :

![image](assets/installation/poller/wizard_add_remote_3.png)

L'assistant va configurer votre nouveau serveur :

![image](assets/installation/poller/wizard_add_remote_4.png)

Une fois la configuration exportée, redémarrez le processus
Centreon Broker sur le Remote Server via la commande suivante :

``` shell
systemctl restart cbd
```

Le Remote Server est maintenant configuré :

![image](assets/installation/poller/wizard_add_remote_5.png)

## Premiers pas

Rendez-vous dans le chapitre [Premiers pas](../tutorials/first-steps.html) pour mettre en place votre première supervision.
