---
id: virtualization-vmware2-esx
title: VMware ESX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.5.0 | `STABLE` | Oct 15 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

### Centreon VMware daemon

#### Installation

Install this daemon on each needed poller:

``` shell
yum install centreon-plugin-Virtualization-VMWare-daemon
```

#### Configuration

To configure the access to your infrastructure, edit the
"/etc/centreon/centreon\_vmware.pm" configuration file:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'default' => {
            'url' => 'https://<ip_hostname>/sdk',
            'username' => '<username>',
            'password' => '<password>'
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
        'default' => {
            'url' => 'https://<ip_hostname>/sdk',
            'username' => '<username>',
            'password' => '<password>'
        },
        'other' => {
            'url' => 'https://<ip_hostname>/sdk',
            'username' => '<username>',
            'password' => '<password>'
        },
    },
    port => 5700
);

1;
```

Each entry is called a container.

> You can also define the "port" attribute to change listening port.

Then start the daemon and make sure it is configured to start at server boot:

``` shell
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Make sure that the daemon configuration works fine by looking for errors in
"/var/log/centreon/centreon\_vmware.log".

## Centreon configuration

### Create a host using the appropriate template

Go to `Configuration > Hosts` and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | Virt-VMWare2-ESX-custom    |

Click the *Save* button.

### Host macro configuration

The following macros must be configured on host:

| Macro                   | Description                    | Default value | Example     |
| :---------------------- | :----------------------------- | :------------ | :---------- |
| CENTREONVMWAREHOST      | Host of centreon_vmware daemon | localhost     | 10.1.2.3    |
| CENTREONVMWAREPORT      | Port of centreon_vmware daemon | 5700          | 5701        |
| CENTREONVMWARECONTAINER | Defined container to use       | default       | srv-vcenter |
| ESXNAME                 | Name of the ESX to monitor     |               | srv-esx     |
