---
id: cloud-gcp-management-stackdriver
title: Google Stackdriver
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Google Stackdriver collects metrics:
* Get-metrics

A description of all GCP metrics can be found here: https://cloud.google.com/monitoring/api/metrics_gcp

### Collected Metrics

For all collected metrics, following *aggregation* are available: _average_, _minimum_, _maximum_ and _total_.

<!--DOCUSAURUS_CODE_TABS-->

<!--Get-metrics-->

| Metric name                         | Description | Unit  |
| :---------------------------------- | :---------- | :---- |
| *aggregation*#*metric_display_name* | Any metric  |       |

E.g: average metric *https/backend_latencies* = *average#https.backend_latencies* 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Google Cloud Configuration

Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

How to create a service account key: https://developers.google.com/identity/protocols/oauth2/service-account

### Centreon

Deploy the key file on every Poller expected to monitor Google Cloud resources. The key file 
should be readable by centreon-engine poller.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Cloud-Gcp-Management-Stackdriver-Api
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Google Stackdriver* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Cloud-Gcp-Management-Stackdriver-Api
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-cloud-gcp-management-stackdriver
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Google Stackdriver* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and apply the *Cloud-Gcp-Storage-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory   | Name                 | Description                                                                                 |
| :---------- | :------------------- | :------------------------------------------------------------------------------------------ |
| X           | GCPKEYFILEPATH       | Service account key json file                                                               |
| X           | GCPSCOPEENDPOINT     | Google Scope. Default: https://www.googleapis.com/auth/cloud-platform                       |
|             | PROXYURL             | Configure proxy URL                                                                         |
|             | GCPEXTRAOPTIONS      | Any extra option you may want to add to every command_line (eg. a --verbose flag)           |
|             | DUMMYSTATUS          | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT          | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> **WARNING**: Service account key file must be stored on Centreon Poller. *centreon-engine* user account must have read privileges on that file. 

* Add a new service linked the Host and apply *Cloud-Gcp-Management-Stackdriver-Get-Metrics-Api-custom* Service Template

> Once the template applied, some Macros have to be configured:

| Mandatory   | Name                 | Description                                                                                 |
| :---------- | :------------------- | :------------------------------------------------------------------------------------------ |
| X           | GCPDIMENSIONNAME     | The name of the dimension to filter on.                                                     |
| X           | GCPDIMENSIONOPERATOR | Define the type of filter match to use. Can be: _equals_, _regexp_, _starts_.               |
| X           | GCPDIMENSIONVALUE    | Value to the dimension monitor.                                                             |
| X           | API                  | Google Cloud API. Eg.: *compute.googleapis.com*                                             |
| X           | METRIC               | Metric to monitor. Eg.: *instance/cpu/utilization*                                          |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_gcp_management_stackdriver_api.pl \
    --plugin=cloud::google::gcp::management::stackdriver::plugin \
    --mode=get-metrics \
    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \
    --dimension-name='metric.labels.instance_name' \
    --dimension-operator='equals' \
    --dimension-value='instance-centreon1-drb5' \
    --metric='instance/cpu/utilization' \
    --api='compute.googleapis.com' \
    --aggregation='average' \
    --warning-metric='90' \
    --critical-metric='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Metric 'instance/cpu/utilization' of resource 'instance-centreon1-drb5' value is 0.0111772524293797 | 'average#instance.cpu.utilization'=0.0111772524293797;0:90;0:95;;
Metric 'instance/cpu/utilization' of resource 'instance-centreon1-drb5' value is 0.0111772524293797
```

The command above monitors cpu utilization of a Google Compute Engine instance (```--mode=instance/cpu/utilization --api=compute.googleapis.com```) identified
by the name *instance-centreon1-drb5* (```--dimension-name='metric.labels.instance_name' --dimension-operator='equals' --dimension-value='instance-centreon1-drb5'```).

This command would trigger a WARNING alarm if cpu utilization is more than 90% 
(```--warning-metric='90'```) and a CRITICAL alarm for more than 95% (```--critical-metric='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_gcp_management_stackdriver_api.pl \
    --plugin=cloud::google::gcp::management::stackdriver::plugin \
    --mode=get-metrics \
    --help
```

### Why do I get the following result ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Google Cloud does not have any value for the requested period.

This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric 
has been collected and will prevent the UNKNOWN error message. 
