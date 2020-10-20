---
id: using-packages
title: A partir des paquets
---

Après avoir installer votre serveur, considérez la mise à jour votre système
d'exploitation via la commande :

```shell
yum update
```

> Acceptez toutes les clés GPG proposées et pensez a redémarrer votre serveur
> si une mise à jour du noyau est proposée.

## Étapes de pré-installation

### Désactiver SELinux

SELinux doit être désactivé. Pour se faire, vous devez éditer le fichier
**/etc/selinux/config** et remplacer **enforcing** par **disabled**, ou en
exécutant la commande suivante :

```shell
sed -i s/^SELINUX=.*$/SELINUX=disabled/ /etc/selinux/config
```

> Redémarrez votre système d'exploitation pour prendre en compte le changement.

Après le redémarrage, une vérification rapide permet de confirmer le statut de
SELinux :

```shell
$ getenforce
Disabled
```

### Configurer ou désactiver le pare-feu

Paramétrer le pare-feu système ou désactiver ce dernier. Pour désactiver ce
dernier exécuter les commandes suivantes :

```shell
systemctl stop firewalld
systemctl disable firewalld
```

### Installer le dépôts

#### Dépôt *Software collections* de Red Hat

Afin d'installer les logiciels Centreon, le dépôt *Software Collections* de Red
Hat doit être activé.

> Le dépôt *Software Collections* est nécessaire pour l'installation de PHP 7
> et les librairies associées.

Exécutez la commande suivante :

```shell
yum install -y centos-release-scl
```

#### Dépôt Centreon

Afin d'installer les logiciels Centreon à partir des dépôts, vous devez au
préalable installer le fichier lié au dépôt.

Exécutez la commande suivante :

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

## Installation

Ce chapitre décrit l'installation d'un serveur Centreon Remote Server.

Il est possible d'installer ce serveur avec une base de données locale au
serveur, ou déportée sur un serveur dédié.

<!--DOCUSAURUS_CODE_TABS-->

<!--Avec base de données locale-->

Exécutez les commandes suivante :

```shell
yum install -y centreon centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

<!--Avec base de données déportée-->

> Dans le cas d'une installation avec un serveur dédié à la base de données, ce
> dernier doit aussi avoir les dépôts prérequis.

Exécutez la commande suivante sur le serveur Centreon Remote Server :

```shell
yum install -y centreon-base-config-centreon-engine centreon-widget\*
```

Puis exécutez les commandes suivantes sur le serveur dédié à la base de données :

```shell
yum install -y centreon-database
systemctl daemon-reload
systemctl restart mariadb
```

Créez enfin un utilisateur avec privilèges **root** nécessaire à l'installation de
Centreon :

```SQL
CREATE USER '<USER>'@'<IP>' IDENTIFIED BY '<PASSWORD>';
GRANT ALL PRIVILEGES ON *.* TO '<USER>'@'<IP>' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

> Remplacez **\<IP\>** par l'adresse IP avec laquelle le serveur Centreon
> Remote Server se connectera au serveur de base de données.
>
> Remplacez **\<USER\>** et **\<PASSWORD\>** par les identifiants de
> l'utilisateur.

Une fois l'installation terminée vous pouvez supprimer cet utilisateur via la
commande :

```SQL
DROP USER '<USER>'@'<IP>';
```

<!--END_DOCUSAURUS_CODE_TABS-->

> Le paquet **centreon-database** installe une configuration MariaDB optimisée
> pour l'utilisation avec Centreon.
>
> Si ce paquet n'est pas installé, il faut à minima adapter la limitation
> **LimitNOFILE** à **32000** via une configuration dédiée, exemple:
>
> ```shell
> $ cat /etc/systemd/system/mariadb.service.d/centreon.conf
> [Service]
> LimitNOFILE=32000
> ```
>
> De même pour la directive MariaDB **open_files_limit**, exemple:
>
> ```shell
> $ cat /etc/my.cnf.d/centreon.cnf
> [server]
> innodb_file_per_table=1
> open_files_limit=32000
> ```
>
> Pensez à redémarrer le service mariadb après chaque changement de
> configuration.

## Configuration

### Fuseau horaire PHP

La timezone par défaut de PHP doit être configurée. Exécuter la commande suivante :

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php72/php.d/50-centreon.ini
```

> Changez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Après avoir réalisé la modification, redémarrez le service PHP-FPM :

```shell
systemctl restart rh-php72-php-fpm
```

### Lancement des services au démarrage

Pour activer le lancement automatique des services au démarrage, exécutez la
commande suivante sur le serveur Central :

```shell
systemctl enable rh-php72-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```

> Si la base de données est sur un serveur dédié, pensez à activer le
> lancement du service **mariadb** sur ce dernier.

## Installation web

Avant de démarrer l'installation web, démarrez le serveur Apache avec la
commande suivante :

```shell
systemctl start httpd24-httpd
```

Terminez l'installation en réalisant les
[étapes de l'installation web](../web-and-post-installation.html#installation-web).

> A l'étape d'**Initialisation de la supervision**, seules les actions 6 à 8
> doivent être faites.

## Enregistrer le Remote Server

Pour l'enregistrer sur le serveur Centreon Central exécutez la commande suivante :

``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u <API_ACCOUNT> \
-t Poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Exemple:

``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u admin -t Remote -h 192.168.0.1 -n remote-1
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

2. Définir les accès au proxy pour atteindre le serveur Centreon :

``` shell
Are you using a proxy ? (y/n)n
```

Si vous utilisez un proxy, veuillez définir les informations d'identification :

``` shell
Are you using a proxy ? (y/n)y

proxy host: myproxy.example.com

proxy port: 3128

proxy username (press enter if no username/password are required): myuser

please enter the proxy password:
```

3. Sélectionner l'adresse IP :

```shell
Found IP on CURRENT NODE:
   [1]: 192.168.0.2
Which IP do you want to use as CURRENT NODE IP ?1
```

4. Valider les informations:

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

Vous recevrez la validation du serveur Centreon Central :

``` shell
2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote': 'remote-1@192.168.0.2' linked to TARGET NODE: '192.168.0.1' has been added
```

Enfin, il est nécessaire d'ajouter des droits à l'utilisateur de base de données **centreon** pour qu'il puisse
utiliser la commande **LOAD DATA INFILE** :

```sql
GRANT FILE on *.* to 'centreon'@'localhost';
```

## Ajouter le Remote Server à la configuration

Rendez-vous au chapitre
[Ajouter un Remote Server à la configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.html).
