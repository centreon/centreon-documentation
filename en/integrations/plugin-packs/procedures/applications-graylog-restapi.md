---
id: applications-graylog-restapi
title: Graylog
---

## Overview

Graylog is a log management software.

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

A Graylog is necessary 
For security reason, you can use Access Tokens and Session Tokens More informations on 'https://docs.graylog.org/en/<graylog version>/pages/configuration/rest_api.html and in the [Configuration](#Configuration)section.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor a Graylog server:

```bash
yum install centreon-plugin-Graylog-Restapi
```

2. On the Centreon Web interface, install the Centreon Plugin-Pack *Graylog* from the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor a Graylog server:

```bash
yum install centreon-plugin-Graylog-Restapi
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

For security reason, you can use *access tokens* or *session tokens*. 
Replace the *USERNAME* field with the token and the *PASSWORD* field with: 
* "token" (acess token) 
* "session" (session token) 

More informations on 
'https://docs.graylog.org/en/<graylog version>/pages/configuration/rest_api.html

Once the host created, you can configure some Macros on the services to filter
information:

| Mandatory | Name           | Description                      |
| :-------- | :------------- | :------------------------------- |
|           | FILTERNODE     | Filter by notification severity  |
|           | FILTERSEVERITY | Filter by node                   |
|           | FILTERCOUNTERS | Filter specific counters         |

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
  --credentials
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

#### 
