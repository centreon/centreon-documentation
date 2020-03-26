---
id: remote-from-iso
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
[prérequis de la documentation](prerequisites.html) puis cliquez sur **Done** :

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

``` shell
yum update
```

> Acceptez toutes les clés GPG proposées.

Redémarrez votre système avec la commande :

``` shell
reboot
```

## Première configuration

Continuez l'installation en réalisant la [première configuration](post-install#Web-installation).

## Activer l'option Remote Server

Connectez-vous à votre serveur ayant la fonction **Remote Server** et exécutez la commande suivante :

``` shell
/usr/share/centreon/bin/centreon -u admin -p centreon -a enableRemote -o CentreonRemoteServer \
-v '<IP_CENTREON_CENTRAL>;<not check SSL CA on Central>;<HTTP method>;<TCP port>;<not check SSL CA on Remote>;<no proxy to call Central>'
```

Remplacez **<IP_CENTREON_CENTRAL>** par l'IP du serveur Centreon vu par le collecteur. Vous pouvez définir plusieurs
adresses IP en utilisant la virgule comme séparateur.

> Pour utiliser HTTPS, remplacez **\<IP_CENTREON_CENTRAL\>** par **https://<IP_CENTREON_CENTRAL>**.
>
> Pour utiliser un autre port TCP, remplacez **@IP_CENTREON_CENTRAL** par **<@IP_CENTREON_CENTRAL>:\<PORT\>**.

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

![image](../../assets/installation/poller/wizard_add_remote_1.png)

Si vous avez activé votre serveur en suivant la documentation, sélectionnez l'option **Select a Remote Server**. Dans
la liste déroulante sélectionnez votre serveur, puis saisissez les informations demandées :

![image](../../assets/installation/poller/wizard_add_remote_2a.png)

Sinon, sélectionnez l'option **Create new Remote Server** et saisissez les informations demandées :

![image](../../assets/installation/poller/wizard_add_remote_2b.png)

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

![image](../../assets/installation/poller/wizard_add_remote_3.png)

L'assistant va configurer votre nouveau serveur :

![image](../../assets/installation/poller/wizard_add_remote_4.png)

Une fois la configuration exportée, redémarrez le processus Centreon Broker sur le Remote Server via la commande
suivante :

``` shell
systemctl restart cbd
```

Le Remote Server est maintenant configuré :

![image](../../assets/installation/poller/wizard_add_remote_5.png)

## Premiers pas

Rendez-vous dans le chapitre [Premiers pas](../tutorials/first-steps.html) pour mettre en place votre première supervision.
