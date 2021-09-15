---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this
> section in order to learn about behavior changes or major changes that
> have been made on this version. This will let you know the impact of
> the installation of these versions on the features you use or the
> specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web

### 21.04.5

`14 septembre 2021`

#### Améliorations

- [Resources Status] Add link to performance page in detail panel

#### Correctifs

- [ACL] Fixed missing ACL actions on CLAPI import
- [Configuration] Fixed ineffective massive change on 'Reach API configuration' option on remote server
- [Platform Topology] Fixed an error that occurred when an FQDN was used as parent address
- [UX] Fixed typo in UI

#### Correctifs de sécurité

- [Install] Rights applied to "centreon.conf.php" and "conf.pm"
- [OpenId] Secret tokens obfuscation
- [Resource status] Fixed error based SQLi on resources GET's endpoint

### 21.04.4

`30 juillet 2021`

#### Améliorations

- [Authentication] Improve centreonAuth.SSO.class for OpenId connection

#### Correctifs

- [Administration] LDAP search fails
- [Configuration] Changing a Remote Server's IP address converts it into a simple Poller
- [Configuration] Editing service template removes relations with servicegroups
- [Configuration] Only first servicegroup linked to a service template is exported
- [Core] Unserialize in CentreonUtils is blocked by QualityGate
- [Core] Update copyright date
- [Downtimes] Prevent the user from creating downtimes with start date, end date and duration after 2037
- [Graph] Can't get a graph with autologin key
- [LDAP] Fixed LDAP auto-sync is always skipped
- [LDAP] LDAP's My account issue
- [Platform Topology] CLAPI's add Instance doesn't add a poller into the platform_topology table
- [Platform Topology] JSON Schema isn't validated in the POST endpoint
- [Platform Topology] Removed unused variable in registerServerTopology.sh
- [Resources Status] Criteria drop down lists do not fully display the available items
- [Resources Status] Make groups chips clickable
- [i18n] Fix typo in error message

### 21.04.3

`28 juin 2021`

#### Améliorations

- [Core] Implement API log mechanism
- [Graph] Diverse export size options

#### Correctifs

- [APIv2] Use poller's page ACL rights on Topology API endpoints
- [Downtime] Can not remove/delete periods when configuring recurrent downtime
- [Graph] Anchor point does not follow line path for stacked graphs
- [Platform Topology] Update Exception handling

#### Correctifs de sécurité

- [Configuration] Input sent to unserialize() are not sanitized
- [Configuration] SQL Injection on commands
- [Configuration] SQL Injection on host dependency
- [Configuration] SQL Injection on hostgroup dependency
- [Configuration] SQL Injection on metaservice
- [Configuration] SQL Injection on metaservice dependency
- [Configuration] SQL Injection on service categories
- [Configuration] SQL Injection on service dependency
- [Configuration] SQL Injection on servicegroup
- [Configuration] SQL Injection on servicegroup dependency
- [Configuration] SQL Injection on timeperiod
- [Configuration] XSS Stored on checks command
- [Core] Manage security acknowledgement

### 21.04.2

`7 juin 2021`

#### Correctifs

- [APIv1] Cannot send external commands anymore
- [APIv2] Can not authenticate using API when database name and database username are different from default
- [APIv2] DELETE downtime on host not functionnal
- [APIv2] Unable to use v2 api (internal server error)
- [Administration] Broker statistics for pollers are not shown
- [Anomaly] host_id is null is stream connector flow
- [Configuration] Change default values for Centreon Engine
- [Configuration] New Logger conf is not exported to distant pollers well
- [Configuration] Unable to replace 127.0.0.1 by real IP in poller form when already saved in platform_topology
- [Configuration] InfluxDB configuration columns are deleted in Broker form
- [Configuration] Wrong broker configuration generated when Anomaly Detection module is installed
- [Core] Avoid 404 redirection
- [Install] Cannot update when you have no metaservices
- [LDAP] Adding new user from LDAP results in Request Entity Too Large error
- [Purge] Script can't drop several partitions
- [Reporting] Dashboard can't display reporting for service (query too long)
- [Resources Status] "Filter by Host" filter is not emptied between searches
- [Resources Status] Action ACL not working
- [Resources Status] Apply ACL in command line block
- [Resources Status]  Increase font size of Timestamp in graph

#### Correctifs de sécurité

- [Administration] Import of JS in image files
- [Administration] Insecure media file upload
- [Administration] SQL Injection on ACL actions
- [Administration] SQL Injection on ACL resources
- [Administration] SQL Injection on reload ACL
- [Configuration] SQL Injection on MediaWiki
- [Configuration] SQL Injection on SNMP trap manufacturer
- [Configuration] SQL Injection on poller form
- [Configuration] Unserialize() are not sanitized in Centreon Broker wizard
- [Configuration] Unserialize() are not sanitized in poller wizard
- [Configuration] XSS reflected on Graph performance curves
- [Configuration] XSS reflected on SNMP trap
- [Configuration] XSS reflected on internal API broker configuration
- [Graphs] SQL Injection on Graph component templates
- [Graphs] SQL Injection on Graph generate image
- [Graphs] SQL Injection on Graph periods
- [Graphs] SQL Injection on Graph split
- [Reporting] SQL Injection on reporting export
- [Install] Packaging, remove . gitignore files

#### Performance

- [ACL] ACL are computed every time for BV
- [Generation] Bulk insert in index_data during config generation
- [Purge] Purge of index_data is taking too long because of suboptimal SQL query

### 21.04.1

`11 mai 2021`
#### Correctifs

- [Configuration] Default Centreon Engine value is different from the tooltip, and affects performance
- [Platform Topology] Register a remote / poller to central with proxy
- [Resources Status] Click anywhere in the metric tile within the legend to select metrics to display in graphs
- [Resources Status] Custom filters cannot be listed from the drop down menu after upgrade to 21.04
- [Resources Status] Graph export does not work correctly on Safari and Firefox
- [Resources Status] Graph units are not properly displayed when graphs have a 2 way scale
- [Resources Status] Jagged disposition when multiple graphs displayed in extended host panel
- [Resources Status] Listing refresh gets slower as the number of items per page increases

#### Performances

- Replace "WITH RECURSIVE" MySQL calls with PHP-based recursion loops

#### Correctifs de sécurité

- [Configuration] SQL injection in additional user information

### 21.04.0

#### Améliorations

- [Configuration] Define new logging options for Centreon Broker
- [Resources Status] Optimized overall listing to display ~50% more alerts
- [Resources Status] Added new columns (active/passive, notifications on/off and others) and possibility to select and re-order displayed columns
- [Resources Status] Added many filtering options (including Monitoring Server)
- [Resources Status] Added Meta-Services to types of resources included
- [Resources Status] All page parameters are now saved within local storage and URL
- [Resources Status] The detail panel is now resizable
- [Resources Status] Revamped the Graph panel overall, mainly:
    - Added Datetime pickers for start and end of period
    - Added zoom feature via in-graph selection
    - Added time translation to move forward and backward (by half the displayed period)
    - Added option to display events (downtimes, acknowledgements, etc.) within graph
    - Removed metrics values within tooltips
    - Added metrics values display in legend on graph hover
    - Added metrics mean, max and average display in legend otherwise

#### Documentation

- Added a chapter to enable firewalld and rules example to improve security
- Added a chapter to enable Fail2ban to improve security
- Added a chapter to move a collector from one server to another

#### Correctifs de sécurité

- Add SELinux packages

#### Performances

- Move to PHP 7.3
- Move to MariaDB 10.5

## Centreon Engine

### 21.04.3

`20 juillet 2021`

#### Correctifs

- Les notifications de récupération ne sont pas envoyées si centengine a été interrompu durant l'incident
- Centengine envoie les statuts de services en double lorsqu'un contrôle immédiat est planifié
- Problèmes de compilation sur Raspberry Pi

### 21.04.2

`4 juin 2021`

> Cette version nécessite Centreon Broker 21.04.1, Centreon Clib 21.04.1 et Centreon-Connector 21.04.1 ou supérieur.

#### Correctifs

- Engine consomme 100% de CPU quand `check_period` est `none`
- Le build d'engine/broker a été migré de Bintray vers ConanCenter
- Centengine peut se figer lors de l'arrêt

### 21.04.1

`28 avril 2021`

#### Correctifs

-  Bad memory access on hostgroupname/servicegroupname macros

### 21.04.0

- Lorsqu'utilisé avec les centreon-connectors, Engine pouvait crasher lorsqu'on l'arrêtait. Cette
nouvelle version fixe ce problème.
- Possibilité de soumettre des commandes externes via gRPC.

> **Warning:** Les commandes externes via gRPC sont proposées en version beta. L'API peut encore changer
dans une prochaine version.

## Centreon Broker

### 21.04.3

`30 Août 2021`

#### Correctifs

- Fixed a deadlock in broker with a reversed TCP output when cbd receives SIGTERM
- Fixed "MySQL server has gone away" error causing failure in BAM events computation, and data loss in BAM availability statistics

### 21.04.2

`20 juillet 2021`

#### Correctifs

- Un *deadlock* pouvait se produire lorsque broker était arrêté immédiatement après son démarrage
- Un *core dump* pouvait apparaître lorsque centengine était stoppé
- Parfois centengine ne parvenait pas à se reconnecter au broker central
- Quand beaucoup de collecteurs essayent de se connecter au même moment au broker central, il arrive que les derniers ne puissent pas se connecter
- Les plages de temps n'étaient pas parsées correctement lorsqu'elles se terminaient par `\r` ou `\n`
- Problèmes de compilation sur Raspberry Pi
- Les requêtes TLS n'étaient pas correctement traitées par GNUTLS sur RedHat 8
- La *factory* de *streams* Broker ne pouvait pas créer des flux avec des configurations différentes
- Un message d'erreur apparaissait dans les logs à la création de nouvelles Activités Métier BAM
- Une section `loggers` vide ou à `null` dans la configuration entraînait un crash de `cb_mod`

#### Améliorations

- Les logs de *debug* `BBDO serialized events` sont désormais des logs de niveau *trace*
- Un nouveau paramètre a été ajouté à broker permettant de sélectionner un `socket` UNIX MySQL par son nom

### 21.04.1

`4 juin 2021`

#### Correctifs de sécurité

- Blocage des injections SQL depuis des *custom variables*

#### Correctifs

- Le build d'engine/broker a été migré de Bintray vers ConanCenter
- Les metaservices utilisés comme KPI n'impactaient pas les activités métier (Centreon BAM)
- L'impact *CRITICAL* était appliqué plutôt que l'impact *UNKNOWN* lorsqu'une BA était utilisée comme KPI d'une autre BA (Centreon BAM)
- Le redémarrage de Broker était ralenti par des requêtes sous-optimales relatives aux arrêts prévus et aux commentaires

### 21.04.0

> **Problèmes connus**
> * Streams broker: un même paramètre utilisé dans plusieurs sorties d'un même flux broker ne peut avoir qu'une seule valeur (la dernière exprimée l'emporte).
> * BAM: les impacts de KPIs de type Meta-Service ne sont pas correctement calculés. Un correctif sera publié très prochainement.
> * BAM: les impacts de KPIs de tpe BA au statut UNKNOWN ne sont pas correctement calculés. Un correctif sera publié très prochainement.

#### Nouveaux logs broker

- Nouveaux logs avec un nouveau format, les timestamps sont maintenant remplacés par de vraies dates.

> **Warning:** Vous pouvez toujours constater des logs commençant par des timestamps car les anciens
logs existent toujours. Pour ne plus les avoir, il faut les désactiver.

```log
[2021-04-16 13:49:06.781] [core] [info] Clearing old connections
[2021-04-16 13:56:10.985] [core] [info] main: configuration update requested
```

- New log config options, with a different log level for `core`, `config`, `sql`, `processing`, `perfdata`, `bbdo`, `tcp`, `tls`, `lua`, `bam`.
- Old logs are still supported, but you are encouraged to abandon them.

#### Autres améliorations

- Support of UInt64 for `id` column of `index_data` table: fixes issues on platforms having a large amount of metrics.

> **Warning:** this change needs cbd service(s) to be stopped during the upgrade to 21.04.0 and all "queue" and "unprocessed" files must be removed.

- Improvement of the acknowledgement of events when broker is shutting down.

## Centreon CLib

### 21.04.2

`20 juillet 2021`

#### Correctifs

- Les librairies sont chargées en mode `lazy`.

### 21.04.1

`4 juin 2021`

#### Améliorations

- Compilation avec C++14 et Conan-Center (le service Bintray ayant été fermé).

### 21.04.0

Nouvelle version majeure.

## Centreon Connector Perl

### 21.04.2

`20 juillet 2021`

- Compatibilité avec centreon-clib 21.04.2

### 21.04.1

`4 juin 2021`

- Le build d'engine/broker a été migré de Bintray vers ConanCenter.

### 21.04.0

- Compatibilité avec les autres composants 21.04.

## Centreon Connector SSH

### 21.04.2

`20 juillet 2021`

- Compatibilité avec centreon-clib 21.04.2

### 21.04.1

`4 juin 2021`

- Le build d'engine/broker a été migré de Bintray vers ConanCenter.

### 21.04.0

- Compatibilité avec les autres composants 21.04.

## Centreon Gorgone

### 21.04.2

`September 7, 2021`

#### Améliorations

- Add endpoint to ask gorgoned to resync pollers configuration
- Add Centreon platform audit module
- Allow to define the list of the commands that can be run through the Action module

#### Correctifs

- Fixed incorrect error handling when a poller in pull mode is never connected
- Fixed only returns no_log when asking associated logs of a token through API

### 21.04.1

`10 juin 2021`

#### Correctifs

- [Anomaly] Le host ID était null dans les filtres de détection.

### 21.04.0

- [Core] Better congestion management for communication
