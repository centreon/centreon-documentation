---
id: applications-monitoring-openmetrics
title: OpenMetrics
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Sep 12 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Openmetrics
```

## Centreon Configuration

### Create a host using the appropriate template

#### Checking using a web page

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field            | Value                          |
| :--------------- | :----------------------------- |
| Name             | *Name of the host*             |
| Alias            | *Description*                  |
| IP Address / DNS | *Can be localhost*             |
| Monitored from   | *Poller used to monitor*       |
| Templates        | App-Monitoring-Openmetrics-Web |

The following host macros should be set as shown:

| Macro               | Value                                       |
| :------------------ | :------------------------------------------ |
| OPENMETRICSPORT     | *OpenMetrics web page port*                 |
| OPENMETRICSPROTO    | *OpenMetrics web page protocol*             |
| OPENMETRICSURLPATH  | *OpenMetrics web page url path*             |
| OPENMETRICSUSERNAME | *OpenMetrics web page username (if needed)* |
| OPENMETRICSPASSWORD | *OpenMetrics web page password(if needed)*  |

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following service will be created:

  - Scrape-Metrics

#### Checking using a remote file

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field            | Value                           |
| :--------------- | :------------------------------ |
| Name             | *Name of the host*              |
| Alias            | *Description*                   |
| IP Address / DNS | *Can be localhost*              |
| Monitored from   | *Poller used to monitor*        |
| Templates        | App-Monitoring-Openmetrics-File |

The following host macros should be set as shown:

| Macro               | Value                                  |
| :------------------ | :------------------------------------- |
| OPENMETRICSFILEPATH | *OpenMetrics file path on remote host* |

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following service will be created:

  - Scrape-Metrics

### Set the service macros

The following service macros should be set as shown:

| Macro             | Value                                                             |
| :---------------- | :---------------------------------------------------------------- |
| FILTERMETRICS     | *Name of the metrics to filter on*                                |
| WARNING           | *Warning threshold*                                               |
| CRITICAL          | *Critical threshold*                                              |
| INSTANCE          | *Label from dimensions to get the instance value from*            |
| FILTERINSTANCE    | *Filter on some instance*                                         |
| SUBINSTANCE       | *Set the label from dimensions to get the subinstance value from* |
| FILTERSUBINSTANCE | *Filter on some subinstance*                                      |

Examples on command line:

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics --custommode=web
--hostname=10.2.3.4 --port=9100 --verbose --filter-metrics='node_network_up' --critical='0:0' --instance='device'
--new-perfdata`

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics --custommode=web
--hostname=10.2.3.4 --port=9100 --verbose --filter-metrics='node_cpu_seconds_total' --instance='cpu'
--subinstance='mode' --filter-subinstance='idle'`

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics --custommode=file
--command-options='/tmp/metrics' --filter-metrics='cpu' --verbose`

`# perl centreon_plugins.pl --plugin=apps::monitoring::openmetrics::plugin --mode=scrape-metrics --custommode=file
--hostname=10.2.3.4 --ssh-option='-l=centreon-engine' --ssh-option='-p=52' --command-options='/my/app/path/metrics'
--verbose`

### Duplicate service to monitor more metrics

You can now duplicate the service to monitor several metrics.

