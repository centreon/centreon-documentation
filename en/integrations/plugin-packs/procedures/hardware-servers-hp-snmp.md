---
id: pp/hardware-servers-hp-snmp
title: HP Proliant
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Servers-Hp-Snmp

## HP Insight Management Agent
Warning: The following procedure is an example. Cannot be applied on all context. The procedure is for centos 6 and hp agent 9.5.

The agent allows to get hardware information in SNMP. First, you need to
download 'hp-health' and 'hp-snmp-agents' package (can be found in [HP Support Website](http://h20565.www2.hp.com/portal/site/hpsc/public))

    rpm -i hp-health-9.50-1628.32.rhel6.x86_64.rpm hp-snmp-agents-9.50-2564.40.rhel6.x86_64.rpm

Add in */etc/snmp/snmpd.conf*:

    Following entries were added by HP Insight Management Agents
         Mon May 26 12:42:41 CEST 2014
    dlmod cmaX /usr/lib64/libcmaX64.so

Note: If you're using 32bits hardware so you have to add dlmod cmaX /usr/lib/libcmaX.so instead of dlmod cmaX /usr/lib64/libcmaX64.so

Following daemons must be reloaded:

    /etc/init.d/hp-snmp-agents restart
    /etc/init.d/snmpd restart

## Centreon configuration
### Create an HP server
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="44%" />
<col width="55%" />
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
<td align="left"><p><em>HW-Server-Hp-SNMP-custom</em></p></td>
</tr>
</tbody>
</table>

Click the *Save* button.

