---
id: applications-monitoring-iplabel-datametrie-restapi
title: IP-Label datametrie API
---

## Overview

IP-Label is a specialist in measurement of the quality of the user’s experience.

## Plugin-Pack Assets

### Monitored Objects

* Alarms: current alarms
* Kpi: performance of monitors

## Monitored Metrics 

<!--DOCUSAURUS_CODE_TABS-->
<!--Alarms-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| alarms.black.count                       | Current black alarms. Unit: Count                    |
| alarms.orange.count                      | Current orange alarms. Unit: Count                   |
| alarms.red.count                         | Current red alarms. Unit: Count                      |

<!--Kpi-->

| Metric name                     | Description                                          |
| :------------------------------ | :--------------------------------------------------- |
| kpi.success.rate.percentage     | Monitor success rate. Unit: %                        |
| kpi.sla.availability.percentage | Monitor SLA availability. Unit: %                    |
| kpi.performance.count           | Monitor performance. Unit: Count                     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

### IP-Label Datametrie Configuration

A read-only account (login/password) to ```https://api.ip-label.net``` is required. 

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor IP-Label datametrie:

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Datametrie-Restapi
```

2. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor IP-Label datametrie:

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Datametrie-Restapi
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-applications-monitoring-iplabel-datametrie-restapi
```

3. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Adding a new virtual host (ping is not allowed on host: ```api.ip-label.net```) into Centreon, apply the host template *App-Monitoring-Iplabel-Datametrie-Restapi-custom*. Once the template set, you have to set host macros. 

| Mandatory   | Name                             | Description                                                                                                              |
| :---------- | :------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| X           | IPLABELDATAMETRIEAPIHOSTNAME     | Api url. By default: ```api.ip-label.net```                                                                              |
| X           | IPLABELDATAMETRIEAPIUSERNAME     | Api username account                                                                                                     |
| X           | IPLABELDATAMETRIEAPIPASSWORD     | Api password account                                                                                                     |
|             | IPLABELDATAMETRIEAPIPROTO        | By default: ```https```                                                                                                  |
|             | IPLABELDATAMETRIEAPIPORT         | By default: ```443```                                                                                                    |
|             | IPLABELDATAMETRIEAPIEXTRAOPTIONS | Customize it with your own if needed. E.g. proxy: ```--http-backend=curl --proxyurl='https://proxy.mycompany:3128'```    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command 
(Some of the parameters such as *api-token*, *filter-device-name* or *proxyurl* have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_monitoring_iplabel_datametrie_restapi.pl \
--plugin=apps::monitoring::iplabel::datametrie::restapi::plugin \
--mode=kpi \
--api-username='test' \
--api-password='password' \
--proxyurl='proxy.mycompany:8080' \
--filter-name='SLA - Network check' \
--verbose
```

Expected command output is shown below:

```
OK: KPI 'SLA - Network check' status: PROCESSING, success rate: 100.00 %, sla availability: 100.00 %, performance: 1 | 'SLA - Network check#kpi.success.rate.percentage'=100.00%;;;0;100 'SLA - Network check#kpi.sla.availability.percentage'=100.00%;;;0;100 'SLA - Network check#kpi.performance.count'=1;;;0;
```

The above command checks a specific KPI named *SLA - Network check* (```--mode=kpi --filter-name='SLA - Network check'```) managed by IP-Label datametrie. 
It uses an API account (```--api-username='test' --api-password='password'```) and uses the company proxy (```--proxyurl='proxy.mycompany:8080'```) to connect to the IP-Label datametrie.

The available thresholds as well as all of the options that can be used with this Plugin 
can be displayed by adding the ```--help``` parameter to the command:

```
/usr/lib/centreon/plugins/centreon_monitoring_iplabel_datametrie_restapi.pl --plugin=apps::monitoring::iplabel::datametrie::restapi::plugin --mode=kpi --help
```


### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to api.ip-label.net:443```

This error message means that the Centreon Plugin couldn't successfully connect to the IP-Label datametrie API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the IP-Label datametrie, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
