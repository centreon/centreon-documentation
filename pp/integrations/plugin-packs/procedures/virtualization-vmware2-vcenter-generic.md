---
id: virtualization-vmware2-vcenter-generic
title: VMware vCenter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

VMware is an software company based in the USA. VMware provides cloud computing and virtualization software and services.

The Centreon Plugin and Monitoring Connectors rely on the Centreon VMWare Connector to request the vCenter SDK.

## Monitoring Connector Assets

### Monitored Objects

* Clusters
* Datastores
* Licenses
* VMs

### Discovery Rules

| Rule name                                     | Description                                               |
| :-------------------------------------------- | :-------------------------------------------------------- |
| Virt-VMWare2-Datacenters-Alarm-Name           | Discover the Datacenters and monitor the alarms           | 
| Virt-VMWare2-vCenter-Clusters-Status-Name     | Discover the Clusters and monitor the status              |
| Virt-VMWare2-vCenter-Datastores-Io-Name       | Discover Datastores and monitor the I/O                   |
| Virt-VMWare2-vCenter-Datastores-Iops-Name     | Discover Datastores and monitor the IOPs                  |
| Virt-VMWare2-vCenter-Datastores-Usage-Name    | Discover Datastores and monitor the usage                 |
| Virt-VMWare2-vCenter-Datastores-Vm-Count-Name | Discover Datastores and monitor the number of running VMs |

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Datacenter-Alarms-Global" label="Datacenter-Alarms-Global">

| Metric name                                        | Description                              | Unit  |
| :------------------------------------------------- | :--------------------------------------- | :---- |
| Status                                             | Status of the Datacenter                 |       |
| datacenter.alarms.warning.current.count            | Number of Total warning alarms           | Count |
| datacenter.alarms.critical.current.count           | Number of Total critical alarms          | Count |
| dcname#datacenter.alarms.warning.current.count     | Number of warning alarms per Datacenter  | Count |
| dcname#datacenter.alarms.critical.current.count    | Number of critical alarms per Datacenter | Count |

</TabItem>
<TabItem value="Cluster-Cpu-Global" label="Cluster-Cpu-Global">

| Metric name                                       | Description                   | Unit |
| :------------------------------------------------ | :---------------------------- | :--- |
| *cluster_name*#cluster.cpu.utilization.percentage | Total CPU usage in percentage | %    |
| *cluster_name*#cluster.cpu.utilization.mhz        | Total CPU usage in MHz        | MHz  |

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Metric name | Description           | Unit |
| :---------- | :-------------------- | :--- |
| Status      | Status of the Cluster |      |

</TabItem>
<TabItem value="Datastore-Io-Global" label="Datastore-Io-Global">

| Metric name                                        | Description              | Unit |
| :------------------------------------------------- | :----------------------- | :--- |
| datastore.read.usage.bytespersecond                | Global read rate         | B/s  |
| datastore.write.usage.bytespersecond               | Global write rate        | B/s  |
| datastorename#datastore.read.usage.bytespersecond  | Read rate per Datastore  | B/s  |
| datastorename#datastore.write.usage.bytespersecond | Write rate per Datastore | B/s  |

</TabItem>
<TabItem value="Datastore-Iops-Global" label="Datastore-Iops-Global">

| Metric name                   | Description                        | Unit |
| :---------------------------- | :--------------------------------- | :--- |
| datastore.read.usage.iops     | Global read IOPS on the Datastore  | iops |
| datastore.write.usage.iops    | Global write IOPS on the Datastore | iops |
| datastore.vm.read.usage.iops  | Read IOPS per VM on the Datastore  | iops |
| datastore.vm.write.usage.iops | Write IOPS per VM on the Datastore | iops |

</TabItem>
<TabItem value="Datastore-Usage-Global" label="Datastore-Usage-Global">

| Metric name                       | Description                            | Unit |
| :-------------------------------- | :------------------------------------- | :--- |
| datastore.space.usage.bytes       | Usage of the Datastore                 | B    |
| datastore.space.free.bytes        | Free space left on the Datastore       | B    |
| datastore.space.usage.percentage  | Usage of the Datastore in percentage   | %    |
| datastore.space.provisioned.bytes | Provisioned Space allocated to the VMs | B    |

</TabItem>
<TabItem value="Datastore-Vm-Count-Global" label="Datastore-Vm-Count-Global">

| Metric name                            | Description                          | Unit  |
| :------------------------------------- | :----------------------------------- | :---- |
| datastore.vm.poweredon.current.count   | Number of powered on VMs on the ESX  | Count |
| datastore.vm.poweredoff.current.count  | Number of powered off VMs on the ESX | Count |
| datastore.vm.suspended.current.count   | Number of suspended VMs on the ESX   | Count |

</TabItem>
<TabItem value="Esx-Storage-Global" label="Esx-Storage-Global">

| Metric name                            | Description                                       | Unit |
| :------------------------------------- | :------------------------------------------------ | :--- |
| status                                 | Status of the ESX                                 |      |
| adapters status                        | Adapter statuses of the ESX                       |      |
| *esx_name*#host.adapters.total.count   | Number of adapters on the ESX                     |      |
| *esx_name*#host.adapters.online.count  | Number of adapters with status online on the ESX  |      |
| *esx_name*#host.adapters.offline.count | Number of adapters with status offline on the ESX |      |
| *esx_name*#host.adapters.fault.count   | Number of adapters with status fault on the ESX   |      |
| *esx_name*#host.adapters.unknown.count | Number of adapters with status unknown on the ESX |      |
| luns status                            | LUN statuses of the ESX                           |      |
| *esx_name*#host.luns.total.count       | Number of LUNs on the ESX                         |      |
| *esx_name*#host.luns.ok.count          | Number of LUNs with status ok on the ESX          |      |
| *esx_name*#host.luns.error.count       | Number of LUNs with status error on the ESX       |      |
| *esx_name*#host.luns.off.count         | Number of LUNs with status off on the ESX         |      |
| *esx_name*#host.luns.unknown.count     | Number of LUNs with status unknown on the ESX     |      |
| *esx_name*#host.luns.quiesced.count    | Number of LUNs with status quiesced on the ESX    |      |
| *esx_name*#host.luns.degraded.count    | Number of LUNs with status degraded on the ESX    |      |
| paths status                           | Paths statuses of the ESX                         |      |
| *esx_name*#host.paths.total.count      | Number of paths on the ESX                        |      |
| *esx_name*#host.paths.active.count     | Number of paths with status active on the ESX     |      |
| *esx_name*#host.paths.disabled.count   | Number of paths with status disabed on the ESX    |      |
| *esx_name*#host.paths.standby.count    | Number of paths with status standby on the ESX    |      |
| *esx_name*#host.paths.dead.count       | Number of paths with status dead on the ESX       |      |
| *esx_name*#host.paths.unknown.count    | Number of paths with status unknown on the ESX    |      |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                             | Description                                 | Unit |
| :-------------------------------------- | :------------------------------------------ | :--- |
| licenses.total.count                    | Number of licenses                          |      |
| *license_name*#license.usage.count      | Number of used resources on the license     |      |
| *license_name*#license.free.count       | Number of free resources on the license     |      |
| *license_name*#license.usage.percentage | Percentage of used resources on the license | %    |
| *license_name*#license.expires.days     | Expiration time                             |      |

</TabItem>
<TabItem value="Vm-Tools-Global" label="Vm-Tools-Global">

| Metric name                         | Description                                                   | Unit  |
| :---------------------------------- | :------------------------------------------------------------ | :---- |
| vm.tools.notupdated.current.count   | Number of VMs with VM-Tools not updated (default threshold)   | Count |
| vm.tools.notrunning.current.count   | Number of VMs with VM-Tools not running (default threshold)   | Count |
| vm.tools.notinstalled.current.count | Number of VMs with VM-Tools not installed (default threshold) | Count |

</TabItem>
</Tabs>

## Prerequisites

### Centreon VMWare Connector

For the VMWare monitoring, Centreon use daemon to connect and request the vCenter.

Install this daemon on each needed poller:

```
yum install centreon-plugin-Virtualization-VMWare-daemon
```

To configure the access to your infrastructure, edit the
"/etc/centreon/centreon\_vmware.pm" configuration file:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        }
    }
);

1;
```

Make sure to replace variables with needed information:

- _ip\_hostname_: IP address or hostname of the vCenter or ESX (if standalone),
- _username_: username with at least "read only" access to the vCenter or ESX (you can use domain user),
- _password_: password of the username.

You can configure multiple vCenter or ESXi connections using this
structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'my_first_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<DOMAIN>\<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Each entry is called a **container**.

> You can also define the "port" attribute to change listening port.

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

### Network flows

The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the vCenter.

The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the VMWare Connector Centreon Plugin on every poller expected to monitor VMWare infrastructures:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the 'Vmware vCenter' Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page 

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the VMWare Connector Centreon Plugin on every poller expected to monitor the VMWare Infrastructures:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the Centreon Monitoring Connector RPM: 

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-generic.noarch
```

3. Install the 'Vmware vCenter' Centreon Monitoring Connector on the **Configuration > Monitoring Connector Manager** page 

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the relevant Host Template "Virt-VMWare2-VCenter-custom", and configure the mandatory Macros:

| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm  |
| X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection       |
| X           | CENTREONVMWAREPORT         | By default: 5700                                       |
|             | CENTREONVMWAREEXTRAOPTIONS | Customize it with your own if needed                   |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for ?

Once you've installed the plugin, you can test it logging with centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --mode=snapshot-vm \
    --custommode=connector \
    --connector-hostname='localhost' \
    --connector-port='5700' \
    --container='vcenter01' \
    --vm-hostname='.*' \
    --filter \
    --filter-uuid='' \
    --warning='259200' \
    --critical='432000' \
    --disconnect-status='ok' \
    --nopoweredon-skip \
    --check-consolidation \
    --verbose
```

Expected command output is shown below:

```bash
CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;
'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]
```

This command above checks the virtual machine snapshots (```--plugin=apps::vmware::connector::plugin --mode=snapshot-vm```).
It connects to the VMWare daemon on **localhost** (```--connector-hostname='localhost'```) on the port **5700** (```--connector-port='5700'```).
Then the command requests the container **vcenter01** (```--container='vcenter01'```).

It will trigger a WARNING alarm if the age of the snapshot is older than 3 days / 259200s (```--warning='259200'```)
and a CRITICAL alarm if the snapshot is older than 5 days / 432000s (```--critical='432000'```).

All available modes with the plugin can be displayed with: 

```bash
/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --list-mode
```

The available options for a mode can be displayed using the ```--help``` parameter: 

```bash
/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --mode=snapshot-vm  \
    --help
```

### Why do I get the following error:

#### UNKNOWN: Unknown container name 'default' |

This error message means that the container invoked in the command doesn't exist in your VMWare connector configuration.
Check your macro **CENTREONVMWARECONTAINER** on your host or check the file */etc/centreon/centreon_vmware.pm*

#### UNKNOWN: Cannot get response (timeout received) 

This error message means that the Plugin didn't get a response off the VMWare Daemon.
Check your connection parameters and the macros **CENTREONVMWAREHOST** and **CENTREONVMWAREPORT**.

#### UNKNOWN: Container connection problem |

This error message means that you have a issue with the credentials provided for your Container.
Check your credentials in */etc/centreon/centreon_vmware.pm*.
You can also take a look into the log for more information: */var/log/centreon/centreon_vmware.log*
