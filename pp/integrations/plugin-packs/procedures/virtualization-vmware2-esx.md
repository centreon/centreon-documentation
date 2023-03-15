---
id: virtualization-vmware2-esx
title: VMware ESX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

VMWare is a software company based in the USA. VMWare provides cloud computing and virtualization software and services.

The Centreon Plugins and Plugin Packs rely on the Centreon VMWare Connector to request the vCenter API.

## Plugin-Pack Assets

### Monitored Objects

* ESX or ESXi
	
### Discovery rules

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Rule name                      | Description                                     |
| :----------------------------- | :---------------------------------------------- |
| Virt-VMWare2-Esx-HostDiscovery | Discover VMWare ESX linked to a vcenter or ESXi |
	
</TabItem>
<TabItem value="Services" label="Services">

| Rule name                                | Description                                 |
| :--------------------------------------- | :------------------------------------------ |
| Virt-VMWare2-Esx-Datastores-Latency-Name | Discover the Datastores and monitor latency |
| Virt-VMWare2-Esx-Nics-Traffic-Name       | Discover the traffic NIC and monitor        |

</TabItem>
</Tabs>

## Monitored Metrics 

<Tabs groupId="sync">
<TabItem value="Esx-Cpu" label="Esx-Cpu">

| Metric name                                   | Description                      | Unit |
| :-------------------------------------------- | :------------------------------- | :--- |
| host.cpu.utilization.percentage               | Total CPU usage in percentage    | %    |
| host.cpu.utilization.mhz                      | Total CPU usage in MHz           | MHz  |
| core#host.core.cpu.utilization.percentage     | CPU usage per core in percentage | %    |

</TabItem>
<TabItem value="Esx-Health" label="Esx-Health">

| Metric name                         | Description                         | Unit  |
| :---------------------------------- | :---------------------------------- | :---- |
| host.health.problems.current.count  | Total number of problem on the ESXs | Count |
| host.health.problems.current.count  | Number of health checks in green    | Count |
| host.health.yellow.current.count    | Number of health checks in yellow   | Count |
| host.health.red.current.count       | Number of health checks in red      | Count |

</TabItem>
<TabItem value="Esx-Memory" label="Esx-Memory">

| Metric name                   | Description                                  | Unit  |
| :---------------------------- | :------------------------------------------- | :---- |
| host.memory.usage.bytes       | Memory used                                  | Bytes |
| host.memory.overhead.bytes    | Memory overhead needed by the VMs on the ESX | Bytes |
| host.memory.state.count       | Memory state                                 |       |

</TabItem>
<TabItem value="Esx-Status" label="Esx-Status">

| Metric name | Description               | Unit |
| :---------- | :------------------------ | :--- |
| Status      | Overall status on the ESX |      |

</TabItem>
<TabItem value="Esx-Storage" label="Esx-Storage">

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
<TabItem value="Esx-Swap" label="Esx-Swap">

| Metric name                           | Description         | Unit |
| :------------------------------------ | :------------------ | :--- |
| host.swap.in.usage.bytespersecond     | Swap in rate Usage  | B/s  |
| host.swap.out.usage.bytespersecond    | Swap out rate Usage | B/s  |

</TabItem>
<TabItem value="Esx-Vm-Count" label="Esx-Vm-Count">

| Metric name                       | Description                          | Unit  |
| :-------------------------------- | :----------------------------------- | :---- |
| host.vm.poweredon.current.count   | Number of powered on VMs on the ESX  | Count |
| host.vm.poweredoff.current.count  | Number of powered off VMs on the ESX | Count |
| host.vm.suspended.current.count   | Number of suspended VMs on the ESX   | Count |

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

> You can also define the "port" attribute to change the listening port.

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
**/var/log/centreon/centreon\_vmware.log**.

### Tags and Custom Attributes

> To discover Tags and Custom Attributes, you must use version 3.2.5 of **centreon-vmware-daemon** and add **--tags** in the discovery extra options.
>Go to page **Configuration > Hosts > Discovery**, and at the 3rd step (**Define discovery parameters**), in section **Additional parameters**, in the **Extra Options** field, enter **--tags**.

### Network flows

The Poller with the Centreon VMware Connector installed needs to access the vCenter on TCP/443 HTTPS.

The Pollers that request the Centreon VMWare Connector host need to access the Centreon VMWare Connector host on TCP/5700.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Vmware2 Connector Centreon Plugin on every Poller expected to monitor the devices: 
	
```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the 'Vmware ESX' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 
	
</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Vmware ESX Centreon Plugin on every poller expected to monitor the devices:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```
	
2. Install the Centreon Plugin-Pack RPM: 

```bash
yum install centreon-pack-virtualization-vmware2-esx
```
	
3. Install the 'Vmware ESX' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the relevant Host Template "Virt-VMWare2-ESX-custom", and configure the mandatory Macros:

| Mandatory   | Name                       | Description                                             |
| :---------- | :------------------------- | :------------------------------------------------------ |
| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm   | 
| X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection        |
| X           | CENTREONVMWAREPORT         | By default: 5700                                        |
| X           | ESXNAME                    | Name of the ESX (defined in your VMWare infrastructure) |
|             | CENTREONVMWAREEXTRAOPTIONS | Customize it with your own if needed                    |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for ?
	
Once you've installed the plugin, you can test it logging with centreon-engine user:
	
```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=cpu-host \
	--custommode=connector \
	--connector-hostname='localhost' \
	--connector-port='5700' \
	--container='vcenter01' \
	--esx-hostname='SRV-ESX-TLS' \
	--unknown-status='%{status} !~ /^connected$/i' \
	--warning-status='' \
	--critical-status='' \
	--warning-total-cpu='80' \
	--critical-total-cpu='90' \
	--warning-total-cpu-mhz='' \
	--critical-total-cpu-mhz='' \
	--warning-cpu='' \
	--critical-cpu=''
```

Expected command output is shown below:

```bash
OK: Host 'SRV-ESX-TLS' : status connected - cpu total average : 48.63 %, 14592.00 MHz - All CPUs are ok |
'cpu_total'=48.63%;;;0;100 'cpu_total_MHz'=14592.00MHz;;;0;30000 'cpu_0'=13.95%;;;0;100 'cpu_1'=12.01%;;;0;100
'cpu_2'=24.58%;;;0;100 'cpu_3'=24.55%;;;0;100 'cpu_4'=26.72%;;;0;100 'cpu_5'=24.38%;;;0;100 'cpu_6'=24.23%;;;0;100
'cpu_7'=26.37%;;;0;100 'cpu_8'=27.71%;;;0;100 'cpu_9'=26.16%;;;0;100
```

This command above checks the CPU Usage (```--plugin=apps::vmware::connector::plugin --mode=cpu-host```) of the ESX **SRV-ESX-TLS** (```--esx-hostname='SRV-ESX-TLS'```).
It connects to the VMWare daemon on **localhost** (```--connector-hostname='localhost'```) on the port **5700** (```--connector-port='5700'```).
Then the command requests the container **vcenter01** (```--container='vcenter01'```) because the ESX **SRV-ESX-TLS** is managed by **vcenter01**.

It will trigger a WARNING alarm if the CPU Usage is above 80% (```--warning-total-cpu='80'```)
and a CRITICAL alarm if the CPU Usage is above 90% (```--critical-total-cpu='90'```).

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
    --mode=cpu-host \
    --help
```

### Why do I get the following error:

#### UNKNOWN: Unknown container name 'default' |

This error message means that the container invoked in the command doesn't exist in your VMWare connector configuration.
Check your macro **CENTREONVMWARECONTAINER** on your host or check the file */etc/centreon/centreon_vmware.pm*

#### UNKNOWN: Container connection problem |

This error message means that you have a issue with the credentials provided for your Container.
Check your credentials in */etc/centreon/centreon_vmware.pm*.
You can also take a look into the log for more information: */var/log/centreon/centreon_vmware.log*

#### UNKNOWN: Cannot get value for counters (Maybe, object(s) cannot be reached: disconnected, not running, time not synced (see time-host mode),...) |

This error message means that you the plugin cannot get value for some counters.
Most of the time it caused by a time shift between the Centreon Servers and the VMWare Infrastructure.
Check the synchronization with the mode ```time-host```.
                                                                                                   
#### UNKNOWN: Cannot get counter 'net.received.average' for the sampling period '300' (counter level: 2, sampling level: 1) 

Some counters like 'mem.state.latest' and 'net.received.average' are only available with a sampling level at 2.
You can configure the level sampling in the vCenter console for these counters.
You can also configure the macro *SERVICEEXTRAOPTIONS* on the services where you catched this error with the option ```--sampling-period='20'```.
