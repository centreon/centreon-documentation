---
id: hardware-devices-pexip-infinity-managementapi
title: Pexip Infinity ManagementAPI
---

## Overview

Pexip Infinity is a cloud enterprise application that enables enterprise video conferencing and collaboration across all devices and platforms. 
The software seamlessly connects enterprise communications and collaboration solutions in Virtual Meeting Rooms, or operates as a gateway between platforms.

Pexip Infinity includes a ManagementAPI that allows third parties to control, configure, and obtain status information on the Pexip Infinity platform.

## Plugin-Pack Assets

### Monitored Objects

* Alarms
* Conferences

### Collected Metrics

More information about collected metrics is available in the official Pexip Infinity ManagementAPI documentation : https://docs.pexip.com/api_manage/management_intro.htm

<!--DOCUSAURUS_CODE_TABS-->

<!--Alarms-->

| Metric name                                | Description                         | Unit  |
| :----------------------------------------- | :-----------------------------------| :---- |
| status                                     | Alarms status                       |       |
| alerts.problems.current.count              | Number of  current alerts problems  | count |

<!--Conferences-->

| Metric name                                 | Description                                                                            | Unit  |
| :------------------------------------------ | :------------------------------------------------------------------------------------- | :---- |
| conferences.total.count                     | Total number of conferences                                                            | count |
| participants.total.count                    | Total number of participants			                                               | count |
| participants.callquality.$state.count       | Number of states participants callquality ('good', 'ok', 'bad', 'terrible', 'unknown') | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

Accesses to the ManagementAPI are performed via HTTPS.
For authentication, if you do not use an LDAP database, access is via the login credentials of the Web administrator user. 
The default user name of this account is *admin*.
If you are using an LDAP database, it is recommended to create an account specifically for the use of the API.

More information is available on the official documentation of Pexip Infinity ManagementAPI: https://docs.pexip.com/admin/integrate_api.htm

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every poller monitoring Pexip Infinity ManagementAPI resources:

```bash
yum install centreon-plugin-Hardware-Devices-Pexip-Infinity-Managementapi.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Pexip Infinity ManagementAPI* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring Pexip Infinity ManagementAPI resources:

```bash
yum install centreon-plugin-Hardware-Devices-Pexip-Infinity-Managementapi.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-hardware-devices-pexip-infinity-managementapi.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Pexip Infinity ManagementAPI* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

The Plugin-Pack is designed to monitor resources based on one host per Pexip Infinity ManagementAPI environment.
Adding a host into Centreon, link it to the template named *HW-Device-Pexip-Infinity-Managementapi-custom*. 
Once the template applied, some Macros have to be configured:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Pexip Infinity ManagementAPI username                                      |
| X         | APIPASSWORD     | Pexip Infinity ManagementAPI password    	                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command 
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_pexip_infinity_managementapi.pl \
    --plugin=hardware::devices::pexip::infinity::managementapi::plugin \
    --mode=alarms \
    --hostname='mypexipinfnitapi.com' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-name='mycall1.centreon.com' \
    --warning-status='%{level} =~ /warning|minor/i' \
    --critical-status='%{level} =~ /critical|major|error/i' \
    --verbose
```

The command above gets the status of alarms Pexip Infinity using ManagementAPI (```--mode=alarms```) named *mycall1.centreon.com* (```--filter-name='mycall1.centreon.com'```). 
It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _mypexipinfnitapi.com_ (```--hostname='mypexipinfnitapi.com'```) 
on the port 443 (```--port='443'```) using https (```--proto='https'```).

This command would trigger a WARNING alert if the returned status of the alarms level is equal to */warning|minor/i* (```--warning-status='%{level} =~ /warning|minor/i'```)
and a CRITICAL alert if the returned status is equal to */critical|major|error/i* (```--critical-status='%{level} =~ /critical|major|error/i'```).

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins//centreon_pexip_infinity_managementapi.pl --plugin=hardware::devices::pexip::infinity::managementapi::plugin \
     --mode=alarms \
     --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to mypexipinfnitapi.com:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Pexip Infinity ManagementAPI.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported``` 

When using a proxy to connect to the Pexip Infinity ManagementAPI, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

#### ```UNKNOWN: Cannot load module 'Net::Curl::Easy'```

This error message means that a Perl library required to use the *curl* backend is missing.

In order to fix this issue, install the Net\:\:Curl\:\:Easy Perl library using the following command:

```bash
yum install perl-Net-Curl
```
