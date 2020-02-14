---
id: virtualization-vmware2-vcenter-generic
title: VMware vCenter
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.4.5 | `STABLE` | May 10 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

### Installation of the VMware daemon

Install this daemon on each needed poller:

``` shell
yum install centreon-plugin-Virtualization-VMWare-daemon
```

### Configuration of the VMware daemon

The daemon "centreon-vmware" has a configuration file "/etc/centreon/centreon\_vmware.pm" of the following structure:

``` 
%centreon_vmware_config =   
    vsphere_server => {
                    'default' => {'url' => 'https://vcenter/sdk',
                                 'username' => 'XXXXXXX',
                                 'password' => 'XXXXXX'}
                    }, 
    port => 5700
};  
```

Then start daemon with command:

    # service centreon_vmware start

You can configure multiple vCenter / vSphere / ESX connections using this structure:

    %centreon_vmware_config = (
        vsphere_server => {
                        'default' => {'url' => 'https://vcenter/sdk',
                                     'username' => 'XXXXXXX',
                                     'password' => 'XXXXXX'},
                        'other' => {'url' => 'https://other_vcenter/sdk',
                                     'username' => 'XXXXXXX',
                                     'password' => 'XXXXXX'},
                        },
        port => 5700
    );
    1;

Notice: use "CENTREONVMWARECONTAINER" host macro definition to select your configuration.

  - The "vsphere\_server" attribute allows you to configure access to different VirtualCenter. It is necessary to have
    at least the entry 'default'. So, if you have only one vcenter, you can configure it with the name "default".
  - The "url" attribute allows you to configure the URL of the vcenter.
  - The "username" attribute allows you to configure the user who can connect to the vcenter. This user must have at
    least "read only" access to the vcenter.
  - The "password" attribute allows you to configure the password of the user.
  - The "port" attribute allows you to configure the listening port of "centreon-vmware" connector.

### System configuration

The daemon "centreon\_vmware" is a system service that must be started by default. After installation and configuration,
you will have to perform the following procedure.

#### With SysV (Enterprise Linux 6 compatible distributions)

    chkconfig centreon_vmware on
    service centreon_vmware start

#### With SystemD (Enterprise Linux 7 compatible distributions)

    systemctl enable centreon_vmware
    systemctl start centreon_vmware

#### Checking the daemon configuration

Please make sure that the daemon configuration works fine, by looking for errors in
/var/log/centreon/centreon\_vmware.log.

## Centreon configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

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

| Macro                   | Description                    | Default value | Example   |
| :---------------------- | :----------------------------- | :------------ | :-------- |
| CENTREONVMWAREPORT      | Port of Centreon-Vmware daemon | 5700          | 570       |
| CENTREONVMWARECONTAINER | Container to use               | default       | default   |
| CENTREONVMWAREHOST      | Host of Centreon-Vmware daemon | localhost     | localhost |
| ESXNAME                 | Name of the ESX to monitor     |               | srvi-esx  |


