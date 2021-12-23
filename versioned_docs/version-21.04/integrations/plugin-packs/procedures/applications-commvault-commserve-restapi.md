---
id: applications-commvault-commserve-restapi
title: Commvault CommServe Rest API
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack includes monitoring of Alerts, Jobs, Media-agents and Storage-pools.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric name           | Description                                        | Unit |
| :-------------------- | :------------------------------------------------- | :--- |
| alert status          | alert status, possible to set string-based alerts  |      |
| alerts.total.count    | Number of alerts                                   |      |
| alerts.critical.count | Number of critical alerts                          |      |
| alerts.warning.count  | Number of warning alerts                           |      |
| alerts.info.count     | Number of informational alerts                     |      |

<!--Jobs-->

| Metric name           | Description                  | Unit |
| :-------------------- | :--------------------------- | :--- |
| job status            | Status of on job status      |      |
| job long status       | Status on job time duration  |      |
| jobs.total.count      | Number of jobs               |      |

<!--Media-agents-->

| Metric name              | Description             | Unit |
| :----------------------- | :---------------------- | :--- |
| media agent status       | Media agent status      |      |
| media.agents.total.count | Number of media agents  |      |

<!--Storage-pools-->

| Metric name                                          | Description                                          | Unit |
| :--------------------------------------------------- | :--------------------------------------------------- | :--- |
| storage status                                       | Storage status, possible to set string-based alerts  |      |
| *storagepoolname*#storagepool.space.usage.bytes      | Space usage                                          | B    |
| *storagepoolname*#storagepool.space.free.bytes       | Free space                                           | B    |
| *storagepoolname*#storagepool.space.usage.percentage | Space usage in percentage                            | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Commvault CommServe, the Rest API must be configured.

E.g: https://api.commvault.com/

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Commvault-Commserve-Restapi
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Commvault Commserve Rest API* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Commvault-Commserve-Restapi
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-commvault-commserve-restapi
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Commvault Commserve Rest API* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *App-Commvault-Commserve-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                 | Description                                                                |
| :-------- | :------------------- | :------------------------------------------------------------------------- |
| X         | COMMSERVEAPIPORT     | Port used (Default: 443)                                                   |
| X         | COMMSERVEAPIPROTO    | Specify https if needed (Default: 'https')                                 |
| X         | COMMSERVEAPIUSERNAME | Commvault CommServe username                                               |
| X         | COMMSERVEAPIPASSWORD | Commvault CommServe password                                               |
|           | COMMSERVEAPIPROTO    | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \
    --plugin=apps::backup::commvault::commserve::restapi::plugin \
    --mode=storage-pools \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-name='IPL' \
    --warning-space-usage-prct='90' \
    --critical-space-usage-prct='95' \
    --verbose
```

Output example:
```
OK: All storage pools are ok | 'IPL1-TEST#storagepool.space.usage.bytes'=22104757B;;;0;37192871 'IPL1-TEST#storagepool.space.free.bytes'=15088114B;;;0;37192871 'IPL1-TEST#storagepool.space.usage.percentage'=59.43%;90;95;0;100 'IPL2-TEST#storagepool.space.usage.bytes'=6469140B;;;0;7340013 'IPL2-TEST#storagepool.space.free.bytes'=870873B;;;0;7340013 'IPL2-TEST#storagepool.space.usage.percentage'=88.14%;90;95;0;100
Storage pool 'IPL1-TEST' status: online, space usage total: 35.47 MB used: 21.08 MB (59.43%) free: 14.39 MB (40.57%)
Storage pool 'IPL2-TEST' status: online, space usage total: 7.00 MB used: 6.17 MB (88.14%) free: 850.46 KB (11.86%)
```

The command above monitors Commvault CommServe storage pools usage  (```--mode=storage-pools```) named *IPL* (```--filter-name='IPL'```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 443 (```--port='443'```) using https (```--proto='https'```).

This command would trigger a WARNING alert if the space used to raise over 90% of the storage capacity (```--warning-space-usage-prct='60'```) and a CRITICAL alarm over 95% (```--critical-space-usage-prct='95'```).

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \
    --plugin=apps::backup::commvault::commserve::restapi::plugin \
    --mode=storage-pools \
    --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Commvault CommServe Rest API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported```

When using a proxy to connect to the Commvault CommServe Rest API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
