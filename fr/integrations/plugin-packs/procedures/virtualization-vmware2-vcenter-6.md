---
id: virtualization-vmware2-vcenter-6
title: VMware vCenter v6
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.4.2 | `STABLE` | Apr 18 2019 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin

### Installation of the VMware daemon
Install this daemon on each needed poller:

    yum install centreon-plugin-Virtualization-VMWare-daemon

### Configuration of the VMware daemon
The daemon "centreon-vmware" has a configuration file "/etc/centreon/centreon\_vmware.pm" of the following structure:

    %centreon_vmware_config =   
        vsphere_server => {
                        'default' => {'url' => 'https://vcenter/sdk',
                                     'username' => 'XXXXXXX',
                                     'password' => 'XXXXXX'}
                        }, 
        port => 5700
    };  

Then start daemon with command:

    service centreon_vmware start

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

* The "vsphere\_server" attribute allows you to configure access to
different VirtualCenter. It is necessary to have at least the entry
'default'. So, if you have only one vcenter, you can configure it with
the name "default".
* The "url" attribute allows you to configure the URL of the vcenter.
* The "username" attribute allows you to configure the user who can
connect to the vcenter. This user must have at least "read only" access
to the vcenter.
* The "password" attribute allows you to configure the password of the
user.
* The "port" attribute allows you to configure the listening port of
"centreon-vmware" connector.


### System configuration
The daemon "centreon_vmware" is a system service that must be started by default.
After installation and configuration, you will have to perform the following procedure.

#### With SysV (Enterprise Linux 6 compatible distributions)

    chkconfig centreon_vmware on
    service centreon_vmware start

#### With SystemD (Enterprise Linux 7 compatible distributions)

    systemctl enable centreon_vmware
    systemctl start centreon_vmware

#### Checking the daemon configuration 

Please make sure that the daemon configuration works fine, by looking for errors in /var/log/centreon/centreon_vmware.log.

## Centreon configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="52%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Host name</p></td>
<td align="left"><p><em>Name of the host</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Alias</p></td>
<td align="left"><p><em>Host description</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>IP</p></td>
<td align="left"><p><em>Host IP Address</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Monitored from</p></td>
<td align="left"><p><em>Monitoring Poller to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p>Virt-VMWare2-VCenter-6-custom</p></td>
</tr>
</tbody>
</table>

Click the *Save* button.

### Host macro configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="25%" />
<col width="44%" />
<col width="18%" />
<col width="12%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
<th align="left">Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>CENTREONVMWAREPORT</p></td>
<td align="left"><p>Port of Centreon-Vmware daemon</p></td>
<td align="left"><p>5700</p></td>
<td align="left"><p>570</p></td>
</tr>
<tr class="even">
<td align="left"><p>CENTREONVMWARECONTAINER</p></td>
<td align="left"><p>Container to use</p></td>
<td align="left"><p>default</p></td>
<td align="left"><p>default</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CENTREONVMWAREHOST</p></td>
<td align="left"><p>Host of Centreon-Vmware daemon</p></td>
<td align="left"><p>localhost</p></td>
<td align="left"><p>localhost</p></td>
</tr>
<tr class="even">
<td align="left"><p>ESXNAME</p></td>
<td align="left"><p>Name of the ESX to monitor</p></td>
<td align="left"></td>
<td align="left"><p>srvi-esx</p></td>
</tr>
</tbody>
</table>

