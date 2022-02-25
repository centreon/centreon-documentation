---
id: applications-ericsson-enm-api
title: Ericsson ENM API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Ericsson ENM collects metrics for:
* Nodes

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

The Centreon Pack *Ericsson ENM API* includes a Host Discovery *provider* to automatically discover nodes 
for a given Ericsson Network Manager.

More information about the Host Discovery module is available in the Centreon documentation:
[Host Discovery](../../../monitoring/discovery/hosts-discovery)

</TabItem>
<TabItem value="Services" label="Services">

| Rule name                            | Description                                         |
| :----------------------------------- | :-------------------------------------------------- |
| App-Ericsson-Enm-Api-Node-Celltdd-Id | Discover cells tdd and monitor status               |
| App-Ericsson-Enm-Api-Node-Fru-Id     | Discover field replaceable units and monitor status |
| App-Ericsson-Enm-Api-Node-Id         | Discover nodes and monitor components (frus, cells) |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Nodes" label="Nodes">

| Metric name                 | Description                                  | Unit  |
| :-------------------------- | :------------------------------------------- | :---- |
| nodes.total.count           | Number of nodes                              |       |
| node synchronization status | Current synchronization status of the node   |       |
| fru status                  | Current status of the field replaceable unit |       |
| cell tdd status             | Current status of the cell tdd               |       |

</TabItem>
</Tabs>

## Prerequisites

To control your Ericsson Network Manager, the Rest API must be configured.
The pack supports only the authentication by username/password.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Ericsson-Enm-Api
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Ericsson ENM API* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Ericsson-Enm-Api
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-applications-ericsson-enm-api
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Ericsson ENM API* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and apply the *App-Ericsson-Enm-Api-custom* Host Template

> Once the template applied, some Macros have to be configured:
| Mandatory | Name                    | Description                                                                |
| :-------- | :---------------------- | :------------------------------------------------------------------------- |
| X         | ERICSSONENMAPIPORT      | Port used (Default: 443)                                                   |
| X         | ERICSSONENMAPIPROTO     | Specify https if needed (Default: 'https')                                 |
| X         | ERICSSONENMAPIUSERNAME  | Api username                                                               |
| X         | ERICSSONENMAPIPASSWORD  | Api password                                                               |
|           | ERICSSONENMEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command (Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
    --plugin=apps::ericsson::enm::api::plugin \
    --mode=nodes \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --http-backend='curl' \
    --insecure \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-node-id='ORA01200E_02' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Node 'ORA01200E_02' synchronization status: synchronized - All field replaceable units are ok - All tdd cells are ok | 'nodes.total.count'=1;;;0;
checking node 'ORA01200E_02'
    synchronization status: synchronized
    field replaceable unit 'BB-1' [label: ORA01200E_02] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-1' [label: RRU-1_ORA4043_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-10' [label: RRU-10_ORA4010_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-11' [label: RRU-11_ORA4019_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-12' [label: RRU-12_ORA4024_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-13' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-14' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-15' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-2' [label: RRU-2_ORA4045_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-3' [label: RRU-3_ORA4047_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-4' [label: RRU-4_ORA4049_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-5' [label: RRU-5_ORA4056_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-6' [label: RRU-6_ORA4054_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-7' [label: RRU-7_ORA4052_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-8' [label: RRU-8_ORA4050_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-9' [label: RRU-9_ORA4005_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    tdd cell 'ORA4005_11' [label: ORA-Metro-S31A_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4005_12' [label: ORA-Metro-S31B_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4010_11' [label: ORA-Metro-S36_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4019_11' [label: ORA-Metro-S41_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_11' [label: ORA-Metro-S46A_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_12' [label: ORA-Metro-S46B_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4043_11' [label: ORA-Metro-T2F04_245] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_11' [label: ORA-Metro-T2F16_325] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_12' [label: ORA-Metro-T2F16-RDS_140] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_11' [label: ORA-Metro-T2F28_10] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_12' [label: ORA-Metro-T2F28-RDS_195] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4049_11' [label: ORA-Metro-T2F34_80] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4050_11' [label: ORA-Metro-T2F94_100] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_11' [label: ORA-Metro-T2F90_65] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_12' [label: ORA-Metro-T2F90-RDS_215] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_11' [label: ORA-Metro-T2F80_0] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_12' [label: ORA-Metro-T2F80-RDS_150] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4056_11' [label: ORA-Metro-T2F68_270] operational state: enabled, admin state: unlocked
```

The command above monitors nodes (```--mode=nodes```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 215 (```--port='443'```) using https (```--proto='https'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
    --plugin=apps::ericsson::enm::api::plugin \
    --mode=nodes \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins#http-and-api-checks)