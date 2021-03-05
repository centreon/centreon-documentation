---
id: applications-smartermail-api
title: Smartermail Server
---

## Overview

SmarterMail is part of SmarterTool suite. 

The Centreon Plugin Pack *Smartermail Server* uses the Rest API to get key metrics
giving insights about the health of the solution.

## Plugin-Pack assets

### Monitored objects

* Licenses
* Spools
* Services 

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Licenses-->

| Metric name                                    | Description                                | Unit   |
| :--------------------------------------------- | :----------------------------------------- | :----- |
| license.upgrade.protection.expires.days.count  | Number of days before license expiration   | Count  |

<!--Services-->

No metrics available. The Plugin checks that the services are in a *running* state. 

<!--Spools-->

| Metric name                        | Description                       | Unit   |
| :--------------------------------- | :-------------------------------- | :----- |
| *spool_name*#spool.messages.count  | Number of messages in the Spool   | Count  |

Filtering on the Spool name can be done with `--filter-spool` option. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

A monitoring username has to be created on the SmarterMail server. More information available 
within the official documentation: https://mail.smartertools.com/Documentation/api#/topics/overview 

The Poller monitoring the Smartermail server should be able to reach it over the 
HTTPS protocol. 

## Package installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor a Smartermail server:

```bash
yum install centreon-plugin-Applications-Smartermail-Api
```

2. On the Centreon Web interface, install the Centreon Plugin-Pack *Smartermail Server* from the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor a Graylog server:

```bash
yum install centreon-plugin-Applications-Smartermail-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-smartermail-api
```

3. On the Centreon Web interface, install the Centreon Plugin-Pack *Smartermail Server* from the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Smartermail-Api-custom* template and configure all the mandatory Macros :

| Mandatory | Name                       | Description                           |
| :-------- | :------------------------- | :------------------------------------ |
| X         | SMARTERMAILAPIUSERNAME     | Username for authentication           |
| X         | SMARTERMAILAPIPASSWORD     | Password for authentication           | 
|           | SMARTERMAILAPIPROTO        | Protocol (default: 'http')            |
|           | SMARTERMAILAPIPORT         | API port (default: '443')             |
|           | SMARTERMAILAPIEXTRAOPTIONS | Any extra option you may want to add  |

## FAQ

### How can I test the Plugin in the CLI and what do the main parameters stand for ?

Once the Centreon Plugin installed, you can test it directly in the CLI of the
Centreon poller by logging with the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_smartermail_api.pl \
  --plugin=apps::smartermail::restapi::plugin \
  --mode=spools \
  --hostname=10.0.0.1 \
  --proto='https' \
  --port='443' \
  --api-username='myusername' \
  --api-password='mypassword' \
  --warning-spool-messages='' \
  --critical-spool-messages=''
```

Expected output:

```bash
OK: All spools are ok | 'default#spool.messages.count'=11;;;0; 'quarantine_limit#spool.messages.count'=5000;;;0; 'spam#spool.messages.count'=0;;;0; 'spool_limit#spool.messages.count'=50000;;;0; 'throttledDomains#spool.messages.count'=0;;;0; 'throttledMailingLists#spool.messages.count'=0;;;0; 'throttledUsers#spool.messages.count'=0;;;0; 'virus#spool.messages.count'=0;;;0; 'waiting#spool.messages.count'=3;;;0;
```

The command above checks the message spools (`--mode=spools`) configured on the Smartmail Server. The API uses the HTTPS 
protocol (`--proto='https'`) and listens over the port 443 (`--port=443`). 

The available thresholds as well as all of the options that can be used with
this Plugin can be displayed by adding the `--help` parameter to the 
command:

```bash
/usr/lib/centreon/plugins/centreon_smartermail_api.pl \
  --plugin=apps::smartermail::restapi::plugin \
  --mode=spools \
  --help
```

You can display all of the modes that come with the Plugin with the command
below:

```bash
/usr/lib/centreon/plugins/centreon_smartermail_api.pl \
  --plugin=apps::smartermail::restapi::plugin \
  --list-mode
```

### Why do I get the following error?

#### `UNKNOWN: 500 Can't connect to ...:443`

This error message means that the Centreon Plugin couldn't successfully connect
to the SmarterMail RestAPI. Check that no third party device
(such as a firewall) is blocking the request. A proxy connection may also be 
necessary to connect to the API. This can be done by using the `--proxyurl`
option in the command.

#### `UNKNOWN: 501 Protocol scheme 'connect' is not supported |`

When using a proxy to connect to the SmarterMail RestAPI, this error
message means that the Centreon Plugin library does not support the proxy
connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the
following option to the command: `--http-backend='curl'`.
