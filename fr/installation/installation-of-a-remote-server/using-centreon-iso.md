---
id: using-centreon-iso
title: A partir de l'ISO Centreon
---

Installer un Remote Server est similaire à l'installation d'un serveur Centreon Central.

## Etape 1 : Démarrage

Afin d'installer Centreon, démarrez votre serveur sur l'image ISO de Centreon en version el7.
Démarrez avec l'option **Install CentOS 7** :

![image](assets/installation/01_bootmenu.png)

## Etape 2 : Choisir la langue

Choisissez la langue du processus d'installation puis cliquez sur **Continue** :

![image](assets/installation/02_select_install_lang.png)

## Step 3: Choisir les composants

Cliquez sur le menu **Installation Type** :

![image](assets/installation/03_menu_type_install.png)

Il est possible de choisir différentes options :

![image](assets/installation/04_form_type_install.png)

* **Central with database** : Installe Centreon (interface web + base de données) ainsi que l'ordonnanceur et le broker
* **Central without database** : Installe Centreon (interface web uniquement) ainsi que l'ordonnanceur et le broker
* **Poller** : Installe le serveur satellite (ordonnanceur et broker uniquement)
* **Database only** : Installe le serveur de base de données (utilisé en complément avec l'option **Central server without database**)

Après avoir sélectionné le type d'installation, cliquez sur **Done**.

## Etape 4 : Configuration système

### Configurer le partitionnement des disques

Cliquez sur le menu **Installation Destination** :

![image](assets/installation/05_menu_filesystem.png)

Sélectionnez le disque dur et l'option **I will configure partitioning** puis cliquez sur "**Done** :

![image](assets/installation/06_select_disk.png)

A l'aide du bouton **+** créez votre partitionnement suivant les
[prérequis de la documentation](prerequisites.html) puis cliquez sur **Done** :

![image](assets/installation/07_partitioning_filesystem.png)

> Il est recommandé d'utiliser LVM par défaut pour le partitionnement.

Une fenêtre de confirmation apparaît, cliquez sur **Accept Changes** pour valider le partitionnement :

![image](assets/installation/08_apply_changes.png)

### Configurer le fuseau horaire

Cliquez sur le menu **Date & Time** :

![image](assets/installation/11_menu_timezone.png)

Sélectionnez votre fuseau horaire et cliquez sur le bouton de configuration :

![image](assets/installation/12_select_timzeone.png)

Activez ou ajouter des serveurs NTP, cliquez sur **OK** puis **Done** :

![image](assets/installation/13_enable_ntp.png)

> Il est normal que vous ne puissiez pas activer l'option *network time* dans cet écran. Il deviendra automatiquement
> activé lorsque vous configurerez le réseau et le nom d'hôte.

### Configurer le réseau

Cliquez sur le menu **Network & Hostname** :

![image](assets/installation/09_menu_network.png)

Activez toutes les cartes réseaux, saisissez le nom de votre serveur puis cliquez sur **Done** :

![image](assets/installation/10_network_hostname.png)

## Démarrage de l'installation

Une fois toutes les options configurées, cliquez sur **Begin Installation** :

![image](assets/installation/14_begin_install.png)

Cliquez sur **Root Password** :

![image](assets/installation/15_menu_root_password.png)

Saisissez et confirmez le mot de passe de l'utilisateur **root**. Cliquez sur **Done** :

![image](assets/installation/16_define_root_password.png)

Patientez pendant le processus d'installation. Vous pouvez également créer de nouveaux utilisateurs si nécessaire :

![image](assets/installation/17_wait_install.png)

Lorsque l'installation est terminée, cliquez sur **Reboot**.

![image](assets/installation/18_reboot_server.png)

## Mise à jour du système d'exploitation

Connectez-vous via un terminal et exécutez la commande :

``` shell
yum update
```

> Acceptez toutes les clés GPG proposées.

Redémarrez votre système avec la commande :

``` shell
reboot
```

## Installation web

Terminez l'installation en réalisant les *[étapes de l'installation web](../post-installation.html#installation-web)*.

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

## Ajouter le Remote Server à la configuration

Rendez-vous au chapitre *[Ajouter un Remote Server à la configuration](../../monitoring/monitoring-servers/add-a-remote-server-to-configuration.html)*.
