---
id: hardware-storage-hp-storeonce3-restapi
title: HP StoreOnce 3.x Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack HP StoreOnce brings a host template:
* HW-Storage-Hp-Storeonce3-Restapi-custom

It brings the following service templates:

| Service Alias    | Service Template                                  | Default | Discovery |
|:-----------------|:--------------------------------------------------|:--------|:----------|
| Cluster-Usage    | HW-Storage-Hp-Storeonce3-Cluster-Usage-Restapi    | X       |           |
| Fcs-Usage        | HW-Storage-Hp-Storeonce3-Fcs-Usage-Restapi        |         |           |
| Nas-Usage        | HW-Storage-Hp-Storeonce3-Nas-Usage-Restapi        |         |           |
| Serviceset-Usage | HW-Storage-Hp-Storeonce3-Serviceset-Usage-Restapi | X       |           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cluster-Usage" label="Cluster-Usage">

| Metric name                                        | Description                        | Unit  |
| :------------------------------------------------- | :--------------------------------- | :---- |
| cluster status                                     | Current overall cluster status     |       |
| *appliance_name*#cluster.space.usage.bytes         | Space used on the cluster          | B     |
| *appliance_name*#cluster.deduplication.ratio.count | Deduplication ratio on the cluster |       |

</TabItem>
<TabItem value="Fcs-Usage" label="Fcs-Usage">

| Metric name                              | Description                                             | Unit  |
| :--------------------------------------- | :------------------------------------------------------ | :---- |
| fcs status                               | Current overall federated catalyst store status         |       |
| *fcs_name*#fcs.space.usage.bytes         | Space used on the federated catalyst store              | B     |
| *fcs_name*#fcs.deduplication.ratio.count | Deduplication ratio on the federated catalyst store     |       |
| *fcs_name*#fcs.items.count               | Current number of items on the federated catalyst store |       |

</TabItem>
<TabItem value="Nas-Usage" label="Nas-Usage">

| Metric name  | Description                  | Unit  |
| :----------- | :--------------------------- | :---- |
| nas status   | Current overall nas status   |       |
| share status | Current overall share status |       |

</TabItem>
<TabItem value="Serviceset-Usage" label="Serviceset-Usage">

| Metric name                                             | Description                            | Unit  |
| :------------------------------------------------------ | :------------------------------------- | :---- |
| service set status                                      | Current overall service set status     |       |
| *serviceset_alias*#serviceset.space.usage.bytes         | Space used on the service set          | B     |
| *serviceset_alias*#serviceset.deduplication.ratio.count | Deduplication ratio on the service set |       |

</TabItem>
</Tabs>

## Prerequisites

The Pack only supports the version 3.x of HP StoreOnce. 
To monitor your HP StoreOnce, a user with read privileges is required. Please refer to their official documentation: https://support.hpe.com/hpesc/public/docDisplay?docId=c05273975

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **HP StoreOnce 3.x Rest API** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce3-Restapi
```

2. On the Centreon web interface, install the **HP StoreOnce 3.x Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **HP StoreOnce 3.x Rest API** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce3-Restapi
```

2. Install the **HP StoreOnce 3.x Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-hp-storeonce3-restapi
```

3. On the Centreon web interface, install the **HP StoreOnce 3.x Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **HP StoreOnce 3.x Rest API** server settings.
* Apply the **HW-Storage-Hp-Storeonce3-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | STOREONCEUSERNAME     | Api username                                                               |
| X         | STOREONCEPASSWORD     | Api password                                                               |
|           | STOREONCEEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \
    --plugin=storage::hp::storeonce::3::restapi::plugin \
    --mode=cluster-usage \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --username='my-username' \
    --password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Cluster 'TABZ37161Q01' status: ok, Usage Total: 62.17 TB Used: 59.78 TB (96.15%) Free: 2.39 TB (3.85%), Dedup Ratio: 14.51 | 'TABZ37161Q01#cluster.space.usage.bytes'=65731753164800B;;;0;68360696004608 'TABZ37161Q01#cluster.deduplication.ratio.count'=14.51;;;0;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \
    --plugin=storage::hp::storeonce::3::restapi::plugin \
    --mode=cluster-usage \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \
    --plugin=storage::hp::storeonce::3::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
