---
id: applications-monitoring-alyvix-restapi
title: Alyvix Server
---

## Overview

Alyvix is an open source APM software tool for visual monitoring.

Build end-user bots visually interacting with any Windows application like ERPs or your favourite browser. 
Measure end-user experiences: Alyvix records the click-to-appearance responsiveness of each transaction.
Report IT service quality to support technical and business actions.

The Centreon Plugin-Pack *Alyvix Server* aims to collect the execution status and duration of the Alyvix's *testcases* and their *transactions*
by requesting the dedicated built-in RestAPI.

> The *Alyvix Server* Plugin-Pack **can not** be used with the Open-Source free version of Alyvix, as the Rest API feature is only
> available in the commercial version. Get in touch with your Centreon Sales representative to get a quote!

## Plugin-Pack assets

### Monitored objects

* *Testcases* and *transactions* details of Alyvix Server

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Testcases-->

| Rule name                                    | Description                                                        |
| :------------------------------------------- | :----------------------------------------------------------------- |
| App-Monitoring-Alyvix-Restapi-Testcase-Name  | Discover all the testcases handled by Alyvix Server                |

<!--END_DOCUSAURUS_CODE_TABS-->

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Testcases-Global-->

* Global (for each *testcase*)

| Metric name                        | Description                                    | Unit |
|:-----------------------------------|:-----------------------------------------------|:-----|
| *testcase_alias*#testcase-state    | Status of the case job execution               |      |
| *testcase_alias*#testcase-duration | Total time of the case job execution           | ms   |

* Per *testcase* (for each *transaction*)

| Metric name                                               | Description                                           | Unit |
|:----------------------------------------------------------|:------------------------------------------------------|:-----|
| *testcase_alias*~*transaction_alias*#transaction-state    | Status of the the transaction job execution           |      |
| *testcase_alias*~*transaction_alias*#transaction-duration | Total time of the transaction job execution           | ms   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The *Alyvix Server* must be installed and configured on a dedicated Windows Server machine.
The Centreon Pollers must as well be able to reach the Alyvix Rest API on the TCP/80 or TCP/443 port(s).

More information about how to configure Alyvix and set up *testcases* can be found in the official documentation:
https://www.alyvix.com/learn/\.

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Alyvix Server* ressources:


```bash
yum install centreon-plugin-centreon-plugin-Applications-Monitoring-Alyvix-Restapi
```

2. On the Centreon Web interface, install the *Alyvix Server* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *Alyvix Server* ressources:

```bash
yum install centreon-plugin-centreon-plugin-Applications-Monitoring-Alyvix-Restapi
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-monitoring-alyvix-restapi
```

3. On the Centreon Web interface, install the *Alyvix Server* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Alyvix Server settings
* Select the *App-Monitoring-Alyvix-Restapi-custom*.

If needed, configure the following Host Macros:

| Mandatory | Name              | Description                                                                        |
|:----------|:------------------|:-----------------------------------------------------------------------------------|
| X         | ALYVIXAPIPORT     | RestAPI port of the Alyvix Server (Default: '80')                                  |
| X         | ALYVIXAPIPROTOCOL | Protocol used to reach the Alyvix Server (Default: 'http')                         |
| X         | ALYVIXAPIURLPATH  | URL path of the API (Default: '/v0/')                                              |
|           | ALYVIXAPIUSERNAME | Username to authenticate against the API (**not available yet**)                   |
|           | ALYVIXAPIPASSWORD | Password to authenticate against the API (**not available yet**)                   |
|           | EXTRAOPTIONS      | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

> This template will deploy one "Global" Service that will monitor all the *testcases*.
> Use the **Service Discovery** feature if you wish to get one Service per *testcase*.

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (some of the parameters such as ```--proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \
    --plugin=apps::monitoring::alyvix::restapi::plugin \
    --mode=testcases \
    --hostname='10.0.0.1' \
    --proto='http' \
    --port='80' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --filter-testcase='case_app1|case_app2' \
    --critical-testcase-state='%{state} eq "FAILED"' \
    --critical-transaction-state='%{state} eq "FAILED"' \
    --warning-testcase-duration='40000' \
    --critical-testcase-duration='60000' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: All test cases are ok | 'case_app1#testcase.duration.milliseconds'=3883ms;;;0; 'case_app1~1_openapp1#transaction.duration.milliseconds'=77ms;;;0;
'case_app2#testcase.duration.milliseconds'=30658ms;;;0; 'case_app2~1_open_app1#transaction.duration.milliseconds'=3ms;;;0;
'case_app2~2_open_app2#transaction.duration.milliseconds'=4ms;;;0; 'case_app2~3_delay#transaction.duration.milliseconds'=76ms;;;0;
'case_app2~4_open_app1_explorer#transaction.duration.milliseconds'=0ms;;;0; 'case_app2~5_open_file#transaction.duration.milliseconds'=10000ms;;;0;
'case_app2~6_close_app1#transaction.duration.milliseconds'=104ms;;;0; 'case_app2~7_close_app2#transaction.duration.milliseconds'=0ms;;;0;
'case_app2~8_check_picture#transaction.duration.milliseconds'=0ms;;;0;
checking test case 'case_app1'
    duration: 3883 ms, state: OK
    transaction '1_openapp1' state: OK, duration: 77 ms
checking test case 'case_app2'
    duration: 30658 ms, state: OK
    transaction '1_open_app1' state: OK, duration: 3 ms
    transaction '2_open_app2' state: OK, duration: 4 ms
    transaction '3_delay' state: OK, duration: 76 ms
    transaction '4_open_app1_explorer' state: OK, duration: 0 ms
    transaction '5_open_file' state: OK, duration: 10000 ms
    transaction '6_close_app1' state: OK, duration: 104 ms
    transaction '7_close_app2' state: OK, duration: 0 ms
    transaction '8_check_picture' state: OK, duration: 0ms
```

In this example, the Plugin gets the execution status and duration of Alyvix Server *testcases* (```--plugin=apps::monitoring::alyvix::restapi::plugin --mode=testcases```)
by requesting the Alyvix RestAPI at *http://10.0.0.1:80* (```--hostname='10.0.0.1' --proto='http' --port='80'```).
Only the *testcases* named *case_app1* & *case_app2* will be displayed (```--filter-testcase='case_app1|case_app2'```).

This command would trigger a WARNING alarm if the execution duration of one of the *testcases* is greater than 40s -40000ms-
```--warning-testcase-duration='40000'```).

A CRITICAL alarm would however be triggered in the following cases:
* the execution duration of one of the *testcases* is greater than 60s -60000ms- (```--critical-testcase-duration='60000'```)
* the reported status of a *testcase* is "FAILED" (```--critical-testcase-state='%{state} eq "FAILED"'```)
* the reported status of at least one of a *testcase*'s *transaction* is "FAILED" (```--critical-transaction-state='%{state} eq "FAILED"'```)

All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ```--help``` 
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_alyvix_restapi.pl \
    --plugin=apps::monitoring::alyvix::restapi::plugin \
    --mode=testcases \
    --help
```

### Why do I get the following message: ```UNKNOWN: 500 Can't connect to 10.0.0.1:80 |```

This error message means that the Centreon Plugin couldn't successfully connect to the Alyvix Server RestAPI.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

When using a proxy to connect to the Alyvix Server RestAPI, this error
message means that the Centreon Plugin library does not support the proxy
connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the
following option to the command: ```--http-backend='curl'```.
