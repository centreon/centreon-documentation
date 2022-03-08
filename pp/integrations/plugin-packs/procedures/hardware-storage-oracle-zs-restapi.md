---
id: hardware-storage-oracle-zs-restapi
title: Oracle ZS Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Oracle ZS collects metrics for:
* Hardware
* Pools

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name         | Description        | Unit  |
| :------------------ | :----------------- | :---- |
| chassis status      | Chassis state      |       |
| cpu status          | CPU state          |       |
| disk status         | Disk state         |       |
| fan status          | Fan state          |       |
| memory status       | Memory state       |       |
| power supply status | Power supply state |       |
| slot status         | Slot state         |       |

</TabItem>
<TabItem value="Pools" label="Pools">

| Metric name                              | Description               | Unit  |
| :--------------------------------------- | :------------------------ | :---- |
| pool status                              | Pool status               |       |
| *pool\_name*#pool.space.usage.bytes      | Space usage               | B     |
| *pool\_name*#pool.space.free.bytes       | Free space                | B     |
| *pool\_name*#pool.space.usage.percentage | Space usage in percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

To control your Oracle ZS, the Rest API must be configured.
E.g: https://docs.oracle.com/cd/E79446_01/html/E79460/index

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Oracle-Zs-Restapi
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Oracle ZS Rest API* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Oracle-Zs-Restapi
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-storage-oracle-zs-restapi
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Oracle ZS Rest API* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and apply the *HW-Storage-Oracle-Zs-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 215)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Api username                                                               |
| X         | APIPASSWORD     | Api password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command (Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_oracle_zs_restapi.pl \
    --plugin=storage::oracle::zs::restapi::plugin \
    --mode=pools \
    --hostname='10.30.2.79' \
    --port='215' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --verbose
```

Expected command output is shown below:

```bash
OK: All pools are ok | 'Pool_Exalogic#pool.space.usage.bytes'=19730301416448B;;;0;33432025432064 'Pool_Exalogic#pool.space.free.bytes'=13176557201408B;;;0;33432025432064 'Pool_Exalogic#pool.space.usage.percentage'=59.02%;;;0;100
Pool 'Pool_Exadata' status : exported
Pool 'Pool_Exalogic' status : online, space usage total: 30.41 TB used: 17.94 TB (59.02%) free: 11.98 TB (39.41%)
```

The command above monitors pools (```--mode=pools```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 215 (```--port='215'```) using https (```--proto='https'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_oracle_zs_restapi.pl \
    --plugin=storage::oracle::zs::restapi::plugin \
    --mode=pools \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.md#http-and-api-checks)
