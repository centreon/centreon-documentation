---
id: logs
title: Liste des logs Centreon
description: "Liste de référence des fichiers de logs Centreon et leur usage"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Général

|Pour débugger quoi ?                |Processus                         |Fichier                                           |Symptômes                                                                                                                                |
|------------------------------------|----------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
|Centreon Engine                     |centengine                        |/var/log/centreon-engine/centengine.log           |Contrôles non effectués <br/> Objets supprimés encore supervisés                                                                               |
|Centreon Broker                     |cbd                               |/var/log/centreon-broker/watchdog.log             |Processus cbd qui redémarre sans cesse                                                                                                   |
|                                    |                                  |/var/log/centreon-broker/central-broker-master.log|Menus temps réel non mis à jour                                                                                                          |
|                                    |                                  |/var/log/centreon-broker/central-rrd-master.log   |Graphiques de performance non à jour                                                                                                     |
|Droits utilisateur (ACL)            |cron centACL.php                  |/var/log/centreon/centAcl.log                     |ACLs incorrectes                                                                                                                         |
|Gorgone                             |gorgoned                          |/var/log/centreon-gorgone/gorgoned.log            |Actions ne se déclenchent pas : acquittements, plages de maintenance, force checks, autodisco <br/> Configuration non mise à jour sur le poller|
|Sauvegardes                         |cron centreon-backup.pl           |/var/log/centreon/centreon-backup.log             |Problèmes de backup Centreon                                                                                                             |
|Plages de maintenance récurrentes   |cron downtimeManager.php          |/var/log/centreon/downtimeManager.log             |Aucune plage de maintenance n'est envoyée au collecteur                                                                                  |
|Données de télémétrie (CEIP)        |cron centreon-send-stats.php      |/var/log/centreon/statistics.log                  |Erreur de connexion à l'API Centreon lors de l'envoi des données de télémétrie                                                           |
|Interface Centreon et API           |                                  |/var/log/centreon/centreon-web.log   | Problèmes d'appels APIs, erreurs dans les formulaires                                                    |
|                                    |                                  |/var/log/php-fpm/centreon-error.log    (EL OS),  /var/log/apache2/error_log  et/ou   /var/log/apache2/ssl_error_log  (debian)             |  Page blanche                                                                                                                                       |
|                                    |                                  |/var/log/httpd/*.log  (EL OS), /var/log/apache2/*.log  (debian)                          |  Interface défaillante    (principalement erreurs HTTP 50x (501 502 503....))                                                                                                                                   |
|                                    |                                  |/var/log/php-fpm/error.log (EL OS), /var/log/php**X.Y**-fpm.log   (debian) où **X.Y** est la version php                       |   Page blanche (cause étant souvent une configuration php telle que memory_limit, max_input_vars....)                                                                                                                                    |
|Base de données                     |                                  |/var/log/centreon/sql-error.log                   |Affiche les requêtes SQL qui ont généré des erreurs                                                                                      |
|Traps SNMP                          |centreontrapd                     |/var/log/centreon/centreontrapd.log               |Problèmes de réception des traps SNMP                                                                                                    |
|Traps SNMP (DSM)                    |dsmd                              |/var/log/centreon/centreon-dsm.log                |Problèmes de gestion des traps SNMP avec DSM                                                                                             |
|Raports de disponibilité basiques   |cron dashboardBuilder             |/var/log/centreon/dashboardBuilder.log            |Page vide ou données incomplètes                                                                                                         |
|Raports de disponibilité basiques   |cron eventReportBuilder           |/var/log/centreon/eventReportBuilder.log          |Page vide ou données incomplètes                                                                                                         |
|Partitions SGBD                     |cron centreon-partitioning.php    |/var/log/centreon/centreon-partitioning.log       |Aucune nouvelle partition n'est créée                                                                                                    |
|Purge des données de base de données|cron centstorage_purge.php        |/var/log/centreon/centreon-purge.log              |Les anciennes partitions ne sont pas supprimées                                                                                          |
|Knowledge Base                      |cron centKnowledgeSynchronizer.php|/var/log/centreon/knowledgebase.log               |Erreurs dans le cron qui synchronise les pages Mediawiki avec le paramètre URL <br/> Notes sur les ressources                            |
|Anomaly Detection                   |script LUA                        |/var/log/centreon-broker/anomaly-detection.log    |Données non envoyées à Centreon SAAS                                                                                                     |
|                                    |cron lancé par gorgoned           |/var/log/centreon/anomaly_detection.log           |Le classement des services avec des étoiles ne fonctionne pas dans le menu **Suggérer**                                                  |
|Connexion à l'interface Centreon    |                                  |/var/log/centreon/login.log                       |Impossible de se connecter à l'interface Centreon                                                                                        |
|Authentification Centreon LDAP      |                                  |/var/log/centreon/ldap.log                        |La connexion LDAP ne fonctionne pas                                                                                                      |
|                                    |                                  |/var/log/centreon/ldapsearch.log                  |Erreur lors de l'import d'utilisateurs LDAP                                                                                              |
|Changements de mot de passe         |                                  |/var/log/centreon/prod.password.log               |Modifications des mots de passe de tous les utilisateurs (réussies ou échouées)                                                          |
|Gestion des licences                |                                  |/var/log/centreon/license-manager.log             |Les licences ne sont pas présentes ou ne sont pas à jour <br/> Pas d'accès aux connecteurs de supervision                                |
|Jetons d'API                        |cron outdated-token-removal.php   |/var/log/centreon/centreon-tokens.log             |Problèmes avec des jetons expirés                                                                                                        |
|Graphiques de performances          |                                  |/var/log/centreon/rrdtool.log                     |Les graphiques ne sont pas affichés                                                                                                      |
|Daemon Centreon VMware              |centreon_vmware                   |/var/log/centreon/centreon_vmware.log             |La supervision avec les connecteurs VMware ne fonctionne pas                                                                             |

## Modules business

|Pour débugger quoi ?|Processus                                  |Fichier                                                           |Symptômes                                                     |
|--------------------|-------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
|Centreon Map Engine |                                           |/var/log/centreon-map/centreon-map-engine.log                     |Problèmes sur le serveur Centreon MAP                         |
|                    |                                           |/var/log/centreon-map/centreon-map.log                            |Problèmes avec MAP Legacy                                     |
|Centreon MBI        |cbis                                       |/var/log/centreon-bi/cbis.out                                     |Pas de rapports envoyés ni d'emails générés                   |
|                    |                                           |/var/log/centreon-bi/cbis.[date].log                              |Problème de génération des rapports                           |
|                    |cron centreon-bi-backup-web.sh             |/var/log/centreon/centreon-bi-backup-web.log                      |Problème avec la sauvegarde des rapports générés              |
|                    |cron centreon-bi-backup-reporting-server.sh|/var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log   | Problème avec la sauvegarde des rapports générés                                                               |
|                    |cron centreon-bi-backup-reporting-server.sh|/var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log   |  Problème avec la sauvegarde des rapports générés                                                              |
|                    |cron centreon-bi-backup-reporting-server.sh|/var/log/centreon-bi/centreon-bi-backup-reporting-server-files.log|     Problème avec la sauvegarde des rapports générés                                                           |
|                    |cron centreonBIETL                         |/var/log/centreon-bi/centreonBIETL.log                            |Le check db-content indique que les données ne sont pas à jour|
|                    |cron purgeArchivesFiles.php                |/var/log/centreon/centreon-bi-archive-retention.log               |Problèmes avec la purge des anciens rapports                  |
|                    |cron dataRetentionManager.pl               |/var/log/centreon-bi/dataRetentionManager.log                     |Problèmes avec la rétention des données de l'ETL                              |
|Centreon BAM        |                                           |/var/log/php-fpm/centreon-error.log                               |L'interface web ne marche pas                                 |
|                    |                                           |/var/log/centreon-broker/central-broker-master.log                |Statut des BAs incohérent                                     |

## Collecteur

|Pour débugger quoi ?|Processus|Fichier                                           |Symptômes|
|--------------------|---------|--------------------------------------------------|---------|
|Centreon Broker     |         |/var/log/centreon-broker/central-broker-master.log|	        |
