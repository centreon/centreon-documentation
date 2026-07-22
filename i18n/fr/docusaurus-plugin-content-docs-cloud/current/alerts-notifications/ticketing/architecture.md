---
id: ticketing-advanced-architecture
title: Architecture et débuggage d'Open Tickets
description: Schéma et référence des fichiers de logs pour déboguer le fonctionnement d'Open Tickets à travers les composants Centreon
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Schéma

![diagramme d'architecture](../../assets/alerts/ticketing/open_ticket_architecture.png)

## Débuggage

| Étapes | Processus | Log utiles |
| -- | -- | -- |
| Un utilisateur ouvre le ticket depuis l'interface | php-fpm | /var/log/php-fpm.log (/var/log/php**X.Y**-fpm.log pour debian), /var/log/centreon/sql-error.log, console du navigateur |
| Le ticket est ouvert auprès de l'outil ITSM | php-fpm | /var/log/php-fpm.log (/var/log/php**X.Y**-fpm.log pour debian), /var/log/centreon/sql-error.log, log de l'outil ITSM |
| Les informations du ticket sont enregistrées dans la base de données et le numéro de ticket est transmis au démon gorgoned du central par le biais de commandes externes (selon les configurations : ACKNOWLEDGE_[HOST\|SERVICE]_PROBLEM, SCHEDULE_FORCED_[HOST\|SERVICE]_CHECK et CHANGE_CUSTOM_[HOST\|SVC]_VAR) | php-fpm | /var/log/php-fpm.log (/var/log/php**X.Y**-fpm.log pour debian), /var/log/centreon/sql-error.log, /var/log/centreon-gorgone/gorgoned.log |
| Gorgone du central transmet les commandes externes au gorgone du collecteur concerné | gorgoned (central et collecteur) | /var/log/centreon-gorgone/gorgoned.log (central et collecteur) |
| Gorgone du collecteur transmet les commandes externes au démon centengine | gorgoned, centengine | /var/log/centreon-gorgone/gorgoned.log, /var/log/centreon-engine/centengine.log |
| le démon centengine du collecteur transmet le résultat des commandes externes au démon cbd du central | centengine (collecteur), cbd (central) | /var/log/centreon-engine/centengine.log (collecteur), /var/log/centreon-broker/central-broker.log (central) |
| le démon cbd enregistre les résultats des commandes externes dans la base de données | cbd | /var/log/centreon-broker/central-broker.log |

