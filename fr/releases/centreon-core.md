---
id: centreon-core
title: Centreon Core
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne **Centreon Core**.

> Il est important de mettre à jour en utilisant la documentation adéquate de
> mise à jour et de lire attentivement les notes de mise à jour afin d'être au
> courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions
commerciales, vous pouvez vous rendre sur notre
[Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web release notes

### 20.10.0

> Comportements connus:
>
> -   Si un Central est configuré pour communiquer avec un Remote Server
>     à l'aide de SSH , le rechargement de la configuration déclenchera
>     l'erreur suivante dans le log de Gorgone:
>
>     ```text
>     ERROR - [sshclient] Unsupported action 'ADDIMPORTTASKWITHPARENT'
>     ```
>
>     Cela est dû au fait que le processus d'exportation/importation
>     de données entre ces deux serveurs n'appelle pas l'API du Remote
>     Server (le flux HTTP n'est alors plus nécessaire).
>
>     L'appel se fait maintenant via Gorgone, comme pour la copie des
>     fichiers, et nécessite que la communication utilise ZMQ.

#### Enhancements

- [API] Possibility to Register servers (Remote Server, Poller, Centreon Map)
- [Configuration/Wizard] Add possibility to select registered poller
- [Authentication] Replace Keycloak to generic OAuth2 / OpenId Connect
- [Event Logs] Display anomaly detection as regular service
- [Monitoring/Resources Status] Add shortcuts for hosts and services details
- [Monitoring/Resources Status] Add timeline for hosts and services details
- [Monitoring/Resources Status] Be able to filter on status output
- [Monitoring/Resources Status] Add possibility to save/manage filters
- [Monitoring/Resources Status] Add possibility to submit result for resources
- [Monitoring/Resources Status] Redirect all realtime links to Resources Status page
- [Remote Server] Replace HTTP flow by gorgone between Central and Remote Servers

## Centreon Engine release notes

### 20.10.0

> Comportements connus:
>
>   - Si Engine sur un Poller ou un Remote Server n'est pas mis à jour en
>     20.10, les fichiers de configuration copiés depuis un Central à jour
>     par Gorgone utilisant une communication ZMQ ne pourront pas être
>     lus par le processus Engine, avec l'erreur suivante dans les logs:
>
>     ```text
>     Error: Parsing of global configuration failed: Can't open file '/etc/centreon-engine/centengine.cfg'
>     ```
>
>     Cela est dû à des droits plus stricts sur ces fichiers.
>
>     Comme toujours, nous **recommandons fortement** de mettre à jour
>     tous les composants en adéquation avec la version du Central.
>
>     Cependant, le temps de la mise à jour, il est possible d'ajouter
>     manuellement l'utilisateur *centreon-engine* au groupe
>     *centreon-gorgone* avec la commande suivante :
>
>     ```shell
>     usermod -a -G centreon-gorgone centreon-engine
>     ```

#### Bugfixes

- Contient tous les correctifs jusqu'à la version 20.04.7

## Centreon Broker release notes

### 20.10.1

#### Bugfixes

-   Build on Centos8 fixed.
-   The splitter class is now thread safe and does not need external
    locks anymore. It is also far less strict and allows some reading
    and some writing at the same time.

#### Enhancements

-   TCP streams are really faster, especially when Broker has retention
    files and there are a lot of traffic.

-   Those streams have several improvements:

    -   Events exchanges are really faster, especially when Broker has
        retention files.
    -   Several queries have been changed to insert data in bulk, it is
        the case for custom variables and metrics.
    -   There are cases where those streams could crash that have been
        also fixed.

-   The thread pool has now its own statistics. For now, we have two
    informations that are the number of threads it contains and its
    latency in milliseconds that is the duration we have to wait to see
    a task executed. We post a task to the thread pool at time T1, it is
    executed by the thread pool at time T2, the latency is T2 - T1.

-   It is now possible to set the cbd pool size directly on the command
    line with the –pool\_size X argument or -s X.

### 20.10.0

> Comportements connus:
>
>   - Si Broker sur un Poller ou un Remote Server n'est pas mis à jour en
>     20.10 (ou utilisant une version antérieur à 20.04.9), la
>     communication entre ces Pollers ou Remote Servers et un Central
>     à jour peut ne pas fonctionner.
>
>     Comme toujours, nous **recommandons fortement** de mettre à jour
>     tous les composants en adéquation avec la version du Central.
>
>     Cependant, le temps de la mise à jour, la communication peut être
>     maintenue en s'assurant que les configurations des Brokers respectent
>     les conditions suivantes :
>
>       - le *chiffrement TLS* et la *compression* sont paramétrés à *Auto*
>         ou *No* sur l'entrée du Central,
>       - le *chiffrement TLS* et la *compression* sont paramétrés à *Auto*
>         ou *No* sur la sortie du Poller ou Remote Server.
>
>     Si le mode de connexion inversé (*one peer retention*) est utilisé,
>     la mise à jour de Broker est obligatoire.

#### Bugfixes

- Contient tous les correctifs jusqu'à la version 20.04.9

## Centreon Gorgone release notes

### 20.10.0

#### Bugfixes

- Contient tous les correctifs jusqu'à la version 20.04.6

#### Enhancements

- [module] Add new core/pipeline module
- [module] Add new centreon/judge module
- [core] Add listener system
- [autodiscovery] Refacto centreon/autodiscovery module to use listener system
- [autodiscovery] Add service discovery in centreon/autodiscovery module
