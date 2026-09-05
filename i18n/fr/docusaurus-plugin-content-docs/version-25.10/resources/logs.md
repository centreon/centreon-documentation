---
id: logs
title: Liste des logs Centreon
description: "Liste de référence des fichiers de logs Centreon et leur usage"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Général

Les logs de l'interface web et de l'API sont regroupés dans `/var/log/centreon` et nommés `prod.<canal>.log`. Ces fichiers sont archivés par logrotate : les versions précédentes portent les suffixes `.1`, `.2.gz`, etc.

**Que sont devenus les anciens fichiers**

| Ancien fichier | Où chercher désormais |
| --- | --- |
| `/var/log/centreon/centreon-web.log` | `/var/log/centreon/prod.web.log` |
| `/var/log/centreon/sql-error.log` | `/var/log/centreon/prod.web.log` |
| `/var/log/php-fpm/centreon-error.log` | `/var/log/centreon/prod.web.log` |
| `/var/log/centreon/ldap.log` | `/var/log/centreon/prod.access.log` |
| `/var/log/centreon/login.log` | `/var/log/centreon/prod.access.log` — voir l'avertissement ci-dessous |

`login.log` est encore écrit aujourd'hui, mais il est déprécié : **il sera supprimé en version 27.10**. Si vous exploitez ce fichier (fail2ban, SIEM, scripts), basculez dès maintenant sur `prod.access.log`, qui contient les mêmes événements avec davantage d'informations.

**Ce que contient désormais chaque ligne de log**

Les lignes sont enrichies automatiquement. Au-delà du message lui-même, chacune indique :

* la date et l'heure, avec le fuseau horaire ;
* l'utilisateur concerné et ses droits ;
* l'adresse IP du poste client, l'URL appelée et la page de l'interface à l'origine de l'action ;
* un identifiant unique de requête, qui permet de regrouper toutes les lignes produites par une même action, et donc de reconstituer un incident de bout en bout.

Les mots de passe, jetons et autres données sensibles sont masqués automatiquement, y compris lorsqu'ils apparaissent dans une URL.

**Événements de sécurité et erreurs techniques sont séparés**

Conformément aux recommandations de l'OWASP en matière de journalisation, les événements de sécurité sont isolés des erreurs techniques. Les connexions, déconnexions, échecs d'authentification et accès refusés sont enregistrés dans `prod.access.log`, avec pour chacun l'utilisateur, l'adresse IP source, le mode d'authentification utilisé et le résultat. Ce fichier est prévu pour être exploité par des outils de sécurité (SIEM, fail2ban).

Les erreurs techniques, elles, restent dans `prod.web.log`. À noter : ce fichier n'enregistre que les requêtes ayant produit au moins une erreur, accompagnées des dernières lignes de contexte de la requête concernée.

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
|Interface Centreon, API et base de données|                            |/var/log/centreon/prod.web.log <br/> *Remplace centreon-web.log, sql-error.log et /var/log/php-fpm/centreon-error.log*|Problèmes d'appels APIs, erreurs dans les formulaires, erreurs SQL, page blanche, exceptions non catchées |
|                                    |                                  |/var/log/apache2/error_log  et/ou   /var/log/apache2/ssl_error_log  (debian)             |  Page blanche                                                                                                                                       |
|                                    |                                  |/var/log/httpd/*.log  (EL OS), /var/log/apache2/*.log  (debian)                          |  Interface défaillante    (principalement erreurs HTTP 50x (501 502 503....))                                                                                                                                   |
|                                    |                                  |/var/log/php-fpm/error.log (EL OS), /var/log/php**X.Y**-fpm.log   (debian) où **X.Y** est la version php                       |   Page blanche (cause étant souvent une configuration php telle que memory_limit, max_input_vars....)                                                                                                                                    |
|Traps SNMP                          |centreontrapd                     |/var/log/centreon/centreontrapd.log               |Problèmes de réception des traps SNMP                                                                                                    |
|Traps SNMP (DSM)                    |dsmd                              |/var/log/centreon/centreon-dsm.log                |Problèmes de gestion des traps SNMP avec DSM                                                                                             |
|Raports de disponibilité basiques   |cron dashboardBuilder             |/var/log/centreon/dashboardBuilder.log            |Page vide ou données incomplètes                                                                                                         |
|Raports de disponibilité basiques   |cron eventReportBuilder           |/var/log/centreon/eventReportBuilder.log          |Page vide ou données incomplètes                                                                                                         |
|Partitions SGBD                     |cron centreon-partitioning.php    |/var/log/centreon/centreon-partitioning.log       |Aucune nouvelle partition n'est créée                                                                                                    |
|Purge des données de base de données|cron centstorage_purge.php        |/var/log/centreon/centreon-purge.log              |Les anciennes partitions ne sont pas supprimées                                                                                          |
|Knowledge Base                      |cron centKnowledgeSynchronizer.php|/var/log/centreon/knowledgebase.log               |Erreurs dans le cron qui synchronise les pages Mediawiki avec le paramètre URL <br/> Notes sur les ressources                            |
|Anomaly Detection                   |script LUA                        |/var/log/centreon-broker/anomaly-detection.log    |Données non envoyées à Centreon SAAS                                                                                                     |
|                                    |cron lancé par gorgoned           |/var/log/centreon/anomaly_detection.log           |Le classement des services avec des étoiles ne fonctionne pas dans le menu **Suggérer**                                                  |
|Connexion à l'interface Centreon    |                                  |/var/log/centreon/prod.access.log <br/> *Remplace ldap.log et login.log*|Impossible de se connecter à l'interface Centreon, quel que soit le mode d'authentification (local, LDAP, OpenID, SAML, WebSSO) <br/> Déconnexions, échecs de rafraîchissement de jeton, accès refusés|
|                                    |                                  |/var/log/centreon/login.log <br/> *Déprécié : ce fichier sera supprimé en 27.10, migrez vers prod.access.log*|Copie des connexions réussies et échouées au format historique, conservée temporairement pour la compatibilité des outils existants (fail2ban)|
|Import d'utilisateurs LDAP          |                                  |/var/log/centreon/ldapsearch.log                  |Erreur lors de l'import d'utilisateurs LDAP                                                                                              |
|Changements de mot de passe         |                                  |/var/log/centreon/prod.password.log               |Modifications des mots de passe de tous les utilisateurs (réussies ou échouées)                                                          |
|Mise à jour de Centreon             |                                  |/var/log/centreon/prod.upgrade.log                |Échec ou blocage d'une mise à jour : trace complète de chaque étape de la migration (scripts SQL, migration des données, tâches de post-installation), réussie ou non, conservée après la mise à jour|
|Connecteurs de supervision          |                                  |/var/log/centreon/prod.plugin-pack-manager.log    |Problèmes d'installation ou de mise à jour des connecteurs de supervision                                                                |
|Mise à jour de Centreon             |                                  |/var/log/centreon/prod.upgrade.log                |Échec ou blocage d'une mise à jour : trace complète de chaque étape de la migration (scripts SQL, migration des données, tâches de post-installation), réussie ou non, conservée après la mise à jour|
|Connecteurs de supervision          |                                  |/var/log/centreon/prod.plugin-pack-manager.log    |Problèmes d'installation ou de mise à jour des connecteurs de supervision                                                                |
|Gestion des licences                |                                  |/var/log/centreon/license-manager.log             |Les licences ne sont pas présentes ou ne sont pas à jour <br/> Pas d'accès aux connecteurs de supervision                                |
|Jetons d'API                        |                                  |/var/log/centreon/prod.token.log                  |Problèmes de création, de modification ou de suppression de jetons d'API                                                                 |
|                                    |cron outdated-token-removal.php   |/var/log/centreon/centreon-tokens.log             |Problèmes avec des jetons expirés                                                                                                        |
|Graphiques de performances          |                                  |/var/log/centreon/rrdtool.log                     |Les graphiques ne sont pas affichés                                                                                                      |
|Daemon Centreon VMware              |centreon_vmware                   |/var/log/centreon/centreon_vmware.log             |La supervision avec les connecteurs VMware ne fonctionne pas                                                                             |

## Modules business

|Pour débugger quoi ?|Processus                                  |Fichier                                                           |Symptômes                                                     |
|--------------------|-------------------------------------------|------------------------------------------------------------------|--------------------------------------------------------------|
|Centreon Map Engine |                                           |/var/log/centreon-map/centreon-map-engine.log                     |Problèmes sur le serveur Centreon MAP                         |
|Centreon Map Legacy |                                           |/var/log/centreon-map/centreon-studio.log                         |Problèmes avec MAP Legacy                                     |
|                    |                                           |/var/log/centreon-map/centreon-map.log                            |Problèmes avec MAP Legacy                                     |
|Centreon MBI        |cbis                                       |/var/log/centreon-bi/cbis.out                                     |Pas de rapports envoyés ni d'emails générés                   |
|                    |                                           |/var/log/centreon-bi/cbis.[date].log                              |Problème de génération des rapports                           |
|                    |cron centreon-bi-backup-web.sh             |/var/log/centreon/centreon-bi-backup-web.log                      |Problème avec la sauvegarde des rapports générés              |
|                    |cron centreon-bi-backup-reporting-server.sh|/var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log   |  Problème avec la sauvegarde des rapports générés                                                              |
|                    |cron centreon-bi-backup-reporting-server.sh|/var/log/centreon-bi/centreon-bi-backup-reporting-server-files.log|     Problème avec la sauvegarde des rapports générés                                                           |
|                    |cron centreonBIETL                         |/var/log/centreon-bi/centreonBIETL.log                            |Le check db-content indique que les données ne sont pas à jour|
|                    |cron purgeArchivesFiles.php                |/var/log/centreon/centreon-bi-archive-retention.log               |Problèmes avec la purge des anciens rapports                  |
|                    |cron dataRetentionManager.pl               |/var/log/centreon-bi/dataRetentionManager.log                     |Problèmes avec la rétention des données de l'ETL                              |
|Centreon BAM        |                                           |/var/log/centreon/prod.web.log <br/> *Remplace /var/log/php-fpm/centreon-error.log*|L'interface web ne marche pas                                 |
|                    |                                           |/var/log/centreon-broker/central-broker-master.log                |Statut des BAs incohérent                                     |

## Collecteur

|Pour débugger quoi ?|Processus|Fichier                                           |Symptômes|
|--------------------|---------|--------------------------------------------------|---------|
|Centreon Broker     |         |/var/log/centreon-broker/central-broker-master.log|	        |
