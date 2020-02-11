---
id: pp-hardware-storage-ibm-ds4000-smcli
title: IBM DS4000
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Storage-Ibm-Ds4000-Smcli
 The plugin need the installation of SMcli command.

When you install the package, choose 'Management Station':

    Please choose the Install Set to be installed by this installer.

    ->1- Typical (Full Installation)
      2- Management Station
      3- Host
      
      4- Customize...
      
    ENTER THE NUMBER FOR THE INSTALL SET, OR PRESS <ENTER> TO ACCEPT THE
    DEFAULT : 2

After install, monitoring engine user needs root privileges to execute
the command :

    chmod 4775 /opt/dell/mdstoragemanager/client/SMcli

Please ask to your support for the package. You can have following error
if the storage firmware and SMcli client are not accurate :

    The XXXXX Modular Disk storage management software (version 11.10.0G06.0020) you are attempting to use is not compatible with the firmware on the RAID controller modules in Storage Array ANG1-D90002.

    If you have recently updated your RAID controller module firmware, you need to make sure that its compatible PowerVault Modular Disk storage management software has also been installed on all clients connected to this Storage Array.

    If the appropriate version is not available, please provide your Customer Support Representative with the following information.

    RAID Controller Module firmware version: 06.60.34.00 RAID Controller
    RAID Controller Module appware version: 06.60.34.00 Device API version required:
    Device API version required: devmgr.v0960api00.Manager

SMcli from IBM or Dell can work with the storage. If you use IBM
package, set following macros:

* Host macro 'CLIEXTRAOPTIONS' = `--smcli-path='/opt/IBM_DS/client'`
* Service macro 'EXTRAOPTIONS' = `--verbose --storage-command='show storageSubsystem healthstatus;'`

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="35%" />
<col width="64%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">Value</th>
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
<td align="left"><p>Template provided by the plugin-pack</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

