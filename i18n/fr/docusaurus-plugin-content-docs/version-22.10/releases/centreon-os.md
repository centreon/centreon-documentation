---
id: centreon-os
title: Centreon Open Source
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne **Centreon Open Source**.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, vous pouvez vous rendre sur
notre [Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 22.10.0

#### Enhancements

- [ACL] ACLs on actions are now updated in real time for connected users
- [ACL] "Read/Write" Menu access ACL regarding Poller configuration have been split into two available actions: "Create and edit" and "Delete"
- [API] Added an endpoint to perform all web updates
- [Authentication] Improved authentication via OpenID Connect by adding conditions
- [Authentication] Improved contact groups management via OpenID Connect:
  - Manual management of relationships between a user and contact groups
  - Automatic management of relationships between a user and contact groups based on values retrieved from the identity provider
- [Authentication] Improved roles management via OpenID Connect:
  - Manual management of relationships between a user and ACL groups
  - Automatic management of relationships between a user and ACL groups based on identity provider values
- [Install] Addition of dependency management between modules during installation, update and deletion
- [Install] Improved error handling during installation
- [Install] Removed "Centreon Web Directory" parameter and use Apache configuration instead
- [UI] Improved Centreon light and dark themes
- [UI] Relabeled and improved tooltips for some fields in the Hosts, Host Templates, Host Groups, Services and Service Templates configuration forms
- [UI] Reworked the banner to be more responsive
- [UX] Changing themes is now possible by clicking on the profile icon
- [UX] The quick export button is now available by default for all users that have the admin privilege or the required ACL action access. Deploying a configuration is now simpler for all users.
- [Configuration] Improved the default Engine logger options for newly installed central servers and new pollers created with the wizard
- [Configuration] New Broker input/output stream types available, designed to support the new gRPC stream capability of Broker, but that can also be used for the legacy BBDO over TCP protocol:
  - BBDO Server: configures a server input or output, displaying only relevant fields for this purpose
  - BBDO Client: configures a client input or output, displaying only relevant fields for this purpose
- [Configuration] Some obsolete parameters have been removed from the Engine configuration menu
- [Optimization] The "conf changed" flag in the Poller configuration menu now relies on a faster database query, improving the time to display the page


#### Breaking changes

> The configuration of authorizations via the OpenID Connect protocol has evolved. Automatic addition to a contact
> group and role management have been improved. It is necessary to review your OpenID Connect configuration.

## Centreon Collect

### 22.10.0

#### Centreon Engine

##### Enhancements

###### Anomaly Detection improvements

- Recheck has been implemented for Anomaly Detection services, retrieving the actual value of the metric to reevaluate the AD service's status
- Downtimes of regular services are now propageted to related Anomaly Detection service(s)

###### Settings improvements

- Change the log level of some notification log messages
- Observations on platforms in the field showed us that the default maximum number of queries per transaction (10000) was too high and caused too much delay, so we set it 2000 by default

###### Code improvements

- Improved the management of `timed_events` objects
- Improved the memory management of downtimes
- Calls to `atoi()` C function have been replaced by more secured functions

#### Centreon Broker

##### Enhancements

###### Imrpoving communication

- Two new broker streams are available, meant to provide simpler configuration and support of gRPC protocol.
- It is now possible to limit the maximum total size of Broker retention files using the `event_queues_total_size` global parameter
- The default `retry_interval` has been changed from 60 to 15, in the configuration WUI as well as in the source code for a shorter time to reconnect

###### gRPC API features

- The log levels can be accessed and changed without reloading thanks to `GetLogInfo {}` and `SetLogLevel {"logger": "<logger>", "level": "<log level>"}` gRPC commands
- Any residues of a deleted poller can be removed definitely thanks to `RemovePoller {}` gRPC command

###### Code improvements

- Calls to `atoi()` C function have been replaced by more secured functions

## Centreon Gorgone

### 22.10.0

#### Enhancements

## Centreon High-Availability

### 22.10.0

- Compatibility with other 22.10 components.

## Centreon DSM

### 22.10.0

- Compatibility with other 22.10 components.

## Centreon Open Tickets

### 22.10.0

- Compatibility with other 22.10 components.
