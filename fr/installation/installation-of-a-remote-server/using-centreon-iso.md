---
id: using-centreon-iso
title: A partir de l'ISO Centreon
---

Installer un Remote Server est similaire à l'installation d'un serveur Centreon Central.

## Etape 1 : Démarrage

Afin d'installer Centreon, démarrez votre serveur sur l'image ISO de Centreon en version el7.
Démarrez avec l'option **Install CentOS 7** :

![image](../../assets/installation/01_bootmenu.png)

## Etape 2 : Choisir la langue

Choisissez la langue du processus d'installation puis cliquez sur **Continue** :

![image](../../assets/installation/02_select_install_lang.png)

## Step 3: Choisir les composants

Cliquez sur le menu **Installation Type** :

![image](../../assets/installation/03_menu_type_install.png)

Il est possible de choisir différentes options :

![image](../../assets/installation/04_form_type_install.png)

* **Central with database** : Installe Centreon (interface web + base de données) ainsi que l'ordonnanceur et le broker
* **Central without database** : Installe Centreon (interface web uniquement) ainsi que l'ordonnanceur et le broker
* **Poller** : Installe le serveur satellite (ordonnanceur et broker uniquement)
* **Database only** : Installe le serveur de base de données (utilisé en complément avec l'option **Central server without database**)

Après avoir sélectionné le type d'installation, cliquez sur **Done**.

## Etape 4 : Configuration système

### Configurer le partitionnement des disques

Cliquez sur le menu **Installation Destination** :

![image](../../assets/installation/05_menu_filesystem.png)

Sélectionnez le disque dur et l'option **I will configure partitioning** puis cliquez sur "**Done** :

![image](../../assets/installation/06_select_disk.png)

A l'aide du bouton **+** créez votre partitionnement suivant les
[prérequis de la documentation](../prerequisites.html#définition-de-lespace-disque) puis cliquez sur **Done** :

![image](../../assets/installation/07_partitioning_filesystem.png)

> Il est recommandé d'utiliser LVM par défaut pour le partitionnement.

Une fenêtre de confirmation apparaît, cliquez sur **Accept Changes** pour valider le partitionnement :

![image](../../assets/installation/08_apply_changes.png)

### Configurer le fuseau horaire

Cliquez sur le menu **Date & Time** :

![image](../../assets/installation/11_menu_timezone.png)

Sélectionnez votre fuseau horaire et cliquez sur le bouton de configuration :

![image](../../assets/installation/12_select_timzeone.png)

Activez ou ajouter des serveurs NTP, cliquez sur **OK** puis **Done** :

![image](../../assets/installation/13_enable_ntp.png)

> Il est normal que vous ne puissiez pas activer l'option *network time* dans cet écran. Il deviendra automatiquement
> activé lorsque vous configurerez le réseau et le nom d'hôte.

### Configurer le réseau

Cliquez sur le menu **Network & Hostname** :

![image](../../assets/installation/09_menu_network.png)

Activez toutes les cartes réseaux, saisissez le nom de votre serveur puis cliquez sur **Done** :

![image](../../assets/installation/10_network_hostname.png)

## Démarrage de l'installation

Une fois toutes les options configurées, cliquez sur **Begin Installation** :

![image](../../assets/installation/14_begin_install.png)

Cliquez sur **Root Password** :

![image](../../assets/installation/15_menu_root_password.png)

Saisissez et confirmez le mot de passe de l'utilisateur **root**. Cliquez sur **Done** :

![image](../../assets/installation/16_define_root_password.png)

Patientez pendant le processus d'installation. Vous pouvez également créer de nouveaux utilisateurs si nécessaire :

![image](../../assets/installation/17_wait_install.png)

Lorsque l'installation est terminée, cliquez sur **Reboot**.

![image](../../assets/installation/18_reboot_server.png)

## Mise à jour du système d'exploitation

Connectez-vous via un terminal et exécutez la commande :

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS v8-->
``` shell
dnf update
```
<!--CentOS v7-->
``` shell
yum update
```
<!--END_DOCUSAURUS_CODE_TABS-->

> Acceptez toutes les clés GPG proposées.

Redémarrez votre système avec la commande :

``` shell
reboot
```

### Lancement des services au démarrage

Pour activer le lancement automatique des services au démarrage, exécutez la
commande suivante sur le serveur Central :

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS v8-->
```shell
systemctl enable php-fpm httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```
<!--CentOS v7-->
```shell
systemctl enable rh-php72-php-fpm httpd24-httpd mariadb centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Installation web

Terminez l'installation en réalisant les
[étapes de l'installation web](../web-and-post-installation.html#installation-web).

> Pendant l'installation web, il n'est pas nécessaire d'installer le module
> Autodiscovery.

> A l'étape d'**Initialisation de la supervision**, seules les actions 6 à 8
> doivent être faites.

## Enregistrer le Remote Server

Pour l'enregistrer sur le serveur Centreon Central, exécutez la commande suivante :

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS v8-->
``` shell
php /usr/share/centreon/bin/registerServerTopology.php -u <API_ACCOUNT> \
-t Remote -h <IP_TARGET_NODE> -n <REMOTE_SERVER_NAME>
```

Example:

``` shell
php /usr/share/centreon/bin/registerServerTopology.php -u admin \
-t Remote -h 192.168.0.1 -n remote-1
```
<!--CentOS v7-->
``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u <API_ACCOUNT> \
-t Poller -h <IP_TARGET_NODE> -n <POLLER_NAME>
```

Exemple:

``` shell
/opt/rh/rh-php72/root/bin/php /usr/share/centreon/bin/registerServerTopology.php -u admin -t Remote -h 192.168.0.1 -n remote-1
```
<!--END_DOCUSAURUS_CODE_TABS-->

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
Failed connect to 10.30.3.11:444; Connection refused
```

> Impossible d'accéder à l'API. Contrôler les valeurs **<IP_TARGET_NODE>**, méthode et port.

``` shell
2020-10-20T10:39:30+02:00 [ERROR]: Can’t connect to the API using: https://192.169.0.1:443/centreon/api/latest/login
```

> L'URL d'accès n'est pas complète ou invalide. Utilisez l'option **-root** pour définir le chemin de l'URL de l'API.
> Par exemple : **--root monitoring**.

``` shell
2020-10-20T10:42:23+02:00 [ERROR]: No route found for “POST /centreon/api/latest/platform/topology”
```

> La version Centreon du serveur distant est invalide. Elle doit être supérieur ou égale à 20.10.

## Ajouter le Remote Server à la configuration

Rendez-vous au chapitre
[Ajouter un Remote Server à la configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.html).
