---
id: applications-proxmox-mg-api
title: Proxmox Mail Gateway
---

## Plugin Pack Assets

### Monitored Objects

The Plugin Pack Proxmox Mail Gateway collects metrics for:
* Mail
* Version

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Mail-->

| Metric name                      | Description                    | Unit |
| :------------------------------- | :----------------------------- | :--- |
| mails.incoming.count             | Number of incoming mails       |      |
| mails.outgoing.count             | Number of outgoing mails       |      |
| mails.traffic.in.bytespersecond  | Incoming mail traffic          | B/s  |
| mails.traffic.out.bytespersecond | Outgoing mail traffic          | B/s  |
| mails.spam.incoming.count        | Number of incoming spam mails  |      |
| mails.spam.outgoing.count        | Number of outgoing spam mails  |      |
| mails.virus.incoming.count       | Number of incoming virus mails |      |
| mails.virus.outgoing.count       | Number of outgoing virus mails |      |

<!--Version-->

| Metric name     | Description                  | Unit |
| :-------------- | :--------------------------- | :--- |
| version status  | Proxmox Mail Gateway version |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Proxmox Mail Gateway, the Rest API must be configured.

E.g: https://pmg.proxmox.com/pmg-docs/api-viewer/index.html

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Proxmox-Mg-Api
```

2. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *Proxmox Mail Gateway* Plugin Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Proxmox-Mg-Api
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-applications-proxmox-mg-api
```

3. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *Proxmox Mail Gateway* Plugin Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *App-Proxmox-Mg-Api-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                     | Description                                                                |
| :-------- | :----------------------- | :------------------------------------------------------------------------- |
| X         | PROXMOXMGAPIPORT         | Port used (Default: 8006)                                                  |
| X         | PROXMOXMGAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | PROMOXMGAPIURLPATH       | Api endpoint (Default: '/api2/json')                                       |
| X         | PROXMOXMGAPIUSERNAME     | Api username                                                               |
| X         | PROXMOXMGAPIPASSWORD     | Api password                                                               |
| X         | PROMOXMGAPIREALM         | Api realm (Default: 'pmg')                                                 |
|           | PROXMOXMGAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_proxmox_mg_api.pl \
    --plugin=apps::proxmox::mg::restapi::plugin \
    --mode=mail \
    --hostname='10.30.2.79' \
    --port='8006' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --hours=1 \
    --timespan=1800 \
    --verbose
```

Output example:
```
OK: Mail statistics are ok | 'mails.incoming.count'=71;;;0; 'mails.outgoing.count'=31;;;0; 'mails.traffic.in.bytespersecond'=4255.35B/s;;;0; 'mails.traffic.out.bytespersecond'=2780.03B/s;;;0; 'mails.spam.incoming.count'=5;;;0; 'mails.spam.outgoing.count'=0;;;0; 'mails.virus.incoming.count'=0;;;0; 'mails.virus.outgoing.count'=0;;;0;
checking mail statistics
    number of mails incoming: 71, outgoing: 31
    traffic in: 4.16 KB/s, out: 2.71 KB/s
    number of spam mails incoming: 5, outgoing: 0
    number of virus mails incoming: 0, outgoing: 0
```

The command above monitors mails statistics  (```--mode=mail```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 8006 (```--port='8006'```) using https (```--proto='https'```).

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_mg_api.pl \
    --plugin=apps::proxmox::mg::restapi::plugin \
    --mode=mail \
    --help
```

## Troubleshooting

### ```UNKNOWN: 500 Can't connect to 10.30.2.79:8006```

This error message means that the Centreon Plugin couldn't successfully connect to the Proxmox Mail Gateway API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported```

When using a proxy to connect to the Proxmox Mail Gateway API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
