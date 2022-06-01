---
id: virtualization-proxmox-ve-restapi
title: Proxmox VE Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack Proxmox VE brings a host template:
* Virt-Proxmox-Ve-Restapi-custom

It brings the following service templates:

| Service Alias | Service Template                      | Default | Discovery |
|:--------------|:--------------------------------------|:--------|:----------|
| Node-Usage    | Virt-Proxmox-Ve-Node-Usage-Restapi    | X       | X         |
| Storage-Usage | Virt-Proxmox-Ve-Storage-Usage-Restapi | X       | X         |
| Vm-Usage      | Virt-Proxmox-Ve-Vm-Usage-Restapi      | X       | X         |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule Name          | Description                      |
|:-------------------|:---------------------------------|
| Proxmox VM         | Discover Proxmox virtual machines |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

</TabItem>
<TabItem value="Service" label="Service">

| Rule name                            | Description                                       |
|:-------------------------------------|:--------------------------------------------------|
| Virt-Proxmox-Ve-Restapi-Node-Name    | Discover nodes and monitor utilization            |
| Virt-Proxmox-Ve-Restapi-Storage-Name | Discover storages and monitor utilization         |
| Virt-Proxmox-Ve-Restapi-Vm-Name      | Discover virtual machines and monitor utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Metric name                               | Description                    | Unit  |
| :---------------------------------------- | :----------------------------- | :---- |
| node status                               | Current overall node status    |       |
| *node_id*#node.cpu.utilization.percentage | CPU utilization                | %     |
| *node_id*#node.memory.usage.bytes         | Memory used                    | B     |
| *node_id*#node.filesystem.usage.bytes     | Space used for root filesystem | B     |
| *node_id*#node.swap.usage.bytes           | Swap used                      | B     |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Metric name                            | Description                    | Unit  |
| :------------------------------------- | :----------------------------- | :---- |
| storage status                         | Current overall storage status |       |
| *storage_id*#storage.space.usage.bytes | Space used                     | B     |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Metric name                             | Description                    | Unit  |
| :-------------------------------------- | :----------------------------- | :---- |
| node status                             | Current overall node status    |       |
| *vm_name*#vm.cpu.utilization.percentage | CPU utilization                | %     |
| *vm_name*#vm.memory.usage.bytes         | Memory used                    | B     |
| *vm_name*#vm.swap.usage.bytes           | Swap used                      | B     |
| *vm_name*#vm.read.usage.iops            | Number of read operations      |       |
| *vm_name*#vm.write.usage.iops           | Number of write operations     |       |
| *vm_name*#vm.traffic.in.bitspersecond   | Incoming traffic going         | b/s   |
| *vm_name*#vm.traffic.out.bitspersecond  | Outgoing traffic going         | b/s   |

</TabItem>
</Tabs>

## Prerequisites

To monitor, a user with read privileges is required: `VM.Monitor`, `VM.Audit`, `Datastore.Audit`, `Sys.Audit`, `Sys.Syslog`.

Please refer to their official documentation: https://pve.proxmox.com/wiki/Proxmox_VE_API

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Proxmox VE** resources:

```bash
yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

2. On the Centreon web interface, install the **Proxmox VE** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Proxmox VE** resources:

```bash
yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

2. Install the **Proxmox VE** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-virtualization-proxmox-ve-restapi
```

3. On the Centreon web interface, install the **Proxmox VE** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Proxmox VE** server settings.
* Apply the **Virt-Proxmox-Ve-Restapi-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                   | Description                                                                |
| :-------- | :--------------------- | :------------------------------------------------------------------------- |
| X         | PROXMOXAPIPORT         | Port used (Default: 443)                                                   |
| X         | PROXMOXAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X         | PROXMOXAPIUSERNAME     | Api username                                                               |
| X         | PROXMOXAPIPASSWORD     | Api password                                                               |
| X         | PROXMOXAPIREALM        | Api username realm                                                         |
|           | PROXMOXAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
    --plugin=apps::proxmox::ve::restapi::plugin \
    --mode=storage \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --realm='my-realm' \
    --verbose
```

The expected command output is shown below:

```bash
OK: Storage 'storage/nuc/local' state: available, space total: 217.61 GB used: 145.86 GB (67.03%) free: 71.76 GB (32.97%) | 'storage/nuc/local#storage.space.usage.bytes'=156610641920B;;;0;233658822656
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
    --plugin=apps::proxmox::ve::restapi::plugin \
    --mode=storage \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
    --plugin=apps::proxmox::ve::restapi::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).
