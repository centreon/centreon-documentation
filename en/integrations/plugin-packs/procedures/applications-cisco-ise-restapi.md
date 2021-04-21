---
id: applications-cisco-ise-restapi
title: Cisco ISE
---

## Overview

Cisco Identity Service Engine is network administration solution designed to 
simplify and control security and access on your company's network.

The Centreon Plugin-Pack *Cisco ISE* aims to collect the number of active and 
profiler service sessions and the number of postured endpoints by requesting the
dedicated built-in REST API.

## Plugin-Pack assets

### Monitored objects

* Cisco Identity Service Engine

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Session-->

| Metric name              | Description                             |
|:-------------------------|:----------------------------------------|
| sessions.active.count    | The number of active sessions           |
| endpoints.postured.count | The number of postured endpoints        |
| sessions.profiler.count  | The number of profiler service sessions |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The users used in the Host Macro (more information [here](##Host) must be 
assigned to one of the following Admin Groups and must be authenticated against 
the credentials stored in the Cisco ISE internal database (internal admin 
users):

* Super Admin

* System Admin

* MnT Admin

Futhermore, the Centreon Pollers must be able to reach the Ciso ISE Rest API on 
the TCP/80 or TCP/443 port(s). More information on the official Cisco website:
https://developer.cisco.com/docs/identity-services-engine/3.0/#!introduction-to-monitoring-rest-apis/verifying-a-monitoring-node

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor a Cisco Identity Service Engine:

```bash
yum install centreon-plugin-Applications-Cisco-Ise-Restapi
```

2. On the Centreon Web interface, install the *Cisco ISE* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor a Cisco Identity Service Engine:

```bash
yum install centreon-plugin-Applications-Cisco-Ise-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-cisco-ise-restapi
```

3. On the Centreon Web interface, install the *Cisco ISE* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Cisco Identity Service Engine settings
* Apply the *Applications-Cisco-Ise-Restapi-custom* template and configure all the mandatory Macros :

| Mandatory | Name          | Description                                                                        |
|:----------|:--------------|:-----------------------------------------------------------------------------------|
| X         | ISECUSTOMMODE | Mode used by plugin (Default: 'xmlapi')                                            |
| X         | ISEAPIURLPATH | Path to the ISE API (Default: '/admin/API/mnt')                                    |
| X         | ISEAPIPORT    | Port of the ISE API instance (Default: '443')                                      |
| X         | ISEAPIPROTO   | Protocol used by the ISE API (Default : 'https')                                   |
| X         | USERNAME      | Username to access ISE API                                                         |
| X         | PASSWORD      | Password to access ISE API                                                         |
|           | EXTRAOPTIONS  | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the
Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \
    --plugin=apps::cisco::ise::restapi::plugin \
    --mode=session \
    --custommode='xmlapi' \
    --hostname='10.0.0.1' \
    --url-path='admin/API/mnt' \
    --username='user' \
    --password='password' \
    --port='443' \
    --proto='https' \
    --filter-counters='' \
    --warning-active-sessions='20' \
    --critical-active-sessions='50' \
    --warning-postured-endpoints='' \
    --critical-postured-endpoints='' \
    --warning-profiler-service-sessions='' \
    --critical-profiler-service-sessions='' \
    --use-new-perfdata
```

Expected command output is shown below:

```bash
OK : Active sessions: 10, Postured endpoints: 20, Profiler service sessions: 20 | 'sessions.active.count'=10;0:20;0:50;0; 'endpoints.postured.count'=20;;;0 'sessions.profiler.count'=20;;;0;
```

This command triggers a WARNING alarm in the following cases if the number of
active session is greater than 20 (--warning-active-sessions='20').

A CRITICAL alarm is however triggered if he number ofactive session is greater 
than 50 (--critical-active-sessions='50').

All available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \
    --plugin=apps::cisco::ise::restapi::plugin \
    --mode=session \
    --help
```

All plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_ise_restapi.pl \
    --plugin=apps::cisco::ise::restapi::plugin \
    --list-mode 
```

### Why do I get the following message: ```UNKNOWN: 500 Can't connect to 10.0.0.1:443 |```

This error message means that the Centreon Plugin couldn't successfully connect
to the Cisco ISE REST API. Check that no third party device (such as a firewall)
is blocking the request. A proxy connection may also be necessary to connect to 
the API. This can be done by using this option in the command: 
```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

When using a proxy to connect to Cisco ISE REST API, this error
message means that the Centreon Plugin library does not support the proxy
connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the
following option to the command: ```--http-backend='curl'```.
