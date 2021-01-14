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

### 20.10.2

> Known behaviours:
>
> -   The "url notes" and "url actions" links now visible in the "Resources Status"
>     page do not translate macros, for example $HOSTNAME$.

#### Enhancements

- [API] Add normalizers for data found in concordanceArray
- [API] Get topology of servers of a Centreon Platform
- [Configuration] Add a special variable for trap OID
- [Configuration] Add pool size parameter in configuration for Centreon Broker
- [Resources Status] Add alias & fqdn in host detail panels
- [Resources Status] Add URL link button from host and service extended information configuration

#### Bug fixes

- [Authentication] New LDAP configurations are broken
- [CLAPI] Export does not export default contactgroup linked to a LDAP configuration
- [Configuration] PHP Warning while creating a Centreon Engine configuration
- [Configuration] Unable to save log level in Centreon Engine form
- [Knowledge Base] Access to mediawiki is very slow
- [Resources Status] Display issue when resource has a configured icon
- [Resources Status] Incorrect default downtime duration
- [Resources Status] Useless impacted_resources_count property

#### Security fixes

- [Apache] Support for the HTTP TRACE
- [Apache] Uncorrect HTTPS declaration of SSLCipherSuite in Centreon example file
- [Authentication] Reach Centreon Front-end parameter ineffective
- [Configuration] Cross-site Scripting (XSS) Stored/Persistent in Connectors & commands form
- [Configuration] Cross-site Scripting (XSS) Stored/Persistent in Contact Groups form
- [Configuration] XSS in updateContactParam.php & commonJS.php
- [Media] Unrestricted file upload

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

### 20.10.1

#### Bugfixes

*Stalking option*

The stalking option works again, it has been fixed. Make sure you are not
enabling volatile option at the same time to really get an output
stalking.

*Macros filters*

Macros can be filtered. This was possible before and there was a
regression breaking this functionality. So now, we can activate the
macros filtering and then we can specify which macros to send to broker.

*Notifications*

Host/service status field 'Last Notification' was filled when
state was HARD even if no notification is configured nor sent.

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

### 20.10.2

> Known behaviours:
>
>   - If TLS encryption is configured to use private key/certificate couple
>     for IPv4/6 input/output endpoints, **both ends must be updated**
>     to ensure communication.
>
>   - If you use Centreon MAP with TLS encryption, make sure to **update MAP
>     server** to version >= 20.10.2.

#### Bugfixes

*TLS*

Credentials were not loaded by the TLS connector anymore. This is fixed with this
new version.

*Custom variables*

They were updated several times in the database. It is fixed now.

*Build*

GnuTLS requirement now matches compilation version.

*BAM*

Reporting events were not stored into database because of truncated
Business Activities names causing *duplicate entry* errors.

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

-   Events exchanges are much faster, especially when Broker has
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
>     - *TLS encryption* and *compression* are either set to
>       *Auto* or *No* on Central input,
>     - *TLS encryption* and *compression* are either set to
>       *Auto* or *No* on Poller or Remote Server output.
>
>     If the reversed connection mode (*one peer retention*) is used,
>     the Broker upgrade is mandatory.

#### Bugfixes

- Contains all fixes up to version 20.04.9

## Centreon Gorgone release notes

### 20.10.1

#### Bug fixes

- [proxy] gorgone-proxy processes stucked when stopping gorgoned
- [core] Rare case of database handler wrongly instantiated due to race
  condition issue
- [core] Hardened management of message encoding/decoding
- [autodiscovery] Handle Centreon API modules version endpoint empty
  response
- [autodiscovery] Uncatched error when reaching Host Discovery global timeout
- [autodiscovery] Discovered services state flapped between enabled and
  disabled
- [autodiscovery] Service discovery email sending not working properly
  when having services with space in their name
- [autodiscovery] Service discovery email sending not working with groups
  of contacts

#### Enhancements

- [proxy] Force TCP reconnection after 3 ping timeout
- [zmqclient] ID is not necessary anymore in end targets configuration
  (ie Pollers)

### 20.10.0

#### Bugfixes

- Contains all fixes up to version 20.04.6

#### Enhancements

- [module] Add new core/pipeline module
- [module] Add new centreon/judge module
- [core] Add listener system
- [autodiscovery] Refacto centreon/autodiscovery module to use listener system
- [autodiscovery] Add service discovery in centreon/autodiscovery module
