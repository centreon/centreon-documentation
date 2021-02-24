---
id: cloud-prometheus-api
title: Prometheus Server
---

## Overview

Prometheus is a metric-oriented monitoring system scraping data from various exporter
over the HTTP protocol.

The Centreon Plugin Pack takes advantage of PromQL and Prometheus APIs to get information
from the time-series database.

## Plugin Pack Assets

### Monitored Objects

* All metrics stored by Prometheus
* Status of the targets

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Expression-->

Generic mode to perform PromQL queries

| Metric name                                          | Description |
| :--------------------------------------------------- | :---------- |
| *instance*#*centreon_prometheus_metric_display_name* | Any metric  |

E.g: Throttled CPU metrics on a specific node: '*amzkubemaster.int.centreon.com*#*throttled*'=2.4699414529294077;;;; 

<!--Target-Status-->

| Metric name           | Description                |
| :-------------------- | :------------------------- |
| targets.active.count  | Number of active targets   |
| targets.dropped.count | Number of dropped targets  |
| targets.up.count      | Number of up targets       |
| targets.down.count    | Number of down targets     |
| targets.unknown.count | Number of unknown targets  | 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

The Centreon Poller should be able to perform queries against Prometheus API over
HTTP. 

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to query Prometheus:

```bash
yum install centreon-plugin-Cloud-Prometheus-Api
```

2. On the Centreon Web interface, install the *Prometheus API* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected toto query Prometheus:

```bash
yum install centreon-plugin-Cloud-Prometheus-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-prometheus-api
```

3. On the Centreon Web interface, install the *Prometheus API* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Select the *Cloud-Prometheus-Api-custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Nom                     | Description                                            |
|:----------|:------------------------|:------------------------------------------------------ |
| X         | PROMETHEUSAPIHOSTNAME   | FQDN or IP of your Prometheus Host                     |
| X         | PROMETHEUSAPIPORT       | Port Prometheus listens connection from                |
| X         | PROMETHEUSAPIURL        | URL Path to reach API (Default: '/api/v1)              |
| X         | PROMETHEUSAPIPROTO      | Protocol used by Prom API (Default: 'http')            |
|           | EXTRAOPTIONS            | Additionnal flags placeholder, e.g: --use-new-perfdata |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

> Note: The test below assumes that you are using the Plugin Pack on top of a Prometheus Server.

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins//centreon_prometheus_api.pl \
    --plugin=cloud::prometheus::restapi::plugin \
    --mode=target-status \
    --hostname=amzprometheus.int.centreon.com \
    --url-path='/api/v1' --port='80' --proto='http' \
    --filter-label='job,coredns' \
    --warning-status='' --critical-status='%{health} !~ /up/' 
```

Expected command output is shown below:

```bash
OK: Targets Active: 2, Dropped: 175, Up: 2, Down: 0, Unknown: 0 - All targets status are ok | 'targets.active.count'=2;;;0; 'targets.dropped.count'=175;;;0; 'targets.up.count'=2;;;0; 'targets.down.count'=0;;;0; 'targets.unknown.count'=0;;;0;
Target 'http://10.244.1.249:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-g4hmt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.1.249:9153][job = coredns][endpoint = http-metrics]
Target 'http://10.244.2.5:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-vh9zt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.2.5:9153][job = coredns][endpoint = http-metrics]
```

The command above check the status of the targets (```--mode=target-status```) linked 
to a Prometheus server (```--hostname=amzprometheus.int.centreon.com```)  exposing its API 
over HTTP and listnening on port 80 (```--port='80' --proto='http'```). 

Only targets linked with the coredns job label are checked (```--filter-label='job,coredns'```). 

The command triggers a CRITICAL if any of the Target status is not equal to "up". 

### How to use the generic Expression mode ?

> Note: The mode below can be used with Host that are not Prometheus Server even if the metric collection use it. The Host must inherit from the *Cloud-Prometheus-Api-custom* Template and the Service needs to be created manually using the *Cloud-Prometheus-Expression-Api-custom* Service Template.

Nothing is better than a clear example to understand how the Expression generic mode works:

```bash
/usr/lib/centreon/plugins//centreon_prometheus_api.pl \
    --plugin=cloud::prometheus::restapi::plugin \
    --mode=expression \
    --hostname=amzprometheus.int.centreon.com \
    --url-path='/api/v1' --port='80' --proto='http' \
    --query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100' \
    --output='%{instance} CPU Requests: %{cpu_requests}%' --multiple-output='Nodes CPU Requests within bounds' \
    --instance='node' \
    --warning-status='%{cpu_requests} > 60' --critical-status='%{cpu_requests} > 70' \
    --use-new-perfdata --verbose 
```

#### ```--query``` option and QUERIES macro

The ```--query``` option allows to define two things: 
    - the Centreon metric name (```cpu_requests```)
    - the PromQL query (```sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100```)

In the Service definition, you can specify several queries that's why the QUERIES macro 
exceptionnaly includes the option definition. Here, QUERIES value would be "--query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'". 

#### ```--instance``` option and INSTANCE macro

The instance option explicits the Prometheus metric dimension/label the Plugin will highlight 
in the graphs (```--instance='node'```). The INSTANCE macro value would be "node" in this example. 

#### ```--multiple-output```/```--output``` options and MULTIPLEOUTPUT/OUTPUT macros

The output-related options gives ability to tune output messages of the check in the following cases:
    - Check a metric on multiple instances
    - Check returning an error

Values can be specified through the corresponding macros, in this example the value of OUTPUT macro
would be "%{instance} CPU Requests: %{cpu_requests}%". Note that we use the Centreon label defined in the ```--query```
option to use the obtained value). We also use the '%{instance}' keyword to display the node name. 

The MULTIPLEOUTPUT value would be "Nodes CPU Requests within bounds"

#### ```--\*-status``` options and \*STATUS macros 

--warning-status and --critical-status purpose is to define when the Plugin will raise an alert. 

In the command above, the check triggers a *WARNING* alarm when the 'cpu_requests' value is above 60 and a 
*CRITICAL* one when it is above 70. 

Note that the Centreon label defined in the ```--query``` options is used again to compare 
the obtained value with thresholds. 

The macros value would be '%{cpu_requests} > 60' for WARNINGSTATUS and '%{cpu_requests} > 70' 
for CRITICALSTATUS.

### Expected output and macros summary

If everything is OK, a output similar to the one below should be displayed: 

```bash
OK: Nodes CPU Requests within bounds | 'amzkubemaster.int.centreon.com#cpu_requests'=37.5;;;; 'amzkubenode1.int.centreon.com#cpu_requests'=35;;;; 'amzkubenode2.int.centreon.com#cpu_requests'=30;;;;
amzkubemaster.int.centreon.com CPU Requests: 37.5%
amzkubenode1.int.centreon.com CPU Requests: 35%
amzkubenode2.int.centreon.com CPU Requests: 30%
```

Here is a summary of the Service's macros definitions: 

| Nom               | Value                                                  |
|:----------------- |:------------------------------------------------------ |
| QUERIES           | --query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'                     |
| INSTANCE          | node                                                   |
| OUTPUT            | URL Path to reach API (Default: '/api/v1)              |
| MULTIPLEOUTPUT    | Nodes CPU Requests within bounds                       |
| WARNINGSTATUS     | %{cpu_requests} > 60                                   |
| CRITICALSTATUS    | %{cpu_requests} > 70                                   |
| EXTRAOPTIONS      | --verbose --use-new-perfdata                           |

### Troubleshooting

#### UNKNOWN: 500 Can't connect to amzprometheus.int.centreon.com:9090 (<error_text) |

When facing this error message, check that port, hostname are OK and double check the 
connection between your Centreon Poller and the Prometheus Server. 

The <error_text> should give more information about the root cause 

#### UNKNOWN: 400 Bad Request |

The PromQL query expression is invalid. Check that it works within the Prometheus WebUI. 






