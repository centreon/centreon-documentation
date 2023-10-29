---
id: hardware-servers-dell-vxm-restapi
title: Dell VxRail Manager Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Dell VXM brings a host template:
* HW-Server-Dell-Vxm-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                   | Service Description | Default |
|:--------------|:-----------------------------------|:--------------------|:--------|
| Chassis       | HW-Server-Dell-Vxm-Chassis-Restapi | Check chassis       | X       |
| Hosts         | HW-Server-Dell-Vxm-Hosts-Restapi   | Check hosts         | X       |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name        | Description           |
|:-----------------|:----------------------|
| Dell VxRail Host | Discover VxRail hosts |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Chassis" label="Chassis">

| Metric name             | Unit  |
| :---------------------- | :---- |
| chassis.detected.count  |       |
| chassis.unhealthy.count |       |
| chassis status          |       |
| power supply status     |       |

</TabItem>
<TabItem value="Hosts" label="Hosts">

| Metric name           | Unit  |
| :-------------------- | :---- |
| hosts.detected.count  |       |
| hosts.unhealthy.count |       |
| host status           |       |
| nic status            |       |
| disk status           |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with read privileges is required.

Please refer to their official documentation: https://developer.dell.com/apis/5538/versions/7.0.210/docs/Introduction.md

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **Dell VxRail Manager** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Vxm-Restapi
```

2. On the Centreon web interface, install the **Dell VxRail Manager Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **Dell VxRail Manager** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Vxm-Restapi
```

2. Install the **Dell VxRail Manager Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-servers-dell-vxm-restapi
```

3. On the Centreon web interface, install the **Dell VxRail Manager Rest API** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Dell VxRail Manager** server settings.
* Apply the **HW-Server-Dell-Vxm-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name               | Description                                                                |
| :-------- | :----------------- | :------------------------------------------------------------------------- |
| X         | VXMAPIPORT         | Port used (Default: 443)                                                   |
| X         | VXMAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X         | VXMAPIUSERNAME     | Api username                                                               |
| X         | VXMAPIPASSWORD     | Api password                                                               |
|           | VMXAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_dell_vxm_restapi.pl  \
    --plugin=hardware::server::dell::vxm::restapi::plugin \
    --mode=chassis \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: number of chassis detected: 6, unhealthy: 0 - All chassis are ok | 'chassis.detected.count'=6;;;0; 'chassis.unhealthy.count'=0;;;0;
checking chassis '53FT2T2'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '53FW2T2'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '53GN2T2'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '5JDXF13'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '6JDXF13'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '7JDXF13'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_vxm_restapi.pl  \
    --plugin=hardware::server::dell::vxm::restapi::plugin \
    --mode=chassis \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_vxm_restapi.pl  \
    --plugin=hardware::server::dell::vxm::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
