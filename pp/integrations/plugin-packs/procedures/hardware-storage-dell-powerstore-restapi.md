---
id: hardware-storage-dell-powerstore-restapi
title: Dell PowerStore Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **Dell PowerStore** brings a host template:
* HW-Storage-Dell-Powerstore-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                            | Description    | Default |
|:--------------|:--------------------------------------------|:---------------|:--------|
| Alerts        | HW-Storage-Dell-Powerstore-Alerts-Restapi   | Check alerts   | X       |
| Clusters      | HW-Storage-Dell-Powerstore-Clusters-Restapi | Check clusters | X       |
| Hardware      | HW-Storage-Dell-Powerstore-Hardware-Restapi | Check hardware | X       |
| Memory        | HW-Storage-Dell-Powerstore-Memory-Restapi   | Check memory   | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                    | Unit  |
| :----------------------------- | :---- |
| alerts.severity.none.count     |       |
| alerts.severity.info.count     |       |
| alerts.severity.minor.count    |       |
| alerts.severity.major.count    |       |
| alerts.severity.critical.count |       |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Metric name                                                | Unit  |
| :--------------------------------------------------------- | :---- |
| clusters.detected.count                                    |       |
| *cluster_id*#cluster.io.read.latency.5m.milliseconds       | ms    |
| *cluster_id*#cluster.io.read.latency.30m.milliseconds      | ms    |
| *cluster_id*#cluster.io.read.latency.1h.milliseconds       | ms    |
| *cluster_id*#cluster.io.read.latency.24h.milliseconds      | ms    |
| *cluster_id*#cluster.io.write.latency.5m.milliseconds      | ms    |
| *cluster_id*#cluster.io.write.latency.30m.milliseconds     | ms    |
| *cluster_id*#cluster.io.write.latency.1h.milliseconds      | ms    |
| *cluster_id*#cluster.io.write.latency.24h.milliseconds     | ms    |
| *cluster_id*#cluster.io.read.5m.iops                       |       |
| *cluster_id*#cluster.io.read.30m.iops                      |       |
| *cluster_id*#cluster.io.read.1h.iops                       |       |
| *cluster_id*#cluster.io.read.24h.iops                      |       |
| *cluster_id*#cluster.io.write.5m.iops                      |       |
| *cluster_id*#cluster.io.write.30m.iops                     |       |
| *cluster_id*#cluster.io.write.1h.iops                      |       |
| *cluster_id*#cluster.io.write.24h.iops                     |       |
| *cluster_id*#cluster.io.read.bandwidth.5m.bytespersecond   | B/s   |
| *cluster_id*#cluster.io.read.bandwidth.30m.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.read.bandwidth.1h.bytespersecond   | B/s   |
| *cluster_id*#cluster.io.read.bandwidth.24h.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.5m.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.30m.bytespersecond | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.1h.bytespersecond  | B/s   |
| *cluster_id*#cluster.io.write.bandwidth.24h.bytespersecond | B/s   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name         | Unit  |
| :------------------ | :---- |
| appliance status    |       |
| battery status      |       |
| dimm status         |       |
| disk status         |       |
| enclosure status    |       |
| fan status          |       |
| node status         |       |
| io module status    |       |
| power supply status |       |
| sfp status          |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                            | Unit  |
| :------------------------------------- | :---- |
| *appliance_id*#memory.usage.bytes      | B     |
| *appliance_id*#memory.free.bytes       | B     |
| *appliance_id*#memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To control your Dell PowerStore, the Rest API must be configured.
E.g: https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **Dell PowerStore** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. On the Centreon web interface, install the **Dell PowerStore Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **Dell PowerStore** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. Install the **Dell PowerStore Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-dell-powerstore-restapi
```

3. On the Centreon web interface, install the **Dell PowerStore Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **Dell PowerStore** server settings.
* Apply the **HW-Storage-Dell-Powerstore-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Api username                                                               |
| X         | APIPASSWORD     | Api password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --mode=alerts \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --verbose
```

The expected command output is shown below:

```bash
CRITICAL: 1 alerts detected | 'alerts.severity.none.count'=0;;;0; 'alerts.severity.info.count'=1;;;0; 'alerts.severity.minor.count'=0;;;0; 'alerts.severity.major.count'=1;;;0; 'alerts.severity.critical.count'=0;;;0; 'alerts.problems.current.count'=1;;;0;
critical: alert [severity: major] [name: XMS_JBOD_CONTROLLER_SAS1_HEALTH_LEVEL_LEVEL_1_CLEAR] [resource: ] 2021-09-08T08:13:14.804936+00:00
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --mode=alerts \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
