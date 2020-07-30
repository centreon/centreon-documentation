---
id: applications-monitoring-iplabel-newtest-restapi
title: IP-Label Newtest Rest API
---

## Overview

IP-Label is a specialist in measurement of the quality of the user’s experience. 

At representative points within your company, each Newtest Robot regularly simulates 
business transactions, providing instant insight into the availability, response times 
and performance of your critical application services.

## Plugin-Pack Assets

### Monitored Objects

* Newtest Robots

## Monitored Metrics 

<!--DOCUSAURUS_CODE_TABS-->
<!--Scenario-->

| Metric name                              | Description                | Unit |
| :--------------------------------------- | :------------------------- | :----|
| scenario.status.green.percentage         | Green scenario percentage  |   %  |
| scenario.status.red.percentage           | Red scenario percentage    |   %  |
| scenario.status.orange.percentage        | Orange scenario percentage |   %  |
| scenario.status.grey.percentage          | Grey scenario percentage   |   %  |
| scenario.execution.time.milliseconds     | Scenario exeecution time   |   ms |

The ```--filter-robot-name``` and ```--filter-scenario-name``` options allow to narrow results to specific measurement.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

### IP-Label Newtest Configuration

A read-only account (login/password) to the Newtest RestAPI is required. 

The default URL path queried by the Plugin is '/rest/api/results'. This path can be changed in the related Host Macro
if necessary.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor IP-Label Newtest instances:

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Newtest-Restapi
```

2. On the Centreon Web interface, install the monitoring templates from the Centreon Plugin-Pack on the
Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor IP-Label Newtest instances:

```bash
yum install centreon-plugin-Applications-Monitoring-Iplabel-Newtest-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-monitoring-iplabel-newtest-restapi
```

3. On the Centreon Web interface, install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Add a new Host into Centreon
* Apply the *App-Monitoring-Iplabel-Newtest-Restapi-custom* Host Template
* Fill the Macros listed as mandatory below:  

| Mandatory   | Name                             | Description                                                                                                              |
| :---------- | :------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| X           | IPLABELNEWTESTAPIHOSTNAME        | Api URL.                                                                                                                 |
| X           | IPLABELNEWTESTAPIUSERNAME        | Api username                                                                                                             |
| X           | IPLABELNEWTESTAPIPASSWORD        | Api password                                                                                                             |
|             | IPLABELNEWTESTAPIPROTO           | Protocol to use. Default: 'https'                                                                                        |
|             | IPLABELNEWTESTAPIPORT            | Port to use. Default: ```443```                                                                                          |
|             | IPLABELNEWTESTAPIEXTRAOPTIONS    | Customize it with your own if needed. E.g. proxy: ```--http-backend=curl --proxyurl='https://proxy.mycompany:3128'```    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command: 

```bash
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_newtest_restapi.pl \
--plugin=apps::monitoring::iplabel::newtest::restapi::plugin --mode=scenarios \
--hostname='the.newtest.fqdn' --api-username='ro_user' --api-password='strong_psswd' \
--port='443' --proto='https' --http-backend=curl --filter-robot-name='^HELSINKI$' \
--filter-scenario-name='^Sharepoint$'
```

Expected command output is shown below:

```
OK: Robot 'HELSINKI' scenario 'Sharepoint' green status: 100.00 %, red status: 0.00 %, orange status: 0.00 %, grey status: 0.00 %, execution time: 45000 ms
Extended status information 	
checking robot 'HELSINKI'
scenario 'Sharepoint' green status: 100.00 %, red status: 0.00 %, orange status: 0.00 %, grey status: 0.00 %, execution time: 45000 ms
```

The above command checks a specific Newtest Robot at Helsinski (```--filter-robot-name='^HELSINKI$'```) and focus on the Sharepoint scenario (```--filter-scenario-name='^Sharepoint$'```).

It uses an API account (```--api-username='ro_user' --api-password='strong_psswd'```) and the HTTPS protocol to connect to the IP-Label Newtest API
(```--proto='https'```).

The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the ```--help``` parameter to the command:

```
/usr/lib/centreon/plugins//centreon_monitoring_iplabel_newtest_restapi.pl \
        --plugin=apps::monitoring::iplabel::newtest::restapi::plugin \
        --mode=scenarios \
        --help 
```

### Why do I get the following error: 

#### ```UNKNOWN: 500 Can't connect to the.newtest.fqdn:443```

This error message means that the Centreon Plugin couldn't successfully connect to the IP-Label Newtest API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl``` option in the command.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

When using a proxy to connect to the IP-Label Newtest, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
