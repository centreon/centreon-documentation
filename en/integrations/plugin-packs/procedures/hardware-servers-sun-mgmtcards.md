---
id: pp/hardware-servers-sun-mgmtcards
title: Sun MgmtCard
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Nov 22 2017 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Hardware-Servers-Sun-Mgmtcards
 The plugin has 3 kind of modes, it depends of the sun management
card to monitor :

-   Telnet:
    -   Dependency: Perl Module Net::Telnet (yum
        install perl-Net-Telnet.noarch)
    -   Host macros: 'TELNETUSERNAME', 'TELNETPASSWORD'
-   SSH:
    -   Dependency: 'plink' command (no ssh key exchange needed)
    -   Host macros: 'SSHUSERNAME', 'SSHPASSWORD'
-   IPMI:
    -   Dependency: 'ipmitool' command (yum install ipmitool)
    -   Host macros: 'IPMIUSERNAME', 'IPMIPASSWORD'

### Sun Server Hardware List

| Host Template              | Method  | Hardware             |Mgmt Card  |
-----------------------------|---------|----------------------|-----------|
| HW-Server-Sun-Alom4v-SSH   | SSH     | T1xxx, T2xxx         | ALOM4v    |
| HW-Server-Sun-Ilom-SSH     | SSH     | T3-x, T4-x, T5xxx    | ILOM      |
| HW-Server-Sun-Alom-TELNET  | Telnet  | v240, v245, v440,... | ALOM      |
| HW-Server-Sun-Sf2xx-TELNET | Telnet  | sf280                | RSC       |
| HW-Server-Sun-Sfxxxx-TELNET| Telnet  | sfXXXX (sf6900, ScpApp sf6800, sf3800,...)| RSC |
| HW-Server-Sun-V4xx-TELNET  | Telnet  | v4xx (v490, v480)    | RSC       |
| HW-Server-Sun-V8xx-TELNET  | Telnet  | v8xx (v890, v880)    | RSC       |
| HW-Server-Sun-Ilom-IPMITOOL| Ipmi    | x4100,x4600,...      | ILOM      |

### My Sun Hardware is not the list
Following hardware can be also monitored:

| Hardware                               | Host template Service                                     |
-----------------------------------------|------------------------------------------------------------
| Mseries                                | HW-Server-Sun-Mseries-SNMP Linked with the host template  |
| sf12k, sf15k, sf20k, sf25k             | HW-Server-Sun-Sfxxk-PSSH Linked with the host template    |
| v120, v1280 and others OS-Solaris-NRPE | OS-Solaris-Prtdiag-Status-NRPE-Custom                     |


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

