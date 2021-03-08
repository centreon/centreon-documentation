---
id: applications-emc-ppma-restapi
title: EMC PPMA Rest API
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack EMC PowerPath Management Appliance collects metrics for:
* Hosts

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Metric name                            | Description                                                  | Unit |
| :------------------------------------- | :----------------------------------------------------------- | :--- |
| host status                            | Host powerpath status, possible to set string-based alerts   |      |
| *hostname*#host.paths.total.count      | Number of total paths for the host                           |      |
| *hostname*#host.paths.dead.count       | Number of dead paths for the host                            |      |
| *hostname*#host.volumes.total.count    | Number of volumes attached                                   |      |
| *hostname*#host.volumes.dead.count     | Number of dead volumes attached                              |      |
| *hostname*#host.volumes.degraded.count | Number of degraded volumes attached                          |      |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your EMC PPMA, the Rest API must be configured.

E.g: https://dl.dell.com/content/docu98223_PowerPath-Management-Appliance-3.x-Rest-API-Reference.pdf?language=en_US

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Emc-Ppma-Restapi
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Emc PPMA Rest API* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Emc-Ppma-Restapi
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-emc-ppma-restapi
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Emc PPMA Rest API* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *App-Emc-Ppma-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                | Description                                                                |
| :-------- | :------------------ | :------------------------------------------------------------------------- |
| X         | PPMAAPIPORT         | Port used (Default: 443)                                                   |
| X         | PPMAAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | PPMAAPIUSERNAME     | EMC PPMA username                                                          |
| X         | PPMAAPIPASSWORD     | EMC PPMA password                                                          |
|           | PPMAAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

By default, Host Template *App-Emc-Ppma-Restapi* doesn't have Service Template attached. You could:
 * attached Service Template to Host Template *App-Emc-Ppma-Restapi-custom*
 * using service discovery

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \
    --plugin=apps::emc::ppma::restapi::plugin \
    --mode=hosts \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-name='centreontest' \
    --warning-paths-dead='0' \
    --critical-paths-dead='1' \
    --verbose
```

Output example:
```
OK: All hosts are ok | 'centreontest1#host.paths.total.count'=976;;;0; 'centreontest1#host.paths.dead.count'=0;0;0:1;0;976 'centreontest1#host.volumes.total.count'=136;;;0; 'centreontest1#host.volumes.dead.count'=0;;;0;136 'centreontest1#host.volumes.degraded.count'=0;;;0;136 'centreontest2#host.paths.total.count'=976;;;0; 'centreontest2#host.paths.dead.count'=0;0;0:1;0;976 'centreontest2#host.volumes.total.count'=136;;;0; 'centreontest2#host.volumes.dead.count'=0;;;0;136 'centreontest2#host.volumes.degraded.count'=0;;;0;136
checking host 'centreontest1'
    status: powerPathManagedpath total: 976, dead: 0
    volume total: 136, dead: 0, degraded: 0
checking host 'centreontest2'
    status: powerPathManagedpath total: 976, dead: 0
    volume total: 136, dead: 0, degraded: 0
```

The command above monitors hosts named *centreontest* (```--filter-name='centreontest'```) and managed by EMC PPMA  (```--mode=hosts```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 443 (```--port='443'```) using https (```--proto='https'```).

This command would trigger a WARNING alert if the number of dead paths is over 0 (```--warning-paths-dead='0'```) and a CRITICAL alarm over 1 (```--critical-paths-dead='1'```).

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \
    --plugin=apps::emc::ppma::restapi::plugin \
    --mode=hosts \
    --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443```

This error message means that the Centreon Plugin couldn't successfully connect to the EMC PPMA Rest API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported```

When using a proxy to connect to the EMC PPMA Rest API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
