---
id: install-system-agents
title: Installer les agents systèmes
--- 

Pour pouvoir ajouter/modifier/supprimer un serveur dans Experience Monitoring vous avez besoin d’avoir les permissions « Admin » ou « Propriétaire » sur votre Organisation. Demandez à votre administrateur ou au support Experience Monitoring de vous créer cet accès ([support@quanta.io](mailto:support@quanta.io)).

A l’heure actuelle, il n’est pas possible de rattacher un serveur à plusieurs sites, qu’ils soient dans la même Organisation ou non.

La remontée d’information vers l’application Experience Monitoring nécessite l’installation d’un agent sur tous les serveurs que vous souhaitez surveiller. Pour ce faire, vous devez installer l’agent Experience Monitoring.

>Les agents systèmes doivent pouvoir communiquer avec notre infrastructure. Retrouvez nos adresses IPs sur [la page dédiée](../experience-monitoring-ip-addresses.md)

## Obtenir le token

Pour installer les Agents Systèmes Experience Monitoring vous aurez besoin de votre **token** d'auto enregistrement. Il est disponible dans *Configuration > Système.*

Retrouvez l’emplacement du token en vidéo:

[Trouver le token pour les agents systèmes](https://www.loom.com/share/8e1958d64017451a8a0b7a63ab5c8185)

## Procéder à l’installation

Si vous utilisez des conteneurs Docker, ou des systèmes d’autoscaling (AWS ASG, Azure Scale Set ou autres), reportez-vous à la section *“Installation pour Docker et systèmes d’autoscaling”* avant l’installation sur l’OS.

### Installation pour Debian

Pour installer l'agent Experience Monitoring :

1. Ajoutez la ligne suivante dans le fichier **/etc/apt/sources.list.d/quanta.list**
*Pour Buster (versions 10.*)*
    
    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] http://apt.quanta.io/debian buster main
    ```
    
    *Pour Bullseye (versions 11.*)*
    
    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bullseye main
    ```
    
    *Pour Bookworm (versions 12.*)*
    
    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bookworm main
    ```
    
    En cas de doute sur votre version, vous pouvez lire le fichier ***/etc/debian_version***.
    
    ### Version `BETA`
    
    
    Pour utiliser la version **BETA** vous devrez simplement remplacer à la fin de la ligne `main`par `beta`.
    
    
    
2. Téléchargez et ajoutez la clé **GPG** de notre dépôt:
    
    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```
    
3. Mettez à jour la liste des packages disponibles:
    
    ```bash
    apt update
    ```
    
4. Installez l'agent:
    
    ```bash
    apt install quanta-agent
    ```
    

Le token vous sera demandé lors de l'installation, vous devriez voir apparaître des données systèmes dans Experience Monitoring une minute plus tard.

### Installation pour Ubuntu

Pour installer l'agent Experience Monitoring :

1. Ajoutez la ligne suivante dans le fichier **/etc/apt/sources.list.d/quanta.list**
*Pour Jammy*
    
    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu jammy main
    ```
    
    *Pour Kinetic*
    
    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu kinetic main
    ```
    
    *Pour Lunar*
    
    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu lunar main
    ```
    
    ### Version `BETA`
    
    
    Pour utiliser la version **BETA** vous devrez simplement remplacer à la fin de la ligne `main`par `beta`.
    
    
    
2. Téléchargez et ajoutez la clé **GPG** de notre dépôt:
    
    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```
    
3. Mettez à jour la liste des packages disponibles:
    
    ```bash
    apt update
    ```
    
4. Installez l'agent:
    
    ```bash
    apt install quanta-agent
    ```
    

Le token vous sera demandé lors de l'installation, vous devriez voir apparaître des données systèmes dans Experience Monitoring une minute plus tard.

### Installation pour CentOS / RHEL

**Versions supportées:**

- Centos 7
- Centos 8 Stream

Pour installer l'agent Experience Monitoring :

1. Créez le fichier de configuration du dépôt dans le fichier **/etc/yum.repos.d/quanta.repo**. Pour ce faire vous pouvez télécharger le fichier de configuration disponible ici: [https://rpm.quanta.io/quanta-centos-repo.txt](https://rpm.quanta.io/quanta-centos-repo.txt)
    
    
   Pour utiliser la version **BETA** vous devrez simplement remplacer la ligne :
    
    ```
    baseurl=http://rpm.quanta.io/centos/$releasever/main
    ```
    
    par la ligne suivante :
    
    ```
    baseurl=http://rpm.quanta.io/centos/$releasever/beta
    ```
    
    
    
2. Installez la clé **GPG** de notre dépôt:
    
    ```
    curl https://rpm.quanta.io/quanta-repo-key.gpg -o /tmp/quanta.key && rpm --import /tmp/quanta.key && rm -f /tmp/quanta.key
    ```
    
3. Mettez à jour la liste des packages disponibles:
    
    ```
    yum makecache
    ```
    
4. Installez l'agent:
    
    ```
    yum install quanta-agent
    ```
    
5. Éditez le fichier **/etc/quanta/agent.yml** et remplacez*Par votre **token** d'auto-enregistrement récupéré auparavant.*
    
    ```
    __YOUR_QUANTA_TOKEN__
    ```
    
6. Démarrez l'agent:
    
    ```
    systemctl start quanta-agent
    ```
    
7. Pour que l'agent démarre tout seul au démarrage du serveur:
    
    ```
    systemctl enable quanta-agent
    ```
    

Vous devriez voir apparaître des données système dans Experience Monitoring une minute plus tard.

### Installation pour Docker et systèmes d’autoscaling

L'utilisation de l'agent Experience Monitoring est tout à fait compatible avec les infrastructures “conteneurisées", néanmoins **elle nécessite une légère variante dans le processus d'installation**.

[Configuration de nos agents pour le cloud](cloud-configuration-of-agents.md)

#### Explications

Le *hostid* est un paramètre interne permettant à Experience Monitoring d'identifier de manière unique un serveur. Il est nécessaire d'utiliser un *hostid* différent pour chaque serveur. Il est configuré automatiquement par le script d'installation du paquet (en utilisant l'adresse MAC de la première interface réseau sans les ":")

Or, dans le cas d'un conteneur Docker, la configuration ne permet pas au script d'installation de trouver cette valeur. Dans le cas des systèmes de scalabilité automatique (comme AWS ASG ou Azure Scale Set), la copie de l’image copie également le *hostid*.

#### Contournement

Pour avoir un *hostid* unique, vous pouvez le configurer dans le fichier /etc/quanta/agent.yml via un script au démarrage du conteneur ou de la VM (*script de bootstrap*). Vous pouvez spécifier un identifiant unique de votre choix qui peut être généré à la volée au moment de la création du conteneur (par exemple, en utilisant les metadata exposées par AWS, ou des variables d’environnement dans Docker), ou bien un élément unique comme la valeur du UUID depuis */proc/sys/kernel/random/uuid*.

### Installation sur d’autres OS

Nous ne fournissons pas de packages pour les autres OS, [les sources sont néanmoins disponibles publiquement sur Github et peuvent être compilés](https://github.com/quanta-computing/quanta-agent).

L'agent n'est compatible **qu'avec Linux**.

## Modifier une installation déjà effectuée

Si vous souhaitez modifier la configuration d’un agent Experience Monitoring **déjà installé** sur l’un de vos serveurs, vous trouverez sa configuration dans le fichier ***/etc/quanta/agent.yml***. Il contient les informations principales de connexion, dont le token Experience Monitoring correspondant au site concerné. L’accès à ce fichier peut se révéler utile si vous surveillez plusieurs sites avec un même compte Experience Monitoring, auquel cas vous souhaiterez spécifier le bon token pour rattacher chaque serveur au  site qu’il héberge, par exemple pour un site de production et un site de préproduction ayant chacun leur(s) serveur(s) distinct(s).

Voici un extrait du fichier ***/etc/quanta/agent.yml*** :

```jsx
user: quanta-agent
directory: /var/run/quanta
pidfile: /var/run/quanta/agent.pid
daemonize: yes

poll_interval: 60
update_interval: 15

logger:
  level: notice
  file: syslog

hostid: [...] <- identifiant du serveur, généré automatiquement à l'installation
quanta_token: [...] <- insérer ici le token correspondant à votre site

[...]
```

## Pour aller plus loin

Vous pouvez désormais installer les modules applicatifs pour obtenir des métriques sur vos systèmes Apache, Nginx, MySQL, Varnish, Magento, etc… 

En cas de doute, vous pouvez vous reportez à [la checklist d’installation](../installation-checklist.md).
