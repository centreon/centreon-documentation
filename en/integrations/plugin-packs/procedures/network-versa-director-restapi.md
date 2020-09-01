---
id: network-versa-director-restapi
title: Versa Director Restapi
---

## Overview

Versa Director provides the management, monitoring and orchestration capabilities
needed to deliver Versa’s VNF-based network and security services.

The Centreon Plugin-Pack relies on the Versa Director API to query and
collect status and metrics of the Versa equipements managed by the Director.

You can find more information about the Versa Director API on the official documentation:
https://apidocs.versa-networks.com/

## Plugin-Pack assets

### Monitored objects

* Versa Networks devices

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Rule Name                                        | Description                                                   |
|:------------------------------------------------ |:------------------------------------------------------------- |
| Net-Versa-Director-Restapi-HostDiscovery-devices | Discover and monitor Versa Devices managed by Versa Director  |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Devices-->

* Global

| Metric name                                        | Description                                | Unit  |
|:-------------------------------------------------- |:------------------------------------------ |:----- |
| status                                             | Status of the device                       |       |
| memory.usage.bytes                                 | Memory usage on the device                 | B     |
| memory.free.bytes                                  | Free memory on the device                  | B     |
| memory.usage.percentage                            | Percentage of memory usage on the device   | %     |
| disk.usage.bytes                                   | Disk usage on the device                   | B     |
| disk.free.bytes                                    | Free disk space on the device              | B     |
| disk.usage.percentage                              | Percentage of disk usage on the device     | %     |
| alarms.critical.count                              | Number of critical alarms on the device    | Count |
| alarms.major.count                                 | Number of major alarms on the device       | Count |
| alarms.minor.count                                 | Number of minor alarms on the device       | Count |
| alarms.warning.count                               | Number of warning alarms on the device     | Count |
| alarms.inderminate.count                           | Number of inderminate alarm on the device  | Count |
| policy.violation.packets.dropped.novalidlink.count | Number of packets dropped by no valid link | Count |
| policy.violation.packets.dropped.slaaction.count   | Number of packets dropped by sla action    | Count |

* by health monitor

| Metric name           | Description                        | Unit  |
|:--------------------- |:---------------------------------- |:----- |
| health.up.count       | Number of health monitors up       | Count |
| health.disabled.count | Number of health monitors disabled | Count |
| health.down.count     | Number of health monitors down     | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

The API must be enabled and running on the Versa Director device.
Please refer to the manufacturer documentation to achieve this.

### Network flows

The Centreon Poller must be able to reach the TCP/9182 HTTPS port of the Versa Director device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor 
Versa devices trough Versa Director API:

```bash
yum install centreon-plugin-Network-Versa-Director-Restapi
```

2. On the Centreon Web interface, install the *Versa Director Restapi* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor
Versa devices trough Versa Director API 

```bash
yum install centreon-plugin-Network-Versa-Director-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-versa-director-restapi
```

3. On the Centreon Web interface, install the *Versa Director Restapi* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the template *Net-Versa-Director-Device-Restapi-custom* and configure all the mandatory Macros:

| Mandatory | Name                    | Description                                                                |
| :-------- | :---------------------- | :------------------------------------------------------------------------- |
| X         | DIRECTORAPIPORT         | Port used. Default: 9182                                                   |
| X         | DIRECTORAPIPROTO        | Protocol used. Default: https                                              |
| X         | DIRECTORAPIORGANIZATION | Linked organizations of the device. Default: .*                            |
| X         | DIRECTORAPIHOSTNAME     | Hostname of the Versa Director.                                            |
| X         | DIRECTORAPIUSERNAME     | Username to access to the API.                                             |
| X         | DIRECTORAPIPASSWORD     | Password to access to the API.                                             |
| X         | DIRECTORAPIDEVICENAME   | Name of the Versa device.                                                  |
|           | DIRECTORAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |
|           | PROXYURL                | Proxy URL. (eg. http://myproxy.int:3128)                                   |

> Use the discovery module to add the monitoring of your Versa devices.
> Go to Configuration > Host > Discovery and use the provider *Versa Networks devices (Director RestAPI)*

## FAQ

### How to test the Plugin and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins//centreon_versa_director_restapi.pl \
  --plugin=network::versa::director::restapi::plugin \
  --mode=devices \
  --hostname=10.0.0.1 \
  --port='9182' \
  --proto='https' \
  --api-username='jdoe' \
  --api-password='6fbadZEJbsLG' \
  --organization='.*' \
  --filter-device-name='^CENFRGW101$' \
  --warning-status='' \
  --critical-status='%{ping_status} ne "reachable" or %{services_status} ne "good"' \
  --verbose
```

Expected command output is shown below: 

```bash
OK: Device 'CENFRGW101' status services: good [ping: reachable] [sync: in_sync] [path: unavailable] [controller: unavailable] -
memory total: 31.42 GB used: 11.49 GB (36.57%) free: 19.93 GB (63.43%) - disk total: 250.00 B used: 18.00 B (7.20%) free: 232.00 B (92.80%) -
alarms critical: 0, major: 0, minor: 0, warning: 0, indeterminate: 0 -
policy violation packets-dropped-novalidlink : 0, packets-dropped-slaaction : 0 -
all health monitors are ok | 'devices.total.count'=1;;;0; 'CENFRGW101#memory.usage.bytes'=12337293557B;;;0;33736968110.08
'CENFRGW101#memory.free.bytes'=21399674552B;;;0;33736968110.08 'CENFRGW101#memory.usage.percentage'=36.57;;;0;100
'CENFRGW101#disk.usage.bytes'=18B;;;0;250 'CENFRGW101#disk.free.bytes'=232B;;;0;250
'CENFRGW101#disk.usage.percentage'=7.20;;;0;100 'CENFRGW101#alarms.critical.count'=0;;;0;
'CENFRGW101#alarms.major.count'=0;;;0; 'CENFRGW101#alarms.minor.count'=0;;;0; 'CENFRGW101#alarms.warning.count'=0;;;0;
'CENFRGW101#alarms.indeterminate.count'=0;;;0; 'CENFRGW101~bgp adjacencies#health.up.count'=3;;;0;3
'CENFRGW101~bgp adjacencies#health.down.count'=0;;;0;3 'CENFRGW101~bgp adjacencies#health.disabled.count'=0;;;0;3
'CENFRGW101~config sync status#health.up.count'=1;;;0;1 'CENFRGW101~config sync status#health.down.count'=0;;;0;1
'CENFRGW101~config sync status#health.disabled.count'=0;;;0;1 'CENFRGW101~ike status#health.up.count'=2;;;0;2
'CENFRGW101~ike status#health.down.count'=0;;;0;2 'CENFRGW101~ike status#health.disabled.count'=0;;;0;2
'CENFRGW101~interfaces#health.up.count'=3;;;0;3 'CENFRGW101~interfaces#health.down.count'=0;;;0;3
'CENFRGW101~interfaces#health.disabled.count'=0;;;0;3 'CENFRGW101~paths#health.up.count'=24;;;0;24
'CENFRGW101~paths#health.down.count'=0;;;0;24 'CENFRGW101~paths#health.disabled.count'=0;;;0;24
'CENFRGW101~physical ports#health.up.count'=0;;;0;0 'CENFRGW101~physical ports#health.down.count'=0;;;0;0
'CENFRGW101~physical ports#health.disabled.count'=0;;;0;0 'CENFRGW101~reachability status#health.up.count'=1;;;0;1
'CENFRGW101~reachability status#health.down.count'=0;;;0;1 'CENFRGW101~reachability status#health.disabled.count'=0;;;0;1
'CENFRGW101~service status#health.up.count'=1;;;0;1 'CENFRGW101~service status#health.down.count'=0;;;0;1
'CENFRGW101~service status#health.disabled.count'=0;;;0;1
checking device 'CENFRGW101' [type: hub]
    status services: good [ping: reachable] [sync: in_sync] [path: unavailable] [controller: unavailable]
    memory total: 31.42 GB used: 11.49 GB (36.57%) free: 19.93 GB (63.43%)
    disk total: 250.00 B used: 18.00 B (7.20%) free: 232.00 B (92.80%)
    alarms critical: 0, major: 0, minor: 0, warning: 0, indeterminate: 0
    policy violation packets-dropped-novalidlink : 0, packets-dropped-slaaction : 0
    health monitor 'bgp adjacencies' up: 3, down: 0, disabled: 0
    health monitor 'config sync status' up: 1, down: 0, disabled: 0
    health monitor 'ike status' up: 2, down: 0, disabled: 0
    health monitor 'interfaces' up: 3, down: 0, disabled: 0
    health monitor 'paths' up: 24, down: 0, disabled: 0
    health monitor 'physical ports' up: 0, down: 0, disabled: 0
    health monitor 'reachability status' up: 1, down: 0, disabled: 0
    health monitor 'service status' up: 1, down: 0, disabled: 0
```

The command above monitors a Versa Networks device **CENFRGW101** (```--filter-device-name='^CENFRGW101$'```)
trough the Versa Director API (```--plugin=network::versa::director::restapi::plugin --mode=devices```).
It connects to the Versa Director host **10.0.0.1** (```--hostname=10.0.01```) using the user **jdoe**
and its password (```--api-username='jdoe' --api-password='6fbadZEJbsLG'```).
The device can be under several organizations, so we use a wildcard (```--organization='.*'```).

This command will trigger a CRITICAL alarm (```--critical-status='%{ping_status} ne "reachable" or %{services_status} ne "good"'```) if:

* the 'ping status' of the device is not **reachable**
* the 'service_status' of the device is not **good**

Some thresholds can also be set on metrics with options ```--warning-*``` and ```--critical-*```.

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl \
  --plugin=network::versa::director::restapi::plugin \
  --mode=devices \
  --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to myversadirector:9182```

This error message means that the Centreon Plugin couldn't successfully connect to the Versa Director API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the Versa Director API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.
In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

This error message means that a Perl library required to use the *curl* backend is missing.
In order to fix this issue, install the Net\:\:Curl\:\:Easy Perl library using the following command:

```bash
yum install perl-Net-Curl
```
