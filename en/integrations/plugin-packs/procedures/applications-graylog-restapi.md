---
id: applications-graylog-restapi
title: Graylog Rest API
---

## Overview

Graylog is a leading centralized log management solution built to open standards
for capturing, storing, and enabling real-time analysis of terabytes of machine
data.

The Centreon Plugin-Pack *Applications-Graylog-Restapi* aims to collect the 
number of system notifications per serverity and the number of query matches for
specific queries by requesting the dedicated built-in RestAPI.

## Plugin-Pack assets

### Monitored objects

* Lucene queries
* System notifications

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Query-->

| Metric name                | Description               | Unit   |
| :------------------------- | :------------------------ | :----- |
| graylog.query.match.count  | Number of query matches   | Count  |

<!--System-Notifications-->

| Metric name                                 | Description                                       | Unit   |
| :------------------------------------------ | :------------------------------------------------ | :----- |
| graylog.system.notifications.total.count    | Total number of system notifications              | Count  |
| graylog.system.notifications.normal.count   | Number of system notifications (normal severity)  | Count  | 
| graylog.system.notifications.urgent.count   | Number of system notifications (urgent severity)  | Count  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

An account with the "Reader" role is sufficient to access system
notifications but an admin account is needed to perform the Lucene queries 
on the Graylog server.

More information on the official Graylog site:
https://docs.graylog.org/en/latest/pages/configuration/rest_api.html.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor a Graylog server:

```bash
yum install centreon-plugin-Applications-Graylog-Restapi
```

2. On the Centreon Web interface, install the Centreon Plugin-Pack *Graylog* from the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor a Graylog server:

```bash
yum install centreon-plugin-Applications-Graylog-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-graylog-restapi
```

3. On the Centreon Web interface, install the Centreon Plugin-Pack *Graylog* from the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Graylog-Restapi-custom* template and configure all the mandatory Macros :

| Mandatory | Name         | Description                                                                              |
| :-------- | :----------- | :--------------------------------------------------------------------------------------- |
| X         | USERNAME     | Username for authentication                                                              |
| X         | PASSWORD     | Password for authentication                                                              | 
|           | PROTOCOL     | Protocol (default: 'http')                                                               |
|           | PORT         | API port (default: '9000)                                                                |
|           | EXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag or any header) |

Once the Host created, you can configure some Macros on the Services to filter
information:

| Mandatory | Name           | Description                      |
| :-------- | :------------- | :------------------------------- |
|           | FILTERNODE     | Filter by notification severity  |
|           | FILTERSEVERITY | Filter by node                   |

## FAQ

### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the Centreon Plugin installed, you can test it directly in the CLI of the
Centreon poller by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \
  --plugin=apps::graylog::restapi::plugin \
  --mode=query \
  --hostname=10.0.0.1 \
  --username='username' \
  --password='password' \
  --query='centreon'
```

Expected output:

```bash
OK: current queue messages : 10 | 'graylog.query.match.count'=10;;;0;
```

The available thresholds as well as all of the options that can be used with
this Plugin can be displayed by adding the ```--help``` parameter to the 
command:

```bash
/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \
  --plugin=apps::graylog::restapi::plugin \
  --mode=query \
  --query='centreon'
  --help
```

You can display all of the modes that come with the Plugin with the command
below:

```bash
/usr/lib/centreon/plugins//centreon_graylog_restapi.pl \
  --plugin=apps::graylog::restapi::plugin \
  --list-mode
```

### Why do I get the following error:

#### ```UNKNOWN: 403 Forbidden``` ?

The account provided does not have sufficient permissions to perfom the required
actions throught the API.