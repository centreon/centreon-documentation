---
id: virtualization-vmware2-vcenter-5
title: VMware vCenter v5
---

## Overview

VMware is an software compagny based in USA. VMware provides cloud computing and virtualization software and services.

The Centreon Plugin and Plugin-Packs rely on the Centreon VMWare Connector to request the VCenter SDK.

## Plugin-Pack Assets

### Monitored Objects

* Snapshots
* VM-tools

### Collected Metrics

This pack uses "VMware vCenter" pack to extend monitored indicators (virtualization-vmware2-vcenter-generic).

<!--DOCUSAURUS_CODE_TABS-->

<!--Vm-Snapshot-Global-->

| Metric name  | Description                                               | Unit  |
| :----------- | :-------------------------------------------------------- | :---- |
| num_warning  | Number of snapshots older than 3 days (default treshold)  | Count |
| num_critical | Number of snapshots older than 5 days (default threshold) | Count |

<!--Vm-Tools-Global-->

| Metric name   | Description                                                   | Unit  |
| :------------ | :------------------------------------------------------------ | :---- |
| not_updated   | Number of VMs with VM-Tools not updated (default threshold)   | Count |
| not_running   | Number of VMs with VM-Tools not running (default threshold)   | Count |
| not_installed | Number of VMs with VM-Tools not installed (default threshold) | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Centreon VMWare Connector

For the VMWare monitoring, Centreon use daemon to connect and request the Vcenter.

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

1. Install the VMWare Connector Centreon Plugin on every poller expected to monitor VMWare infrastructures:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the 'Vmware vCenter v5' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

<!--Offline IMP License-->

1. Install the VMWare Connector Centreon Plugin on every poller expected to monitor the VMWare Infrastructures:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Install the Centreon Plugin-Pack RPM: 

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-5.noarch
```

3. Install the 'Vmware  vCenter v5' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the relevant Host Template "Virt-VMWare2-VCenter-5-custom", and configure the mandatory Macros:

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
