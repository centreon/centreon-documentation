---
id: using-virtual-machines
title: À partir d'une VM
---

Sur sa [page de téléchargement](https://download.centreon.com), Centreon fournit une machine virtuelle prête à l’emploi. Cette machine virtuelle est disponible au format OVA pour les environnements
VMware et pour l'outil Oracle VirtualBox.
Elle est basée sur le système d'exploitation **Linux CentOS 7** et inclut
une installation de Centreon permettant de démarrer en toute simplicité votre première supervision.

La VM est configurée en **Thin Provision** pour économiser autant d'espace libre que possible sur le disque (meilleure pratique).

**Prérequis**

La machine hôte doit avoir les caractéristiques suivantes :

- Processeur : Tout processeur Intel ou AMD récent avec au moins 2vCPU.
- Mémoire : Selon vos systèmes d'exploitation, vous aurez besoin d'au moins 1 Go
  de RAM. Pour profiter pleinement de l'expérience, vous avez besoin d'au moins
  2 Go de mémoire libre.
- Espace disque : La machine virtuelle nécessite au moins 6,5 Go d'espace libre
  sur votre disque dur. Cependant, si vous souhaitez continuer à utiliser Centreon,
  il est recommandé d'avoir au moins 10 Go car sa taille augmentera avec le temps.

## Étape 1 : Télécharger la machine virtuelle

1. Vérifiez que votre solution de virtualisation (VirtualBox ou VMWare) est installée sur votre machine.

2. Allez sur la [page de téléchargement](https://download.centreon.com) de Centreon. Dans la section 1, **Appliances** est sélectionné par défaut.

3. Dans la section 2, sélectionnez la version de Centreon désirée.

4. Dans la section 3, **Download your image**, cliquez sur le bouton **Download** à côté de **VMWare Virtual Machine (OVA)**. Une nouvelle page apparaît.

    • Si vous souhaitez être contacté par Centreon, entrez vos informations de contact, puis
cliquez sur **Download**.

    • Dans le cas contraire, cliquez sur **Direct download**.

5. Le fichier téléchargé est une archive zippée : extrayez son contenu dans le répertoire désiré.

## Étape 2 : Installer la machine virtuelle

<!--DOCUSAURUS_CODE_TABS-->

<!--Environnement VMware-->

1. Importez le fichier `centreon-central.ova` dans VMWare. Un terminal s’ouvre : attendez que le serveur démarre. Lorsque celui-ci est prêt, le terminal affiche le message suivant :
    
    ![image](../../assets/installation/VMW1.png)

2. Selon la structure de votre réseau, dans la configuration de votre machine virtuelle, ajoutez un adaptateur réseau et sélectionnez le réseau via lequel la machine pourra communiquer avec les ressources qu'elle devra superviser.

    Voici un exemple de configuration dans VSphere 6 :

    ![image](../../assets/installation/VMW_network_adapter.png)

<!--Oracle VirtualBox-->

1. Importez le fichier `centreon-central.ova` dans VirtualBox. La VM apparaît dans votre liste de VMs dans VirtualBox.

    ![image](../../assets/installation/VB2.png)

2. Dans le panneau de droite, cliquez sur **Configuration**. La boîte **Paramètres** s’ouvre.

3. Dans l'onglet **Système**, cochez la case
**Horloge interne en UTC**.

4. Selon la configuration de votre réseau, ajoutez un adaptateur réseau et sélectionnez le réseau via lequel la machine pourra communiquer avec les ressources qu'elle devra superviser. Par exemple :
  
    1. Dans l’onglet **Réseau**, cochez **Activer l’interface réseau**.

    2. Dans la liste **Mode d’accès réseau**, sélectionnez **Accès par pont**.

5. Cliquez sur **OK**.

6. Dans le panneau de droite, cliquez sur **Démarrer** pour démarrer la VM. Un terminal s’ouvre : attendez que le serveur démarre. Lorsque celui-ci est prêt, le terminal affiche le message suivant :

    ![image](../../assets/installation/terminal_ready.png)

<!--END_DOCUSAURUS_CODE_TABS-->

## Étape 3 : Terminer la configuration

1. Connectez-vous au serveur Centreon avec les informations suivantes : login: `root`, password: `centreon`.

2. Pour connaître l’adresse IP de votre serveur, tapez `ip addr`.

    ![image](../../assets/installation/ip_addr.png)

3. Connectez-vous en `root` au serveur depuis une autre machine à l’aide du terminal de votre choix.

4. À votre première connexion au serveur, des instructions s’affichent pour vous aider à terminer la
configuration :

    ![image](../../assets/installation/terminal_centreon.png)

    Définissez les paramètres suivants :

- Le fuseau horaire (timezone) du serveur Centreon. Par défaut, celui-ci est UTC. Cela définira l'heure des différents logs de Centreon.

    Utilisez la commande suivante :
    
    ```shell
    timedatectl set-timezone votre_timezone
    ```

    Par exemple, pour définir le fuseau horaire Europe/London, tapez :

    ```shell
    timedatectl set-timezone Europe/London
    ```

    Vous pouvez obtenir une liste de tous les fuseaux horaires possibles en utilisant la commande suivante :

    ```shell
    timedatectl list-timezones
    ```    

- Le fuseau horaire du serveur php. Pour éviter les erreurs, celui-ci doit être identique au fuseau horaire du serveur. Par défaut, le fuseau horaire php est Europe/London.
    1. Ouvrez le fichier suivant :

        ```shell
        /etc/opt/rh/rh-php73/php.d/50-centreon.ini
        ```

    2. Après date.timezone, entrez le fuseau horaire désiré.

    3. Redémarrez le serveur php :

        ```shell
        systemctl restart rh-php73-php-fpm
        ``` 

- Le hostname de votre serveur (facultatif). Le nom par défaut du serveur est centreon-central. Pour le
changer, utilisez la commande suivante :

  ```shell
  hostnamectl set-hostname votre_hostname
  ```

  Par exemple, si vous voulez renommer la machine `supervision`,
entrez:


  ```shell
  hostnamectl set-hostname supervision
  ```

5. Ajoutez une partition pour la table MySQL : cette étape est obligatoire. Votre serveur ne
fonctionnera pas si vous ne l’exécutez pas.

    1. Connectez-vous en tant que l’utilisateur `centreon` :

        ```shell
        su - centreon
        ```


    2. Entrez la commande suivante :


        ```shell
        /opt/rh/rh-php73/root/bin/php /usr/share/centreon/cron/centreon-partitioning.php
        ```
  
        La partition est créée :

        ![image](../../assets/installation/partition_created.png)

    3. En tant que l'utilisateur `root`, redémarrez le processus Centreon broker pour que les changements soient appliqués :
    
        ```shell
        systemctl restart cbd centengine gorgoned
        ```

        Votre serveur Centreon est maintenant prêt à l’emploi.
 
        >Une fois les opérations de configuration effectuées, vous pouvez faire en sorte que le message qui les décrit dans le terminal n'apparaisse plus. Supprimez le fichier suivant :
        >
        >`/etc/profile.d/centreon.sh`

6. Connectez-vous à l’interface web : dans votre navigateur, entrez l’adresse du serveur au format
`http://addresse_ip/centreon` ou `http://FQDN/centreon`. (Par exemple, une URL valide serait
`http://192.168.1.44/centreon`.)

7. Connectez-vous en utilisant les informations suivantes : Login: `admin`, password: `centreon`. Par défaut, votre serveur offre une configuration prédéfinie qui permet de le superviser lui-même.

8. [Sécurisez votre serveur](../../administration/secure-platform.html). Il est notamment recommandé de changer les mots de passe des comptes `root` et `admin`, et
de définir un mot de passe pour la base MySQL.

9. Rendez-vous dans le chapitre [Premiers pas](../../getting-started/installation-first-steps.html)
pour mettre en place votre première supervision.


## Identifiants par défaut

- Pour vous connecter à l'interface Web Centreon, l'identifiant par défaut est : `admin`/`centreon`.
- Le compte d'administration du serveur (via SSH) est: `root`/`centreon`.
- Le mot de passe root du SGBD n'est pas initialisé.

> Pour des raisons de sécurité, nous vous recommandons fortement de modifier ces mots de passe après l'installation.

