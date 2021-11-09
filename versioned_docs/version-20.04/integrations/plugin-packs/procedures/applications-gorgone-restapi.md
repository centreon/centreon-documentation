---
id: applications-gorgone-restapi
title: Gorgone Restapi
---

## Overview

Gorgone daemon is a lightweight, distributed, modular tasks handler (https://github.com/centreon/centreon-gorgone).

## Plugin-Pack assets

### Monitored objects

* Events
* Nodes

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Events-->

| Metric name             | Description                                                                            |
| :---------------------- | :------------------------------------------------------------------------------------- |
| path.events.total.count | By instances. e.g. `internal` `external`. Number of events on a path                   |
| event.total.count       | By instances. e.g. `internal~pong`, `internal~command`, ... Number of a specific event |

<!--Nodes-->

| Metric name                         | Description                                                             |
| :---------------------------------- | :-----------------------------------------------------------------------|
| node.ping.received.lasttime.seconds | By instances (`node_id`'). Time since last ping response. Unit: seconds |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Gorgone configuration

To use this Plugin-Pack, you must enable Gorgone module `httpserver`:

```yaml
modules:
    - name: httpserver
      package: "gorgone::modules::core::httpserver::hooks"
      enable: true
      address: "0.0.0.0"
      port: "8085"
      ssl: false
      auth:
        enabled: false
      allowed_hosts:
        enabled: true
        subnets:
          - 127.0.0.1/32

```

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Gorgone ressources:

```bash
yum install centreon-plugin-Applications-Gorgone-Restapi
```

2. On the Centreon Web interface, install the 'Gorgone Rest API' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Gorgone ressources:

```bash
yum install centreon-plugin-Applications-Gorgone-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-gorgone-restapi.noarch
```

3. On the Centreon Web interface, install the 'Gorgone Rest API' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the template *App-Gorgone-Restapi-custom* and configure all the Macros :

| Mandatory   | Nom                    | Description                                                                |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | GORGONEAPIPORT         | Port used. Default is 8085                                                 |
| X           | GORGONEAPIPROTO        | Protocol used. Default is http                                             |
|             | GORGONEAPIUSERNAME     | Username to access to the API.                                             |
|             | GORGONEAPIPASSWORD     | Password to access to the API.                                             |
|             | GORGONEAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How do I test my configuration through the CLI and what do the main parameters stand for ?

Once the Centreon plugin installed, you can test it logging with the centreon-engine user:

```bash
/usr/lib/centreon/plugins/centreon_gorgone_restapi.pl \
    --plugin=apps::gorgone::restapi::plugin \
    --mode=events \
    --hostname='127.0.0.1' \
    --port='8085' \
    --proto='http' \
    --verbose
```

The command above checks Gorgone events.
If you have configured the basic authentification in Gorgone configuration. You could use an API username (`--api-username='John.doe'`) and API password (`--api-password='6fbadZEJbsLG'`).

Expected command output is shown below:

```bash
OK: All paths are ok | 'external#path.events.total.count'=0;;;0; 'internal#path.events.total.count'=12;;;0; 'internal~actionready#event.total.count'=0;;;0; 'internal~bcastlogger#event.total.count'=0;;;0; 'internal~centreonnodesready#event.total.count'=0;;;0; 'internal~command#event.total.count'=0;;;0; 'internal~constatus#event.total.count'=1;;;0; 'internal~dbcleanerready#event.total.count'=0;;;0; 'internal~enginecommand#event.total.count'=0;;;0; 'internal~engineready#event.total.count'=0;;;0; 'internal~httpserverready#event.total.count'=0;;;0; 'internal~information#event.total.count'=1;;;0; 'internal~judgeready#event.total.count'=0;;;0; 'internal~legacycmdready#event.total.count'=0;;;0; 'internal~pipelineready#event.total.count'=0;;;0; 'internal~pong#event.total.count'=6;;;0; 'internal~proxyready#event.total.count'=0;;;0; 'internal~putlog#event.total.count'=0;;;0; 'internal~registernodes#event.total.count'=0;;;0; 'internal~setcoreid#event.total.count'=0;;;0; 'internal~setlogs#event.total.count'=4;;;0; 'internal~unregisternodes#event.total.count'=0;;;0;
checking path 'external'
    total events: 0
checking path 'internal'
    total events: 12
    event 'actionready' total: 0
...
```

Some thresholds can also be set on metrics with options `--warning-*` and `--critical-*`.

The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the `--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_gorgone_restapi.pl \
    --plugin=apps::gorgone::restapi::plugin \
    --mode=events \
    --help
```
You can display all of the modes that come with the Plugin with the command below:

```bash
/usr/lib/centreon/plugins//centreon_gorgone_restapi.pl \
    --plugin=apps::gorgone::restapi::plugin \
    --list-mode
```
