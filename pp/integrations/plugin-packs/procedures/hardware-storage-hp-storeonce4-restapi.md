---
id: hardware-storage-hp-storeonce4-restapi
title: HP StoreOnce 4.x Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack HP StoreOnce brings a host template:
* HW-Storage-Hp-Storeonce4-Restapi-custom

It brings the following service templates:

| Service Alias    | Service Template                                  | Default | Discovery |
|:-----------------|:--------------------------------------------------|:--------|:----------|
| Appliances       | HW-Storage-Hp-Storeonce4-Appliances-Restapi       | X       | X         |
| Hardware-Storage | HW-Storage-Hp-Storeonce4-Hardware-Storage-Restapi | X       |           |
| Stores           | HW-Storage-Hp-Storeonce4-Stores-Restapi           |         | X         |

### Discovery rules

| Rule name                                           | Description                                      |
|:----------------------------------------------------|:-------------------------------------------------|
| HW-Storage-Hp-Storeonce4-Restapi-Appliance-Hostname | Discover appliances and monitor utilization      |
| HW-Storage-Hp-Storeonce4-Restapi-Store-Name         | Discover catalyst stores and monitor utilization |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Appliances" label="Appliances">

| Metric name                                                | Description                               | Unit  |
| :--------------------------------------------------------- | :---------------------------------------- | :---- |
| appliances.detected.count                                  | Number of appliances detected             |       |
| service status                                             | Current appliance service status          |       |
| *appliance_hostname*#appliance.disk.space.usage.bytes      | Space used on the appliance               | B     |
| *appliance_hostname*#appliance.disk.space.free.bytes       | Free space left on the appliance          |       |
| *appliance_hostname*#appliance.disk.space.usage.percentage | Space used on the appliance in percentage | %     |
| *appliance_hostname*#appliance.deduplication.ratio.count   | Deduplication ratio on the appliance      |       |

</TabItem>
<TabItem value="Hardware-Storage" label="Hardware-Storage">

| Metric name                                       | Description                       | Unit |
|:------------------------------------------------- |:--------------------------------- | :--- |
| drive status                                      | Current drive status              |      |
| drive enclosure status                            | Current drive enclosure status    |      |
| fan status                                        | Current fan status                |      |
| *component_location*#hardware.fan.speed.rpm       | Current fan speed                 | rpm  |
| iomodule status                                   | Current I/O module status         |      |
| pool status                                       | Current pool status               |      |
| power supply status                               | Current power supply status       |      |
| temperature status                                | Current temperature probes status |      |
| *component_location*#hardware.temperature.celsius | Current temperature               | C    |

</TabItem>
<TabItem value="Stores" label="Stores">

| Metric name                                  | Description                               | Unit  |
| :------------------------------------------- | :---------------------------------------- | :---- |
| stores.detected.count                        | Number of catalyst stores detected        |       |
| store health                                 | Current catalyst store health level       |       |
| *store_name*#store.disk.space.usage.bytes    | Disk space used on the catalyst store     | B     |
| *store_name*#store.user.space.usage.bytes    | User space used on the catalyst store     | B     |
| *store_name*#store.deduplication.ratio.count | Deduplication ratio on the catalyst store |       |

</TabItem>
</Tabs>

## Prerequisites

The Pack only supports the version 4.x of HP StoreOnce. 
To monitor your HP StoreOnce, a user with read privileges is required. Please refer to their official documentation: https://hewlettpackard.github.io/storeonce-rest/index.html

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **HP StoreOnce 4.x Rest API** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce4-Restapi
```

2. On the Centreon web interface, install the **HP StoreOnce 4.x Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **HP StoreOnce 4.x Rest API** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce4-Restapi
```

2. Install the **HP StoreOnce 4.x Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-hp-storeonce4-restapi
```

3. On the Centreon web interface, install the **HP StoreOnce 4.x Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **HP StoreOnce 4.x Rest API** server settings.
* Apply the **HW-Storage-Hp-Storeonce4-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X           | CEPHAPIPORT         | Port used (Default: 8443)                                                  |
| X           | CEPHAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X           | CEPHAPIUSERNAME     | Api username                                                               |
| X           | CEPHAPIPASSWORD     | Api password                                                               |
|             | CEPHAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \
    --plugin=storage::hp::storeonce::4::restapi::plugin \
    --mode=stores \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All catalyst stores are ok | 'stores.detected.count'=3;;;0; 'Catalyst01#store.disk.space.usage.bytes'=1838969531121B;;;0; 'Catalyst01#store.user.space.usage.bytes'=62700600887099B;;;0; 'Catalyst01#store.deduplication.ratio.count'=34.00;;;0; 'Catalyst02#store.disk.space.usage.bytes'=50306416657426B;;;0; 'Catalyst02#store.user.space.usage.bytes'=1793362240355355B;;;0; 'Catalyst02#store.deduplication.ratio.count'=35.60;;;0; 'Catalyst03#store.disk.space.usage.bytes'=21192464324702B;;;0; 'Catalyst03#store.user.space.usage.bytes'=540818386772559B;;;0; 'Catalyst03#store.deduplication.ratio.count'=25.50;;;0;
checking catalyst store 'Catalyst01'
    health: ok
    disk space used: 1.67TB, user space used: 57.03TB
    deduplication ratio: 34.00
checking catalyst store 'Catalyst02'
    health: ok
    disk space used: 45.75TB, user space used: 1631.05TB
    deduplication ratio: 35.60
checking catalyst store 'Catalyst03'
    health: ok
    disk space used: 19.27TB, user space used: 491.87TB
    deduplication ratio: 25.50
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \
    --plugin=storage::hp::storeonce::4::restapi::plugin \
    --mode=stores \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce4_restapi.pl \
    --plugin=storage::hp::storeonce::4::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
