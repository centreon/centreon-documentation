---
id: hardware-storage-dell-powerstore-restapi
title: Dell PowerStore Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Dell PowerStore collects metrics for:
* Alerts
* Hardware

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                    | Description                                | Unit  |
| :----------------------------- | :----------------------------------------- | :---- |
| alerts.severity.none.count     | Number of alerts with none severity        |       |
| alerts.severity.info.count     | Number of alerts with information severity |       |
| alerts.severity.minor.count    | Number of alerts with minor severity       |       |
| alerts.severity.major.count    | Number of alerts with major severity       |       |
| alerts.severity.critical.count | Number of alerts with critical severity    |       |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name         | Description                  | Unit  |
| :------------------ | :--------------------------- | :---- |
| appliance status    | Appliance lifecycle state    |       |
| battery status      | Battery lifecycle state      |       |
| dimm status         | DIMM lifecycle state         |       |
| disk status         | Disk lifecycle state         |       |
| enclosure status    | Enclosure lifecycle state    |       |
| fan status          | Fan lifecycle state          |       |
| node status         | Node lifecycle state         |       |
| io module status    | IO module lifecycle state    |       |
| power supply status | Power supply lifecycle state |       |
| sfp status          | SFP lifecycle state          |       |

</TabItem>
</Tabs>

## Prerequisites

To control your Dell PowerStore, the Rest API must be configured.
E.g: https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Dell PowerStore Rest API* Pack

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-storage-dell-powerstore-restapi
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Dell PowerStore Rest API* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and apply the *HW-Storage-Dell-Powerstore-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Api username                                                               |
| X         | APIPASSWORD     | Api password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command (Parameters such as ```api-username``` or ```api-password```have to be adjusted):

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

Expected command output is shown below:

```bash
CRITICAL: 1 alerts detected | 'alerts.severity.none.count'=0;;;0; 'alerts.severity.info.count'=1;;;0; 'alerts.severity.minor.count'=0;;;0; 'alerts.severity.major.count'=1;;;0; 'alerts.severity.critical.count'=0;;;0; 'alerts.problems.current.count'=1;;;0;
critical: alert [severity: major] [name: XMS_JBOD_CONTROLLER_SAS1_HEALTH_LEVEL_LEVEL_1_CLEAR] [resource: ] 2021-09-08T08:13:14.804936+00:00
```

The command above monitors alerts (```--mode=alerts```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 443 (```--port='443'```) using https (```--proto='https'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --mode=alerts \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins#http-and-api-checks)
