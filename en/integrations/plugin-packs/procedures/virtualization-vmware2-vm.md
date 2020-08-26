---
id: virtualization-vmware2-vm
title: VMware VM
---

## Overview

VMware is an software compagny based in USA. VMware provides cloud computing and virtualization software and services.

## Plugin-Pack Assets

### Monitored Objects

All virtual machine in the ESX 

## Collected Metrics

In addition to modes and metrics described here, it is also possible to monitor the following indicators: 

* Cpu : Cpu utilization of the device 
* Datastore-Ipos : Datastore usage Ipos 
* Device : Stats and count of VM 
* Memory : Memory usage of the device
* Swap : Swap usage

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Host-->

| Rule name                           | Description                                                    |
| :---------------------------------- | :------------------------------------------------------------- |
| Virt-VMWare2-VM-HostDiscovery       | Discover Vmware virtual machine based connector vmware and SDK |

<!--Services-->

| Rule name                                    | Description                                    |
| :------------------------------------------- | :--------------------------------------------- |
| Virt-VMWare2-Esx-Datastores-Latency-Name     | Discover the Datastores and monitor latency    |
| Virt-VMWare2-Esx-Nics-Traffic-Name           | Discover the traffic and monitor NIC           |

<!--END_DOCUSAURUS_CODE_TABS-->

## Monitored Metrics 

<!--Tools-Generic-->

| Metric name                          | Description                                  |
| :----------------------------------- | :------------------------------------------- |
| vm.tools.notupdated.current.count    | Check if Vm-Tools are update. Unit: count    |
| vm.tools.notrunning.current.count    | Check if Vm-Tools are running. Unit: count   |
| vm.tools.notinstalled.current.count  | Check if Vm-Tools are installed. Unit: count |

<!--Thinprovisioning-Generic-->

| Metric name                | Description                            |
| :------------------------- | :------------------------------------- |
| thinprovisioning_status    | Status of virtual machine provisioning |

<!--Status-Generic-->

| Metric name   | Description                |
| :------------ | :------------------------- |
| status        | Status of Virtual Machine  |

<!--Snapshot-Generic-->

| Metric name                          | Description                             |
| :----------------------------------- | :-------------------------------------- |
| vm.snapshots.warning.current.count   | Snapshots current warning. Unit : count |
| vm.snapshots.critical.current.count  | Snapshots current warning. Unit : count |

<!--Limit-->

| Metric name                  | Description                          |
| :--------------------------- | :----------------------------------- |
| vm.limit.cpu.alerts.count    | Alerts for limit cpu. Unit: count    |
| vm.limit.memory.alerts.count | Alerts for limit memory. Unit: count |
| vm.limit.disk.alerts.count   | Alerts for limit disk. Unit: count   |

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Vmware2 Connector Centreon Plugin on every poller expected to monitor the devices: 

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the 'Vmware VM' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

<!--Offline IMP License-->

1. Install the Vmware VM Centreon Plugin on every poller expected to monitor the devices:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the Centreon Plugin-Pack RPM: 

```bash
yum install centreon-pack-virtualization-vmware2-vm
```

3. Install the 'Vmware VM' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

Install this daemon on each needed poller:

```yum install centreon-plugin-Virtualization-VMWare-daemon```

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
- _username_: username with at least "read only" access to the vCenter or ESX,
- _password_: password of the username.

You can configure multiple vCenter / vSphere / ESX connections using this
structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Each entry is called a container. You need at least a "default" entry.

> You can also define the "port" attribute to change listening port.

Then start the daemon and make sure it is configured to start at server boot:

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

## Configuration

Adding a new host into Centreon, apply the relevant host template matching your instance/cluster type. All of the host templates begin with *Virt-VMWare2-Vm-*. Once the template set, you have to set values.


| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm  |
| X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection       |
| X           | CENTREONVMWAREPORT         | By default: 5700                                       |
|             | VMNAME                     | VM name to use                                         |
|             | VMUUID                     | Specify your VM UUID                                   |
|             | VMWAREEXTRAOPTIONS         | Customize it with your own if needed                   |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for ?

Once you've installed the plugin, you can test it logging with centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl
	--plugin=apps::vmware::connector::plugin
	--mode=tools-vm
	--custommode=connector
	--connector-hostname='localhost'
	--connector-port='5700'
	--container='default' 
	--vm-hostname=''
	--filter-uuid=''
	--tools-notinstalled-status='critical' 
	--tools-notrunning-status='critical' 
	--tools-notup2date-status='warning' 
```

This check monitors if Vm-tools is installed (```--mode=tools-vm```) of a ESX. The hostname to use connector vmware and is config file is localhost (```--mode=localhost```) The port is 5700 (```connector-port=5700```)

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
    --mode=tools-vm  \
    --help
```

### Error Cannot find 'HostSuystem' object

Check user can read ESX information
