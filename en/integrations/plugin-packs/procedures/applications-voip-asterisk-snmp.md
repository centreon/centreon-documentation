---
id: applications-voip-asterisk-snmp
title: Asterisk VoIP SNMP
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Voip-Asterisk-Snmp
```

### Asterisk server configuration

After connecting with root account to your Asterisk server, you must do the
following configurations.

### SNMP mode

  - Install *snmpd* daemon.

  - Modify the file `/etc/asterisk/modules.conf` by commenting out the line
    containing `res_snmp.so`:
    
    vi /etc/asterisk/modules.conf

example:

    [modules] autoload=yes
    ... noload => res_config_pgsql.so noload => res_phoneprov.so #noload => res_snmp.so noload => res_speech.so noload => res_config_sqlite.so ...

  - Modify or create the file `/etc/asterisk/res_snmp.conf` to add the following
    parameters:
    
    vi /etc/asterisk/res\_snmp.conf
    
    \[general\] subagent = yes enabled = yes

  - Modify the file `/etc/snmp/snmpd.conf` to add some parameters:
    
    /etc/snmp/snmpd.conf

exemple:

    # Acces to Asterisk snmp
    # Asterisk user
    createUser asteriskUser SHA "password" AES
    rwuser asteriskUser priv
    # Enable AgentX support
    master agentx
    agentXSocket /var/agentx/master
    # Set permissions on AgentX socket and containing
    # directory such that process in group 'asterisk'
    # will be able to connect
    agentXPerms  0660 0550 nobody asterisk

  - Download the following 2 files and place them into /usr/share/snmp/mibs (or
    mib2c-data):
    
    wget <https://wiki.asterisk.org/wiki/display/AST/Asterisk+MIB+Definitions>
    wget <https://wiki.asterisk.org/wiki/display/AST/Digium+MIB+Definitions>

  - Restart snmpd and asterisk server:
    
    /etc/init.d/snmpd restart /etc/init.d/asterisk restart

Here is an exemple of a command to check the snmp functionality:

    snmpwalk -v 3 -u asteriskUser -l authPriv -a SHA -A "password" -x AES -X "password" <xivo serveur IP> .1.3.6.1.4.1.22736

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                         |
| :----------------------------------- | :---------------------------- |
| Host name                            | *Name of the host*            |
| Alias                                | *Host description*            |
| IP                                   | *Host IP Address*             |
| Monitored from                       | *Monitoring Poller to use*    |
| Host Multiple Templates              | App-VoIP-Asterisk-SNMP-custom |

Click on the *Save* button.
