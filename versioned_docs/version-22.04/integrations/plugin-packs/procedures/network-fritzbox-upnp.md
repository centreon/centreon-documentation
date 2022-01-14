---
id: network-fritzbox-upnp
title: Fritz!Box UPnP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Fritz!Box collects metrics for:
* System
* Traffic

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="System" label="System">

| Metric name           | Description                         | Unit  |
| :-------------------- | :---------------------------------- | :---- |
| connection status     | Connection and physical link status |       |
| system.uptime.seconds | Elapsed time since the last reboot  | s     |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric name                                    | Description                                      | Unit  |
| :--------------------------------------------- | :----------------------------------------------- | :---- |
| system.interface.wan.traffic.in.bitspersecond  | Incoming traffic going through the WAN interface | b/s   |
| system.interface.wan.traffic.out.bitspersecond | Outgoing traffic going through the WAN interface | b/s   |

</TabItem>
</Tabs>

## Prerequisites

To control your Fritz!Box, the UPnP must be configured.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Fritzbox-Upnp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Fritz!Box UPnP* Pack

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Fritzbox-Upnp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-network-fritzbox-upnp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Fritz!Box UPnP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Fritzbox-UPNP-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name             | Description                                                                |
| :-------- | :--------------- | :------------------------------------------------------------------------- |
| X         | UPNPPORT         | Port used (Default: 49000)                                                 |
| X         | UPNPPROTO        | Specify https if needed (Default: 'http')                                  |
|           | UPNPEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command (Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \
    --plugin=network::fritzbox::upnp::plugin \
    --mode=traffic \
    --hostname='10.30.2.79' \
    --port='49000' \
    --proto='http'
```

Expected command output is shown below:

```bash
OK: Traffic In: 1.29 Mb/s, Traffic Out: 1.49 Mb/s | 'system.interface.wan.traffic.in.bitspersecond'=1287234b/s;;;0;10000000 'system.interface.wan.traffic.in.bitspersecond'=1487235b/s;;;0;10000000
```

The command above monitors WAN interface traffic (```--mode=traffic```).

It connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```) on the port 49000 (```--port='49000'```) using http (```--proto='http'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \
    --plugin=network::fritzbox::upnp::plugin \
    --mode=traffic \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)
