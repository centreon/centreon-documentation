---
id: applications-cisco-dnac-api
title: Cisco DNA Center Rest API
---

## Plugin-Pack Assets

### Monitored Objects

The plugin-pack includes monitoring of Network devices and Sites.

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Network-devices-->

| Metric name                                                           | Description                                          | Unit |
| :-------------------------------------------------------------------- | :--------------------------------------------------- | :--- |
| network.devices.total.count                                           | Number of devices                                    |      |
| *categoryname*#category.network.devices.health.good.count             | Number of good health devices by category            |      |
| *categoryname*#category.network.devices.health.good.percentage        | Number of good health devices by category            | %    |
| *categoryname*#category.network.devices.health.fair.count             | Number of fair health devices by category            |      |
| *categoryname*#category.network.devices.health.fair.percentage        | Number of fair health devices by category            | %    |
| *categoryname*#category.network.devices.health.bad.count              | Number of bad health devices by category             |      |
| *categoryname*#category.network.devices.health.bad.percentage         | Number of bad health devices by category             | %    |
| *categoryname*#category.network.devices.health.unmonitored.count      | Number of unmonitored health devices by category     |      |
| *categoryname*#category.network.devices.health.unmonitored.percentage | Number of unmonitored health devices by category     | %    |

<!--Sites-->

| Metric name                                        | Description                | Unit |
|:-------------------------------------------------- |:-------------------------- | :--- |
| *sitename*#site.network.devices.healthy.count      | Number of healthy devices  |      |
| *sitename*#site.network.devices.healthy.percentage | Number of healthy devices  | %    |
| *sitename*#site.clients.healthy.count              | Number of healthy clients  |      |
| *sitename*#site.clients.healthy.percentage         | Number of healthy clients  | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Cisco DNA Center, the Rest API must be configured.

E.g: ```https://developer.cisco.com/docs/dna-center/#!cisco-dna-center-platform-overview```

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Cisco-Dnac-Restapi
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco DNA Center Rest API* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Cisco-Dnac-Restapi
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-cisco-dnac-restapi
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Cisco DNA Center Rest API* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *App-Cisco-Dnac-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                | Description                                                                 |
| :-------- | :------------------ | :-------------------------------------------------------------------------- |
| X         | DNACAPIPORT         | Port used (Default: 443)                                                    |
| X         | DNACAPIPROTO        | Specify https if needed (Default: 'https')                                  |
| X         | DNACAPIUSERNAME     | Cisco DNA Center username                                                   |
| X         | DNACAPIPASSWORD     | Cisco DNA Center password                                                   |
|           | DNACAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag)  |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl \
    --plugin=apps::cisco::dnac::restapi::plugin \
    --mode=network-devices \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-category-name='Access|Core' \
    --critical-category-devices-health-bad-usage-prct='0' \
    --verbose
```

Output example:
```
OK: All network categories are ok | 'network.devices.total.count'=14;;;0; 'Access#category.network.devices.health.good.count'=13;;;0;13 'Access#category.network.devices.health.good.percentage'=13.00;;;0;100 'Access#category.network.devices.health.fair.count'=0;;;0;13 'Access#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Access#category.network.devices.health.bad.count'=0;;;0;13 'Access#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Access#category.network.devices.health.unmonitored.count'=0;;;0;13 'Access#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100 'Core#category.network.devices.health.good.count'=1;;;0;1 'Core#category.network.devices.health.good.percentage'=1.00;;;0;100 'Core#category.network.devices.health.fair.count'=0;;;0;1 'Core#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Core#category.network.devices.health.bad.count'=0;;;0;1 'Core#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Core#category.network.devices.health.unmonitored.count'=0;;;0;1 'Core#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100
checking network category 'Access'
    good devices: 100.00% (13 on 13)
    fair devices: 0.00% (0 on 13)
    bad devices: 0.00% (0 on 13)
    unmonitored devices: 0.00% (0 on 13)
checking network category 'Core'
    good devices: 100.00% (1 on 1)
    fair devices: 0.00% (0 on 1)
    bad devices: 0.00% (0 on 1)
    unmonitored devices: 0.00% (0 on 1)
```

The command above monitors Cisco DNA Center network devices usage  (```--mode=network-devices```) in category *Access* and *Core* (```--filter-category-name='Access|Core'```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 7002 (```--port='443'```) using https (```--proto='https'```).

This command would trigger a CRITICAL alert if the number of bad health devices is over 0% (--critical-category-devices-health-bad-usage-prct='0').

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl --plugin=apps::cisco::dnac::restapi::plugin \
    --mode=network-devices \
    --help
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443```

This error message means that the Centreon Plugin couldn't successfully connect to the Cisco DNA Center API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported```

When using a proxy to connect to the Cisco DNA Center API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.

