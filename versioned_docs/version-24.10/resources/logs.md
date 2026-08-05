---
id: logs
title: List of Centreon logs
description: "Reference list of Centreon log files and what they reveal"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## General

|What do you want to debug?         |Process                           |Log file                                          |Symptoms                                                                                                                          |
|-----------------------------------|----------------------------------|--------------------------------------------------|---------|
|Centreon Engine                    |centengine                        |/var/log/centreon-engine/centengine.log           |Checks are not executed Deleted objects are still being monitored                                                                 |
|Centreon Broker                    |cbd                               |/var/log/centreon-broker/watchdog.log             |The cbd process keeps restarting                                                                                                  |
|                                   |                                  |/var/log/centreon-broker/central-broker-master.log|Real-time menus are not updated                                                                                                   |
|                                   |                                  |/var/log/centreon-broker/central-rrd-master.log   |Performance graphs are not up to date                                                                                             |
|User access rights (ACL)           |centACL.php cron                  |/var/log/centreon/centAcl.log                     |Incorrect ACLs                                                                                                                    |
|Gorgone                            |gorgoned                          |/var/log/centreon-gorgone/gorgoned.log            |Actions are not triggered: acknowledgements, downtime, forced checks, autodiscovery The configuration is not updated on the pollers|
|Backups                            |centreon-backup.pl cron           |/var/log/centreon/centreon-backup.log             |Problems with backups of Centreon                                                                                                 |
|Recurring downtimes                |downtimeManager.php cron          |/var/log/centreon/downtimeManager.log             |No recurrent downtimes are sent to the pollers                                                                                    |
|Telemetry data (CEIP)              |centreon-send-stats.php cron      |/var/log/centreon/statistics.log                  |Error when connecting to the Centreon API that sends CEIP data                                                                    |
|Interface and API           |                                  |/var/log/centreon/centreon-web.log   | All APIs call or errors in forms                                                    |
|                                    |                                  |/var/log/php-fpm/centreon-error.log    (EL OS),  /var/log/apache2/error_log  et/ou   /var/log/apache2/ssl_error_log  (debian)             |  Blank page                                                                                                                                      |
|                                    |                                  |/var/log/httpd/*.log  (EL OS), /var/log/apache2/*.log  (debian)                          |  Malfunctioning interface      (mostly HTTP erros 50**x** (501 502 503....))                                                                                                                                   |
|                                    |                                  |/var/log/php-fpm/error.log (EL OS), /var/log/php**X.Y**-fpm.log   (debian) where **X.Y** is the PHP version                      |   Blank page (mostly regarding php configuration such as memoy_limit, max_input_vars)                                                                                                                                    |
|Database                           |                                  |/var/log/centreon/sql-error.log                   |Shows SQL queries that generated errors                                                                                           |
|SNMP traps                         |centreontrapd                     |/var/log/centreon/centreontrapd.log               |Problems with the reception of SNMP traps                                                                                         |
|SNMP traps (DSM)                   |dsmd                              |/var/log/centreon/centreon-dsm.log                |Problems with SNMP trap management with DSM                                                                                       |
|Basic availability reports         |dashboardBuilder cron             |/var/log/centreon/dashboardBuilder.log            |Blank page or incomplete data                                                                                                     |
|Basic availability reports         |eventReportBuilder cron           |/var/log/centreon/eventReportBuilder.log          |Blank page or incomplete data                                                                                                     |
|DBMS partitions                    |centreon-partitioning.php cron    |/var/log/centreon/centreon-partitioning.log       |No new partitions are created                                                                                                     |
|Database data purge                |centstorage_purge.php cron        |/var/log/centreon/centreon-purge.log              |Old partitions are not deleted                                                                                                    |
|Knowledge Base                     |centKnowledgeSynchronizer.php cron|/var/log/centreon/knowledgebase.log               |Errors in the cron that synchronizes Mediawiki pages with the Notes URL parameter on resources                                    |
|Anomaly Detection                  |LUA script                        |/var/log/centreon-broker/anomaly-detection.log    |The data is not sent to Centreon SaaS                                                                                             |
|                                   |cron launched by gorgoned         |/var/log/centreon/anomaly_detection.log           |The star rating calculation for services does not work in the "suggest" menu                                                      |
|Login to the Centreon interface    |                                  |/var/log/centreon/login.log                       |Users are unable to connect to the Centreon interface                                                                             |
|Centreon LDAP authentication       |                                  |/var/log/centreon/ldap.log                        |The LDAP connection doesn't work                                                                                                  |
|                                   |                                  |/var/log/centreon/ldapsearch.log                  |An error occurs when importing users with LDAP                                                                                    |
|Password changes                   |                                  |/var/log/centreon/prod.password.log               |Password changes for all users (successful and unsuccessful)                                                                      |
|Licenses                           |                                  |/var/log/centreon/license-manager.log             |Licenses not present or not up-to-date <br/> No access to Monitoring Connectors                                                   |
|API tokens                         |outdated-token-removal.php cron   |/var/log/centreon/centreon-tokens.log             |Problems with expired tokens                                                                                                      |
|Performance graphs                 |                                  |/var/log/centreon/rrdtool.log                     |No graphs are displayed                                                                                                           |
|Centreon VMware daemon             |centreon_vmware                   |/var/log/centreon/centreon_vmware.log             |Monitoring with VMware connectors doesn't work                                                                                    |

## Business modules

|What do you want to debug?         |Process                           |Log file                                          |Symptoms                                                                                                                          |
|--------------------|-------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------|
|Centreon Map Engine |                                           |/var/log/centreon-map/centreon-map-engine.log                     |Problems with the Centreon MAP server                      |
|                    |                                           |/var/log/centreon-map/centreon-map.log                            |Problems with MAP Legacy                                   |
|Centreon MBI        |cbis                                       |/var/log/centreon-bi/cbis.out                                     |No reports are generated/no emails sent                    |
|                    |                                           |/var/log/centreon-bi/cbis.[date].log                              |Problems generating reports                                |
|                    | centreon-bi-backup-web.sh cron         |/var/log/centreon/centreon-bi-backup-web.log                      |Problems backing up generated reports                      |
|                    | centreon-bi-backup-reporting-server.sh cron |/var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log   |  Problems backing up generated reports                                                          |
|                    | centreon-bi-backup-reporting-server.sh cron |/var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log   |     Problems backing up generated reports                                                       |
|                    | centreon-bi-backup-reporting-server.sh cron |/var/log/centreon-bi/centreon-bi-backup-reporting-server-files.log|        Problems backing up generated reports                                                    |
|                    |centreonBIETL cron                     |/var/log/centreon-bi/centreonBIETL.log                            |The db-content checks sates that the data is not up to date|
|                    | purgeArchivesFiles.php cron               |/var/log/centreon/centreon-bi-archive-retention.log               |Problems purging old reports                               |
|                    | dataRetentionManager.pl cron             |/var/log/centreon-bi/dataRetentionManager.log                     |Problems with retention of ETL data                        |
|Centreon BAM        |                                           |/var/log/php-fpm/centreon-error.log                               |The web interface doesn't work                             |
|                    |                                           |/var/log/centreon-broker/central-broker-master.log                |Inconsistent BA status                                     |

## Poller

|What do you want to debug?         |Process                           |Log file |  Symptoms                                                                                                                          |
|--------------------|---------|--------------------------------------------------|---------|
|Centreon Broker     |         |/var/log/centreon-broker/central-broker-master.log|       |
