---
id: network-cisco-firepower-fmc-restapi
title: Cisco Firepower Management Console Rest API
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack includes health monitoring of devices managed by Firepower Management Console

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Devices-->

| Metric name                  | Description                     | Unit |
| :----------------------------| :------------------------------ | :--- |
| devices.total.count          | Number of devices               |      |
| devices.status.green.count   | Number of green status devices  |      |
| devices.status.black.count   | Number of black status devices  |      |
| devices.status.blue.count    | Number of blue status devices   |      |
| devices.status.red.count     | Number of red status devices    |      |
| devices.status.yellow.count  | Number of yellow status devices |      |
| device status                | Device status                   |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Cisco Firepower Management Center, the Rest API must be configured.

E.g: https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/REST/Firepower_Management_Center_REST_API_Quick_Start_Guide_620.html

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco Firepower FMC Rest API* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-cisco-firepower-fmc-restapi
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco Firepower FMC Rest API* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *Net-Cisco-Firepower-Fmc-Restapi-custom* Host Template

> Once the Template applied, some Macros have to be configured:

| Mandatory | Name               | Description                                                                |
| :-------- | :----------------- | :------------------------------------------------------------------------- |
| X         | FMCAPIPORT         | Port used (Default: 443)                                                   |
| X         | FMCAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | FMCAPIUSERNAME     | Cisco Firepower management center password                                 |
| X         | FMCAPIPASSWORD     | Cisco Firepower management center username                                 |
|           | FMCAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
    --plugin=network::cisco::firepower::fmc::restapi::plugin \
    --mode=devices \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-domain-name='Global' \
    --critical-devices-status-red='0' \
    --verbose
```

Output example:

```
OK: Domain 'Global' devices are ok | 'devices.total.count'=2;;;0; 'devices.status.green.count'=0;;;0;2 'devices.status.black.count'=0;;;0;2 'devices.status.blue.count'=0;;;0;2 'devices.status.red.count'=0;;0;0;2 'devices.status.yellow.count'=0;;;0;2
checking domain 'Global'
device 'APEXTIFWL01' status: green
device 'APEXTIFWL02' status: green
```

The command above monitors Cisco Firepower devices (```--mode=devices```) in domain *Global* (```--filter-domain-name='Global'```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 443 (```--port='443'```) using https (```--proto='https'```).

This command would trigger a CRITICAL alert if the number of red devices is over 0 (--critical-devices-status-red='0').

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl --plugin=network::cisco::firepower::fmc::restapi::plugin \
     --mode=devices \
     --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Cisco Firepower Management Center Rest API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported```

When using a proxy to connect to the Cisco Firepower Management Center Rest API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
