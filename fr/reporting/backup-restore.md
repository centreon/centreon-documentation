---
id: backup-restore
title: Sauvegarde et restauration
---

## Sauvegarde de Centreon MBI

### Sauvegarde des données de configuration

#### Elements sauvegardés

Les éléments sauvegardés sont les suivants :

-   Sauvegarde des modèles de rapports personnalisés et de leur
    paramètrage
-   Sauvegarde des rapports générés

#### Fonctionnement du script de sauvegarde

Le script de sauvegarde est exécuté de manière journalière via un cron
défini dans le fichier **/etc/cron.d/centreon-bi-backup-web** :

    #
    # Cron to backup Centreon MBI Engine frontend module
    #
    PATH=/sbin:/bin:/usr/sbin:/usr/bin

    # rewrite file with new cron line
    CRONTAB_EXEC_USER=""

    0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-web.sh >> /var/log/centreon-bi/centreon-bi-backup-web.log 2>&1

Les données sauvegardées se trouvent par défaut dans le répertoire :
**/var/backup**.

Pour modifier ce répertoire, mettre à jour la valeur **BACKUP\_DIR**
(ligne **63**) dans le script de sauvegarde :
**/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh**

Sur un server Centreon seule la configuration, les rapports générés et
les modèles de rapports personnalisés ont besoin d'être sauvegardés. La
sauvegarde est au format suivant :
centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz

#### Périodicité des sauvegardes

-   Périodicité des sauvegardes : journalières
-   Rotation des sauvegardes : 8 jours

Pour modifier la valeur de rotation des sauvegardes, éditer la valeur
**RETENTION\_AGE** (ligne **67**) dans le script de sauvegarde :
**/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh**

> Il est important d\'exporter les sauvegardes sur une autre machine
> afin d\'assurer leurs pérennités.

### Sauvegarde du serveur de reporting dédié


> Il est important de disposer d\'au moins 5 Go d\'espace libre sur le
> **Volum Group** hébergeant l\'espace de stockage **data** du SGBD
> MySQL/MariaDB. Pour cela, exécuter la commande suivante en renseignant
> le nom du **Volum Group** :

    vgdisplay vg_data | grep -i free 


#### Elements sauvegardés

Les éléments sauvegardés sont les suivants :

-   Paramètres de configuration du moteur de génération de rapports
-   Données agréggées
-   Rapports & ressources

#### Fonctionnement du script de sauvegarde sur un serveur central

Le script de sauvegarde est exécuté de manière journalière via un cron
défini dans le fichier
**/etc/cron.d/centreon-bi-backup-reporting-server** :

>     #
>     # Cron to backup Centreon MBI reporting server
>     #
>     PATH=/sbin:/bin:/usr/sbin:/usr/bin
>
>     # rewrite file with new cron line
>     CRONTAB_EXEC_USER=""
>
>     30 12 * * 0 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --total >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
>     30 12 * * 1-6 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --totalincr >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
>     0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --centreonbifiles >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-files.log 2>&1

Les données sauvegardées se trouvent par défaut dans le répertoire :
**/var/backup**.

Pour modifier ce répertoire, mettre à jour la valeur **BACKUP\_DIR**
(ligne **83**) dans le script de sauvegarde :
**/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh**

Trois types de sauvegarde sont exécutés dans la semaine :

-   tous les jours une sauvegarde des fichiers de configuration du
    moteur de génération des rapports, format :
    centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz
-   tous les dimanches une sauvegarde complète de l\'ETL, format :
    mysql-centreon\_storage-bi-aaaa-mm-jj.tar.gz
-   du lundi au samedi une sauvegarde incrémentale de l\'ETL (toutes les
    tables et seulement la dernière partition des tables partitionnées),
    format : mysql-centreon\_storage-bi-aaaa-mm-jj.tar.gz

> **Important**
> 
> Bien s'assurer que pendant la sauvegarde du serveur de repoting, les
> scipts ETL ne doivent pas être en cours d'execution. De plus, aucun
> rapport ne doit être en cours de génération.

#### Périodicité des sauvegardes

-   Périodicité des sauvegardes : journalières
-   Rotation des sauvegardes : 8 jours

Pour modifier la valeur de rotation des sauvegardes, éditer la valeur
**RETENTION\_AGE** (ligne **88**) dans le script de sauvegarde :
**/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh**


> Il est important d'exporter les sauvegardes sur une autre machine
> afin d'assurer leurs pérennités.


## Restauration de Centreon MBI

### Restauration des données de configuration 

Le processus de restauration comprend plusieurs étapes :

-   Réinstallation du module **centreon-bi-server** dans une version
    identique à celle sauvegardée.
-   Intégration des anciens rapports générés.
-   Intégration des paramètres de rapports personnalisés.
-   Intégration des données de configuration Centreon MBI.
-   Intégration des données MySQL.
-   Supprimer les données extraites de la sauvegarde.
-   Réinstaller la sauvegarde.

#### Réinstallation du module Centreon MBI

Sur le serveur central Centreon, lancer la commande ::

    yum install centreon-bi-server-x.y.z

#### Intégration des anciens rapports générés

Récupérer la dernière sauvegarde à jour, format
**centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz** et
extraire celle-ci dans le répertoire **/tmp** ::

    cd /tmp
    tar xzf centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz

Intégrer les rapports générés via la commande ::

    /bin/cp -rf /tmp/var/lib/centreon/centreon-bi-server/archives/* /var/lib/centreon/centreon-bi-server/archives

> Si le répertoire est différent, c\'est que les paramètres par défaut ont
> été modifiés par l\'utilisateur. Il suffit simplement de reprendre la
> bonne arborescence.

Modifier les droits sur les fichiers ::

    chown -R centreonBI:centreonBI /var/lib/centreon/centreon-bi-server/archives 

#### Intégration des paramètres de rapports personnalisés

Récupérer la dernière sauvegarde à jour, format
**centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz** et
extraire celle-ci dans le répertoire **/tmp** ::

    # cd /tmp
    tar xzf centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz

Intégration des anciens paramètres ::

    /bin/cp -rf /tmp/usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl/* /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl
    /bin/cp -rf /tmp/var/lib/centreon/centreon-bi-server/reports/infos/* /var/lib/centreon/centreon-bi-server/reports/infos

Modifier les droits sur les fichiers ::

    chown -R apache:apache /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl

#### Intégration des données de configuration Centreon MBI

Intégrer la sauvegarde SQL via la commande suivante ::

    mysql -u root -p centreon_storage < /tmp/var/backup/dump_centreon_storage.sql

#### Supprimer les données extraites de la sauvegarde

Supprimer les données extraites via les commandes suivantes ::

    cd /tmp
    rm -Rf /tmp/usr
    rm -Rf /tmp/var

### Restauration des paramètres du serveur de reporting Centreon MBI

Le processus de restauration comprend plusieurs étapes :

-   Réinstallation du module **centreon-bi-reporting-server** dans une
    version identique à celle sauvegardée.
-   Intégration de la configuration du moteur CBIS.
-   Intégration des modèles de rapports personnalisés.
-   Intégration des données.
-   Redémarrer le moteur CBIS.
-   Supprimer les données extraites de la sauvegarde.
-   Réinstaller la sauvegarde.

#### Réinstallation du module Centreon MBI

Sur le serveur central Centreon, lancer la commande ::

    yum install centreon-bi-reporting-server-x.y.z


***x.y.z** correspond à la version exacte du module sauvegardé.*

#### Intégration de la configuration du moteur CBIS

Récupérer la dernière sauvegarde à jour, format
**centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz** et extraire celle-ci
dans le répertoire **/tmp** ::

    cd /tmp
    tar xzf centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz

Intégrer la configuration via la commande ::

    # /bin/cp -rf /tmp/etc/centreon-bi/* /etc/centreon-bi

#### Intégration des modèles de rapports personnalisés

Récupérer la dernière sauvegarde à jour, format
**centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz** et extraire celle-ci
dans le répertoire **/tmp** ::

    cd /tmp
    tar xzf /var/backup/centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz

Intégrer les modèles de rapports via les commandes ::

    /bin/cp -rf /tmp/usr/share/centreon-bi/reports/* /usr/share/centreon-bi/reports
    chown -R centreonBI:centreonBI /usr/share/centreon-bi/reports
    /bin/cp -rf /tmp/usr/share/centreon-bi/Resources/* /usr/share/centreon-bi/Resources
    chown -R centreonBI:centreonBI /usr/share/centreon-bi/Resources

### Intégration des données MySQL

Arrêter le service MySQL ::

    systemctl stop mysql

Supprimer le répértoire */var/lib/mysql* du serveur de reporting::

    rm -rf /var/lib/mysql

Décompresser la dernière sauvegarde totale ( par défaut la sauvegarde
totale est faite le dimanche)::

    tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /

Décompresser l\'ensemble des sauvegardes partielles faites entre la
sauvegarde totale et la date du jour, **de la plus ancienne à la plus
récente** en lançant la commande ::

    tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /

Modifier les droits sur le répértoire */var/lib/mysql* ::

    chown -R mysql:root /var/lib/mysql

Démarrer le service MySQL::

    systemctl start mysql

#### Redémarrer le moteur CBIS

Redémarrer le processus via la commande ::

    systemctl restart cbis
    Stopping Centreon MBI scheduler : cbis
    Waiting for cbis to exit .. done.
    Starting Centreon MBI scheduler : cbis
    Service started...

#### Supprimer les données extraites de la sauvegarde

Supprimer les données extraites via les commandes suivantes ::

    cd /tmp
    rm -Rf /tmp/etc
    rm -Rf /tmp/usr
