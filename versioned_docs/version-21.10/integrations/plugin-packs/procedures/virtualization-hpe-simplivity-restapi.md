---
id: virtualization-hpe-simplivity-restapi
title: HPE Simplivity Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Pack HPE Simplivity Rest API brings 1 host template:
* Virt-Hpe-Simplivity-Restapi-custom

It brings the following Service Templates:

| Service Alias      | Service Template                               | Default | Discovery |
|:-------------------|:-----------------------------------------------|:--------|:----------|
| Hosts              | Virt-Hpe-Simplivity-Hosts-Restapi              | X       | X         |
| Omnistack-Clusters | Virt-Hpe-Simplivity-Omnistack-Clusters-Restapi | X       |           |
| Virtual-Machines   | Virt-Hpe-Simplivity-Virtual-Machines-Restapi   |         |           |

### Discovery rules

| Rule name                             | Description                       |
|:--------------------------------------|:----------------------------------|
| Virt-Hpe-Simplivity-Restapi-Host-Name | Discover hosts and monitor status |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Metric name                               | Description                                       | Unit  |
| :---------------------------------------- | :------------------------------------------------ | :---- |
| hosts.alive.count                         | Number of hosts with status alive                 |       |
| hosts.faulty.count                        | Number of hosts with status faulty                |       |
| hosts.managed.count                       | Number of hosts with status managed               |       |
| hosts.removed.count                       | Number of hosts with status removed               |       |
| hosts.suspected.count                     | Number of hosts with status suspected             |       |
| hosts.unknown.count                       | Number of hosts with status unknown               |       |
| *host_name*#host.components.green.count   | Number of components with status green per host   |       |
| *host_name*#host.components.yellow.count  | Number of components with status yellow per host  |       |
| *host_name*#host.components.red.count     | Number of components with status red per host     |       |
| *host_name*#host.components.unknown.count | Number of components with status unknown per host |       |
| raid status                               | Current status of the raid card per host          |       |
| logical drive status                      | Current status of each logical drives per host    |       |
| physical drive status                     | Current status of each physical drives per host   |       |

</TabItem>
<TabItem value="Omnistack-Clusters" label="Omnistack-Clusters">

| Metric name                                                | Description                             | Unit  |
| :--------------------------------------------------------- | :-------------------------------------- | :---- |
| *cluster_name*#omnistack_cluster.space.usage.bytes         | Space used on the cluster               | B     |
| *cluster_name*#omnistack_cluster.space.free.bytes          | Free space left on the cluster          | B     |
| *cluster_name*#omnistack_cluster.space.usage.percentage    | Space used on the cluster in percentage | %     |
| *cluster_name*#omnistack_cluster.ratio.deduplication.count | Current deduplication ratio             |       |
| *cluster_name*#omnistack_cluster.ratio.compression.count   | Current compression ratio               |       |
| *cluster_name*#omnistack_cluster.ratio.efficiency.count    | Current efficiency ratio                |       |

</TabItem>
<TabItem value="Virtual-Machines" label="Virtual-Machines">

| Metric name                                            | Description                                          | Unit |
|:------------------------------------------------------ |:---------------------------------------------------- |:---- |
| ha status                                              | High-availability status of the virtual machine      |      |
| *vm_id:vm_name*#virtual_machine.space.usage.bytes      | Space allocated used on the hypervisor               | B    |
| *vm_id:vm_name*#virtual_machine.space.free.bytes       | Free allocated space left on the hypervisor          | B    |
| *vm_id:vm_name*#virtual_machine.space.usage.percentage | Space allocated used on the hypervisor in percentage | %    |

</TabItem>
</Tabs>

## Prerequisites

To control your HPE Simplivity, the Rest API must be configured:
* https://developer.hpe.com/platform/hpe-simplivity/home/

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **HPE Simplivity Rest API** resources:

```bash
yum install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

2. On the Centreon Web interface, install the **HPE Simplivity Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **HPE Simplivity Rest API** resources:

```bash
yum install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

2. Install the **HPE Simplivity Rest API** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-virtualization-hpe-simplivity-restapi
```

3. On the Centreon Web interface, install the **HPE Simplivity Rest API** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **HPE Simplivity Rest API** server settings
* Select the **Virt-Hpe-Simplivity-Restapi-custom** template to apply to the Host

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | OMNISTACKAPIPORT      | Port used (Default: 443)                                                   |
| X         | OMNISTACKAPIPROTO     | Specify https if needed (Default: 'https')                                 |
| X         | OMNISTACKAPIUSERNAME  | Api username                                                               |
| X         | OMNISTACKAPIPASSWORD  | Api password                                                               |
|           | OMNISTACKEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
    --plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
    --mode=hosts \
    --hostname='10.0.0.1' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All hosts are ok | 'hosts.alive.count'=4;;;; 'hosts.faulty.count'=0;;;; 'hosts.managed.count'=0;;;; 'hosts.removed.count'=0;;;; 'hosts.suspected.count'=0;;;; 'hosts.unknown.count'=0;;;; 'svt01.acme.com#host.components.green.count'=15;;;; 'svt01.acme.com#host.components.yellow.count'=0;;;; 'svt01.acme.com#host.components.red.count'=0;;;; 'svt01.acme.com#host.components.unknown.count'=0;;;; 'svt02.acme.com#host.components.green.count'=15;;;; 'svt02.acme.com#host.components.yellow.count'=0;;;; 'svt02.acme.com#host.components.red.count'=0;;;; 'svt02.acme.com#host.components.unknown.count'=0;;;; 'svt11.acme.com#host.components.green.count'=15;;;; 'svt11.acme.com#host.components.yellow.count'=0;;;; 'svt11.acme.com#host.components.red.count'=0;;;; 'svt11.acme.com#host.components.unknown.count'=0;;;; 'svt12.acme.com#host.components.green.count'=15;;;; 'svt12.acme.com#host.components.yellow.count'=0;;;; 'svt12.acme.com#host.components.red.count'=0;;;; 'svt12.acme.com#host.components.unknown.count'=0;;;;
checking host 'svt01.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt02.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt11.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt12.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
    --plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
    --mode=hosts \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
    --plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins#http-and-api-checks)
