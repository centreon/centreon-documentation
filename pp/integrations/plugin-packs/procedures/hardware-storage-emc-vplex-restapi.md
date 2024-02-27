---
id: hardware-storage-emc-vplex-restapi
title: EMC Vplex Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **EMC VPLEX** brings a host template:
* HW-Storage-EMC-Vplex-Restapi-custom

It brings the following service templates:

| Service Alias         | Service Template                                   | Description                       | Default |
|:----------------------|:---------------------------------------------------|:----------------------------------|:--------|
| Cluster-Communication | HW-Storage-EMC-Vplex-Cluster-Communication-Restapi | Check cluster communication state | X       |
| Cluster-Devices       | HW-Storage-EMC-Vplex-Cluster-Devices-Restapi       | Check cluster devices             | X       |
| Directors             | HW-Storage-EMC-Vplex-Directors-Restapi             | Check directors                   | X       |
| Distributed-Devices   | HW-Storage-EMC-Vplex-Distributed-Devices-Restapi   | Check distributed devices         | X       |
| Fans                  | HW-Storage-EMC-Vplex-Fans-Restapi                  | Check fans                        | X       |
| Psus                  | HW-Storage-EMC-Vplex-Psus-Restapi                  | Check power supplies              | X       |
| Storage-Volumes       | HW-Storage-EMC-Vplex-Storage-Volumes-Restapi       | Check storage volumes             | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cluster-Communication" label="Cluster-Communication">

| Metric name       | Unit  |
| :-----------------| :---- |
| operational state |       |

</TabItem>
<TabItem value="Cluster-Devices" label="Cluster-Devices">

| Metric name | Unit  |
| :-----------| :---- |
| heath state |       |

</TabItem>
<TabItem value="Directors" label="Directors">

| Metric name           | Unit  |
| :---------------------| :---- |
| heath state           |       |
| communication status  |       |
| temperature status    |       |
| voltage status        |       |
| vplex kdrviver status |       |

</TabItem>
<TabItem value="Distributed-Devices" label="Distributed-Devices">

| Metric name        | Unit  |
| :------------------| :---- |
| heath state        |       |
| operational status |       |
| service status     |       |

</TabItem>
<TabItem value="Fans" label="Fans">

| Metric name        | Unit  |
| :------------------| :---- |
| operational status |       |
| speed status       |       |

</TabItem>
<TabItem value="Psus" label="Psus">

| Metric name        | Unit  |
| :------------------| :---- |
| operational status |       |
| temperature status |       |

</TabItem>
<TabItem value="Storage-Volumes" label="Storage-Volumes">

| Metric name | Unit  |
| :-----------| :---- |
| heath state |       |

</TabItem>
</Tabs>

## Prerequisites

To control your **EMC VPLEX**, the Rest API must be configured.

The Centreon Pack supports the Rest APIv1 and APIv2. Services **Fans** and **Psus** are not supported by the Rest APIv2.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **EMC VPLEX** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Emc-Vplex-Restapi
```

2. On the Centreon web interface, install the **EMC Vplex** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **EMC VPLEX** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Emc-Vplex-Restapi
```

2. Install the **EMC Vplex** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-hardware-storage-emc-vplex-restapi
```

3. On the Centreon web interface, install the **EMC Vplex** Centreon Pack on the **Configuration > Monitoring Connector Manager** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **EMC VPLEX** equipment settings.
* Apply the **HW-Storage-EMC-Vplex-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name              | Description                                                                |
| :-------- | :---------------- | :------------------------------------------------------------------------- |
| X         | VPLEXCUSTOMMODE   | API version used (Default: 'apiv1'. Can be: 'apiv2')                       |
| X         | APIPORT           | Port used (Default: 443)                                                   |
| X         | APIPROTO          | Specify https if needed (Default: 'https')                                 |
| X         | VPLEXUSERNAME     | API username                                                               |
| X         | VPLEXPASSOWRD     | API password                                                               |
|           | VPLEXEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_emc_vplex.pl \
    --plugin=storage::emc::vplex::restapi::plugin \
    --custommode='apiv1' \
    --mode=cluster-communication \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --vplex-username='myusername' \
    --vplex-password='mypassword' \
    --verbose
```

The expected command output is shown below:

```bash
All cluster witness components are ok
Cluster witness component 'cluster-1' operational state: 'in-contact' [admin: enabled]
Cluster witness component 'cluster-2' operational state: 'in-contact' [admin: enabled]
Cluster witness component 'server' operational state: 'clusters-in-contact' [admin: enabled]
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_emc_vplex.pl \
    --plugin=storage::emc::vplex::restapi::plugin \
    --custommode='apiv1' \
    --mode=cluster-communication \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_emc_vplex.pl \
    --plugin=storage::emc::vplex::restapi::plugin \
    --custommode='apiv1' \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
