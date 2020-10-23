---
id: virtualization-vmware2-esx
title: VMware ESX
---

## Overview

VMWare is an software compagny based in USA. VMWare provides cloud computing and virtualization software and services.

The Centreon Plugin and Plugin-Packs rely on the Centreon VMWare Connector to request the vCenter SDK.

## Plugin-Pack Assets
	
### Monitored Objects

* ESX or ESXi
	
### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Host-->

| Rule name                      | Description                                     |
| :----------------------------- | :---------------------------------------------- |
| Virt-VMWare2-Esx-HostDiscovery | Discover VMWare ESX linked to a vcenter or ESXi |
	
<!--Services-->

| Rule name                                | Description                                 |
| :--------------------------------------- | :------------------------------------------ |
| Virt-VMWare2-Esx-Datastores-Latency-Name | Discover the Datastores and monitor latency |
| Virt-VMWare2-Esx-Nics-Traffic-Name       | Discover the traffic NIC and monitor        |

<!--END_DOCUSAURUS_CODE_TABS-->
	
## Monitored Metrics 

<!--Esx-Cpu-->

| Metric name   | Description                      | Unit |
| :------------ | :------------------------------- | :--- |
| cpu_total     | Total CPU usage in percentage    | %    |
| cpu_total_MHz | Total CPU usage in MHz           | MHz  |
| cpu_[0-9]     | CPU usage per core in percentage | %    |

<!--Esx-Health-->

| Metric name     | Description                        | Unit  |
| :-------------- | :--------------------------------- | :---- |
| total_problems  | Total number of problem on the ESX | Count |
| problems        | Number of health checks in green   | Count |
| problems_yellow | Number of health checks in yellow  | Count |
| problems_red    | Number of health checks in red     | Count |

<!--Esx-Memory-->

| Metric name | Description                                  | Unit  |
| :---------- | :------------------------------------------- | :---- |
| used        | Memory used                                  | Bytes |
| overhead    | Memory overhead needed by the VMs on the ESX | Bytes |
| state       | Memory state                                 |       |

<!--Esx-Status-->

| Metric name | Description               | Unit |
| :---------- | :------------------------ | :--- |
| Status      | Overall status on the ESX |      |

<!--Esx-Swap-->

| Metric name | Description         | Unit |
| :---------- | :------------------ | :--- |
| swap_in     | Swap in rate Usage  | B/s  |
| swap_out    | Swap out rate Usage | B/s  |

<!--Esx-Vm-Count-->

| Metric name | Description                          | Unit  |
| :---------- | :----------------------------------- | :---- |
| poweredon   | Number of powered on VMs on the ESX  | Count |
| poweredoff  | Number of powered off VMs on the ESX | Count |
| suspended   | Number of suspended VMs on the ESX   | Count |

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

<!--DOCUSAURUS_CODE_TABS-->
	
<!--Online IMP Licence & IT-100 Editions-->

1. Install the Vmware2 Connector Centreon Plugin on every poller expected to monitor the devices: 
	
```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the 'Vmware ESX' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 
	
<!--Offline IMP License-->

1. Install the Vmware ESX Centreon Plugin on every poller expected to monitor the devices:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```
	
2. Install the Centreon Plugin-Pack RPM: 

```bash
yum install centreon-pack-virtualization-vmware2-esx
```
	
3. Install the 'Vmware ESX' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

<!--END_DOCUSAURUS_CODE_TABS-->
	
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
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl
	--plugin=apps::vmware::connector::plugin
	--mode=cpu-host
	--custommode=connector
	--connector-hostname='localhost'
	--connector-port='5700'
	--container='vcenter01' 
	--esx-hostname='SRV-ESX-TLS'
	--unknown-status='%{status} !~ /^connected$/i'
	--warning-status=''
	--critical-status=''
	--warning-total-cpu='80'
	--critical-total-cpu='90'
	--warning-total-cpu-mhz=''
	--critical-total-cpu-mhz=''
	--warning-cpu=''
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
