---
id: install-system-agents
title: Installer l'agent sur un serveur statique
--- 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour envoyer des informations système à Experience Monitoring, vous devez installer l’agent Experience Monitoring sur tous les serveurs que vous souhaitez superviser.

* L’agent est uniquement compatible avec Linux.
* Cette procédure peut être utilisée telle quelle si votre application ou votre site est hébergé sur un serveur statique. Pour les environnements en autoscaling (y compris Docker), elle doit être adaptée afin de gérer correctement l’**hostid**. Voir [Installer l’agent dans des environnements en autoscaling](cloud-configuration-of-agents.md).

## Compatibilité

* Debian 10, 11, 12
* Ubuntu Jammy, Kinetic, Lunar
* CentOS 7, CentOS 8 Stream

## Prérequis

* Pour installer l’agent Experience Monitoring, vous aurez besoin d’un **jeton d’enregistrement automatique**. Chaque site dispose de son propre jeton. Pour récupérer un jeton, rendez-vous dans le site de votre choix, puis accédez à **Paramètres > Système**. Le jeton s’affiche dans une case verte.

* Les agents système doivent pouvoir communiquer avec notre infrastructure. Vous devrez peut-être ajouter nos [adresses IP](#adresses-des-endpoints-pour-les-agents-serveur) à la liste blanche.

* Pour ajouter, modifier ou supprimer un serveur dans Experience Monitoring, vous devez disposer des droits **Admin** ou **Propriétaire** au sein de votre organisation. Demandez à votre administrateur ou au service d'assistance de vous attribuer les droits appropriés.

## Procédure d'installation

<Tabs groupId="os">
<TabItem value="Debian" label="Debian">

1. Ajoutez la ligne suivante au fichier **/etc/apt/sources.list.d/quanta.list**.

   <Tabs groupId="debian">
   <TabItem value="Buster (versions 10.*)" label="Buster (versions 10.*)">

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] http://apt.quanta.io/debian buster main
    ```

   </TabItem>
   <TabItem value="Bullseye (versions 11.*)" label="Bullseye (versions 11.*)">

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bullseye main
    ```

   </TabItem>
   <TabItem value="Bookworm (versions 12.*)" label="Bookworm (versions 12.*)">

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bookworm main
    ```

   </TabItem>
   </Tabs>

   Si vous n'êtes pas sûr de la version de Debian que vous utilisez, vous pouvez consulter le fichier **/etc/debian_version**.

2. Téléchargez et ajoutez la clé **GPG** de notre dépôt :

    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```

3. Mettez à jour la liste des paquets :

    ```bash
    apt update
    ```

4. Installez l’agent :

    ```bash
    apt install quanta-agent
    ```

   Le système vous demandera le jeton lors de l’installation, et les données système devraient apparaître dans Experience Monitoring en moins d’une minute. Vous pouvez ensuite installer les [agents d’application](./add-advanced-metrics.md) si vous en avez besoin.

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

Pour installer l’agent Experience Monitoring :

1. Ajoutez la ligne suivante au fichier **/etc/apt/sources.list.d/quanta.list**.

   <Tabs groupId="ubuntu">
   <TabItem value="Jammy" label="Jammy">

   ```bash
   deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu jammy main
   ```

   </TabItem>
   </Tabs>

2. Téléchargez et ajoutez la clé **GPG** de notre dépôt :

    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```

3. Mettez à jour la liste des paquets :

    ```bash
    apt update
    ```

4. Installez l'agent :

    ```bash
    apt install quanta-agent
    ```

   Le système vous demandera le jeton lors de l'installation, et les données système devraient apparaître dans Experience Monitoring en moins d'une minute. Vous pouvez ensuite installer [les agents d’application](./add-advanced-metrics.md) ou [le profileur PHP](install-php-magento-orocommerce-profiler.md) si vous en avez besoin.

</TabItem>
<TabItem value="CentOS/RHEL" label="CentOS/RHEL">

**Versions prises en charge :**

- CentOS 7
- CentOS 8 Stream

Pour installer l'agent Experience Monitoring :

1. Créez le fichier de configuration du dépôt **/etc/yum.repos.d/quanta.repo**. Vous pouvez télécharger le fichier de configuration disponible ici : [https://rpm.quanta.io/quanta-centos-repo.txt](https://rpm.quanta.io/quanta-centos-repo.txt)

2. Installez la clé **GPG** de notre dépôt :

    ```shell
    curl https://rpm.quanta.io/quanta-repo-key.gpg -o /tmp/quanta.key && rpm --import /tmp/quanta.key && rm -f /tmp/quanta.key
    ```

3. Mettez à jour la liste des paquets :

    ```shell
    yum makecache
    ```

4. Installez l'agent :

    ```shell
    yum install quanta-agent
    ```


5. Modifiez le fichier **/etc/quanta/agent.yml** et remplacez __VOTRE_JETON_EXPERIENCE_MONITORING__ par [votre **jeton d'enregistrement automatique**](#prérequis) :

    ```shell
    __VOTRE_JETON_EXPERIENCE_MONITORING__
    ```

6. Démarrez l’agent :

    ```shell
    systemctl start quanta-agent
    ```

7. Activez le démarrage automatique de l’agent au démarrage du système :

    ```shell
    systemctl enable quanta-agent
    ```

   Les données système devraient apparaître dans Experience Monitoring en moins d’une minute. Vous pouvez ensuite installer [des agents d’application](./add-advanced-metrics.md) ou [le profileur PHP](install-php-magento-orocommerce-profiler.md) si vous en avez besoin.

</TabItem>
<TabItem value="Autres systèmes d’exploitation" label="Autres systèmes d’exploitation">

Nous ne proposons pas de paquets pour d'autres systèmes d'exploitation, mais [le code source est accessible au public sur GitHub et peut être compilé](https://github.com/quanta-computing/quanta-agent).

</TabItem>
</Tabs>

## Dépannage de l'installation de l'agent

**Je ne vois pas de données arriver, où puis-je trouver des informations pour dépanner ?**

L’agent utilise syslog pour la journalisation ; vous trouverez généralement les logs dans **/var/log/daemon.log** ou **/var/log/syslog**. Si vous ne parvenez pas à identifier la source de l’erreur, veuillez contacter [le support Centreon](http://support.centreon.com/).

Vous pouvez rediriger les journaux vers un autre fichier en modifiant la variable **file** dans la section **logger** du fichier **/etc/quanta/agent.yml** (veillez à configurer la rotation des logs).

## Modification d'une installation existante

Si vous souhaitez modifier la configuration d'un agent Experience Monitoring déjà installé sur l'un de vos serveurs, vous trouverez ses paramètres dans le fichier **/etc/quanta/agent.yml**. Ce fichier contient les principales informations de connexion, notamment le jeton Experience Monitoring correspondant au site concerné. L'accès à ce fichier peut s'avérer utile si vous supervisez plusieurs sites avec le même compte Experience Monitoring et que vous souhaitez spécifier le jeton approprié pour associer chaque serveur au site qu'il héberge (par exemple, pour distinguer les serveurs de production des serveurs de préproduction).

Voici un extrait du fichier **/etc/quanta/agent.yml** :

```yaml
user: quanta-agent
directory: /var/run/quanta
pidfile: /var/run/quanta/agent.pid
daemonize: yes

poll_interval: 60
update_interval: 15

logger:
  level: notice
  file: syslog

hostid: [...] <- identifiant du serveur, généré automatiquement lors de l’installation
quanta_token: [...] <- insérez ici le jeton correspondant à votre site

[...]
```

## Adresses des endpoints pour les agents serveur

Si vous utilisez l'agent Experience Monitoring, chacun de vos serveurs envoie régulièrement des données (une fois par minute) au service Experience Monitoring.

Il s'agit d'un trafic HTTPS sortant (port 443) qui est souvent autorisé par défaut. Toutefois, si vos règles de pare-feu sont strictes et que vous devez autoriser des destinations spécifiques pour Experience Monitoring, ajoutez les adresses IP de destination suivantes à la liste :

- 52.215.166.110
- 52.215.179.235
- 52.215.180.115
