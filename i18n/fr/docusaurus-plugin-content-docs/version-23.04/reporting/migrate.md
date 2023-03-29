---
id: migrate
title: Migrer l'extension
---

Cette section explique comment migrer votre serveur de reporting vers un
nouveau serveur (par exemple si vous voulez passser à un OS supporté).

La migration de l'interface se fait en même temps que la migration du serveur Centreon (voir [ce chapitre](../migrate/introduction.md)).

## Installer le nouveau serveur de reporting

Installer le nouveau serveur de reporting sur le nouvel OS, installer
le dépôt Centreon Business et utiliser la documentation d'[installation](installation.md).

## Synchroniser les données

Stopper mysqld sur les **deux** serveurs de reporting:

    service mysql stop

Copier les fichiers à partir de l'ancien serveur de reporting vers le
nouveau:

    rsync -avz /var/lib/mysql/* root@IP_New_Reporting_Server:/var/lib/mysql/

Lancer la commande suivante pour assurer la compatibilité des données:

    mysql_upgrade

-   Si aucune erreur n'apparaît, redémarrez MariaDB et continuer à la
    section ci-dessous "Déplacer les rapports générés".
-   Si des erreurs sont visibles, notamment sur les tables mysql
    innodb\_index\_stats, innodb\_table\_stats, gtid\_slave\_pos, cela
    peut être dû à une incompatibilité entre MySQL/MariaDB 5.5 et
    MariaDB 10.5. Dans ce cas, effectuer les actions suivantes:

        service mysql stop
        cp -a /var/lib/mysql/ /var/lib/mysql.bak
        cd /var/lib/mysql/mysql/
        rm innodb_index_stats.frm innodb_index_stats.ibd innodb_table_stats.frm innodb_table_stats.ibd gtid_slave_pos.frm gtid_slave_pos.ibd
        service mysql start

    Puis recréer les tables manuellement en utilisant la commande suivante:

            mysql mysql < repair_mysql_upgrade.sql

    Téléchargez le fichier ici : [repair_mysql_upgrade.sql](../assets/reporting/administrate/repair_mysql_upgrade.sql).

> Si vous aviez développé des rapports & bibliothèques personnalisées,
> pensez à les copier dans les mêmes dossiers sur votre nouveau serveur de reporting.

## Déplacer les rapports générés

Synchroniser les rapports générés sur votre ancien serveur Centreon vers
le nouveau pour être en mesure de les consulter via l'interface.
Connectez vous sur l'ancien serveur Centreon puis:

    rsync -avz /var/lib/centreon/centreon-bi-server/archives/ root@IP_New_Centreon_Server:/var/lib/centreon/centreon-bi-server/archives/
