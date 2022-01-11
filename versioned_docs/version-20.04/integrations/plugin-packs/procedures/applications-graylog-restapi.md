---
id: applications-graylog-restapi
title: Graylog
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Graylog is a leading centralized log management solution built to open standards
for capturing, storing, and enabling real-time analysis of terabytes of machine
data.

The Centreon Plugin-Pack *Graylog* aims to collect the 
number of system notifications per severity and the number of query matches for
specific queries by requesting the dedicated built-in RestAPI.

## Plugin-Pack assets

### Monitored objects

* Lucene queries
* System notifications

### Monitored metrics

<Tabs groupId="sync">
<TabItem value="Query" label="Query">

| Metric name                | Description               | Unit   |
| :------------------------- | :------------------------ | :----- |
| graylog.query.match.count  | Number of query matches   | Count  |

</TabItem>
<TabItem value="SystemNotifications" label="SystemNotifications">

| Metric name                                 | Description                                       | Unit   |
| :------------------------------------------ | :------------------------------------------------ | :----- |
| graylog.system.notifications.total.count    | Total number of system notifications              | Count  |
| graylog.system.notifications.normal.count   | Number of system notifications (normal severity)  | Count  | 
| graylog.system.notifications.urgent.count   | Number of system notifications (urgent severity)  | Count  |

</TabItem>
</Tabs>

## Prerequisites

A service account has to be created on the Graylog server:
the "Reader" role is sufficient to access system notifications
but an admin account is needed to perform the Lucene queries on the Graylog server.

More information on the official Graylog site:
https://docs.graylog.org/en/latest/pages/configuration/rest_api.

## Installation

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Install the Centreon Plugin package on every poller expected to monitor a Graylog server:

```bash
yum install centreon-plugin-Applications-Graylog-Restapi
```

2. On the Centreon Web interface, install the Centreon Plugin-Pack *Graylog* from the "Configuration > Plugin Packs > Manager" page

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every poller expected to monitor a Graylog server:

```bash
yum install centreon-plugin-Applications-Graylog-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-graylog-restapi
```

3. On the Centreon Web interface, install the Centreon Plugin-Pack *Graylog* from the "Configuration > Plugin Packs > Manager" page

</TabItem>
</Tabs>

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
actions through the API.

#### ```UNKNOWN: 500 Can't connect to ...:443```

This error message means that the Centreon Plugin couldn't successfully connect
to the Graylog RestAPI. Check that no third party device
(such as a firewall) is blocking the request. A proxy connection may also be 
necessary to connect to the API. This can be done by using the ```--proxyurl```
option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

When using a proxy to connect to the Graylog RestAPI, this error
message means that the Centreon Plugin library does not support the proxy
connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the
following option to the command: ```--http-backend='curl'```.
