---
id: applications-monitoring-ntopng-restapi
title: NtopNG Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack NtopNG brings 1 host template:
* App-Monitoring-Ntopng-Restapi-custom

It brings the following Service Templates:

| Service Alias  | Service Template                             | Default | Discovery |
|:---------------|:---------------------------------------------|:--------|:----------|
| Alerts         | App-Monitoring-Ntopng-Restapi-Alerts         | X       |           |
| Host-Flows     | App-Monitoring-Ntopng-Restapi-Host-Flows     |         |           |
| Netflow-Health | App-Monitoring-Ntopng-Restapi-Netflow-Health | X       |           |
| Probe-Health   | App-Monitoring-Ntopng-Restapi-Probe-Health   | X       |           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                       | Description                                  | Unit  |
| :-------------------------------- | :------------------------------------------- | :---- |
| alerts.severity.error.count       | Number of alerts with error severity         |       |
| alerts.severity.warning.count     | Number of alerts with warning severity       |       |
| alerts.severity.info.count        | Number of alerts with informational severity |       |
| alert status                      | Current alert status                         |       |
| *type*#alerts.type.detected.count | Number of alerts detected by type            |       |

</TabItem>
<TabItem value="Host-Flows" label="Host-Flows">

| Metric name                                 | Description                               | Unit  |
| :------------------------------------------ | :---------------------------------------- | :---- |
| *ipaddress*#host.packets.received.persecond | Number of incoming packets per IP address |       |
| *ipaddress*#host.packets.sent.persecond     | Number of outgoing packets per IP address |       |
| *ipaddress*#host.traffic.in.bitspersecond   | Incoming traffic per IP address           | b/s   |
| *ipaddress*#host.traffic.out.bitspersecond  | Outgoing traffic per IP address           | b/s   |

</TabItem>
<TabItem value="Netflow-Health" label="Netflow-Health">

| Metric name                  | Description                          | Unit  |
| :--------------------------- | :----------------------------------- | :---- |
| flows.detected.count         | Number of flows detected             |       |
| flows.alerted.detected.count | Number of alerted flows detected     |       |
| flows.alerted.percentage     | Percentage of alerted flows detected | %     |
| packets.download.persecond   | Number of incoming packets           |       |
| packets.upload.persecond     | Number of outgoing packets           |       |
| traffic.in.bitspersecond     | Incoming traffic                     | b/s   |
| traffic.out.bitspersecond    | Outgoing traffic                     | b/s   |

</TabItem>
<TabItem value="Probe-Health" label="Probe-Health">

| Metric name                | Description              | Unit  |
| :------------------------- | :----------------------- | :---- |
| cpu.utilization.percentage | Average total CPU usage  |       |
| cpu.load.percentage        | System CPU load          |       |
| memory.usage.percentage    | Current memory usage     | %     |
| alerts.dropped.persecond   | Number of dropped alerts |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor your NtopNG, the Rest API must be configured.
E.g: https://www.ntop.org/guides/ntopng/api/

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **NtopNG RestAPI** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Ntopng-Restapi
```

2. On the Centreon Web interface, install the **NtopNG RestAPI** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **NtopNG RestAPI** resources:

```bash
yum install centreon-plugin-Applications-Monitoring-Ntopng-Restapi
```

2. Install the **NtopNG RestAPI** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-monitoring-ntopng-restapi
```

3. On the Centreon Web interface, install the **NtopNG RestAPI** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **NtopNG RestAPI** server settings
* Select the **App-Monitoring-Ntopng-Restapi-custom** template to apply to the Host

> Once the template is applied, some Macros have to be configured:

| Mandatory | Name                | Description                                                                  |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | NTOPNGAPIPORT         | Port used (Default: 3000)                                                  |
| X         | NTOPNGAPIPROTO        | Specify http if needed (default: 'http')                                   |
| X         | NTOPNGAPIUSERNAME     | Api username                                                               |
| X         | NTOPNGAPIPASSWORD     | Api password                                                               |
|           | NTOPNGAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
    --plugin=apps::monitoring::ntopng::restapi::plugin \
    --mode=probe-health \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: cpu utilization: 2.10%, cpu load: 0.06, memory used: 11.83 %, dropped alerts: 0.00/s | 'cpu.utilization.percentage'=2.10%;;;0;100 'cpu.load.percentage'=0.06;;;0; 'memory.usage.percentage'=11.83%;;;0;100 'alerts.dropped.persecond'=0.00/s;;;0;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
    --plugin=apps::monitoring::ntopng::restapi::plugin \
    --mode=probe-health \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_monitoring_ntopng_restapi.pl \
    --plugin=apps::monitoring::ntopng::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
