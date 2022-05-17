---
id: applications-ceph-restapi
title: Ceph Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Ceph brings a host template:
* App-Ceph-Restapi-custom

It brings the following service templates:

| Service Alias  | Service Template        | Default | Discovery |
|:---------------|:------------------------|:--------|:----------|
| Health         | App-Ceph-Restapi-Health | X       |           |
| Osd            | App-Ceph-Restapi-Osd    | X       |           |
| Pools          | App-Ceph-Restapi-Pools  |         | X         |

### Discovery rules

| Rule name                  | Description                            |
|:---------------------------|:---------------------------------------|
| App-Ceph-Restapi-Pool-Name | Discover pools and monitor utilization |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Metric name   | Description                    | Unit  |
| :------------ | :----------------------------- | :---- |
| health status | Current overall cluster status |       |

</TabItem>
<TabItem value="Osd" label="Osd">

| Metric name                  | Description                                                 | Unit  |
| :--------------------------- | :---------------------------------------------------------- | :---- |
| osd.detected.count           | Number of online storage daemons detected                   |       |
| osd.online.count             | Number of online storage daemons in Ceph cluster            |       |
| osd.online.percentage        | Percentage of online storage daemons in Ceph cluster       | %     |
| osd.participating.count      | Number of participating storage daemons in Ceph cluster     |       |
| osd.participating.percentage | Percentage of participating storage daemons in Ceph cluster | %     |

</TabItem>
<TabItem value="Pools" label="Pools">

| Metric name                                 | Description                          | Unit  |
| :------------------------------------------ | :----------------------------------- | :---- |
| pools.detected.count                        | Number of pools detected             |       |
| *pool_name*#pool.space.usage.bytes          | Space used on the pool |                     |
| *pool_name*#pool.space.free.bytes           | Free space left on the pool          |       |
| *pool_name*#pool.space.usage.percentage     | Space used on the pool in percentage | %     |
| *pool_name*#pool.read.usage.bytespersecond  | Read rate                            | B/s   |
| *pool_name*#pool.write.usage.bytespersecond | Write rate                           | B/s   |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Ceph, a user with read privileges is needed:
E.g: hhttps://docs.ceph.com/en/latest/mgr/ceph_api/

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Ceph RestAPI** resources:

```bash
yum install centreon-plugin-Applications-Ceph-Restapi
```

2. On the Centreon web interface, install the **Ceph RestAPI** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Ceph RestAPI** resources:

```bash
yum install centreon-plugin-Applications-Ceph-Restapi
```

2. Install the **Ceph RestAPI** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-ceph-restapi
```

3. On the Centreon web interface, install the **Ceph RestAPI** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Ceph RestAPI** server settings.
* Apply the **App-Ceph-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                | Description                                                                  |
| :-------- | :------------------ | :------------------------------------------------------------------------- |
| X         | CEPHAPIPORT         | Port used (Default: 8443)                                                  |
| X         | CEPHAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X         | CEPHAPIUSERNAME     | Api username                                                               |
| X         | CEPHAPIPASSWORD     | Api password                                                               |
|           | CEPHAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ceph_restapi.pl \
    --plugin=apps::ceph::restapi::plugin \
    --mode=osd \
    --hostname='10.0.0.1' \
    --port='8443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Number of osd detected: 3, online 100.00% (3 on 3), participating 100.00% (3 on 3) | 'osd.detected.count'=3;;;0; 'osd.online.count'=3;;;0;3 'osd.online.percentage'=100.00%;;;0;100 'osd.participating.count'=3;;;0;3 'osd.participating.percentage'=100.00%;;;0;100
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ceph_restapi.pl \
    --plugin=apps::ceph::restapi::plugin \
    --mode=osd \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ceph_restapi.pl \
    --plugin=apps::ceph::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
