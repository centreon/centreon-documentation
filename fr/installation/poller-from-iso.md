---
id: poller-from-iso
title: A partir de l'ISO Centreon
---

## Etape 1 : Démarrage

Afin d'installer Centreon, démarrez votre serveur sur l'image ISO de Centreon en version el7.
Démarrez avec l'option **Install CentOS 7** :

![image](../assets/installation/01_bootmenu.png)

## Etape 2 : Choix de la langue

Choisissez la langue du processus d'installation puis cliquez sur **Continue** :

![image](../assets/installation/02_select_install_lang.png)

## Step 3: Selecting components

Cliquez sur le menu **Installation Type** :

![image](../assets/installation/03_menu_type_install.png)

Il est possible de choisir différentes options :

![image](../assets/installation/poller/07installpoller.png)

* **Central with database** : Installe Centreon (interface web + base de données) ainsi que l'ordonnanceur et le broker
* **Central without database** : Installe Centreon (interface web uniquement) ainsi que l'ordonnanceur et le broker
* **Poller** : Installe le serveur satellite (ordonnanceur et broker uniquement)
* **Database only** : Installe le serveur de base de données (utilisé en complément avec l'option **Central server without database**)

Sélectionnez **Poller** et cliquez sur **Done**.

## Etape 4 : Configuration système

### Partitionnement des disques

Cliquez sur le menu **Installation Destination** :

![image](../assets/installation/05_menu_filesystem.png)

Sélectionnez le disque dur et l'option **I will configure partitioning** puis cliquez sur "**Done** :

![image](../assets/installation/06_select_disk.png)

A l'aide du bouton **+** créez votre partitionnement suivant les
[prérequis de la documentation](prerequisites.html) puis cliquez sur **Done** :

![image](../assets/installation/07_partitioning_filesystem.png)

> Il est recommandé d'utiliser LVM par défaut pour le partitionnement.

Une fenêtre de confirmation apparaît, cliquez sur **Accept Changes** pour valider le partitionnement :

![image](../assets/installation/08_apply_changes.png)

### Configuration du fuseau horaire

Cliquez sur le menu **Date & Time** :

![image](../assets/installation/11_menu_timezone.png)

Sélectionnez votre fuseau horaire et cliquez sur le bouton de configuration :

![image](../assets/installation/12_select_timzeone.png)

Activez ou ajouter des serveurs NTP, cliquez sur **OK** puis **Done** :

![image](../assets/installation/13_enable_ntp.png)

> Il est normal que vous ne puissiez pas activer l'option *network time* dans cet écran. Il deviendra automatiquement
> activé lorsque vous configurerez le réseau et le nom d'hôte.

### Configuration réseau

Cliquez sur le menu **Network & Hostname** :

![image](../assets/installation/09_menu_network.png)

Activez toutes les cartes réseaux, saisissez le nom de votre serveur puis cliquez sur **Done** :

![image](../assets/installation/10_network_hostname.png)

## Démarrage de l'installation

Une fois toutes les options configurées, cliquez sur **Begin Installation** :

![image](../assets/installation/14_begin_install.png)

Cliquez sur **Root Password** :

![image](../assets/installation/15_menu_root_password.png)

Saisissez et confirmez le mot de passe de l'utilisateur **root**. Cliquez sur **Done** :

![image](../assets/installation/16_define_root_password.png)

Patientez pendant le processus d'installation. Vous pouvez également créer de nouveaux utilisateurs si nécessaire :

![image](../assets/installation/17_wait_install.png)

Lorsque l'installation est terminée, cliquez sur **Reboot**.

![image](../assets/installation/18_reboot_server.png)

## Mise à jour du système d'exploitation

Connectez-vous via un terminal et exécutez la commande :

``` shell
yum update
```

> Acceptez toutes les clés GPG proposées.

Redémarrez votre système avec la commande:

``` shell
reboot
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

## Configurer un nouveau collecteur dans Centreon

Rendez-vous dans le menu **Configuration > Pollers** et cliquez sur **Add server with wizard** pour accéder à
l'assistant de configuration.

Sélectionnez **Add a Centreon Poller** et cliquez sur **Next** :

![image](../assets/installation/poller/wizard_add_poller_1.png)

Saisissez le nom, l'adresse IP du collecteur et celle du serveur Centreon central,
cliquez sur **Next** :

![image](../assets/installation/poller/wizard_add_poller_2.png)

> L'adresse IP du collecteur est l'adresse IP ou le FQNS pour accéder au collecteur depuis le serveur Centreon Central.
>
> L'adresse IP du collecteur est l'adresse IP ou le FQNS pour accéder au collecteur serveur Centreon Central vers le collecteur.

Si vous souhaitez lier ce collecteur au serveur Centreon Central, cliquez sur **Apply** :

![image](../assets/installation/poller/wizard_add_poller_3.png)

Sinon, si vous souhaitez lier ce collecteur à un Remote Server, sélectionnez le Remote Server dans la liste et cliquez
sur **Apply** :

Patientez quelques secondes, l'assistant va configurer votre nouveau serveur.

Le collecteur est maintenant configuré :

![image](../assets/installation/poller/wizard_add_poller_5.png)

## Premiers pas

Rendez-vous dans le chapitre [Premiers pas](../tutorials/first-steps.html) pour mettre en place votre première supervision.
