---
id: pp-applications-voip-asterisk-snmp
title: Asterisk VoIP SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Oct  2 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Voip-Asterisk-Snmp


### Asterisk server configuration
After connecting with root account to your Asterisk server, you must do
the following configurations.

### SNMP mode
* Install *snmpd* daemon.
* Modify the file `/etc/asterisk/modules.conf` by commenting out the
    line containing `res_snmp.so`:

    vi /etc/asterisk/modules.conf

example: 

    [modules] autoload=yes
    ... noload => res_config_pgsql.so noload => res_phoneprov.so #noload => res_snmp.so noload => res_speech.so noload => res_config_sqlite.so ...

* Modify or create the file `/etc/asterisk/res_snmp.conf` to add the following parameters:


    vi /etc/asterisk/res\_snmp.conf

    [general]
    subagent = yes
    enabled = yes

* Modify the file `/etc/snmp/snmpd.conf` to add some parameters:


    /etc/snmp/snmpd.conf

exemple:

    Acces to Asterisk snmp
    Asterisk user
    createUser asteriskUser SHA "password" AES
    rwuser asteriskUser priv
    Enable AgentX support
    master agentx
    agentXSocket /var/agentx/master
    Set permissions on AgentX socket and containing
    directory such that process in group 'asterisk'
    will be able to connect
    agentXPerms  0660 0550 nobody asterisk

* Download the following 2 files and place them into
    /usr/share/snmp/mibs (or mib2c-data):


    wget https://wiki.asterisk.org/wiki/display/AST/Asterisk+MIB+Definitions
    wget https://wiki.asterisk.org/wiki/display/AST/Digium+MIB+Definitions

* Restart snmpd and asterisk server:


    /etc/init.d/snmpd restart /etc/init.d/asterisk restart

Here is an exemple of a command to check the snmp functionality:

    snmpwalk -v 3 -u asteriskUser -l authPriv -a SHA -A "password" -x AES -X "password" <xivo serveur IP> .1.3.6.1.4.1.22736

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="58%" />
<col width="41%" />
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
<td align="left"><p>App-VoIP-Asterisk-SNMP-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p><em>Relations &gt; Parent Hostgroups</em> tab</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

