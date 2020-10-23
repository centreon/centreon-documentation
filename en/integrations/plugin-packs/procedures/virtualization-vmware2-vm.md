---
id: virtualization-vmware2-vm
title: VMware VM
---
## Overview

VMware is an software compagny based in USA. VMware provides cloud computing and virtualization software and services.

The Centreon Plugin and Plugin-Packs rely on the Centreon VMWare Connector to request the vCenter SDK.

## Plugin-Pack Assets

### Monitored Objects

* Virtual Machine

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

| Rule name                      | Description                                 |
| :----------------------------- | :------------------------------------------ |
|  Virt-VMWare2-VM-HostDiscovery | Discover the VMs bound to a vCenter or ESXi |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

In addition to modes and metrics described here, it is also possible to monitor the following indicators:

* VM-Cpu: Advanced monitoring of the CPU (CPU ready)
* VM-Datastores-Iops: VM Iops usage on the Datastore
* VM-Swap: VM swap usage
* VM-Device: Check VM's devices status (e.g. VirtualCdrom)

<!--DOCUSAURUS_CODE_TABS-->

<!--Vm-Tools-->

| Metric name | Description                                                    | Unit |
| :---------- | :------------------------------------------------------------- | :--- |
| status      | Status of the VMware Tools (installed, running and up-to-date) |      |

<!--Vm-Thinprovisioning-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Status of the Thinprovisoning virtualdisks |      |

<!--Vm-Status-->

| Metric name   | Description              | Unit |
| :------------ | :----------------------- | :--- |
| status        | Overall status of the VM |      |

<!--Vm-Snapshot-->

| Metric name  | Description                                                   | Unit  |
| :----------- | :------------------------------------------------------------ | :---- |
| num_warning  | Number of VM's snapshot older than 3 days (default threshold) | Count |
| num_critical | Number of VM's snapshot older than 5 days (default threshold) | Count |

<!--Vm-Limit-->

| Metric name   | Description            | Unit  |
| :------------ | :--------------------- | :---- |
| cpu_alerts    | Alerts on CPU limit    | Count |
| memory_alerts | Alerts on Memory limit | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

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

The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the Vcenter.

The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host.

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

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the relevant Host Template "VVirt-VMWare2-Vm-custom", and configure the mandatory Macros:


| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm  |
| X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection       |
| X           | CENTREONVMWAREPORT         | By default: 5700                                       |
| X           | VMNAME                     | Name of the VM (defined in your VMWare infrastructure) |
|             | VMUUID                     | Specify The VM UUID                                    |
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
	--container='vcenter01'
	--vm-hostname='SRV-LIN-TLS'
	--filter-uuid=''
	--tools-notinstalled-status='critical'
	--tools-notrunning-status='critical'
	--tools-notup2date-status='warning'
```

Expected command output is shown below:

```bash
OK: VMTools are OK
```

This command above checks the status of the VMTools (```--plugin=apps::vmware::connector::plugin --mode=tools-vm```) of the VM **SRV-LIN-TLS** (```--vm-hostname='SRV-LIN-TLS'```).
It connects to the VMWare daemon on **localhost** (```--connector-hostname='localhost'```) on the port **5700** (```--connector-port='5700'```).
Then the command requests the container **vcenter01** (```--container='vcenter01'```) because the VM **SRV-LIN-TLS** is managed by **vcenter01**.

It will trigger :
* WARNING alarm if the VMTools are not up-to-date (```--tools-notup2date-status='warning'```)
* CRITICAL alarm if the VMTools are not running or installed (```--tools-notinstalled-status='critical' 	--tools-notrunning-status='critical'```)

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

#### UNKNOWN: Cannot find 'VirtualMachine' object |

This error message means that the Plugin didn't find the Virtual Machine.
Check the Virtual Machine name in the macro **HOSTVMNAME**, it's must fit the name defined in your VMWare infrastructure.
