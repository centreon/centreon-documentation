---
id: network-cisco-esa-restapi
title: Cisco ESA Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Cisco ESA collects metrics for:
* System

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="System" label="System">

| Metric name                                    | Description                      | Unit  |
| :--------------------------------------------- | :------------------------------- | :---- |
| system.cpu.utilization.percentage              | Cpu utilization                  | %     |
| system.memory.usage.percentage                 | Memory usage                     | %     |
| system.swap.usage.percentage                   | Swap usage                       | %     |
| system.resource.conservation.current.count     | Current resource conservation    |       |
| system.queue.messages.quarantine.current.count | Number of messages in quarantine |       |
| system.queue.messages.workqueue.current.count  | Number of messages in workqueue  |       |
| system.queue.utilization.percentage            | Queue utilization                |       |

</TabItem>
</Tabs>

## Prerequisites

To control your Cisco ESA, the Rest API must be configured.
E.g: https://www.cisco.com/c/en/us/support/security/email-security-appliance/products-programming-reference-guides-list.html

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Cisco-Esa-Restapi
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Cisco ESA Rest API* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Cisco-Esa-Restapi
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-network-cisco-esa-restapi
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Cisco ESA Rest API* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and apply the *Net-Cisco-Esa-Restapi-custom* Host Template

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
/usr/lib/centreon/plugins/centreon_cisco_esa_restapi.pl \
    --plugin=network::cisco::esa::restapi::plugin \
    --mode=system \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --warning-cpu-utilization='90' \
    --critical-cpu-utilization='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: System is ok | 'system.cpu.utilization.percentage'=78%;0:90;0:95;0;100 'system.memory.usage.percentage'=5.00%;;;0;100 'system.swap.usage.percentage'=0.00%;;;0;100 'system.resource.conservation.current.count'=0;;;0; 'system.queue.messages.quarantine.current.count'=1;;;0; 'system.queue.messages.workqueue.current.count'=0;;;0; 'system.queue.utilization.percentage'=0.092%;;;0;100
checking system
    cpu utilization: 78.00%
    memory usage: 5.00 %, swap usage: 0.00 %
    current resource conservation: 0
    messages in quarantine: 1, workqueue: 0
    queue utilization: 0.09%
```

The command above monitors system (```--mode=system```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 443 (```--port='443'```) using https (```--proto='https'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_esa_restapi.pl \
    --plugin=network::cisco::esa::restapi::plugin \
    --mode=system \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.md#http-and-api-checks)
