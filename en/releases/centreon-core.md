---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web release notes

### 20.10.1

#### Enhancements

- [API] Improve registration script
- [Performance] Disable UI notification mechanism if not needed by user
#### Bug fixes

- [API] Rework POST generated API request for PlatformTopology
- [API] Service groups search not working
- [Administration] "show deprecated pages" option does not work anymore
- [Administration] 'options' table for centreon database is sometimes empty
- [Configuration] Radio buttons for "InfluxDB - Storage - InfluxDB" output not working properly for Centreon Broker form
- [Core] Perl lib db query bad looping parameters
- [Core] Too much rows in extended_service_informations tables
- [Event View] Cannot search with regex using "+" character
- [Event logs] Inoperative filters when exporting
- [Graphs] Performance graph legend does not update dynamically
- [Reporting] Dashboard won't build when having service by hostgroup
- [Resources Status] Cannot search multiple times in hostgroup filter
- [Resources Status] Infinite scroll + refresh button duplicates events in timeline
- [Resources Status] Services listing blinking in details panel
- [Resources Status] Timeline tab content blinks while browsing resources

#### Security fixes

- [Apache] Lack of click diversion protection (Clickjacking)
- [Core] Update moment.js library

### 20.10.0

> Known behaviours:
>
>   - If a Central is configured to communicate with a Remote Server using
>     SSH, reloading the configuration will raise the following error in
>     Gorgone's log:
>
>     ```text
>     ERROR - [sshclient] Unsupported action 'ADDIMPORTTASKWITHPARENT'
>     ```
>
>     This is due to the fact that the data export/import process between
>     those two servers does not call the Remote Server API (the HTTP
>     flow is then not needed anymore).
>
>     The call is now made through Gorgone, as for the files copy action,
>     and requires the communication to use ZMQ.

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
- [Remote Server] Replace HTTP flow by Gorgone between Central and Remote Servers

## Centreon Engine release notes

### 20.10.0

> Known behaviours:
>
>   - If Engine on a Poller or Remote Server is not upgraded to 20.10,
>     configuration files copied from an upgraded Central by Gorgone using ZMQ
>     communication will not be readable by Engine process, resulting to this
>     error in Engine log:
>
>     ```text
>     Error: Parsing of global configuration failed: Can't open file '/etc/centreon-engine/centengine.cfg'
>     ```
>
>     This is due to stricter rights on those files.
>
>     As always, we **strongly recommend** to upgrade all components to
>     match the Central server's version.
>
>     However, during an upgrade process, it is possible to manually
>     add the user *centreon-engine* to the *centreon-gorgone* group with
>     the following command:
>
>     ```shell
>     usermod -a -G centreon-gorgone centreon-engine
>     ```

#### Bugfixes

- Contains all fixes up to version 20.04.7

## Centreon Broker release notes

### 20.10.1

#### Bugfixes

*Build*

Build on Centos8 fixed.

*Retention files*

The splitter class is now thread safe and does not need external locks
anymore. It is also far less strict and allows some reading and some
writing at the same time.

*TCP*

Writing on a tcp stream could slow down in case of many retention files. The
issue was essentially in the flush internal function.

#### Enhancements

*TCP connections*

TCP streams are really faster, especially when Broker has retention
files and there are a lot of traffic.

*SQL and storage streams*

Those streams have several improvements:

    -   Events exchanges are really faster, especially when Broker has
        retention files.
    -   Several queries have been changed to insert data in bulk, it is
        the case for custom variables and metrics.
    -   There are cases where those streams could crash that have been
        also fixed.

*Statistics*

The thread pool has now its own statistics. For now, we have two
informations that are the number of threads it contains and its latency
in milliseconds that is the duration we have to wait to see a task
executed. We post a task to the thread pool at time T1, it is executed
by the thread pool at time T2, the latency is T2 - T1.

*Command line argument*

It is now possible to set the cbd pool size directly on the command line
with the –pool\_size X argument or -s X.

### 20.10.0

> Known behaviours:
>
>   - If Broker on a Poller or Remote Server is not upgraded to 20.10
>     (or with a version prior to 20.04.9), the communication between said
>     Poller or Remote Server and an upgraded Central may not work.
>
>     As always, we **strongly recommend** to upgrade all components to match
>     the Central server's version.
>
>     However, during an upgrade process, communication can be maintained
>     by making sure Broker's configurations match the following conditions:
>
>       - *TLS encryption* and *compression* are either set to
>         *Auto* or *No* on Central input,
>       - *TLS encryption* and *compression* are either set to
>         *Auto* or *No* on Poller or Remote Server output.
>
>     If the reversed connection mode (*one peer retention*) is used,
>     the Broker upgrade is mandatory.

#### Bugfixes

- Contains all fixes up to version 20.04.9

## Centreon Gorgone release notes

### 20.10.0

#### Bugfixes

- Contains all fixes up to version 20.04.6

#### Enhancements

- [module] Add new core/pipeline module
- [module] Add new centreon/judge module
- [core] Add listener system
- [autodiscovery] Refacto centreon/autodiscovery module to use listener system
- [autodiscovery] Add service discovery in centreon/autodiscovery module
