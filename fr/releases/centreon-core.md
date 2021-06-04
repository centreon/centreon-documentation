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

`11 mai 2021`

### 21.04.1

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

### 21.04.1

`4 juin 2021`

#### Sécurité

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

## Centreon Connector Perl

### 21.04.1

`4 juin 2021`

- Le build d'engine/broker a été migré de Bintray vers ConanCenter.

### 21.04.0

- Compatibilité avec les autres composants 21.04.

## Centreon Connector SSH

### 21.04.1

`4 juin 2021`

- Le build d'engine/broker a été migré de Bintray vers ConanCenter.

### 21.04.0

- Compatibilité avec les autres composants 21.04.

## Centreon Gorgone

### 21.04.0

- [Core] Better congestion management for communication
